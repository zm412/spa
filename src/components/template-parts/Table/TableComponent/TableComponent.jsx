import React, { useEffect, useRef, useState, useCallback } from "react";
import { observer } from "mobx-react-lite";
import { chartStore } from "@/stores/ChartStore.js";
import { generateDataRows } from "./createData.js";
import Button from "react-bootstrap/Button";
import _ from "lodash";

const columns = [
    "id",
    "parentId",
    "col1",
    "col2",
    "col3",
    "col4",
    "col5",
    "lat",
    "lng",
    "name",
];

const buttonStyle = {
    marginBottom: 10,
    padding: "6px 12px",
    cursor: "pointer",
    margin: "15px",
};

const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
};

export const DataTable = observer(() => {
    const [isOpened, setIsOpened] = useState(false);

    useEffect(() => {
        chartStore.createNewDataSet(generateDataRows(10));
    }, []);

    const handleRefresh = useCallback(() => {
        const newRows = generateDataRows(10);
        chartStore.createNewDataSet(newRows);

        const { row } = chartStore.selectedCell;
        if (row !== null && row >= newRows.length) {
            chartStore.setSelectedCell({ row: null, col: null });
        }
    }, []);

    const throttledRefresh = useRef(
        _.throttle(handleRefresh, 500, { leading: true, trailing: false }),
    );

    return (
        <div>
            <Button
                variant="warning"
                style={buttonStyle}
                onClick={() => throttledRefresh.current()}
            >
                Update data
            </Button>
            <Button
                variant="warning"
                style={buttonStyle}
                onClick={() => setIsOpened((prev) => !prev)}
            >
                {isOpened ? "Close table" : "Show data"}
            </Button>

            {isOpened && (
                <div>
                    <h2>Table (Random Data Source)</h2>
                    <p>
                        Selected Cell:{" "}
                        {chartStore.selectedCell.row !== null
                            ? chartStore.dataSet[chartStore.selectedCell.row][
                                  columns[chartStore.selectedCell.col]
                              ]
                            : "—"}
                    </p>

                    <table border="1" cellPadding="6" style={tableStyle}>
                        <thead>
                            <tr>
                                {columns.map((col) => (
                                    <th key={col}>{col.toUpperCase()}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {chartStore.dataSet.map((row, rowIndex) => (
                                <tr key={row.id}>
                                    {columns.map((col, colIndex) => {
                                        const isSelected =
                                            chartStore.selectedCell.row ===
                                                rowIndex &&
                                            chartStore.selectedCell.col ===
                                                colIndex;
                                        return (
                                            <td
                                                key={col}
                                                onClick={() =>
                                                    chartStore.setSelectedCell({
                                                        row: rowIndex,
                                                        col: colIndex,
                                                    })
                                                }
                                                style={{
                                                    cursor: "pointer",
                                                    backgroundColor: isSelected
                                                        ? "pink"
                                                        : "transparent",
                                                }}
                                            >
                                                {row[col]}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
});
