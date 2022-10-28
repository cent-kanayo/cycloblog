import cyclo from '../assets/cyclo.svg';
import { SocialIcon } from 'react-social-icons';
const Footer = () => {
  return (
    <footer className="container mx-auto p-10 bg-gray-100 flex flex-col">
      <div className="pb-20 border-b border-gray-400 flex flex-col md:flex-row mb-4">
        <div className="w-1/2">
          <img src={cyclo} alt="Cyclobold avatar" />
        </div>
        <div className="flex flex-col md:flex-row space-x-10">
          <div>
            <h4>Mobile App</h4>
            <h6>Features</h6>
            <h6>Live Share</h6>
            <h6>Video record</h6>
          </div>
          <div>
            <h4>Community</h4>
            <h6>Featured Artists</h6>
            <h6>The Portal</h6>
            <h6>Live Events</h6>
          </div>
          <div>
            <h4>Company</h4>
            <h6>About us</h6>
            <h6>Contact us</h6>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row  justify-between items-center">
        <p>&copy;{new Date().getFullYear()}. We love our community!</p>
        <div className="flex flex-col md:flex-row justify-between items-center space-x-5">
          <p className="mb-4 md:mb-0">Follow us on</p>
          <div className="flex space-x-5 mb-4 md:mb-0">
            <span>
              <SocialIcon url="https://www.linkedin.com/company/cyclobold-tech/" />
            </span>
            <span>
              <SocialIcon url="https://facebook.com/cyclobold" />
            </span>
            <span>
              <SocialIcon url="https://instagram.com/cyclobold" />
            </span>
            <span>
              <SocialIcon url="https://twitter.com/cyclobold" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
