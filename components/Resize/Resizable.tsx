import { Box, BoxProps, StyleProps } from "@chakra-ui/react";
import { useSpring } from "@react-spring/web";
import React, { useEffect, useState } from "react";
import { ResizeComponent } from ".";

type Props = {
  sizes: number[];
  bgs?: string[];
};

export const Resizeable: React.FC<Props & BoxProps> = ({
  children,
  sizes,
  bgs,
  ...rest
}) => {
  const [panels, setPanels] = useState<number[]>(sizes);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [currentPanel, setCurrentPanel] = useState<number>(0);
  const [totalW, settotalW] = useState<number>(0);

  const startResize = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setIsDragging(true);
    setCurrentPanel(index);
    settotalW(panels[index] + panels[index - 1]);
  };

  const resizeBox = (del: number) => {
    if (isDragging) {
      let newW =
        panels[currentPanel - 1] + del > totalW * 0.8
          ? totalW * 0.8
          : panels[currentPanel - 1] + del;
      newW = newW < totalW * 0.1 ? totalW * 0.1 : newW;

      const news: number[] = panels.map((panel: number, index: number) => {
        if (currentPanel - 1 === index) return newW;
        if (currentPanel === index) return totalW - newW;
        return panel;
      });
      setPanels(news);
    }
  };

  const stopResize = () => {
    if (isDragging) setIsDragging(false);
  };

  return (
    <Box {...rest} onMouseUp={stopResize} display="flex">
      {React.Children.map(children, (child, i: number) => {
        return (
          <>
            <ResizeComponent
              key={"resizer_" + i}
              index={i}
              boxW={panels[i]}
              left={0}
              startResize={startResize}
              resizeBox={resizeBox}
              bg={bgs ? bgs[i] : undefined}
            >
              {child}
            </ResizeComponent>
          </>
        );
      })}
    </Box>
  );
};
