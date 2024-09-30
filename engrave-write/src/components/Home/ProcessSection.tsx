import { Button, Divider, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Process = [
  { id: "1", imageUrl: "./assets/EngraveIcons/Process/One.svg" },
  { id: "2", imageUrl: "./assets/EngraveIcons/Process/Two.svg" },
  { id: "3", imageUrl: "./assets/EngraveIcons/Process/Three.svg" },
  { id: "4", imageUrl: "./assets/EngraveIcons/Process/Four.svg" },
];

const ProcessSection = () => {
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
      <Stack
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 4,
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
          How Our Process Functions
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

      <Stack sx={{ flexGrow: 1, display: "flex", marginBottom: 2 }}>
        <Divider
          sx={{
            width: "70%",
            borderBottomWidth: 1,
            position: "absolute",
            marginTop: 7.4,
            alignSelf: "center",
            zIndex: 1,
            color: "#383739",
            borderStyle: "dashed",
          }}
        />

        <Grid container>
          {Process.map((item) => (
            <Grid
              key={item.id} // Use id from the array
              display="flex"
              justifyContent="center"
              alignItems="center"
              size="grow"
              zIndex={1}
            >
              <img src={item.imageUrl} alt={`Icon ${item.id}`} />
            </Grid>
          ))}
        </Grid>
      </Stack>

      <Grid container spacing={12} columns={12}>
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
              fontSize: "40px",
              fontWeight: "500",
              color: "#2C2C2C",
              lineHeight: "54px",
              fontFamily: "rubik",
            }}
          >
            Consultation
          </Typography>

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
            Our process begins with a comprehensive consultation where we take
            the time to understand your specific needs and goals—whether you’re
            looking for custom signage, IT solutions, or both. We collaborate
            with you to identify the best strategies for your brand, ensuring
            that the final product will effectively represent your business and
            meet your expectations.
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

        <Grid
          size={{
            xs: 12,
            sm: 12,
            md: 6,
            lg: 6,
          }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/81bb/b6f6/9a11d7856fd76822c64b6e1c26de012c?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g52uOrmjvhoab9OHlF0wp0FtaWZh0C9MOmP7MDmd2T~P0R1koicPHdy8QCzZ0jj2FYfY7SmOntRNZH9yZ11thyK55RWtBIS9fzOBHJDBfl1ihki01dpBV3oW5a5eticZuUmmlCGg857H4P2ycvT5Ll1Fl5OW7AYaky-KJeuHX6I8F-U1aN~ra3TGDKb8ErZBtE6JwAyTAX54x6MFwQpIbSKGC0lo2~o7GltdonyoaFQK8jJWIUXHTq4beLVz~mSBSc2mX4L7OBKsJaKTnt~sVVnwv0sV~fMpDaeNTxVvXjb55zKhNK2jb38QcUIdlSkL2H0TBt-u1zdqbm-7qBPpxA__"
            alt="Example Image"
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default ProcessSection;
