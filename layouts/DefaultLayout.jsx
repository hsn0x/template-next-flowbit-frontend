import React from "react"

import { FooterScreen, NavbarScreen } from "../components"

const DefaultLayout = ({ children }) => {
    return (
        <>
            <div className="container mx-auto">
                <NavbarScreen />
                <div className="flex">
                    <main className="w-full">{children}</main>
                </div>
                <FooterScreen />
            </div>
        </>
    )
}

export default DefaultLayout
