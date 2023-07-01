import { ComponentType, Suspense } from "react";
import Loader from "../Loader";

export interface ComponentLoaderProps {
  component: ComponentType<any>;
}
const ComponentLoader = ({ component: Component }: ComponentLoaderProps) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component />
    </Suspense>
  );
};

export default ComponentLoader;
