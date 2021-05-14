async function handleSubmit(event) {
    event.preventDefault();
    document.getElementById('results').innerHTML = '';
    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    Client.checkEnterValue(formText);

    //console.log('::: Form Submitted :::');
    // dev mode
    //fetch('/test')
    // prod mode
    fetch('/api?input='+formText)
    .then(res => res.json())
    .then(function(res) {
        if (res.length == 0){
            document.getElementById('results').innerHTML = "No data, please try again!"
        } else {
            let txt = '';
            for (let i in res) {
                txt += res[i].title + '<br/>';
            }
            document.getElementById('results').innerHTML = txt;
        }
    });
};

export { handleSubmit }