import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DashboardPage } from "@/features/dashboard/pages/DashboardPage";
import { Layout } from "@/shared/components/Layout";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<DashboardPage />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}