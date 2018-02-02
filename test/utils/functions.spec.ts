/* tslint:disable */ 
import {
  isArray,
  isObject,
  isFunction,
  isPercentage,
  isNumeric,
  sortBy,
  findElement,
  deg2rad,
  arrayDiff
} from '../../src/utils/functions';

import { assert } from 'chai';
import { } from 'mocha';

describe('Utils', () => {

  describe('functions', () => {

    it('arrayDiff(a,b)', () => {
      let a = ['a', 'b'];
      let b = ['a', 'b', 'c', 'd'];
      assert.deepEqual(arrayDiff(a, b), ['c', 'd']);

    });

    it('utils.isArray()', () => {
      assert.isOk(isArray([]));
      assert.isOk(isArray([1, 2, 3, 4]));
      assert.isOk(isArray([{ 'a': 'b' }]));
      assert.isNotOk(isArray(null));
      assert.isNotOk(isArray(false));
      assert.isNotOk(isArray(''));
      assert.isNotOk(isArray(1000));
      assert.isNotOk(isArray(0x0));
      assert.isNotOk(isArray(new Object()));
      assert.isNotOk(isArray({}));
    });

    it('utils.isObject()', () => {
      assert.isOk(isObject({}));
      assert.isOk(isObject({ 'a': 'b' }));
      assert.isNotOk(isObject([]));
      assert.isNotOk(isObject([{}]));
      assert.isNotOk(isObject([{}, {}]));
    });

    it('utils.isFunction()', () => {
      assert.isOk(isFunction((d: any) => d));
      assert.isNotOk(isFunction(''));
      assert.isNotOk(isFunction({}));
      assert.isNotOk(isFunction([]));
    });

    it('utils.isPercentage()', () => {
      assert.isOk(isPercentage('100%'));
      assert.isOk(isPercentage('1%'));
      assert.isNotOk(isPercentage('131%'));
      assert.isNotOk(isPercentage({}));
      assert.isNotOk(isPercentage([]));
    });

    it('utils.isNumeric()', () => {
      assert.isOk(isNumeric(324));
      assert.isOk(isNumeric('324'));
      assert.isNotOk(isNumeric('131%'));
      assert.isNotOk(isNumeric({}));
      assert.isNotOk(isNumeric([]));
    });


    it('utils.sortBy()  - sort array', () => {
      let array = [{ x: 1 }, { x: 2 }];
      let expectedResult = [{ x: 1 }, { x: 2 }];
      let result = sortBy(array, { prop: 'x', desc: false });
      assert.deepEqual(expectedResult, result);

      array = [{ x: 1 }, { x: 2 }];
      expectedResult = [{ x: 2 }, { x: 1 }];
      result = sortBy(array, { prop: 'x', desc: true });
      assert.deepEqual(expectedResult, result);

      array = [];
      expectedResult = [];
      result = sortBy(array, { prop: 'x', desc: true });
      assert.deepEqual(expectedResult, result);
    });

    describe('utils.findElement()', () => {
      it('should find an element in a key/value array', () => {
        let a = [
          { key: 'a', value: 0 },
          { key: 'b', value: 1 },
          { key: 'c', value: 2 },
          { key: 'd', value: 3 }
        ];
        assert.deepEqual(findElement(a, 'key', 'a'), { key: 'a', value: 0 });
        assert.deepEqual(findElement(a, 'key', 'c'), { key: 'c', value: 2 });
        assert.deepEqual(findElement(a, 'key', 'd'), { key: 'd', value: 3 });
      });
      it('should return null when the element is not found', () => {
        let a = [
          { key: 'a', value: 0 },
          { key: 'b', value: 1 },
          { key: 'c', value: 2 },
          { key: 'd', value: 3 }
        ];
        assert.deepEqual(findElement(a, 'key', 'e'), null);
      });
    });

    describe('utils.deg2rad()', () => {
      it('should convert degrees to radians', () => {
        let pi = Math.PI;
        assert.equal(deg2rad(0), 0);
        assert.equal(deg2rad(45), pi / 4);
        assert.equal(deg2rad(60), pi / 3);
        assert.equal(deg2rad(90), pi / 2);
        assert.equal(deg2rad(180), pi);
        assert.equal(deg2rad(270), (3 * pi) / 2);
        assert.equal(deg2rad(360), 2 * pi);
        assert.equal(deg2rad(-90), -(pi / 2));
      });
    });
  });
});
