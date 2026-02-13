import { LanguageProvider } from './context/LanguageContext';
import Router from './router/Router';
import './styles/global.css';

function App() {
  return (
    <LanguageProvider>
      <Router />
    </LanguageProvider>
  );
}

export default App;