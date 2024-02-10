import MetricsTable from "./MetricsTable";

export default function Dashboard() {
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
