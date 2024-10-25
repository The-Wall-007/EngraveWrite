import { Stack, Typography, TypographyProps } from "@mui/material";
import Grid from "@mui/material/Grid2";

interface StyledTextProps extends TypographyProps {
  children: React.ReactNode;
  href?: string; // Optional href prop for links
}

const StyledText: React.FC<StyledTextProps> = ({
  children,
  href,
  ...props
}) => {
  const content = (
    <Typography
      sx={{
        fontSize: "18px",
        color: "#fff",
        fontWeight: "400",
        lineHeight: "28px",
        fontFamily: "Rubik",
        ...props.sx, // Allow additional styles
      }}
      {...props} // Spread other props (like variant, align, etc.)
    >
      {children}
    </Typography>
  );

  return href ? (
    <a href={href} style={{ textDecoration: "none" }}>
      {content}
    </a>
  ) : (
    content
  );
};

const Footer = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#2C2C2C",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
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
          paddingTop: {
            md: 4,
            sm: 4,
            xs: 4,
            lg: 4,
          },
          paddingBottom: {
            md: 4,
            sm: 4,
            xs: 4,
            lg: 4,
          },
          paddingLeft: {
            md: 2,
            sm: 2,
            xs: 4,
            lg: 12,
          },
          paddingRight: {
            md: 2,
            sm: 2,
            xs: 4,
            lg: 12,
          },
        }}
      >
        <Grid container spacing={10}>
          <Grid
            sx={{
              minHeight: "336px",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
            size={{ xs: 12, sm: 6, md: 6, lg: 3 }}
          >
            <StyledText>
              <img
                src="./assets/EngraveIcons/LogoWhite.svg"
                alt="Logo"
                style={{
                  height: "66px",
                  width: "177.29px",
                  cursor: "pointer",
                  objectFit: "contain", // Ensures the aspect ratio is preserved
                }}
              />
            </StyledText>

            <Typography
              sx={{
                fontSize: "22px",
                color: "#fff",
                fontWeight: "500",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              Opening hours
            </Typography>
            <StyledText>Monday 8:00 AM - 4:00 PM</StyledText>
            <StyledText>Tuesday 8:00 AM - 4:00 PM</StyledText>
            <StyledText>Wednesday 8:00 AM - 4:00 PM</StyledText>
            <StyledText>Thursday 8:00 AM - 4:00 PM</StyledText>
            <StyledText>Friday 8:00 AM - 4:00 PM</StyledText>
          </Grid>
          <Grid
            sx={{
              minHeight: "336px",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
            size={{ xs: 12, sm: 6, md: 6, lg: 3 }}
          >
            <Typography
              sx={{
                fontSize: "22px",
                color: "#fff",
                fontWeight: "500",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              Quick links
            </Typography>
            <StyledText href="/about-us">About us</StyledText>
            <StyledText href="/safety-warning-kit-decal">
              Safety & Warning Kit Decals
            </StyledText>
            <StyledText href="/cnc-routing">CNC Routing</StyledText>
            <StyledText href="/laser-cutting-engraving">
              Laser Cutting and Engraving
            </StyledText>
            <StyledText href="/digital-printing">Digital Printing</StyledText>
            <StyledText href="/general-signage">General Signage</StyledText>
            <StyledText href="/case-study">Case Study</StyledText>
          </Grid>
          <Grid
            sx={{
              minHeight: "336px",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
            size={{ xs: 12, sm: 6, md: 6, lg: 3 }}
          >
            <Typography
              sx={{
                fontSize: "22px",
                color: "#fff",
                fontWeight: "500",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              Our Services
            </Typography>
            <StyledText href="/ItServices/WebDesign">Web Design</StyledText>
            <StyledText href="/ItServices/WebDevelopment">
              Web Development
            </StyledText>
            <StyledText href="/signage-solution">Signage Solution</StyledText>
            <StyledText href="/graphics-design">Graphics Design</StyledText>
            <StyledText href="/software-solution">Software Solution</StyledText>
            <StyledText href="/digital-marketing">Digital Marketing</StyledText>
            <StyledText href="/e-commerce-development">
              E-Commerce Development
            </StyledText>
          </Grid>
          <Grid
            sx={{
              minHeight: "336px",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
            size={{ xs: 12, sm: 6, md: 6, lg: 3 }}
          >
            <Typography
              sx={{
                fontSize: "22px",
                color: "#fff",
                fontWeight: "500",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              Contact Info
            </Typography>
            <StyledText>C1, Rhur St,</StyledText>
            <StyledText>Dandenong South VIC 3175</StyledText>
            <StyledText>03 9793 1187</StyledText>
            <StyledText>team@engravewrite.com.au</StyledText>
          </Grid>
        </Grid>
      </Stack>

      <Stack
        sx={{
          marginLeft: {
            md: 2,
            sm: 2,
            xs: 4,
            lg: 12,
          },
          marginRight: {
            md: 2,
            sm: 2,
            xs: 4,
            lg: 12,
          },
          borderTopWidth: 1,
          borderColor: "#fff",
          marginTop: 4,
          paddingTop: 2,
        }}
      >
        <Grid container rowSpacing={4}>
          <Grid size={{ sm: 12, md: 6 }}>
            <StyledText>
              Copyright © Engrave Write. Terms and Conditions, Privacy Policy
            </StyledText>
          </Grid>
          <Grid
            size={{ sm: 12, md: 6 }}
            sx={{
              display: "flex",
              justifyContent: { sm: "flex-start", md: "flex-end" },
            }}
          >
            <StyledText>
              Web Design & Digital Marketing by Engrave Write{" "}
            </StyledText>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Footer;
