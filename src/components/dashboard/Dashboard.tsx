import { generateAccessToken } from "@/actions/facebook/get-access-token";
import MetricsTable from "./MetricsTable";
export default async function Dashboard() {

    const data = await generateAccessToken();
    return (
        <div>
            <h2>Hello User Name</h2>
            <div className="grid grid-cols-7 my-5">
                <div>Date Preset</div>
                <div>Custom Range</div>
                <div>Clients</div>
                <div>Locations</div>
                <div>Lead Sources</div>
                <div>Adult or Athlete</div>
                <div>Personalize Columns</div>
            </div>
            <MetricsTable />
        </div>
    )
}
