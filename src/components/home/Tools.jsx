import GradientText from "../../universal/GradientText";

const ToolCard = ({ title, tag, isTeaser, className, style }) => {
  const verticalHexagon =
    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

  return (
    <div
      className={`absolute group transition-all duration-500 hover:scale-105 ${className} cursor-pointer`}
      style={style}
    >
      {/* Shadow Wrapper - We can't clip the shadow, so we use a background div */}
      <div
        className="absolute inset-0 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] pointer-events-none"
        style={{ clipPath: verticalHexagon }}
      ></div>

      {/* Clipped Content */}
      <div
        className={`relative w-[320px] h-[360px] p-10 flex flex-col items-center justify-center text-center ${isTeaser ? "bg-white/40 backdrop-blur-md" : "bg-white"}`}
        style={{ clipPath: verticalHexagon }}
      >
        {isTeaser ? (
          <p className="text-xl font-bold text-gray-800 leading-relaxed">
            בקרוב עוד כלים <br /> חכמים שיעזרו לכם
          </p>
        ) : (
          <>
            <div className="absolute top-12 bg-[#F9F0F8] text-[10px] px-3 py-1 rounded-full font-bold">
              {tag}
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-gray-900 mb-3 px-2">{title}</h3>

              <p className="text-[#9BA1A6] text-[11px] leading-relaxed mb-4 px-2">
                בדיקה חכמה של כל ההחזרים והזכויות שמגיעים לכם. מבוסס על מידע
                משתמש, שאלון קצר - 3-5 דקות ויש לכם מסמך.
              </p>

              <div className="text-primary font-bold text-xs flex items-center justify-center gap-1 cursor-pointer">
                התחילו עכשיו
                <span className="text-lg">←</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default function Tools() {
  const tools = [
    { title: "תהליך הגשת תביעה קטנה", tag: "חינם", top: "0%", right: "10%" },
    {
      title: "בדיקת החזר מחברת הביטוח ",
      tag: "חינם",
      top: "15%",
      right: "45%",
    },
    { title: "הכנת מכתב לבנקים", tag: "חינם", top: "40%", right: "0%" },
    {
      title: "בדיקת החזר כסף לשכירים",
      tag: '50 ש"ח',
      top: "55%",
      right: "35%",
    },
  ];

  return (
    <section className="relative py-16 bg-[#FBFCFE] overflow-hidden" dir="rtl">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] pointer-events-none">
        <div className="absolute inset-0 rounded-full border border-gray-100 opacity-50 scale-100"></div>
        <div className="absolute inset-0 rounded-full border border-gray-100 opacity-40 scale-75"></div>
        <div className="absolute inset-0 rounded-full border border-gray-100 opacity-30 scale-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        {/* Right Header Section */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8 text-right z-20">
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight">
            <GradientText text="הכלים שלנו" />
          </h2>
          <p className="text-[#4A5568] text-xl leading-relaxed font-medium">
            הכלים שלנו מייצרים עבורכם את כל מה שאתם צריכים בקלות ומהירות, כלים
            נוספים ייכנסו בהמשך
          </p>
        </div>

        {/* Left Staggered Cards Area */}
        <div className="relative w-full lg:w-2/3 h-[900px] mt-20 lg:mt-0">
          {tools.map((tool, idx) => (
            <ToolCard
              key={idx}
              title={tool.title}
              tag={tool.tag}
              style={{ top: tool.top, right: tool.right }}
            />
          ))}

          {/* Teaser Card */}
          <ToolCard isTeaser style={{ top: "35%", right: "75%" }} />
        </div>
      </div>
    </section>
  );
}
