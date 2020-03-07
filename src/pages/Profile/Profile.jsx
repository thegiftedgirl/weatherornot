import React from 'react';
import styles from './Profile.module.css';
import Forecast from "../../components/Forecast/Forecast";



const Profile= (props) => {
 return(
     <main>
       
        <Forecast {...props}/>
     </main>
 );
};
 export default Profile;