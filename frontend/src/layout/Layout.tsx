import React from 'react'
import { Children } from '@/types'
import NavBar from '@/components/NavBar'

export default function Layout({children} : Children) {
    return (
        <>
            <NavBar/>
            <div className='pages'>
                {children}
            </div>
        </>
    )
}
