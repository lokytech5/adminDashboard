import React from 'react'


const ProductSummary = ({ title, allProducts, activeProducts, percentage, icon }) => {
  return (
      <div className="w-[410px] h-[159px] px-[15px] py-[11px] bg-indigo-500 rounded-xl flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start gap-8 flex">
              <div className="self-stretch justify-between items-center gap-[182px] inline-flex">
                  <div className="w-9 h-9 p-2 bg-white bg-opacity-20 rounded-lg justify-center items-center flex">
                      <div className="grow shrink basis-0 self-stretch pl-[1.87px] pr-[2.13px] pt-[1.88px] pb-[2.15px] justify-center items-center inline-flex">
                          <div className="w-4 h-4 relative">
                              {icon}
                          </div>
                      </div>
                  </div>
                  <div className="opacity-0 justify-start items-center gap-[7px] flex">
                      <div className="text-slate-200 text-xs font-normal">{title}</div>
                  </div>
              </div>
              <div className="self-stretch justify-start items-start gap-8 inline-flex">
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-white text-sm font-normal">All Products</div>
                      <div className="justify-center items-center gap-[7px] inline-flex">
                          <div className="text-white text-xl font-medium">{allProducts}</div>
                      </div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-white text-sm font-normal">Active</div>
                      <div className="justify-center items-center gap-[7px] inline-flex">
                          <div className="text-white text-xl font-medium">{activeProducts}</div>
                          <div className="text-slate-200 text-xs font-normal">{percentage}</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default ProductSummary