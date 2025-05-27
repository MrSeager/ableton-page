// useAnimatedInView.js
import { useInView } from 'react-intersection-observer';
import { useSpring } from '@react-spring/web';

export const useAnimatedInView = () => {
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.025 });

    const animation = useSpring({
        from: { opacity: 0, scale: 0, transform: 'rotateX(-400deg)' },
        to:  { opacity: inView ? 1 : 0, scale: inView ? 1 : 0, transform: inView ? 'rotateX(0deg)' : 'rotateX(-400deg)' },
        config: { tension: 110, friction: 20 },
    });

    return { ref, animation };
};

export const useAnimatedTextInView = (x: number) => {
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.025 });

    // Function to adjust x based on screen width
    const getXValue = (x: number) => window.innerWidth > 1024 ? x : x * 0.4;

    const animation = useSpring({
        from: { opacity: 0, scale: 0, x: getXValue(x) },
        to:  { opacity: inView ? 1 : 0, scale: inView ? 1 : 0, x: inView ? 0 : getXValue(x) },
        config: { tension: 110, friction: 20 },
    });

    return { ref, animation };
};
