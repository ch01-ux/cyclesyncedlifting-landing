import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Phase: Gym & Lifting for Women",
    short_name: "Phase",
    description:
      "The gym & lifting app for women — a real barbell tracker that also knows your cycle. For iPhone & Apple Watch.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf8f4",
    theme_color: "#faf8f4",
    icons: [{ src: "/icon.png", sizes: "1024x1024", type: "image/png" }],
  };
}
