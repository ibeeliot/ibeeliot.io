import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect';
import Menu from './Menu';

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major"></header>
      <div className="content">
        <Typewriter
          options={{
            strings: ['hi, i am eliot', 'a software engineer'],
            autoStart: true,
            loop: true,
            skipAddStyles: true
          }}
        />
      </div>
      <div>
        {/* <ul className="actions">
          <li> */}
        {/* <a href="#one" className="button next scrolly">
              About Me
            </a> */}
        {/* <a
              className="menu-link button next"
              onClick={props.onToggleMenu}
              href="javascript:;"
            >
              About me
            </a>
          </li> */}
        {/* </ul> */}
        <Menu></Menu>
      </div>
    </div>
  </section>
);

Banner.propTypes = {
  onToggleMenu: PropTypes.func
};

export default Banner;
