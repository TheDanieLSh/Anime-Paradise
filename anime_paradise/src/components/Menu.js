import { Link, useParams } from 'react-router-dom';

function Menu() {
    const { section } = useParams();
    let sectionName;
    switch (section) {
        case 'figures':
            sectionName = 'Фигурки';
            break
        case 'dakimakuras':
            sectionName = 'Дакимакуры';
            break
        case 'manga':
            sectionName = 'Манга';
            break
        case 'other':
            sectionName = 'Прочий мерч'
            break
        default:
            sectionName = 'Главная'
            break
    }

    const allSections = [null, 'figures', 'dakimakuras', 'manga', 'other'];
    const currentSections = allSections.filter(sec => sec != section);
    const currentList = currentSections.map(item => {
        function returnRussian() {
            switch (item) {
                case 'figures':
                    return 'Фигурки';
                case 'dakimakuras':
                    return 'Дакимакуры';
                case 'manga':
                    return 'Манга';
                case 'other':
                    return 'Прочий мерч';
                default:
                    return 'Главная';
            }
        }
        {
            "url": item,
            "russian": returnRussian();
        }
    })

    function menuAppear() {
        const menuList = document.querySelector('.menuList');
        menuList.style.display = 'block';
    }

    return (
        <nav className='menu'>
            <div className='desktop_menu'>
                <ul>
                    <li>
                        <Link to="">Главная</Link>
                    </li>
                    <li>
                        <Link to="figures/1">Фигурки</Link>
                    </li>
                    <li>
                        <Link to="dakimakuras/1">Дакимакуры</Link>
                    </li>
                    <li>
                        <Link to="manga/1">Манга</Link>
                    </li>
                    <li>
                        <Link to="other/1">Прочий мерч</Link>
                    </li>
                </ul>
            </div>
            <div className='mobile_menu'>
                <div className='currentSection' onClick={menuAppear}>{sectionName}</div>
                <ul className='menuList'>
                    {currentList.map(item => <li key={item}><Link to={ }>{item}</Link></li>)}
                </ul>
            </div>
        </nav>
    )
}

export default Menu;