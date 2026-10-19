import { supabase } from "~/postgress/supaclient";

export async function loader() {
  const { data } = await supabase().from("destat-test").select("*");
  console.log(data);
}

export default function Dashboard() {
  return <div>Hello destat world</div>;
}
