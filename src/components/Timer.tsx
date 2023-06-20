'use client'

interface TimerProps {
    time: number;
    mode: string;
}


export const Timer = ({ time, mode }: TimerProps) => {
    const min = Math.floor(time / 1000 / 60);
    const sec = Math.floor((time / 1000) % 60);
    return (
        <div id="timer">
            <p id="timer-label" className="uppercase text-sm text-gray-400">{mode}</p>
            <p id="time-left" className="font-bold text-5xl">
                {min}:{sec.toString().length === 1 ? "0" + sec : sec}
            </p>
        </div>
    );
}
