import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { setUserProfilePageAC } from '../../../redux/profileReducer';
import { Profile } from './profile';
import { Preloader } from '../../common/preloader/preloader';

const ProfileContainer = (props) => {
  let { userId } = useParams();

  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        props.setUserProfilePageAC(response.data);
      });
  }, [userId]);

  return (
    <>
      {props.userProfile ? (
        <Profile userProfile={props.userProfile} />
      ) : (
        <Preloader />
      )}
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
  };
};

export default connect(mapStateToProps, { setUserProfilePageAC })(
  ProfileContainer
);
