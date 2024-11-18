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
    id: 8,
    title: "Safety & Warning Kit Decals",
    description: "Our team covers the production of high-end safety stickers featured for excavation sites and heavy vehicles. Some of the decals and stickers crafted by us include COVID-19 stickers, reflective signs, and traffic management-issued corflute signs. We’re also experts in creating door, room, and wayfinding signs.",
    imagesURI: [
      "./assets/images/Safety&WarningKit/1.jpg",
      "./assets/images/Safety&WarningKit/2.jpg",
    ],
  }
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
    Safety and Warning Sign
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
Ensure a safe environment with Engrave Write’s safety and warning signage solutions.
We provide a range of signs for construction sites, workplaces, and public spaces, designed to clearly communicate hazards and important information.
Our signs are compliant with safety standards, weather-resistant, and highly visible, making safety a priority.
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

</Stack>
</Stack>
</div>;
};

export default ExcavatorConstruction;
