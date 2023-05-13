import { useParams } from 'react-router-dom';
import GoodsList from './GoodsList';
import Pages from './Pages';

function Sections(props) {
    const params = useParams();
    console.log(params);
    switch (props.section) {
        case 'main':
            return (
                <div className="pageContent" data-main="true">
                    <p>Новинки</p>
                    <GoodsList goods="novelties" />
                    <p>Топ продаж</p>
                    <GoodsList goods="hot" />
                </div>
            );
        case 'figures':
            return (
                <div className="pageContent">
                    <GoodsList goods='figures' />
                    <Pages goods='figures' />
                </div>
            );
        case 'dakimakuras':
            return (
                <div className="pageContent">
                    <GoodsList goods='dakimakuras' />
                    <Pages goods='dakimakuras' />
                </div>
            );
        case 'manga':
            return (
                <div className="pageContent">
                    <GoodsList goods='manga' />
                    <Pages good='manga' />
                </div>
            );
        case 'other':
            return (
                <div className="pageContent">
                    <GoodsList goods='others' />
                    <Pages goods='others' />
                </div>
            );
        default:
            return ("ERROR");
    }
}

export default Sections;