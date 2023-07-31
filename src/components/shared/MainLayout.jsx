import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
    <div className='flex flex-row bg-green-100 h-screen w-screen overflow-hidden'>
        <aside className="bg-gold-100">
          <Sidebar/>
          </aside>

          <header className='flex-1'>
          <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
          <div className='p-4'>{children}</div>
          </header>
    </div>
    </>
  )
}

export default MainLayout