import * as React from "react"
import { PropsWithChildren } from "react"
import { Fit } from "../Fit/Fit"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"

interface MainLayoutProps {
    title: string
    header?: boolean
    footer?: boolean
}

export const MainLayout = ({
    title,
    children,
    header,
    footer,
}: PropsWithChildren<MainLayoutProps>) => {
    return (
        <div
            className={
                "flex h-full min-h-screen w-full flex-1 flex-col bg-white"
            }
        >
            {header && (
                <div className={"border-slate-5 mb-4 border-b bg-gray-50"}>
                    <Fit>
                        <Header />
                    </Fit>
                </div>
            )}
            <main className={"flex flex-col items-stretch"}>{children}</main>
            {footer && (
                <Fit>
                    <Footer />
                </Fit>
            )}
        </div>
    )
}
