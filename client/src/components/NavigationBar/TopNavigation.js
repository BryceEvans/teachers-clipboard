import React, {useContext} from 'react';
import styled from 'styled-components'
import TopNavSplash from "./TopNavSplash"
import auth from '../../Authentication/Auth0'
import {NavContext} from '../../Store'
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import List from "@material-ui/core/List";



const TopNavigation = (props) => {
    console.log("HERE ARE THE PROPS", props);
    // console.log("Inside S&H tokenpayload", auth.getIdTokenPayload())
    let userName = localStorage.getItem("id_token_payload_name");

    const [open, setOpen] = useContext(NavContext);

    function login() {
        auth.signIn();
    }

    function logout() {
        auth.signOut();
    }

    const {isAuthenticated} = auth;
    return (
        // {
        !isAuthenticated()
            ? (
                <VisitorContainer id="HeaderContainer">
                    <AppName>
                        <a href="/#">
                            <h1>Eclipment</h1>
                        </a>
                    </AppName>

                    <VisitorsNav id="VisitorsNav">
                        <TopNavSplash id="Nav"/>
                    </VisitorsNav>

                    <LinkStyled id="LinkStyled" type="button" onClick={login}>
                        Sign in
                    </LinkStyled>

                </VisitorContainer>
            )
            :
            (
                <UserContainer id="UserContainer" isLoggedIn>

                    <NameButton id="AppName_SideButton">
                        <List>
                            <ListItem>
                                <ListItemIcon onClick={() => setOpen(open === false ? true : false)}>
                                    {open ? <CloseIcon/> : <MenuIcon/>}
                                </ListItemIcon>
                            </ListItem>
                        </List>
                        <AppName id="AppName">
                            <a href="/home">
                                <h1>Eclipment</h1>
                            </a>
                        </AppName>
                    </NameButton>

                    <SearchBarDiv>
                        {/*<SearchBar />*/}
                        <h3>Welcome, {userName}!</h3>
                    </SearchBarDiv>

                    <UsersNav id="UsersNav">
                        <LinkStyled id="LinkStyled" type="button" onClick={logout}>
                            Sign out
                        </LinkStyled>
                    </UsersNav>

                </UserContainer>

            )
    )
};


export default TopNavigation;

const UserContainer = styled.div`
	background: #F7F8FA;
	position: fixed;
    display: flex;
    flex-direction: row;
	width: 100%;
	top: 0;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #525A65;
    justify-content: space-around;
    z-index: 2000;
  
`;
const NameButton = styled.div`
	display: flex;
  width: 20%;
  min-width: 185px;
`;
const SearchBarDiv = styled.div`
	display: flex;
	width: 60%;
`;
const UsersNav = styled.div`
  display: flex;
  width: 10%;
`;

const VisitorContainer = styled.div`
	background: #F7F8FA;
	position: fixed;
  display: flex;
	width: 100%;
	top: 0;
  left: 0;
  align-items: center;
  height: 60px;
  z-index: 2;
  justify-content: space-around;
  
  padding: 0 2%;
  // max-width: 1500px;

 
  // @media (max-width: 900px) {
  //   if (window.location.pathname === '/') {
  //     flex-direction: ${props => props.isLoggedIn ? 'column' : 'row'}
  //   } else if (window.location.pathname === '/dashboard') {
  //     flex-direction: ${props => props.isLoggedIn ? 'row' : 'column'}
  //   }
  //   height: 55px;
  // }
  
  // @media (max-width: 700px) {
  //   flex-direction: column;
  // }

  // }
  // @media (max-width: 400px) {
  //   height: 200px;
  // }
`;
const SideBarButton = styled.button`
cursor: pointer;
font-size: 14px;

min-height: 40px;
min-width: 40px;

border-radius: 100%;
color: #525A65;

background: none;
border: 1px solid #525A65;
&:hover {color: #F7F8FA}
&:hover {background: #525A65}


// @media (max-width: 400px) {
//   margin: 0 0 15px 0;
//   border: none;
//   color: white;
// }

`;

const AppName = styled.div`
  align-self: center;
  h1 {
    width: 100%;
    margin-left: 12%;

    font-family: 'Comfortaa', cursive;
    font-size: 25px;

    color: #525A65;
    &:hover {color: black}

    &:hover {
      text-shadow: -.25px -.25px 0 black, 
                    .25px .25px black;
    }
  }
`;


const LinkStyled = styled.button`
  font-size: 14px;
  height: 25px;
  width: 300px;
  cursor: pointer;
  border-radius: 100px;
  color: black;
  background: none;
  border: 1px solid black;
  &:hover {color: white}
  &:hover {background: black}
  

  // @media (max-width: 400px) {
  //   margin: 0 0 15px 0;
  //   border: none;
  //   color: white;
  // }
`;

const VisitorsNav = styled.div`
align-items: baseline;
display: flex;
width: 60%;
// max-width: 50%;
justify-content: space-between;

// @media (max-width: 1000px) {
//   // max-width: 50%;
// }

// @media (max-width: 900px) {
//   // width: 100%;
//   // max-width: 100%;

//   }

//   @media (max-width: 400px) {
//     flex-direction: column;
//     height: 100%;
//     align-items: center;
//   }
`;


