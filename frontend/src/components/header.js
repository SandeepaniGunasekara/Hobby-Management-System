import { Button } from "@mui/material";

export default function Header({title}) {

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    }

    return (
        <header id="header">
            <h1>{title}</h1>
            <Button variant="contained" onClick={handleLogout}>Logout</Button>
        </header>
    );
}