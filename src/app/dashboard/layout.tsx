import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/ui/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Gym Member Machine Agency Dashboard",
    description: "Gym Member Machine Agency Dasbhoard",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="">
                    <div className="">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
