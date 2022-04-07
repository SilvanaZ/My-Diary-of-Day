import React from 'react'

const Login = () => {
  return (
    <div>
        <h3>Login</h3>
        <div>
            [/*Muestra los errores*/]
        </div>
        <form>
            <input type="text"
            placeholder="Email"
            name="email"
            autocomplete='off'/>
              <input type="password"
                  placeholder="Password"
                  name="password" />
                  <button
                  type='submit'>
                      Login
                  </button>
                  <div className='auth_social-networks'>
                      <p>Logueate con tus redes sociales</p>
                      <div className='google-btn'>
                          <div className='google-icon-wrapper'>
                          <img src=" https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                          </div>
                      </div>
                  </div>
        </form>
    </div>
  )
}

export default Login