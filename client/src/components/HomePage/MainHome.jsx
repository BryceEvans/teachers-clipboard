import React, {useCallback, useContext} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {ClassroomContext} from "../../Store";

const MainHome = () => {
    const [classrooms, setClassroom] = useContext(ClassroomContext);

    const classes = useStyles();

    const renderCard = (classroom, index, backgroundColor) => {
        return (
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
                <button>Add Class</button>
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