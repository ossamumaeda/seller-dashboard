import { useQuery } from "@tanstack/react-query";
import { getDashboardBudget } from "../api/dashboardApi";

export function useDashboard() {
  return useQuery({
    queryKey: ["dashboard-budget"],
    queryFn: getDashboardBudget,
  });
}