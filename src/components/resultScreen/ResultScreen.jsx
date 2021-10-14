import styles from './ResultScreen.module.css'
import perfect from '../../utiles/perfect.svg'
import good from '../../utiles/good.svg'
import loser from '../../utiles/loser.svg'
import { Link } from 'react-router-dom'
import he from 'he'
import { connect } from 'react-redux'
import { reset } from '../../actions'

const ResultScreen = ({responses, correct, reset}) => {

    //Reseteo mi store de redux
    const handleReset = () => {
        reset()
    }

    return (
        <div className={styles.container}>
            <h1>Your scored</h1>
            <h1>{correct}/{responses.length}</h1>
            <hr />

            <div className={styles.card}>
                <img src={correct===responses.length?perfect:correct>=7?good:loser} alt='quiz'/>                           
            </div>
            
            <div className={styles.responses}>
                {responses.map(({correct_answer,response,question}) => 
                    <div className={correct_answer === response ? styles.true : styles.false}>
                        <p>{he.decode(question)}</p>
                    </div>
                )} 
            </div> 

            <Link to='/'>
                <button onClick={handleReset}>PLAY AGAIN</button>
            </Link>
        </div>
    )
}

export default connect(null, {reset})(ResultScreen)