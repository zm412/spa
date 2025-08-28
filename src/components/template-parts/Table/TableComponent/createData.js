const randomNum = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

function getRandomFloridaCoords() {
    const latMin = 24.5,
        latMax = 31.0;
    const lonMin = -87.6,
        lonMax = -80.0;

    const lat = Math.random() * (latMax - latMin) + latMin;
    const lon = Math.random() * (lonMax - lonMin) + lonMin;

    return { lat, lon };
}

const randomString = (min = 3, max = 30) => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const length = Math.floor(Math.random() * (max - min + 1)) + min;
    let result = "";

    function capitalizeWords(str) {
        return str.toLowerCase().replace(/(^|\s)\w/g, function (c) {
            return c.toUpperCase();
        });
    }

    for (let i = 0; i < length; i++) {
        if (Math.random() < 0.15 && i !== 0 && i !== length - 1) {
            result += " ";
        } else {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
    }

    return capitalizeWords(result);
};

export const generateDataRows = (n) => {
    const rows = [];
    for (let i = 1; i <= n; i++) {
        const { lat, lon } = getRandomFloridaCoords();
        rows.push({
            id: i,
            parentId: i > 1 ? randomNum(1, i - 1) : null,
            col1: randomNum(-70, 70),
            col2: randomNum(-70, 70),
            col3: randomNum(-70, 70),
            col4: randomNum(-70, 70),
            col5: randomNum(-70, 70),
            lat: lat,
            lng: lon,
            name: randomString(),
        });
    }
    return rows;
};
