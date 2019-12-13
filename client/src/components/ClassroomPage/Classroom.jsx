import React, {useCallback, useState, useEffect, useContext} from 'react'
import Desk from '../DND/DraggableDesk'
import {DeskContext, EditClassroomContext} from '../../Store'
import * as CommonFunctions from "../CommonFunctions";
import Card from '@material-ui/core/Card';
import ClassroomDesk from "./ClassroomDesk"
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core";


const Classroom = () => {
    const [editClassroom, setEditClassroom] = useContext(EditClassroomContext)
    const [desks, setDesks] = useContext(DeskContext)
    const classes = useStyles();

    // const renderCard = (desk, index) => {
    //     return (
    //         <Card className={classes.card} >
    //             <CardContent>
    //                 <Typography className={classes.title} color="textSecondary">
    //                     Class Title
    //                 </Typography>
    //             </CardContent>
    //         </Card>
    //     )
    // }
    // return (
    //     <>
    //         <div style={styles}>
    //             {desks && desks.map((desk, i) => renderCard(desk, i))}
    //         </div>
    //     </>
    // )
    function renderBox(item, key, index) {
        return <ClassroomDesk key={key} id={key} {...item} index={index}/>
    }

    return (
        <div className="DnD">
            <div style={myParent}>
                <div style={myChild}>
                    <button onClick={() => setEditClassroom(!editClassroom)}>EDIT</button>
                </div>
                <div style={styles}>
                    {Object.keys(desks).map((key, index) =>
                        renderBox(desks[key], key, index))}
                </div>
            </div>
        </div>


    )

}

export default Classroom

const useStyles = makeStyles({

    card: {
        width: 80,
        height: 60,
    },
    title: {
        fontSize: 14,
    },
});

const styles = {
    width: "1000px",
    height: "700px",
    border: '1px solid black',
    backgroundColor: "lightgray",
    position: 'relative',
}
const myParent = {
    display: "flex",
    // justifyContent: "center",
    flexWrap: "nowrap",
    padding: 5,
}
const myChild = {
    marginLeft: 5,
    marginRight: 5,
}
