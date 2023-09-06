import { useEffect, useRef, useState, useMemo } from "react";

export default function Check() {
  const ref = useRef(null);

  const isInViewport1 = useIsInViewport(ref);
  console.log("isInViewport1: ", isInViewport1);

  return (
    <div className={` ${isInViewport1 && "animate"}`} ref={ref}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, adipisci amet officiis temporibus blanditiis incidunt perferendis optio inventore aperiam aliquid fuga veniam voluptatem necessitatibus sunt labore nesciunt asperiores. Ducimus corrupti aspernatur iusto aliquam praesentium soluta harum deserunt doloremque! Tempora consectetur voluptate optio nobis, illum similique minima officia sed blanditiis sunt deserunt debitis iste natus ipsam quod qui veniam nemo, animi, reiciendis recusandae. Vitae dolorum excepturi, recusandae earum hic optio distinctio ipsam doloribus nostrum esse necessitatibus repudiandae laborum eos blanditiis id laudantium tempore, fugiat aperiam cupiditate accusamus ratione ex molestias. Error accusamus natus nam distinctio dicta quidem quo animi ipsam reiciendis.
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
