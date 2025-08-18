import Hero from "../template-parts/Hero/Hero.jsx";
import Header from "../template-parts/Header/Header.jsx";
import SwiperLink from "../template-parts/SwiperLink/SwiperLink.jsx";
import DataVisualisation from "../template-parts/DataVisualisation/DataVisualisation.jsx";
import Honey from "../template-parts/Honey/Honey.jsx";
import styles from "./DevCard.module.css";
import "../../assets/styles/grid.scss";
import { Progress } from "progress";
import { DndTree } from "dnd";

const DevCard = () => {
    return (
        <div className={styles.card}>
            <div className="custom-container">
                <SwiperLink />
                <Honey />
                <div style={{ paddingTop: "50px" }}>
                    <h2>DND</h2>
                    <DndTree />
                </div>
                <DataVisualisation />
            </div>
        </div>
    );
};

export default DevCard;
