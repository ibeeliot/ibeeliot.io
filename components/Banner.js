import Typewriter from 'typewriter-effect';

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
        <ul className="actions">
          <li>
            <a href="#one" className="button next scrolly">
              About Me
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Banner;
