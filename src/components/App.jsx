import { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from "./Button";
import ImageGallery from "./ImageGallery";
import Loader from "./Loader";
// import Modal from "./Modal";
import SearchBar from "./SearchBar";
// import * as getPhotosAPI from '../services/api';
import getPhotos from '../services/api';

export class App extends Component {
  state = {
    query: '',
    page: 2,
    photos: [],
    isVisible: false,
    error: null,
    isLoading: false,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    
    if (prevState.query !== query || prevState.page !== page) {
      this.getPhotos(query, page);
    }
  };

  handleSearchSubmit = (query) => {
    // console.log('query',query);

    this.setState({
      query,
      page: 1,
      photos: [],
      isVisible: false,
    })    
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }))
  };

  getPhotos = async (query, page) => {
    if (!query) return;
    this.setState({ isLoading: true });

    try {
      // const {hits, totalHits} = await getPhotosAPI.getPhotos(query, page);
      // const data = await getPhotos(query, page);
      const {hits, totalHits} = await getPhotos(query, page);
      // console.log('data-app',data);
      console.log('data-app',hits, totalHits);
      // console.log( id, webformatURL, largeImageURL, totalHits);
      if (hits.length === 0) {
        alert('there are no photos')
      }
      this.setState(prevState => ({
        photos: [...prevState.photos, ...hits],
        isVisible: page < Math.ceil(totalHits / prevState.photos.length),
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { photos, isVisible, error, isLoading } = this.state;

    return (
      <div>
        <SearchBar onSubmit={this.handleSearchSubmit} />
        <Loader />
        <ImageGallery photos={photos} />
        {isVisible && <Button onClick={this.handleLoadMore} isLoading={isLoading} />}
        {/* <Modal /> */}
        
        <ToastContainer autoClose={2000}/>
        {error && (Error - {error})}
      </div>
    );
  }
};
