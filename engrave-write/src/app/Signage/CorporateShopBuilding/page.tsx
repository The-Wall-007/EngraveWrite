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
    id: 2,
    title: "Corporate/Shop & Building Signage",
    description: "Our team skillfully manufactures high-quality 3D signs, reception signs, graphic prints, and window prints, all of which are tailored to give your brand a big boost and help it stand out from the competition",
    imagesURI: [
      "./assets/images/CorporateShop/1.jpg",
      "./assets/images/CorporateShop/2.jpg",
      "./assets/images/CorporateShop/3.jpg",
      "./assets/images/CorporateShop/4.jpg",
      "./assets/images/CorporateShop/5.jpg",
      "./assets/images/CorporateShop/6.jpg",
      "./assets/images/CorporateShop/7.jpg",
      "./assets/images/CorporateShop/8.jpg",
      "./assets/images/CorporateShop/9.jpg",
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
    Corporate/Shop & Building Signage
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
Make a powerful first impression with Engrave Write’s corporate shop and building signage. Our custom designs help businesses stand out,
combining high-quality materials with sharp, professional finishes. From entrance signs to branded interior displays,
we deliver cohesive signage solutions that reflect your brand identity and attract clientele.
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
