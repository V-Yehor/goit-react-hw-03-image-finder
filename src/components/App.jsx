import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import toast, { Toaster } from 'react-hot-toast';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { AppWrapper } from './App.styled';
import { fetchImages } from '../api';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isloading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      const { query, page } = this.state;
      const slashIndex = query.indexOf('/') + 1;
      const trimedQuery = query.slice(slashIndex, query.length);
      try {
        this.setState({ isloading: true });
        const fetchedImages = await fetchImages(trimedQuery, page);
        this.setState(prevState => {
          return { images: [...prevState.images, ...fetchedImages.data.hits] };
        });
      } catch (error) {
        toast.error('Try again!');
      } finally {
        this.setState({ isloading: false });
      }
    }
  }

  getSearchInfo = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const newQuery = form.elements.search.value;
    form.reset();
    this.setState({ query: `${Date.now()}/${newQuery}`, page: 1, images: [] });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { images, isloading } = this.state;
    return (
      <AppWrapper>
        <Searchbar onSubmit={this.getSearchInfo} />
        {isloading && <Loader />}
        {this.state.images.length > 0 && (
          <>
            <ImageGallery findedImages={images} />
            <Button onSerchClick={this.handleLoadMore} />
          </>
        )}
        <GlobalStyle />
        <Toaster />
      </AppWrapper>
    );
  }
}
