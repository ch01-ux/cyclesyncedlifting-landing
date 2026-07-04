import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Phase — Cycle-Synced Lifting",
    short_name: "Phase",
    description:
      "The strength tracker that programs around your menstrual cycle. For iPhone & Apple Watch.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf8f4",
    theme_color: "#faf8f4",
    icons: [{ src: "/icon.png", sizes: "1024x1024", type: "image/png" }],
  };
}
