"use strict";

var _dataUtils = require("../dataUtils");

describe('dataUtils', () => {
  describe('jsonDataType', () => {
    it('object recogised as object', () => {
      expect((0, _dataUtils.jsonDataType)({})).toEqual('object');
    });
    it('array recogised as array', () => {
      expect((0, _dataUtils.jsonDataType)([])).toEqual('array');
    });
    it('string recogised as string', () => {
      expect((0, _dataUtils.jsonDataType)('wibble')).toEqual('string');
    });
    it('number recogised as number', () => {
      expect((0, _dataUtils.jsonDataType)(5)).toEqual('number');
      expect((0, _dataUtils.jsonDataType)(5.5)).toEqual('number');
      expect((0, _dataUtils.jsonDataType)(0)).toEqual('number');
      expect((0, _dataUtils.jsonDataType)(-2)).toEqual('number');
    });
    it('boolean recogised as boolean', () => {
      expect((0, _dataUtils.jsonDataType)(true)).toEqual('boolean');
      expect((0, _dataUtils.jsonDataType)(false)).toEqual('boolean');
    });
    it('null recogised as null', () => {
      expect((0, _dataUtils.jsonDataType)(null)).toEqual('null');
    });
    it('undefined recogised as undefined', () => {
      expect((0, _dataUtils.jsonDataType)(undefined)).toEqual('undefined');
    });
  });
  describe('jsonDataToMd5Sum', () => {
    it('object digested', () => {
      expect((0, _dataUtils.jsonDataToMd5Sum)({})).toEqual(expect.stringMatching(/^[0-9a-f]{32}$/));
    });
    it('array digested', () => {
      expect((0, _dataUtils.jsonDataToMd5Sum)([])).toEqual(expect.stringMatching(/^[0-9a-f]{32}$/));
    });
    it('string digested', () => {
      expect((0, _dataUtils.jsonDataToMd5Sum)('wibble')).toEqual(expect.stringMatching(/^[0-9a-f]{32}$/));
    });
    it('number digested', () => {
      expect((0, _dataUtils.jsonDataToMd5Sum)(5)).toEqual(expect.stringMatching(/^[0-9a-f]{32}$/));
      expect((0, _dataUtils.jsonDataToMd5Sum)(5.5)).toEqual(expect.stringMatching(/^[0-9a-f]{32}$/));
      expect((0, _dataUtils.jsonDataToMd5Sum)(0)).toEqual(expect.stringMatching(/^[0-9a-f]{32}$/));
      expect((0, _dataUtils.jsonDataToMd5Sum)(-2)).toEqual(expect.stringMatching(/^[0-9a-f]{32}$/));
    });
    it('boolean digested', () => {
      expect((0, _dataUtils.jsonDataToMd5Sum)(true)).toEqual(expect.stringMatching(/^[0-9a-f]{32}$/));
      expect((0, _dataUtils.jsonDataToMd5Sum)(false)).toEqual(expect.stringMatching(/^[0-9a-f]{32}$/));
    });
    it('null digested', () => {
      expect((0, _dataUtils.jsonDataToMd5Sum)(null)).toEqual(expect.stringMatching(/^[0-9a-f]{32}$/));
    });
    it('undefined digested', () => {
      expect((0, _dataUtils.jsonDataToMd5Sum)(undefined)).toEqual(expect.stringMatching(/^[0-9a-f]{32}$/));
    });
  });
  describe('dataPathToPrefixedClassNames', () => {
    it('simple concat for just strings', () => {
      expect((0, _dataUtils.dataPathToPrefixedClassNames)(['aaa', 'bb', 'c'], 'prefix')).toEqual(['prefix-aaa-bb-c']);
    });
    it('adds position specific and non specific classes for numbers', () => {
      expect((0, _dataUtils.dataPathToPrefixedClassNames)(['aaa', 3], 'prefix')).toEqual(['prefix-aaa-n', 'prefix-aaa-3']);
    });
    it('multiplies up combinations for numbers', () => {
      expect((0, _dataUtils.dataPathToPrefixedClassNames)(['aaa', 3, 20, 'd'], 'prefix')).toEqual(['prefix-aaa-n-n-d', 'prefix-aaa-n-20-d', 'prefix-aaa-3-n-d', 'prefix-aaa-3-20-d']);
      expect((0, _dataUtils.dataPathToPrefixedClassNames)(['aaa', 3, 20, 'd'], 'prefix', 'numbered_and_unnumbered')).toEqual(['prefix-aaa-n-n-d', 'prefix-aaa-n-20-d', 'prefix-aaa-3-n-d', 'prefix-aaa-3-20-d']);
    });
    it('single non indexed class if arrays="unnumbered"', () => {
      expect((0, _dataUtils.dataPathToPrefixedClassNames)(['aaa', 3, 20, 'd'], 'prefix', 'unnumbered')).toEqual(['prefix-aaa-n-n-d']);
    });
    it('single non indexed class if arrays="numbered"', () => {
      expect((0, _dataUtils.dataPathToPrefixedClassNames)(['aaa', 3, 20, 'd'], 'prefix', 'numbered')).toEqual(['prefix-aaa-3-20-d']);
    });
    it('works for root', () => {
      expect((0, _dataUtils.dataPathToPrefixedClassNames)(['root'], 'prefix')).toEqual(['prefix-root']);
    });
    it('works for empty path', () => {
      expect((0, _dataUtils.dataPathToPrefixedClassNames)([], 'prefix')).toEqual(['prefix']);
    });
  });
  describe('extendDataPath', () => {
    it('works for strings', () => {
      expect((0, _dataUtils.extendDataPath)(['aaa'], 'bb')).toEqual(['aaa', 'bb']);
    });
    it('works for numbers', () => {
      expect((0, _dataUtils.extendDataPath)(['aaa'], 6)).toEqual(['aaa', 6]);
    });
  });
});