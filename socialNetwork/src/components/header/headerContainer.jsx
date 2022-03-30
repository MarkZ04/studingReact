import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Header } from './header';
import { getAuthTC } from '../../redux/authReducer';

const HeaderContainer = (props) => {
	useEffect(() => {
		props.getAuthTC();
	}, []);

	return <Header {...props} />;
};

const mapStateToProps = (state) => {
	return {
		login: state.auth.login,
		isAuth: state.auth.isAuth,
	};
};

export default connect(mapStateToProps, {
	getAuthTC,
})(HeaderContainer);
