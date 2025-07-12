export const escapeSpecialChars = (needle: string) => {
    return needle.replace(/[\^$\\.*+?()[\]{}|]/g, '\\$&');
};

export const highlightText = (needle: string, haystack: string) => {
    return haystack.replace(new RegExp(escapeSpecialChars(needle), 'gi'), (str) => `<strong>${str}</strong>`);
};