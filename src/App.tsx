import React from 'react';
import { InteractiveHero } from './components/InteractiveHero';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D2D2A] font-serif selection:bg-[#E5E0D8]">
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <article>
          <header className="mb-12 space-y-6 md:px-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] leading-[1.15] font-sans">
              Washington’s Rise Shows How Local Tournaments Can Turn Pokémon TCG Interest Into Competitive Success
            </h1>
            <p className="text-lg md:text-xl text-[#6B6B66] leading-relaxed font-sans font-normal max-w-2xl">
              Search activity, performance, and rankings all point to a stronger West Coast presence from 2024 to 2026.
            </p>
          </header>

          <InteractiveHero />

          <div className="space-y-10 text-lg md:text-xl leading-relaxed text-[#3A3A38] mt-16">
            <p className="md:px-16">
              The Pokémon Trading Card Game has grown fast in the United States during the past two years, and the growth is visible in both casual interest and organized play. In the Play! Pokémon system, Regional Championships are among the largest official events, with bigger attendance and higher Championship Point stakes than smaller tournaments. Seattle hosted the 2026 Pokémon Regional Championships from February 27 to March 1, and tournament data show that the event drew 2,231 players.
            </p>

            <p className="md:px-16">
              The first visualization, a state-level map of search interest, shows that Pokémon TCG attention is not evenly spread across the country. Western states stand out more often than states in the South or Northeast, with Washington appearing as one of the clearest hotspots in the project’s Google Trends–based index. That matters because search volume is often the earliest signal of where a hobby is gaining momentum. A map cannot explain why interest is high, but it does show where the strongest attention is concentrated.
            </p>

            <figure className="my-14 w-full bg-white p-2 md:p-4 rounded-2xl shadow-sm border border-[#E8E4DB]">
              <iframe 
                title="Search Interest by State" 
                src="https://datawrapper.dwcdn.net/8eyFD/2/" 
                style={{ width: '100%', height: '600px', border: 'none' }} 
              />
            </figure>

            <p className="md:px-16">
              The second visualization, a grouped bar chart of state performance, shows that online interest is not just a passive fandom signal. Competitive results also cluster in a small number of states. California remains the strongest state overall, but Washington places near the top tier rather than in the middle of the field, which is notable because it combines a smaller population base with a high competitive output. The chart also shows that this strength is not limited to one age bracket: both Masters and Seniors contribute to the pattern. Read together with the map, the bars suggest that the states drawing the most attention are also the ones producing the strongest tournament performance.
            </p>

            <figure className="my-14 w-full bg-white p-2 md:p-4 rounded-2xl shadow-sm border border-[#E8E4DB]">
              <iframe 
                title="Top States by National Performance" 
                src="https://datawrapper.dwcdn.net/poaO5/1/" 
                style={{ width: '100%', height: '600px', border: 'none' }} 
              />
            </figure>

            <p className="md:px-16">
              The third visualization, a bubble scatterplot, makes that relationship clearer. States with higher search-interest scores tend to post higher championship points per capita, and the larger bubbles, representing more major events, are often located toward the upper-right portion of the chart. That pattern does not prove cause and effect, but it strongly suggests that interest, tournament infrastructure, and competitive success reinforce one another. When more people search for the game, more people show up. When more people show up, organized play becomes deeper and stronger. The result is a feedback loop in which enthusiasm creates performance, and performance draws even more attention.
            </p>

            <figure className="my-14 w-full bg-white p-2 md:p-4 rounded-2xl shadow-sm border border-[#E8E4DB]">
              <iframe 
                title="Interest vs. Performance Correlation" 
                src="https://flo.uri.sh/visualisation/28192925/embed" 
                style={{ width: '100%', height: '600px', border: 'none' }} 
              />
              <figcaption className="text-center text-sm text-[#6B6B66] mt-4 font-sans">
                Interest index was created by min-max normalizing state-level search rates to a 0–10 scale.
              </figcaption>
            </figure>

            <p className="md:px-16">
              The fourth visualization, a bump chart of state rankings from 2024 to 2026, provides the clearest narrative arc. California stays stable at the top, but Washington makes the most dramatic rise, moving from 15th in 2024 to 8th in 2025 and then to 4th in 2026. The timing also lines up with a stronger tournament environment. The 2026 Seattle Regional drew 2,231 players, showing that Washington was not simply searching for Pokémon TCG more than before, but also becoming a major competitive venue.
            </p>

            <figure className="my-14 w-full bg-white p-2 md:p-4 rounded-2xl shadow-sm border border-[#E8E4DB]">
              <iframe 
                title="State Ranking Evolution" 
                src="https://flo.uri.sh/visualisation/28197586/embed" 
                style={{ width: '100%', height: '600px', border: 'none' }} 
              />
            </figure>

            <p className="md:px-16">
              Taken together, the four visuals tell one story: Pokémon TCG growth in the United States is increasingly shaped by local event ecosystems. Search interest marks where momentum begins, competitive points show where strong player bases already exist, and ranking changes reveal which states are converting that momentum into lasting results. California still sets the standard, but Washington’s rapid climb shows how a regional scene can become nationally important in only a few seasons.
            </p>
          </div>
        </article>
      </main>

      <footer className="bg-[#F2EFE9] text-[#6B6B66] py-16 mt-12 font-sans border-t border-[#E8E4DB]">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center space-y-4">
          <div className="text-base font-medium text-[#2D2D2A]">
            By <a href="https://www.linkedin.com/in/rosie-wang-a7b061390/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-blue-600 transition-colors">Rosie Wang</a>
          </div>
          <div className="text-sm space-y-1">
            <p>COMMLD 530 A</p>
            <p className="italic">For course assignment purposes only.</p>
          </div>
          <div className="w-12 h-px bg-[#D8D4CB] my-4"></div>
          <div className="text-xs space-y-2">
            <p>Data sources: Google Trends, DuelBits, ACE.com, Pokemon.com, Pokedata.ovh, LimitlessTCG.</p>
            <p>© 2026 PTCG Data Insights. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
