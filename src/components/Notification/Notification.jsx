import css from './Notification.module.css'
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
    return (
        <h2 className={css.message}>{message}</h2>
    )
}

Notification.propsTypes = {
    message: PropTypes.string
}