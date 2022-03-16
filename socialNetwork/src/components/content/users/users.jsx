import React from "react";
import style from "./users.module.css"

export const Users = (props) => {
  // if (props.users.length === 0) {
  //   props.setUsers([
  //     {
  //       id: 1,
  //       firstName: 'Anna',
  //       lastName: 'Sap',
  //       status: 'Hello!',
  //       photoUrl: 'URL',
  //       follow: true,
  //       location: {
  //         country: 'Russia',
  //         city: 'Saint-Petersburg'
  //       }
  //     },
  //     {
  //       id: 2,
  //       firstName: 'Alex',
  //       lastName: 'Sam',
  //       status: 'Hi!',
  //       photoUrl: 'URL',
  //       follow: false,
  //       location: {
  //         country: 'Belarus',
  //         city: 'Minsk'
  //       }
  //     }
  //   ])
  // }

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
                  <div className={style.name}>{u.firstName }</div>
                  <div>{ u.location.city}</div>
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