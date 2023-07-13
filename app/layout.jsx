import '@styles/globals.css'

export const metadata = {
    title: 'PromptAI',
    description: 'Discover and Share AI Prompts'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>

            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout