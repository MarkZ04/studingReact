import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setUserProfilePageAC } from '../../../redux/profileReducer';
import { Profile } from './profile';
import { Preloader } from '../../common/preloader/preloader';
import { profileApi } from '../../../api';

const ProfileContainer = (props) => {
  let { userId } = useParams();

  useEffect(() => {
    profileApi.getProfile(userId).then((data) => {
      props.setUserProfilePageAC(data);
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
