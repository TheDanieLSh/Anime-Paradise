import GoodsList from "./components/GoodsList"

export default function() {
    return (
        <div className="pageContent" data-main="true">
            <h2>Новинки</h2>
            <GoodsList goods="novelties" />
            <h2>Топ продаж</h2>
            <GoodsList goods="hot" />
        </div>
    )
}