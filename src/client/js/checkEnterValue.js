function checkEnterValue(inputText) {
    // source https://stackoverflow.com/questions/15458876/check-if-a-string-is-html-or-not/15458987
    let htmlRegex = new RegExp(/<[a-z][\s\S]*>/);

    let data;
    if(htmlRegex.test(inputText)) {
        alert('Input value contains HTML tags, please use only plain text!');
        data = 'error';
    }else{
        data = inputText;
    }
    return data;
};

export { checkEnterValue }
