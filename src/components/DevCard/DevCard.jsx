import Hero from "../template-parts/Hero/Hero.jsx";
import Header from "../template-parts/Header/Header.jsx";
import Table from "../template-parts/Table/Table.jsx";
import SwiperLink from "../template-parts/SwiperLink/SwiperLink.jsx";
import DataVisualisation from "../template-parts/DataVisualisation/DataVisualisation.jsx";
import ChartsLib from "../template-parts/Charts/ChartsLib.jsx";
import Honey from "../template-parts/Honey/Honey.jsx";
import Dnd from "../template-parts/DndTree/Dnd.jsx";
import styles from "./DevCard.module.css";
import { Progress } from "progress";
import { DndTree } from "dnd";
import "../../assets/styles/grid.scss";

const DevCard = () => {
    return (
        <div className={styles.card}>
            <div className="custom-container">
                <SwiperLink />
                <Honey />
                <div style={{ paddingTop: "50px" }}>
                    <h2>DND (Drag & Drop)</h2>
                    <Dnd />
                </div>
                <DataVisualisation />
                <ChartsLib />
                <Table />
            </div>
        </div>
    );
};

export default DevCard;
