import React from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = e => {
    switch (e.target.name) {
      case 'good':
        setGood(state => (state += 1));
        break;

      case 'neutral':
        setNeutral(state => (state += 1));
        break;

      case 'bad':
        setBad(state => (state += 1));
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (!countTotalFeedback()) {
      return 0;
    }
    return Math.round((good * 100) / countTotalFeedback());
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          addFeedback={addFeedback}
          options={['good', 'neutral', 'bad']}
        />
      </Section>
      {!!countTotalFeedback() ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
