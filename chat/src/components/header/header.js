import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/profile">Profile</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/gists">Gists</Link>
      </nav>
    </div>
  )
}