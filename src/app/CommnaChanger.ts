export class CommaChanger {
  static addComma(cost: string, fractionSize = 2) {
    const s = cost.split('.');
    let ret = String(s[0]).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    const fraction = s.length > 1 ? s[1] : '';
    
    ret += '.' + this.paddingZero(fraction.slice(0, fractionSize), fractionSize);
    return ret;
  }
  static removeComma(cost: string) {
    return cost.replace(/,/g, '');
  }

  private static paddingZero(n, digit) {
    var zeros = Array(digit + 1).join('0');
    return (n + zeros).slice(0, digit);
  }
}