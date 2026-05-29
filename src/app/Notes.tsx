import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import NoteCard from './NoteCard'

const Notes = ({ notes, onSelectNote }) => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={notes}
                keyExtractor={(note) => `${note.noteId}`}
                contentContainerStyle={styles.listContent}
                // showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <NoteCard
                        noteName={item.noteName}
                        noteDate={item.noteDate}
                        noteContent={item.noteContent}
                        onPress={() => onSelectNote(item)}
                    />
                )}

                ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
            />
            <Pressable
                onPress={() => onSelectNote({})}
                style={styles.fab}
                accessibilityRole="button"
                accessibilityLabel="Add new note"
            >
                <Text style={styles.fabText}>+</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default Notes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    listContent: {
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 24,
    },
    fab: {
        position: 'absolute',
        right: 20,
        bottom: 24,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#2b2b2b',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 6 },
        elevation: 6,
    },
    fabText: {
        color: '#f2f2f2',
        fontSize: 28,
        lineHeight: 30,
        fontWeight: '600',
    },
})