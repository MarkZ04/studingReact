import axios from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Header } from './header';
import { setAuthUserDataAC } from '../../redux/authReducer';

const HeaderContainer = (props) => {
  useEffect(() => {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
        withCredentials: true,
      })
      .then((resolve) => {
        console.log(resolve.data);
        props.setAuthUserDataAC(resolve.data.data);
      });
  }, []);

  return <Header {...props} />;
};

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { setAuthUserDataAC })(HeaderContainer);
