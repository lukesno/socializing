import React, { useState } from 'react';
import fire from '../firebase.js';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 

  return(
    <div>
      Hello you are in Login!
    </div>
  );
}

// const buttonClicked = () => {
//   fire
//     .auth()
//     .signInWithEmailAndPassword(username,password)
//     .then((response) => {
//       const uid = response.user.uid
//       const usersRef = fire.firestore().collection('users')
//       usersRef.doc(uid).get()
//         .then(userReturned => {
//           if(!userReturned.exists) {
//             alert("Non existing")
//             return;
//           }
//           const user = userReturned.data()
//         })
//     })
// }

export default Login;