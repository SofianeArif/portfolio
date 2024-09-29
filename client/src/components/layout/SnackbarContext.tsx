import React, { createContext, useContext, useState, ReactNode } from "react";
import { Snackbar, Alert } from "@mui/material";

type SnackbarContextType = {
    showSnackbar: (message: string, severity?: "success" | "error" | "warning" | "info") => void;
};

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

export const useSnackbar = () => {
    const context = useContext(SnackbarContext);
    if (!context) {
        throw new Error("useSnackbar doit être utilisé dans un SnackbarProvider");
    }
    return context;
};

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
    const [snackbarState, setSnackbarState] = useState<{ message: string; severity: "success" | "error" | "warning" | "info"; open: boolean }>({
        message: "",
        severity: "info",
        open: false,
    });

    const showSnackbar = (message: string, severity: "success" | "error" | "warning" | "info" = "info") => {
        setSnackbarState({ message, severity, open: true });
    };

    const handleClose = () => {
        setSnackbarState({ ...snackbarState, open: false });
    };

    return (
        <SnackbarContext.Provider value={{ showSnackbar }}>
            {children}
            <Snackbar open={snackbarState.open} autoHideDuration={2500} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                <Alert onClose={handleClose} severity={snackbarState.severity} sx={{ width: "100%", zIndex: 999 }} variant="filled">
                    {snackbarState.message}
                </Alert>
            </Snackbar>
        </SnackbarContext.Provider>
    );
};
