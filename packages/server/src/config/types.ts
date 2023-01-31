export interface AppConfig {
    clientURL: string,
    PORT: number,
    globalPrefix: string,
    appName: string,
    appVersion: string,
    docsPrefix: string,
    privateKey: string
}

export interface CorsConfig {
    origin: string,
    methods: string[],
    credentials: boolean
}