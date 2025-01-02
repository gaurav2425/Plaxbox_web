import React, { useState, useEffect } from "react";
import "../MobileScroll/mobileScroll.css";
import Text from "./Text";
import AOS from "aos";
import "aos/dist/aos.css";

const scrollData = [
  {
    heading: "Dive into spaces!",
    description:
      "Our Interest-Based Cafes bring people together over shared passions and hobbies. Whether you’re a bookworm, movie buff, or fitness fanatic, there’s a cafe tailored to your vibe. Break the ice with meaningful conversations about what you love most and meet someone who gets you. Explore the joy of connection through mutual interests!",
    // mobile_img: "https://i.ibb.co/6Hhpk24/i-Phone-13-Pro.png",
    mobile_img: "https://i.ibb.co/xJBf57g/i-Mockup-i-Phone-15-Pro-Max-3.png",
  },
  {
    heading: "Celebrate your uniqueness! ",
    description:
      "Our Personality-Based Cafes are designed to bring out the best in you. Whether you're an introvert seeking deep conversations, an extrovert looking for lively interactions, or a creative mind eager to share ideas, there’s a space just for you. Connect with people who vibe with your energy and appreciate your true self. Dive in and let your personality shine!",
    mobile_img: "https://i.ibb.co/jynrMmb/i-Mockup-i-Phone-15-Pro-Max.png",
  },
  {
    heading: "Time-Limited Cafes",
    description:
      "Experience the thrill of exclusivity! Time-Limited Cafes are open for specific hours or days, creating a sense of urgency and excitement. Start your day with great conversations in the Morning Brews cafe, unwind after hours in the Night Owls' Den, or make the most of your weekend in the Weekend Wonders cafe. These fleeting moments make every interaction special—don’t miss your chance to connect!",
    mobile_img: "https://i.ibb.co/1fZPCMn/i-Mockup-i-Phone-15-Pro-Max-1.png",
  },
  // {
  //   heading: "for your eclectic taste.",
  //   description:
  //     "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae ",
  //   mobile_img: "https://i.ibb.co/Sy415W2/i-Phone-13-Pro-Front-2.png",
  // },
  // {
  //   heading: "more cash in your pockets.",
  //   description:
  //     "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis ",
  //   mobile_img: "https://i.ibb.co/MC1DYkC/i-Phone-13-Pro-Front-3.png",
  // },

  // <a href="https://ibb.co/B2hZvvM"><img src="https://i.ibb.co/k2L8zzC/i-Phone-13-Pro-3.png" alt="i-Phone-13-Pro-3" border="0"></a>
];

{
  /* <a href="https://imgbb.com/"><img src="https://i.ibb.co/56cXXmX/Woman-hand-holding-i-Phone-12-mockup-Black-skin-Mockuuups-Studio.png" alt="Woman-hand-holding-i-Phone-12-mockup-Black-skin-Mockuuups-Studio" border="0"></a> */
}

const MobileScroll = () => {
  const [currentImg, setCurrentImg] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="mobile-scroll flex max-width">
      <div className="scroll-full-screen-wrapper">
        {scrollData.map((screen, i) => (
          <div className="scroll-full-screen">
            <Text screen={screen} setCurrentImg={setCurrentImg} i={i} />
          </div>
        ))}
      </div>
      <div className="mobile-mockup-wrapper non-mobile">
        <div className="mobile-mockup ">
          <div className="mobile-mockup-screen flex absolute-center">
            <img
              src={scrollData[currentImg].mobile_img}
              className="mobile-screen-img slide-in-right "
              key={scrollData[currentImg].mobile_img}

              //   src={require("../../assets/iphone_netflix.png")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScroll;
