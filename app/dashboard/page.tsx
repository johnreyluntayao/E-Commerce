import { Card } from "../components/Card";
import { products } from "../lib/data";
import { Cards } from "../components/Cards"

export default function DashboardPage() {
  return (
    <div className="flex gap-4 h-screen justify-center">
      <div className="">
        <Cards product={products}
        />       
      </div>
    </div>
  );
}


