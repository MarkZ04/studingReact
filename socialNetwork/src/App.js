import { Header } from './components/Header';
import { Profile } from './components/Profile';
import { Menu } from './components/Menu';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <Profile />
      <Menu />
    </div>
  );
}

export default App;
