import React from 'react';

export const ProfileInfo = (props) => {
  return (
    <div>
      <img src={props.photoLarge} alt="photo"></img>
      <div>{props.fullName}</div>
      <div>{props.aboutMe}</div>
    </div>
  );
};
