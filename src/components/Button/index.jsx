import React from 'react';
import styles from './styles.module.css';

const Button = ({onClick, isLoading}) => {
    return (
        <div className={styles.buttonWrap}>
            <button
                type='button'
                className={styles.button}
                onClick={onClick}
            >
                {isLoading ? 'Loading...' : 'Load more'}
            </button>
        </div>
    )
};

export default Button;