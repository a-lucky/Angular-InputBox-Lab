import { Component, OnInit, NgZone } from '@angular/core';
import { CellData } from '../CellData';
import { CommaChanger } from '../CommnaChanger';

@Component({
  selector: 'app-pull-out-cell',
  templateUrl: './pull-out-cell.component.html',
  styleUrls: ['./pull-out-cell.component.less']
})
export class PullOutCellComponent implements OnInit {

  column = [...Array(50).keys()];
  row = [...Array(100).keys()];
  currencyList: string[] = ['JPY', 'USD'];
  currency2fractionSize = {
    'JPY': 2,
    'USD': 3
  }

  data: Map<number, Map<number, CellData>>;

  selectedCell: CellData;

  constructor(private _zone: NgZone) {
    this._zone.onMicrotaskEmpty.subscribe({
      next: () => {
        this._zone.run(() => {
          console.log('changeDetection');
        });
      }
    });
  }

  ngOnInit() {
    const newData = new Map();
    this.row.forEach( rowValue => {
      const colMap = new Map<number, CellData>();
      newData.set(rowValue, colMap);
      this.column.forEach( colValue => {
        const cellData = new CellData();
        cellData.cost = '99999.999';
        cellData.currency = 'JPY';
        colMap.set(colValue, cellData);
      });
    });
    this.data = newData;
  }

  resetData() {
    this.data.forEach( (colData, rowValue) => {
      colData.forEach( (cellData, colValue) => {
        cellData.currency = 'USD';
        cellData.cost = '10000.000';
      });
    });
  }

  onFocusCell(cellData: CellData) {
    console.log('parent', 'onFocusCell');
    this.selectedCell = cellData;
  }

  lastUpdated():string{
    return Date.now().toString().slice(0,10);
  }

  trackBySelf(index, value){
    return value;
  }

}
