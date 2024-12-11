"use client";

import { useEffect } from "react";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
MouseFollower.registerGSAP(gsap);

import "../../../node_modules/mouse-follower/src/scss/index.scss";

export default function MouseFollow() {

    useEffect(() => {
        const cursor = new MouseFollower({
            speed: 0.5,
        });
    })

    return null;
}