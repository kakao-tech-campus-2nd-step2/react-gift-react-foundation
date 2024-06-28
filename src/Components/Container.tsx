import React from 'react';
import './container.css';

interface ContainerProps {
    maxWidth?: string;
    children?: string;
    flexDirection?: "row" | "column"
    justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around";
    alignItems?: "center" | "flex-start" | "flex-end" | "baseline" | "stretch";
}

export const Container = ({
    maxWidth = "500px",
    children = "Hello!",
    flexDirection = "row",
    justifyContent = "center",
    alignItems = "center"
}: ContainerProps) => {
    return (
        <div style = {{
            
        }}>
            {children}
        </div>
    )
}