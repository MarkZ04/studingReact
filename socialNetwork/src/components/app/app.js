import { Header } from '../header';
import { Profile } from '../profile';
import { Menu } from '../menu';
import style from './app.module.css';

export const App = () => {
  return (
    <div className={style.container}>
      <Header />
      <Profile />
      <Menu />
    </div>
  );
}
