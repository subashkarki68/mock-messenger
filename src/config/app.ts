interface AppConfig {
    name: string,
    github: {
        title: string,
        url: string
    },
    author: {
        name: string,
        url: string
    },
}

export const appConfig: AppConfig = {
    name: "Mock Messenger",
    github: {
        title: "Mock Messenger",
        url: "https://github.com/subashkarki68/mock-messenger",
    },
    author: {
        name: "Ruchi Raj Karki",
        url: "https://github.com/subashkarki68/",
    }
}