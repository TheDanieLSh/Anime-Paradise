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
        return {
            "url": item ? (item + '/1') : '',
            "russian": returnRussian(),
        }
    })

    function menuAppear() {
        document.querySelector('.menuList').classList.add('menu_opened');
    }

    // const menuToggleArea = document.querySelector('.menuToggleArea');
    // const menu = document.querySelector('.mobile_menu');
    // const menuList = document.querySelector('.menuList');
    // menu && menu.addEventListener('click', () => {
    //     if (menuList.classList.contains('menu_opened')) {
    //         menuList.classList.remove('menu_opened')
    //     } else {
    //         console.log(menuList.classList);
    //         menuList.classList.add('menu_opened')
    //     }
    // })
    // menuToggleArea && menuToggleArea.addEventListener('click', () => {
    //     if (menuList.classList.contains('menu_opened')) {
    //         menuList.classList.remove('menu_opened')
    //     }
    // })

    document.body.addEventListener('click', e => {
        const menuList = document.querySelector('.menuList');
        if (e.target.closest('.mobile_menu')) {
            if (menuList.style.display == '') {
                menuList.style.display = 'block';
            } else {
                menuList.style.display = '';
            }
            
        }
    });

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
            <div className='mobile_menu' >
                <div className='currentSection'>{sectionName}</div>
                <ul className='menuList'>
                    {currentList.map(item => <li key={item.url}><Link to={'/' + item.url}>{item.russian}</Link></li>)}
                </ul>
            </div>
        </nav>
    )
}

export default Menu;