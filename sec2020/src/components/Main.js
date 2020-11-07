import React, { useState, useEffect } from 'react';
import fire from '../firebase.js';
import Profile from './Profile.js';
import { useHistory } from 'react-router-dom';
import './Main.css'

const Main = () => {
    let history = useHistory();
    const [dataLoaded, setDataLoaded] = useState(false);
    const [userLoaded, setUserLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [me, setMe] = useState({});
    const currentUser = fire.auth().currentUser;
    const usersRef = fire.firestore().collection('users')
    
    
    useEffect(() => {
        if(currentUser) {
            usersRef.doc(currentUser.uid).get()
            .then(userReturned => {
                if(!userReturned.exists) {
                    return;
                }
                setMe(userReturned.data());
                setUserLoaded(true);
            })
            
        }
    }, [currentUser])

    useEffect(() => {
        usersRef.get().then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
                // console.log(documentSnapshot.data());
                setData(old => [...old, documentSnapshot.data()]);
            })
            setDataLoaded(true);
        })
       
    }, [])

    const goToProfile = (user) => {
        console.log("hi")
        history.push({
            pathname: '/profile',
            state:{
                user: {
                    ...user
                },
                me: {
                    ...me
                }
            }
    });

    }

    const pointSystem = (me, user) => {
        var score = 0
        var interests1 = me.interest
        var interests2 = user.interest
        var location1 = me.location
        var location2 = user.location
        var friends1 = me.friends
        var friends2 = user.friends

        score = score + findCommonElements(interests1,interests2) * 5
        score = score + findCommonElements(friends1,friends2) * 10
        score = score + locationCheck(location1,location2) * 20
        return score
        return 1;
    }

    const locationCheck = (location1, location2) => {
        if (location1 == location2) {
            return 1
        }
            return 0
    }

    const findCommonElements = (array1, array2) => {
        var common = [] 
        for(let i = 0; i < array1.length; i++) { 
            for(let j = 0; j < array2.length; j++) { 
                if(array1[i] === array2[j]) { 
                    common.push(array1[i]);
                } 
            } 
        }
        return common.length
    }


    if(dataLoaded && userLoaded) {
        console.log(data);
        console.log(me.friends);
        return (
            <>
                <div>
                    <h1>Friends</h1>
                    {/* Map out all users that are in "friends" array */}
                    {/* Each listed item should be clickable and redirect to profile.js */}
                    {data.map(user => {
                        if(me.friends.some(friend => friend === user.name)) {
                            return(
                                <>
                                    <div onClick={() => goToProfile(user)}>{user.name} {pointSystem(me, user)}</div>
                                </>
                            );
                        }
                    })}
                </div>
                <div>
                    <h1>Recommended Friends</h1>
                    {/* Here map out all users that are not in "friends" array */}
                    {data.map(user => {
                        // Making sure you don't see yourself in feed.
                        if(me.friends.some(friend => friend === user.name)) {
                            return;
                        }
                        if(user.id != currentUser.uid) {
                            return (
                                <div onClick={() => goToProfile(user)}>{user.name} {pointSystem(me, user)}</div>
                            );
                        }
     
                    })}
                </div>
            </>
        );
    }
    
    return(
    <div>
        {/* Not done yet */}
    </div>
    );

}

export default Main;