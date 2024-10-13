import ImageCard from "../imageCard/ImageCard";

const ImageGallery = ({ results, getOnePhoto, openModal }) => {
  return (
    <ul>
      {results.map((result) => (
        <li key={result.id}>
          <ImageCard
            photo={result}
            getOnePhoto={getOnePhoto}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
