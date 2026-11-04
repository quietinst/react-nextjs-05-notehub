import styles from './ApiError.module.css';

interface ErrorMessageProps {
  message?: string;
}

const ApiError = ({
  message = 'Something went wrong. Please try again.',
}: ErrorMessageProps) => {
  return <p className={styles.error}>{message}</p>;
};

export default ApiError;
