import React from 'react';
import { NavLink } from 'react-router-dom';
import { followedApi } from '../../../api';
import style from './users.module.css';

export const Users = (props) => {
  let usersPages = [];
  let usersPageCount = Math.ceil(props.totalCount / props.usersCount);

  for (let i = 1; i <= usersPageCount; i++) {
    usersPages.push(i);
  }

  return (
    <>
      <div>
        {usersPages.map((page, i) => {
          if (i === 4) return <button key={0}>...</button>;
          if (i > 4 && i !== usersPages.length - 1) return;
          return (
            <button
              key={page}
              onClick={(e) => {
                props.setCurrentUsersPageAC(page);
              }}
            >
              {page}
            </button>
          );
        })}
      </div>

      {props.users.map((u) => {
        return (
          <div className={style.user} key={u.id}>
            <div className={style.avatar_wrap}>
              <NavLink className={style.photo} to={`/profile/${u.id}`}>
                <img
                  className={style.photo}
                  src={u.photos.small !== null ? u.photos.small : null}
                  alt=""
                />
              </NavLink>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.includes(u.id)}
                  onClick={() => {
                    props.toggleFollowingInProgressAC(u.id, true);
                    followedApi.deleteFollowed(u.id).then((data) => {
                      if (data.resultCode === 0) props.nofollowAC(u.id);
                      props.toggleFollowingInProgressAC(u.id, false);
                    });
                  }}
                >
                  Follow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.includes(u.id)}
                  onClick={() => {
                    props.toggleFollowingInProgressAC(u.id, true);
                    followedApi.postFollowed(u.id).then((data) => {
                      if (data.resultCode === 0) props.followAC(u.id);
                      props.toggleFollowingInProgressAC(u.id, false);
                    });
                  }}
                >
                  Nofollow
                </button>
              )}
            </div>

            <div className={style.content_wrap}>
              <div className={style.content}>
                <div className={style.name}>{u.name}</div>
                <div>{'u.city'}</div>
              </div>

              <span>{u.status}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};
