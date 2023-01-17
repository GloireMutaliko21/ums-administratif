import React from 'react'

const Assiduity = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            {
                props.data?.map(({ status, data }) =>
                    <table key={status}>
                        {/* <tr>
                            <td className='border border-b-slate-700 px-3 w-1/3 font-bold' rowSpan='4'>{status}</td>
                            <td className='border px-3 w-1/3 text-slate-500'>{ data.titre}</td>
                        </tr> */}
                        <td className='border border-b-slate-700 px-3 w-1/3 font-bold' rowSpan={data.length}>{status}</td>

                        {
                            data?.map(({ titre, priorite, description }, idx) =>
                                <table key={idx}>
                                    <tr >
                                        <td>Titre</td>
                                        <td>{titre}</td>
                                    </tr>
                                    <tr >
                                        <td>Descriptioni</td>
                                        <td>{description}</td>
                                    </tr>
                                    <tr >
                                        <td>Priorité</td>
                                        <td>{priorite}</td>
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