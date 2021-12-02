import { ProfileForm } from "../components";
import { useSelector } from "react-redux";

export const ProfilePage = () => {

  const { firstName, ...profile } = useSelector((state) => {
    return state.profile;
  })

  return (
    <div>
      <h1>Profile</h1>

      <div>
        <h2>First name: {firstName}</h2>
        <h2>Last name: {profile.lastName}</h2>
        <h2>Phone: {profile.phone}</h2>
      </div>

      <ProfileForm firstName={firstName} lastName={profile.lastName} {...profile} />
    </div>

  );
};