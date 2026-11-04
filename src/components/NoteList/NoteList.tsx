import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { deleteNote } from '../../services/noteService';
import type { Note } from '../../types/note';
import ApiError from '../ApiError/ApiError';
import styles from './NoteList.module.css';

interface NoteListProps {
  notes: Note[];
}

const NoteList = ({ notes }: NoteListProps) => {
  const [deletingNoteId, setDeletingNoteId] = useState<string | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
    },
  });

  const handleDelete = async (id: string) => {
    setDeletingNoteId(id);
    setDeleteError(null);

    try {
      await deleteMutation.mutateAsync(id);
    } catch {
      setDeleteError('Failed to delete note. Please try again.');
    } finally {
      setDeletingNoteId(null);
    }
  };

  return (
    <>
      {deleteError && <ApiError message={deleteError} />}
      <ul className={styles.list}>
        {notes.map(note => (
          <li key={note.id} className={styles.listItem}>
            <h2 className={styles.title}>{note.title}</h2>
            <p className={styles.content}>{note.content}</p>
            <div className={styles.footer}>
              <span className={styles.tag}>{note.tag}</span>
              <button
                className={styles.button}
                onClick={() => handleDelete(note.id)}
                disabled={deleteMutation.isPending}
              >
                {deletingNoteId === note.id ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NoteList;
