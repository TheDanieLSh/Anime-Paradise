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
                    <GoodsList />
                </div>
            );
        case 'dakimakuras':
            return (
                <div className="pageContent">
                    <GoodsList />
                </div>
            );
        case 'manga':
            return (
                <div className="pageContent">
                    <GoodsList />
                </div>
            );
        case 'other':
            return (
                <div className="pageContent">
                    <GoodsList />
                </div>
            );
        default:
            return ("ERROR");
    }
}

export default Pages;