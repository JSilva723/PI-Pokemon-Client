import { Link } from 'react-router-dom';
import { Search } from './Search';
import { Order } from './Order';
import { Filter } from './Filter';

export const Header = () => {
  return (
    <header>
      <nav>
        <Filter/>
        <Order/>
        <Search />
        <Link to="/create">Crear Poke</Link>
      </nav>
    </header>
  );
};