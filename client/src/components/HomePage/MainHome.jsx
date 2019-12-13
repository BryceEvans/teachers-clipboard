import React, {useCallback, useContext} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {ClassroomContext} from "../../Store";
import AddClass from "../Modals/AddClass";
import {SliderPicker} from 'react-color';
import {CirclePicker} from 'react-color';
import {AlphaPicker} from 'react-color';
import ButtonBase from "@material-ui/core/ButtonBase";
import {Link} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";

const MainHome = () => {
    const [classrooms, setClassroom] = useContext(ClassroomContext);

    const classes = useStyles();

    const renderCard = (classroom, index, backgroundColor) => {
        return (
            <ButtonBase className={classes.cardButton}
                        component={Link}
                        to={`home/${classroom.title}`}>
                <Card className={classes.card} style={{backgroundColor}}>
                    <CardContent>
                        <br/>
                        <Typography className={classes.title} color="textSecondary">
                            Class Title
                        </Typography>
                        <Typography variant="h3" component="h">
                            {classroom.title}
                        </Typography>
                    </CardContent>
                </Card>
            </ButtonBase>
        )
    }
    return (
        <div>
            <div className={classes.cardContainer}>
                {classrooms.length > 0 ? classrooms.map((classroom, i) => renderCard(classroom, i, classroom.color))
                    :
                    <div>
                        <h1>Uh oh! You don't have any classes yet.</h1>
                    </div>
                }
            </div>
            <div className={classes.addClassButton}>
                {/*<button>Add Class</button>*/}
                <AddClass/>
            </div>
        </div>
    );
}


export default MainHome

const useStyles = makeStyles({
    cardContainer: {
        paddingLeft: 60,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",

    },
    card: {
        width: 225,
        height: 225,
    },
    cardButton: {
        display: "block",
        textAlign: "initial",
        margin: 20,
    },
    addClassButton: {
        paddingLeft: 60,
        display: "flex",
        justifyContent: "center",
        fontSize: 30,
        margin: 15,
    },
    title: {
        fontSize: 14,
    },
});