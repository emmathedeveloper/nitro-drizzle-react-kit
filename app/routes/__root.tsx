import {
  Outlet,
  createRootRoute,
  type ErrorComponentProps,
} from "@tanstack/react-router";

const ErrorComponent = ({ error }: ErrorComponentProps) => {
  return (
    <div className="size-full flex flex-col items-center justify-around">
      <h1 className="text-xl">{error.message}</h1>
    </div>
  );
};

export const Route = createRootRoute({
  errorComponent: ErrorComponent,
  component: () => {
    return (
      <>
        <Outlet />
      </>
    );
  },
});
