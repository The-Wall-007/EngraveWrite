"use client";
import React from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import PromiseSection from "../Home/PromiseSection";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};

const data = [
  {
    id: 1,
    title: "Web Design & Development",
    description:
      "Crafting visually stunning and user-friendly websites that not only captivate your audience but also drive results. Our expert designers and developers work closely with you to create a seamless online presence that aligns with your brand identity.",
    imagesURI: [
      "./assets/images/IT/AuTurff.png",
      "./assets/images/IT/Auzzie.png",
      "./assets/images/IT/Buildbourne.png",
      "./assets/images/IT/Heating.png",
      "./assets/images/IT/Oreve.png",
      "./assets/images/IT/Platinum.png",
      "./assets/images/IT/Turff.png",
    ],
  },
  {
    id: 2,
    title: "E-Commerce Development",
    description: "Transform your online sales with our bespoke e-commerce solutions. We build robust, secure, and scalable platforms that provide an exceptional shopping experience, ensuring your customers can easily browse, shop, and checkout.",
    imagesURI: [
      "./assets/images/IT/AuTurff.png",
      "./assets/images/IT/Auzzie.png",
      "./assets/images/IT/Buildbourne.png",
      "./assets/images/IT/Heating.png",
      "./assets/images/IT/Oreve.png",
      "./assets/images/IT/Platinum.png",
      "./assets/images/IT/Turff.png",
],
  },
  {
    id: 3,
    title: "SEO Services",
    description: "Increase your visibility and attract more traffic with our tailored SEO strategies. From keyword research to on-page optimization, we implement techniques that enhance your search engine ranking and drive organic growth.",
    imagesURI: [
      "./assets/images/IT/AuTurff.png",
      "./assets/images/IT/Auzzie.png",
      "./assets/images/IT/Buildbourne.png",
      "./assets/images/IT/Heating.png",
      "./assets/images/IT/Oreve.png",
      "./assets/images/IT/Platinum.png",
      "./assets/images/IT/Turff.png",

    ],
  },
  {
    id: 4,
    title: "Software and Mobile Applications Development",
    description: "Innovate your business processes with our custom software and mobile app solutions. We develop intuitive applications that streamline operations and enhance user engagement, all while ensuring compatibility across devices.",
    imagesURI: [
      "./assets/images/IT/AuTurff.png",
      "./assets/images/IT/Auzzie.png",
      "./assets/images/IT/Buildbourne.png",
      "./assets/images/IT/Heating.png",
      "./assets/images/IT/Oreve.png",
      "./assets/images/IT/Platinum.png",
      "./assets/images/IT/Turff.png",
    ],
  },

  {
    id: 5,
    title: "Social Media Marketing",
    description: "Engage with your audience and build brand loyalty through effective social media strategies. We create compelling content and manage campaigns that resonate with your target market, driving engagement and conversions.",
    imagesURI: [
      "./assets/images/IT/AuTurff.png",
      "./assets/images/IT/Auzzie.png",
      "./assets/images/IT/Buildbourne.png",
      "./assets/images/IT/Heating.png",
      "./assets/images/IT/Oreve.png",
      "./assets/images/IT/Platinum.png",
      "./assets/images/IT/Turff.png",

    ],
  },

  {
    id: 6,
    title: "ERP/CRM Intigration",
    description: "Optimize your business operations with our Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) systems. We tailor these solutions to fit your needs, helping you manage resources and improve customer interactions seamlessly.",
    imagesURI: [
      "./assets/images/IT/AuTurff.png",
      "./assets/images/IT/Auzzie.png",
      "./assets/images/IT/Buildbourne.png",
      "./assets/images/IT/Heating.png",
      "./assets/images/IT/Oreve.png",
      "./assets/images/IT/Platinum.png",
      "./assets/images/IT/Turff.png",

       ],
  },
 
];

