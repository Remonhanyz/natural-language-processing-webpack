function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (Client.checkForName(formText)) {

        console.log("::: Form Submitted :::")

        let data = {
            url: formText
        }
        // sending data to the server
        async function sendData() {
            await fetch("http://localhost:8081/posturl", {
                method: "POST",
                credentials: "same-origin",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)

            })
                // fetch('http://localhost:8081/posturl')
                // .then(res => res.json())
                .then(function (res) {
                    document.getElementById('results').innerHTML = `
                    score_tag : ${res.score_tag} <br>
                    agreement : ${res.agreement} <br>
                    subjectivity : ${res.subjectivity} <br>
                    confidence : ${res.confidence} <br>
                    irony : ${res.irony}`
                })
        }
        sendData()
    }
}

export { handleSubmit }
