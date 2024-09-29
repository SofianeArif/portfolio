import React from "react";
import { Box, Typography, Modal } from "@mui/material";

const SkillModal = ({ skill, open, handleClose } : any) => (
    <Modal open={open} onClose={handleClose} >
        <Box sx={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '80%', height: '80%', bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: 2
        }}>
            <Typography variant="h6" component="h2">
                {skill.title}
            </Typography>
            <Typography sx={{ mt: 2 }}>{skill.description}</Typography>
            <Typography sx={{ mt: 2 }} variant="subtitle1">
                SubSkills:
            </Typography>
            <ul>
                {skill.subSkills.map((subSkill : any, index : number) => (
                    <li key={index}>{subSkill}</li>
                ))}
            </ul>
        </Box>
    </Modal>
);

export default SkillModal;
