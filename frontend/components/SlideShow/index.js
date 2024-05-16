import React from "react";
import { Fade } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";
import styles from "./Slider.module.css";
const images = [
    "https://photos.smugmug.com/Worship-Experience-2024-with-Moses-Bliss-and-Others/i-2SKnDXg/0/FVQpSJz89cB6d2shNqqPHck2XnSckDr5x7qLMPsL8/O/IMG_2088.jpg",
    "https://photos.smugmug.com/Worship-Experience-2024-with-Moses-Bliss-and-Others/i-PpPRChM/0/DV3dxgcggdRNnDd4m52W6RHVQdF9QkhgfQrxrj2z5/O/IMG_1615.jpg",
    "https://photos.smugmug.com/Worship-Experience-2024-with-Moses-Bliss-and-Others/i-GL2TKsp/0/DJzzPTwBPPTMZDjSTZ5LR3f7dRsxfKzWfNjFcX8L9/O/IMG_1160.jpg",
];

const SlideShow = ({ img, name, description, onClick }) => {
  return (
    <div className={styles.container}>
      <Fade arrows={false} canSwipe={false}>
        {images.map((slide, index) => {
          return (
            <div className={styles.slide} key={slide}>
              <div style={{ backgroundImage: `url(${images[index]})` }}>
                {/* <span>Slide {index + 1}</span> */}
              </div>
            </div>
          );
        })}
      </Fade>
    </div>
  );
};

export default SlideShow;