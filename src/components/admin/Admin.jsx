import React from 'react';
import AdminHeader from './AdminTop';
import StatsCard from './AdminSecond';
import Metrics from './AdminMetrics';
import TransactionChart from './AdminTransaction';
import MoneyStats from './AdminMoney';
import DashBoardFooter from '../dashboard/DashboardFooter';
const  Admin = () => {
    return (
        <div className="w-full min-h-screen py-16  bg-red-300 flex justify-center items-center">
          <div className="md:rounded-[24px]  pb-32 bg-white relative pt-10 flex flex-col gap-y-2 w-full  px-4 md:w-[390px]  justify-start md:rounded-tl-[32px] items-center ">
             <AdminHeader />
              <StatsCard />
              <Metrics />
              <TransactionChart />
              <MoneyStats />
              <DashBoardFooter />
          </div>
        </div>
    );
};

export default  Admin;