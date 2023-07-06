import React from 'react'
import Entete from './Entete';

const Assiduity = React.forwardRef((props, ref) => {

    return (
        <div ref={ref}>
            <Entete />
            <div className='text-center text-2xl font bold mb-5'>
                Taches {props.header} de l'agent <span className='text-sky-500'>{props.agent}</span>
            </div>
            {
                props.data?.map(({ status, data }) =>
                    <table key={status} className='w-full border border-b-2 border-b-black'>
                        <td className='border px-3 w-1/3 font-bold border-r border-r-sky-500' rowSpan={data.length}>{status}</td>
                        {
                            JSON.parse(data)?.map(({ titre, priorite, description }, idx) =>
                                <table key={idx} className='w-full border-b-2 border-b-sky-600'>
                                    <tr >
                                        <td className='border border-t-0 px-3 w-1/3'>Titre</td>
                                        <td className='border border-t-0 px-3 w-1/3'>{titre}</td>
                                    </tr>
                                    <tr >
                                        <td className='border px-3 w-1/3'>Description</td>
                                        <td className='border px-3 w-1/3'>{description}</td>
                                    </tr>
                                    <tr >
                                        <td className='border px-3 w-1/3'>Priorité</td>
                                        <td className='border px-3 w-1/3'>{priorite}</td>
                                    </tr>
                                </table>
                            )
                        }
                    </table>
                )
            }
        </div>
    );
})

export default Assiduity;