import SignInView from "../views/signInView";
import WelcomeBottomView from "../views/welcomBottomView";
import WelcomeTopView from "../views/welcomeTopView";
import {useState} from "react";
import NewUserView from "../views/newUserView";


function WelcomePresenter(props) {

    const [newUser , setNewUser ] = useState(false)

    return (
        <div className="WelcomeView">
            <WelcomeTopView/>
            <SignInView hidden = {!newUser} newUser = {()=> {setNewUser(true)}}/>
            <NewUserView hidden ={newUser} goback = {()=> {setNewUser(false)}} />
            <WelcomeBottomView/>
        </div>
    );
}
export default WelcomePresenter;