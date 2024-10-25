import { Box, Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const services = [
  { id: 1, title: "Web Design" },
  { id: 2, title: "Web Development" },
  { id: 3, title: "Signage Solution" },
  { id: 4, title: "Graphics Design" },
  { id: 5, title: "E-Commerce Development" },
  { id: 6, title: "Digital Marketing" },
  { id: 7, title: "Software Solution" },
  { id: 8, title: "CRM Integration" },
];

const ContactBoard1 = () => {
  return (
    <Box sx={{ backgroundColor: "#00007D", padding: "40px" }}>
      <Grid container spacing={4}>
        <Grid
          sx={{
            height: "468px",
            backgroundColor: "#fff",
            width: "100%",
            display: "flex",
            flex: 1,
            flexDirection: "column",
            padding: 4,
            gap: 2,
          }}
          size={{ xs: 12, lg: 6 }}
        >
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            slotProps={{
              input: {
                sx: {
                  fontSize: 20,
                  fontWeight: 400,
                  color: "#2C2C2C",
                  fontFamily: "rubik",
                },
              },
              inputLabel: {
                sx: {
                  fontSize: 20,
                  fontWeight: 400,
                  fontFamily: "rubik",
                  color: "#2C2C2C",
                },
              },
            }}
          />

          <TextField
            id="standard-basic"
            label="Company Name"
            variant="standard"
            slotProps={{
              input: {
                sx: {
                  fontSize: 20,
                  fontWeight: 400,
                  color: "#2C2C2C",
                  fontFamily: "rubik",
                },
              },
              inputLabel: {
                sx: {
                  fontSize: 20,
                  fontWeight: 400,
                  fontFamily: "rubik",
                  color: "#2C2C2C",
                },
              },
            }}
          />

          <TextField
            id="standard-basic"
            label="Phone Number"
            variant="standard"
            slotProps={{
              input: {
                sx: {
                  fontSize: 20,
                  fontWeight: 400,
                  color: "#2C2C2C",
                  fontFamily: "rubik",
                },
              },
              inputLabel: {
                sx: {
                  fontSize: 20,
                  fontWeight: 400,
                  fontFamily: "rubik",
                  color: "#2C2C2C",
                },
              },
            }}
          />

          <TextField
            id="standard-basic"
            label="Email Address"
            variant="standard"
            slotProps={{
              input: {
                sx: {
                  fontSize: 20,
                  fontWeight: 400,
                  color: "#2C2C2C",
                  fontFamily: "rubik",
                },
              },
              inputLabel: {
                sx: {
                  fontSize: 20,
                  fontWeight: 400,
                  fontFamily: "rubik",
                  color: "#2C2C2C",
                },
              },
            }}
          />

<FormControl variant="standard">
            <InputLabel
              id="demo-simple-select-standard-label"
              sx={{
                fontSize: 20,
                fontWeight: 400,
                color: "#2C2C2C",
                fontFamily: "rubik",
              }}
            >
              Services
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="Age"
              slotProps={{
                input: {
                  sx: {
                    fontSize: 20,
                    fontWeight: 400,
                    color: "#2C2C2C",
                    fontFamily: "rubik",
                  },
                },
              }}
            >
              <MenuItem
                sx={{
                  fontSize: 20,
                  fontWeight: 400,
                  color: "#2C2C2C",
                  fontFamily: "rubik",
                }}
                value={10}
              >
                <em>Signage Solution</em>
              </MenuItem>

              <MenuItem
                sx={{
                  fontSize: 20,
                  fontWeight: 400,
                  color: "#2C2C2C",
                  fontFamily: "rubik",
                }}
                value={10}
              >
                IT Solution
              </MenuItem>

              <MenuItem
                sx={{
                  fontSize: 20,
                  fontWeight: 400,
                  color: "#2C2C2C",
                  fontFamily: "rubik",
                }}
                value={20}
              >
                Digital Marketing
              </MenuItem>

              <MenuItem
                sx={{
                  fontSize: 20,
                  fontWeight: 400,
                  color: "#2C2C2C",
                  fontFamily: "rubik",
                }}
                value={30}
              >
                Signage, Printing and IT Solution
              </MenuItem>
            </Select>
          </FormControl>

          <Button
            sx={{
              width: 161,
              height: 50,
              backgroundColor: "#00007D",
              borderRadius: 2,
              marginTop: 2,
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
              Submit
            </Typography>
          </Button>
        </Grid>

        <Grid sx={{ height: "468px" }} size={{ xs: 12, lg: 6 }}>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: "40px",
                  fontWeight: "500",
                  color: "#fff",
                  lineHeight: "30px",
                  fontFamily: "rubik",
                  textAlign: "left",
                }}
              >
                What We Do
              </Typography>

              <Stack
                sx={{
                  height: 2,
                  width: "162px",
                  backgroundColor: "#fff",
                  marginTop: 4,
                  marginBottom: 4,
                }}
              />

              {services.map((item) => (
                <Stack
                  key={item.id}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1,
                    marginTop: 1,
                  }}
                >
                  <CheckCircleIcon sx={{ color: "#fff" }} />

                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "500",
                      color: "#fff",
                      lineHeight: "30px",
                      fontFamily: "rubik",
                      textAlign: "left",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Stack>
              ))}
            </Box>

          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactBoard1;
