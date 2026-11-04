import styles from './ApiError.module.css';

interface ApiErrorProps {
  message?: string;
}

const ApiError = ({
  message = 'Something went wrong. Please try again.',
}: ApiErrorProps) => {
  return <p className={styles.error}>{message}</p>;
};

export default ApiError;
