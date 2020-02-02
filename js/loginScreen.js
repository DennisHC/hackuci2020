function handleTextResult(text) {
    console.log(text)
}

function handleServerResponse(res) {
//    response.to
    res.text().then(handleTextResult)
}

function loginAuthentication()
{
    console.log("Hello World!");
    fetch("http://localhost:5000/login", {method: 'POST', mode: 'cors', body: "username: hello, password: world"}).then(handleServerResponse)
}