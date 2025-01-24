// login

function login() {
    const login_email = document.getElementById('login-email');
    const login_password = document.getElementById('login-password')

    const login = {
        email: login_email.value,
        password: login_password.value
    }

    console.log(login)
}

// signup

function signup() {
    const signup_email = document.getElementById('signup-email')
    const signup_name = document.getElementById('signup-name')
    const signup_password = document.getElementById('signup-password')

    const signup = {
        name: signup_name.value,
        email: signup_email.value,
        password: signup_password.value
    }

    console.log(signup)

}