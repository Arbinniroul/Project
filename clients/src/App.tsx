import {  BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './components/logincomponents/theme-provider';
import MainLayout from './layouts/MainLayout';
import { Toaster } from './components/ui/toaster';
import { Chatbot } from './components/common/Chatbot';
function App() {

  return (
    <ThemeProvider defaultTheme="system" storageKey="climate-grow-theme">
      <Router>
        <MainLayout />
        <Chatbot />
        <Toaster/>
      </Router>
    </ThemeProvider>
  );
}

export default App;