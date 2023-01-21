import * as React from 'react';

interface IReceivedRequestProps {
    image: string;
    name: string;
}

const ReceivedRequest: React.FunctionComponent<IReceivedRequestProps> = (props) => {
    return (
        <div className='border-y p-y-2'>
            <div className='flex items-center gap-1'>
                <img src={props.image} alt={props.name + "profile"} className="w-20 rounded-full p-1" />
                <div className='flex flex-col justify-center w-full'>
                    <span className='text-md font-medium'>{props.name}</span>
                    <div className='flex font-bold text-sm justify-start w-full gap-2 text-center'>
                        <span className='text-white bg-blue-500 py-1 rounded-sm w-full'>Confirm</span>
                        <span className='text-black bg-slate-200 py-1 rounded-sm w-full'>Reject</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReceivedRequest;
