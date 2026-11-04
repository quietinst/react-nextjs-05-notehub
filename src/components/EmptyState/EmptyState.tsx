import styles from './EmptyState.module.css';

const EmptyState = () => {
  return (
    <div className={styles.emptyState}>
      <h2>No notes yet</h2>
      <p>Create your first note to get started.</p>
    </div>
  );
};

export default EmptyState;
