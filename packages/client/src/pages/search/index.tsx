import Head from "next/head";
import {FC} from "react";
import {SearchAside} from "widgets/SearchPage/SearchAside";
import {SearchHeader} from "widgets/SearchPage/SearchHeader";
import {RecommendedItems, SearchList} from "widgets/SearchLists";
import {MuiPagination} from "mui";
import {NavigationTitle} from "shared/ui";
import {ExtraServices} from "entities/Banners/ExtraServices";
import {WithSpring} from "shared/lib/animations";

const SearchPage: FC = () => {
    return <WithSpring>
        <NavigationTitle>Home {'>'} Search</NavigationTitle>
        <main className='search_page'>
            <Head>
                <title>Adonis - Search items</title>
            </Head>
            <SearchAside/>
            <div style={{position: 'relative'}}>
                <SearchHeader/>
                <SearchList/>
                <MuiPagination/>
            </div>
        </main>
        <ExtraServices/>
        <RecommendedItems/>
    </WithSpring>
}


export default SearchPage;