import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';


export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  addFeedback = (e) => {
    this.setState(prevState => {
      return {
        [e.target.name]: prevState[e.target.name] += 1
      }
    })
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((sum, quantity) => sum + quantity, 0)
  }

  countPositiveFeedbackPercentage = () => {
    if (!this.countTotalFeedback()) {
      return 0
    }
    return Math.round(this.state.good * 100 / this.countTotalFeedback())
  }

  render() {
    const {good, neutral, bad} = this.state

    return (

      <div>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            addFeedback={this.addFeedback}
            options={['good', 'neutral', 'bad']}
          />
        </Section>
        {!!this.countTotalFeedback() ? <Section title="Statistics">
          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()} />
        </Section> : <Notification message="There is no feedback" /> }  
      </div>
    );
  }

}



