import React from 'react';
import OotdLogic from '../../components/OotdLogic/OotdLogic';
import styles from './Ootd.module.css';



const Ootd = (props) => {
    return (
        <main>
            <h1>Ootd</h1>
            <p>Here are some suggestions</p>
            <OotdLogic />
        </main>
    );
};

export default Ootd;