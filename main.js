const yourName = document.getElementById('nombre')
const yourMail = document.getElementById('correo')
const yourMessage = document.getElementById('mensaje')
const userInfo = document.getElementById('content')
const submitBtn = document.getElementById('button1')

function onSubmit(event) {
    // para que no refresque la pagina
    event.preventDefault()
    saveDataStorage()
    
    const userFromStorage = JSON.parse(localStorage.getItem('userName'))
    userInfo.innerHTML = `<p>Hola ${userFromStorage.yourName} tu mail es ${userFromStorage.yourMail} con el mensaje ${userFromStorage.yourMessage}</p>`
    console.log(userFromStorage);
}

function saveDataStorage() {
    localStorage.setItem('userName', JSON.stringify({
        yourName: yourName.value,
        yourMail: yourMail.value,
        yourMessage: yourMessage.value,
    }))
}

submitBtn.addEventListener('click', onSubmit)