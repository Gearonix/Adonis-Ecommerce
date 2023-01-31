import {FC} from 'react';
import s from "./style.module.scss";
import {Button, PrimarySelect} from "shared/ui";
import {useAdaptive} from "shared/helpers/hooks";
import {AiOutlineSearch} from 'icons'

const HeaderSearch: FC = () => {
    const isMobile = useAdaptive(476)
    return isMobile ? <div className={s.mobile_search}>
            <AiOutlineSearch/>
            <input placeholder={'Search'}/>
        </div>
        : <div className={s.search}>
            <input className={s.search_input} placeholder={'Search'}/>
            <PrimarySelect values={['Option1', 'Option2']}/>
            <Button w={'90px'}>
                Search
            </Button>
        </div>
}


export default HeaderSearch