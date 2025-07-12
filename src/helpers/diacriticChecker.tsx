export const hasDiacriticCharacter = (inputString : string) => {
    const pattern = /\p{Diacritic}/gu;

    return pattern.test(inputString.normalize('NFD'));
};

export const removeDiacriticCharacter = (inputString : string) => {
    return inputString.normalize('NFD').replace(/\p{Diacritic}/gu, "")
};