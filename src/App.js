import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

function App() {
  return (
    <div className="app">
      <div className="app-wrapper">
        <Profile />
        <LoginButton />
        <LogoutButton />
      </div>
    </div>
  );
}

export default App;
