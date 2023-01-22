import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import InventaireAdmin from '../components/patrimoine/InventaireAdmin';

const Patrimoine = () => {
    const headerText = [{ text: "Patrimoine" }, { text: "Inventaire" }];
    return (
        <div>
            <TabComponent heightAdjustMode='Auto'>
                <TabItemsDirective>
                    <TabItemDirective header={headerText[0]} content={'InventaireAdmin'} />
                    <TabItemDirective header={headerText[1]} content={InventaireAdmin} />
                </TabItemsDirective>
            </TabComponent>
        </div>
    );
}

export default Patrimoine;