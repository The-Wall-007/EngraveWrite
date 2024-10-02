import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const PromisesData = [
  {
    id: 1,
    imagePath: "./assets/EngraveIcons/Promises/one.svg",
    description: "Authenticity in Quality,Across Digital and Physical Spaces",
    navigateTo: "",
  },
  {
    id: 2,
    imagePath: "./assets/EngraveIcons/Promises/two.svg",
    description: "The Allure of Signage, the Power of IT Solution",
    navigateTo: "",
  },
  {
    id: 3,
    imagePath: "./assets/EngraveIcons/Promises/three.svg",
    description: "Signage and IT Services That Leave a Lasting Impression",
    navigateTo: "",
  },
  {
    id: 4,
    imagePath: "./assets/EngraveIcons/Promises/four.svg",
    description: "Putting Your Needs First, from Signage to IT Excellence",
    navigateTo: "",
  },
];

const PromiseSection = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#2C2C2C",
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
            color: "#fff",
            lineHeight: "54px",
            fontFamily: "rubik",
            textAlign: "center",
          }}
        >
          Our Promise to You
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

      <Stack
        sx={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: {
            md: 4,
            sm: 4,
            xs: 4,
            lg: 4,
          },
        }}
      >
        <Grid container spacing={2}>
          {PromisesData.map((item) => (
            <Grid size={{ xs: 6, sm: 6, md: 6, lg: 3 }} key={item.id}>
              <Card
                key={item.id}
                sx={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "#fff",
                  borderRadius: 0,
                  height: "300px",
                  borderBottomWidth: 5,
                  borderColor: "#1DB4FF",
                  padding: 1,
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
                      width="80"
                      height="80"
                    />

                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "400",
                        color: "#2C2C2C",
                        lineHeight: "28px",
                        fontFamily: "rubik",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 5,
                        WebkitBoxOrient: "vertical",
                        marginTop: 4,
                        marginBottom: 2,
                        textAlign: "center",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
};

export default PromiseSection;
