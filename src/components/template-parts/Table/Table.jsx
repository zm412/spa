import styles from "./Table.module.scss";
//import ChartConfiguration from "./ChartConfiguration";
import React from "react";
import { useState } from "react";
import classNames from "classnames";
import { DataTable } from "./TableComponent/TableComponent.jsx"

function Table(props) {
    const barContainerClassName = classNames(styles.bar_container, "bar_container-static");

    return (
        <div className={barContainerClassName}>
            <DataTable />
        </div>
    );
}

export default Table;
