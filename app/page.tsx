import HomeVoteRatio from '@/components/home/home-vote-ratio';
import HomeCandidate from '@/components/home/home-candidate';

function Home() {
  return (
    <main className="container">
      <HomeVoteRatio />
      <HomeCandidate />
    </main>
  );
}

export default Home;
