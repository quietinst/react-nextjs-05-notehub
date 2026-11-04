import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteNote } from '../../services/noteService';
import type { Note } from '../../types/note';
import ApiError from '../ApiError/ApiError';
import styles from './NoteList.module.css';

interface NoteListProps {
  notes: Note[];
}

const NoteList = ({ notes }: NoteListProps) => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
    },
  });

  return (
    <>
      {deleteMutation.isError && (
        <ApiError message="Failed to delete note. Please try again." />
      )}
      <ul className={styles.list}>
        {notes.map(note => (
          <li key={note.id} className={styles.listItem}>
            <h2 className={styles.title}>{note.title}</h2>
            <p className={styles.content}>{note.content}</p>
            <div className={styles.footer}>
              <span className={styles.tag}>{note.tag}</span>
              <button
                className={styles.button}
                onClick={() => deleteMutation.mutate(note.id)}
                disabled={deleteMutation.isPending}
              >
                {deleteMutation.isPending &&
                deleteMutation.variables === note.id
                  ? 'Deleting...'
                  : 'Delete'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NoteList;
