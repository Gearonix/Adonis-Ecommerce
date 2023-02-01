import {AxiosResponse as AxiosRes} from "axios";

export type Nullable<T> = null | T

export type ObjectNullable<T> = { [K in keyof T]: T[K] | null }


export type AxiosResponse<T> = Promise<AxiosRes<T>>
