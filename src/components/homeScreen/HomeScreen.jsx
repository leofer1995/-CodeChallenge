import quizImg from '../../utiles/quizImg.svg';
import styles from './HomeScreen.module.css';

import {Link} from 'react-router-dom'

export const HomeScreen = () => {
    return (
        <div className={styles.container}>
            <h1>Welcome to the Trivia Challenge!</h1>
            <hr />

            <div className={styles.card}>
                <img src={quizImg} alt='quiz'/>               
                <p>You will be presented with 10 True or False questions.</p>               
            </div>

            <Link to='/Quiz'>
                <button>BEGIN</button>
            </Link>
        </div>
    )
}