const truncateText = (text, num) => {
    if (!text) return '';
    if (!num) return text;

    return text.length > num ? text.slice(0, num) + '...' : text;
};

export default {
    truncateText
};
