import React, { useState, Fragment, useEffect } from "react";
import { Button } from "reactstrap";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll); //Remove eventListener
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <Fragment>
      {visible && (
        <Button onClick={scrollToTop} className="scrollBtn">
          <i className="icon-Chevron---Up" />
          <span className="">Top</span>
        </Button>
      )}
    </Fragment>
  );
};

export default ScrollButton;
