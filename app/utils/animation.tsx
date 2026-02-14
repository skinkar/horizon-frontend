"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

type AnimatedTextProps = {
    text: string;
    as?: React.ElementType;
    stagger?: number;
};

export const AnimatedText = ({
    text,
    as: Tag = "span",
    stagger = 0.06,
}: AnimatedTextProps) => {
    const el = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!el.current) return;

        const words = el.current.querySelectorAll(".word");

        gsap.fromTo(
            words,
            {
                opacity: 0,
                y: 12,
                filter: "blur(8px)",
            },
            {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.8,
                ease: "power3.out",
                stagger,
                scrollTrigger: {
                    trigger: el.current,
                    start: "top 90%",
                },
            }
        );
    }, [stagger]);

    return (
        <Tag ref={el} className="inline-block whitespace-pre-wrap">
            {text.split(" ").map((word, i) => (
                <span key={i} className="word inline-block mr-2">
                    {word}
                </span>
            ))}
        </Tag>
    );
};

export const LineReveal = ({
    text,
    as: Tag = "div",
    stagger = 0.1,
}: AnimatedTextProps) => {
    const el = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!el.current) return;

        const lines = el.current.querySelectorAll(".line-wrapper");

        gsap.fromTo(
            lines,
            {
                opacity: 0,
                y: 30,
                filter: "blur(12px)",
            },
            {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 1,
                ease: "power4.out",
                stagger,
                scrollTrigger: {
                    trigger: el.current,
                    start: "top 85%",
                },
            }
        );
    }, [stagger]);

    return (
        <Tag ref={el} className="overflow-hidden">
            {text.split("\n").map((line, i) => (
                <div key={i} className="line-wrapper overflow-hidden pb-1">
                    <span className="line block">
                        {line}
                    </span>
                </div>
            ))}
        </Tag>
    );
};
