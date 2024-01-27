import ThemeToggle from "./ThemeToggle";

const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <div className="heading">
                    <h1>Where in the world?</h1>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}

export default Header;