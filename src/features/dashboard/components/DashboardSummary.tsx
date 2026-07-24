import {
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

import type { CompetenceBudgetDto } from "../dto/dashboard.dto";

interface DashboardSummaryProps {
  competence: CompetenceBudgetDto;
}

export function DashboardSummary({
  competence,
}: DashboardSummaryProps) {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 4 }}>
        <Card>
          <CardContent>
            <Typography variant="subtitle2">
              Limite total
            </Typography>

            <Typography variant="h4">
              R$ {competence.totalLimit.toLocaleString("pt-BR")}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <Card>
          <CardContent>
            <Typography variant="subtitle2">
              Saldo disponível
            </Typography>

            <Typography variant="h4">
              R$ {competence.totalBalance.toLocaleString("pt-BR")}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <Card>
          <CardContent>
            <Typography variant="subtitle2">
              Vendedores críticos
            </Typography>

            <Typography variant="h4">
              {competence.criticalSellers}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}