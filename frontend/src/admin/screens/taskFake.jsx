import React, { useState } from 'react';
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { kanbanData } from '../data/fakedata/kanban';


const TaskList = () => {


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

    const [data, setData] = useState(kanbanData);
    const [columns, setColumns] = useState([...kanbanGrid]);

    const updateTaskStatus = (id, status) => {
        console.log(id);
        console.log(status);
    };

    const onCardDropped = (args) => {
        // console.log(data)
        // console.log(args.data);
        // // Récupérer l'ID de la tâche
        const taskId = args.data[0].Id;
        // // Récupérer le nouvel état de la tâche
        const newStatus = args.data[0].Status;
        // console.log(args);
        // // Trouver l'index de la tâche dans le tableau de données
        const taskIndex = data.findIndex(task => task.Id === taskId);
        // // console.log(taskIndex);
        // // Mettre à jour l'état de la tâche dans le tableau de données
        const updatedData = [...data];
        // // console.log(updatedData);

        // // console.log(updatedData[taskIndex])
        // updatedData[taskIndex].Status = newStatus;
        // // Mettre à jour l'état de la tâche dans le backend (exemple d'appel à une fonction d'API)
        updateTaskStatus(taskId, newStatus);
        // //     .then(() => {
        // //         // Mettre à jour le tableau de données dans le composant
        setData(updatedData);
        // console.log(data)
        //     })
        //     .catch(error => {
        //         console.error(error);
        //     });
    }

    function cardTemplate(props) {
        return (
            <div className="text-slate-500 px-2 text-sm font-thin">
                <div>
                    <div className='flex gap-3'>
                        {/* <p className='font-medium'>Titre:</p> */}
                        <p className=''>{props.Title}</p>
                    </div>
                    <div className='mt-3'>
                        {/* <p className='font-medium'>Description</p> */}
                        <p className='text-gray-400'>{props.Summary}</p>
                    </div>
                    <div className='flex gap-3 mt-3 justify-end'>
                        {/* <p className='font-medium'>Priorité:</p> */}
                        <div className='flex gap-2 items-center'>
                            <p>{props.Priority}</p>
                            {
                                props.Priority === 'Low' ?
                                    <BsFillArrowDownCircleFill className='text-xs text-green-500' /> :
                                    props.Priority === 'Normal' ?
                                        <BsFillArrowRightCircleFill className='text-xs text-yellow-500' /> :
                                        <BsFillArrowUpCircleFill className='text-xs text-blue-500' />
                            }
                        </div>
                    </div>
                </div>
            </div>);
    }

    return (
        <div>
            <KanbanComponent
                id='kanban'
                dataSource={data}
                cardSettings={{
                    // contentField: 'Summary',
                    template: cardTemplate,
                    headerField: 'Id',


                }}
                keyField='Status'
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