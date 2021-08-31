import {useState} from "react";

function SignInView(props){

    return(<div className={"signIn-view " + (props.hidden ? "active":"")}>
        <div className="signIn-field">
            <input className="signIn-inputField" id="username"/>
            <div className="signIn-title">Användarnamn</div>
        </div>
        <div className="signIn-field">
            <input className="signIn-inputField" id="password" type="password"/>
            <div className="signIn-title">Lösenord</div>
        </div>
        <div className="signIn-button">
            <button className="signIn-button" onClick={()=>console.log("time to log in")}>Logga in</button>
        </div>
        <div className="signIn-newUser">
            <span className="signIn-span">Inget Konto?</span><span className="signIn-span spanUnderline" onClick={props.newUser}>Registrera dig här</span>
        </div>
    </div>)
}

export default SignInView