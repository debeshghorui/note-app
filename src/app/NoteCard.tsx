import { StyleSheet, Text, View, Pressable } from 'react-native'

const NoteCard = ({ noteName, noteDate, noteContent, onPress }) => {
    return (
        <Pressable 
            onPress={onPress}
            style={styles.card}>
            <Text 
                style={styles.contentText} 
                numberOfLines={4} 
                ellipsizeMode="tail"
            >
                {noteContent}
            </Text>
            <View style={styles.footer}>
                <Text style={styles.titleText}>{noteName}</Text>
                <Text style={styles.dateText}>{noteDate}</Text>
            </View>
        </Pressable>
    )
}

export default NoteCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#2b2b2b',
        borderRadius: 18,
        padding: 16,
        gap: 12,
        alignSelf: 'stretch',
        minHeight: 140,
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 6 },
        elevation: 6,
    },
    contentText: {
        color: '#f2f2f2',
        fontSize: 14,
        lineHeight: 20,
    },
    footer: {
        marginTop: 'auto',
    },
    titleText: {
        color: '#e0e0e0',
        fontSize: 14,
        fontWeight: '600',
    },
    dateText: {
        color: '#9c9c9c',
        fontSize: 12,
        marginTop: 2,
    }
})