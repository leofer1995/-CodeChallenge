import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import { HomeScreen } from './components/homeScreen/HomeScreen.jsx';
import QuizScreen from './components/quizScreen/QuizScreen';
import ResultScreen  from './components/resultScreen/ResultScreen';
import { connect } from 'react-redux';
import './App.css';

const App = ({correct, responses}) => {
    return(
        <Router>
            <Route exact path = '/'>
                <HomeScreen />
            </Route>

            <Route exact path = '/Quiz'>
                {responses.length !== 11 ?
                    <QuizScreen />:
                    <Redirect to='/Result'/>
                }
            </Route>

            <Route exact path = '/Result'>
                {responses.length === 11?
                    <ResultScreen responses={responses} correct={correct}/>:
                    <Redirect to='/'/>
                }
            </Route>

        </Router>
    );
}
function mapStateToProps(state){
    return {
        correct:state.correct,
        responses:state.responses,
    }
}
export default connect(mapStateToProps)(App)