const header = document.querySelector('#header')
const logInForm = document.querySelector('#logIn__form');
const signUpForm = document.querySelector('#signUp__form');
const logInButton = document.querySelector('#logIn__button')
const signUpButton = document.querySelector('#signUp__button')

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


signUpButton.addEventListener('click',async ()=>{
    const username = document.getElementById('name')
    const email = document.getElementById('mail')
    const password = document.getElementById('pass')
    console.log(username.value)
    console.log(email.value)
    console.log(password.value)
   try{
    const data = await axios.post('/login',{"username":username.value, "email":email.value, "password" : password.value })
    console.log(data);
   }catch(err){
    console.log(err)
   }
})