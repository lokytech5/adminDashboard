import React from 'react'
const OrderSummary = () => {
  const orders = [

    {
      imageUrl: 'https://source.unsplash.com/80x80?face',
      itemName: 'iPhone 13',
      price: 730000,
      quantity: 1,
      date: '12 Sept 2022',
      status: 'Pending'
    },
    {
      imageUrl: 'https://source.unsplash.com/80x80?face',
      itemName: 'iPhone 13',
      price: 730000,
      quantity: 1,
      date: '12 Sept 2022',
      status: 'Complete'
    },
    {
      imageUrl: 'https://source.unsplash.com/80x80?face',
      itemName: 'iPhone 13',
      price: 730000,
      quantity: 1,
      date: '12 Sept 2022',
      status: 'Pending'
    },
    {
      imageUrl: 'https://source.unsplash.com/80x80?face',
      itemName: 'iPhone 13',
      price: 730000,
      quantity: 1,
      date: '12 Sept 2022',
      status: 'Complete'
    },
    {
      imageUrl: 'https://source.unsplash.com/80x80?face',
      itemName: 'iPhone 13',
      price: 730000,
      quantity: 1,
      date: '12 Sept 2022',
      status: 'Pending'
    },
    {
      imageUrl: 'https://source.unsplash.com/80x80?face',
      itemName: 'iPhone 13',
      price: 730000,
      quantity: 1,
      date: '12 Sept 2022',
      status: 'Complete'
    },
    {
      imageUrl: 'https://source.unsplash.com/80x80?face',
      itemName: 'iPhone 13',
      price: 730000,
      quantity: 1,
      date: '12 Sept 2022',
      status: 'Pending'
    },
    {
      imageUrl: 'https://source.unsplash.com/80x80?face',
      itemName: 'iPhone 13',
      price: 730000,
      quantity: 1,
      date: '12 Sept 2022',
      status: 'Pending'
    },
    {
      imageUrl: 'https://source.unsplash.com/80x80?face',
      itemName: 'iPhone 13',
      price: 730000,
      quantity: 1,
      date: '12 Sept 2022',
      status: 'Pending'
    },
  ];
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-sm font-bold mb-4">Recent Orders</h2>
      {orders.map((order, index) => (
        <div key={index} className="w-[383px] h-[61px] pb-3 border-b border-slate-100 flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch justify-start items-start gap-3.5 flex">
            <img className="w-[49px] h-[49px] rounded-lg border border-slate-100" src={order.imageUrl} alt={order.itemName} />
            <div className="flex-grow flex flex-col justify-between items-start gap-2.5">
              <div className="flex justify-between items-center w-full">
                <div className="text-zinc-700 text-sm font-normal">{order.itemName}</div>
                <div className="justify-start items-center gap-[9px] flex">
                  <div className="text-gray-400 text-xs font-normal">{order.date}</div>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="justify-start items-center gap-[9px] flex">
                  <div className="text-neutral-700 text-sm font-medium">₦{order.price.toLocaleString()} x {order.quantity}</div>
                </div>
                <div className={`px-[15px] py-0.5 rounded-lg justify-start items-center gap-2.5 flex ${order.status === 'Pending' ? 'bg-red-600 bg-opacity-10' : 'bg-green-600 bg-opacity-10'}`}>
                  <div className="text-neutral-500 text-xs font-normal">{order.status}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default OrderSummary