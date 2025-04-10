export interface Env {
    gitLink: string;
    appName: string;
}

export const useEnv = (): Env => {
    return {
        gitLink: import.meta.env.VITE_GIT_LINK,
        appName: import.meta.env.VITE_APP_NAME
    };
}