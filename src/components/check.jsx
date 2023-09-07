import { useEffect, useRef, useState, useMemo } from "react";

export default function Check(props) {
  const ref = useRef(null);

  const isInViewport1 = useIsInViewport(ref);
  console.log("isInViewport1: ", isInViewport1);

  return (
    <div className={` ${isInViewport1 && "animate"}`} ref={ref}>
      {props.children}{" "}
    </div>
  );
}

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}
