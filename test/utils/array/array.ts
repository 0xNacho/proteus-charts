/* tslint:disable */ 


import { assert } from 'chai';
import { } from 'mocha';
import {
    fitArrayByOldAndNewValue
} from '../../../src/utils/array/array';

describe('Array transformation functions', () => {

    it('fitfitArrayByOldAndNewValueArray(newData: Array<any>, originalData: Array<any>, size: number): should take all the values from both arrays', () => {
        let newData = [7, 8, 9];
        let oldData = [4, 5, 6];
        assert.deepEqual(fitArrayByOldAndNewValue(newData, oldData, 6), [4, 5, 6, 7, 8, 9]);
    });

    it('fitArrayByOldAndNewValue(newData: Array<any>, originalData: Array<any>, size: number) : should take all the values from newData and only one from newData', () => {
        let newData = [7, 8, 9];
        let oldData = [4, 5, 6];
        assert.deepEqual(fitArrayByOldAndNewValue(newData, oldData, 4), [6, 7, 8, 9]);
    });

    it('fitArrayByOldAndNewValue(newData: Array<any>, originalData: Array<any>, size: number) : should take all the values from newData and only one from newData', () => {
        let newData = [7, 8, 9];
        let oldData = [4, 5, 6];
        assert.deepEqual(fitArrayByOldAndNewValue(newData, oldData, 1), [9]);
    });

    it('fitArrayByOldAndNewValue(newData: Array<any>, originalData: Array<any>, size: number) : should return an empty array', () => {
        let newData = [7, 8, 9];
        let oldData = [4, 5, 6];
        assert.deepEqual(fitArrayByOldAndNewValue(newData, oldData, 0), []);
    });
});
