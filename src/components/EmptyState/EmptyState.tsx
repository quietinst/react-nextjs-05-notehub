import styles from './EmptyState.module.css';

const EmptyState = () => {
  return (
    <div className={styles.emptyState}>
      <h2>No notes found</h2>
      <p>
        There are no notes to display. Try changing your search or create a new
        note.
      </p>
    </div>
  );
};

export default EmptyState;
