import React from 'react'
import { FiBellOff } from 'react-icons/fi'

interface Props {
    stage: number,
    switchStage: (index: number) => void,
    getTickingTime: () => number,
    seconds: number
    ticking: boolean,
    startTimer: any
    muteAlarm: any
    isTimeUp: boolean
    reset: any
}

export const Timer = ({ stage, switchStage, getTickingTime, seconds, ticking, startTimer, muteAlarm, isTimeUp, reset }: Props) => {
    const options = ["Pomodoro", "Short Break", "Long Break"]

    return (
        <div className=' w-10/12 mx-auto pt-5 mt-10 text-white flex flex-col items-center justify-center'>


            <div className='flex gap-5 items-center'>
                {
                    options.map((option, index) => {
                        return (
                            <h2 key={index}
                                className={`${index === stage ? 'bg-gray-500 bg-opacity-30' : ''} py-1 px-2 cursor-pointer transition-all rounded`}
                                onClick={() => switchStage(index)}
                            >{option}</h2>
                        )
                    })
                }
            </div>

            <div className='my-10'>
                <h2 className="text-8xl font-bold  m-0">
                    {getTickingTime()}:{seconds.toString().padStart(2, '0')}
                </h2>
            </div>
            <div className='flex items-center gap-3' >
                <button className='px-16 py-2 text-2xl rounded-md bg-white text-blue-500 uppercase font-bold'
                    onClick={startTimer}
                >
                    {ticking ? 'Pause' : 'Start'}
                </button>

                {
                    isTimeUp && (
                        <FiBellOff className='text-3xl text-white cursor-pointer'
                            onClick={muteAlarm}
                        />
                    )
                }
            </div>

            {
                ticking && (<button className='uppercase underline mt-5'
                    onClick={reset}
                >Reset</button>)
            }



        </div >
    )
}
