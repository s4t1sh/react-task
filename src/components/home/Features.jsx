import GradientText from "../../universal/GradientText";

const features = [
  { title: "טכנולוגיה", desc: "בינה מלאכותית שעובדת בשבילכם, לא להפך.", image: "chip" },
  { title: "חיסכון", desc: "בזמן, באנרגיה ובכסף שמגיע לכם.", image: "money" },
  { title: "פשטות", desc: "הופכים תהליכים בירוקרטיים מסובכים לקלים וברורים.", image: "gear" },
];

export default function Features() {
  return (
    <section className="lg:max-w-5xl mx-auto lg:py-16 text-center">
      <h2 className="text-3xl mb-6 lg:mb-10">
        <span>כל הסיבות</span> <GradientText text={"לבחור בנו"}/>
      </h2>

      <div className="grid md:grid-cols-3 lg:gap-6">
        {features.map((f, i) => (
          <div key={i} className="p-4 lg:p-6 rounded-xl flex flex-col gap-1">
            <div className="bg-primary p-2 w-fit mx-auto rounded-lg"><img src={`/icons/${f.image}.svg`} alt={f.title} className="w-8 h-8 lg:w-12 lg:h-12" /></div>
            <h3 className="font-semibold mt-2">{f.title}</h3>
            <p className="text-gray-500 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
