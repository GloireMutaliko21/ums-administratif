import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';

import CategArticle from './configurations/tabs/CategArticle';
import CategBien from './configurations/tabs/CategBien';
import Grades from './configurations/tabs/Grades';
import UnitGestion from './configurations/tabs/UnitGestion';

const Configuration = () => {
    const headerText = [{ text: "Grades agents" }, { text: "Categ. Biens" }, { text: "Categ. Articles" }, { text: "Unit. Gestion" }];

    return (
        <div>
            <TabComponent heightAdjustMode='Auto'>
                <TabItemsDirective>
                    <TabItemDirective header={headerText[0]} content={Grades} />
                    <TabItemDirective header={headerText[2]} content={CategBien} />
                    <TabItemDirective header={headerText[1]} content={CategArticle} />
                    <TabItemDirective header={headerText[3]} content={UnitGestion} />
                </TabItemsDirective>
            </TabComponent>
        </div>
    );
}

export default Configuration;