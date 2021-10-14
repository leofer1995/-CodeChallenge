import React, { useState } from "react";
import {connect} from 'react-redux';
import he from 'he';
import { useFetch } from "../../hooks/useFetch";
import { next, correct } from "../../actions";

import styles from './QuizScreen.module.css'

const QuizScreen = ({correct, next}) => {
    const {loading, data} = useFetch('https://opentdb.com/api.php?amount=11&difficulty=hard&type=boolean');
    const [answer, setAnswer] = useState(0);

    const {
        category,
        correct_answer,
        question
    } = !!data && data.results[answer]
    

    //Envio respuesta al action y si es correcta envio al action
    const handleResponse = ({target}) => {
        next({
            question,
            correct_answer,
            response:target.name
        });

        setAnswer(answer + 1);
        
        if(correct_answer === target.name){
            correct();
        };
    };

    return (
        <>
        {loading && 
            <div>
                <p>Loading ...</p>
            </div>
        }
        {!loading &&
            <div className={styles.container}>

                <h1>{category}</h1>
                <hr />

                <p>{answer+1}/{data.results.length}</p>

                <div className={styles.card}>
                    <p>{he.decode(question)}</p>               
                </div>

                <div className={styles.contButton}>
                    <button 
                        className={styles.true}
                        onClick={handleResponse}
                        name='True'
                    >
                        ✓
                    </button>

                    <button
                        className={styles.false}
                        onClick={handleResponse}
                        name='False'
                    >
                        ✘
                    </button>
                </div>
    
            </div>
        }
        </>
    );
}

export default connect(null, {correct, next})(QuizScreen)
