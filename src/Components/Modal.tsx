import React from 'react'

export default function Modal({addNewTodo}) {
    return (
        <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Add Task
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="taskname"
                                placeholder="name@example.com"
                            />
                            <label for="floatingInput">Task Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="assignee"
                                placeholder="name@example.com"
                            />
                            <label for="floatingInput">Assignee</label>
                        </div>
                        <div className="w-100 mb-3">
                            <h6>Start Date</h6>
                            <input id="startdate" className="date w-100" type="date" />
                        </div>
                        <div className="w-100">
                            <h6>End Date</h6>
                            <input id="enddate" className="date w-100" type="date" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-dismiss="modal"
                            onClick={() => {
                                var taskname = document.getElementById("taskname").value;
                                var assignee = document.getElementById("assignee").value;
                                var startDate = document.getElementById("startdate").value;
                                var endDate = document.getElementById("enddate").value;
                                addNewTodo(taskname, assignee, startDate, endDate);
                            }}
                        >
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
