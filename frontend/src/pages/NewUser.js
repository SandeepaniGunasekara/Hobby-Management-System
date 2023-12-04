import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Header from "../components/header";

export default function NewUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phones, setPhones] = useState([]);
    
    const handleAddUser = async () => {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        body: JSON.stringify({ name, email, address }),
        });
        if (response.ok) {
        window.location.href = "/users";
        }
    };
    
    return (
        <>
        <Header title="Add New User" />
        <form id="newUserForm">
            <TextField
            id="name"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <TextField
            id="email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
            id="address"
            label="Address"
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            />
            <Button variant="contained" onClick={handleAddUser}>
            Add User
            </Button>
        </form>
        </>
    );
    }