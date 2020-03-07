import React from 'react';
import styles from './OotdLogic.module.css'

const OotdLogic = (props) => {
    
    const options = {
        cold: [  "chunky sweater", ' long coat', 'snowboots', ' leather gloves'],
        warm: ['v- neck tee', 'mid length shorts', 'shades', 'sneakers', 'sweatshirt'],
        hot: ['sundress', 'shorts', 'shades', 'gellies', 'crop top'],
    }
  
    function chooseOptions(temp) {
        let choices;

        if(temp < 60) {
            choices = options['cold'];
        } else if (temp > 60 && temp < 80) {
            choices = options['warm'];
        } else {
            choices = options['hot'];
        }
        return choices
    }

    return (
        <main1>
            <h2>Based on the Current Temp...</h2>
            <p>you should consider wearing</p>
                {/*<img key={idx} src={option}/> */}
            <section>
                { props.weatherData.main ?

                    chooseOptions(Math.trunc(props.weatherData.main.temp)).map((option, idx) => (
                        <p key={idx}>{option}</p>
                    ))
                        :
                        <h1>Brewing Style Recipe ...</h1>                }
            </section>
        </main1>

    );
};

export default OotdLogic;
