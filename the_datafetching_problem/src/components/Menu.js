import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="">Main</Link>
        </li>
        <li>
          <Link to="figures/1">Figures</Link>
        </li>
        <li>
          <Link to="dakimakuras/1">Dakimakuras</Link>
        </li>
        <li>
          <Link to="manga/1">Manga</Link>
        </li>
        <li>
          <Link to="other/1">Other merch</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
