import React, { Component } from "react";
import { toast } from 'react-toastify';
import styles from './styles.module.css';

class SearchBar extends Component {
    state = {
        inputQuery: '',
    };

    handleInput = (event) => {
        this.setState({ inputQuery: event.currentTarget.value.trim().toLowerCase()})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        
        if (this.state.inputQuery.trim() === '') {
            toast.error('Введите текст запроса');
            return;
        };
        
        this.props.onSubmit(this.state.inputQuery);
        this.setState({inputQuery: ''});
    };


    render() {
        const { inputQuery } = this.state;

        return (
        <header className={styles.searchBar}>
            <form className={styles.searchForm} onSubmit={this.handleSubmit}>
                <button type="submit" className={styles.searchFormButton}>
                    <span className={styles.searchFormButtonLabel}>Search</span>
                </button>

                <input
                    className={styles.searchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={inputQuery}
                    onChange={this.handleInput}
                />
            </form>
        </header>
    )
    }
};

export default SearchBar;