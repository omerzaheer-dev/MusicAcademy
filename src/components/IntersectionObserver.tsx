import { useRef, useState, useEffect } from 'react';

const useIntersectionObserver = (callback: any, rootMargin = '0px') => {
    const cont = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    const { isIntersecting } = entry;
                    if (isIntersecting) {
                        setIsVisible(true);
                        callback();
                    }
                },
                { rootMargin }
            );

            if (cont.current) {
                observer.observe(cont.current);
            }

            return () => {
                if (cont.current) {
                    observer.unobserve(cont.current);
                }
            };
        }
    }, [callback, rootMargin]);

    return { cont, isVisible };
};

export default useIntersectionObserver;