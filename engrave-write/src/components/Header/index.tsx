import { Box, Button, Stack, Typography } from "@mui/material";

const Header = () => {
  return (
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
      <Stack sx={{ flex: 0.2 }}></Stack>

      {/* Part 2 */}
      <Stack sx={{ flex: 0.6 }}></Stack>

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
  );
};

export default Header;
