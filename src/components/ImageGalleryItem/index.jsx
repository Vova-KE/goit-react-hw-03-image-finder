import React, { Component } from 'react';
import Modal from 'components/Modal';
import styles from './styles.module.css';

class ImageGalleryItem extends Component {
    state = {
        isModalShow: false,
    };

    // showModal = () => {
    //     this.state({ isModalShow: true });
    // };

    // hideModal = () => {
    //     this.state({ isModalShow: false });
    // };

    toggleModal = () => {
        this.setState(({isModalShow}) => ({
            isModalShow: !isModalShow
        }))
    };

    render() {
        const { webformatURL, tags, largeImageURL } = this.props;
        const { toggleModal } = this.state;

            return (
            <li className={styles.imageGalleryItem} onClick={this.toggleModal}>
                <img
                    className={styles.imageGalleryItem__image}
                    src={webformatURL}
                    alt={tags}
                    />
                    {toggleModal &&
                        <Modal largeImageURL={largeImageURL} tags={tags} onClose={this.toggleModal} />}
            </li>
        )
    };
};

export default ImageGalleryItem;