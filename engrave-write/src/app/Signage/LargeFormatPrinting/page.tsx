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
    id: 4,
    title: "Large Format Printing",
    description: "At Engrave Write we offer a diverse set of Large Format Printing services that suit our clientele. We print on various types of vinyl and all sizes, leaving no stone unturned and our services are tailored for a budget, purpose, and style of every kind. We produce high-quality large print formats that cover large areas both inside and out.",
    imagesURI: [
      "./assets/images/LargeFormat/1.jpg",
      "./assets/images/LargeFormat/2.jpg",
      "./assets/images/LargeFormat/3.jpg",
      "./assets/images/LargeFormat/4.jpg",
      "./assets/images/LargeFormat/5.jpg",
      "./assets/images/LargeFormat/6.jpg",
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
    Large Formate Printing
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
Engrave Write’s large format printing service caters to businesses needing impactful displays.
Ideal for banners, posters, trade shows, and storefront displays, our high-resolution prints are
vibrant and durable, capturing attention from afar. With fast turnaround times, we make it easy to bring your larger-than-life ideas to life.
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
