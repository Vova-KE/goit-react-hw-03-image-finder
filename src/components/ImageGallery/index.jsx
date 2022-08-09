import React from 'react';
import styles from './styles.module.css';
import ImageGalleryItem from "components/ImageGalleryItem";

const ImageGallery = ({photos, onClickPhoto }) => {
    return (
        <ul className={styles.imageGallery}>
            {photos.map(({id, webformatURL, largeImageURL, tags}) => (
                <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    tags={tags}
                    onClickPhoto={() => onClickPhoto(largeImageURL,tags)}
                />
            ))}
        </ul>
    )
};

export default ImageGallery;