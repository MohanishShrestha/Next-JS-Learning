import { Card } from "@/components/Card";
import Link from "next/link";

export default function notifications(){
    return (
      <Card>
        <div>Notifications Page</div>
        <div>
            <Link href="/complex-dashboard/archived" >Archieved</Link>
        </div>
      </Card>
    );
}