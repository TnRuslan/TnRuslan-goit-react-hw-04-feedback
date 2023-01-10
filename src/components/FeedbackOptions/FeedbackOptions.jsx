import css from './FeedbackOptions.module.css'
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ addFeedback, options }) => {
  return (
      
      <ul className={css['btn-list']}>
        {options.map((option, index) => (<li key={index}><button className={css.btn__item} type='button' onClick={addFeedback} name={option}>{option}</button></li>))}
      </ul>
    )
}

FeedbackOptions.propTypes = {
  addFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string)
}
