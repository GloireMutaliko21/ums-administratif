import React, { useEffect, useState } from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { useStateContext } from '../../context/ContextProvider';
import { TASK_BASE_URL } from '../../utils/constants';
import { handleGet } from '../../api/get';
import CardTemplate from '../components/tasks/CardTemplate';
import { kanbanGrid } from '../data/SelectData';


const TaskList = () => {
    const [canFecth, setCanFecth] = useState(true);
    const { localUserData, agentsList, setAgentsList, taskList, setTaskList } = useStateContext();

    useEffect(() => {
        if (canFecth) {
            // handleGet(localUserData.token, `${TASK_BASE_URL}/098a83f4-c9d9-44e3-a85a-cf17b4d4a402`, setTaskList, null);
            handleGet(localUserData.token, `${TASK_BASE_URL}/${localUserData.agent.id}`, setTaskList, null);
        }
        return () => {
            setCanFecth(false);
        }
    }, [taskList]);

    const updateTaskStatus = (id, status) => {
        console.log(id);
        console.log(status);
    };

    const onCardDropped = (args) => {
        const taskId = args.data[0].id;
        const newStatus = args.data[0].status;
        const updatedData = [...taskList?.data];
        updateTaskStatus(taskId, newStatus);
    }

    return (
        <div>
            <KanbanComponent
                id='kanban'
                dataSource={taskList?.data}
                cardSettings={{
                    template: CardTemplate,
                    headerField: 'id',
                }}
                keyField='status'
                allowDrop={true}
                allowDragAndDrop={true}
                dragStop={onCardDropped}
                enablePersistence={true}
            >
                <ColumnsDirective>
                    {kanbanGrid.map((item, index) =>
                        <ColumnDirective key={index} {...item} />
                    )}
                </ColumnsDirective>
            </KanbanComponent>
        </div>
    );
}

export default TaskList;