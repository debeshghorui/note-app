import { useState } from 'react'
import { StyleSheet } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import Note from './Note'
import Notes from './Notes'

const notes = [
    {
        noteId: "1",
        noteName: 'Note 1',
        noteDate: '2024-06-01',
        noteContent: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        // noteContent: 'content of Note'
    },
    {
        noteId: "2",
        noteName: 'Note 2',
        noteDate: '2024-06-02',
        noteContent: 'This is the content of Note 2.'
    },
    {
        noteId: "3",
        noteName: 'Note 3',
        noteDate: '2024-06-03',
        noteContent: 'This is the content of Note 3.'
    }, 
    {
        noteId: "4",
        noteName: 'Note 4',
        noteDate: '2024-06-04',
        noteContent: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

        // noteContent: 'This is the content of Note 4.'
    },
    {
        noteId: "5",
        noteName: 'Note 5',
        noteDate: '2024-06-05',
        noteContent: 'This is the content of Note 5.'
    },
    {
        noteId: "6",
        noteName: 'Note 6',
        noteDate: '2024-06-06',
        noteContent: 'This is the content of Note 6.'
    }
]

const index = () => {
    const [notesList, setNotesList] = useState(notes)
    const [selectNote, setSelectNote] = useState(null)

    const handleSaveNote = (note) => {
        setNotesList((prevNotes) => {
            const noteId = note.noteId ?? Date.now().toString()
            const nextNote = {
                noteId,
                noteName: note.noteName ?? 'Untitled Note',
                noteDate: new Date().toISOString().split('T')[0],
                noteContent: note.noteContent ?? '',
            }

            const existingIndex = prevNotes.findIndex((item) => item.noteId === noteId)
            if (existingIndex === -1) {
                return [...prevNotes, nextNote]
            }

            return prevNotes.map((item) => (item.noteId === noteId ? nextNote : item))
        })

        setSelectNote(null)
    }

    return (
        <SafeAreaView style={styles.container}>
            {selectNote ? (
                <Note
                    noteId={selectNote.noteId}
                    noteName={selectNote.noteName ?? ''}
                    noteContent={selectNote.noteContent ?? ''}
                    onSelectNote={handleSaveNote}
                />
            ) : (
                <Notes notes={notesList} onSelectNote={setSelectNote} />
            )}
        </SafeAreaView>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    }
})