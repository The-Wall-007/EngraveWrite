"use client";
import React from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

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
    title: "Excavator & Construction Signage",
    description:
      "At Engrave Write, our highest priority is designing, creating and producing high-visibility, informative, and eye-catching signs, whether it be for an Excavator or Construction Project.",
    imagesURI: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
  },
  {
    id: 2,
    title: "Corporate/Shop & Building Signage",
    description: "Our team skillfully manufactures high-quality 3D signs, reception signs, graphic prints, and window prints, all of which are tailored to give your brand a big boost and help it stand out from the competition",
    imagesURI: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
  },
  {
    id: 3,
    title: "Vehicle Signage",
    description: "Vehicle signage helps in brand recognition, essentially making it free advertisement. We utilise top-notch quality types of vinyl like Avery, Arlon, and 3M as well as cover the installation of vehicle graphics, one-way vision windows, vehicle lettering signs, etc. to help give your vehicles a professional finish.",
    imagesURI: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
  },
  {
    id: 4,
    title: "Large Format Printing",
    description: "At Engrave Write we offer a diverse set of Large Format Printing services that suit our clientele. We print on various types of vinyl and all sizes, leaving no stone unturned and our services are tailored for a budget, purpose, and style of every kind. We produce high-quality large print formats that cover large areas both inside and out.",
    imagesURI: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
  },
  {
    id: 5,
    title: "3D-Illuminated Signage",
    description: "3D signage helps in capturing the attention of your clientele, all of which can make your brand a standout. We specialise in providing Face-lit letters, Edge-lit letters, and Back-Lit (Halo lit) letters. Furthermore, we take care of the entire process from design to installation.",
    imagesURI: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
  },
  {
    id: 6,
    title: "3D Non-Illuminated Signs",
    description: "We’re experts in crafting cost-effective and durable 3D signage that gives your brand that extra “pop”. Our team is skilled in utilizing various materials for colours and thickness like composite panel, acrylic sheets, brass, aluminum, PVC, stainless steel and use the latest in CNC & laser cutting technology to craft 3D letters that are painted with your preferred colours.",
    imagesURI: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
  },
  {
    id: 7,
    title: "Graphic and Website Design",
    description: "At Engrave Write, we work closely with our clients to design unique, alluring graphics, like logos, decals, infographics, and brochures that are sure to inspire confidence in the hearts and minds of their clientele.",
    imagesURI: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
  },
  {
    id: 8,
    title: "Safety & Warning Kit Decals",
    description: "Our team covers the production of high-end safety stickers featured for excavation sites and heavy vehicles. Some of the decals and stickers crafted by us include COVID-19 stickers, reflective signs, and traffic management-issued corflute signs. We’re also experts in creating door, room, and wayfinding signs.",
    imagesURI: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
  },
  {
    id: 9,
    title: "CNC Routing",
    description: "We’re equipped with state-of-the-art CNC machines and technology to produce precise, high-quality top-of-the-line and eye-catching signage solutions.",
    imagesURI: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
  },
  {
    id: 10,
    title: "Laser Cutting and Engraving",
    description: "We offer the latest laser cutting and engraving services that can help you with CNC cutting, fabrication, to turn materials like stainless steel, brass, and acrylic into components you need.",
    imagesURI: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
  },
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
  {
    id: 12,
    title: "General Signage",
    description: "We offer nothing but the best for general signage. Be it billboard signs, corflute signs, PVC banners, synthetic posters, Pull up banners, or A-frames we’ve got you covered. Share with us your ideas and we’ll work round the clock to make your vision a reality.",
    imagesURI: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
  }
];

const ServicesDone = () => {
  return (
    <Stack
    sx={{
      backgroundColor: "#fff",
      paddingLeft: {
        xs: 4,
        sm: 6,
        md: 8,
        lg: 12,
      },
      paddingRight: {
        xs: 4,
        sm: 6,
        md: 8,
        lg: 12,
      },
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
          xs: 4,
          sm: 6,
          md: 16,
          lg: 24,
        },
        paddingRight: {
          xs: 4,
          sm: 6,
          md: 16,
          lg: 24,
        },
        paddingTop:{
          xs: 4,
          sm: 6,
          md: 8,
          lg: 12,
        }
      }}
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only
      five centuries,
    </Typography>

    <Stack
      sx={{
        padding: {
          xs: 2,
          sm: 3,
          md: 4,
          lg: 6,
        },
        marginTop: {
          xs: 4,
          sm: 6,
          md: 8,
          lg: 12,
        },
        marginBottom: {
          xs: 4,
          sm: 6,
          md: 8,
          lg: 12,
        },
        gap: 8,
      }}
    >
      {data.map((item) => (
        <Grid
          key={item.id}
          container
          rowSpacing={1}
          columnSpacing={8}
          sx={{
            backgroundColor: "#e5e5fa",
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
  )
}

export default ServicesDone
