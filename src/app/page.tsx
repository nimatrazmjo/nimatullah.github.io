export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-gray-900">
      <header className='container mx-auto max-w-5xl flex justify-between py-4 px-4'>
        <h1 className='text-4xl font-bold text-gray-900 dark:text-white'>Nimatullah Razmjo</h1>
        <nav>
          <ul className='flex space-x-4'>
            <li>
              <a href='#' className='text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'>Home</a>
            </li>
            <li>
              <a href='#' className='text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'>About</a>
            </li>
            <li>
              <a href='#' className='text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'>Projects</a>
            </li>
            <li>
              <a href='#' className='text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'>Contact</a>
            </li>
          </ul>
        </nav>
        {/* Add your social links here */}
      </header>

      <main className='container mx-auto max-w-5xl flex flex-col items-center text-center justify-center py-4 px-4 flex-grow'>
        <h2 className='text-6xl font-bold text-gray-900 track dark:text-white'>I am a software engineer with decades of experience in software engineering</h2>
        {/* Add your social links here */}
      </main>

      <footer className='container text-center mx-auto max-w-5xl flex justify-between py-4 px-4'>
        <p className='text-gray-500 dark:text-gray-400'>© {new Date().getFullYear()} Nimatullah Razmjo</p>
        {/* Add your footer links here */}
      </footer>
    </div>
  );
}