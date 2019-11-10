
import React from 'react';
import { Route } from 'react-router-dom';

function SecuredRoute(props) {
    const {component: Component, path, auth} = props;

  return (
    <Route path={path} render={() => {
        if (!auth.isAuthenticated()) {
          auth.signIn();
          return <div>What's this?</div>;
        }
        return <Component />
    }} />
  );
}

// import React from 'react'
// import { Redirect, Route} from 'react-router-dom'


// function SecuredRoute(props) {    
//     // console.log("ChkSession", props.checkingSession)
//     const {component: Component, path, checkingSession} = props
//     return (
//         <Route path={path} render={() => {
//             if (checkingSession === true) {
//                 return <Redirect to="/dogs"/> 
//                 // return auth.signIn()
//             } else {
//                 return <Component />
//             }
//         }} />
//     )
// }

// const SecuredRoute = ({component: Component, path, ...rest}) => {
//     return (
//         <Route
//             {...rest}
//             render={(props) => path ?
//             <Component {...props} /> :
//             <Redirect to={{pathname: '/bird'}} />}
//         />
//     )
// }

export default SecuredRoute


