import React from 'react';
import AdminHeader from './AdminTop';
import StatsCard from './AdminSecond';
import Metrics from './AdminMetrics';
import TransactionChart from './AdminTransaction';
const  Admin = () => {
    return (
        <div className="w-full min-h-screen  bg-red-300 flex justify-center md:items-center">
          <div className="md:rounded-[24px] bg-white relative pt-10 flex flex-col gap-y-2 w-full  px-4 md:w-[390px]  justify-start md:rounded-tl-[32px] items-center ">
             <AdminHeader />
              <StatsCard />
              <Metrics />
              <TransactionChart />
          </div>
        </div>
    );
};

export default  Admin;