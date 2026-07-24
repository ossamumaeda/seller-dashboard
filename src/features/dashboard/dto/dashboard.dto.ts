export type SellerHealth =
  | "HEALTHY"
  | "WARNING"
  | "CRITICAL";

export interface SellerBudgetDto {
  sellerId: string;
  sellerName: string;
  limitAmount: number;
  balance: number;
  usagePercentage: number;
  health: SellerHealth;
}

export interface CompetenceBudgetDto {
  competence: string;
  totalLimit: number;
  totalBalance: number;
  usagePercentage: number;
  criticalSellers: number;
  sellers: SellerBudgetDto[];
}

export interface DashboardBudgetResponseDto {
  competences: CompetenceBudgetDto[];
}