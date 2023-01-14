import React, { useEffect, useState } from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import CardTemplate from '../components/tasks/CardTemplate';
import { useStateContext } from '../../context/ContextProvider';
import { TASK_BASE_URL } from '../../utils/constants';
import { handleGet } from '../../api/get';


const TaskList = () => {
    const [canFecth, setCanFecth] = useState(true);
    const { localUserData, agentsList, setAgentsList, taskList, setTaskList } = useStateContext();

    useEffect(() => {
        if (canFecth) {
            handleGet(localUserData.token, `${TASK_BASE_URL}/${localUserData.agent.id}`, setTaskList, null);
        }
        return () => {
            setCanFecth(false);
        }
    }, [taskList]);

    // console.log(taskList);

    const kanbanGrid = [
        {
            headerText: 'To Do',
            keyField: 'Open',
            allowToggle: true
        },

        {
            headerText: 'In Progress',
            keyField: 'InProgress',
            allowToggle: true
        },

        {
            headerText: 'Done',
            keyField: 'Close',
            allowToggle: true
        },
    ];

    // const [data, setData] = useState(taskList?.data);

    const updateTaskStatus = (id, status) => {
        console.log(id);
        console.log(status);
    };

    const onCardDropped = (args) => {
        // console.log(data)
        console.log(args.data[0]);
        // // Récupérer l'ID de la tâche
        const taskId = args.data[0].id;

        // // Récupérer le nouvel état de la tâche
        const newStatus = args.data[0].status;
        // console.log(taskId);
        // console.log(args);
        // // Trouver l'index de la tâche dans le tableau de données
        const taskIndex = taskList.data.findIndex(task => task.id === taskId);
        console.log(taskIndex);
        // // Mettre à jour l'état de la tâche dans le tableau de données
        const updatedData = [...taskList.data];
        // // console.log(updatedData);
        console.log(updatedData);
        // // console.log(updatedData[taskIndex])
        // updatedData[taskIndex].status = newStatus;
        // // Mettre à jour l'état de la tâche dans le backend (exemple d'appel à une fonction d'API)
        updateTaskStatus(taskId, newStatus);
        // //     .then(() => {
        // //         // Mettre à jour le tableau de données dans le composant
        setTaskList(updatedData);
        // console.log(data)
        //     })
        //     .catch(error => {
        //         console.error(error);
        //     });
    }

    return (
        <div>
            <KanbanComponent
                id='kanban'
                dataSource={taskList?.data}
                cardSettings={{
                    template: CardTemplate,
                    // contentField: 'description'
                }}
                keyField='status'
                allowDrop={true}
                allowDragAndDrop={true}
                dragStop={onCardDropped}
            // enablePersistence={true}
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