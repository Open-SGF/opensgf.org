declare global {
    interface Window {
        plausible?: (event: string, data?: { url?: string; props?: Record<string, unknown> }) => void;
    }
}

export {};
