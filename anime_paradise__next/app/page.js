export default function App() {
    return (
        <div className="pageContent" data-main="true">
            <p>Новинки</p>
            <GoodsList goods="novelties" />
            <p>Топ продаж</p>
            <GoodsList goods="hot" />
        </div>
    )
}