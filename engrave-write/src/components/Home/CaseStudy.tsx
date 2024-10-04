import React from "react";
import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const serviceData = [
  {
    id: 1,
    imagePath: "./assets/EngraveIcons/CaseStudies/AuzzieTurff.svg",
    description1:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore unde velit consequatur in laudantium, doloremque consequuntur beatae tenetur temporibus veritatis et corporis! Quo similique nostrum ex culpa cupiditate, nobis rem.",
    description2:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore unde velit consequatur in laudantium, doloremque consequuntur beatae tenetur temporibus veritatis et corporis! Quo similique nostrum ex culpa cupiditate, nobis rem.",
    description3:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore unde velit consequatur in laudantium, doloremque consequuntur beatae tenetur temporibus veritatis et corporis! Quo similique nostrum ex culpa cupiditate, nobis rem.",
  },
  {
    id: 2,
    imagePath: "./assets/EngraveIcons/CaseStudies/DesserCorner.svg",
    description1:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore unde velit consequatur in laudantium, doloremque consequuntur beatae tenetur temporibus veritatis et corporis! Quo similique nostrum ex culpa cupiditate, nobis rem.",
    description2:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore unde velit consequatur in laudantium, doloremque consequuntur beatae tenetur temporibus veritatis et corporis! Quo similique nostrum ex culpa cupiditate, nobis rem.",
    description3:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore unde velit consequatur in laudantium, doloremque consequuntur beatae tenetur temporibus veritatis et corporis! Quo similique nostrum ex culpa cupiditate, nobis rem.",
  },
  {
    id: 3,
    imagePath: "./assets/EngraveIcons/CaseStudies/PlatinumDeveloper.svg",
    description1:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore unde velit consequatur in laudantium, doloremque consequuntur beatae tenetur temporibus veritatis et corporis! Quo similique nostrum ex culpa cupiditate, nobis rem.",
    description2:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore unde velit consequatur in laudantium, doloremque consequuntur beatae tenetur temporibus veritatis et corporis! Quo similique nostrum ex culpa cupiditate, nobis rem.",
    description3:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore unde velit consequatur in laudantium, doloremque consequuntur beatae tenetur temporibus veritatis et corporis! Quo similique nostrum ex culpa cupiditate, nobis rem.",
  },
  {
    id: 4,
    imagePath: "./assets/EngraveIcons/CaseStudies/Oreva.svg",
    description1:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore unde velit consequatur in laudantium, doloremque consequuntur beatae tenetur temporibus veritatis et corporis! Quo similique nostrum ex culpa cupiditate, nobis rem.",
    description2:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore unde velit consequatur in laudantium, doloremque consequuntur beatae tenetur temporibus veritatis et corporis! Quo similique nostrum ex culpa cupiditate, nobis rem.",
    description3:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore unde velit consequatur in laudantium, doloremque consequuntur beatae tenetur temporibus veritatis et corporis! Quo similique nostrum ex culpa cupiditate, nobis rem.",
  },
  {
    id: 5,
    imagePath: "./assets/EngraveIcons/CaseStudies/KFC.svg",
    description1:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore unde velit consequatur in laudantium, doloremque consequuntur beatae tenetur temporibus veritatis et corporis! Quo similique nostrum ex culpa cupiditate, nobis rem.",
    description2:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore unde velit consequatur in laudantium, doloremque consequuntur beatae tenetur temporibus veritatis et corporis! Quo similique nostrum ex culpa cupiditate, nobis rem.",
    description3:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore unde velit consequatur in laudantium, doloremque consequuntur beatae tenetur temporibus veritatis et corporis! Quo similique nostrum ex culpa cupiditate, nobis rem.",
  },
  {
    id: 6,
    imagePath: "./assets/EngraveIcons/CaseStudies/Buildborne.svg",
    description1:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore unde velit consequatur in laudantium, doloremque consequuntur beatae tenetur temporibus veritatis et corporis! Quo similique nostrum ex culpa cupiditate, nobis rem.",
    description2:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore unde velit consequatur in laudantium, doloremque consequuntur beatae tenetur temporibus veritatis et corporis! Quo similique nostrum ex culpa cupiditate, nobis rem.",
    description3:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore unde velit consequatur in laudantium, doloremque consequuntur beatae tenetur temporibus veritatis et corporis! Quo similique nostrum ex culpa cupiditate, nobis rem.",
  },
];

const CaseStudy = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#fff",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: {
          xs: 4,
          sm: 6,
          md: 8,
          lg: 8,
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
          Case Study
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

      <Grid container sx={{ marginTop: 8 }} spacing={4}>
        {serviceData.map((item) => (
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }} key={item.id}>
            <Card
              sx={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                backgroundColor: "#fff",
                borderRadius: "12px",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    margin: 2,
                  }}
                >
                  <img
                    src={item.imagePath}
                    alt="My Icon"
                    style={{ maxHeight: 52 }}
                  />

                  <Stack
                    sx={{
                      marginTop: 4,
                      height: 2,
                      width: "100%",
                      backgroundColor: "#0E0E2F",
                      borderRadius: 2,
                      marginBottom: 4,
                    }}
                  />

                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Stack
                      sx={{
                        height: 5,
                        width: 5,
                        borderRadius: 5,
                        backgroundColor: "#2C2C2C",
                      }}
                    />

                    <Stack
                      sx={{
                        display: "flex",
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "400",
                          color: "#2C2C2C",
                          lineHeight: "28px",
                          fontFamily: "rubik",
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: "vertical",
                          textAlign: "left",
                        }}
                      >
                        {item.description1}
                      </Typography>
                    </Stack>
                  </Stack>

                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Stack
                      sx={{
                        height: 5,
                        width: 5,
                        borderRadius: 5,
                        backgroundColor: "#2C2C2C",
                      }}
                    />

                    <Stack
                      sx={{
                        display: "flex",
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "400",
                          color: "#2C2C2C",
                          lineHeight: "28px",
                          fontFamily: "rubik",
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: "vertical",
                          textAlign: "left",
                        }}
                      >
                        {item.description2}
                      </Typography>
                    </Stack>
                  </Stack>

                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Stack
                      sx={{
                        height: 5,
                        width: 5,
                        borderRadius: 5,
                        backgroundColor: "#2C2C2C",
                      }}
                    />

                    <Stack
                      sx={{
                        display: "flex",
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "400",
                          color: "#2C2C2C",
                          lineHeight: "28px",
                          fontFamily: "rubik",
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: "vertical",
                          textAlign: "left",
                        }}
                      >
                        {item.description3}
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default CaseStudy;
