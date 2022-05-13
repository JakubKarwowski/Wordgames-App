import {useNavigate} from 'react-router-dom'

function Start(props){

    const navigate = useNavigate();

    //funkcja obsługująca kliknięcie guzika
    function handleOnClick(e){
        e.preventDefault();
        navigate('/choice');
        props.chooseWordsSet();
    };
    //funkcja obsługująca zmianę inputu tekstowego
    function handleOnChange(e){
        props.changeName(e.target.value);
    };

    return(
        <>
        <form>
            <h1>Wordcloud game</h1>
            <input onChange={handleOnChange} type='text' placeholder='Enter your nickname here...'/>
            <button onClick={handleOnClick}>play</button>
        </form>
        </>
    );
};                

export default Start;