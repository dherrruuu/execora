import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useFadeUp(ref) {

    useEffect(() => {

        if (!ref.current) return;

        const ctx = gsap.context(() => {

            const elements = gsap.utils.toArray(".fade-up");

            gsap.set(elements, {
                opacity: 0,
                y: 50,
            });

            gsap.to(elements, {

                opacity: 1,
                y: 0,

                duration: 1.2,

                ease: "power3.out",

                stagger: 0.15,

                scrollTrigger: {

                    trigger: ref.current,

                    start: "top 75%",

                    toggleActions: "play none none none",

                },

            });

        }, ref);

        return () => ctx.revert();

    }, [ref]);

}