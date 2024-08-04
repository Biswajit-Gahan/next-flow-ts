import React from "react";
import MainWrapper from "@/components/main-wrapper/main-wrapper";
import dynamic from "next/dynamic";

const DynamicThemeContextProvider = dynamic(
    () => import("@/context/theme-context"),
    {ssr: false}
)

type ContextProvidersProps = {
    children: React.ReactNode;
}

export default function ContextProviders({children}: ContextProvidersProps) {
    return <DynamicThemeContextProvider>
        <MainWrapper>
            {children}
        </MainWrapper>
    </DynamicThemeContextProvider>
}