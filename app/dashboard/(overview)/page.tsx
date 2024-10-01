import CardWrapper, { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import { lusitana } from '../../ui/font';
import { fetchCardData } from '../../lib/data';
import LatestInvoices from '../../ui/dashboard/latest-invoices';
import { 
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardSkeleton
 } from '@/app/ui/skeletons';
import { Suspense } from 'react';
export default async function Page() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl font-bold`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* <RevenueChart revenue={revenue}  /> */}
          <Suspense fallback={<RevenueChartSkeleton/>}>
            <RevenueChart  />
          </Suspense>
          <Suspense fallback={<LatestInvoicesSkeleton/>}>
            <LatestInvoices  />
          </Suspense>
        
      </div>
    </main>
  );
}