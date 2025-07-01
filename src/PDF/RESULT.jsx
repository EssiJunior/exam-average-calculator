import React from "react";

function RESULT({ notes, average }) {
  return (
    <div className="overflow-auto flex flex-col justify-center items-start gap-5 max-md:h-dvh mobile-result p-5">
      <table className="w-full">
        <thead className="bg-secondary/70">
          <tr className="[&_th]:p-2  divide-x divide-gray-100">
            <th>Subject Code</th>
            <th>Note</th>
            <th>Formatted Note</th>
            <th>Credit</th>
            <th>Grade</th>
            <th>Mention</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {notes.map((note, index) => (
            <tr key={index} className="[&_td]:p-2 [&_td]:text-black">
              <td className="bg-secondary/50 font-bold">{note.subjectCode}</td>
              <td>{note.note}</td>
              <td>{note.formattedNote}</td>
              <td>{note.credit}</td>
              <td>{note.grade}</td>
              <td>{note.mention}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="w-full mt-10 flex text-black text-2xl">
        <span>Average - </span>
        <span className="font-bold gradient__text">{average}</span> /4
      </div>
    </div>
  );
}

export default RESULT;
