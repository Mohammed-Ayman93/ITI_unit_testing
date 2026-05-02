import {getCharactersCount, reverseString} from './string';

test("revese string",()=>{
    expect(reverseString("ABC")).toBe("CBA");
})
test("revese string",()=>{
    expect(reverseString("mohammed")).toBe("demmahom");
})

  describe('getCharactersCount', () => {
    test('should count characters correctly', () => {
      expect(getCharactersCount('aab')).toEqual({ a: 2, b: 1 });
    });

    test('should handle empty string', () => {
      expect(getCharactersCount('')).toEqual({});
    });
  });
