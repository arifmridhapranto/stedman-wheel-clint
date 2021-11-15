import { Typography, Container, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Review = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://gentle-dusk-82174.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div>
      <Typography
        variant='h4'
        sx={{
          color: "#1ba371",
          fontWeight: "bold",
          textAlign: "center",
          my: 3,
        }}>
        Testimonials
      </Typography>
      <Container sx={{ height: "50vh" }}>
        <Swiper
          // install Swiper modules
          modules={[Pagination, Autoplay, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}>
          {review.map((sgReview) => (
            <SwiperSlide key={sgReview._id}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                    {sgReview.Comments}
                  </Typography>
                  <Typography variant='h5' component='div'>
                    <Rating
                      name='read-only'
                      defaultValue={2.5}
                      precision={0.5}
                      value={parseInt(sgReview.rating)}
                      readOnly
                    />
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color='text.secondary'
                    gutterBottom>
                    {sgReview.userName}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Review;
