import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';

import InventaireAdmin from '../components/patrimoine/InventaireAdmin';
import PatrimoineAdmin from '../components/patrimoine/patrimoineAdmin';
import FicheStockPeriode from '../components/patrimoine/FicheStockPeriode';

const Patrimoine = () => {
    const headerText = [{ text: "Patrimoine" }, { text: "Inventaire" }, { text: "Fiche de stock" }];
    return (
        <div>
            <TabComponent heightAdjustMode='Auto'>
                <TabItemsDirective>
                    <TabItemDirective header={headerText[0]} content={PatrimoineAdmin} />
                    <TabItemDirective header={headerText[1]} content={InventaireAdmin} />
                    <TabItemDirective header={headerText[2]} content={FicheStockPeriode} />
                </TabItemsDirective>
            </TabComponent>
        </div>
    );
}

export default Patrimoine;