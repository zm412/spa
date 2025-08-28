import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import { chartStore } from "@/stores/ChartStore.js";
import _ from "lodash";

const randomNum = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

function getRandomFloridaCoords() {
    const latMin = 24.5,
        latMax = 31.0;
    const lonMin = -87.6,
        lonMax = -80.0;

    const lat = Math.random() * (latMax - latMin) + latMin;
    const lon = Math.random() * (lonMax - lonMin) + lonMin;

    return { lat, lon };
}

const randomString = (min = 3, max = 30) => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const length = Math.floor(Math.random() * (max - min + 1)) + min;
    let result = "";

    function capitalizeWords(str) {
        return str.toLowerCase().replace(/(^|\s)\w/g, function (c) {
            return c.toUpperCase();
        });
    }

    for (let i = 0; i < length; i++) {
        if (Math.random() < 0.15 && i !== 0 && i !== length - 1) {
            result += " ";
        } else {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
    }

    return capitalizeWords(result);
};

const generateDataRows = () => {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        const { lat, lon } = getRandomFloridaCoords();
        rows.push({
            id: i,
            parentId: i > 1 ? randomNum(1, i - 1) : null,
            col1: randomNum(-70, 70),
            col2: randomNum(-70, 70),
            col3: randomNum(-70, 70),
            col4: randomNum(-70, 70),
            col5: randomNum(-70, 70),
            lat: lat,
            lng: lon,
            name: randomString(),
        });
    }
    return rows;
};

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

export const DataTable = observer(() => {
    useEffect(() => {
        const initialRows = generateDataRows();
        chartStore.createNewDataSet(initialRows);
    }, []);

    const handleRefresh = () => {
        const newRows = generateDataRows();
        chartStore.createNewDataSet(newRows);
        if (
            chartStore.selectedCell.row !== null &&
            chartStore.selectedCell.row >= newRows.length
        ) {
            chartStore.setSelectedCell({ row: null, col: null });
        }
    };
    const throttledClick = useRef(
        _.throttle(handleRefresh, 500, { leading: true, trailing: false }),
    );
    return (
        <div>
            <button
                onClick={() => throttledClick.current()}
                style={{
                    marginBottom: 10,
                    padding: "6px 12px",
                    cursor: "pointer",
                }}
            >
                Update data
            </button>

            <p>
                Selected Cell:{" "}
                {chartStore.selectedCell.row !== null
                    ? chartStore.dataSet[chartStore.selectedCell.row][
                          columns[chartStore.selectedCell.col]
                      ]
                    : "—"}
            </p>

            <table
                border="1"
                cellPadding="6"
                style={{ borderCollapse: "collapse", width: "100%" }}
            >
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
                                    chartStore.selectedCell.row === rowIndex &&
                                    chartStore.selectedCell.col === colIndex;
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
    );
});
