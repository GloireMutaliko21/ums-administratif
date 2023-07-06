import React from 'react';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import ScanPres from '../components/presConges/ScanPres';
import Presences from '../components/presConges/Presences';
import DemandesConge from '../components/presConges/DemandesConge';
import ListeConges from '../components/presConges/ListeConges';

const PresencesConges = () => {
    const headerText = [{ text: "Scan Présence" }, { text: "Présences" }, { text: "Demandes congés" }, { text: "Liste congés" }];

    return (
        <div>
            <TabComponent heightAdjustMode='Auto'>
                <TabItemsDirective>
                    <TabItemDirective header={headerText[0]} content={ScanPres} />
                    <TabItemDirective header={headerText[1]} content={Presences} />
                    <TabItemDirective header={headerText[2]} content={DemandesConge} />
                    <TabItemDirective header={headerText[3]} content={ListeConges} />
                </TabItemsDirective>
            </TabComponent>
        </div>
    );
}

export default PresencesConges;