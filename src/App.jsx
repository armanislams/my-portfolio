import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from './components/Contact';
import BuyMeCoffee from './components/BuyMeCoffee';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Enable dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-300 font-display transition-colors duration-300">
      <Sidebar />

      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Hero Section Container */}
        <div className="min-h-screen flex flex-col p-4 md:p-8">
          <Header />
          <Hero />
        </div>

        <About />
        <Education />
        <Skills />
        <Works />
        <Contact />
        <BuyMeCoffee />
        <Footer />
      </main>
    </div>
  );
}

export default App;
