import TopBar from "./sections/TopBar";
import QuizContainer from "./sections/QuizContainer";
import { useState } from "react";
import Hero from "./sections/Hero";

function App() {
  const [percentage, setPercentage] = useState(0);
  const [firstItemRef, setFirstItemRef] = useState<HTMLDivElement | null>(null);

  function handleRefs(refs: (HTMLDivElement | null)[]) {
    setFirstItemRef(refs[0]);
  }

  return (
    <div className="bg-gray-50/30">
      <TopBar percentage={percentage} />
      <Hero firstItemRef={firstItemRef !== null ? firstItemRef : undefined} />
      <QuizContainer
        onRefsPopulated={handleRefs}
        onProgressChange={setPercentage}
      />
    </div>
  );
}

export default App;
