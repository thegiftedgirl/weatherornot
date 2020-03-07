import React from 'react';


const OotdLogic = (props) => {
    
    const options = {
        cold: [  "sweater", 'coat', 'boots', 'gloves'],
        warm: ['t-shirt', 'shorts', 'sunglasses', 'sneakers'],
        hot: ['tank top', 'shorts', 'sunglasses', 'sandals'],
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
            <h1>Based on the Current Temperature...</h1>
            <p>you should think about wearing the following items</p>
                {/*<img key={idx} src={option}/> */}
            <section>
                { props.weatherData.main ?

                    chooseOptions(Math.trunc(props.weatherData.main.temp)).map((option, idx) => (
                        <p key={idx}>{option}</p>
                    ))
                        :
                        <h1>Loading ...</h1>                }
            </section>
        </main1>

    );
};

export default OotdLogic;
