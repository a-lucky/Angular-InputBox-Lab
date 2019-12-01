export class CommaChanger {
  static addComma(cost: string, fractionSize = 2) {
    cost = this.formatValidNumber(cost, fractionSize);
    const s = cost.split('.');
    let ret = String(s[0]).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    return ret + (s.length > 1 ? '.' + s[1] : '');
  }
  static removeComma(cost: string, fractionSize = 2) {
    cost = this.formatValidNumber(cost, fractionSize);
    return cost;
  }

  private static paddingZero(n, digit) {
    var zeros = Array(digit + 1).join('0');
    return (n + zeros).slice(0, digit);
  }

  static formatValidNumber(cost: string, fractionSize){
    cost = cost.replace(/[^0-9.\-]/g, '');
    const numCost = parseFloat(cost || '0');
    cost = numCost.toFixed(10);
    const s = cost.split('.');
    const fraction = s.length > 1 ? s[1] : '';
    return s[0] + '.' + this.paddingZero(fraction.slice(0, fractionSize), fractionSize);
  }
}