import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader}></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
