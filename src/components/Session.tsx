'use client'


interface SessionProps {
    increment: () => void;
    decrement: () => void;
    length: number;
}

export const Session = ({ increment, decrement, length }: SessionProps) => {


    return (
        <div className='flex gap-2 items-center' >
            <button onClick={decrement} className="bg-blue-400 rounded-full text-white font-bold text-2xl w-10 h-10">-</button>
            <span className="text-white text-xl">{length / 60}</span>
            <button onClick={increment} className="bg-blue-400 rounded-full text-white font-bold text-2xl w-10 h-10">+</button>
        </div>
    )
}
