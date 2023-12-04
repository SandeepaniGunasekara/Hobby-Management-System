import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Header from "../components/header";

const columns = [
  { id: "id", label: "ID" },
  { id: "name", label: "Name" },
  { id: "email", label: "Email" },
  { id: "address", label: "Address" },
];

export default function Users() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      address: "1234 Main St",
    },
  ];

  return (
    <>
      <Header title='Users'/>
      <Table id="userTable">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell>{row[column.id]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
