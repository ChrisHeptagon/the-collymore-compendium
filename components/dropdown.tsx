"use client"
import { allChemistryUnits } from '@/.contentlayer/generated'
import React from 'react'

export default function Dropdown() {        
    return (
        <div className="relative inline-block text-left">
            <div>
                <DropdownButton buttonText="Chemistry" dropdownContents={allChemistryUnits}/>
            </div>
        </div>
    )
}

export function DropdownButton({buttonText, dropdownContents}: {buttonText: string, dropdownContents: Array<any>}) {
    const [open, setOpen] = React.useState(false)
    const chevron = open ? "-mr-1 ml-2 h-5 w-5 rotate-180 transition duration-[1000]" : "-mr-1 ml-2 h-5 w-5 rotate-0 transition duration-[1000]"
        
    return (
        <div>
            <div>
                <button type="button" className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded="true" onClick={() => setOpen(!open)}>
                    {buttonText}
                    <svg className={chevron} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            <div className={`origin-top-right absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${open ? "block" : "hidden"}`} role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {dropdownContents
                    .sort ((a, b) => a.title.localeCompare(b.title, "en", { numeric: true }))
                    .map((unit, idx) => (
                            <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" key={idx}>
                                <a href={unit.url}>{unit.title}</a></div>
                    ))}
                </div>
            </div>
        </div>
    )
}
