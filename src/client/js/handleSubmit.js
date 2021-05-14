async function handleSubmit(event) {
    event.preventDefault();
    document.getElementById('results').innerHTML = '';
    // check what text was put into the form field
    let formText = document.getElementById('name').value;

    // validate the entered value
    if (Client.checkEnterValue(formText) === 'error'){
        document.getElementById('results').innerHTML = 'An error occurred, please try again!'
    } else {
        // dev mode
        //fetch('/test')
        // prod mode
        postData('/api?input=' + formText)
            .then(function (res) {
                console.log("%j", res);
                console.log("Response code - " + res.status.code);
                if (res.status.code === '0') {

                    let txt = '<table>' +
                        '<tr><th>Model:</th><td>' + res.model + '</td></tr>' +
                        '<tr><th>Score tag:</th><td>' + res.score_tag + '</td></tr>' +
                        '<tr><th>Agreement:</th><td>' + res.agreement + '</td></tr>' +
                        '<tr><th>Subjectivity:</th><td>' + res.subjectivity + '</td></tr>' +
                        '<tr><th>Confidence:</th><td>' + res.confidence + '</td></tr>' +
                        '<tr><th>Irony:</th><td>' + res.irony + '</td></tr>' +
                        '</table>';
                    document.getElementById('results').innerHTML = txt;
                } else {
                    document.getElementById('results').innerHTML = 'No data, please try again!'
                }
            });
    }
};

async function postData (url = '', data = {}){
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        return newData
    } catch (error) {
        console.log("error", error);
    }
};

export { handleSubmit }