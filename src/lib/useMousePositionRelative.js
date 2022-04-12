import React from "react";

const useMousePositionRelative = (ref) => {
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  });

  React.useEffect(() => {
    const updateMousePosition = (ev) => {
      const refData = ref.current.getBoundingClientRect();

      setMousePosition({
        x: ev.clientX - refData.x - refData.width * 0.5,
        y: ev.clientY - refData.y - refData.height * 0.5,
      });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};
export default useMousePositionRelative;