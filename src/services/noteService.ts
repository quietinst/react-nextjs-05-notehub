import axios from 'axios';
import type { Note, NoteFormValues } from '../types/note';

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  search: string,
  page: number
): Promise<FetchNotesResponse> => {
  const res = await axios.get<FetchNotesResponse>(
    'https://notehub-public.goit.study/api/notes!',
    {
      params: {
        // search=example&tag=Todo&page=1&perPage=10&sortBy=created
        search,
        page,
        perPage: 12,
      },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
      },
    }
  );

  return res.data;
};

export const createNote = async (note: NoteFormValues): Promise<Note> => {
  const res = await axios.post<Note>(
    'https://notehub-public.goit.study/api/notes',
    note,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
      },
    }
  );

  return res.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const res = await axios.delete<Note>(
    `https://notehub-public.goit.study/api/notes/${id}`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
      },
    }
  );

  return res.data;
};
