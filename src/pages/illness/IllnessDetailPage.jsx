import { useParams } from "react-router-dom";
import IllnessData from "../../datas/illnessItems.json";
import { useState, useEffect } from "react";
import QuizBoy from "../../assets/images/quiz-boy.png";
import QuizBoyCorrectAnswer from "../../assets/images/quiz-boy-correct-answer.png";
import QuizBoyWrongAnswer from "../../assets/images/quiz-boy-wrong-answer.png";

export default function IllnessDetailPage() {
  const { slug } = useParams();

  const [data, setData] = useState({});

  const [correctChoise, setCorrectChoise] = useState(null);

  const [quizImage, setQuizImage] = useState(QuizBoy);

  useEffect(() => {
    const fetchData = () => {
      const result = IllnessData.find((item) => item.slug === slug);
      if (result) {
        setData(result);
      }
    };

    fetchData();
  }, [slug]);

  const handleClickOption = (isCorrect) => {
    if (isCorrect) {
      setCorrectChoise("Yes");
      setQuizImage(QuizBoyCorrectAnswer);
    } else {
      setCorrectChoise("No");
      setQuizImage(QuizBoyWrongAnswer);
    }
  };

  return (
    <div className="text-white my-12 md:my-0 font-semibold">
      <div className="flex justify-center mt-40 md:mt-24">
        <div className="stack">
          <div className="card text-center font-boogaloo border max-w-2xl min-w-64 min-h-28 bg-base-100">
            <img
              src={`./${data.image}`}
              alt={data.image}
              className="bg-secondary absolute -translate-y-20 md:-translate-y-5 md:-translate-x-5 w-28 h-28 z-10 rounded-full border-[6px] border-white"
            />
            <div className="card-body">
              <h1
                className="text-3xl text-black md:ml-16 font-boogaloo"
                style={{ color: data.color }}
              >
                {data.title}
              </h1>
            </div>
          </div>
          <div className="text-center border card max-w-2xl min-w-64 min-h-28 bg-base-100">
            <div className="card-body"></div>
          </div>
          <div className="text-center border card max-w-2xl min-w-64 min-h-28 bg-base-100 shadow-card">
            <div className="card-body"></div>
          </div>
        </div>
      </div>
      <div className="bg-white mt-8 p-8 m-auto max-w-3xl shadow-card rounded-xl">
        <h3 className="text-xl font-bold" style={{ color: data.color }}>
          {data.description}
        </h3>
      </div>
      <div className="bg-white mt-8 p-8 m-auto max-w-3xl shadow-card rounded-xl">
        <div
          className="text-black"
          dangerouslySetInnerHTML={{ __html: data.content }}
        ></div>
      </div>
      <div className="relative bg-white mt-8 p-8 m-auto max-w-3xl text-black shadow-card rounded-xl">
        <img
          src={quizImage}
          alt="quiz-boy"
          className="absolute right-3 top-0 -translate-y-12 w-28 h-28 z-10"
        />
        <h3 className="text-xl">Riddle me this!</h3>
        <p className="my-2">{data.quiz?.question}</p>
        <div className="flex flex-col gap-5">
          {data.quiz?.options.map((option, index) => {
            const optionKey = Object.keys(option)[0];
            const optionText = option[optionKey];
            const isCorrect = option.isCorrect;

            return (
              <div
                key={index}
                className="flex gap-2 items-center h-12 bg-base-300 cursor-pointer active:ring active:ring-violet-300"
                onClick={() => handleClickOption(isCorrect)}
              >
                <div className="flex items-center justify-center w-12 h-full bg-black/40">
                  {optionKey}
                </div>
                <div>{optionText}</div>
              </div>
            );
          })}
        </div>
        {correctChoise === "Yes" && <p>Oh yeahhh..you got it right!</p>}
        {correctChoise === "No" && <p>Oh noooo..you got it wrong!</p>}
      </div>
    </div>
  );
}
