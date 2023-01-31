import {MutableRefObject, ReactNode} from "react";
import callbackSprings from "./config/callbackSprings";
import springs from "shared/lib/animations/config/springs";


export interface CallbackSprings {
    [key: string]: (param?: string | number) => [Object, Object[], Object?]
}

export interface Springs {
    [key: string]: (param?: string | number) => { from: Object, to: Object, config?: Object }
}

export interface WithSpringProps {
    className?: string,
    children: ReactNode,
    type?: keyof typeof springs,
    param?: string | number,
}


export interface ApiAnimationProps extends WithSpringProps {
    onClick?: () => void,
    type: keyof typeof callbackSprings,
    subscriber?: MutableRefObject<undefined | HTMLElement>
}