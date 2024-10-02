"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import StarIcon from "@mui/icons-material/Star";

// Sample reviews array
const reviews = [
  {
    id: 1,
    name: "Susan Smith",
    job: "Web Developer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.",
    reviewStar: 5,
  },
  {
    id: 2,
    name: "Anna Johnson",
    job: "Web Designer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    reviewStar: 4,
  },
  {
    id: 3,
    name: "Peter Jones",
    job: "Intern",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    reviewStar: 5,
  },
  {
    id: 4,
    name: "Bill Anderson",
    job: "The Boss",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
    reviewStar: 4,
  },
  {
    id: 5,
    name: "Jane Doe",
    job: "Manager",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-5_np9x5l.jpg",
    text: "I'm a manager at the biggest company in the world, delivering high-quality products with love and care.",
    reviewStar: 4,
  },
  {
    id: 6,
    name: "John Doe",
    job: "CEO",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-6_np9x5l.jpg",
    text: "As a CEO, I manage people and deliver world-class results on a daily basis with my amazing team.",
    reviewStar: 4,
  },
];

const ClientReview = () => {
  const [index, setIndex] = useState(0);

  const reviewsPerPage = 4;

  const nextGroup = () => {
    setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevGroup = () => {
    setIndex((prevIndex) => {
      if (prevIndex === 0) return reviews.length - 1;
      return prevIndex - 1;
    });
  };

  const getVisibleReviews = () => {
    return reviews.slice(index, index + reviewsPerPage);
  };

  return (
    <Stack
      sx={{
        backgroundColor: "#f0f0f7",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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
          Client Reviews
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

      <Box
        sx={{
          mx: "auto",
          textAlign: "center",
          p: 2,
          marginTop: 2.5,
        }}
      >
        <Grid container spacing={3}>
          {getVisibleReviews().map((review) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={review.id}>
              <Card
                sx={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  minWidth: "250px",
                  minHeight: "200px",
                  padding: 1,
                }}
              >
                <CardContent>
                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    {Array.from(
                      { length: review.reviewStar },
                      (_, index) => index
                    ).map((item, index) => (
                      <StarIcon key={index} sx={{ color: "#EFC003" }} />
                    ))}
                  </Stack>

                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "300",
                      color: "#2C2C2C",
                      whiteSpace: "pre-line",
                      lineHeight: "25px",
                      marginTop: "20px",
                      fontFamily: "rubik",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      marginBottom: 4,
                      textAlign: "left",
                    }}
                  >
                    {review.text}
                  </Typography>

                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <img
                      src={"./assets/EngraveIcons/google.svg"}
                      alt="My Icon"
                      width="55"
                      height="55"
                    />

                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#00007D",
                        lineHeight: "28px",
                        fontFamily: "rubik",
                      }}
                    >
                      {review.name}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "center",
            gap: 2,
            marginTop: 4,
          }}
        >
          <IconButton onClick={prevGroup} sx={{ backgroundColor: "#fff" }}>
            <ChevronLeftIcon sx={{ color: "#00007D" }} />
          </IconButton>

          <IconButton onClick={nextGroup} sx={{ backgroundColor: "#fff" }}>
            <ChevronRightIcon sx={{ color: "#00007D" }} />
          </IconButton>
        </Box>
      </Box>
    </Stack>
  );
};

export default ClientReview;
