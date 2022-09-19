import GlobalStyle from "./styles/globalStyle";

export default function AppProviders({children}) {
    
    return (
        <>
            <GlobalStyle />
            {children}
        </>
    )
}