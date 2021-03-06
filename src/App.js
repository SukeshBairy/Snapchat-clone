import React, { useEffect } from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Preview from './Preview';
import Chats from './Chats';
import ChatView from './ChatView';
import { login, logout, selectUser } from './features/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { auth } from './firebase';

function App() {

  const user= useSelector(selectUser);
  
  const dispatch = useDispatch();


  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch(login({
          username: authUser.displayName,
          profilePic: authUser.photoURL,
          id: authUser.uid,
        }))
      } else {
        dispatch(logout());
      }
    })
  },[])


  return (
    <div className="app">
          <Router>
          {!user ? (
            <Login />
          ):(
            <>
            <img 
            className="app__logo"
            src="data:image/jpeg;base64,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" 
            alt="" 
            />
          <div className="app__body">
          <div className="app__bodyBackground">
          <Switch>
          <Route path="/chats/view">
            <ChatView />
          </Route>
          <Route path="/chats">
            <Chats />
          </Route>
          <Route path="/preview">
            <Preview />
          </Route>
            <Route exact path="/">
              <WebcamCapture />
            </Route>
          </Switch>
          </div>
            
          </div>
          </>
          )}
          </Router>

    </div>
    
  );
}

export default App;
