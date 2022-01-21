// ** Dropdowns Imports
import { Fragment } from 'react';

// ** Third Party Components
import { Sun, Moon, Menu } from 'react-feather';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import themeConfig from '@configs/themeConfig';
import UserDropdown from './UserDropdown';

import HorizontalMenu from '../horizontal-menu';

const NavbarUser = (props) => {
  // ** Props
  const { skin, setSkin, setMenuVisibility } = props;

  // ** Function to toggle Theme (Light/Dark)
  // const ThemeToggler = () => {
  //   if (skin === 'dark') {
  //     return <Sun className="ficon" onClick={() => setSkin('light')} />;
  //   }
  //   return <Moon className="ficon" onClick={() => setSkin('dark')} />;
  // };

  return (
    <>
      <ul className="navbar-nav d-xl-none d-flex align-items-center">
        <NavItem className="mobile-menu mr-auto">
          <NavLink className="nav-menu-main menu-toggle hidden-xs is-active" onClick={() => setMenuVisibility(true)}>
            <Menu className="ficon" />
          </NavLink>
        </NavItem>
      </ul>
      <div className="bookmark-wrapper d-flex align-items-center">
        <Link className="brand-logo" to="/" onClick={(e) => e.preventDefault()}>
          <img src={themeConfig.app.appLogoImage} alt="Canteen Hub" className="" />
        </Link>
        {/* <NavItem className="d-none d-lg-block">
          <NavLink className="nav-link-style">
            <ThemeToggler />
          </NavLink>
        </NavItem> */}
      </div>
      <HorizontalMenu />
      <ul className="nav navbar-nav justify-content-center align-items-center ml-auto">
        <UserDropdown />
      </ul>
    </>
  );
};
export default NavbarUser;
