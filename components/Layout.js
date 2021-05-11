import layoutStyles from '../styles/Layout.module.css'
import Nav from './Nav'

function Layout({ children }) {
    return (
        <>
            <Nav />
            <div className={layoutStyles.container}>
                <main className={layoutStyles.main}>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout
