import React from "react";
import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import IntroductionSection from "@/components/Home/IntroductionSection";

const Results = () => {
  return (
    <React.Fragment>
      <IntroductionSection />

      <Stack
        sx={{
          // height: "160vh", // Full height of the viewport
          position: "relative",
          paddingTop: 8,
        }}
      >
        <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
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
            Web Design
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

        <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
          <Stack
            component="img"
            src={"./assets/EngraveIcons/Laptop.png"}
            alt="Overlay"
            sx={{
              width: "75%",
              height: {
                sm: "50vh",
                md: "60vh",
                lg: "80vh",
              },
              marginTop: 8,
              pointerEvents: "none",
              zIndex: 1, // Ensure the image is below the title
            }}
          />
        </Stack>

        <Stack
          direction="row"
          spacing={8} // Space between the two sections
          sx={{
            display: "flex",
            flex: 1,
            justifyContent: "center", // Center the content
            alignItems: "center",
            zIndex: 1, // Ensure the image is below the title
            paddingTop: 8,
            paddingBottom: 8,
            marginLeft: {
              sm: 2,
              md: 2,
              lg: 20,
            },
            marginRight: {
              sm: 2,
              md: 2,
              lg: 20,
            },
          }}
        >
          {/* Project Outline Section */}
          <Stack sx={{ flex: 0.7 }}>
            <Typography variant="h4" gutterBottom sx={{ color: "white" }}>
              Project Outline
            </Typography>
            <Typography variant="body1" sx={{ color: "white" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </Typography>
          </Stack>

          {/* Key Inclusions Section */}
          <Stack sx={{ flex: 0.3 }}>
            <Typography variant="h4" gutterBottom sx={{ color: "white" }}>
              Key Inclusions
            </Typography>
            <Typography variant="body1" sx={{ color: "white" }}>
              Lorem Ipsum is simply
              <br />
              Lorem Ipsum is simply
              <br />
              Lorem Ipsum is simply
              <br />
              Lorem Ipsum is simply
              <br />
              Lorem Ipsum is simply
              <br />
              Lorem Ipsum is simply
            </Typography>
          </Stack>
        </Stack>

        <Stack
          sx={{
            position: "absolute",
            height: {
              sm: "75vh",
              md: "85vh",
              lg: "100vh",
            },
            width: "100%",
            backgroundColor: "#2c2c2c",
            bottom: 0,
          }}
        ></Stack>
      </Stack>

      <Stack
        sx={{
          // height: "160vh", // Full height of the viewport
          position: "relative",
          paddingTop: 8,
        }}
      >
        <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
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
            Improve Mobile User Experience
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

          <Grid
            container
            spacing={6}
            sx={{ marginBottom: 8, justifyContent: "center" }}
          >
            {/* Image 1 */}
            {/**@ts-ignore */}
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Stack
                component="img"
                src={"./assets/EngraveIcons/Iphone13.png"} // Replace with your image path
                alt="Overlay"
                sx={{
                  width: "100%",
                  height: "auto", // Maintains aspect ratio
                  marginTop: 8,
                  pointerEvents: "none",
                  zIndex: 1,
                }}
              />
            </Grid>
            {/* Image 2 */}
            {/**@ts-ignore */}
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Stack
                component="img"
                src={"./assets/EngraveIcons/Iphone13.png"} // Replace with your second image path
                alt="Overlay"
                sx={{
                  width: "100%",
                  height: "auto",
                  marginTop: 8,
                  pointerEvents: "none",
                  zIndex: 1,
                }}
              />
            </Grid>
            {/* Image 3 */}
            {/**@ts-ignore */}
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Stack
                component="img"
                src={"./assets/EngraveIcons/Iphone13.png"} // Replace with your third image path
                alt="Overlay"
                sx={{
                  width: "100%",
                  height: "auto",
                  marginTop: 8,
                  pointerEvents: "none",
                  zIndex: 1,
                }}
              />
            </Grid>
          </Grid>
        </Stack>
      </Stack>

      <Stack
        sx={{
          // height: "160vh", // Full height of the viewport
          position: "relative",
          paddingTop: 8,
          paddingBottom: 8,
        }}
      >
        <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
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
            SEO
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

          <Stack
            sx={{
              display: "flex",
              flex: 1,
              flexDirection: "row",
              marginTop: 4,
              marginBottom: 4,
              gap: 8,
              paddingLeft: 4,
              paddingRight: 4,
            }}
          >
            <Stack
              sx={{
                display: "flex",
                flex: 0.25,
                alignItems: "flex-end",
              }}
            >
              <Stack sx={{ alignItems: "flex-start" }}>
                <Typography
                  sx={{
                    fontSize: "40px",
                    fontWeight: "500",
                    color: "#2C2C2C",
                    lineHeight: "54px",
                    fontFamily: "rubik",
                    textAlign: "center",
                  }}
                >
                  Challenge:
                </Typography>
                <Stack
                  sx={{
                    marginTop: 0.5,
                    height: 8,
                    width: 80,
                    backgroundColor: "#FF3B99",
                    borderRadius: 2,
                  }}
                />
              </Stack>
            </Stack>

            <Stack sx={{ display: "flex", flex: 0.75 }}>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                repudiandae aut, nisi eum, quos iste, numquam architecto quia
                necessitatibus repellat sit. Ut, corporis in qui debitis
                voluptates deserunt autem error.
              </Typography>
            </Stack>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              flex: 1,
              flexDirection: "row",
              marginTop: 4,
              marginBottom: 4,
              gap: 8,
              paddingLeft: 4,
              paddingRight: 4,
            }}
          >
            <Stack
              sx={{
                display: "flex",
                flex: 0.25,
                alignItems: "flex-end",
              }}
            >
              <Stack sx={{ alignItems: "flex-start" }}>
                <Typography
                  sx={{
                    fontSize: "40px",
                    fontWeight: "500",
                    color: "#2C2C2C",
                    lineHeight: "54px",
                    fontFamily: "rubik",
                    textAlign: "center",
                  }}
                >
                  Act:
                </Typography>
                <Stack
                  sx={{
                    marginTop: 0.5,
                    height: 8,
                    width: 80,
                    backgroundColor: "#FF3B99",
                    borderRadius: 2,
                  }}
                />
              </Stack>
            </Stack>

            <Stack sx={{ display: "flex", flex: 0.75, flexDirection: "row" }}>
              <Stack sx={{ display: "flex", flex: 1 }}>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  alias delectus reiciendis maiores similique, adipisci aliquid.
                  Sunt inventore aliquid placeat necessitatibus reprehenderit,
                  veritatis quaerat! Natus laboriosam laborum consectetur
                  repellendus! Velit.
                </Typography>
              </Stack>
              <Stack sx={{ display: "flex", flex: 1 }}>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  alias delectus reiciendis maiores similique, adipisci aliquid.
                  Sunt inventore aliquid placeat necessitatibus reprehenderit,
                  veritatis quaerat! Natus laboriosam laborum consectetur
                  repellendus! Velit.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              flex: 1,
              flexDirection: "row",
              marginTop: 4,
              marginBottom: 4,
              gap: 8,
              paddingLeft: 4,
              paddingRight: 4,
            }}
          >
            <Stack
              sx={{
                display: "flex",
                flex: 0.25,
                alignItems: "flex-end",
              }}
            >
              <Stack sx={{ alignItems: "flex-start" }}>
                <Typography
                  sx={{
                    fontSize: "40px",
                    fontWeight: "500",
                    color: "#2C2C2C",
                    lineHeight: "54px",
                    fontFamily: "rubik",
                    textAlign: "center",
                  }}
                >
                  Result:
                </Typography>
                <Stack
                  sx={{
                    marginTop: 0.5,
                    height: 8,
                    width: 80,
                    backgroundColor: "#FF3B99",
                    borderRadius: 2,
                  }}
                />
              </Stack>
            </Stack>

            <Stack sx={{ display: "flex", flex: 0.75 }}>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                repudiandae aut, nisi eum, quos iste, numquam architecto quia
                necessitatibus repellat sit. Ut, corporis in qui debitis
                voluptates deserunt autem error.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </React.Fragment>
  );
};

export default Results;
