import React from 'react'

export const Register = () => {
    return (
        <div>
            <h3>Registrate</h3>
            <div>
                {/*Muestra los errores*/}
            </div>
            <form>
                <input type="text"
                    placeholder="Nombre"
                    name="name"
                    autocomplete='off' />
                <input type="password"
                    placeholder="Password"
                    name="password" />
                <input type="text"
                    placeholder="Email"
                    name="email"
                    autocomplete='off' />
                <input type="password"
                    placeholder="Password"
                    name="password" />
                <button
                    type='submit'>
                    Login
                </button>
            </form>
        </div>
    )
}

export default Register