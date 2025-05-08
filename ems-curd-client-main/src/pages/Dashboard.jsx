import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StatsCard from '../components/dashboard/StatsCard';
import GrowthChart from '../components/dashboard/GrowthChart';
import QuickActions from '../components/dashboard/QuickActions';
import DepartmentPieChart from '../components/dashboard/PieChart';
import SkeletonCard from '../components/dashboard/SkeletonCard';
import { fetchTotalNumberOfEmployees } from '../services/EmployeeService';
import { fetchDepartmentDistribution } from '../services/EmployeeService';
import { fetchEmployeeGrowth } from '../services/EmployeeService';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({});
  const [pieData, setPieData] = useState([]);
  const [growthData, setGrowthData] = useState([]);

/*
  useEffect(() => {
    setTimeout(() => {
      // Simulate API response
      setStats({ employees: 24, departments: 5, pendingTasks: 3 });
      setPieData([
        { department: 'HR', count: 4 },
        { department: 'Tech', count: 10 },
        { department: 'Sales', count: 5 },
        { department: 'Support', count: 3 },
        { department: 'Admin', count: 2 }
      ]);
      setLoading(false);
    }, 1000);
  }, []); */
  
  useEffect(() => {
    Promise.all([
      fetchTotalNumberOfEmployees(),
      fetchDepartmentDistribution(),
      fetchEmployeeGrowth()
    ])
      .then(([empRes, deptRes, monthRes]) => {
        setStats({
          employees: empRes.data,
          departments: deptRes.data.length,
          pendingTasks: 3
        });
        setPieData(deptRes.data);
        setGrowthData(monthRes.data);
        console.log("Pie Chart Data:", deptRes.data);
      })
      .catch((error) => console.error("Dashboard error:", error))
      .finally(() => setLoading(false));
  }, []);
  
  
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {loading ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : (
          <>
           <div>
              <Link to="/employees">
                 <StatsCard title="Total Employees" value={stats.employees} color="text-blue-600" />
              </Link>
           </div>  
           <div>
              <Link to="/grouped-by-department">
                  <StatsCard title="Departments" value={stats.departments} color="text-green-600" />
              </Link>
           </div>  
           <div>
              <Link to="/directory">
                  <StatsCard title="View Department Directory" value={stats.pendingTasks} color="text-red-600" />
              </Link>
           </div>
          </>
        )}
      </div>

      {!loading && (
        <>
          {/*     <GrowthChart data={[
            { month: 'Jan', employees: 5 },
            { month: 'Feb', employees: 10 },
            { month: 'Mar', employees: 14 },
            { month: 'Apr', employees: 20 },
            { month: 'May', employees: 24 },
          ]} />*/} 
          <GrowthChart data={growthData} />
          <DepartmentPieChart data={pieData} />
          <QuickActions />
        </>
      )}
    </div>
  );
};

export default Dashboard;
