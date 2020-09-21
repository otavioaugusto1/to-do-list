import React, { Component } from 'react'
import Logo from '../logotipo1.png'
import './estiloLogo.css'

export default class Header extends Component{
    render(){
        return(
            <img src={Logo} alt='Logotipo'></img>
        )
    }
}