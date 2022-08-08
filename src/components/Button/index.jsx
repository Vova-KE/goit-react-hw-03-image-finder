import styles from './styles.module.css';

const Button = ({onClick, isLoading}) => {
    return (
        <button
            type='button'
            className={styles.button}
            onClick={onClick}
        >
            {isLoading ? 'Loading...' : 'Load more'}
        </button>
    )
};

export default Button;