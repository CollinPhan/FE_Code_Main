import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button, IconButton, InputBase, Typography } from "@mui/material";
import Carousel from "../../../components/Carousel/Carousel";
import { clinicData } from "../../../utils/mockData";
import Accordion from "./Accordion/Accordion";
import FeaturesAndBenefits from "./FeatureAndBenefits/FeatureAndBenefits";
import { useNavigate } from 'react-router-dom';
import Hero from "../../../components/Hero/Hero";
import styles from './HomePageContent.module.css';
import decodeToken from "../../../utils/decoder/accessTokenDecoder";

const HomePageContent = () => {
  const navigate = useNavigate();

  const decodedToken = decodeToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExIiwibmFtZWlkIjoiU3BhY2VTdGFsaW5ubndlcWVxIiwiZW1haWwiOiIyNTEyM3F3ZXVjQGdtYWlsLmNvbSIsInJvbGUiOiJDdXN0b21lciIsIm5iZiI6MTcxOTI1MTQ5NiwiZXhwIjoxNzE5MjUyMTAyLCJpYXQiOjE3MTkyNTE0OTYsImlzcyI6IlNtaWxlQ2FyZSJ9.XPVT4kC19OIJXq6l7P1JcCUWvltfzgDVW8UChwk4jQQ');

  console.log(decodedToken);

  const handleBookingClick = () => {
    navigate('/clinics');
  };

  return (
    <>
      <Hero />
      <Box className={styles.container}>
        <Button
          variant="contained"
          onClick={handleBookingClick}
          className={styles.bookingButtonHero}
        >
          Đặt lịch ngay
        </Button>
        <Box className={styles.clinicHeader}>
          <Box sx={{ fontSize: '38px', fontWeight: 700 }}>
            Các phòng khám nổi bật
          </Box>
          <Button
            variant="contained"
            href="/clinics"
            className={styles.viewAllButton}
          >
            Xem tất cả &gt;&gt;
          </Button>
        </Box>
        <Box className={styles.carousel}>
          <Carousel/>
        </Box>

        <Box className={styles.faqContent}>
          <Box sx={{ textAlign: 'left', fontSize: '38px', fontWeight: 700 }}>
            Câu hỏi thường gặp
          </Box>
        </Box>

        <Box className={styles.faqContainer}>
          <Box className={styles.faqContent}>
            <Accordion />
          </Box>
        </Box>

        <Box className={styles.featuresAndBenefitsContainer}>
          <FeaturesAndBenefits />
        </Box>
      </Box>
    </>
  );
};

export default HomePageContent;
