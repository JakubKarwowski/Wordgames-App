import React from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import './App.css';
import Start from './body_components/start'
import Choice from './body_components/choice'
import Check from './body_components/check'
import FinalScreen from './body_components/final_screen'
import gamesData from './data/gamesData.json'

class App extends React.Component {

  state={
    userName: '',
    questionSet: '',
    choosenAnswers:'',
    points:'',
  }
  
  //funkcja czytająca imię podane przez gracza
  changeName=(name)=>{
    this.setState({userName: name});
  }; 
  //funkcja losująca który zestaw pytań i odpowiedzi wyświetlić
  chooseWordsSet=()=>{
    const setsNumber= gamesData.length;
    const randomNumber = Math.floor(Math.random()*setsNumber);
    this.setState({questionSet : gamesData[randomNumber]})
    // console.log(this.state.questionSet);
  };
  //funkcja wyświetlająca odpowiedzi do wyboru
  createGameWindow=()=>{
    const createNames = this.state.questionSet.all_words.map(item=>{
        return(
            <p key={item} className='choiceItem' onClick={this.handleOnSubmit}>{item}</p>
        )
    }
    )
    return createNames;
  };  
  //funkcja zaznaczająca i odznaczająca odpowiedzi podane przez gracza
  handleOnSubmit=(e)=>{
    e.target.classList.toggle('active');
  };
  //funkcja zapisująca wybrane przez gracza odpowiedzi
  saveAnswers=()=>{
    const answers = document.querySelectorAll('p.active');
    let choosenAnswers = [];
    answers.forEach(
      (item)=> 
      choosenAnswers.push(item.innerHTML)
    )
    this.setState({choosenAnswers: choosenAnswers})
  };
  //funkcja tworząca okno odpowiedzi
  createAnswersWindow=()=>{
    const createAnswers = this.state.questionSet.all_words.map(item=>{
      return(
          <p key={item} id={item} >{item}</p>
      )
    }
    )
  return createAnswers;
  };
  //funkcja sprawdzająca podane wcześniej odpowiedzi
  checkAnswers=()=>{
    const good_words = this.state.questionSet.good_words;
    this.state.choosenAnswers.forEach(item=>{
      let word = document.getElementById(item);
     
            if (good_words.includes(item)){
              word.innerHTML = "Good "+item
              word.classList.add('good')
            }
            else{
              word.innerHTML = "Bad "+item
              word.classList.add('bad')
            }
          }
    )
  };
  //funkcja licząca punkty uzyskane przez gracza
  countPoints=()=>{
    const numberOfGoodAnswers = document.getElementsByClassName('good').length;
    const numberOfBadAnswers = document.getElementsByClassName('bad').length;
    const numberOfNotChoosenGoodAnswers = this.state.questionSet.good_words.length - numberOfGoodAnswers;
    const score = (numberOfGoodAnswers*2) - (numberOfBadAnswers + numberOfNotChoosenGoodAnswers);
    this.setState({points: score})
  };

  render(){
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Start changeName = {this.changeName}
                                            chooseWordsSet = {this.chooseWordsSet}/>}/>
            <Route path="/choice" element={<Choice  userName = {this.state.userName}
                                                    questionSet = {this.state.questionSet}
                                                    createGameWindow = {this.createGameWindow}
                                                    saveAnswers = {this.saveAnswers}/>}/>
            <Route path="/check" element={<Check  questionSet = {this.state.questionSet}
                                                  createAnswersWindow = {this.createAnswersWindow}
                                                  checkAnswers = {this.checkAnswers}
                                                  countPoints = {this.countPoints}/>}/>
            <Route path="/final_screen" element={<FinalScreen userName = {this.state.userName}
                                                              points = {this.state.points}/>}/>
          </Routes>
        </Router>
      </div>
    );
  };   
};

export default App;
