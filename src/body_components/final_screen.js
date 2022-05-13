import {Link} from 'react-router-dom';

function Choice(props){
        
    return(
        <div className='game'>
        <h1>Congratulations, {props.userName}!</h1>
        <h1>Your score:</h1>
        <h1 className='score'>{props.points} points</h1>
        <div className='link'><Link to="/">play again</Link></div>
        </div>
    );
};                

export default Choice;