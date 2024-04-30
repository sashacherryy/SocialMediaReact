import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";



const DialogItem = (props) => {

  let path = `/dialogs/${props.id}`

  return (
    <div className={classes.item + ' ' + classes.active} >
    <NavLink to={path}>{props.name}</NavLink>
  </div>
  )
}

const Message = (props) => {
  return <div className={classes.ms}>{props.message}</div>
}

const Dialogs = () => {
  let dialogsData = [
    { id: 1, name: "Sasha" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Kostya" },
    { id: 4, name: "Varfs" },
    { id: 5, name: "Vlad" },
    { id: 6, name: "Getic" },
  ];

  let message = [
    { id: 1, message: "Hi hwo are u?"  },
    { id: 2, message: "i'm fine, what bout u?" },
    { id: 3, message: "Hi ll, how are u?" },
    { id: 4, message: "what''s app" },
    { id: 5, message: "Yo"},
    { id: 6, message: "Hey" }
  ];
  
  let messageElements = message.map( m => <Message key={m.id}  message={m.message} />)
      
  return (
    <div className={classes.messangerBlock}>
      <div className={classes.dialog}>
        <div className={classes.dialogs_item}>
          {dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)}
        </div>
      </div>
      <div className={classes.messages}>
        {messageElements}
        </div>
    </div>
  );
};

export default Dialogs;
