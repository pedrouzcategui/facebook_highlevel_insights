'use client'
import clsx from "clsx";
import { useState } from "react"

const SIDEBAR_OPTIONS = [
    'Agency Dashboard',
    'Team Management'
]

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div className={`col ${clsx({ 'hidden': isOpen })}`} onClick={() => setIsOpen(!isOpen)}>
            <ul>
                {
                    SIDEBAR_OPTIONS.map(option => {
                        return (<li key={option}>{option}</li>)
                    })
                }
            </ul>
        </div>
    )
}
