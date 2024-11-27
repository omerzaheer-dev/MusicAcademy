"use client";
import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { toast, Toaster } from "sonner";
import { ButtonsCard } from "./ui/tailwindcss-buttons";
import { cn } from "@/lib/utils";

export function TailwindcssButtons({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) {

    return (
        <div>
            <ButtonsCard>
                <button

                    className={cn(
                        "inline-flex animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#9ea6b8,45%,#f0f0f0,55%,#9ea6b8)] bg-[length:200%_100%] px-6 font-medium text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 focus:ring-offset-slate-800",
                        className
                    )}>
                    {children}
                </button>
            </ButtonsCard>
        </div>
    );
}