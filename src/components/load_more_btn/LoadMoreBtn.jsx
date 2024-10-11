import css from "./LoadMoreBtn.module.scss";

const LoadMoreBtn = ({ onClick, children }) => {
  return (
    <div className={css.BtnWrap}>
      <button className={css.button} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default LoadMoreBtn;
