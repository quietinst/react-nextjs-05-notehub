# 05 — NoteHub

A note-taking app: browse your notes, search them, create new ones, and delete
the ones you no longer need. Notes are stored on a remote backend and the app
keeps the server data in sync.

My first app with full CRUD: server state with TanStack Query, forms with Formik
and Yup, a debounced search, and pagination.

## Features

- Paginated list of notes, shown only when there is at least one note
- Pagination controls, shown only when there is more than one page
- Debounced search that does not send a request on every keystroke
- Modal with a form to create a note, rendered through a portal and closed by
  the backdrop, the Escape key, or the Cancel button
- Form validation: title (3–50 characters, required), content (up to 500
  characters), tag (one of five values, required)
- Delete a note with an instant refresh of the list

## Tech stack

- React + TypeScript
- Vite
- TanStack Query
- Formik + Yup
- React Paginate
- use-debounce
- Axios
- CSS Modules
- modern-normalize

## Project structure

```text
src/
├── components/
│   ├── App/
│   ├── NoteList/
│   ├── NoteForm/
│   ├── Modal/
│   ├── Pagination/
│   └── SearchBox/
├── services/
│   └── noteService.ts
├── types/
│   └── note.ts
└── main.tsx
```

Each component folder contains the component (`.tsx`) and its styles
(`.module.css`). The shared `Note` and `NoteTag` types live in
`src/types/note.ts`. The HTTP functions (`fetchNotes`, `createNote`,
`deleteNote`) and their response types live in `src/services/noteService.ts`.

## Getting started

Get an access token in the
[NoteHub API docs](https://notehub-public.goit.study/api/docs) and put it in a
local `.env` file (never commit it):

```bash
cp .env.example .env   # then set VITE_NOTEHUB_TOKEN
npm install
npm run dev
```

## Concepts covered

| Concept                     | Where                           |
| --------------------------- | ------------------------------- |
| Server state and caching    | `useQuery` in `App`             |
| Mutations and cache refresh | create and delete notes         |
| Forms and validation        | Formik and Yup in `NoteForm`    |
| Debounced input             | `useDebouncedCallback` in `App` |
| Pagination                  | React Paginate in `Pagination`  |
| Portals                     | `Modal`                         |
| Typed HTTP requests         | `noteService.ts`                |
