import { Header } from '@/components/Header'
import React from 'react'

const DashboardLayout = ({children}) => {

  return (
    <div>
        <Header/>
        <main>
            {children}
        </main>
    </div>
  )
}

export default DashboardLayout