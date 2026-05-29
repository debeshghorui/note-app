# Note App

A simple note-taking app built with Expo Router and React Native. It starts with a list of notes, lets you open a note to edit, and saves changes back to the list.

## Features

- View a list of notes with title, date, and a short preview
- Create a new note with the floating action button
- Edit an existing note and save changes on exit
- Dark, minimal UI optimized for reading and writing

## Tech Stack

- Expo SDK 56 and Expo Router
- React Native
- TypeScript (app code currently uses JS/TSX)

## Project Structure

- Main layout: [src/app/_layout.tsx](src/app/_layout.tsx)
- Home screen (notes list): [src/app/index.tsx](src/app/index.tsx)
- Notes list view: [src/app/Notes.tsx](src/app/Notes.tsx)
- Note editor screen: [src/app/Note.tsx](src/app/Note.tsx)
- Note card component: [src/app/NoteCard.tsx](src/app/NoteCard.tsx)

## Getting Started

1. Install dependencies

   ```bash
   bun install
   ```

2. Start the app

   ```bash
   bun run start
   ```

3. Run on a platform

   ```bash
   bun run android
   bun run ios
   bun run web
   ```

## Notes on Data

Notes are kept in local component state for now, seeded with sample data in [src/app/index.tsx](src/app/index.tsx). There is no persistence yet.

## Roadmap Ideas

- Persist notes to local storage or a backend
- Add search and tags
- Add note deletion and pinning
- Improve typography and theming options

## Scripts

- `bun run start`: Start the Expo dev server
- `bun run android`: Start and open Android
- `bun run ios`: Start and open iOS
- `bun run web`: Start and open web
- `bun run lint`: Lint the project

## Credits

Built with [Expo](https://expo.dev/) and [Expo Router](https://docs.expo.dev/router/introduction/).
