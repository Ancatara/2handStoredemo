const labels =document.querySelectorAll('.form-control label')
 
labels.forEach(label =>{
    label.innerHTML = label.innerText
            .split('')
            .map((letter, idx)=> `<span>${letter}</span>`)
            .join('')
})

const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const rePassword = document.getElementById('rePassword')
const email = document.getElementById('email')

form.addEventListener('submit', (e) =>{
    let messages = []
    if (name.value === '' || name.value == null) {
        alert('Name is required')
    }
     
    if (password.value.length <= 6) {
        alert('Password must be longer than 6 character')
    }
    if (password.value.length >= 20) {
        alert('Password must be less than 6 character')
    }
    if (rePassword.value !== password.value ) {
        alert('Re-password not match password')
    }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    else{
        alert('Register Successful')
    }
}
    )
