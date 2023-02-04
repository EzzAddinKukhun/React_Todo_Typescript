import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import { Todo } from "./Tasks";
const Fade = require('react-reveal/Fade')
const Zoom = require('react-reveal/Zoom')


export default function ProgressBarContainers() {

  let [dataParsed, setDataParsed] = useState<Todo []>([]);


  async function getTasks() {
    await fetch(`http://localhost:8000/allTodos`, {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        setDataParsed(json);
      });
  }



  function renderProgressBar() {
    let donesCount = 0;
    let todoCount = 0;
    dataParsed.map((task) => {
      if (task.done == true) {
        donesCount++;
      }
      else {
        todoCount++;
      }
    })

    let donesPercent = (donesCount / dataParsed.length) * 100;
    let todoPercent = (todoCount / dataParsed.length) * 100;

    return (
      <>
          <ProgressBar title={"DONE(" + donesCount + ")"} percent={parseInt(donesPercent.toString())} />

          <ProgressBar title={"TODO(" + todoCount + ")"} percent={parseInt(todoPercent.toString())} />
      </>
    );
  }


  useEffect(() => {
    getTasks();
  }, []);


  return (

    <>
      <div className="prog-container">
        <div className="introduction">
          <h2>
            <Zoom cascade left>
                My Dashboard
                </Zoom>
                </h2>
          <p>
            <Zoom cascade left>
              This is a small dasboard for adding tasks for users to do them, and
              the user must see the name of the task to be sure about what
              he will todo in this task, you can search about the task, confirm
              it, and remove it. With our TODO list you can organize your tasks, so
              you can add the task required from you to the list to remember it, and
              when you finished the task, you can mark it as it done, and if the task canceled
              you can remove it from the list
            </Zoom>
          </p>
        </div>

        {renderProgressBar()}
      </div>
    </>
  );
}
