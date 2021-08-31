import './App.css';
import './components/welcomeScreen/css/welcomeView.css'
import './components/welcomeScreen/css/bannerView.css'
import './components/welcomeScreen/css/signInView.css'
import './components/welcomeScreen/css/newUserView.css'
import WelcomePresenter from "./components/welcomeScreen/presenters/welcomePresenter";

//TODO Find a better way of importing css files. This doesn't seems to be optimal

function App() {
  return (
    <div className="App">
      <WelcomePresenter/>
    </div>
  );
}

export default App;
