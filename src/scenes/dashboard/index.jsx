// This will contain everything need to be shown
// in the first page
// Im : 3
// begins here after coding the Header.jsx
import { Box } from "@mui/material";
import Header from "../../components/Header";

const Dashboard  = () => {
    return <Box m = "20px">
        <Box display="flex" justifyContent = "space-between" alignItems="center">
        <Header title = "DASHBOARD" subtitle = "Welcome to your dashboard" />
        </Box>

    </Box>;

};

export default Dashboard;