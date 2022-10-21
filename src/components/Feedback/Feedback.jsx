import s from './Feedback.module.css';
import React, { Component } from "react";

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    
    feedbackState = name => this.setState(prev => ({ [name]: prev[name] + 1 }));

    countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;

    countPositiveFeedbackPercentage = () => Math.round((this.state.good / this.countTotalFeedback()) * 100)
    
    

    render() {
        const total = this.countTotalFeedback();
        const positiveFeedback = this.countPositiveFeedbackPercentage();
        
        return (
            
            <section className={s.feedback}>
                <h1 className={s.title}>Please leave feedback</h1>
                <ul className={s.btnList}>
                    <li className={s.item}>
                        <button className={s.btn} onClick={(event) => this.feedbackState("good")}>Good</button>
                    </li>
                    <li className={s.item}>
                        <button className={s.btn} onClick={(event) => this.feedbackState("neutral")}>Neutral</button>
                    </li>
                    <li className={s.item}>
                        <button className={s.btn} onClick={(event) => this.feedbackState("bad")}>Bad</button>
                    </li>
                </ul>
                <h2 className={s.title}>Statistics</h2>
            </section>
        )
    }
}

