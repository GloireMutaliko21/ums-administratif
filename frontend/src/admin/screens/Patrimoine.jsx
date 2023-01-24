import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';

import InventaireAdmin from '../components/patrimoine/InventaireAdmin';
import PatrimoineAdmin from '../components/patrimoine/patrimoineAdmin';

const Patrimoine = () => {
    const headerText = [{ text: "Patrimoine" }, { text: "Inventaire" }];
    return (
        <div>
            <TabComponent heightAdjustMode='Auto'>
                <TabItemsDirective>
                    <TabItemDirective header={headerText[0]} content={PatrimoineAdmin} />
                    <TabItemDirective header={headerText[1]} content={InventaireAdmin} />
                </TabItemsDirective>
            </TabComponent>
        </div>
    );
}

export default Patrimoine;