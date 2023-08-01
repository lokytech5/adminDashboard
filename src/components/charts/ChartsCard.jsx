import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import Charts from '@/components/charts/Charts'

const ChartsCard = () => {
    return (
        <div className="bg-white shadow rounded-lg p-4 h-[250px]">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <h2 className="text-lg font-semibold">Summary</h2>
                    <div className="relative">
                        <button className="border border-gray-300 rounded px-2 py-1">
                            Sales
                            <IoIosArrowDown className="inline" />
                        </button>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-sm">Last 7 days</p>
                    <div className="relative">
                        <button className="border border-gray-300 rounded px-2 py-1">
                            <IoIosArrowDown className="inline" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="h-[100px]">
                <Charts />
            </div>
        </div>
    )
}

export default ChartsCard