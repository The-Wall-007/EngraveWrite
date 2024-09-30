import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Brands = [
  {
    id: "1",
    imageUrl: "./assets/EngraveIcons/BrandLogos/Willira.svg",
  },
  {
    id: "2",
    imageUrl: "./assets/EngraveIcons/BrandLogos/AuzzieGroup.svg",
  },
  {
    id: "3",
    imageUrl: "./assets/EngraveIcons/BrandLogos/CygnusEnergy.svg",
  },
  {
    id: "4",
    imageUrl: "./assets/EngraveIcons/BrandLogos/PlatinumDevelopers.svg",
  },
  {
    id: "5",
    imageUrl: "./assets/EngraveIcons/BrandLogos/MannGroup.svg",
  },
  {
    id: "6",
    imageUrl: "./assets/EngraveIcons/BrandLogos/Aqueous.svg",
  },
  {
    id: "7",
    imageUrl: "./assets/EngraveIcons/BrandLogos/Lince.svg",
  },
  {
    id: "8",
    imageUrl: "./assets/EngraveIcons/BrandLogos/DessertCorner.svg",
  },
  {
    id: "9",
    imageUrl: "./assets/EngraveIcons/BrandLogos/TuutBruant.svg",
  },
  {
    id: "10",
    imageUrl: "./assets/EngraveIcons/BrandLogos/CityCircle.svg",
  },
  {
    id: "11",
    imageUrl: "./assets/EngraveIcons/BrandLogos/KFC.svg",
  },
  {
    id: "12",
    imageUrl: "./assets/EngraveIcons/BrandLogos/Salta.svg",
  },
  {
    id: "13",
    imageUrl: "./assets/EngraveIcons/BrandLogos/Nino.svg",
  },
];

const BrandSection = () => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
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
          Brands Who Trust us
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
          paddingTop: {
            xs: 4,
            sm: 6,
            md: 4,
            lg: 12,
          },
          paddingLeft: {
            xs: 1,
            sm: 1,
            md: 2,
            lg: 12,
          },
          paddingRight: {
            xs: 1,
            sm: 1,
            md: 2,
            lg: 12,
          },
        }}
      >
        <Stack>
          <Grid
            container
            spacing={{
              xs: 1,
              sm: 1,
              md: 2,
              lg: 2,
            }}
          >
            {Brands.slice(0, 6).map((item) => (
              <Grid
                key={item.id}
                display="flex"
                justifyContent="center"
                alignItems="center"
                size="grow"
              >
                <img src={item.imageUrl} alt="My Icon" />
              </Grid>
            ))}
          </Grid>
        </Stack>

        <Stack sx={{ height: 60 }} />

        <Stack
          sx={{
            marginLeft: {
              xs: 1,
              sm: 1,
              md: 4,
              lg: 12,
            },
            marginRight: {
              xs: 1,
              sm: 1,
              md: 4,
              lg: 12,
            },
          }}
        >
          <Grid
            container
            spacing={{
              xs: 1,
              sm: 1,
              md: 2,
              lg: 2,
            }}
          >
            {Brands.slice(6).map((item) => (
              <Grid
                key={item.id}
                display="flex"
                justifyContent="center"
                alignItems="center"
                size="grow"
              >
                <img src={item.imageUrl} alt="My Icon" />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default BrandSection;
