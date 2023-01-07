import { Document, Page, PDFViewer, StyleSheet, Text, View } from "@react-pdf/renderer"

const CarteService = () => {
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4'
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        }
    });

    return (
        <PDFViewer className='fixed top-0 bottom-0 right-0 left-0 z-50 w-full h-full'>
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text>Section #1</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>Section #2</Text>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
}

export default CarteService;