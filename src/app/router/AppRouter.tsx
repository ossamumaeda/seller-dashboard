import { BrowserRouter, Routes, Route } from "react-router-dom";

function DashboardPage() {
  return <h1>Dashboard</h1>;
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}