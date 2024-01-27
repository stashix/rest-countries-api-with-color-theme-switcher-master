import CountriesFilter from './components/CountriesFilter';
import CountriesGrid from './components/CountriesGrid';
import Header from './components/Header';
import CountriesProvider from './contexts/CountriesProvider';
import ThemeProvider from './contexts/ThemeProvider';
import './index.css';

const App = () => {
  return (
      <ThemeProvider>
        <Header></Header>
        <main>
          <div className='wrapper'>
            <CountriesProvider>
              <CountriesFilter></CountriesFilter>
              <CountriesGrid></CountriesGrid>
            </CountriesProvider>
          </div>
        </main>
      </ThemeProvider>
  )
}

export default App
