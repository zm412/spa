import Hero from "../template-parts/Hero/Hero.jsx";
import Header from "../template-parts/Header/Header.jsx";
import SwiperLink from "../template-parts/SwiperLink/SwiperLink.jsx";
import DataVisualisation from "../template-parts/DataVisualisation/DataVisualisation.jsx";
import DndTree from "../template-parts/DndTree/DndTree.jsx";
import Honey from "../template-parts/Honey/Honey.jsx";
import styles from "./DevCard.module.css";
import "../../assets/styles/grid.scss";
import { Progress } from "progress";
import { Honeycomb } from "soty";

const DevCard = () => {
    const colors = [
        ["#127b5f", "#5fb7a0"], //frontend
        ["#f38b6b", "#f3b16b"], //backend
        ["#ff8ce9", "#c278b4"], //tools
        ["#007aff", "#6d9ee6"], //devops
        ["#92d9d4", "#91b9ee"], //header
    ];
    const bgImg = "/img/i.jpg";


    return (
        <div className={styles.card}>
            <Header />
            <Hero />
            <div className="custom-container">
                <SwiperLink />
                <Honey colors={colors} bgImg={bgImg} />
                <DndTree />
                <DataVisualisation />
            </div>
        </div>
    );
};

export default DevCard;
