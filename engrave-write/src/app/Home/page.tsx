import {
  Box,
  Button,
  Input,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ height: 1000, width: "100%", backgroundColor: "red" }}>
      {/* Header Menu  */}
      <Box
        sx={{
          display: "flex",
          flex: 1,
          backgroundColor: "#fff",
          height: 98,
          width: "100%",
        }}
      >
        {/* Part 1  */}
        <Stack sx={{ flex: 0.2, backgroundColor: "green" }}></Stack>

        {/* Part 2 */}
        <Stack sx={{ flex: 0.6, backgroundColor: "pink" }}></Stack>

        {/* Part 3 */}
        <Stack
          sx={{
            flex: 0.2,
            justifyContent: "center",
          }}
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
              }}
            >
              03 9793 1187
            </Typography>
          </Button>
        </Stack>
      </Box>

      {/* Advertising Board */}
      <Box
        sx={{
          display: "flex",
          height: 640,
          width: "100%",
          backgroundColor: "#ebebf5",
        }}
      >
        {/* Part 1 */}
        <Stack style={{ display: "flex", flex: 0.6 }}>
          <Box
            sx={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              // alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box sx={{ alignSelf: "center" }}>
              <Typography
                sx={{
                  fontSize: "50px",
                  fontWeight: "bold",
                  color: "#2C2C2C",
                  whiteSpace: "pre-line",
                  lineHeight: 1.15,
                  fontFamily: "rubik",
                }}
              >
                {`Engrave writes is your trusted \n digital partner to improve \n your online & store presents`}
              </Typography>

              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "300",
                  color: "#2C2C2C",
                  whiteSpace: "pre-line",
                  lineHeight: "25px",
                  marginTop: "20px",
                  fontFamily: "rubik",
                }}
              >
                {` Expert in web design and development services, as well as comprehensive \n all-in-one signage solutions.`}
              </Typography>

              <Box
                sx={{
                  width: "576px",
                  height: "57px",
                  display: "flex",
                  backgroundColor: "red",
                  marginTop: "30px",
                  borderRadius: "5px",
                  overflow: "hidden",
                }}
              >
                <InputBase
                  sx={{
                    flex: 0.6,
                    backgroundColor: "#fff",
                    border: "none",
                    outline: "none",
                    padding: 2,
                    fontSize: "18px",
                    fontWeight: "400",
                    color: "#2c2c2c",
                    fontFamily: "rubik",
                  }}
                  placeholder="Enter your website"
                />
                <Button
                  sx={{
                    flex: 0.4,
                    backgroundColor: "#ff3b99",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                >
                  <Typography sx={{ fontFamily: "rubik" }}>
                    FREE CONSULTATION
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Stack>

        {/* Part 2  */}
        <Stack
          style={{
            display: "flex",
            flex: 0.4,
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "440px",
              height: "100%",
            }}
          >
            <img
              src={"./assets/images/baby.png"}
              alt="Baby"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "fill",
                marginTop: -32,
              }}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
