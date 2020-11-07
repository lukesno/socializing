import React, { useState, useEffect, useHistory } from 'react';
import './Profile.css'
import { useLocation } from 'react-router-dom';
import fire from '../firebase.js';

//Todo
//Create a search bar that renders on top of other stuff
// For now we're gonna ignore it

// const {photoURL} = auth.userJSON;

const Profile = () => {
    const location = useLocation();
    const currentUser = fire.auth().currentUser;
    const { user, me } = location.state;
    const usersRef = fire.firestore().collection('users')
    console.log(user);



    const addFriend = () => {
        usersRef.doc(currentUser.uid).update({friends:[...(me.friends), user.name]})
        
    }

    return (
        <>
            <div>
                <div>
                    <img src={user.profile_pic} className={'Profile-pic'} />
                    <h1>{user.name}</h1> 
                </div>
                <div>
                    <h1>Interests:</h1>
                    {user.interest.map(item => {
                        return(
                            <div>{item}</div>
                        );
                    })}
                </div>
                <div>

                </div>
                <div>
                    <h1>Bio:</h1>
                </div>
                <div>
                    {user.bio}
                </div>
                <div>
                    <h1>Posts:</h1>
                </div>
                <div>
                    {user.posts.map(item => {
                         return(
                            <div>» {item}</div>
                        );
                    })}
                </div>

            </div>

            <button className={'addFriendButton'}onClick={() => addFriend()}> Add Friend </button>
        </>
    );
    


}


export default Profile;