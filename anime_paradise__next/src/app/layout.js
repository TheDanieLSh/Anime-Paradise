import { Provider, useDispatch } from 'react-redux'
import { store } from './redux/reduxStateStore'
import './global.css'
import SearchBar from './components/SearchBar'
import Logo from './components/Logo'
import Menu from './components/Menu'
import Bottom from './components/Bottom'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])

  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <header>
            <SearchBar />
            <Logo />
            <Menu />
          </header>
          <main>
            {children}
          </main>
          <footer>
            <Bottom />
          </footer>
        </body>
      </html>
    </Provider>
  )
}
