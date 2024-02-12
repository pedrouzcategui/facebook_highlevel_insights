import { ColumnDef } from "@tanstack/react-table"
import { ClientMetrics } from "./types"
import { Button } from "@/components/ui/button"

export const columns: ColumnDef<ClientMetrics>[] = [
    {
        accessorKey: "location_name",
        header: "Business Name",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("location_name")}</div>
        ),
    },
    {
        accessorKey: "leads_count",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Leads
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("leads_count")}</div>,
    },
    {
        accessorKey: "ad_spend",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Ad Spend
                </Button>
            )
        },
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("ad_spend"))

            // Format the amount as a dollar amount
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)

            return <div className="font-medium">{formatted}</div>
        },
    },
]