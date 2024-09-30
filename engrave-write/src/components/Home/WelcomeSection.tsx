import { Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const WelcomeSection = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#f0f0f7",
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
      <Grid container spacing={12} columns={12}>
        <Grid
          size={{
            xs: 12,
            sm: 12,
            md: 6,
            lg: 6,
          }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/2f58/4c8b/c7a08a47151504196fca59ff3cb197b6?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SyFiulXNMDS~~eR6qKHKEfIvUxh6qAaeC3ZPF-GERR1Dc5Dyqrg3lb7E~5edbMM4ggfzAOo49Kxz8k9hXV4Qmbj-73QsIi-Gu7xSVaLv9bQDteYivcW~Q7~EAM72mV3B0HZEiUY5qsK-SmNEZ145LgphZxo7nkYuea9VRqCRdkFgFrWwTcd~lkF6Bq5nV4HlSS507RK2XCA6ITFBEnI3V86zAA4c9u5syzlBoqmeF~T5LHDUZEJQ5s5GG8W3avoecgTSTe9y11yNCs96HiradqDCGwdhT26fJYeP1~29KepeEMjiuvBbIBfJ8zzTPMbHzPAX9p7dIYfWzfgZRL~TUw__"
            alt="Example Image"
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            sm: 12,
            md: 6,
            lg: 6,
          }}
        >
          <Typography
            sx={{
              fontSize: "50px",
              fontWeight: "500",
              color: "#2C2C2C",
              lineHeight: "54px",
              fontFamily: "rubik",
            }}
          >
            Welcome to Engrave write
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

          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "300",
              color: "#2C2C2C",
              lineHeight: "25px",
              marginTop: "20px",
              fontFamily: "rubik",
              textAlign: "justify",
            }}
          >
            Engrave Write is a dynamic printing and signage business founded in
            2001 and located in the heart of Dandenong, Melbourne. Since our
            inception, we have been committed to delivering high-quality signage
            and printing solutions that help brands stand out. Initially
            starting with a laser engraving machine, we expanded our
            capabilities by adding a small CNC machine, which allowed us to
            tackle a wider variety of projects. As demand grew, we invested in a
            Large Format Printer to ensure faster turnaround times and
            unparalleled quality. Our continued growth led to the acquisition of
            a new CNC machine, enabling us to efficiently handle larger and more
            diverse projects.
          </Typography>

          <Stack
            sx={{ display: "flex", flexDirection: "row", gap: 4, marginTop: 4 }}
          >
            <Button
              sx={{
                width: 161,
                height: 50,
                backgroundColor: "#00007D",
                borderRadius: 2,
              }}
              variant="contained"
            >
              <Typography
                sx={{
                  fontSize: 20,
                  fontWeight: "400",
                  color: "#fff",
                  fontFamily: "rubik",
                  textTransform: "capitalize",
                }}
              >
                Contact us
              </Typography>
            </Button>

            <Button
              sx={{
                width: 161,
                height: 50,
                backgroundColor: "#00007D",
                borderRadius: 2,
              }}
              variant="contained"
            >
              <Typography
                sx={{
                  fontSize: 20,
                  fontWeight: "400",
                  color: "#fff",
                  fontFamily: "rubik",
                }}
              >
                03 9793 1187
              </Typography>
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default WelcomeSection;
