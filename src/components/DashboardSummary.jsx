import React from 'react'

const DashboardSummary = ({ icon, title, amount, volume, percentage }) => {
    return (
        <div className="flex flex-col justify-start items-start gap-2 bg-white rounded-xl p-4">
            <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start gap-8 flex">
                <div className="self-stretch justify-between items-center gap-[182px] inline-flex">
                    <div className="w-9 h-9 p-2 bg-indigo-500 bg-opacity-10 rounded-lg justify-center items-center flex">
                        {icon}
                    </div>
                    <div className="justify-start items-center gap-[7px] flex">
                        <div className="text-neutral-300 text-xs font-normal">This Week</div>
                    </div>
                </div>
                <div className="self-stretch justify-start items-start gap-8 inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                        <div className="text-neutral-400 text-sm font-normal">{title}</div>
                        <div className="justify-center items-center gap-[7px] inline-flex">
                            <div className="text-zinc-700 text-xl font-medium">{amount}</div>
                        </div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                        <div className="text-neutral-400 text-sm font-normal">Volume</div>
                        <div className="flex justify-center items-center gap-2">
                            <div className="text-zinc-700 text-xl mr-10 font-medium">{volume}</div>
                            <div className="text-neutral-500 text-xs font-normal">{percentage}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardSummary