// https://ui.shadcn.com/docs/components/data-table

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const METRICS_COLUMNS: string[] = [
    "Location Name",
    "Number of leads",
    "Spend",
    "Cost Per Lead (Average)",
    "Click Through Rate (Average)",
    "In Person Appointments",
    "Confirmed In Person Appointments",
    "Cancelled In Person Appointments",
    "Showed In Person Appointments",
    "No-Showed In Person Appointments",
    "Phone Appointments",
    "Confirmed Phone Appointments",
    "Cancelled Phone Appointments",
    "Showed In Phone Appointments",
    "No-Showed Phone Appointments",
    "Lead 2 Book In Person",
    "Lead 2 Book Phone Call",
    "Lead 2 Showed In Person",
    "Lead 2 Showed Phone Call",
    "Cost Per In Person Appointment",
    "Cost Per Phone Appointment",
    "Cost Per In Person Showed",
    "Cost Per Phone Showed",
    "Won Leads",
    "Cost Per Acquisition"
]

export default function MetricsTable() {
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    {
                        METRICS_COLUMNS.map((COLUMN, i) => {
                            return (<TableHead key={`${COLUMN}-${i}`} >{COLUMN}</TableHead>)
                        })
                    }
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    {
                        METRICS_COLUMNS.map((COLUMN, i) => {
                            return (<TableHead key={`${COLUMN}-${i}`} className="w-[200px] text-center">{COLUMN}</TableHead>)
                        })
                    }
                </TableRow>
            </TableBody>
        </Table>

    )
}
