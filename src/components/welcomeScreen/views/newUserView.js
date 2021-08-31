function NewUserView(props){
    return(<div className={"newUserView signIn-view " + (props.hidden ? "active":"")}>
        <div className="signIn-field">
            <input className="signIn-inputField" id="inviteCode"/>
            <div className="signIn-title">Inbjudningskod</div>
        </div>
        <div className="signIn-field">
            <input className="signIn-inputField" id="username"/>
            <div className="signIn-title">Användarnamn</div>
        </div>
        <div className="signIn-field">
            <input className="signIn-inputField" id="password" type="password"/>
            <div className="signIn-title">Lösenord</div>
        </div>
        <div className="signIn-field">
            <input className="signIn-inputField" id="retype-password" type="password"/>
            <div className="signIn-title">Upprepa lösenord</div>
        </div>
        <div className="signIn-button">
            <button className="signIn-button">Fortsätt</button>
        </div>
        <div className="signIn-button">
            <button className="signIn-button" onClick={props.goback}>Go back</button>
        </div>
    </div>)
}
export default NewUserView