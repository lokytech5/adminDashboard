import React, { useState } from 'react';
import Sidebar from '@/components/shared/Sidebar'
import Header from '@/components/shared/Header'
const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <div className='flex flex-row bg-[#EEF0FA] h-screen w-screen overflow-hidden'>
        <aside className={`${isSidebarOpen ? '' : 'hidden'} md:block`}>
          <Sidebar />
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