import styles from "./Footer.module.css";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <h2>Atlantis Homes III</h2>
      <p>Atlantis Homes III</p>
      <p>San Stefano 97A</p>
      <p>team@atlantishomes.com</p>
      <ul>
        <li>
          <a href="#">Terms</a>
        </li>
        <li>
          <a href="#">Privacy</a>
        </li>
        <li>
          <a href="#">Cookies</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
