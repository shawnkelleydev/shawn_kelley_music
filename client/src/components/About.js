import { bio } from "./data";
import hs from "./img/headshot.png";
import ReactMarkdown from "react-markdown";

export default function About() {
  return (
    <section className="About">
      <div>
        <img src={hs} alt="headshot of Shawn Kelley" />
      </div>
      <div>
        <span>
          <h1>About Shawn</h1>
          {/* {bio.map((par, i) => (
            <ReactMarkdown children={par} key={i} />
          ))} */}
          <p>
            Shawn Kelley is a musician, composer, and software engineer praised
            for his innovative compositions for tuba quartet, in which he loves
            to blend fun, beauty, and meaning.
          </p>
          <p>
            Kelley’s first published work,
            <em>Urban Suite</em>, was premiered at Eastman School of Music in
            2009. It was a finalist for the 2010 International Tuba Euphonium
            Association Harvey Phillips Award for Excellence in Composition, was
            utilized in 2010 International Tuba Euphonium Conference Quartet
            Competition Semi-Final Round, and it continues to be played around
            the world.
          </p>
          <p>
            As a performer, Kelley has appeared with GRAMMY®-award winners Doc
            Severinsen, Kenny Rogers, and Charlie Daniels. As a member of the
            University of Tennessee’s Pride of the Southland Marching Band, he
            performed for President George W. Bush in his second inauguration
            parade, hundreds of thousands of football bands across the eastern
            half of the United States, and many curious onlookers in Ireland.
          </p>
          <p>
            Kelley resides in the northern Denver metro area with his wife,
            flutist Whitney Kelley, two beautiful daughters, and English
            Springer Spaniel.
          </p>
        </span>
      </div>
    </section>
  );
}
