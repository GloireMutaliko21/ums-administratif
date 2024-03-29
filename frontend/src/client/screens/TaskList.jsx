import React, { useEffect } from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { useStateContext } from '../../context/ContextProvider';
import { TASK_BASE_URL } from '../../utils/constants';
import { handleGet } from '../../api/get';
import { handleUpdate } from '../../api/put';
import CardTemplate from '../../admin/components/tasks/CardTemplate';
import { kanbanGrid } from '../../admin/data/SelectData';
import FormAddTask from '../components/tasks/FormAddTask';
import Popup from '../../components/Popup';
import ChartAssiduity from '../components/tasks/ChartAssiduity';


const TaskList = () => {
    const { localUserData, taskFetch, setTaskFetch, taskList, setTaskList, showPopup } = useStateContext();

    useEffect(() => {
        if (taskFetch) {
            handleGet(localUserData?.token, `${TASK_BASE_URL}/${localUserData?.agent?.id}`, setTaskList, null);
        }
        return () => {
            setTaskFetch(false);
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
        const params = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localUserData?.token}`
            },
            body: JSON.stringify({ status: newStatus })
        };

        handleUpdate(`${TASK_BASE_URL}/update/${taskId}`, params)
        updateTaskStatus(taskId, newStatus);
    };

    const onDialogOpen = (args) => {
        args.cancel = true;
    };

    return (
        <div className='relative'>
            <div className='fixed z-20 -mt-5 py-5 bg-white left-60 right-5 flex justify-between items-center'>
                <h1 className='font-bold text-3xl'>Liste de tâches</h1>
                <FormAddTask />
            </div>
            <div className='absolute top-16'>

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
                    dialogOpen={onDialogOpen}
                >
                    <ColumnsDirective>
                        {kanbanGrid.map((item, index) =>
                            <ColumnDirective key={item.keyField} {...item} />
                        )}
                    </ColumnsDirective>
                </KanbanComponent>
                {
                    showPopup === 'assiduiteClient' &&
                    <Popup
                        titre={'Mon assiduité'}
                        children={<ChartAssiduity />}
                    />
                }
            </div>
        </div>
    );
}

export default TaskList;