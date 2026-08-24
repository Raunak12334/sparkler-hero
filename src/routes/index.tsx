import { createFileRoute } from "@tanstack/react-router";
import App from "../App";

export const Route = createFileRoute("/")({
  component: App,
  head: () => ({
    meta: [
      { title: "Prosthetics for People Who Keep Fighting" },
      {
        name: "description",
        content:
          "Reclaim your movement with simple, smart prosthetics. Seen on Shark Tank India. Book a free fitting today.",
      },
      {
        property: "og:title",
        content: "Prosthetics for People Who Keep Fighting",
      },
      {
        property: "og:description",
        content:
          "Reclaim your movement with simple, smart prosthetics. Seen on Shark Tank India. Book a free fitting today.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
