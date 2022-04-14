import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <NavLink to={'/completed'}>Completed</NavLink>
      <NavLink to={'/active'}>Active</NavLink>
      <NavLink to={'/'}>All</NavLink>
    </header>
  );
}

export default Header;