import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import DashboardInvent from '../../client/screens/inventaire/Dashboard';

const Patrimoine = () => {
    const headerText = [{ text: "Patrimoine" }, { text: "Inventaire" }];
    return (
        <div>
            <TabComponent heightAdjustMode='Auto'>
                <TabItemsDirective>
                    {/* <TabItemDirective header={headerText[0]} content={Operations} /> */}
                    <TabItemDirective header={headerText[1]} content={DashboardInvent} />
                </TabItemsDirective>
            </TabComponent>
        </div>
    );
}

export default Patrimoine;