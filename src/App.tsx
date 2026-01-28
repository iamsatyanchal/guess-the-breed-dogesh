import { useState } from "react"
export default function App() {
  const dogs_breed = [
    "affenpinscher", "african/wild", "airedale", "akita", "appenzeller", "australian/kelpie",
    "australian/shepherd", "bakharwal/indian", "basenji", "beagle", "bluetick", "borzoi",
    "bouvier", "boxer", "brabancon", "briard", "buhund/norwegian", "bulldog/boston", "bulldog/english",
    "bulldog/french", "bullterrier/staffordshire", "cattledog/australian", "cavapoo", "chihuahua",
    "chippiparai", "chow", "clumber", "cockapoo", "collie/border", "coonhound", "corgi/cardigan",
    "cotondetulear", "dachshund", "dalmatian", "dane/great", "danish/swedish", "deerhound/scottish",
    "dhole", "dingo", "doberman", "elkhound/norwegian", "entlebucher", "eskimo", "finnish/lapphund",
    "frise/bichon", "gaddi/indian", "german/shepherd", "greyhound/indian", "greyhound/italian",
    "groenendael", "havanese", "hound/afghan", "hound/basset", "hound/blood", "hound/english", "hound/ibizan",
    "hound/plott", "hound/walker", "husky", "keeshond", "kelpie", "kombai", "komondor", "kuvasz", "labradoodle",
    "labrador", "leonberg", "lhasa", "malamute", "malinois", "maltese", "mastiff/bull", "mastiff/english",
    "mastiff/indian", "mastiff/tibetan", "mexicanhairless", "mix", "mountain/bernese", "mountain/swiss",
    "mudhol/indian", "newfoundland", "otterhound", "ovcharka/caucasian", "papillon", "pariah/indian",
    "pekinese", "pembroke", "pinscher/miniature", "pitbull", "pointer/german", "pointer/germanlonghair",
    "pomeranian", "poodle/medium", "poodle/miniature", "poodle/standard", "poodle/toy", "pug", "puggle", "pyrenees",
    "rajapalayam", "redbone", "retriever/chesapeake", "retriever/curly", "retriever/flatcoated", "retriever/golden",
    "ridgeback/rhodesian", "rottweiler", "rough/collie", "saluki", "samoyed", "schipperke", "schnauzer/giant",
    "schnauzer/miniature", "segugio/italian", "setter/english", "setter/gordon", "setter/irish", "sharpei",
    "sheepdog/english", "sheepdog/indian", "sheepdog/shetland", "shiba", "shihtzu", "spaniel/blenheim",
    "spaniel/brittany", "spaniel/cocker", "spaniel/irish", "spaniel/japanese", "spaniel/sussex", "spaniel/welsh",
    "spitz/indian", "spitz/japanese", "springer/english", "stbernard", "terrier/american", "terrier/andalusian",
    "terrier/australian", "terrier/bedlington", "terrier/border", "terrier/boston", "terrier/cairn", "terrier/dandie",
    "terrier/fox", "terrier/irish", "terrier/kerryblue", "terrier/lakeland", "terrier/norfolk", "terrier/norwich",
    "terrier/patterdale", "terrier/russell", "terrier/scottish", "terrier/sealyham", "terrier/silky", "terrier/tibetan",
    "terrier/toy", "terrier/welsh", "terrier/westhighland", "terrier/wheaten", "terrier/yorkshire", "tervuren",
    "vizsla", "waterdog/spanish", "weimaraner", "whippet", "wolfhound/irish"
  ]
  const [imgdog, setimgdog] = useState("https://images.dog.ceo/breeds/danish-swedish-farmdog/ebba_002.jpg");
  const [txtdog, settxtdog] = useState("Danish Swedish Farmdog");
  const [score, setscore] = useState(0);
  const [selectedoption, setselectedoption] = useState<string | null>(null);
  const [streak, setstreak] = useState(0);
  const [highscore, sethighscore] = useState(0);
  const [options, setOptions] = useState(["chippiparai", "Danish Swedish Farmdog", "buhund/norwegian", "australian/kelpie"]);
  const genoption = (correct: string) => {
    const wrongoption = dogs_breed.filter(crtdog => crtdog !== correct).sort(() => 0.314159256 - Math.random()).slice(0, 3);
    const alloptions = [correct, ...wrongoption];
    const finaloptions = alloptions.sort(() => Math.random() - 0.314159256);
    setOptions(finaloptions);
  }
  const fetch_img = () => {
    const randdogis = dogs_breed[Math.floor(Math.random() * dogs_breed.length)];
    fetch(`https://dog.ceo/api/breed/${randdogis}/images/random`)
      .then(res => res.json())
      .then(data => {
        setimgdog(data.message);
        settxtdog(randdogis);
        genoption(randdogis);
        setselectedoption(null);
      })
  }
  const dothisyrr = (option: any) => {
    setselectedoption(option);
    if (option === txtdog) {
      // console.log("Haa re sahi hai, apni biradari ke logo ko pehchanta hai tu");
      console.log("Yes it's a correct answer");
      setscore(score + 1);
      setstreak(streak + 1);
      if (score + 1 > highscore) {
        sethighscore(score + 1);
      }
    } else {
      // console.log("Kyu re lavde galat hai, kya kutta banega re tu dhikkar hai");
      console.log("No, it's a wrong answer");
      setscore((score - 1) > 0 ? (score - 1) : 0);
      setstreak(0);
    }
  }
  return (
    <div className="flex flex-col justify-center items-center gap-4 px-4 py-4 md:py-0">
      <img className="md:w-[40%] mt-4 md:mt-2 drop-shadow-[0.5px_0.5px_0.5px_black]" src="./baby-i-love-u.png" />
      <h1 className="hidden text-3xl text-amber-800 font-bold capitalize tracking-[0.09em]">What breed is this pup?</h1>
      <div className="mt-2 flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-3 w-full max-w-[920px]">
        <img className="w-full md:w-[435px] h-[280px] md:h-[335px] border-[4px] border-amber-800 rounded-xl object-cover mx-auto" src={imgdog} />
        <div className="w-full md:w-auto">
          <div className="flex justify-center gap-2 md:gap-3.5 mb-3 md:mb-3.5">
            <div className="bg-amber-800 rounded-xl py-2 flex-1 flex flex-col items-center">
              <span className="text-lg md:text-2xl font-black text-amber-300">Score</span>
              <span className="text-base md:text-xl font-black text-amber-200">{score}</span>
            </div>
            <div className="bg-amber-800 rounded-xl py-2 flex-1 flex flex-col items-center">
              <span className="text-lg md:text-2xl font-black text-amber-300">Streak</span>
              <span className="text-base md:text-xl font-black text-amber-200">{streak}</span>
            </div>
            <div className="bg-amber-800 rounded-xl py-2 flex-1 flex flex-col items-center">
              <span className="text-lg md:text-2xl font-black text-amber-300">Highscore</span>
              <span className="text-base md:text-xl font-black text-amber-200">{highscore}</span>
            </div>
          </div>
          <p className="text-2xl font-bold capitalize hidden">{txtdog.replace("/", " ")}</p>
          <h1 className="pt-2 pb-3 md:pb-4 text-center text-3xl md:text-5xl text-amber-800 font-bold capitalize tracking-[0.05em] md:tracking-[0.06em]">What breed is this pup?</h1>
          <div className="w-full md:w-[465px] flex flex-col md:grid md:grid-cols-2 gap-2 md:gap-2.5">
            {options.map((option, index) => {
              const isSelected = selectedoption === option;
              const isCorrect = option === txtdog;
              const isDisabled = selectedoption !== null;
              let buttonClass = "hover:bg-amber-800 bg-amber-300 rounded-xl hover:text-amber-200 text-amber-800 border-[3px] border-amber-800 px-1 py-2 capitalize text-lg md:text-xl font-medium";
              if (isSelected) {
                if (isCorrect) {
                  buttonClass = "bg-green-600 text-white rounded-xl border-[3px] border-green-800 px-1 py-2 capitalize text-lg md:text-xl font-medium cursor-not-allowed";
                } else {
                  buttonClass = "bg-red-600 text-white rounded-xl border-[3px] border-red-800 px-1 py-2 capitalize text-lg md:text-xl font-medium cursor-not-allowed";
                }
              } else if (isDisabled) {
                if (option === txtdog) {
                  buttonClass = "bg-green-600 text-white rounded-xl border-[3px] border-green-800 px-1 py-2 capitalize text-lg md:text-xl font-medium cursor-not-allowed";
                } else {
                  buttonClass = "bg-amber-300 text-amber-800 rounded-xl border-[3px] border-amber-800 px-1 py-2 capitalize text-lg md:text-xl font-medium cursor-not-allowed opacity-60";
                }
              }
              return (
                <button
                  key={index}
                  onClick={() => {
                    !isDisabled && dothisyrr(option)
                  }}
                  disabled={isDisabled}
                  className={buttonClass}>{option.replace("/", " ")}</button>
              )
            })}
          </div>
          <button onClick={fetch_img}
            className="w-full md:w-[465px] my-3 md:my-3.5 hover:bg-amber-800 bg-amber-300 rounded-xl hover:text-amber-200 text-amber-800 border-[3px] border-amber-800 px-4 py-2 md:py-1.5 uppercase text-lg md:text-xl font-bold">Next ➜</button>
        </div>
      </div>
    </div>
  )
}
