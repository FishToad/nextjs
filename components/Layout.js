import layoutStyles from '../styles/Layout.module.css'
import Nav from './Nav'
import Footer from './Footer'

function Layout({ children }) {
    return (
        <>
            <Nav />
            <div className={layoutStyles.container}>
                <main className={layoutStyles.main}>
                    {children}
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Layout
