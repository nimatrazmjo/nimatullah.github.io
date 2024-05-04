export default function AboutMe() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-gray-900">
            <header className='container mx-auto max-w-5xl flex justify-between py-4 px-4 sm:px-2'>
                <h1 className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white'>Nimatullah Razmjo</h1>
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
                    </ul>
                </nav>
            </header>
            <main className='container mx-auto max-w-5xl flex flex-col items-center text-center justify-center py-4 px-4 sm:px-2 flex-grow  h-[60vh]'>

            </main>
        </div>
    );
}