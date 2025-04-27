import { useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-xl text-gray-700 dark:text-gray-200"
    >
      {darkMode ? <BsSun /> : <BsMoon />}
    </button>
  );
}
