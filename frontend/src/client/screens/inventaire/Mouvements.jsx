import React from 'react';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import Configurations from './Configurations';
import Operations from './Operations';

const Mouvements = () => {
    const headerText = [{ text: "Opérations" }, { text: "Configuration" }];
    return (
        <div>
            <TabComponent heightAdjustMode='Auto'>
                <TabItemsDirective>
                    <TabItemDirective header={headerText[0]} content={Operations} />
                    <TabItemDirective header={headerText[0]} content={Configurations} />
                </TabItemsDirective>
            </TabComponent>
        </div>
    );
}

export default Mouvements;