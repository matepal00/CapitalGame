import { lazy } from "react";
import { Outlet, RouteObject } from "react-router-dom";
import { paths } from "../../config";
import { ComponentLoader, Layout } from "../../shared/components";

const routes: RouteObject[] = [
  {
    path: paths.root.step,
    element: (
      <Layout>
        <ComponentLoader component={lazy(() => import("./views/Root"))} />
      </Layout>
    ),
    children: [
      {
        path: paths.root.game,
        element: (
          <Layout>
            <Outlet />
          </Layout>
        ),
      },
    ],
  },
];

export default routes;
