import {useNavigate} from 'react-router-dom';

function Choice(props){

    const navigate = useNavigate();
    
    //funkcja obsługująca naciśnięcie przycisku
    function handleOnSubmit(e){
        e.preventDefault();
        props.saveAnswers();
        navigate('/check');
    }
        
    return(
        <div className='game'>
        <h1>{props.questionSet.question}</h1>
        <div className='gameWindow'>
        {props.createGameWindow()}     
        </div> 
        <button onClick={handleOnSubmit}>check answers</button>
        </div>  
    );
};                

export default Choice;