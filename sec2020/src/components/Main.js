import React, { useState, useEffect } from 'react';
import fire from '../firebase.js';

const Main = () => {
    const [renderDone, setRenderDone] = useState(false);
    const [data, setData] = useState([]);
    const currentUser = fire.auth().currentUser;
    const usersRef = fire.firestore().collection('users')
    
    useEffect(() => {
        usersRef.get().then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
                // console.log(documentSnapshot.data());
                setData(old => [...old, documentSnapshot.data()]);
            })
            setRenderDone(true);
        })
    }, [])

    if(renderDone) {
        console.log(data);
        console.log(currentUser.uid);
        return (
            <>
                <div>
                    Friends
                    {/* Map out all users that are in "friends" array */}
                    {/* Each listed item should be clickable and redirect to profile.js */}
                    {data.map(user => {
                        // Making sure you don't see yourself in feed.
                        if(user.id != currentUser.uid){
                            return (
                                <div>{user.name}</div>
                            );
                        }
     
                    })}
                </div>
                <div>
                    Recommended Friends
                    {/* Here map out all users that are not in "friends" array */}
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