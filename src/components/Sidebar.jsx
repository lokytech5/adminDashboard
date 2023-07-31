import React from 'react'
import Image from 'next/image'
import graphIcon from '../../public/Graph.svg'
import { HiOutlineHome, HiOutlineLogout, HiOutlineShoppingCart, HiOutlineUserGroup, HiOutlineInbox, HiOutlineChat, HiOutlineCog, HiLogout } from 'react-icons/hi';
import { BiChevronRight, BiGift } from 'react-icons/bi';
import { IoMdHeadset } from 'react-icons/io';
import Link from 'next/link';
const Sidebar = () => {
    return (
        <div className='bg-white w-60 p-3 flex flex-col h-full'>
            <div className='flex items-center gap-2 px-1'>
                <picture>
                    <Image
                        src={graphIcon} // your image path
                        alt='metrix icon'
                        width={43.33} // width of your image
                        height={43.33} // height of your image
                        className="px-2 mb-3 relative"
                    />
                </picture>
                <span className="text-center text-zinc-700 text-xl font-bold">Metrix</span>
            </div>

            <div className="mt-20 flex flex-col space-y-6">
                <Link href="/dashboard">
                    <div className="flex items-center space-x-2 text-blue-600  bg-blue-200 p-2 rounded-lg">
                        <HiOutlineHome className="w-6 h-6" />
                        <span className="text-sm">Dashboard</span>
                    </div>
                </Link>
                <Link href="/orders">
                    <div className="flex items-center space-x-2">
                        <HiOutlineShoppingCart className="w-6 h-6" />
                        <span className="text-sm">Orders</span>
                        <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
                    </div>
                </Link>
                <Link href="#!">
                    <div className="flex items-center space-x-2">
                        <HiOutlineUserGroup className="w-6 h-6" />
                        <span className="text-sm">Customers</span>
                    </div>
                </Link>
                <Link href="#!">
                    <div className="flex items-center space-x-2">
                        <HiOutlineInbox className="w-6 h-6" />
                        <span className="text-sm">Inventory</span>
                    </div>
                </Link>
                <Link href="#!">
                    <div className="flex items-center space-x-2">
                        <HiOutlineChat className="w-6 h-6" />
                        <span className="text-sm">Conversation</span>
                        <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">16</span>
                    </div>
                </Link>
                <Link href="#!">
                    <div className="flex items-center space-x-2">
                        <HiOutlineCog className="w-6 h-6" />
                        <span className="text-sm">Setting</span>
                    </div>
                </Link>
            </div>

            <div className="mt-auto mb-1">
                <Link href="#!">
                    <div className="flex items-center space-x-2 text-blue-600 hover:underline bg-blue-200 p-2 rounded-lg">
                        <IoMdHeadset className="w-6 h-6" />
                        <span className="text-sm">Contact Support</span>
                    </div>
                </Link>
                <div className="mt-4 mb-9 flex flex-col items-start space-y-1 bg-green-200 p-2 rounded-lg">
                    <div className="flex items-center space-x-2">
                        <BiGift className="w-6 h-6" />
                        <span className="text-sm">Free gift await you!</span>
                    </div>
                    <span className="text-sm">Upgrade your account</span>
                    <BiChevronRight className="self-end w-6 h-6" />
                </div>

                <Link href="#!">
                    <div className="flex items-center space-x-2 text-red-500 text-base">
                        <HiLogout className="w-6 h-6" />
                        <span className="text-sm">Logout</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar