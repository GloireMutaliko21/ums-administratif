import { Document, Font, Image, Page, PDFViewer, StyleSheet, Text, View } from "@react-pdf/renderer"

const CarteService = ({ nom, postnom, prenom, imageUrl, grade }) => {
    Font.register({
        family: 'Oswald',
        src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
    });


    const styles = StyleSheet.create({
        body: {
            paddingTop: 10,
            paddingBottom: 65,
            paddingHorizontal: 35,
            fontFamily: 'Oswald',
            width: '100%'
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        },
        title: {
            fontSize: 24,
            textAlign: 'center',
            fontFamily: 'Oswald',
            borderBottom: '3px solid black',
            paddingBottom: '5px'
        },
        image: {
            width: '180px',
            height: '280px',
            objectFit: 'cover',
            margin: '0 20',
            padding: 10,
        },
        contentVerso: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            borderBottom: '1px solid gray'
        },
        infosAgent: {
            display: 'flex',
            flexDirection: 'row',
            width: '70%',
            margin: '3px'
        },
        infosEtiquettes: {
            marginRight: '100px'
        }
    });

    return (
        <PDFViewer className='fixed top-0 bottom-0 right-0 left-0 z-50 w-full h-full'>
            <Document>
                <Page size="A4" orientation="landscape" style={styles.body}>
                    <View style={{ width: '100%' }}>
                        <View style={styles.section}>
                            <Text style={styles.title}>Université de Goma</Text>
                        </View>
                        <View style={styles.contentVerso}>
                            <View>
                                <Image
                                    style={styles.image}
                                    src={imageUrl}
                                />
                            </View>
                            <View style={styles.infosAgent}>
                                <View style={styles.infosEtiquettes}>
                                    <Text>Nom et postnom</Text>
                                    <Text>Prenom</Text>
                                    <Text>Matricule</Text>
                                    <Text>Grade</Text>
                                    <Text>Permanence</Text>
                                    <Text>Statut</Text>
                                    <Text>Téléphone</Text>
                                </View>
                                <View>
                                    <Text>: {nom} {postnom}</Text>
                                    <Text>: {prenom}</Text>
                                    <Text>: {grade}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.section}>
                        </View>
                    </View>
                    <Text>Section #2</Text>
                </Page>
            </Document>
        </PDFViewer>
    );
}

export default CarteService;