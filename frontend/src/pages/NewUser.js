import React, { useState } from "react";
import { Button, TextField, Stack } from "@mui/material";
import Header from "../components/header";

export default function NewUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phones, setPhones] = useState([{ number: "", description: "" }]);

  const handleAddPhone = () => {
    setPhones((prevPhones) => [...prevPhones, { number: "", description: "" }]);
  };

  const handleRemovePhone = (index) => {
    const newPhones = [...phones];
    newPhones.splice(index, 1);
    setPhones(newPhones);
  };

  const handlePhoneChange = (event, index) => {
    const newPhones = [...phones];
    const { name, value } = event.target;
    if (name === "number") {
      newPhones[index].number = value;
    } else {
      newPhones[index].description = value;
    }
    setPhones(newPhones);
  };

  const handleAddUser = async () => {};

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

        <Stack spacing={2}>
          {phones && phones.map((phone, index) => (
            <Stack key={index} direction="row" spacing={2}>
              <TextField
                id={index}
                label="Phone Description"
                variant="outlined"
                value={phone.description}
                onChange={(e) => handlePhoneChange(e, index)}
                name="description"
                />
                <TextField
                id={index}
                label="Phone Number"
                variant="outlined"
                value={phone.number}
                onChange={(e) => handlePhoneChange(e, index)}
                name="number"
                />
                <Button
                variant="contained"
                id="removePhoneBtn"
                onClick={() => handleRemovePhone(index)}
                >
                Remove
                </Button>
            </Stack>

            ))}
        </Stack>
        <Button variant="contained" onClick={handleAddPhone}>
          Add Phone
        </Button>
        <Button variant="contained" onClick={handleAddUser}>
          Add User
        </Button>
        </form>
    </>
    );
}
