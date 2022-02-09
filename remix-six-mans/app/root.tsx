import { Links, LinksFunction, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "remix";
import type { MetaFunction } from "remix";
import globalStyles from "~/styles/global.css";
import styles from "~/styles/root.css";
import NavBar, { navLinks } from "./components/Nav";

export const meta: MetaFunction = () => {
  return { title: "Six Mans | UNCC Rocket League Esports" };
};

export const links: LinksFunction = () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Play&display=swap" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap" },
    { rel: "stylesheet", href: globalStyles },
    { rel: "stylesheet", href: styles },
    ...navLinks(),
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
        <div className="content">
          <NavBar />
          <main className="main">
            <Outlet />
          </main>
        </div>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
