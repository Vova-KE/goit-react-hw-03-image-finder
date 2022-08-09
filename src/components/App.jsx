import { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from "./Button";
import ImageGallery from "./ImageGallery";
import Loader from "./Loader";
// import Modal from "./Modal";
import SearchBar from "./SearchBar";
// import getPhotos from '../services/api';
// import getPhotosAPI from '../services/api';

const BASE_URL = 'https://pixabay.com/api/';
const MY_API_KEY = '27785613-3c730127b1356d079421a0eb8';  
const searchParams = new URLSearchParams({
    image_type: "photo",
    orientation: "horizontal",
});

export class App extends Component {
  state = {
    query: '',
    page: 1,
    photos: [],
    isVisible: false,
    error: null,
    isLoading: false,
    per_page: 12,
  };

  componentDidUpdate(_, prevState) {
    const { query, page, per_page } = this.state;
    
    if (prevState.query !== query || prevState.page !== page) {
      
      // console.log(this.state.isLoading);
      this.setState({ isLoading: true });
      // console.log(this.state.isLoading);

      fetch(`${BASE_URL}?q=${query}&page=${page}&key=${MY_API_KEY}&${searchParams}&per_page=${per_page}`)
        .then(response => response.json())
        .then(photos => {
          if (photos.hits.length === 0) {
            alert('there are no photos')
          }
          // console.log(photos);
            
          this.setState(prevState => ({
            photos: [...prevState.photos, ...photos.hits],
            isVisible: page < Math.ceil(photos.totalHits / per_page),
          }));

          // console.log(page);

        })
      // .catch ((error) => error.message)
      // .finally (this.setState({ isLoading: false }))
      .catch(error => error)
      .finally(() => {
        this.setState({ isLoading: false });
      });
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
    }));
  };

  // getPhotos = async (query, page) => {
  //   if (!query) return;

  //   this.setState({ isLoading: true });
  //   // console.log(query, page);

  //   try {
  //     const { hits, totalHits } = await getPhotosAPI(query, page);
      
  //     if (hits.length === 0) {
  //       alert('there are no photos')
  //     }

  //     this.setState(prevState => ({
  //       photos: [...prevState.photos, ...hits],
  //       isVisible: page < Math.ceil(totalHits / prevState.photos.length),
  //     }));
  //   } catch (error) {
  //     this.setState({ error: error.message });
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // };

  render() {
    const { photos, isVisible, error, isLoading } = this.state;

    return (
      <div>
        <SearchBar onSubmit={this.handleSearchSubmit} />
        {isLoading && <Loader />}
        <ImageGallery photos={photos} />
        {isVisible && <Button onClick={this.handleLoadMore} isLoading={isLoading} />}
        {/* <Modal /> */}
        
        <ToastContainer autoClose={2000}/>
        {error && (Error - {error})}
      </div>
    );
  }
};
