import { useEffect, useState } from "react";

interface ProgressBarProps {
    time: number;
    totalTime: number;
    children: React.ReactNode;
}

export const ProgressBar = ({ time, totalTime, children }: ProgressBarProps) => {
    const [percent, setPercent] = useState(0);

    const calculatePercentage = () => {
        setPercent((time / totalTime) / 10)
    };



    useEffect(() => {
        calculatePercentage();
    }, [time]);

    return (
        <>
            <div className="circle " style={{
                color: 'yellow',
                background: `conic-gradient(#303238 0 ${percent}%, yellow ${percent}% 100%)`
            }}>
                <div className="circle_inner">
                    {children}
                </div>
            </div>
        </>
    );
};