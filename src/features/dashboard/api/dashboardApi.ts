import { api } from "@/shared/services/api";
import type { DashboardBudgetResponseDto } from "../dto/dashboard.dto";

export async function getDashboardBudget() {
  const response = await api.get<DashboardBudgetResponseDto>(
    "/dashboard/budget"
  );

  return response.data;
}