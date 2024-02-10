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
            <li>
              <a href='#' className='text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'>Contact</a>
            </li>
          </ul>
        </nav>
        {/* Add your social links here */}
      </header>


      <main className='container mx-auto max-w-5xl flex flex-col items-center text-center justify-center py-4 px-4 sm:px-2 flex-grow  h-[60vh]'>
        <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 track dark:text-white'>I am a software engineer with extensive experience in various aspects of software development</h2>
        {/* Add your social links here */}
      </main>

      {/* add article section */}
      <section className='container mx-auto max-w-5xl flex flex-col items-center text-center justify-center py-4 px-4 sm:px-2 mb-10'>
        <h2 className='text-4xl sm:text-3xl font-bold text-gray-900 dark:text-white'>Latest Articles</h2>
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
        <div className='mt-8'>
          <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>Click here for more articles</button>
        </div>
      </section>
      {/* add article section end*/}

      {/* add skills*/}
      <section className='container mx-auto max-w-5xl flex flex-col items-center text-center justify-center py-4 px-4 sm:px-2 mb-10'>
        <h2 className='text-4xl sm:text-3xl font-bold text-gray-900 dark:text-white'>Skills</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'>
          <div>
            <h3 className='text-2xl sm:text-xl font-bold text-gray-900 dark:text-white mt-4'>Programming Languages</h3>
            <p className='text-gray-500 dark:text-gray-400'>Node.js, JavaScript, TypeScript</p>
          </div>
          <div>
            <h3 className='text-2xl sm:text-xl font-bold text-gray-900 dark:text-white mt-4'>Web Frameworks and Libraries</h3>
            <p className='text-gray-500 dark:text-gray-400'>Express.js, Laravel, Symfony, Angular, React.js, Next.js</p>
          </div>
          <div>
            <h3 className='text-2xl sm:text-xl font-bold text-gray-900 dark:text-white mt-4'>CSS Frameworks</h3>
            <p className='text-gray-500 dark:text-gray-400'>Tailwind CSS, Bootstrap CSS</p>
          </div>
          <div>
            <h3 className='text-2xl sm:text-xl font-bold text-gray-900 dark:text-white mt-4'>Web Technologies</h3>
            <p className='text-gray-500 dark:text-gray-400'>HTML, CSS</p>
          </div>
          <div>
            <h3 className='text-2xl sm:text-xl font-bold text-gray-900 dark:text-white mt-4'>Databases</h3>
            <p className='text-gray-500 dark:text-gray-400'>MySQL, MongoDB, PostgreSQL, Redis</p>
          </div>
          <div>
            <h3 className='text-2xl sm:text-xl font-bold text-gray-900 dark:text-white mt-4'>Containerization & Orchestration</h3>
            <p className='text-gray-500 dark:text-gray-400'>Docker, Kubernetes</p>
          </div>
          <div>
            <h3 className='text-2xl sm:text-xl font-bold text-gray-900 dark:text-white mt-4'>Cloud Services</h3>
            <p className='text-gray-500 dark:text-gray-400'>AWS, GCP, Terraform</p>
          </div>
          <div>
            <h3 className='text-2xl sm:text-xl font-bold text-gray-900 dark:text-white mt-4'>DevOps</h3>
            <p className='text-gray-500 dark:text-gray-400'>CI/CD, Git</p>
          </div>
          <div>
            <h3 className='text-2xl sm:text-xl font-bold text-gray-900 dark:text-white mt-4'>Cloud Computing</h3>
            <p className='text-gray-500 dark:text-gray-400'>AWS</p>
          </div>
          <div>
            <h3 className='text-2xl sm:text-xl font-bold text-gray-900 dark:text-white mt-4'>Infrastructure as Code</h3>
            <p className='text-gray-500 dark:text-gray-400'>Terraform</p>
          </div>
        </div>
      </section>

      {/* add project section */}
      <section className='container mx-auto max-w-5xl flex flex-col items-center text-center justify-center py-4 px-4 sm:px-2 mb-10'>
        <h2 className='text-4xl sm:text-3xl font-bold text-gray-900 dark:text-white'>Projects</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'>
          <div>
            <Image src='https://via.placeholder.com/640' alt='Project 1' width={640} height={360} className='object-cover' />
            <h3 className='text-2xl sm:text-xl font-bold text-gray-900 dark:text-white mt-4'>Project 1</h3>
            <p className='text-gray-500 dark:text-gray-400'>This is a short description of Project 1.</p>
          </div>
          <div>
            <Image src='https://via.placeholder.com/640' alt='Project 2' width={640} height={360} className='object-cover' />
            <h3 className='text-2xl sm:text-xl font-bold text-gray-900 dark:text-white mt-4'>Project 2</h3>
            <p className='text-gray-500 dark:text-gray-400'>This is a short description of Project 2.</p>
          </div>
        </div>
      </section>
      <section className='container mx-auto max-w-5xl flex flex-col items-center text-center justify-center py-4 px-4 sm:px-2 mb-8'>
        <h2 className='text-4xl sm:text-3xl font-bold text-gray-900 dark:text-white'>Contact Me</h2>
        <div className='mt-8'>
          <p className='text-gray-500 dark:text-gray-400'>Email: nimatullah.razmjo@gmail.com</p>
          <p className='text-gray-500 dark:text-gray-400'>Phone: (412) 327-3265</p>
          <div className='flex space-x-4 mt-4 align-center'>
            {/* Replace with your actual social links */}
            <a href='#' className='text-blue-500 hover:text-blue-600'>LinkedIn</a>
            <a href='#' className='text-blue-500 hover:text-blue-600'>GitHub</a>
            <a href='#' className='text-blue-500 hover:text-blue-600'>Twitter</a>
          </div>
        </div>
      </section>
      <footer className='container mx-auto max-w-5xl flex justify-between py-4 px-4 sm:px-2'>
        <p className='text-gray-500 dark:text-gray-400'>© {new Date().getFullYear()} Nimatullah Razmjo</p>
        {/* Add your footer links here */}
      </footer>
    </div>
  );
}