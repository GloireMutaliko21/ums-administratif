import React from 'react';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import AllBiens from './components/AllBiens';
import Amortissements from './components/Amortissements';
import Amortis from './components/Amortis';

const Overview = () => {
    const headerText = [{ text: "Tous les biens" }, { text: "Amortissements" }, { text: 'Amortis' }];

    return (
        <div>
            <TabComponent heightAdjustMode='Auto'>
                <TabItemsDirective>
                    <TabItemDirective header={headerText[0]} content={AllBiens} />
                    <TabItemDirective header={headerText[1]} content={Amortissements} />
                    <TabItemDirective header={headerText[2]} content={Amortis} />
                </TabItemsDirective>
            </TabComponent>
        </div>
    );
}

export default Overview;