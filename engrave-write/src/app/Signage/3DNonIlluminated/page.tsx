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
    id: 6,
    title: "3D Non-Illuminated Signs",
    description: "We’re experts in crafting cost-effective and durable 3D signage that gives your brand that extra “pop”. Our team is skilled in utilizing various materials for colours and thickness like composite panel, acrylic sheets, brass, aluminum, PVC, stainless steel and use the latest in CNC & laser cutting technology to craft 3D letters that are painted with your preferred colours.",
    imagesURI: [
      "./assets/images/3DNonIlluminated/1.jpg",
      "./assets/images/3DNonIlluminated/2.jpg",
      "./assets/images/3DNonIlluminated/3.jpg",
      "./assets/images/3DNonIlluminated/4.jpg",
      "./assets/images/3DNonIlluminated/5.jpg",
      "./assets/images/3DNonIlluminated/6.jpg",
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
    3D-Non Illuminated Signage
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
Our 3D non-illuminated signage provides a bold, professional look that enhances any business environment.
Engrave Write’s high-quality, dimensional signs are crafted from durable materials, adding depth and
sophistication to your brand’s image. Ideal for indoor and outdoor use, our 3D signs ensure your brand stands out with style.
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
