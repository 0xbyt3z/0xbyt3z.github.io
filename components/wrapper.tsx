import React, { ReactNode } from 'react'

function Wrapper({ children }: { children: ReactNode }) {
    return (
        <>

            <div className='w-screen h-screen flex flex-col xl:px-36 absolute'>
                {children}
            </div>

        </>
    )
}

export default Wrapper; 