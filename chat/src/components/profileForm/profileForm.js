import { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Button } from "@mui/material";
import { updateProfile } from "../../store/profile";

export const ProfileForm = ({ firstName, lastName, phone }) => {
  const [form, setForm] = useState({ firstName, lastName, phone });

  const dispatch = useDispatch();

  const handleChangeForm = (e) => {
    const fieldName = e.target.getAttribute('data-name');

    setForm({ ...form, [fieldName]: e.target.value });
  }


  return (
    <div>
      <h2>Edit Profile</h2>

      <div>
        <Input
          fullWidth
          placeholder="First name"
          value={form.firstName}
          inputProps={{ 'data-name': 'firstName' }}
          onChange={handleChangeForm}
        />
        <Input
          fullWidth
          placeholder="Last name"
          value={form.lastName}
          inputProps={{ 'data-name': 'lastName' }}
          onChange={handleChangeForm}
        />
        <Input
          fullWidth
          placeholder="Phone"
          value={form.phone}
          inputProps={{ 'data-name': 'phone' }}
          onChange={handleChangeForm}
        />

        <Button onClick={() => dispatch(updateProfile(form))}>Save form</Button>
      </div>
    </div>
  )
}