const ServicesSection = () => {
  return (
    <Stack
    sx={{
      backgroundColor: "#fff"
    }}
  >
    <Typography
      sx={{
        fontSize: "18px",
        fontWeight: "300",
        color: "#2C2C2C",
        lineHeight: "25px",
        marginTop: "20px",
        fontFamily: "rubik",
        textAlign: "center",
        paddingLeft: {
          xs: 8,
          sm: 12,
          md: 24,
          lg: 36,
        },
        paddingRight: {
          xs: 8,
          sm: 12,
          md: 24,
          lg: 36,
        },
        paddingTop:{
          xs: 4,
          sm: 6,
          md: 8,
          lg: 12,
        }
      }}
    >
      At EngraveWrite, we are committed to helping businesses thrive in the digital age. 
      Our comprehensive range of services—from web design and e-commerce development to SEO, 
      software solutions, and social media marketing—ensures that we can meet your unique needs.
      With a focus on innovation, quality, and client satisfaction, we partner with you to turn your vision into reality. 
      Let us help you navigate the digital landscape and achieve your business goals. Contact us today to start your journey toward success!
    </Typography>

    <Stack
      sx={{
        marginTop: {
          xs: 6,
          sm: 8,
          md: 10,
          lg: 14,
        },
        marginBottom: {
          xs: 6,
          sm: 8,
          md: 10,
          lg: 14,
        },
        gap: 8,
      }}
    >
      {data.slice(0,2).map((item) => (
        <Grid
          key={item.id}
          container
          rowSpacing={1}
          columnSpacing={8}
          sx={{
            backgroundColor: "#e5e5fa",
            marginLeft:{
              xs: 6,
              sm: 9,
              md: 12,
              lg: 18,
            },
            marginRight:{
              xs: 6,
              sm: 9,
              md: 12,
              lg: 18,
            },
            padding: {
              xs: 2,
              sm: 3,
              md: 4,
              lg: 6,
            },
          }}
        >
          {item.id % 2 != 0 ? (
            <>
              <Grid size={{ lg: 6 }}>
                <div className="slide-container">
                  <Slide
                    prevArrow={
                      <IconButton
                        style={{
                          backgroundColor: "#1db4ff",
                          color: "#fff",
                          width: "46px",
                          height: "46px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "absolute",
                          left: "-23px",
                        }}
                      >
                        <ArrowBackIosIcon sx={{ marginLeft: "8px" }} />
                      </IconButton>
                    }
                    nextArrow={
                      <IconButton
                        style={{
                          backgroundColor: "#1db4ff",
                          color: "#fff",
                          width: "46px",
                          height: "46px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "absolute",
                          right: "-23px",
                        }}
                      >
                        <ArrowForwardIosIcon sx={{ marginLeft: "8px" }} />
                      </IconButton>
                    }
                  >
                    {item.imagesURI.map((slideImage, index) => (
                      <div key={index}>
                        <div
                          style={{
                            ...divStyle,
                            backgroundImage: `url(${slideImage})`,
                          }}
                        ></div>
                      </div>
                    ))}
                  </Slide>
                </div>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  flex: 1,
                  alignItems: "left",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                size={{ lg: 6 }}
              >
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "500",
                    color: "#2C2C2C",
                    lineHeight: "54px",
                    fontFamily: "rubik",
                    textAlign: "left",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "300",
                    color: "#2C2C2C",
                    lineHeight: "25px",
                    marginTop: "20px",
                    fontFamily: "rubik",
                    textAlign: "left",
                  }}
                >
                  {item.description}
                </Typography>
              </Grid>
            </>
          ) : (
            <>
              <Grid
                sx={{
                  display: "flex",
                  flex: 1,
                  alignItems: "left",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                size={{ lg: 6 }}
              >
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "500",
                    color: "#2C2C2C",
                    lineHeight: "54px",
                    fontFamily: "rubik",
                    textAlign: "left",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "300",
                    color: "#2C2C2C",
                    lineHeight: "25px",
                    marginTop: "20px",
                    fontFamily: "rubik",
                    textAlign: "left",
                  }}
                >
                  {item.description}
                </Typography>
              </Grid>
              <Grid size={{ lg: 6 }}>
                <div className="slide-container">
                  <Slide
                    prevArrow={
                      <IconButton
                        style={{
                          backgroundColor: "#1db4ff",
                          color: "#fff",
                          width: "46px",
                          height: "46px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "absolute",
                          left: "-23px",
                        }}
                      >
                        <ArrowBackIosIcon sx={{ marginLeft: "8px" }} />
                      </IconButton>
                    }
                    nextArrow={
                      <IconButton
                        style={{
                          backgroundColor: "#1db4ff",
                          color: "#fff",
                          width: "46px",
                          height: "46px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "absolute",
                          right: "-23px",
                        }}
                      >
                        <ArrowForwardIosIcon sx={{ marginLeft: "8px" }} />
                      </IconButton>
                    }
                  >
                    {item.imagesURI.map((slideImage, index) => (
                      <div key={index}>
                        <div
                          style={{
                            ...divStyle,
                            backgroundImage: `url(${slideImage})`,
                          }}
                        ></div>
                      </div>
                    ))}
                  </Slide>
                </div>
              </Grid>
            </>
          )}
        </Grid>
      ))}


