import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className='menu'>
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
        </nav>
    )
}

export default Menu;