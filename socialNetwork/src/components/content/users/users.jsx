import React from "react";
import style from "./users.module.css";
import * as axios from 'axios';

export const Users = (props) => {
  
  if (props.users.length === 0) {

    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        props.setUsers(response.data.items);
      })
  }

  return (
    <div>
      {
        props.users.map(u => {
          return (
            <div className={style.user} key={u.id}>
              <div className={style.avatar_wrap}>
                <img className={style.photo} src="#" alt="" />
                <button
                  onClick={() => { u.follow ? props.nofollow(u.id) : props.follow(u.id) }}
                >{u.follow ? 'Follow' : 'Nofollow'}</button>
              </div>
              <div className={style.content_wrap}>
                <div className={style.content}>
                  <div className={style.name}>{u.name }</div>
                  <div>{ 'u.location.city'}</div>
                </div>
                <span>{u.status}</span>
              </div>
            </div >
          )
        })
      }
    </div>
  )
}