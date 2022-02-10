import type { LoaderFunction } from "remix";
import { redirect } from "remix";

export const loader: LoaderFunction = () => {
  return redirect("/general");
};

function Index() {
  return <></>;
}

export default Index;
