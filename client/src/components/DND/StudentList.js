import React, {useCallback, useRef, useState} from "react";
import {useDrag, useDrop} from "react-dnd";
import update from "immutability-helper";


const channels = ["backlog", "new", "wip", "review", "done"];
const labelsMap = {
    backlog: "Backlog",
    new: "To Do",
    wip: "In Progress",
    review: "Review",
    done: "Done"
};

const classes = {
    board: {
        display: "flex",
        margin: "0 auto",
        width: "90vw",
        fontFamily: 'Arial, "Helvetica Neue", sans-serif'
    },
    column: {
        minWidth: 200,
        width: "18vw",
        height: "200px",
        margin: "0 auto",
        backgroundColor: "#FCC8B2"
    },
    columnHead: {
        textAlign: "center",
        padding: 10,
        fontSize: "1.2em",
        backgroundColor: "#C6D8AF"
    },
    item: {
        padding: 10,
        margin: 10,
        fontSize: "0.8em",
        cursor: "pointer",
        backgroundColor: "white"
    }
};

const StudentList = (props) => {
    const [tasks, setTaskStatus] = useState(props.tl);
    console.log("TASKS", props)
    // useEffect(() => setTaskStatus(props), [tasks])

    const changeTaskStatus = useCallback(
        (id, status) => {
            let task = tasks.find(task => task._id === id);
            const taskIndex = tasks.indexOf(task);
            task = {...task, status};
            let newTasks = update(tasks, {
                [taskIndex]: {$set: task}
            });
            setTaskStatus(newTasks);
        },
        [tasks]
    );

    return (
        <main>
            <section style={classes.board}>
                {channels.map(channel => (
                    <KanbanColumn
                        key={channel}
                        status={channel}
                        changeTaskStatus={changeTaskStatus}
                    >
                        <div style={classes.column}>
                            <div style={classes.columnHead}>{labelsMap[channel]}</div>
                            <div>
                                {tasks
                                    .filter(item => item.status === channel)
                                    .map(item => (
                                        <KanbanItem key={item._id} id={item._id}>
                                            <div style={classes.item}>{item.title}</div>
                                        </KanbanItem>
                                    ))}
                            </div>
                        </div>
                    </KanbanColumn>
                ))}
            </section>
        </main>
    );
};

export default StudentList;

const KanbanColumn = ({status, changeTaskStatus, children}) => {
    const ref = useRef(null);
    const [, drop] = useDrop({
        accept: "student",
        drop(item) {
            changeTaskStatus(item.id, status);
        }
    });
    drop(ref);
    return <div ref={ref}> {children}</div>;
};

const KanbanItem = ({id, children}) => {
    const ref = useRef(null);
    const [{isDragging}, drag] = useDrag({
        item: {type: "card", id},
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });
    const opacity = isDragging ? 0 : 1;
    drag(ref);
    return (
        <div ref={ref} style={{opacity}}>
            {children}
        </div>
    );
};