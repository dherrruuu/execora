import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./cursor.css";

export default function Cursor() {

    const cursor = useRef(null);

    useEffect(() => {

        const xTo = gsap.quickTo(cursor.current, "x", {
            duration: 0.18,
            ease: "power3.out",
        });

        const yTo = gsap.quickTo(cursor.current, "y", {
            duration: 0.18,
            ease: "power3.out",
        });

        const move = (e) => {
            xTo(e.clientX);
            yTo(e.clientY);
        };

        window.addEventListener("mousemove", move);

        return () => {
            window.removeEventListener("mousemove", move);
        };

    }, []);

    useEffect(() => {

        const items = document.querySelectorAll("button,a,img");

        const enter = () => {
            cursor.current.classList.add("cursor-hover");
        };

        const leave = () => {
            cursor.current.classList.remove("cursor-hover");
        };

        items.forEach((item) => {
            item.addEventListener("mouseenter", enter);
            item.addEventListener("mouseleave", leave);
        });

        return () => {
            items.forEach((item) => {
                item.removeEventListener("mouseenter", enter);
                item.removeEventListener("mouseleave", leave);
            });
        };

    }, []);

    return <div ref={cursor} className="cursor"></div>;

}