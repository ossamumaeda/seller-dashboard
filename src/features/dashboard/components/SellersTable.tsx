import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,

} from "@mui/material";

import type { SellerBudgetDto } from "../dto/dashboard.dto";

import { HealthChip } from "./HealthChip";

interface SellersTableProps {
  sellers: SellerBudgetDto[];
}

export function SellersTable({
  sellers,
}: SellersTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Vendedor
            </TableCell>

            <TableCell align="right">
              Limite
            </TableCell>

            <TableCell align="right">
              Saldo
            </TableCell>

            <TableCell align="right">
              Utilização
            </TableCell>

            <TableCell>
              Situação
            </TableCell>
          </TableRow>
        </TableHead>


        <TableBody>
          {sellers.map((seller) => (
            <TableRow key={seller.sellerId}>

              <TableCell>
                {seller.sellerName}
              </TableCell>

              <TableCell align="right">
                {formatCurrency(seller.limitAmount)}
              </TableCell>

              <TableCell align="right">
                {formatCurrency(seller.balance)}
              </TableCell>

              <TableCell align="right">
                {seller.usagePercentage}%
              </TableCell>

              <TableCell>
                <HealthChip
                  health={seller.health}
                />
              </TableCell>

            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
}


function formatCurrency(value: number) {
  return value.toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL",
    }
  );
}