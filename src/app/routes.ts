import { createBrowserRouter } from "react-router";
import { Home } from "@/app/pages/Home";
import { AboutUs } from "@/app/pages/AboutUs";
import { Services } from "@/app/pages/Services";
import { Contact } from "@/app/pages/Contact";
import { Terms } from "@/app/pages/Terms";
import { Privacy } from "@/app/pages/Privacy";
import { RootLayout } from "@/app/components/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: AboutUs },
      { path: "services", Component: Services },
      { path: "contact", Component: Contact },
      { path: "terms", Component: Terms },
      { path: "privacy", Component: Privacy },
    ],
  },
]);
