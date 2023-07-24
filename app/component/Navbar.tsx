import React from 'react'
import { currentUser, SignOutButton } from "@clerk/nextjs";
import Image from 'next/image';

async function Navbar() {
    const user = await currentUser()
    if (!user) return null
    return (
        <div className='w-screen px-16 py-2 md:px-26 flex justify-between items-center'>
            <p>Hello {user?.firstName}!</p>
            <div className='flex gap-2'>
                <Image alt={`${user?.firstName}'s profile picture`} src={user?.imageUrl} width={50} height={50} className='rounded-full'/>
                <SignOutButton />
            </div>
        </div>
    )
}

export default Navbar