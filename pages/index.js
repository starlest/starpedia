import Head from 'next/head'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Starpedia</title>
        <meta name="description" content="Your one stop WIKI for Esports" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <main className="flex h-screen">
        <div class="m-auto">

          <h1 className="text-5xl font-extrabold text-center">
            Welcome to Starpedia
          </h1>

          <div className="text-2xl text-gray-500 text-center m-8">
            <p>One Stop WIKI for Esports</p>
            <p>You can search all Esports personnel here</p>
          </div>

          <div className="w-full bg-black">
            test
          </div>

        </div>
      </main>
    </div>
  )
}
