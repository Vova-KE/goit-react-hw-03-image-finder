import styles from './styles.module.css';

const ImageGalleryItem = ({webformatURL, tags}) => {
        return (
            <li className={styles.imageGalleryItem}>
                <img
                    className={styles.imageGalleryItem__image}
                    src={webformatURL}
                    alt={tags}
                />
            </li>
        )
    };

export default ImageGalleryItem;