import React from 'react'
import Dashboard from '../../components/DashboardLayout/DashboardLayout'
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout'
import DashboardHome from '../../components/DashboardHome/DashboardHome'

const DashboardHomePage = () => {
  return (
    <DashboardLayout>
      <DashboardHome />
    </DashboardLayout>
  )
}

export default DashboardHomePage