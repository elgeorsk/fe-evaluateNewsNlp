function checkEnterValue(inputText) {
    //console.log('::: Running checkEnterValue :::', inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ];

    if(names.includes(inputText)) {
        alert('Welcome, Captain!')
    };

    let data = inputText;
    return data;
};

export { checkEnterValue }
