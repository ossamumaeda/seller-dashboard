import {
  Alert,
  CircularProgress,
  Typography
} from "@mui/material";

import { useDashboard } from "../hooks/useDashboard";

export function DashboardPage() {

  const { data, isLoading, error } = useDashboard();

  if (isLoading)
    return <CircularProgress />;

  if (error)
    return (
      <Alert severity="error">
        Erro ao carregar dashboard.
      </Alert>
    );

  return (
    <>
      <Typography variant="h4">
        Dashboard
      </Typography>

      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </>
  );
}