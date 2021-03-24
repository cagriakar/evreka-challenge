/* eslint-disable @typescript-eslint/no-explicit-any */
import { Detail, EventDataObject } from '../types';

const replaceItemAtIndex = (
    arr: Detail[] | EventDataObject[],
    index: number,
    newValue: unknown
): any[] => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

export default replaceItemAtIndex;
