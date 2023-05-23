import { Routes, Route } from 'react-router-dom';
import GoodsList from './GoodsList';
import Pages from './Pages';

function Sections() {
    return (
        <Routes>
            <Route path='' element={<>
                <div className="pageContent" data-main="true">
                    <p>Новинки</p>
                    <GoodsList goods="novelties" />
                    <p>Топ продаж</p>
                    <GoodsList goods="hot" />
                </div>
            </>} />
            <Route path='/:section/:page_number' element={<>
                <div className='pageContent'>
                    <GoodsList />
                    <Pages />
                </div>
            </>} />
        </Routes>
    )

    // const { section } = useParams();
    // if (section === '') {
    //     return (
    //         <div className="pageContent" data-main="true">
    //             <p>Новинки</p>
    //             <GoodsList goods="novelties" />
    //             <p>Топ продаж</p>
    //             <GoodsList goods="hot" />
    //         </div>
    //     )
    // } else return (
    //     <div className='pageContent'>
    //         <Routes>
    //             <Route path='/:section/:page_number' element={<>
    //                 <GoodsList goods={section} />
    //                 <Pages goods={section} />
    //             </>} />
    //         </Routes>
    //     </div>
    // )
}

export default Sections;