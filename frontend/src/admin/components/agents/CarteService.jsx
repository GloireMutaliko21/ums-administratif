// import { Document, Font, Image, Page, PDFViewer, StyleSheet, Text, View, Canvas } from "@react-pdf/renderer"

// const CarteService = ({ nom, postnom, prenom, matricule, imageUrl, grade, permanence, statut, telephone, qrcode }) => {
//     Font.register({
//         family: 'Oswald',
//         src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
//     });


//     const styles = StyleSheet.create({
//         body: {
//             paddingTop: 10,
//             paddingBottom: 65,
//             paddingHorizontal: 35,
//             fontFamily: 'Oswald',
//             width: '100%'
//         },
//         section: {
//             margin: 10,
//             padding: 10,
//             flexGrow: 1
//         },
//         title: {
//             fontSize: 24,
//             textAlign: 'center',
//             fontFamily: 'Oswald',
//             borderBottom: '3px solid black',
//             paddingBottom: '5px'
//         },
//         image: {
//             width: '80px',
//             height: '120px',
//             objectFit: 'cover',
//             margin: '0 20',
//             padding: 10,
//         },
//         contentVerso: {
//             display: 'flex',
//             flexDirection: 'row',
//             width: '100%',
//             borderBottom: '1px solid gray'
//         },
//         infosAgent: {
//             display: 'flex',
//             flexDirection: 'row',
//             width: '70%',
//             margin: '3px',
//             fontSize: 12
//         },
//         infosEtiquettes: {
//             marginRight: '10px'
//         }
//     });

//     return (
//         <PDFViewer className='fixed top-0 bottom-0 right-0 left-0 z-50 w-full h-full'>
//             <Document>
//                 <Page size="A6" orientation="landscape" style={styles.body}>
//                     <View style={{ width: '100%' }}>
//                         <View style={styles.section}>
//                             <Text style={styles.title}>Université de Goma</Text>
//                         </View>
//                         <View style={styles.contentVerso}>
//                             <View>
//                                 <Image
//                                     style={styles.image}
//                                     src={imageUrl}
//                                 />
//                             </View>
//                             <View style={styles.infosAgent}>
//                                 <View style={styles.infosEtiquettes}>
//                                     <Text>Nom et postnom</Text>
//                                     <Text>Matricule</Text>
//                                     <Text>Grade</Text>
//                                     <Text>Permanence</Text>
//                                     <Text>Statut</Text>
//                                     <Text>Téléphone</Text>
//                                 </View>
//                                 <View>
//                                     <Text>: {nom} {postnom} {prenom}</Text>
//                                     <Text>: {matricule}</Text>
//                                     <Text>: {grade}</Text>
//                                     <Text>: {permanence}</Text>
//                                     <Text>: {statut}</Text>
//                                     <Text>: {telephone}</Text>
//                                 </View>
//                             </View>
//                         </View>
//                         <View style={styles.section}>
//                             <Text>ok</Text>
//                             <Text>ok</Text>
//                             <Text>ok</Text>
//                             {/* <Canvas>
//                                 <Text>ok</Text>
//                             </Canvas> */}
//                         </View>
//                     </View>
//                 </Page>
//             </Document>
//         </PDFViewer>
//     );
// }

// export default CarteService;

import React from 'react'

const CarteService = React.forwardRef((props, ref) => {

    //nom, postnom, prenom, matricule, imageUrl, grade, permanence, statut, telephone, qrcode
    return (
        <div ref={ref} className=''>
            <div className='text-center font-serif font-bold w-full border-b-2 text-teal-500 border-slate-700'>
                <p>Université de Goma</p>
            </div>
            <div className='flex mt-1 font-mono text-[10px] items-center'>
                <div>
                    <img src={props.imageUrl} alt="" className='w-20 h-24 object-cover' />
                </div>
                <div className='ml-2'>
                    <p>Noms</p>
                    <p>Matricule</p>
                    <p>Grade</p>
                    <p>Permanence</p>
                    <p>Statut</p>
                    <p>Téléphone</p>
                </div>
                <div className='ml-5'>
                    <p>: {props.nom} {props.postnom} {props.prenom}</p>
                    <p>: {props.matricule}</p>
                    <p>: {props.grade}</p>
                    <p>: {props.permanence}</p>
                    <p>: {props.statut}</p>
                    <p>: {props.telephone}</p>
                </div>
            </div>
            <div>{props.qrcode}</div>
        </div>
    );
});

export default CarteService;