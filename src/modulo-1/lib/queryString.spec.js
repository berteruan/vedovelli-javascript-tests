import { queryString, parse } from './queryString';

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Ruan',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=Ruan&profession=developer');
  });

  it('should create a valid query string even when an array is provided', () => {
    const obj = {
      name: 'Ruan',
      abilities: ['JS', 'TDD'],
    };

    expect(queryString(obj)).toBe('name=Ruan&abilities=JS,TDD');
  });

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Ruan',
      abilities: {
        JS: 'test',
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to an object', () => {
    const qs = 'name=Ruan&profession=developer';

    expect(parse(qs)).toEqual({
      name: 'Ruan',
      profession: 'developer',
    });
  });

  it('should convert a query string with single key-value pair to an object', () => {
    const qs = 'name=Ruan';

    expect(parse(qs)).toEqual({
      name: 'Ruan',
    });
  });

  it('should convert a query string to an object taking care of comma separated values', () => {
    const qs = 'name=Ruan&abilities=JS,TDD';

    expect(parse(qs)).toEqual({
      name: 'Ruan',
      abilities: ['JS', 'TDD'],
    });
  });
});
