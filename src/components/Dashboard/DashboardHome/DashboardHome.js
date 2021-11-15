import React from "react";

import useAuth from "../../../hooks/useAuth";

const DashboardHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>Welcome to Dashboard</h2>
      <h1>Name: {user.displayName}</h1>
      <h1>Name: {user.email}</h1>
    </div>
  );
};

export default DashboardHome;
