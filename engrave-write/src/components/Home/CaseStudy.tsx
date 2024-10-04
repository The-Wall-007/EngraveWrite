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
      "Developed a clean, intuitive layout that enhances user experience and simplifies navigation for customers",
    description2:
      "Ensured the website is fully responsive, providing an optimal viewing experience across all devices, from desktops to smartphones.",
    description3:
      "Implemented seamless e-commerce functionality, allowing customers to easily browse and purchase turf products online.",
  },
  {
    id: 2,
    imagePath: "./assets/EngraveIcons/CaseStudies/DesserCorner.svg",
    description1:
      "Created a visually stunning design that captures the essence of Dessert Corner, enticing customers with vibrant imagery and engaging layouts.",
    description2:
      "Designed elements that reflect the brand’s personality, enhancing recognition and connection with the target audience.",
    description3:
      "Focused on interactive features that encourage customer interaction, such as a blog section and social media integration.",
  },
  {
    id: 3,
    imagePath: "./assets/EngraveIcons/CaseStudies/PlatinumDeveloper.svg",
    description1:
      "Developed and executed targeted marketing campaigns that effectively reach key demographics and drive engagement.",
    description2:
      " Implemented SEO best practices to improve search engine visibility, resulting in increased website traffic and lead generation.",
    description3:
      "Utilized data analytics tools to track campaign performance, allowing for ongoing optimization and improved results.",
  },
  {
    id: 4,
    imagePath: "./assets/EngraveIcons/CaseStudies/Oreva.svg",
    description1:
      "Developed an all-encompassing digital marketing strategy that includes SEO, social media marketing, and content marketing to enhance brand visibility and engagement.",
    description2:
      "Implemented advanced analytics tools to monitor campaign performance, enabling data-driven decisions and continuous optimization for better results.",
    description3:
      "Created and managed targeted online advertising campaigns that effectively reach specific demographics",
  },
  {
    id: 5,
    imagePath: "./assets/EngraveIcons/CaseStudies/KFC.svg",
    description1:
      "Produced durable and visually striking signage that withstands the elements while effectively communicating brand messaging.",
    description2:
      "Designed and installed signage in high-visibility locations to maximize customer attraction and foot traffic.",
    description3:
      "Ensured all signage aligns with KFC’s branding guidelines, maintaining a cohesive look across all locations.",
  },
  {
    id: 6,
    imagePath: "./assets/EngraveIcons/CaseStudies/Buildborne.svg",
    description1:
      "Developed tailored software solutions that address specific operational needs, enhancing productivity and project management.",
    description2:
      "Provided comprehensive training for staff to ensure smooth adoption and effective use of the new software system.",
    description3:
      "Offered ongoing technical support and updates, ensuring the software remains efficient and up-to-date with evolving business needs.",
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
