import {compute} from "./compute";

describe('compute', () => {

  it('should return 0 if input is negative', () => {
    let result = compute(-1);
    expect(result).toBe(0);
  });

  it('should increment result if input is positive', () => {
    let result = compute(1);
    expect(result).toBe(2);
  });
});
