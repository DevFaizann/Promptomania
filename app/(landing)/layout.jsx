import Nav from "@components/Nav"

export default function LandingLayout({children}){
    return(
        <><div className="main">
            <div className="gradient" />
        </div>
        <main className="app">
            <Nav/>
            {children}

            </main></>
    )
}