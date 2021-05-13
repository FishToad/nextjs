import layoutStyles from '../styles/Layout.module.css'
import Nav from './Nav'
import Footer from './Header'

function Layout({ children }) {
    return (
        <>
            <Nav />
            <div className={layoutStyles.container}>
                <main className={layoutStyles.main}>
                    {children}
                </main>
            <Footer />
            </div>
        </>
    )
}

export default Layout
