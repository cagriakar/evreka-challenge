type order = -1 | 1 | 0;

export const ascendingOrder = (
    firstItem: string,
    secondItem: string
): order => {
    if (firstItem < secondItem) {
        return -1;
    }
    if (firstItem > secondItem) {
        return 1;
    }
    return 0;
};

export const descendingOrder = (
    firstItem: string,
    secondItem: string
): order => {
    if (firstItem < secondItem) {
        return 1;
    }
    if (firstItem > secondItem) {
        return -1;
    }
    return 0;
};
