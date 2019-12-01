import { Component, OnInit, NgZone } from '@angular/core';
import { CellData } from '../CellData';
import { CommaChanger } from '../CommnaChanger';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.less']
})
export class DefaultComponent implements OnInit {

  column = [...Array(14).keys()];
  row = [...Array(70).keys()];
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
    this.data = new Map();
    this.row.forEach( rowValue => {
      const colMap = new Map<number, CellData>();
      this.data.set(rowValue, colMap);
      this.column.forEach( colValue => {
        const cellData = new CellData();
        cellData.cost = CommaChanger.addComma('99999.999');
        cellData.currency = 'JPY';
        colMap.set(colValue, cellData);
      });
    })
  }

  resetData() {
    this.data.forEach( (colData, rowValue) => {
      colData.forEach( (cellData, colValue) => {
        cellData.cost = CommaChanger.addComma('10000.000');
        cellData.currency = 'USD';
      });
    });
  }

  onCostFocus(cost: string, cellData: CellData){
    console.log('focus');
    this.onFocusCell(cellData);
    cellData.cost = CommaChanger.removeComma(cost);
  }

  onCostBlur(cost: string, cellData: CellData){
    console.log('blur');
    const fractionSize = this.currency2fractionSize[cellData.currency];
    cellData.cost = CommaChanger.addComma(cost, fractionSize);
  }

  onCurrencyChange(currency: string, cellData: CellData) {
    if (this.hasCurrnecyError(currency)) {
      return;
    }
    cellData.currency = currency;

    const fractionSize = this.currency2fractionSize[cellData.currency];
    cellData.cost = CommaChanger.addComma(CommaChanger.removeComma(cellData.cost), fractionSize);
  }

  onFocusCell(cellData: CellData) {
    this.selectedCell = cellData;
  }

  hasCurrnecyError(currency: string){
    return !this.currencyList.includes(currency);
  }

  lastUpdated():string{
    return Date().toString();
  }

}
