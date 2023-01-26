import { useState } from "react";
import styled from "styled-components";
import NorthIcon from "@mui/icons-material/North";

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
      <NorthIcon
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </Button>
  );
};

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 50%;
  bottom: 40px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: green;
`;

export default ScroolToTop;
