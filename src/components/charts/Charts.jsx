import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Charts = () => {
  const maxDataValue = 50;
  const dataValues = [12, 19, 3, 5, 2, 3, 9];
  const dateLabels = ['Sept 1', 'Sept 2', 'Sept 3', 'Sept 4', 'Sept 5', 'Sept 6', 'Sept 7'];

  const barHeights = dataValues.map(value => {
    const indigoHeight = (value / maxDataValue) * 241;
    const slateHeight = 200 - indigoHeight;
    return { slateHeight, indigoHeight };
  });

  return (
    <div className="flex space-x-4 flex-col">
      <div className="w-full h-[10px] flex flex-row justify-start items-center gap-[30px] mb-4">
        {/* Height and width were swapped, layout was changed to row, and margin-bottom was added */}
        <div className="text-gray-400 text-[11px] font-normal">100k</div>
        <div className="text-right text-gray-400 text-[11px] font-normal">80k</div>
        <div className="text-right text-gray-400 text-[11px] font-normal">60k</div>
        <div className="text-right text-gray-400 text-[11px] font-normal">40k</div>
        <div className="text-right text-gray-400 text-[11px] font-normal">20k</div>
      </div>
      <div className="flex space-x-4">
        {barHeights.map((bar, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            <div className="w-[13px] h-[100px] relative">
              <div style={{ height: `${bar.slateHeight}px` }} className="w-[13px] h-full left-0 top-0 absolute bg-slate-100 rounded-[50px]" />
              <div style={{ height: `${bar.indigoHeight}px` }} className="w-[13px] h-full left-0 bottom-0 absolute bg-indigo-500 rounded-[50px]" />
            </div>
            <div className="text-right text-neutral-300 text-[11px] font-normal">Sept 16</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Charts