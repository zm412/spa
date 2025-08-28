import { makeAutoObservable, toJS } from "mobx";
import _ from "lodash";


class ChartStore {
    dataSet = [] 
    selectedCell = { row: null, col: null };

    constructor() {
        makeAutoObservable(this);
        this.createNewDataSet = this.createNewDataSet.bind(this);
        this.setSelectedCell = this.setSelectedCell.bind(this);
    }

    createNewDataSet(obj) {
        this.dataSet = obj 
    }

     setSelectedCell(cell) {
        this.selectedCell = cell;
    }
}

export const chartStore = new ChartStore();
