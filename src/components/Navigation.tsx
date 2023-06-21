import React, { memo } from 'react'
import { FiCommand, FiSettings } from 'react-icons/fi'

interface Props {
    setOpenSettings: React.Dispatch<React.SetStateAction<boolean>>
}

const Navigation = ({ setOpenSettings }: Props) => {
    return (
        <nav className='pt-5 text-white flex justify-between w-11/12 mx-auto '
       >
            <div className='flex items-center gap-1 cursor-pointer' >
                <FiCommand className='text-sm ' />
                <h1 className=''>FOSCU</h1>
            </div>

            <FiSettings className='text-2xl cursor-pointer '
                onClick={() => setOpenSettings((open: boolean) => !open)} />
        </nav>
    )
}


export default memo(Navigation)