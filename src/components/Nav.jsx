// assets
import Logo from '../images/logo.svg';
import Toggle from '../images/icon-hamburger.svg';
import Close from '../images/icon-close.svg';

// components
import Button from './Button';

const Nav = () => {

  const deadLink = '#';

  const showLinks = () => {
    const app = document.getElementById('app');
    const links = document.getElementById('links');
    const toggle = document.getElementById('toggle');
    links.classList.toggle('hide');
    toggle.classList.toggle('invisible');

    if(!links.classList.contains('hide')) app.classList.add('nav-only');
    else app.classList.remove('nav-only');
  };

  return (
    <nav className='nav'>
      <a href={deadLink} className='logo-container'>
        <img
          src={Logo}
          alt='Logo'
          className='nav__logo' />
      </a>

      <div className='nav__toggles'>
        <img
          src={Toggle}
          alt='Toggle'
          className='nav__toggle' />
        <button type='button' className='nav__close-btn'>
          <img
            src={Close}
            alt='Close'
            className='nav__close invisible'
            id='toggle'
            onClick={showLinks} />
        </button>
      </div>
      <div className='nav__links hide scale-in-ver-top scale-out-ver-top' id='links'>
          <ul>
            <li className='nav__links-link karla w700 center'><a href={deadLink}>HOW WE WORK</a></li>
            <li className='nav__links-link karla w700 center'><a href={deadLink}>BLOG</a></li>
            <li className='nav__links-link karla w700 center'><a href={deadLink}>ACCOUNT</a></li>
          </ul>
          <div className='btn-container'>
            <Button
              type='mobile'
              text='VIEW PLANS'
              theme='dark' />
          </div>
      </div>
    </nav>
  );
};

export default Nav;