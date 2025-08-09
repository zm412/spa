import Hero from "../template-parts/Hero/Hero.jsx";
import Header from "../template-parts/Header/Header.jsx";
import SwiperLink from "../template-parts/SwiperLink/SwiperLink.jsx";
import Honeycomb from "../template-parts/Honeycomb/Honeycomb.jsx";
import DataVisualisation from "../template-parts/DataVisualisation/DataVisualisation.jsx";
import DndTree from "../template-parts/DndTree/DndTree.jsx";
import styles from "./DevCard.module.css";
import "../../assets/styles/grid.scss";
import { Progress } from "progress";

const DevCard = () => {
    return (
        <div className={styles.card}>
            <Header />
            <Hero />
            <div className="custom-container">
                <SwiperLink />
                <Honeycomb />
                <DndTree />
                <DataVisualisation />
            </div>
        </div>
    );
};

export default DevCard;
