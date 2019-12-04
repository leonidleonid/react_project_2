import React from 'react';
import css from './ProfileInfo.module.css';
import ava from './../../../user_avatar.jpg';
import sign from './../../../sign_gray.svg';

const ProfileInfo = (props) => {
	return (
		<div className={css.container}>
			<img className={css.avatar} src={ava} alt=""/>
			<img className={css.sign} src={sign} alt=""/>
			<div className={css.userInfo}>
				<div className={css.userName}>
					{props.data.userName} {props.data.userLastName}
				</div>
				<div className={css.userState}>
					{props.data.userState}
				</div>
			</div>
		</div>
	)
};

export default ProfileInfo;
