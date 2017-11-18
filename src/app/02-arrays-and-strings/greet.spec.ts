import {greet} from "./greet";
describe('greet', () => {
  it('should include name in message', () => {
    let arg = 'maks';

    let result = greet(arg);
    expect(result).toContain(arg);
  });
});
