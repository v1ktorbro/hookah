import './NavSocialLinks.css';

function NavSocialLinks() {
  return (
    <ul className="nav-social-links">
      <li className="nav-social-links__list-item">
        <a href="/#" className="nav-social-links__link">
          <i className="lab la-vk"></i>
        </a>
      </li>
      <li className="nav-social-links__list-item">
        <a href="/#" className="nav-social-links__link">
          <i className="lab la-instagram"></i>
        </a>
      </li>
      <li className="nav-social-links__list-item">
        <a href="/#" className="nav-social-links__link">
          <i className="lab la-facebook-f"></i>
        </a>
      </li>
    </ul>
  );
}

export default NavSocialLinks;