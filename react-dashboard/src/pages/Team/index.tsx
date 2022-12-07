import { Box, Button, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Field } from "formik";
import Header from "../../components/Header";
import { mockDataTeam } from "../../data/data";
import { tokens } from "../../styles/theme";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column-cell",
    },
    { field: "email", headerName: "Email" },
    { field: "age", headerName: "Age", type: "number" },
    { field: "phone", headerName: "Phone", flex: 1 },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Button
            variant="contained"
            color={access == "admin" ? "success" : "error"}
          >
            {access}
          </Button>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="Team" subtitle="Manage Team Member" />
      <Box m="40px 0 0 0" height="75vh">
        <DataGrid rows={mockDataTeam} columns={columns}></DataGrid>
      </Box>
    </Box>
  );
};

export default Team;
