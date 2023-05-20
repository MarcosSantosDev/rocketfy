import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={{}}>
      <div>
        <h1>Meu aplicativo</h1>
        <p>Este é um exemplo de como utilizar temas globais com styled components.</p>
        <button>Clique aqui</button>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
