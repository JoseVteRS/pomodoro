import React, { forwardRef, memo } from 'react'

const Alarm = forwardRef((props, ref) => {
    return (
        <audio ref={ref}>
            <source src="/alarm.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
        </audio>
    )
}) 


Alarm.displayName = 'Alarm';


export default memo(Alarm)