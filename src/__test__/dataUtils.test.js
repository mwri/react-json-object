import {
    dataPathToPrefixedClassNames, extendDataPath, jsonDataToMd5Sum,
    jsonDataType,
} from '../dataUtils';

describe('dataUtils', () => {
    describe('jsonDataType', () => {
        it('object recogised as object', () => {
            expect(jsonDataType({})).toEqual('object');
        });

        it('array recogised as array', () => {
            expect(jsonDataType([])).toEqual('array');
        });

        it('string recogised as string', () => {
            expect(jsonDataType('wibble')).toEqual('string');
        });

        it('number recogised as number', () => {
            expect(jsonDataType(5)).toEqual('number');
            expect(jsonDataType(5.5)).toEqual('number');
            expect(jsonDataType(0)).toEqual('number');
            expect(jsonDataType(-2)).toEqual('number');
        });

        it('boolean recogised as boolean', () => {
            expect(jsonDataType(true)).toEqual('boolean');
            expect(jsonDataType(false)).toEqual('boolean');
        });

        it('null recogised as null', () => {
            expect(jsonDataType(null)).toEqual('null');
        });

        it('undefined recogised as undefined', () => {
            expect(jsonDataType(undefined)).toEqual('undefined');
        });
    });

    describe('jsonDataToMd5Sum', () => {
        it('object digested', () => {
            expect(jsonDataToMd5Sum({})).toEqual(expect.stringMatching(/^[0-9a-f]{32}$/));
        });

        it('array digested', () => {
            expect(jsonDataToMd5Sum([])).toEqual(expect.stringMatching(/^[0-9a-f]{32}$/));
        });

        it('string digested', () => {
            expect(jsonDataToMd5Sum('wibble')).toEqual(expect.stringMatching(/^[0-9a-f]{32}$/));
        });

        it('number digested', () => {
            expect(jsonDataToMd5Sum(5)).toEqual(expect.stringMatching(/^[0-9a-f]{32}$/));
            expect(jsonDataToMd5Sum(5.5)).toEqual(expect.stringMatching(/^[0-9a-f]{32}$/));
            expect(jsonDataToMd5Sum(0)).toEqual(expect.stringMatching(/^[0-9a-f]{32}$/));
            expect(jsonDataToMd5Sum(-2)).toEqual(expect.stringMatching(/^[0-9a-f]{32}$/));
        });

        it('boolean digested', () => {
            expect(jsonDataToMd5Sum(true)).toEqual(expect.stringMatching(/^[0-9a-f]{32}$/));
            expect(jsonDataToMd5Sum(false)).toEqual(expect.stringMatching(/^[0-9a-f]{32}$/));
        });

        it('null digested', () => {
            expect(jsonDataToMd5Sum(null)).toEqual(expect.stringMatching(/^[0-9a-f]{32}$/));
        });

        it('undefined digested', () => {
            expect(jsonDataToMd5Sum(undefined)).toEqual(expect.stringMatching(/^[0-9a-f]{32}$/));
        });
    });

    describe('dataPathToPrefixedClassNames', () => {
        it('simple concat for just strings', () => {
            expect(dataPathToPrefixedClassNames(['aaa', 'bb', 'c'], 'prefix')).toEqual(['prefix-aaa-bb-c']);
        });

        it('adds position specific and non specific classes for numbers', () => {
            expect(dataPathToPrefixedClassNames(['aaa', 3], 'prefix')).toEqual(
                ['prefix-aaa-n', 'prefix-aaa-3'],
            );
        });

        it('multiplies up combinations for numbers', () => {
            expect(dataPathToPrefixedClassNames(['aaa', 3, 20, 'd'], 'prefix')).toEqual(
                ['prefix-aaa-n-n-d', 'prefix-aaa-n-20-d', 'prefix-aaa-3-n-d', 'prefix-aaa-3-20-d'],
            );

            expect(dataPathToPrefixedClassNames(['aaa', 3, 20, 'd'], 'prefix', 'numbered_and_unnumbered')).toEqual(
                ['prefix-aaa-n-n-d', 'prefix-aaa-n-20-d', 'prefix-aaa-3-n-d', 'prefix-aaa-3-20-d'],
            );
        });

        it('single non indexed class if arrays="unnumbered"', () => {
            expect(dataPathToPrefixedClassNames(['aaa', 3, 20, 'd'], 'prefix', 'unnumbered')).toEqual(
                ['prefix-aaa-n-n-d'],
            );
        });

        it('single non indexed class if arrays="numbered"', () => {
            expect(dataPathToPrefixedClassNames(['aaa', 3, 20, 'd'], 'prefix', 'numbered')).toEqual(
                ['prefix-aaa-3-20-d'],
            );
        });

        it('works for root', () => {
            expect(dataPathToPrefixedClassNames(['root'], 'prefix')).toEqual(
                ['prefix-root'],
            );
        });

        it('works for empty path', () => {
            expect(dataPathToPrefixedClassNames([], 'prefix')).toEqual(
                ['prefix'],
            );
        });
    });

    describe('extendDataPath', () => {
        it('works for strings', () => {
            expect(extendDataPath(['aaa'], 'bb')).toEqual(['aaa', 'bb']);
        });

        it('works for numbers', () => {
            expect(extendDataPath(['aaa'], 6)).toEqual(['aaa', 6]);
        });
    });
});
