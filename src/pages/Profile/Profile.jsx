import React from 'react';
import styles from './Profile.module.css';
import Forecast from "../../components/Forecast/Forecast";



const Profile= (props) => {
 return(
     <main>
        <h1>Profile</h1>   
        <Forecast {...props}/>
     </main>
 );
};
 export default Profile;