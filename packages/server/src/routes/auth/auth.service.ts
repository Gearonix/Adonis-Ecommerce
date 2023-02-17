import {forwardRef, HttpException, HttpStatus, Inject} from '@nestjs/common'
import {JwtService} from '@nestjs/jwt'
import {UsersService} from '@app/routes/users'
import * as bcrypt from 'bcryptjs'
import {Roles, ServerExceptions} from '@app/lib'
import {GoogleDTO, RegisterUserDTO, UserLoginDTO} from '../users'
import {GoogleData} from '@app/routes/users/dto/googleDTO'
import {ReturnToken} from '@app/routes/auth/types/returnTypes'
import {UsersModel} from '@app/models'
import {RequestContext} from 'nestjs-request-context'

export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(userDto: UserLoginDTO): Promise<ReturnToken> {
    const userId = await this.validateUser(userDto)
    return this.generateToken(userId)
  }

  async registration(user: RegisterUserDTO): Promise<ReturnToken> {
    const candidate = await this.usersService.getIdAndPasswordByEmail(
        user.email,
    )

    if (candidate) {
      throw new HttpException(
          ServerExceptions.USER_ALREADY_EXISTS,
          HttpStatus.ACCEPTED,
      )
    }
    const hashPassword = await bcrypt.hash(user.password, 5)
    const {userId} = await this.usersService.createUser({
      ...user,
      password: hashPassword,
    })

    return this.generateToken(userId)
  }

  async signupWithGoogle({jwt, role}: GoogleDTO): Promise<ReturnToken> {
    const googleData = await this.jwtService.decode(jwt)
    const user = this.usersService.convertGoogleData(
      googleData as GoogleData,
      role,
    )
    return await this.registration(user)
  }

  async loginWithGoogle(jwt: string): Promise<ReturnToken> {
    const googleData = await this.jwtService.decode(jwt)
    const user = await this.usersService.getIdByGoogleSub(googleData.sub)
    if (!user) {
      return await this.signupWithGoogle({jwt, role: Roles.CUSTOMER})
    }
    return await this.generateToken(user.userId)
  }

  async authByCookie() {
    const req = RequestContext.currentContext.req
    const AUTH_TOKEN = req.cookies.AUTH_TOKEN

    if (!AUTH_TOKEN) {
      throw new HttpException(
          ServerExceptions.NO_COOKIE,
          HttpStatus.NO_CONTENT,
      )
    }
    return {token: AUTH_TOKEN}
  }

  async getMe(): Promise<UsersModel> {
    try {
      const userId = await this.getUserId()
      return this.usersService.getUserById(userId)
    } catch (e) {
      throw new HttpException(
          ServerExceptions.INCORRECT_TOKEN,
          HttpStatus.NO_CONTENT,
      )
    }
  }
  async getUserId(): Promise<number> {
    const req = RequestContext.currentContext.req
    let token = req?.headers?.authorization?.split(' ')[1]
    if (!token) {
      token = req?.cookies?.AUTH_TOKEN
    }
    try {
      const tokenData = await this.jwtService.verify(token)
      const userId: number = tokenData.payload.userId
      if (!userId) {
        throw new HttpException(
            ServerExceptions.NO_TOKEN,
            HttpStatus.NO_CONTENT,
        )
      }
      return userId
    } catch (e) {
      throw new HttpException(
          ServerExceptions.INCORRECT_TOKEN,
          HttpStatus.NO_CONTENT,
      )
    }
  }

  async returnWithAuthCookie(tokenData: ReturnToken): Promise<ReturnToken> {
    const res = RequestContext.currentContext.res
    res.cookie('AUTH_TOKEN', tokenData.token)
    return tokenData
  }

  private async generateToken(userId: number): Promise<ReturnToken> {
    const token = this.jwtService.sign(
        {payload: {userId}},
        {expiresIn: '1h'},
    )
    return {token}
  }

  private async validateUser(userDto: UserLoginDTO) {
    const user = await this.usersService.getIdAndPasswordByEmail(userDto.email)

    if (!user) {
      throw new HttpException(
          ServerExceptions.USER_NOT_EXIST,
          HttpStatus.NO_CONTENT,
      )
    }

    const {password, userId} = user

    const passwordEquals = await bcrypt.compare(userDto.password, password)

    if (passwordEquals) {
      return userId
    }

    throw new HttpException(
        ServerExceptions.INCORRECT_PASSWORD,
        HttpStatus.ACCEPTED,
    )
  }
  async getUserIdByPayload(): Promise<number> {
    const req = RequestContext.currentContext.req
    return req.user.payload.userId
  }
}
