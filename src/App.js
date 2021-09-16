import { ButtonChangTheme } from "./components/ButtonChangTheme";
import Navbar from "./components/navbar";

import Todos from "./components/Todo/Todos";
import AuthContextProvider from "./context/AuthContext";
import ThemeContextProvider from "./context/ThemContext";

import TodoContextProvider from "./context/TodoContext";

function App() {
  return (
    <>
      <div className="App">
        <ThemeContextProvider>
          <AuthContextProvider>
            <Navbar />
            <TodoContextProvider>
              <Todos />
            </TodoContextProvider>
            <ButtonChangTheme />
          </AuthContextProvider>
        </ThemeContextProvider>
      </div>
    </>
  );
}

export default App;
