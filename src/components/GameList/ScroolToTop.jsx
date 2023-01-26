import { useState } from "react";
import styled from "styled-components";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const ScroolToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 1500) {
      setVisible(true);
    } else if (scrolled <= 1500) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button>
      <ArrowCircleUpIcon
        fontSize="large"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </Button>
  );
};

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 94%;
  bottom: 20px;
  height: 50px;
  z-index: 1;
  cursor: pointer;
  color: white;
`;

export default ScroolToTop;
