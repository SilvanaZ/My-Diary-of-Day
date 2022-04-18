import React, { useInsertionEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Notes } from '../pages/Notes';
import { AuthRouter } from './AuthRouter'
import {uiDispatch, dispatch} from 'react-redux';

export const AppRouter = () => {

    const [checking, setChecking] = useState
        (true);

    const [isLoggedIn, setLoggedIn] = useState(false);
    
    useEffect(()=>{
        onAuththStateChanged(get(), (user)=>{
        //console.log(user);    
        if(user.uid){
            dispatch(login(user.uid, user.displayName));
            setLoggedIn(true)
            
            //cargar las notas

        }else{
            setLoggedIn(false)
        }
        setChecking(true)    
    })
    }, [dispatch, setChecking, setLoggedIn]);

    if (checking) {
        return (
            <div className="auth__main">
                <div className="sk-fading-circle">
                    <div className="sk-circle1 sk-circle"></div>
                    <div className="sk-circle2 sk-circle"></div>
                    <div className="sk-circle3 sk-circle"></div>
                    <div className="sk-circle4 sk-circle"></div>
                    <div className="sk-circle5 sk-circle"></div>
                    <div className="sk-circle6 sk-circle"></div>
                    <div className="sk-circle7 sk-circle"></div>
                    <div className="sk-circle8 sk-circle"></div>
                    <div className="sk-circle9 sk-circle"></div>
                    <div className="sk-circle10 sk-circle"></div>
                    <div className="sk-circle11 sk-circle"></div>
                    <div className="sk-circle12 sk-circle"></div>
                </div>
            </div>
        )
    }

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path='/' element={<Notes />}>
                        <Route path='/auth/*' element={<AuthRouter />}>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}