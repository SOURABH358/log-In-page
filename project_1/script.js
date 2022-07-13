
const header = document.querySelector('#header')
const logInForm = document.querySelector('#logIn__form');
const signUpForm = document.querySelector('#signUp__form');
const logInButton = document.querySelector('#logIn__button')
const signUpButton = document.querySelector('#signUp__button')
const msg = document.querySelector('#msg')

header.addEventListener('click', (e) => {
    Array.from(header.querySelectorAll('.link')).forEach(element => {
        element.classList.remove('active')
    })
    e.target.classList.add('active')

    if (e.target.id) {
        logInForm.classList.remove('hide')
        signUpForm.classList.remove('hide')
    }

    if (e.target.id === 'sign__up') {
        logInForm.classList.add('hide')
    }
    else if (e.target.id === 'log__in') {
        signUpForm.classList.add('hide')
    }
})

window.addEventListener('DOMContentLoaded', async () => {
    try {
        const { data } = await axios.get('/login');
        console.log(data)
    } catch (err) {
        console.log(err)

    }
})

signUpButton.addEventListener('click', async (e) => {
    e.preventDefault()
    const username = document.getElementById('name')
    const email = document.getElementById('mail')
    const password = document.getElementById('pass')
    const header = {
        'Content-type': 'application/json',
    }
    const response = await axios.post('/login',
        {
            "username": username.value,
            "email": email.value,
            "password": password.value
        }, {
        headers: header
    }).then(({ data }) => {
        // console.log(data);
        msg.innerHTML = data.data;
        msg.className = data.success?'success':'failure'
        username.value = '';
        email.value = '';
        password.value = '';
        
    }).catch(error=>{
        console.log(error);
    })
    setTimeout(() => {
        msg.innerHTML = ''
        msg.className = ''
    },2000)
})

logInButton.addEventListener('click', (e) => {
    e.preventDefault();
    const loginName = document.querySelector('#loginName')
    const loginPass = document.querySelector('#loginPass')

    const request = axios.post('/login/user', {
        username: loginName.value,
        password: loginPass.value
    }).then(({data}) => {
        msg.innerHTML = data.data;
        msg.className = data.success?'success':'failure'
        loginName.value = '';
        loginPass.value = '';
    }).catch(error => {
        console.log(error);
    })
    setTimeout(() => {
        msg.innerHTML = ''
        msg.className = ''
    },2000)
})