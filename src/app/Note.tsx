import { 
    Pressable, 
    KeyboardAvoidingView, 
    StyleSheet, 
    Text, 
    TextInput, 
    View 
} from 'react-native'
import { useState, useEffect } from 'react'

const Note = ({ noteId, noteName, noteContent, onSelectNote }) => {
    const [title, setTitle] = useState(noteName)
    const [content, setContent] = useState(noteContent)

    const handleTitleChange = (titleValue) => {
        setTitle(titleValue)
    }

    const handleContentChange = (contentValue) => {
        setContent(contentValue)
    }

    useEffect(() => {
        setTitle(noteName)
        setContent(noteContent)
    }, [noteId, noteName, noteContent])


    return (
        <KeyboardAvoidingView style={styles.screen}>
            <View style={styles.container}>
                <Pressable 
                    onPress={() =>
                        onSelectNote({
                            noteId,
                            noteName: title,
                            noteContent: content,
                        })
                    }
                    style={styles.exitButton}
                    accessibilityRole="button"
                    accessibilityLabel="Go back"
                >
                    <Text style={styles.exitText}>{'<'}</Text>
                </Pressable>
                <TextInput
                    style={styles.titleText}
                    value={title}
                    onChangeText={handleTitleChange}
                    placeholder="Title"
                    placeholderTextColor="#6f6f6f"
                    numberOfLines={1}
                />
                <TextInput
                    style={styles.contentText}
                    value={content}
                    onChangeText={handleContentChange}
                    placeholder="Start writing..."
                    placeholderTextColor="#6f6f6f"
                    multiline
                    textAlignVertical="top"
                />
            </View>
        </KeyboardAvoidingView>
    )
}

export default Note

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#000',
    },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#000',
    },
    titleText: {
        color: '#f2f2f2',
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 6,
        width: '100%',
    },
    contentText: {
        color: '#e6e6e6',
        fontSize: 14,
        lineHeight: 20,
        width: '100%',
        flex: 1,
    },
    exitButton: {
        alignSelf: 'flex-start',
        paddingVertical: 6,
        paddingHorizontal: 4,
        marginBottom: 8,
    },
    exitText: {
        color: '#f2f2f2',
        fontSize: 18,
        fontWeight: '600',
    },
})