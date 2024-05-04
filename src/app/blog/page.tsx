import Image from 'next/image';

export default function Home() {
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
            <section className='container mx-auto max-w-5xl flex flex-col items-center text-center justify-center py-4 px-4 sm:px-2 mb-10'>
                <h2 className='text-4xl sm:text-3xl font-bold text-gray-900 dark:text-white'>All Articles</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'>
                    <div>
                        <Image src='https://via.placeholder.com/640' alt='Article 1' width={640} height={360} className='object-cover' />
                        <h3 className='text-2xl sm:text-xl font-bold text-gray-900 dark:text-white mt-4'>Article 1</h3>
                        <p className='text-gray-500 dark:text-gray-400'>This is a short description of Article 1.</p>
                    </div>
                    <div>
                        <Image src='https://via.placeholder.com/640' alt='Article 2' width={640} height={360} className='object-cover' />
                        <h3 className='text-2xl sm:text-xl font-bold text-gray-900 dark:text-white mt-4'>Article 2</h3>
                        <p className='text-gray-500 dark:text-gray-400'>This is a short description of Article 2.</p>
                    </div>
                    <div>
                        <Image src='https://via.placeholder.com/640' alt='Article 1' width={640} height={360} className='object-cover' />
                        <h3 className='text-2xl sm:text-xl font-bold text-gray-900 dark:text-white mt-4'>Article 1</h3>
                        <p className='text-gray-500 dark:text-gray-400'>This is a short description of Article 1.</p>
                    </div>
                    <div>
                        <Image src='https://via.placeholder.com/640' alt='Article 2' width={640} height={360} className='object-cover' />
                        <h3 className='text-2xl sm:text-xl font-bold text-gray-900 dark:text-white mt-4'>Article 2</h3>
                        <p className='text-gray-500 dark:text-gray-400'>This is a short description of Article 2.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}