import {
  Form,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import appStylesHref from "./app.css?url";
import bootstrapHref from "./bootstrap.min.css?url";
import { json } from "@remix-run/node";
import { getPeople } from "./data";
import { getPeopleId } from "./helper/common";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
  { rel: "stylesheet", href: bootstrapHref },
];

export const loader = async () => {
  const people = await getPeople();
  return json({ people });
};

export default function App() {

  const { people } = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="sidebar">
          <h1>Star Wars Database</h1>
          <nav>
            {people["results"].length ? (
              <ul>
                {people["results"].map((item, key) => (
                  <li key={item["name"]}>
                    <Link to={`people/${getPeopleId(item["url"])}`}>
                      {item["name"] ? (
                        <>
                          {item["name"]}
                        </>
                      ) : (
                        <i>No Name</i>
                      )}{" "}
                      {item["name"] ? (
                        <span></span>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                <i>No People</i>
              </p>
            )}
          </nav>
        </div>
        <div id="detail">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />

      </body>
    </html>
  );
}
