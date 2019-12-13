import React, {useCallback, useContext, useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {SliderPicker} from 'react-color';
import {ClassroomContext} from "../../Store";
import CropPortraitIcon from '@material-ui/icons/CropPortrait';
import CropLandscapeIcon from '@material-ui/icons/CropLandscape';
import ToggleButton from '@material-ui/lab/ToggleButton';

const StudentTracker = ({value, handleClose}) => {

    const [tempClass, setTempClass] = useState({
        title: "Class 1",
        classStudents: 30
    })

    const handleTextFieldChange = (e) => {
        console.log("E.Target.Value:", e.target.value);
        setTempClass({
            textFieldValue: e.target.value
        })
    };

    return (
        <div >
            <Dialog open={value} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Class</DialogTitle>
                <DialogContent>
                    <TextField
                        variant={"outlined"}
                        autoFocus
                        placeholder="Cheese"
                        margin="dense"
                        id="title"
                        label="Class Title"
                        type="string"
                        fullWidth
                        onChange={handleTextFieldChange}
                    />
                    <TextField
                        variant={"outlined"}
                        placeholder="{tempClass.classStudents}"
                        margin="dense"
                        id="classStudents"
                        label="Approximate Number of Students"
                        type="number"
                        fullWidth
                        onChange={handleTextFieldChange}
                    />
                    <div>
                        <DialogContentText>
                            Select Classroom Orientation
                        </DialogContentText>
                        <ToggleButton
                            value="yes"
                        >
                            <CropLandscapeIcon/>
                            AddClass.jsxLandscape
                        </ToggleButton>



                        <ToggleButton
                            value="check"
                        >
                            <CropPortraitIcon/>
                            Portrait
                        </ToggleButton>

                    </div>

                    <br/>
                    <DialogContentText>
                        Select a color
                    </DialogContentText>


                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={(e) => {
                        handleClose()
                    }} color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default StudentTracker