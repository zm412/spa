import DropdownButtonOutline from "./DropdownButton";
import { useTheme } from "../../../contexts/ThemeContext";
import Logo from "./Logo.jsx";
import styles from "./Header.module.css";
import Button from "react-bootstrap/Button";

const Header = ({page, changePage}) => {
    const { theme } = useTheme();
    const nextPage = page == 'default' ? 'pageAbout' : 'default'
    const buttonName = page == 'default' ? 'About me' : 'HOME'

    //console.log(theme, 'THEME');

    return (
        <header>
            <div className="custom-container">
                <div className={styles["header-inner"]}>
                    <div className={styles["logo-img"]}>
                        <Logo />
                    </div>
                    <div className={styles["custom-nav"]}>
                        <div className={styles["nav-item"]}>
                            <Button variant="warning" onClick={() => changePage(nextPage)} >{buttonName}</Button>
                        </div>

                        <div className={styles["nav-item"]}>
                            <DropdownButtonOutline />
                        </div>
                    </div>

                    <div className={styles["profile-data"]}>
                        <img
                            className={styles["profile-img"]}
                            src="./img/hive.svg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
