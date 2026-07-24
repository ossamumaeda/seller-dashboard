import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";

import { useDashboard } from "../hooks/useDashboard";
import { DashboardSummary } from "../components/DashboardSummary";
import { SellersTable } from "../components/SellersTable";

export function DashboardPage() {
  const {
    data,
    isLoading,
    error,
  } = useDashboard();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Alert severity="error">
        Erro ao carregar dashboard.
      </Alert>
    );
  }

  const competence = data?.competences[0];

  if (!competence) {
    return (
      <Alert severity="warning">
        Nenhuma competência encontrada.
      </Alert>
    );
  }

  return (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        component="h1"
        sx={{ mb: 4 }}
      >
        Dashboard de Verba Promocional
      </Typography>

      <DashboardSummary
        competence={competence}
      />

      <Box sx={{ mt: 4 }}>
        <SellersTable
          sellers={competence.sellers}
        />
      </Box>
    </Container>
  );
}