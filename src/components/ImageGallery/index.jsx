import styles from './styles.module.css';
import ImageGalleryItem from "components/ImageGalleryItem";

const ImageGallery = ({photos}) => {
    return (
        <ul className={styles.imageGallery}>
            {photos.map(({id, webformatURL, largeImageURL, tags}) => (
                <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    largeImageURL={largeImageURL}
                    tags={tags}
                />
            ))}
        </ul>
    )
};

export default ImageGallery;