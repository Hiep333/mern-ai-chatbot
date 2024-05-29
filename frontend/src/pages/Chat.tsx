import React, { useRef } from 'react';
import { Box, Avatar, Typography, Button, IconButton, } from "@mui/material";
import red from "@mui/material/colors/red";
import { useAuth } from '../context/AuthContext';
import ChatItem from '../components/chat/ChatItem';
import { IoMdSend } from "react-icons/io";

const chatMessages = [
    { role: "assistant", content: "Hello! How can I assist you today?" },
    { role: "user", content: "Can you help me with my homework?" },
    { role: "assistant", content: "Of course! What subject are you working on?" },
    { role: "user", content: "I'm working on a math problem." },
    { role: "assistant", content: "Great! What math problem are you trying to solve?" },
    { role: "user", content: "I'm stuck on solving quadratic equations." },
    { role: "assistant", content: "No problem. Here's a step-by-step guide to solving quadratic equations." },
    { role: "user", content: "Thanks! That was really helpful." },
    { role: "assistant", content: "You're welcome! Do you need help with anything else?" },
    { role: "user", content: "No, that's all for now. Thanks again!" },
    { role: "assistant", content: "You're welcome! Have a great day!" }
];

const Chat = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const auth = useAuth()
    const handleSubmit = async () => {
        console.log(inputRef.current?.value);
    }
    return (<Box sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
    }}
    >
        <Box sx={{
            display: { md: "flex", xs: "none", sm: "none" },
            flex: 0.4,
            flexDirection: "column",
        }}
        >
            <Box sx={{
                display: "flex",
                width: "100%",
                height: "60vh",
                bgcolor: "rgb(17,29,39)",
                borderRadius: 5,
                flexDirection: "column",
                mx: 3,
            }}
            >
                <Avatar sx={{
                    mx: "auto",
                    my: 3,
                    bgcolor: "white",
                    color: "black",
                    fontWeight: 700,
                }}
                >
                    {auth?.user?.name[0]}
                    {auth?.user?.name.split(" ")[1]?.[0]}
                </Avatar>
                <Typography sx={{ mx: "auto", fontFamily: "work sans " }}>
                    You are talking to a ChatBOT
                </Typography>
                <Typography sx={{ mx: "auto", fontFamily: "work sans", my: 4, p: 3 }}>
                    You can ask some questions related to Knowledge, Business, Advices,
                    Education, etc. But avoid sharing personal information
                </Typography>
                <Button

                    sx={{
                        width: "200px",
                        my: "auto",
                        color: "white",
                        fontWeight: "700",
                        borderRadius: 3,
                        mx: "auto",
                        bgcolor: red[300],
                        ":hover": {
                            bgcolor: red.A400,
                        },
                    }}
                >
                    Clear Conversation
                </Button>
            </Box>
        </Box>
        <Box
            sx={{
                display: "flex",
                flex: { md: 0.8, xs: 1, sm: 1 },
                flexDirection: "column",
                px: 3,
            }}
        >
            <Typography
                sx={{
                    fontSize: "40px",
                    color: "white",
                    mb: 2,
                    mx: "auto",
                    fontWeight: "600",
                }}
            >
                Model - GPT 3.5 Turbo
            </Typography>
            <Box
                sx={{
                    width: "100%",
                    height: "60vh",
                    borderRadius: 3,
                    mx: "auto",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "scroll",
                    overflowX: "hidden",
                    overflowY: "auto",
                    scrollBehavior: "smooth",
                }}
            >
                {chatMessages.map((chat, index) => (
                    // @ts-expect-error: Explanation of why the error is being ignored
                    <ChatItem content={chat.content} role={chat.role} key={index} />
                ))}
            </Box>
            <div
                style={{
                    width: "100%",
                    borderRadius: 8,
                    backgroundColor: "rgb(17,27,39)",
                    display: "flex",
                    margin: "auto",
                }}
            >
                {" "}
                <input
                    ref={inputRef}
                    type="text"
                    style={{
                        width: "100%",
                        backgroundColor: "transparent",
                        padding: "30px",
                        border: "none",
                        outline: "none",
                        color: "white",
                        fontSize: "20px",
                    }}
                />
                <IconButton onClick={handleSubmit} sx={{ color: "white", mx: 1 }}>
                    <IoMdSend />
                </IconButton>
            </div>
        </Box>
    </Box>
    );
}

export default Chat;