import React from 'react'

const DashboardOrderSummary = ({ title, allOrders, pendingOrders, completedOrders, icon }) => {
  return (
      <div className="w-[426px] h-[145px] px-[15px] py-[11px] bg-white rounded-xl flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start gap-8 flex">
              <div className="self-stretch justify-between items-center gap-[182px] inline-flex">
                  <div className="w-9 h-9 p-2 bg-amber-200 bg-opacity-20 rounded-lg justify-center items-center flex">
                      <div className="grow shrink basis-0 self-stretch pl-[2.75px] pr-[2.18px] pt-[1.90px] pb-[2.08px] justify-center items-center inline-flex">
                          <div className="w-[15.07px] h-4 relative">
                              {icon}
                          </div>
                      </div>
                  </div>
                  <div className="justify-start items-center gap-[7px] flex">
                      <div className="text-neutral-300 text-xs font-normal">{title}</div>
                  </div>
              </div>
              <div className="self-stretch justify-start items-start gap-8 inline-flex">
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-neutral-400 text-sm font-normal">All Orders</div>
                      <div className="justify-center items-center gap-[7px] inline-flex">
                          <div className="text-zinc-700 text-xl font-medium">{allOrders}</div>
                      </div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-neutral-400 text-sm font-normal">Pending</div>
                      <div className="justify-center items-center gap-[7px] inline-flex">
                          <div className="text-zinc-700 text-xl font-medium">{pendingOrders}</div>
                      </div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-neutral-400 text-sm font-normal">Completed</div>
                      <div className="justify-center items-center gap-[7px] inline-flex">
                          <div className="text-zinc-700 text-xl font-medium">{completedOrders}</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default DashboardOrderSummary