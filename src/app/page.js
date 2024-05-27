import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams?.genre || "fetchTrending";

  let endpoint;
  if (genre === "fetchTopRated") {
    endpoint = `/movie/top_rated`;
  } else {
    endpoint = `/trending/all/week`;
  }

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}&language=en-US&page=1`,
      { next: { revalidate: 10000 } }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    const results = data.results;

    return (
      <div>
        <Results results={results} />
      </div>
    );
  } catch (error) {
    console.error(error);
    return (
      <div>
        <p>Error fetching data: {error.message}</p>
      </div>
    );
  }
}
