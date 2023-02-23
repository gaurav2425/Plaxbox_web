import React, { useState, useEffect } from "react";
import "../MobileScroll/mobileScroll.css";
import Text from "./Text";
import AOS from "aos";
import "aos/dist/aos.css";

const scrollData = [
  {
    heading: "Virtual Spaces of Same Interest",
    description:
      "Clubs are virtual spaces within a chat application where users can gather to discuss a particular topic or interest. These clubs can be created by users or by the chat application itself, and they typically have a specific theme or focus. For example, a club might be dedicated to discussing a particular hobby, political issue, or entertainment genre. Users can join clubs that interest them and participate in conversations with other members",
    // mobile_img: "https://i.ibb.co/6Hhpk24/i-Phone-13-Pro.png",
    mobile_img: "https://i.ibb.co/SrMs2Ld/i-Phone-13-Pro-2.png",
  },
  {
    heading: "seamless viewing experience,",
    description:
      "Watch TV shows together with friends application is a platform that allows users to watch their favorite TV shows and movies together with their friends in real-time, even if they are in different locations. The application typically provides a seamless and synchronized viewing experience, where users can watch the same video content simultaneously and engage in real-time chat, voice, or video communication.",
    mobile_img: "https://i.ibb.co/Sy415W2/i-Phone-13-Pro-Front-2.png",
  },
  {
    heading: "connect people of the same interest",
    description:
      "Once users sign up and provide their interests, the app will suggest potential matches based on their preferences. Users can then browse through the profiles of suggested matches and initiate conversations with those they are interested in connecting with. The app may also offer various features and tools to facilitate conversations and connections, such as discussion forums, chat rooms, and interest-based groups or clubs. Users can join these groups and connect with others who share their interests, discuss relevant topics, and participate in group activities.",
    mobile_img: "https://i.ibb.co/k2L8zzC/i-Phone-13-Pro-3.png",
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
