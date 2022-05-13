import {Link} from 'react-router-dom';
import React from 'react';

class Check extends React.Component{  

    //funkcje wywołane dopiero bo zbudowaniu komponentu
    componentDidMount(){
        this.props.checkAnswers();
        this.props.countPoints();
    };

    render(){
        return(
            <div className='game'>
            <h1>{this.props.questionSet.question}</h1>
            <div className='gameWindow'>
            {this.props.createAnswersWindow()}     
            </div> 
            <div className='link'><Link to="/final_screen">finish game</Link></div>
            </div>
        );
    };
};             

export default Check;