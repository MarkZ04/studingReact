import { flexbox } from "@mui/system";
import { Link } from "react-router-dom";
import { firebaseApp } from "../../api/firebase";

const signOut = () => {
  firebaseApp.auth().signOut();
}

export const Header = ({ session }) => {

  const email = session?.email;

  return (
    <div>
      <nav>
        <Link to="/">Main </Link>
        {email && (
          <div style={{ display: "flex" }}>
            <Link to="/profile">Profile </Link>
            <Link to="/chat">Chat </Link>
            <Link to="/gists">Gists </Link>
            <h3 >{email}</h3>
            <button onClick={signOut}>Выход</button>
          </div>
        )}

        {!email && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/sign-up">Sign up</Link>
          </>
        )}
      </nav>
    </div>
  )
}