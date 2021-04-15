import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile';

function App() {
  const myName="Rihab EL JAYEZ"
  const myProfession="Student"
  const bio="Recent computer science graduate with a passion for developing scalable web site and application and working across the full stack."
  const myAlert=()=>{
    alert('Rihab EL JAYEZ')
  }
  return (
    <div className="App">

      <Profile myFullName={myName} myProf={myProfession} myBio={bio} myAlert={myAlert}> <img style={{height:150, width:150}} src="myPhoto.jpg" alt="picture"/></Profile>
      
    </div>
  );
}

export default App;
