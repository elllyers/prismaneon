type Words = {
  mainWord: string;
  minWord: string;
};

export function MemoTransaction({ mainWord, minWord }: Words) {
  return (
    <>
      <h1 className="font-semibold text-2xl transition">
        <span className="sr-only">{mainWord}</span>
        <span
          aria-hidden="true"
          className="block overflow-hidden group relative"
        >
          <span className="inline-block transition-all duration-300 ease-in-out group-hover:-translate-y-full">
            {mainWord.split("").map((letter, index) => (
              <span
                key={index}
                className="inline-block"
                style={{ transitionDelay: `${index * 25}ms` }}
              >
                {letter == " " ? "\u00A0" : letter}
              </span>
            ))}
          </span>
          <span className="inline-block absolute left-0 top-0 transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
            {minWord.split("").map((letter, index) => (
              <span
                key={index}
                className="inline-block"
                style={{ transitionDelay: `${index * 25}ms` }}
              >
                {letter}
              </span>
            ))}
          </span>
        </span>
      </h1>
    </>
  );
}
