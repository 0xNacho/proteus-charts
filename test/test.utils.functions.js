describe('Utils', () => {

  describe('functions', () => {

    it('utils.isArray()', () => {
      assert.isOk(utils.isArray([]));
      assert.isOk(utils.isArray([1, 2, 3, 4]));
      assert.isOk(utils.isArray([{ 'a': 'b' }]));
      assert.isNotOk(utils.isArray(null));
      assert.isNotOk(utils.isArray(false));
      assert.isNotOk(utils.isArray(''));
      assert.isNotOk(utils.isArray(1000));
      assert.isNotOk(utils.isArray(0x0));
      assert.isNotOk(utils.isArray(new Object()));
      assert.isNotOk(utils.isArray({}));
    });

    it('utils.isObject()', () => {
      assert.isOk(utils.isObject({}));
      assert.isOk(utils.isObject({ 'a': 'b' }));
      assert.isNotOk(utils.isObject([]));
      assert.isNotOk(utils.isObject([{}]));
      assert.isNotOk(utils.isObject([{}, {}]));
    });

    it('utils.isFunction()', () => {
      assert.isOk(utils.isFunction((d) => d));
      assert.isNotOk(utils.isFunction(''));
      assert.isNotOk(utils.isFunction({}));
      assert.isNotOk(utils.isFunction([]));
    });
    
    it('utils.isPercentage()', () => {
      assert.isOk(utils.isPercentage('100%'));
      assert.isOk(utils.isPercentage('1%'));
      assert.isNotOk(utils.isPercentage('131%'));
      assert.isNotOk(utils.isPercentage({}));
      assert.isNotOk(utils.isPercentage([]));
    });
    
    it('utils.isNumeric()', () => {
      assert.isOk(utils.isNumeric(324));
      assert.isOk(utils.isNumeric("324"));
      assert.isNotOk(utils.isNumeric('131%'));
      assert.isNotOk(utils.isNumeric({}));
      assert.isNotOk(utils.isNumeric([]));
    });
    
    it('utils.getArrayDifferentKeys() - simple array', () => {
      assert.strictEqual(utils.getNumberOfDifferentArrayKeys([1]), 1);
      assert.strictEqual(utils.getNumberOfDifferentArrayKeys([1, 2, 3]), 3);
      assert.strictEqual(utils.getNumberOfDifferentArrayKeys([1, 2, 2, 2, 3, 3, 3, 4]), 4);
      assert.strictEqual(utils.getNumberOfDifferentArrayKeys([]), 0);
      assert.strictEqual(utils.getNumberOfDifferentArrayKeys(null), 0);
    });

    it('utils.getArrayDifferentKeys() - object array', () => {
      assert.strictEqual(utils.getNumberOfDifferentArrayKeys([{}, {}], 'keyname'), 0);
      assert.strictEqual(utils.getNumberOfDifferentArrayKeys([{ 'key': 1 }, { 'key': 2 }], 'key'), 2);
      assert.strictEqual(utils.getNumberOfDifferentArrayKeys([{ 'key': 1 }, { 'key': 2 }, {}, { 'anotherkey': 1 }], 'key'), 2);
      assert.strictEqual(utils.getNumberOfDifferentArrayKeys([{ 'key': 1 }, { 'key': 1 }], 'key'), 1);
    });

    it('utils.sortBy()  - sort array', () => {
      var array, expectedResult, result;
      array = [{ x: 1 }, { x: 2 }];
      expectedResult = [{ x: 1 }, { x: 2 }];
      result = utils.sortBy(array, { prop: 'x', desc: false });
      assert.deepEqual(expectedResult, result);

      array = [{ x: 1 }, { x: 2 }];
      expectedResult = [{ x: 2 }, { x: 1 }];
      result = utils.sortBy(array, { prop: 'x', desc: true });
      assert.deepEqual(expectedResult, result);

      array = [];
      expectedResult = [];
      result = utils.sortBy(array, { prop: 'x', desc: true });
      assert.deepEqual(expectedResult, result);
    });

    describe('utils.findElement()', () => {
      it('should find an element in a key/value array', () => {
        var a = [
          {key: 'a', value: 0},
          {key: 'b', value: 1},
          {key: 'c', value: 2},
          {key: 'd', value: 3}
        ];
        assert.deepEqual(utils.findElement(a, 'key', 'a'), {key: 'a', value: 0});
        assert.deepEqual(utils.findElement(a, 'key', 'c'), {key: 'c', value: 2});
        assert.deepEqual(utils.findElement(a, 'key', 'd'), {key: 'd', value: 3});
      });
      it('should return null when the element is not found', () => {
        var a = [
          {key: 'a', value: 0},
          {key: 'b', value: 1},
          {key: 'c', value: 2},
          {key: 'd', value: 3}
        ];
        assert.deepEqual(utils.findElement(a, 'key', 'e'), null);
      });
    });

    describe('utils.deg2rad()', () => {
      it('should convert degrees to radians', () => {
        var pi = Math.PI;
        assert.equal(utils.deg2rad(0), 0);
        assert.equal(utils.deg2rad(45), pi / 4);
        assert.equal(utils.deg2rad(60), pi / 3);
        assert.equal(utils.deg2rad(90), pi / 2);
        assert.equal(utils.deg2rad(180), pi);
        assert.equal(utils.deg2rad(270), (3 * pi) / 2);
        assert.equal(utils.deg2rad(360), 2 * pi);
        assert.equal(utils.deg2rad(-90), -(pi / 2));
      });
    });
  });
});