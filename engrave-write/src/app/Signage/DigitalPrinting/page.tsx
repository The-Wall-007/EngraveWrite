"use client";
import React from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const data = [
  {
    id: 11,
    title: "Digital Printing",
    description: "Our firm offers a myriad of digital printing services such as business cards, flyers brochures, invoice books, car service sticker labels, and fridge magnets, that can add to your brand awareness, giving it a sleek and professional look.",
    imagesURI: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
  },
];

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};

const ExcavatorConstruction = () => {
  return <div>
  <Stack
sx={{
  backgroundColor: "#EBEBF5",
  padding: {
    xs: 4,
    sm: 6,
    md: 8,
    lg: 12,
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
    Digital Printing
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
</Stack>

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
In today’s digital landscape, your website is often the first interaction potential customers have with your brand.
At EngraveWrite, we understand the importance of making a great first impression.
Our Web Design & Development services are designed to create visually appealing, highly functional,
and user-friendly websites that resonate with your target audience.
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

Consultation & Planning: 
We begin with a thorough consultation to understand your business goals, target audience, and unique requirements.
This foundational step allows us to craft a tailored strategy that aligns with your vision.

<br /><br /><br />
User-Centric Design: 
Our design philosophy revolves around the user experience (UX). We focus on creating intuitive navigation, engaging layouts,
and responsive designs that adapt seamlessly to any device, ensuring a pleasant browsing experience for your visitors.

<br /><br /><br />
Custom Development: 
We leverage the latest technologies and frameworks to build robust websites tailored to your needs. Whether you require a simple informational
site or a complex web application, our skilled developers ensure high performance, security, and scalability.

<br /><br /><br />
Content Management Systems (CMS):
We offer integration with popular CMS platforms like WordPress, Joomla, or custom solutions, empowering you to
manage your content easily without requiring technical expertise.

<br /><br /><br />
Ongoing Support & Maintenance
Our relationship doesn’t end at launch. We provide ongoing support and maintenance services to ensure you
website remains up-to-date, secure, and functioning smoothly as your business evolves.


</Typography>


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

</Stack>
</Stack>
</div>;
};

export default ExcavatorConstruction;
