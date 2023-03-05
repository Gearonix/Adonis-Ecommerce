import { FC } from 'react'
import { FormattedUser } from 'widgets/Profile/store/selectors'
import { BsInfoLg, GiTopHat, SlPresent, AiOutlineCar, BsBuilding, CiAt } from 'shared/ui/icons'
import s from './style.module.scss'
import { Helpers } from 'shared/lib/helpers'
import Link from 'next/link'
import { routes } from 'shared/config/routes'
import { CFC } from 'shared/types/components'
import { Displayed } from 'shared/lib/components'
import { useTheme } from 'shared/lib/hooks'

interface UserInfoProps{
    user: FormattedUser
}

const UserInfo: FC<UserInfoProps> = ({ user }) => {
  const helpers = new Helpers()
  const { theme } = useTheme()
  return <div className={s[theme || 'light']}>
    <InfoContainer>
      <InfoCell Icon={BsInfoLg}>{helpers.cropped(user.description, 30)}</InfoCell>
      <div className={s.info_cell}>
        <CiAt/>
        <Link href={`${routes.USERS}/${user.userId}`}>
          <span>Id:<span className={s.link}>{user.userId}</span></span>
        </Link>
      </div>
    </InfoContainer>
    <InfoContainer>
      <InfoCell Icon={SlPresent} title={'Registration date'}>
        {user.date}
      </InfoCell>
    </InfoContainer>
    <InfoContainer condition={Boolean(user.country && user.city)}>
      <InfoCell Icon={AiOutlineCar} title={'Country'}>
        {user.country}
      </InfoCell>
      <InfoCell Icon={BsBuilding} title={'City'}>
        {user.city}
      </InfoCell>
    </InfoContainer>
    <InfoContainer>
      <InfoCell Icon={GiTopHat} title={'Role'}>
        {helpers.toNormalRole(user.role)}
      </InfoCell>
    </InfoContainer>
  </div>
}

const InfoContainer : CFC<{condition?: boolean}> = ({ children, condition }) => {
  return <Displayed condition={!!children && condition !== false}>
    <div className={s.info_container}>
      {children}
    </div>
  </Displayed>
}

const InfoCell: CFC<{Icon: FC, title?: string}> = ({ Icon, children, title }) => {
  return <Displayed condition={!!children}>
    <div className={s.info_cell}>
      <Icon/>
      <span>{title && `${title}:`} {children}</span>
    </div>
  </Displayed>
}


export default UserInfo