import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

const CardTemplate = (props) => {
    return (
        <div>
            <div className="text-slate-500 px-2 text-sm font-thin">
                <div>
                    <div className='flex gap-3'>
                        <p className=''>{props.titre}</p>
                    </div>
                    <div className='mt-3'>
                        <p className='text-gray-600'>{props.description}</p>
                    </div>
                    <div className='flex gap-3 mt-3 justify-end'>
                        <div className='flex gap-2 items-center'>
                            <p>{props.priorite}</p>
                            {
                                props.priorite === 'Low' ?
                                    <BsFillArrowDownCircleFill className='text-xs text-green-500' /> :
                                    props.priorite === 'Normal' ?
                                        <BsFillArrowRightCircleFill className='text-xs text-yellow-500' /> :
                                        <BsFillArrowUpCircleFill className='text-xs text-blue-500' />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardTemplate;