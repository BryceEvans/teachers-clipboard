import React, {useContext, useState} from 'react';
import {Route} from 'react-router-dom';
import HTML5Backend from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {Link, Switch} from "react-router-dom";


import MainDnD from "../DND/MainDnD"
import TopNavigation from "../NavigationBar/TopNavigation";
import SideNavigation from "../NavigationBar/SideNavigation";
import MainHome from "../HomePage/MainHome"
import Classroom from "../ClassroomPage/Classroom";
import {EditClassroomContext} from "../../Store";

const Dashboard = () => {
    const [editClassroom, setEditClassroom] = useContext(EditClassroomContext)

    return (
        <DndProvider backend={HTML5Backend}>
            <div>
                <TopNavigation/>
                <SideNavigation/>
                <Route exact path='/home' component={MainHome}/>
                {/*<Classroom />*/}
                <Switch>
                    <Route path="/home/:title">
                        {editClassroom ? <Classroom/> : <MainDnD/>}
                    </Route>

                    <Route path="/home/1">

                    </Route>

                    {/*<Route path="/two" component={ItemTwo}/>*/}
                </Switch>



                {/*<TopBar />*/}
                {/*<Route path='/dashboard/tracker' component={ Tracker } />*/}

                {/*
              <Route exact path='/dashboard/' component={ Home } />
              <Route path='/dashboard/students' component={ Students } />
              <Route path='/dashboard/reports' component={ Reports } />
              <Route path='/dashboard/settings' component={ Settings } /> 
            */}

            </div>
        </DndProvider>
    )
};


export default (Dashboard)