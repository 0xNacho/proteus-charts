/* tslint:disable */ 
import {
    sortByField
} from '../../../src/utils/data/sorting';

import { assert } from 'chai';
import { } from 'mocha';

describe('Data sorting functions', () => {

    it('sortByField(array, field) with numbers', () => {
        let array = [{ p1: 2, p2: 53 }, { p1: 42, p2: 312 }, { p1: 12, p2: 232 }, { p1: 22, p2: 21214 }];
        sortByField(array, 'p1');
        assert.deepEqual(array, [{ p1: 2, p2: 53 }, { p1: 12, p2: 232 }, { p1: 22, p2: 21214 }, { p1: 42, p2: 312 }]);
    });

    it('sortByField(array, field) with Dates', () => {
        let array = [
            { p1: new Date(2010, 1, 1, 13, 30, 30, 12), p2: 53 },
            { p1: new Date(2010, 1, 1, 13, 30, 30, 10), p2: 312 },
            { p1: new Date(2011, 3, 2, 11, 0), p2: 232 },
            { p1: new Date(2011, 2, 1, 20, 45), p2: 21214 }
        ];
        sortByField(array, 'p1');
        assert.deepEqual(array, [
            { p1: new Date(2010, 1, 1, 13, 30, 30, 10), p2: 312 },
            { p1: new Date(2010, 1, 1, 13, 30, 30, 12), p2: 53 },
            { p1: new Date(2011, 2, 1, 20, 45), p2: 21214 },
            { p1: new Date(2011, 3, 2, 11, 0), p2: 232 }
        ]);
    });

    it('sortByField(array, field) with strings', () => {
        let array = [{ p1: 'BTE', p2: 53 }, { p1: 'AAL', p2: 312 }, { p1: 'FFF', p2: 232 }, { p1: 'ADSA', p2: 21214 }];
        sortByField(array, 'p1');
        assert.deepEqual(array, [{ p1: 'AAL', p2: 312 }, { p1: 'ADSA', p2: 21214 }, { p1: 'BTE', p2: 53 }, { p1: 'FFF', p2: 232 }]);
    });

});
