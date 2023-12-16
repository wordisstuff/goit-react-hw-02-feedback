
export const Color = (num) => {
    if (num > 85 && num <= 100) {
        return "rgba(4, 248, 121, 1)"
    } else if (num > 65 && num <= 85) {
        return "rgba(4, 162, 4, 1)"
    } else if (num >= 50 && num <= 65) {
        return "rgba(4, 105, 4, 1)"
    } else if (num > 30 && num <= 49) {
        return "rgba(205, 126, 6, 1)"
    } else if (num > 10 && num <= 29) {
        return "rgba(205, 62, 6, 1)"
    } else if (num > 0 && num <= 9) {
        return "rgba(255, 19, 0, 1)"
    }
};