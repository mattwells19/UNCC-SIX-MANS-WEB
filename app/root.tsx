import { Links, LinksFunction, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "remix";
import type { MetaFunction } from "remix";
import globalStyles from "~/styles/global.css";
import styles from "~/styles/root.css";
import mdStyles from "~/styles/root.medium.css";
import lgStyles from "~/styles/root.large.css";
import NavBar from "./components/Nav";
import { NavbarProvider } from "./contexts/NavbarContext";

export const meta: MetaFunction = () => {
  return {
    title: "Six Mans | Niner Esports RL",
    description: "The official Rocket League community for Niner Esports.",
  };
};

export const links: LinksFunction = () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Play&display=swap" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap" },
    { rel: "stylesheet", href: globalStyles },
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: mdStyles, media: "(max-width: 600px)" },
    { rel: "stylesheet", href: lgStyles, media: "(max-width: 1200px)" },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <NavbarProvider>
          <div className="content">
            <NavBar />
            <main>
              <Outlet />
            </main>
          </div>
        </NavbarProvider>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
