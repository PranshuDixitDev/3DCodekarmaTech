import React from 'react';

const Alert = ({ type, text }) => {
  return (
    <div className='absolute top-4 left-0 right-0 flex justify-center items-center z-50'>
        <div className={`p-3 text-white ${type === 'danger' ? 'bg-red-600' : 'bg-green-600'}
            rounded-lg shadow-lg flex items-center`} role='alert'>
            <span className={`${type === 'danger' ? 'bg-red-800' : 'bg-green-800'} 
            rounded-full h-8 w-8 flex items-center justify-center mr-3`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={type === 'danger' ? 'M18.364 5.636a9 9 0 1112.728 12.728 9 9 0 01-12.728-12.728zM12 8v4m0 4h.01' : 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'}></path></svg>
            </span>
            <p>{text}</p>
        </div>
    </div>
  );
}

export default Alert;
