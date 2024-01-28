"use client"

import * as React from "react";
import {cn} from "@/lib/utils"


const Circle = ({children, className}) => {
    return <div
        className={cn('flex h-10 w-10 bg-accent rounded-full justify-center align-middle items-center', className)}>
        {children}
    </div>
}

export default Circle