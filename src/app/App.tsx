import { Experience } from "../components/Experience";

export const App = () => {
  return (
    <article className="flex flex-col gap-4 my-4 mx-6 h-fit">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        R3F application!
      </h1>

      <Experience />

      <p className="text-center text-gray-600">
        This is a simple React Three Fiber application with some basic
        geometries.
      </p>
    </article>
  );
};
