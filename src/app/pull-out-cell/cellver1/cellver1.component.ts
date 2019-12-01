import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CellData } from 'src/app/CellData';
import { CommaChanger } from 'src/app/CommnaChanger';

@Component({
  selector: 'app-cellver1',
  templateUrl: './cellver1.component.html',
  styleUrls: ['./cellver1.component.less'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class Cellver1Component implements OnInit {

  @Input() currencyList;
  @Input() currency2fractionSize;

  @Input() set currency(currency: string) {
    if(currency === this.valueCellData.currency) {
      return;
    }
    this.onCurrencyChange(currency);
  }
  @Input() set cost(cost: string) {
    const fractionSize = this.currency2fractionSize[this.valueCellData.currency];
    this.displayCellData.cost = CommaChanger.addComma(cost, fractionSize);
    if(cost === this.valueCellData.cost) {
      return;
    }
    this.onCostChange(cost);
  }

  valueCellData: CellData = new CellData();
  displayCellData: CellData = new CellData();

  @Output() changeCost: EventEmitter<string>  = new EventEmitter();
  @Output() changeCurrency: EventEmitter<string>  = new EventEmitter();
  @Output() focus: EventEmitter<null>  = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCostChange(cost: string) {
    console.log('onCostChange');
    const fractionSize = this.currency2fractionSize[this.valueCellData.currency];
    this.valueCellData.cost = CommaChanger.removeComma(cost, fractionSize);
    this.changeCost.emit(this.valueCellData.cost);
  }

  onCostFocus(cost: string){
    console.log('onCostFocus');
    this.onFocusCell();
    const fractionSize = this.currency2fractionSize[this.valueCellData.currency];
    this.displayCellData.cost = CommaChanger.removeComma(cost, fractionSize);
  }

  onCostBlur(cost: string){
    console.log('onCostBlur');
    const fractionSize = this.currency2fractionSize[this.valueCellData.currency];
    this.displayCellData.cost = CommaChanger.addComma(cost, fractionSize);
  }

  onCurrencyChange(currency: string) {
    console.log('onCurrencyChange');
    this.displayCellData.currency = currency;
    if (this.hasCurrnecyError(currency)) {
      return;
    }
    this.valueCellData.currency = currency;

    if (this.valueCellData.cost) {
      this.onCostChange(this.valueCellData.cost);
    }

    this.changeCurrency.emit(currency);
  }

  onFocusCell() {
    console.log('onFocusCell');
    this.focus.emit();
  }

  hasCurrnecyError(currency: string){
    return this.currencyList && !this.currencyList.includes(currency);
  }

  lastUpdated():string{
    return Date.now().toString().slice(0,10);
  }

}
