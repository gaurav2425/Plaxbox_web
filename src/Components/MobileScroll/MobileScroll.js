import React, { useState, useEffect } from "react";
import "../MobileScroll/mobileScroll.css";
import Text from "./Text";
import AOS from "aos";
import "aos/dist/aos.css";

const scrollData = [
  {
    heading: "we’ve got your back.",
    description:
      "gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.",
    mobile_img: "https://i.ibb.co/Sy415W2/i-Phone-13-Pro-Front-2.png",
  },
  {
    heading: "begin your winning streak.",
    description:
      "use your CRED coins to participate in games and raffles to win the most exclusive rewards and cashbacks on CRED. good luck.",
    mobile_img: "https://i.ibb.co/MC1DYkC/i-Phone-13-Pro-Front-3.png",
  },
  {
    heading: "for your eclectic taste.",
    description:
      "get access to the CRED Store, a member-exclusive selection of products and experiences at special prices that complement your taste. this is the good life they speak of.",
    mobile_img: "https://i.ibb.co/Sy415W2/i-Phone-13-Pro-Front-2.png",
  },
  {
    heading: "more cash in your pockets.",
    description:
      "switch to CRED RentPay and start paying rent with your credit card. this way you get up to 45 days of credit free period, more reward points and a happy landlord.",
    mobile_img: "https://i.ibb.co/MC1DYkC/i-Phone-13-Pro-Front-3.png",
  },

  {
    heading: "Stream Music",
    description:
      "gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.",
    mobile_img: "https://i.ibb.co/6Hhpk24/i-Phone-13-Pro.png",
  },
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
