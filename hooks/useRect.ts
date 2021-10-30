import { useState, useEffect, MutableRefObject } from "react";

export default function useBoundingBox(ref: MutableRefObject<HTMLElement | null>): DOMRect {
  // have to use an explicit object like this instead of a `new DOMRect` since `DOMRect` doesn't exist server side
  const [bbox, setBbox] = useState<DOMRect>(() => ({
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    toJSON: () => null,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
  }));

  const measureBox = () => {
    if (ref.current) {
      setBbox(ref.current.getBoundingClientRect());
    }
  };

  useEffect(() => {
    measureBox();
    window.addEventListener("resize", measureBox);
    return () => window.removeEventListener("resize", measureBox);
  }, []);

  return bbox;
}
