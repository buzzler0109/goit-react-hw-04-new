import { useEffect } from "react";
import { useState } from "react";
import SearchForm from "../searchForm/SearchForm";
import { getPhotos } from "../api/photos";
import ImageGallery from "../imageGallery/ImageGallery";
import Loader from "../loader/Loader";
import ErrorMessage from "../error/ErorrMessage";
import LoadBtn from "../loadBtn/LoadBtn";
import Modal from "react-modal";
import ModalImg from "../modalImg/ModalImg";

import "./App.css";

const App = () => {
  Modal.setAppElement("#root");

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [noPhotos, setNoPhotos] = useState(false);
  const [allpPhotos, setAllpPhotos] = useState(0);
  const [modalPhoto, setModalPhoto] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const searchImg = (query) => {
    setQuery(`${Date.now()}/${query}`);
    setResults([]);
    setLoader(true);
    setError(false);
    setPage(1);
    setNoPhotos(false);
    setAllpPhotos(0);
    console.log(query, page);
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const getOnePhoto = (onePhoto) => {
    setModalPhoto(onePhoto);
  };
  console.log(modalPhoto);

  useEffect(() => {
    if (!query) return;
    const photos = async () => {
      try {
        setLoader(true);
        setError(false);
        const { results, total_pages } = await getPhotos(query, page);
        setResults((prevResults) => [...prevResults, ...results]);
        if (results.length === 0) {
          setNoPhotos(true);
        }
        setAllpPhotos(total_pages);
        console.log(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    photos();
  }, [query, page]);

  return (
    <div>
      <SearchForm onSearch={searchImg} />
      {error ? (
        <ErrorMessage />
      ) : (
        <ImageGallery
          results={results}
          getOnePhoto={getOnePhoto}
          openModal={openModal}
        />
      )}
      {loader && <Loader />}
      {noPhotos && !loader && (
        <h2>Sorry, there are no matches! Try smth else</h2>
      )}
      {results.length > 0 && !loader && page < allpPhotos && (
        <LoadBtn onClick={loadMore} />
      )}
      <ModalImg
        onOpenModal={openModal}
        onCloseModal={closeModal}
        isOpen={isOpen}
        modalPhoto={modalPhoto}
      />
    </div>
  );
};

export default App;
