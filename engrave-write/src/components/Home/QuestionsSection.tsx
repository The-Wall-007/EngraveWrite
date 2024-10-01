"use client";
import React, { useState } from "react";
import {
  Collapse,
  Stack,
  Typography,
  IconButton,
  ButtonBase,
  Card,
  CardContent,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Sample FAQ array
const faqs = [
  {
    id: 1,
    question: "What is your return policy?",
    answer:
      "We accept returns within 30 days of purchase. The item must be unused and in its original packaging.",
  },
  {
    id: 2,
    question: "How long does shipping take?",
    answer:
      "Shipping usually takes 5-7 business days, depending on your location. Expedited shipping is also available.",
  },
  {
    id: 3,
    question: "Do you offer customer support?",
    answer:
      "Yes, we offer 24/7 customer support via email, phone, and live chat.",
  },
  {
    id: 4,
    question: "Can I track my order?",
    answer:
      "Yes, once your order is shipped, you will receive a tracking number via email to track your package.",
  },
  {
    id: 5,
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards, PayPal, and other secure payment options.",
  },
];

const QuestionsSection = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <Stack
      sx={{
        backgroundColor: "#fff",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        padding: {
          xs: 4,
          sm: 6,
          md: 8,
          lg: 8,
        },
      }}
    >
      <Card
        sx={{
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Add shadow here
          borderRadius: 2,
          marginBottom: 2,
          padding: {
            sx: 2,
            sm: 2,
            md: 4,
            lg: 10,
          },
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: "50px",
              fontWeight: "500",
              color: "#2C2C2C",
              lineHeight: "54px",
              fontFamily: "rubik",
              textAlign: "center",
            }}
          >
            Engrave write can help you with
          </Typography>

          <Stack
            sx={{
              marginTop: 2.5,
              height: 8,
              width: 96,
              backgroundColor: "#FF3B99",
              borderRadius: 2,
            }}
          />
        </Stack>

        <CardContent>
          {faqs.map((faq) => (
            <Stack
              key={faq.id}
              sx={{
                paddingTop: 2,
                paddingBottom: 2,
                borderTopWidth: faq.id == 1 ? 0 : 1,
                borderColor: "#2C2C2C",
                marginBottom: 2,
              }}
            >
              <ButtonBase
                onClick={() => handleToggle(faq.id)}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: "700",
                    color: "#2C2C2C",
                    lineHeight: "30px",
                    fontFamily: "rubik",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                    textAlign: "left",
                    whiteSpace: "pre-line",
                  }}
                >
                  {faq.question}
                </Typography>

                <IconButton onClick={() => handleToggle(faq.id)}>
                  {openId === faq.id ? (
                    <KeyboardArrowUpIcon sx={{ color: "#2c2c2c" }} />
                  ) : (
                    <KeyboardArrowDownIcon sx={{ color: "#2c2c2c" }} />
                  )}
                </IconButton>
              </ButtonBase>

              <Collapse in={openId === faq.id}>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "300",
                    color: "#2C2C2C",
                    lineHeight: "28px",
                    fontFamily: "rubik",
                    textAlign: "left",
                    marginTop: 2,
                  }}
                >
                  {faq.answer}
                </Typography>
              </Collapse>
            </Stack>
          ))}
        </CardContent>
      </Card>
    </Stack>
  );
};

export default QuestionsSection;
