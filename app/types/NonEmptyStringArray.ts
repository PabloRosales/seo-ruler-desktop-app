type NonEmptyStringArray<T extends string> = [T, ...T[]];

export default NonEmptyStringArray;
