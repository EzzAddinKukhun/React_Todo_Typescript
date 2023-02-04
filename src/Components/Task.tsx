import React from "react";
import "../todostyle.css";

//PULL REQ INITIALIZED 

interface Props {
  id: number, 
  name: string,
  assignee: string,
  startDate: string,
  endDate: string,
  setTodoDone: Promise<void>,
  deleteTask: Promise<void>,
  doneAttribute: number
}

export default function Task({ id, name, assignee, startDate, endDate, setTodoDone, deleteTask, doneAttribute }: Props) {

  return (
    <>
      <div className="task">
        <div>
          <b>{id}</b>
        </div>
        <div>{name}</div>
        <div>{assignee}</div>
        <div>{startDate}</div>
        <div>{endDate}</div>
        <div>
          {
            doneAttribute? "" :  <button onClick={setTodoDone} type="button" className="btn btn-success">
            <i className="fa-solid fa-check"></i>
          </button>
          }   
        </div>
        <div>
          <button onClick={deleteTask} type="button" className="btn btn-danger">
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </>
  );
}
