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
import Grid from "@mui/material/Grid2";
import ContactBoard from "../ContactInfo/ContactBoard";

// Sample FAQ array
const faqs = [
  {
    id: 1,
    question: "Why engrave write is the best Signage, Printing and IT solutions in Australia?",
    answer:
      "Renowned for its dedication to quality and innovation, EngraveWrite is Australia's top supplier of IT,printing, and signage solutions. To make long-lasting and aesthetically pleasing products that are customized to your unique demands, we use high-quality materials and cutting-edge technology. We provide complete support from design to installation to continuing maintenance, all handled by our highly skilled staff. While our customer-centric strategy builds strong relationships and ensures satisfaction, our commitment to sustainable methods guarantees that we operate ethically. For dependable, superior solutions that boost your company, go with EngraveWrite..",
  },
  {
    id: 2,
    question: "Which kinds of signage, Printing and IT solutions are available at EngraveWrite?",
    answer:
      "EngraveWrite offers a wide range of signage and printing solutions, including excavator and construction signage, corporate and shop signs, vehicle graphics, 3D illuminated and non-illuminated options, as well as safety and warning signs. We also provide CNC routing, laser cutting, and engraving services. For IT solutions, our expertise encompasses web design and development, mobile applications, software solutions, e-commerce development, and digital marketing, all aimed at enhancing your business’s visibility and efficiency.",
  },
  {
    id: 3,
    question: "Do you offer installation and ongoing support?",
    answer:
      "Yes, we handle installation for all our signage solutions and provide ongoing support, including maintenance and troubleshooting.",
  },
  {
    id: 4,
    question: "How do I get a quote for services?",
    answer:
      "You can request a personalized quote through our website’s contact form, and we'll respond promptly to discuss your specific requirements.",
  },
  {
    id: 5,
    question: "How can IT solutions, signage, and printing improve my business?",
    answer:
      "Our IT solutions enhance efficiency by streamlining operations, improving communication, and ensuring data security. Additionally, our diverse signage options, such as digital displays and custom signs, can boost visibility and guide customers effectively.",
  },
];

const Brands = [
  {
    id: "1",
    imageUrl: "./assets/EngraveIcons/GoogleLogos/GoogleAnalytic.svg",
  },
  {
    id: "2",
    imageUrl: "./assets/EngraveIcons/GoogleLogos/Semrush.svg",
  },
  {
    id: "3",
    imageUrl: "./assets/EngraveIcons/GoogleLogos/HubSpot.svg",
  },
  {
    id: "4",
    imageUrl: "./assets/EngraveIcons/GoogleLogos/GoogleAds.svg",
  },
  {
    id: "5",
    imageUrl: "./assets/EngraveIcons/GoogleLogos/GooglePartner.svg",
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
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
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
            Frequently Asked Questions
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

                {openId === faq.id ? (
                  <KeyboardArrowUpIcon sx={{ color: "#2c2c2c" }} />
                ) : (
                  <KeyboardArrowDownIcon sx={{ color: "#2c2c2c" }} />
                )}
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

      <Stack sx={{ marginTop: 8, marginBottom: 8 }}>
        <ContactBoard />
      </Stack>

      <Grid
        container
        spacing={{
          xs: 1,
          sm: 1,
          md: 2,
          lg: 2,
        }}
      >
        {Brands.map((item) => (
          <Grid
            key={item.id}
            display="flex"
            justifyContent="center"
            alignItems="center"
            size="grow"
          >
            <img src={item.imageUrl} alt="My Icon" />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default QuestionsSection;
