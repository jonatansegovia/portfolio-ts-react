import s from './index.module.css';

const Spinner = () => {
  return (
    <div className={`${s.spinnerContainer}`}>
      <div className={`${s.spinner} ${s.display}`}></div>
    </div>
  );
};

export default Spinner;
