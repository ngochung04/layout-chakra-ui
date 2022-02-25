import { Box, BoxProps } from "@chakra-ui/react";
import { a } from "@react-spring/web";
import React from "react";
import { useGesture } from "react-use-gesture";

type Props = {
  isLatest?: boolean;
  index: number;
  boxW: number;
  startResize: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => void;
  resizeBox: (del: number) => void;
};

export const ResizeComponent: React.FC<Props & BoxProps> = ({
  children,
  isLatest,
  index,
  boxW,
  startResize,
  resizeBox,
  ...rest
}) => {
  const bind = useGesture({
    onDrag: ({ delta: [dx] }) => {
      resizeBox(dx);
    },
  });

  return (
    <>
      {index !== 0 && (
        <a.div
          onMouseDown={(e) => startResize(e, index)}
          style={{
            width: "0.25rem",
            backgroundColor: "#ccc",
            position: "relative",
            cursor: "col-resize",
          }}
          {...bind()}
        >
          <Box
            _before={{
              content: '""',
              // borderLeft: "1px solid #333",
              position: "absolute",
              top: "50%",
              transform: "translateY(-100%)",
              left: 0,
              display: "inline-block",
              h: "2rem",
              margin: "0 2px",
            }}
            _after={{
              content: '""',
              // borderLeft: "1px solid #333",
              position: "absolute",
              top: "50%",
              transform: "translateY(-100%)",
              right: 0,
              display: "inline-block",
              h: "2rem",
              margin: "0 2px",
            }}
          />
        </a.div>
      )}
      <Box
        bgColor="#fff"
        // border="1px solid gray"
        // p={15}
        {...rest}
        w={`${boxW}px`}
        display="inline-block"
      >
        {children}
      </Box>
    </>
  );
};
