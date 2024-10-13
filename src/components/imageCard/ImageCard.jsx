const ImageCard = ({ photo, getOnePhoto, openModal }) => {
  const handleClick = () => {
    getOnePhoto(photo);
    openModal();
    console.log(photo);
  };

  return (
    <div>
      <img
        // className={css.img}
        src={photo.urls.small}
        alt={photo.alt_description}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageCard;
