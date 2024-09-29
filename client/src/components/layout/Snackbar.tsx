import React, { FC } from "react";
import { Snackbar, Alert, AlertProps } from "@mui/material";

interface SnackbarNotificationProps {
    message: string;
    severity: AlertProps['severity'];
    open: boolean;
    handleClose: () => void;
}

const SnackbarNotification: FC<SnackbarNotificationProps> = ({ message, severity, open, handleClose }) => {
    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default SnackbarNotification;
