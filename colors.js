let body = document.querySelector('body');

function randomcolor() {
    return Math.floor(Math.random() * 255);
}

function rgbToHex(r, g, b) {
    // hexadecimal
    const red = r.toString(16).padStart(2, '0');
    const green = g.toString(16).padStart(2, '0');
    const blue = b.toString(16).padStart(2, '0');

    // Concatenate
    const hex = `#${red}${green}${blue}`;
    return hex
}

function rgbToCmy(r, g, b) {
    r = r / 255;
    g = g / 255;
    b = b / 255;

    const c = Math.round((1 - r) * 100);
    const m = Math.round((1 - g) * 100);
    const y = Math.round((1 - b) * 100);

    return [c, m, y];
}

function rgbToCmyk(r, g, b) {
    r = r / 255;
    g = g / 255;
    b = b / 255;

    // maximum of the RGB
    const max = Math.max(r, g, b);

    // Key/Black
    const k = 1 - max;

    // If K is 1 (max is 0), the color is black, and the C, M, and Y components are 0.
    if (k === 1) {
        return [0, 0, 0, 100];
    }
    // Calculate the C (Cyan), M (Magenta), and Y (Yellow) components
    const c = Math.round(((1 - r - k) / (1 - k)) * 100);
    const m = Math.round(((1 - g - k) / (1 - k)) * 100);
    const y = Math.round(((1 - b - k) / (1 - k)) * 100);
    l = Math.round(k * 100);

    return [c, m, y, l];
}

body.addEventListener('keypress', function() {
    r = randomcolor();
    g = randomcolor();
    b = randomcolor();
    body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + '\)';
    document.querySelector('#rgb').innerHTML = `RGB: ${body.style.backgroundColor}`;
    hex = rgbToHex(r, g, b).toUpperCase();
    document.querySelector('#hex').innerHTML = `HEX: ${hex}`;
    cmyk = rgbToCmyk(r, g, b);
    document.querySelector('#cmyk').innerHTML = `CMYK: C=${cmyk[0]}%, M=${cmyk[1]}%, Y=${cmyk[2]}%, K=${cmyk[3]}%`;
})

// mobile website

body.addEventListener('touchstart', function() {
    r = randomcolor();
    g = randomcolor();
    b = randomcolor();
    body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + '\)';
    document.querySelector('#rgb').innerHTML = `RGB: ${body.style.backgroundColor}`;
    hex = rgbToHex(r, g, b).toUpperCase();
    document.querySelector('#hex').innerHTML = `HEX: ${hex}`;
    cmyk = rgbToCmyk(r, g, b);
    document.querySelector('#cmyk').innerHTML = `CMYK: C=${cmyk[0]}%, M=${cmyk[1]}%, Y=${cmyk[2]}%, K=${cmyk[3]}%`;
})
