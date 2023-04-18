import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className='menu'>
            <ul>
                <li>
                    <Link to="">Главная</Link>
                </li>
                <li>
                    <Link to="figures">Фигурки</Link>
                </li>
                <li>
                    <Link to="dakimakuras">Дакимакуры</Link>
                </li>
                <li>
                    <Link to="manga">Манга</Link>
                </li>
                <li>
                    <Link to="other">Прочий мерч</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;