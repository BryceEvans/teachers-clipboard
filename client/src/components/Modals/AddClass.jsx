import React, {useCallback, useContext, useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// import {SliderPicker} from 'react-color';
import {SliderPicker} from 'react-color';
import {ClassroomContext} from "../../Store";


const AddClass = () => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [classrooms, setClassroom] = useContext(ClassroomContext)
    console.log("Classrooms in State", classrooms);
    const [tempClass, setTempClass] = useState({
        title: "Class 1",
        classStudents: 30
    })
    const [tempColor, setTempColor] = useState({
        selectedColor: "#79c9d2"
    })


    const handleChangeComplete = (color, event) => {
        console.log("COLOR.HEX: ", color.hex);
        setTempColor({selectedColor: color.hex})
    };


    const createClass = useCallback(() => {
        setClassroom([...classrooms, {
            title: tempClass.title,
            icon: "ClassIcon",
            color: tempColor.selectedColor,
            classStudents: tempClass.classStudents
        }])
    });

    const handleTextFieldChange = (e) => {
        console.log("E.Target.Value:", e.target.value);
        setTempClass({
            textFieldValue: e.target.value
        })
    };

    // const handleTextFieldChange = (e) => {
    //     // console.log("EVENT",e);
    //     // console.log("EVENT COLOR", e.target.value);
    //     setTempClass({
    //         textFieldValue: e.target.value
    //     });
    // }

    return (
        <div>
            { useEffect(() => {
            {
                console.log("UseEffect Title",tempClass.title)
                console.log("UseEffect Stud",tempClass.classStudents)
            }
        }, [tempClass])}
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Add Class
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Class</DialogTitle>
                <DialogContent>
                    <TextField
                        variant={"outlined"}
                        autoFocus
                        placeholder={tempClass.title}
                        margin="dense"
                        id="title"
                        label="Class Title"
                        type="string"
                        fullWidth
                        onChange={handleTextFieldChange}
                    />
                    <TextField
                        variant={"outlined"}
                        placeholder={tempClass.classStudents}
                        margin="dense"
                        id="classStudents"
                        label="Approximate Number of Students"
                        type="number"
                        fullWidth
                        onChange={handleTextFieldChange}
                    />
                    <br/>
                    <br/>
                    <DialogContentText>
                        Select a color
                    </DialogContentText>

                    <SliderPicker color={tempColor.selectedColor} onChangeComplete={handleChangeComplete}/>


                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={(e) => {
                        createClass(e);
                        handleClose()
                    }} color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );

}
export default AddClass