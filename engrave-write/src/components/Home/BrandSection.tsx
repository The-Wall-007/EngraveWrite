import { Stack, Typography } from "@mui/material";

const BrandSection = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: "#fff",
      }}
    >
      <Stack
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Typography
          sx={{
            fontSize: "50px",
            fontWeight: "500",
            color: "#2c2c2c",
            fontFamily: "rubik",
            lineHeight: "40px",
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
    </Stack>
  );
};

export default BrandSection;
