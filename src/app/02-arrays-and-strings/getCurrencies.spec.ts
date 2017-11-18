import {getCurrencies} from "./getCurrencies";
describe('getCurrencies', () => {
  it('should return supported currencies', () => {
    let result = getCurrencies();
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');
  });
});
