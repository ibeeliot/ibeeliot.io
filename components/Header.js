import PropTypes from 'prop-types';
// import Link from 'next/link';

const Header = props => (
  <header id="header" className="alt">
    {/* can activate if LOGO available but i got none right now */}

    {/* <Link href="/">
      <a className="logo">
        <strong>logo</strong> <span>eliot's logo</span>
      </a>
    </Link> */}
    <nav>
      <a
        className="menu-link"
        onClick={props.onToggleMenu}
        href="javascript:;"
      ></a>
    </nav>
  </header>
);

Header.propTypes = {
  onToggleMenu: PropTypes.func
};

export default Header;
