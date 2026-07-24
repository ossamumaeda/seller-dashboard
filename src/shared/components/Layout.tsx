import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import type { PropsWithChildren } from "react";

export function Layout({
  children,
}: PropsWithChildren) {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Gestão de Verba Promocional
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="main"
        sx={{
          py: 4,
        }}
      >
        {children}
      </Box>
    </>
  );
}