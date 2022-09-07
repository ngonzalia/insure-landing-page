// logos
import Logo from '../images/logo.svg';
import fb from '../images/icon-facebook.svg';
import tw from '../images/icon-twitter.svg';
import pt from '../images/icon-pinterest.svg';
import ig from '../images/icon-instagram.svg';

const Footer = () => {

  const deadLink = '#';

  return (
    <footer className='footer'>
      <div className='footer__social'>
        <img
          src={Logo}
          alt='logo'
          className='footer__social-logo' />
        <div className='footer__social-media'>
          <img
            src={fb}
            alt='Facebook icon' />
          <img
            src={tw}
            alt='Twitter icon' />
          <img
            src={pt}
            alt='Pinterest icon' />
          <img
            src={ig}
            alt='Instagram icon' />
        </div>
      </div>

      <div className='footer__line'></div>

      <div className='footer__links'>
        <div className='footer__links-group'>
          <h3 className='text karla w700 gray'>
            OUR COMPANY
          </h3>
          <ul>
            <li><a className='text karla w700 gunmetal' href={deadLink}>HOW WE WORK</a></li>
            <li><a className='text karla w700 gunmetal' href={deadLink}>WHY INSURE?</a></li>
            <li><a className='text karla w700 gunmetal' href={deadLink}>CHECK PRICE</a></li>
            <li><a className='text karla w700 gunmetal' href={deadLink}>REVIEWS</a></li>
          </ul>
        </div>

        <div className='footer__links-group'>
          <h3 className='text karla w700 gray'>
            HELP ME
          </h3>
          <ul>
            <li><a className='text karla w700 gunmetal' href={deadLink}>FAQ</a></li>
            <li><a className='text karla w700 gunmetal' href={deadLink}>TERMS OF USE</a></li>
            <li><a className='text karla w700 gunmetal' href={deadLink}>PRIVACY POLICY</a></li>
            <li><a className='text karla w700 gunmetal' href={deadLink}>COOKIES</a></li>
          </ul>
        </div>

        <div className='footer__links-group'>
          <h3 className='text karla w700 gray'>
            CONTACT
          </h3>
          <ul>
            <li><a className='text karla w700 gunmetal' href={deadLink}>SALES</a></li>
            <li><a className='text karla w700 gunmetal' href={deadLink}>SUPPORT</a></li>
            <li><a className='text karla w700 gunmetal' href={deadLink}>LIVE CHAT</a></li>
          </ul>
        </div>

        <div className='footer__links-group'>
          <h3 className='text karla w700 gray'>
            OTHERS
          </h3>
          <ul>
            <li><a className='text karla w700 gunmetal' href={deadLink}>CAREERS</a></li>
            <li><a className='text karla w700 gunmetal' href={deadLink}>PRESS</a></li>
            <li><a className='text karla w700 gunmetal' href={deadLink}>LICENSES</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;