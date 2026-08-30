import { StaticImageData } from "next/image";
import backendDark from "../assets/backend-dark.webp";
import backend from "../assets/backend.webp";
import frontendDark from "../assets/frontend-dark.webp";
import frontend from "../assets/frontend.webp";
import fullStackDark from "../assets/full-stack-dark.webp";
import fullStack from "../assets/full-stack.webp";

type ServicesType = {
  title: string;
  description: string;
  img: StaticImageData;
  darkImg: StaticImageData;
};
const services: ServicesType[] = [
  {
    title: "Production apps that actually ship",
    description:
      "End-to-end web and mobile apps — from database schema to deployed UI — built to handle real users and real data, not just a demo.",
    img: fullStack,
    darkImg: fullStackDark,
  },
  {
    title: "Reliable systems for unstable conditions",
    description:
      "Offline-first and sync-tolerant architecture for environments with unreliable power or internet — built and proven on a live multi-branch POS system.",
    img: backend,
    darkImg: backendDark,
  },
  {
    title: "AI-accelerated development",
    description:
      "I build with Claude Code and Cursor as core tools, not novelties — letting me ship production-grade features faster without cutting corners on architecture.",
    img: frontend,
    darkImg: frontendDark,
  },
];

export { services };
