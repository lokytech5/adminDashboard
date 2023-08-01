import React from 'react'

const DashboardCartSummary = ({icon}) => {
  return (
      <div className="w-[410px] h-[159px] px-[15px] py-[11px] bg-white rounded-xl flex flex-col justify-start items-start gap-2.5">
          <div className="w-full flex flex-col justify-between items-start gap-8">
              <div className="w-full flex justify-between items-center gap-[182px]">
                  <div className="w-9 h-9 p-2 bg-amber-200 bg-opacity-20 rounded-lg flex justify-center items-center">
                      {icon}
                      <div className="w-5 h-5 relative flex-col justify-start items-start" />
                  </div>
                  <div className="flex justify-start items-center gap-[7px]">
                      <span className="text-neutral-300 text-xs font-normal">This Week</span>
                      {/* replace this div with your actual icon or image */}
                      <div className="w-4 h-4 relative" />
                  </div>
              </div>
              <div className="w-full flex justify-start items-start gap-8">
                  <div className="flex flex-col justify-start items-start gap-2">
                      <span className="text-red-400 text-sm font-normal">Abandoned Cart</span>
                      <div className="flex justify-center items-center gap-[7px]">
                          <span className="text-zinc-700 text-xl font-medium">20%</span>
                          <span className="text-neutral-500 text-xs font-normal">+0.00%</span>
                      </div>
                  </div>
                  <div className="flex flex-col justify-start items-start gap-2">
                      <span className="text-neutral-400 text-sm font-normal">Customers</span>
                      <div className="flex justify-center items-center gap-[7px]">
                          <span className="text-zinc-700 text-xl font-medium">30</span>
                          <span className="opacity-0 text-neutral-500 text-xs font-normal">+0.00%</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default DashboardCartSummary