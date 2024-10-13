import toast, { Toaster } from "react-hot-toast";

const SearchForm = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const query = evt.target.elements.query.value;
    if (query.trim() === "") {
      toast.error("Please, type smth to search!", {
        duration: 2000,
        position: "bottom-center",
      });
    } else {
      onSearch(query);
      evt.target.reset();
    }
  };

  return (
    <div onSubmit={handleSubmit}>
      <form>
        <input
          type="text"
          name="query"
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
        <Toaster />
      </form>
    </div>
  );
};

export default SearchForm;
