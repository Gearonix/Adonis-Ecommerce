export enum Lengths {
  TITLE = 40,
  IMAGE = 200,
  LONGTEXT = 60,
  MODEL = 50,
  ID = 8,
  TINYTEXT = 10,
  HASH = 100,
  TOKEN = 300,
  TINY_TITLE = 20,
}

export enum Roles {
  SALESMAN = 'SALESMAN',
  CUSTOMER = 'CUSTOMER',
}

export enum FileDirectories{
  USER_AVATAR = 'user_avatars',
  USER_BACKGROUND = 'user_backgrounds',
  PRODUCT_IMAGES = 'product_images',
  POST_IMAGES = 'post_images'
}

export enum SocketGateWays{
  MESSENGER = 'messenger',
  AUTH = 'auth'
}

export enum UserStatus{
  ONLINE = 'online',
  OFFLINE = 'offline'
}


export const PAGE_LIMIT = 6 as const
