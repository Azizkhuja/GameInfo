import { useState } from "react";
import styled from "styled-components";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
const ScroolToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
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
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </Button>
  );
};

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 93%;
  bottom: 40px;
  height: 60px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: white;
`;

export default ScroolToTop;
