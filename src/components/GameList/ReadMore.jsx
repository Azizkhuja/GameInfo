import { useState } from "react";
import { Button } from "@mui/material";

const ReadMore = ({ children }) => {
  const text = children;
  const [isTruncated, setIsTruncated] = useState(true);
  const result = isTruncated ? text?.slice(0, 300) : text;

  const toggleIsTruncated = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <>
      {result} <br />
      <Button
        variant="contained"
        onClick={toggleIsTruncated}
        sx={{ marginTop: 1 }}
      >
        {isTruncated ? "+ Read more" : "- Read Less"}
      </Button>
    </>
  );
};

export default ReadMore;
