// REACT IMPORTS

// ASSETS
import { useNavigate, useParams } from "react-router-dom";
import { info, calculation } from "../assets";

import "../styles/calculation.css";
import { calculatorDataByTemplate } from "../utils/data";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import Input from "../components/Input";
import Select from "../components/Select";
import { noteGradeMentionGenerator } from "../utils/functions";
import { use } from "react";
import { NotesContext } from "../context/NotesContex";
import Breadcrumb from "../components/Breadcrumb";

function Calculation() {
  const { setNotes } = use(NotesContext);
  const navigate = useNavigate();

  const params = useParams();
  const data = calculatorDataByTemplate[params.id];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSpace = (e) => {
    if (e.code === "Space") {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  // Initialize React Hook Form
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      subjects: [{ code: "", average: "", credit: "3" }],
    },
  });

  // Initialize field array
  const { fields, append, remove } = useFieldArray({
    control,
    name: "subjects",
  });

  // Handle form submission
  const onSubmit = (data) => {
    const subjectData = data.subjects;
    let formattedData = [];

    for (let index = 0; index < subjectData.length; index++) {
      const averageData = noteGradeMentionGenerator(subjectData[index].average);

      //   Append object with subject code
      const subjectDataWithCode = {
        ...averageData,
        subjectCode: subjectData[index].code,
        note: subjectData[index].average,
        credit: subjectData[index].credit,
      };
      formattedData.push(subjectDataWithCode);
    }

    setNotes(formattedData);
    setIsModalOpen(false);
    navigate("/result");
  };

  // Add new subject
  const addSubject = () => {
    append({ code: "", average: "", credit: "3" });
  };

  return (
    <main
      className="template md:h-dvh w-full grid md:grid-rows-1 grid-cols-1 md:grid-cols-[1.5fr_2fr] bg-white text-black max-md:font-black relative overflow-hidden"
      onKeyDown={handleSpace}
      tabIndex={0}
      autoFocus
    >
      {/* Texts */}
      <div className="overflow-auto flex justify-start items-center max-md:h-dvh mobile-calculation max-md:p-5">
        <div className="blur-card p-5 flex flex-col justify-center items-start gap-2 max-md:backdrop-blur-md max-md:bg-white/40 max-md:w-full rounded relative">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Template", href: "/template" },
              { label: "Calculation", href: `/calculation/${params.id}` },
            ]}
            className={" max-md:bg-white "}
          />
          {params.id !== "custom" && (
            <p>
              Here we go ! <span className="motion-emoji">🚀</span>
            </p>
          )}
          <p className="mt-8">You choosed</p>
          <p className="flex gap-2 relative">
            <span className="overflow-hidden whitespace-nowrap text-ellipsis font-black md:text-[35px] text-[25px] gradient__text ">
              {data.title}
            </span>

            <span className="tooltip inline-flex items-center justify-center cursor-pointer">
              <img
                src={info}
                alt="info"
                className="w-5 hover:opacity-80 transition-opacity"
              />
              <span className="tooltip-text absolute -right-5 bottom-[calc(100%+10px)] max-sm:w-[100%] w-[320px] max-sm:text-[11px] text-[12px]">
                {data.description}
              </span>
            </span>
          </p>

          {params.id === "custom" && (
            <div>
              <p className="max-w-[90%]">{data.hint}</p>
              <div className="grid gap-1 mt-10 font-semibold">
                <a
                  href={`tel:${data.contact}`}
                  className="text-secondary hover:opacity-80 transition-opacity"
                >
                  Tel: {data.contact}
                </a>
              </div>
            </div>
          )}
          {/* Action */}

          {params.id !== "custom" && (
            <div className="relative flex mt-10">
              <span className="absolute right-5 -top-[40%] text-gray-700 text-[10px]">
                [ Space ]
              </span>
              <Button
                text={"Calculate my average !"}
                handleClick={() => setIsModalOpen(true)}
              />
            </div>
          )}
        </div>
      </div>

      {/* Illustration */}
      <div className="hidden md:flex justify-center items-center bg-secondary/20">
        <img
          src={calculation}
          alt="home"
          className="w-[100%] h-[100%] object-cover"
        />
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Calculate Your Average"
        calculateAverage={handleSubmit(onSubmit)}
      >
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium text-blue-800">How it works:</h3>
            <p className="mt-1 text-sm text-blue-700">
              Enter your grades and credit hours to calculate your average. The
              system will automatically compute your results.
            </p>
          </div>
          // In your Modal component, replace the form with:
          <form className="space-y-4">
            <div className="space-y-4 max-h-[40vh] overflow-y-auto p-2">
              {fields.map((field, index) => (
                <div
                  key={field.id}
                  className="flex justify-between gap-2 items-center"
                >
                  {/* Subject Code */}
                  <Input
                    label="Subject Code"
                    name="code"
                    register={register}
                    errors={errors}
                    index={index}
                    type="text"
                  />

                  {/* Average */}
                  <Input
                    label="Average /100"
                    name="average"
                    register={register}
                    errors={errors}
                    index={index}
                    type="number"
                  />

                  {/* Credits */}
                  <Select
                    label="Credits"
                    name="credit"
                    register={register}
                    errors={errors}
                    index={index}
                    className="h-full"
                    options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                  />

                  {/* Remove Button */}
                  <div className="col-span-2 flex items-end h-[60px]">
                    {fields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="p-2 text-red-500 hover:text-red-700"
                        aria-label="Remove subject"
                      >
                        {/* <XMarkIcon className="h-5 w-5" /> */}✕
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-2">
              <button
                type="button"
                onClick={addSubject}
                className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                + Add Another Subject
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </main>
  );
}

export default Calculation;