{data.slice(2).map((item) => (
        <Grid
          key={item.id}
          container
          rowSpacing={1}
          columnSpacing={8}
          sx={{
            backgroundColor: "#e5e5fa",
            marginLeft:{
              xs: 6,
              sm: 9,
              md: 12,
              lg: 18,
              
            },
            marginRight:{
              xs: 6,
              sm: 9,
              md: 12,
              lg: 18,
            },
            padding: {
              xs: 2,
              sm: 3,
              md: 4,
              lg: 6,
            },
          
          }}
        >
          {item.id % 2 != 0 ? (
            <>
              <Grid size={{ lg: 6 }}>
                <div className="slide-container">
                  <Slide
                    prevArrow={
                      <IconButton
                        style={{
                          backgroundColor: "#1db4ff",
                          color: "#fff",
                          width: "46px",
                          height: "46px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "absolute",
                          left: "-23px",
                        }}
                      >
                        <ArrowBackIosIcon sx={{ marginLeft: "8px" }} />
                      </IconButton>
                    }
                    nextArrow={
                      <IconButton
                        style={{
                          backgroundColor: "#1db4ff",
                          color: "#fff",
                          width: "46px",
                          height: "46px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "absolute",
                          right: "-23px",
                        }}
                      >
                        <ArrowForwardIosIcon sx={{ marginLeft: "8px" }} />
                      </IconButton>
                    }
                  >
                    {item.imagesURI.map((slideImage, index) => (
                      <div key={index}>
                        <div
                          style={{
                            ...divStyle,
                            backgroundImage: `url(${slideImage})`,
                          }}
                        ></div>
                      </div>
                    ))}
                  </Slide>
                </div>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  flex: 1,
                  alignItems: "left",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                size={{ lg: 6 }}
              >
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "500",
                    color: "#2C2C2C",
                    lineHeight: "54px",
                    fontFamily: "rubik",
                    textAlign: "left",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "300",
                    color: "#2C2C2C",
                    lineHeight: "25px",
                    marginTop: "20px",
                    fontFamily: "rubik",
                    textAlign: "left",
                  }}
                >
                  {item.description}
                </Typography>
              </Grid>
            </>
          ) : (
            <>
              <Grid
                sx={{
                  display: "flex",
                  flex: 1,
                  alignItems: "left",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                size={{ lg: 6 }}
              >
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "500",
                    color: "#2C2C2C",
                    lineHeight: "54px",
                    fontFamily: "rubik",
                    textAlign: "left",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "300",
                    color: "#2C2C2C",
                    lineHeight: "25px",
                    marginTop: "20px",
                    fontFamily: "rubik",
                    textAlign: "left",
                  }}
                >
                  {item.description}
                </Typography>
              </Grid>
              <Grid size={{ lg: 6 }}>
                <div className="slide-container">
                  <Slide
                    prevArrow={
                      <IconButton
                        style={{
                          backgroundColor: "#1db4ff",
                          color: "#fff",
                          width: "46px",
                          height: "46px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "absolute",
                          left: "-23px",
                        }}
                      >
                        <ArrowBackIosIcon sx={{ marginLeft: "8px" }} />
                      </IconButton>
                    }
                    nextArrow={
                      <IconButton
                        style={{
                          backgroundColor: "#1db4ff",
                          color: "#fff",
                          width: "46px",
                          height: "46px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "absolute",
                          right: "-23px",
                        }}
                      >
                        <ArrowForwardIosIcon sx={{ marginLeft: "8px" }} />
                      </IconButton>
                    }
                  >
                    {item.imagesURI.map((slideImage, index) => (
                      <div key={index}>
                        <div
                          style={{
                            ...divStyle,
                            backgroundImage: `url(${slideImage})`,
                          }}
                        ></div>
                      </div>
                    ))}
                  </Slide>
                </div>
              </Grid>
            </>
          )}
        </Grid>
      ))}

<PromiseSection />
    </Stack>
  </Stack>
  
  )
}

export default ServicesSection
