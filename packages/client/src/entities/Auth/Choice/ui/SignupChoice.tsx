import {FC} from 'react';
import s from './style.module.scss'
import Link from "next/link";
import {AiOutlineApi, AiOutlineHome, GiTopHat} from "icons";
import {Button} from "shared/ui";

const SignupChoice: FC = () => {
    return <div className={s.signup_main}>
        <div className={s.wrapper}>
            <div className={s.home}>
                <Link href={'/'}>
                    <AiOutlineHome/>
                </Link>
            </div>
            <h1 className={s.title}>Who are you?</h1>
            <div className={s.choice_container}>
                <Link href={'/signup/customer'}>
                    <div className={s.choice_block}>
                        <AiOutlineApi/>
                    </div>
                </Link>
                <Link href={'/signup/salesman'}>
                    <div className={s.choice_block}>
                        <GiTopHat/>
                    </div>
                </Link>
                <Link href={'/signup/customer'}>
                    <Button w={'150px'} color={'greyBordered'}>
                        Customer
                    </Button>
                </Link>
                <Link href={'/signup/salesman'}>
                    <Button w={'150px'}>
                        Salesman
                    </Button>
                </Link>
            </div>
            <p>Already have an account? <Link href={'/login'}>
                <span>Log in</span>
            </Link></p>
        </div>
    </div>

}

export default SignupChoice