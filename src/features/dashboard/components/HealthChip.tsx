import { Chip } from "@mui/material";

import type { SellerHealth } from "../dto/dashboard.dto";

interface HealthChipProps {
  health: SellerHealth;
}

const healthConfig = {
  HEALTHY: {
    label: "Saudável",
    color: "success",
  },
  WARNING: {
    label: "Atenção",
    color: "warning",
  },
  CRITICAL: {
    label: "Crítico",
    color: "error",
  },
} as const;

export function HealthChip({
  health,
}: HealthChipProps) {
  const config = healthConfig[health];

  return (
    <Chip
      label={config.label}
      color={config.color}
      size="small"
    />
  );
}