import Modal from "react-modal";

const ModalImg = ({ onCloseModal, isOpen, modalPhoto }) => {
  console.log(isOpen);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "gray",
    },
  };
  return (
    <Modal style={customStyles} isOpen={isOpen} onRequestClose={onCloseModal}>
      {modalPhoto && (
        <div>
          <img
            // className={css.img}
            src={modalPhoto.urls.regular}
            alt={modalPhoto.alt_description}
          />
        </div>
      )}
    </Modal>
  );
};

export default ModalImg;
