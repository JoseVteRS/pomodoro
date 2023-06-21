import React, { memo } from 'react'

import { FiX } from 'react-icons/fi'

interface Props {
    openSettings: boolean
    pomodoroRef: any
    shortBreakRef: any
    longBreakRef: any
    setOpenSettings: React.Dispatch<React.SetStateAction<boolean>>
    updateTimeDefaultValue: () => void
}

const ModalSettings = ({
    pomodoroRef,
    shortBreakRef,
    longBreakRef,
    openSettings,
    setOpenSettings,
    updateTimeDefaultValue
}: Props) => {



    const inputs = [
        {
            value: 'Pomodoro',
            ref: pomodoroRef,
            defaultValue: 25
        },
        {
            value: 'Short Break',
            ref: shortBreakRef,
            defaultValue: 5
        },
        {
            value: 'Long Break',
            ref: longBreakRef,
            defaultValue: 10
        }
    ]



    if (!openSettings) return null


    return (
        <>
            <div className='absolute h-full w-full left-0 top-0 bg-black bg-opacity-30'
                onClick={() => setOpenSettings(false)}

            >
            </div>
            <div className='max-w-xl bg-white absolute sm:w-96 w-11/12 left-1/2 top-1/2 p-5 rounded-md'
                style={{ transform: 'translate(-50%)' }}>

                <div className='flex justify-between items-center'>
                    <h2 className='uppercase font-bold text-gray-400'>Settings</h2>
                    <FiX className='text-gray-400 text-2xl ' />
                </div>

                <div className='h-1 w-full bg-gray-400 my-5'>   </div>

                <div className='flex gap-5'>
                    {
                        inputs.map((input, index) => (
                            <div key={index}>
                                <label className='text-gray-400 text-sm'>{input.value}</label>
                                <input
                                    ref={input.ref}
                                    className='w-full bg-gray-400 bg-opacity-30 p-2 rounded'
                                    type='number'
                                    defaultValue={input.defaultValue}
                                    key={index}
                                />
                            </div>
                        ))
                    }
                </div>
                <button className='bg-yellow-light uppercase w-full mt-5 rounded py-2 text-white font-bold' onClick={updateTimeDefaultValue}>
                    Save
                </button>
            </div>
        </>
    )
}


export default memo(ModalSettings)