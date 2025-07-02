// REACT IMPORTS
import { use, useState, useEffect, useRef } from "react";

// ASSETS
import { result } from "../assets";

import "../styles/result.css";
import { NotesContext } from "../context/NotesContex";
import { calculateAverage } from "../utils/functions";
import RESULT from "../PDF/RESULT";
import Button from "../components/Button";
import { useReactToPrint } from "react-to-print";
import withResultSplashScreen from "../hoc/withResultSplashScreen";
import Breadcrumb from "../components/Breadcrumb";

function Result() {
  const [average, setAverage] = useState(0);
  const { notes } = use(NotesContext);

  const documentRef = useRef(null);

  useEffect(() => {
    setAverage(calculateAverage(notes));
  }, [average, notes]);

  const handleDownload = useReactToPrint({ contentRef: documentRef });

  return (
    <main className="template md:h-dvh w-full grid md:grid-rows-1 grid-cols-1 md:grid-cols-[1.5fr_2fr] bg-white text-black max-md:font-black relative overflow-hidden">
      {/* Texts */}
      <div className="overflow-auto flex flex-col justify-start items-start gap-5 mobile-result p-5 max-md:h-dvh">
        <div className="blur-card p-5 flex flex-col justify-center items-start gap-2 max-md:backdrop-blur-md max-md:bg-white/40 w-full rounded overflow-hidden">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Template", href: "/template" },
              { label: "Result", href: `/result` },
            ]}
            className={" max-md:bg-white"}
          />
          {/* TABLE */}
          <p>
            Here is your result ! <span className="motion-emoji">✨</span>
          </p>
          {/* Replace your table with this responsive version */}
          <div className="w-full overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-primary/70">
                <tr className="[&_th]:p-2 [&_th]:whitespace-nowrap divide-x divide-gray-100">
                  <th className="sticky left-0 z-10 bg-primary/70">
                    Subject Code
                  </th>
                  <th>Note</th>
                  <th>Formatted Note</th>
                  <th>Credit</th>
                  <th>Grade</th>
                  <th>Mention</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {notes.map((note, index) => (
                  <tr
                    key={index}
                    className="[&_td]:p-2 [&_td]:whitespace-nowrap"
                  >
                    <td className="sticky left-0 z-10 bg-white font-bold">
                      {note.subjectCode}
                    </td>
                    <td>{note.note}</td>
                    <td>{note.formattedNote}</td>
                    <td>{note.credit}</td>
                    <td>{note.grade}</td>
                    <td>{note.mention}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="w-auto mt-10 flex bg-white ">
            <span>Average - </span>
            <span className="font-bold gradient__text">{average}</span> /4
          </div>
          <div>
            <Button
              text="Calculate"
              handleClick={() => calculateAverage(notes)}
            />
          </div>
          <div>
            <Button text="Download Result" handleClick={handleDownload} />
          </div>

          <div className="text-black/60 border-t border-gray-200 pt-2 mt-10">
            Developed with love by{" "}
            <a
              href="http://essijunior.com"
              className="text-secondary hover:text-primary"
            >
              @essijunior
            </a>
          </div>
        </div>
      </div>

      {/* Illustration */}
      <div className="hidden md:flex justify-center items-center bg-secondary/20">
        <img
          src={result}
          alt="home"
          className="w-[100%] h-[100%] object-cover"
        />
      </div>

      <div style={{ display: "none" }}>
        <div className="w-full" ref={documentRef}>
          <RESULT notes={notes} average={average} />
        </div>
      </div>
    </main>
  );
}

// export default Result;
export default withResultSplashScreen(Result);
