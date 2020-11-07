import React, { useState } from 'react';
import fire from '../firebase';
import * as firebase from 'firebase';


// Call this function when the user clicks "Register button"
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [interest, setInterest] = useState("");
  const [location, setLocation] = useState("");
  const [profile_pic, setProfile_pic] = useState("");

  const registerClicked = () => {

    // Firebase auth
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
        const uid = response.user.uid;
        const data = {
            id: uid,
            email,
            password,
            bio,
            location,
            name,
            profile_pic,
            posts: [],
            friends: [],
            interest: interest.split(" "),
        };
        const usersRef = fire.firestore().collection('users')
        usersRef.doc(uid).set(data).then(() => {
            // Then redirect to main
            window.location.href = "http://localhost:3000/main";
            alert("Register complete.")
        }).catch((error) => {
            alert(error)
        })
    }).catch((error) => {
        alert(error)
    })

  }
  return (
    <div>
        Hello you are in Register!
        <div>
          <label>
            <a>Email: </a>
            <input type="text" value={email} onChange={event => setEmail(event.target.value)} />
          </label>
        </div>
        <div>
          <label>
            <a>Password: </a>
            <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
          </label>
        </div>
        <div>
          <label>
          <a>Name: </a>
            <input type="text"  value={name} onChange={event => setName(event.target.value)}/>
          </label>
        </div>
        <div>
          <label>
            <a>Bio: </a>
            <input type="textarea" value={bio} onChange={event => setBio(event.target.value)} />
          </label>
        </div>
        <div>
          <label>
          <a>Location: </a>
            <input type="text" value={location} onChange={event => setLocation(event.target.value)} />
          </label>
        </div>
        <div>
          <label>
            <a>Interests (separate with space): </a>
            <input type="text" value={interest} onChange={event => setInterest(event.target.value)}/>
          </label>
        </div>
        <div>
          <label>
            <a>Profile picture (provide as link): </a>
            <input type="text" value={profile_pic} onChange={event => setProfile_pic(event.target.value)}/>
          </label>
        </div>

        <button onClick={() => registerClicked()}>Register</button>
    </div>
  );
}


export default Register;
