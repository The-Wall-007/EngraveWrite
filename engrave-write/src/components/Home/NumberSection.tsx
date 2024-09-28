import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const NumberSection = () => {
  const numberingSection = [
    {
      id: 1,
      title: "15+",
      subTitle: "Years of experience",
    },
    {
      id: 2,
      title: "175+",
      subTitle: "Web Projects Completed",
    },
    {
      id: 3,
      title: "10+",
      subTitle: "Qualified team",
    },
    {
      id: 4,
      title: "300+",
      subTitle: "Signage Project Completed",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#1db4ff" }}>
      <Grid container>
        {numberingSection.map((item, index) => (
          <Grid key={index} size={{ sm: 12, md: 6, lg: 3 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                height: 180,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "60px",
                  fontWeight: "600",
                  color: "#fff",
                  fontFamily: "rubik",
                  lineHeight: "40px",
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  marginTop: 1,
                  fontSize: "24px",
                  fontWeight: "500",
                  color: "#fff",
                  fontFamily: "rubik",
                  lineHeight: "40px",
                }}
              >
                {item.subTitle}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NumberSection;
