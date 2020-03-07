import React from 'react';
import OotdLogic from '../../components/OotdLogic/OotdLogic';
import styles from './Ootd.module.css';



const Ootd = (props) => {
    return (
        <main>
            <h1>Ootd</h1>
            <p1>Here are some suggestions</p1>
            <OotdLogic {...props} />
        </main>
    );
};

export default Ootd;