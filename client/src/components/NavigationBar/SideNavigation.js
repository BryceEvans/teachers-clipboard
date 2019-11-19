import React, {useContext} from 'react';
import {NavContext} from '../../Store'
import clsx from 'clsx';
import purple from '@material-ui/core/colors/purple';

import Tooltip from '@material-ui/core/Tooltip';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ClassIcon from '@material-ui/icons/Class';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import SettingsIcon from '@material-ui/icons/Settings';
import CloseIcon from '@material-ui/icons/Close';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import styled from "styled-components";

const S_ListItemIcon = styled(ListItemIcon)`
	// height: 59px;
    // z-index: 9999;
`;
const S_List = styled(List)`
	height: 59px;

`;

const MiniDrawer = () => {
    const [open, setOpen] = useContext(NavContext);
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
                open={open}
            >
                <S_List>
                    <ListItem>
                        <S_ListItemIcon onClick={() => setOpen(open === false ? true : false)}>
                            {open ? <CloseIcon/> : <MenuIcon/>}
                        </S_ListItemIcon>
                    </ListItem>
                </S_List>

                <Divider/>

                <List>
                    {[
                        {title: 'First', color: "red"},
                        {title: 'Second', color: "blue"},
                        {title: 'Third', color: "teal"},
                        {title: 'Fourth', color: "pink"},
                        {title: 'Fifth', color: "violet"},
                        {title: 'Sixth', color: "orange"},
                        {title: 'Seventh', color: "purple"},
                        {title: 'Eighth', color: "#00ff00"}
                    ].map((myClass, index) => {
                            return (
                                !open ? <Tooltip title={myClass.title} placement="right" aria-label={myClass.title}>
                                        <ListItem button key={myClass.title}>
                                            <ListItemIcon>{<ClassIcon htmlColor={myClass.color}/>}</ListItemIcon>
                                            <ListItemText primary={myClass.title}/>
                                        </ListItem>
                                    </Tooltip>
                                    :
                                    <ListItem button key={myClass.title}>
                                        <ListItemIcon>{<ClassIcon htmlColor={myClass.color}/>}</ListItemIcon>
                                        <ListItemText primary={myClass.title}/>
                                    </ListItem>
                            )
                        }
                    )}
                </List>

                <Divider/>


                <Tooltip title="Add Class" placement="right" aria-label="Add Class">
                    <ListItem button key={'Add Class'}>
                        <ListItemIcon>{<NoteAddIcon/>}</ListItemIcon>
                        <ListItemText primary={'Add Class'}/>
                    </ListItem>
                </Tooltip>


                <Tooltip title={"Add Student"} placement={"right"}>
                    <ListItem button key={'none'}>
                        <ListItemIcon>{<PersonAddIcon/>}</ListItemIcon>
                        <ListItemText primary={'Add Student'}/>
                    </ListItem>
                </Tooltip>


                <Divider/>
                <Tooltip title={"Settings"} placement={"right"}>
                    <ListItem button key={'Settings'}>
                        <ListItemIcon>{<SettingsIcon/>}</ListItemIcon>
                        <ListItemText primary={'Settings'}/>
                    </ListItem>
                </Tooltip>


            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                {/*<Typography paragraph>*/}
                {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt*/}
                {/*    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum*/}
                {/*    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit*/}
                {/*    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id*/}
                {/*    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit*/}
                {/*    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.*/}
                {/*    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis*/}
                {/*    imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget*/}
                {/*    arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem*/}
                {/*    donec massa sapien faucibus et molestie ac.*/}
                {/*</Typography>*/}
                {/*<Typography paragraph>*/}
                {/*    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla*/}
                {/*    facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac*/}
                {/*    tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat*/}
                {/*    consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed*/}
                {/*    vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In*/}
                {/*    hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et*/}
                {/*    tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin*/}
                {/*    nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas*/}
                {/*    accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.*/}
                {/*</Typography>*/}
            </main>
        </div>
    );
};
export default MiniDrawer

const drawerWidth = 200;


const useStyles = makeStyles(theme => ({

    root: {
        display: 'flex',
        zIndex: -1,
        top: '60px',
        // marginTop: '150px',
        // paddingTop: '150px',
    },
    // appBar: {
    //
    //     zIndex: theme.zIndex.drawer -1101,
    //     transition: theme.transitions.create(['width', 'margin'], {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.leavingScreen,
    //     }),
    // },
    // appBarShift: {
    //     marginLeft: drawerWidth,
    //     width: `calc(100% - ${drawerWidth}px)`,
    //     transition: theme.transitions.create(['width', 'margin'], {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.enteringScreen,
    //     }),
    // },

    menuButton: {
        // hover: 'none',
        overflowX: 'hidden',
        overflow: 'hidden',
        // zIndex: -1,
        minHeight: '60px',
        maxHeight: '60px',
        height: '60px',
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(6) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(7) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    // content: {
    //     flexGrow: 1,
    //     padding: theme.spacing(3),
    // },
}));