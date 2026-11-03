import axios from 'axios';
import type { Note } from '../types/note';

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  search: string,
  page: number
): Promise<FetchNotesResponse> => {
  const res = await axios.get<FetchNotesResponse>(
    'https://notehub-public.goit.study/api/notes',
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

export const createNote = async () => {};

export const deleteNote = async () => {};
