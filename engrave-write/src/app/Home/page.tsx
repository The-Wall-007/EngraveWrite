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
    <Box sx={{ height: 2000, width: "100%", backgroundColor: "red" }}>
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

      {/* Project Details */}
      <Box
      sx={{
        display: "flex",
          height: 150,
          width: "100%",
          backgroundColor:"#1DB4FF",
          justifyContent: 'center',
          
      }}
      >
        {/* Part 1 */}
        <Stack sx={{ flex: 0.23, alignSelf: "center"}}>
        <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography
        sx={{
          fontSize: '50px',
          fontWeight: 'bold',
          color: '#FFFFFF',
          whiteSpace: 'pre-line',
          lineHeight: 1.15,
          fontFamily: 'rubik',
        }}
      >
        {`15+`}
      </Typography>
      <Typography
        sx={{
          fontSize: '20px',
          color: '#FFFFFF',
          whiteSpace: 'pre-line',
          fontFamily: 'rubik',
        }}
      >
        {`Years of experience`}
      </Typography>
    </Box>
        </Stack>

        {/* Part 2 */}
        <Stack sx={{ flex: 0.23, alignSelf: "center"}}>
        <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh', 
      }}
    >
      <Typography
        sx={{
          fontSize: '50px',
          fontWeight: 'bold',
          color: '#FFFFFF',
          whiteSpace: 'pre-line',
          lineHeight: 1.15,
          fontFamily: 'rubik',
        }}
      >
        {`175+`}
      </Typography>
      <Typography
        sx={{
          fontSize: '20px',
          color: '#FFFFFF',
          whiteSpace: 'pre-line',
          fontFamily: 'rubik',
        }}
      >
        {`Web Projects Completed`}
      </Typography>
    </Box>
        </Stack>

        {/* Part 3 */}
        <Stack sx={{ flex: 0.23, alignSelf: "center"}}>
        <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh',
      }}
    >
      <Typography
        sx={{
          fontSize: '50px',
          fontWeight: 'bold',
          color: '#FFFFFF',
          whiteSpace: 'pre-line',
          lineHeight: 1.15,
          fontFamily: 'rubik',
        }}
      >
        {`10+`}
      </Typography>
      <Typography
        sx={{
          fontSize: '20px',
          color: '#FFFFFF',
          whiteSpace: 'pre-line',
          fontFamily: 'rubik',
        }}
      >
        {`Qualified team`}
      </Typography>
    </Box>
        </Stack>

        {/* Part 4 */}
        <Stack sx={{ flex: 0.23, alignSelf: "center"}}>
        <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography
        sx={{
          fontSize: '50px',
          fontWeight: 'bold',
          color: '#FFFFFF',
          whiteSpace: 'pre-line',
          lineHeight: 1.15,
          fontFamily: 'rubik',
        }}
      >
        {`300+`}
      </Typography>
      <Typography
        sx={{
          fontSize: '20px',
          color: '#FFFFFF',
          whiteSpace: 'pre-line',
          fontFamily: 'rubik',
        }}
      >
        {`Signage Project Completed`}
      </Typography>
    </Box>
        </Stack>
      </Box>

      {/* Brand Who Trust us */}
      <Box 
  sx={{
    display: "flex",
    flexDirection: "column", 
    height: 322,
    width: "100%",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    padding: 2, 
  }}
>

  {/* Part 1 */}
  <Box>
    <Typography
      sx={{
        fontSize: '45px',
        fontWeight: 'bold',
        color: '#2C2C2C',
        fontFamily: 'rubik',
        padding: 3,
        height: 70,
        alignSelf: 'center',
        textDecorationLine: 'underline',
      }}
    >
      {`Brands Who Trust Us`}
    </Typography>
  </Box>

  {/* Part 2 */}
  <Box
  sx={{
    display: "flex",
    flexDirection: "column", // Stack images vertically
    alignItems: "center", // Center images horizontally
    padding: 7,
    height: 322, // Set a specific height if needed
  }}
>
  <img
    src={"./assets/images/Brand Logos/Group/Group 1.svg"}
    alt="Brand Logo 1"
    style={{
      width: "80%",
      height: "auto",
      objectFit: "cover",
      marginBottom: 15, // Add space below the first image
    }}
  />
  <img
    src={"./assets/images/Brand Logos/Group/Group 2.svg"}
    alt="Brand Logo 2"
    style={{
      width: "70%",
      height: "auto",
      objectFit: "cover",
    }}
  />
</Box>

</Box>


      {/* About Company */}
      <Box
      sx={{
          display: "flex",
          height: 618,
          width: "100%",
          backgroundColor:"#e5e7ef",

      }}
      >
        {/* Part 1 */}
        <Stack
  sx={{
    flex: 0.5,
    height: '80%', 
    justifyContent: "center", 
    alignItems: "center", 
  }}
>
  <Box
    sx={{
      width: "600px",
      height: "auto", 
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <img
      src={"./assets/images/About us.jpg"}
      alt="Baby"
      style={{
        width: "200%",
        height: "auto", 
        objectFit: "cover", 
      }}
    />
  </Box>
        </Stack>

        {/* Part 2 */}
        <Stack style={{ display: "flex", flex: 0.5, height: '80%', alignSelf: 'left',}}>
        <Box
        sx={{
          display: "flex",
          flex: 1,
        
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
          }}>
                {`Welcome to EngraveWrite`}
              </Typography>

              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "300",
                  color: "#2C2C2C",
                  whiteSpace: "pre-line",
                  lineHeight: "13px",
                  marginTop: "20px",
                  fontFamily: "rubik",
                }}
              >
                {` Engrave Write is a dynamic printing and signage business founded in 2001 and located \n
                in the heart of Dandenong, Melbourne. Since our inception, we have been committed \n
                to delivering high-quality signage and printing solutions that help brands stand out. \n
                Initially starting with a laser engraving machine, we expanded our capabilities by \n
                adding a small CNC machine, which allowed us to tackle a wider variety of projects. As \n
                demand grew, we invested in a Large Format Printer to ensure faster turnaround times \n
                and unparalleled quality. Our continued growth led to the acquisition of a new CNC \n
                machine, enabling us to efficiently handle larger and more diverse projects.`}
              </Typography>

    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, mt: 2 }}>
  <Button
    sx={{
      width: 161,
      height: 50,
      backgroundColor: "#00007D",
      borderRadius: 2,
    }}
  >
    <Typography
      sx={{
        fontSize: 20,
        fontWeight: "400",
        color: "#fff",
        fontFamily: "rubik",
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
</Box>
   </Box>
  </Box>
    </Stack>
        
      </Box>


    </Box>
  );
};

export default Home;
