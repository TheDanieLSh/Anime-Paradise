import GoodsList from './GoodsList';

function Pages(props) {
    switch (props.page) {
        case 'main':
            return (
                <div className="pageContent">
                    <p>Новинки</p>
                    <GoodsList />
                    <p>Топ продаж</p>
                    <GoodsList />
                </div>
            );
        case 'figures':
            return (
                <div className="pageContent">
                    <GoodsList goods='figures' />
                </div>
            );
        case 'dakimakuras':
            return (
                <div className="pageContent">
                    <GoodsList goods='dakimakuras' />
                </div>
            );
        case 'manga':
            return (
                <div className="pageContent">
                    <GoodsList goods='manga' />
                </div>
            );
        case 'other':
            return (
                <div className="pageContent">
                    <GoodsList goods='others' />
                </div>
            );
        default:
            return ("ERROR");
    }
}

export default Pages;