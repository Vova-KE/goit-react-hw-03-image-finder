import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleEscapeCloseModal)
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleEscapeCloseModal)
    }

    handleEscapeCloseModal = event => {
        if (event.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleBackDropClick = event => {
        if (event.target === event.currentTarget) {
            this.props.onClose();
        }
    };

    render() {
        const { largeImageURL, tags } = this.props;

        return createPortal(
        <div class={styles.overlay} onClick={this.handleBackDropClick}>
            <div class={styles.modal}>
                <img src={largeImageURL} alt={tags} />
            </div>
        </div>,
        modalRoot
    )}
};

export default Modal;