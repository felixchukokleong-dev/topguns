import Deploy from "./components/Deploy";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Models from "./components/Models";
import Nav from "./components/Nav";
import Objections from "./components/Objections";
import Problem from "./components/Problem";
import Protocol from "./components/Protocol";
import Roster from "./components/Roster";
import Scoreboard from "./components/Scoreboard";
import Ticker from "./components/Ticker";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      {/* ambient war-room layers */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <div className="bg-war-grid absolute inset-0" />
        <div className="absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full bg-flare/10 blur-[150px]" />
        <div className="absolute -right-40 top-1/3 h-[480px] w-[480px] rounded-full bg-cash/[0.05] blur-[130px]" />
        <div className="absolute bottom-0 left-1/4 h-[380px] w-[520px] rounded-full bg-flare/[0.04] blur-[120px]" />
      </div>
      <div className="noise-overlay" aria-hidden="true" />

      <Ticker />
      <Nav />

      <main className="relative z-10">
        <Hero />
        <Problem />
        <Roster />
        <Protocol />
        <Scoreboard />
        <Models />
        <Objections />
        <Deploy />
      </main>

      <Footer />
    </div>
  );
}
