import React from 'react';

import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';

const PresencesConges = () => {
    return (
        <div>
            <div className='control-section'>
                <PdfViewerComponent id="container" documentPath="PDF_Succinctly.pdf"
                    serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer" style={{ 'height': '640px' }}>
                    <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                        Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
                </PdfViewerComponent>
            </div>
        </div>
    )
}

export default PresencesConges