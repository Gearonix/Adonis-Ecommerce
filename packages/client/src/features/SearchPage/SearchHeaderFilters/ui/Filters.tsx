import React, {FC} from 'react'
import s from "entities/SearchPage/SearchHeader/ui/style.module.scss";
import {CheckBoxControl, SizeButtons} from "mui";
import {PrimarySelect} from "shared/ui";


const SearchHeaderFilters: FC = () => {
    return <div className={s.controls_buttons}>
        <CheckBoxControl title={'Verified only'} idx={1}/>
        <PrimarySelect values={['All category', 'Option 1']}/>
        <SizeButtons/>
    </div>
}

export default SearchHeaderFilters