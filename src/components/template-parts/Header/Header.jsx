import DropdownButtonOutline from "./DropdownButton";
import { useTheme } from '../../../contexts/ThemeContext';
import Logo from './Logo.jsx';
import styles from "./Header.module.css";
import Button from 'react-bootstrap/Button';

const Header = () => {
  const { theme } = useTheme();

  //console.log(theme, 'THEME');
  
  return (
    <header className="custom-container">
      <div className={styles["header-inner"]}>
      <div className={styles["logo-img"]}>
        <Logo />
      </div>
        <div className={styles["custom-nav"]}>
          <div className={styles["nav-item"]}>
           <Button variant="warning">About me</Button>
          </div>

          <div className={styles["nav-item"]}>
            <DropdownButtonOutline />
          </div>

       </div>

        <div className={styles["profile-data"]}>
          <img className={styles["profile-img"]} src="./img/hive.svg" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
