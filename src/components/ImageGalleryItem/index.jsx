import React from 'react';
import styles from './styles.module.css';

const ImageGalleryItem = ({ webformatURL, tags, onClickPhoto }) => {
    return (
        <li className={styles.imageGalleryItem} onClick={onClickPhoto}>
            <img
                className={styles.imageGalleryItem__image}
                src={webformatURL}
                alt={tags}
            />
        </li>
    )
};

export default ImageGalleryItem;