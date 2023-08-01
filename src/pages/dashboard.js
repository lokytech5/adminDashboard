import DashboardSummary from '@/components/DashboardSummary'
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'
import React from 'react'
import BarCharts from '@/components/charts/BarCharts'
import OrderSummary from '@/components/OrderSummary'
import ChartsCard from '@/components/charts/ChartsCard'
import ProductSummary from '@/components/ProductSummary'
import DashboardCartSummary from '@/components/DashboardCartSummary'
import DashboardOrderSummary from '@/components/DashboardOrderSummary'
import { HiOutlineFolder, HiShoppingCart } from 'react-icons/hi'

const dashboard = () => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 h-screen overflow-y-auto'>
            <DashboardSummary
                icon={<IoBagHandle />}
                title="Sales"
                amount="$400000"
                volume="450"
                percentage="+20.00%"
            />
            <DashboardSummary
                icon={<IoBagHandle />}
                title="Sales"
                amount="$400000"
                volume="450"
                percentage="+20.00%"
            />
            <DashboardOrderSummary
                icon={<IoBagHandle />}
                title="Sales"
                amount="$400000"
                volume="450"
                percentage="+20.00%"
            />

            <div className="md:col-span-1 gap-4 h-80">
                <BarCharts />
            </div>

            <div className="md:col-span-1 grid md:grid-rows-2 gap-20 h-64">
                <div className="mb-[-65px]">
                    <ProductSummary 
                        icon={<HiOutlineFolder />}
                    allProducts="all products"
                    activeProducts="active"
                    percentage="+24%" />
                </div>
                <DashboardCartSummary
                icon={<HiShoppingCart size="100px"/>} />
            </div>

            <div className="md:col-span-1 h-full">
                <OrderSummary />
            </div>

            <div className="md:col-span-2 md:mt-[-300px]">
                <ChartsCard className="mt-auto" />
            </div>
        </div>
    )
}

export default dashboard