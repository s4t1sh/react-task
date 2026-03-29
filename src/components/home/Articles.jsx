import GradientText from "../../universal/GradientText";
import headaway from "../../assets/home/headaway.png";

const ArticleCard = ({ badge, badgeColor, title, desc, time }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col items-end text-right border border-gray-50 md:min-w-0 md:flex-1 shrink-0 w-[300px]">
      <img src={headaway} alt={title} className="w-full h-56 object-cover" />
      <div className="p-8 flex flex-col gap-4">
        <div className="flex items-center justify-between w-full dir-rtl">
          <span
            className={`px-4 py-1 rounded-full text-xs font-bold ${badgeColor}`}
          >
            {badge}
          </span>
          <span className="text-gray-400 text-xs font-medium">
            זמן קריאה: {time}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 leading-tight">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

const Articles = () => {
  const articles = [
    {
      badge: "טיפים",
      badgeColor: "bg-[#F0B4FF]",
      title: "מדריך מקיף: זכויות צרכנים בתביעות 2024",
      desc: "כל מה שצריך לדעת על הזכויות שלכם, חוק הגנת הצרכן והגשת תביעות",
      time: "8 דקות",
    },
    {
      badge: "טיפים",
      badgeColor: "bg-[#F0B4FF]",
      title: "מדריך מקיף: זכויות צרכנים בתביעות 2024",
      desc: "כל מה שצריך לדעת על הזכויות שלכם, חוק הגנת הצרכן והגשת תביעות",
      time: "8 דקות",
    },
    {
      badge: "ביטוח",
      badgeColor: "bg-[#FFF4B4]",
      title: "מדריך מקיף: זכויות צרכנים בתביעות 2024",
      desc: "כל מה שצריך לדעת על הזכויות שלכם, חוק הגנת הצרכן והגשת תביעות",
      time: "8 דקות",
    },
  ];

  return (
    <section
      className="max-w-7xl mx-auto lg:py-24 py-4 lg:px-10 text-center flex flex-col gap-12"
      dir="rtl"
    >
      <h2 className="lg:text-4xl text-2xl font-bold px-4">
        <span>קצת תוכן </span>
        <GradientText text="שבטוח יעניין אתכם" />
      </h2>

      <div className="flex w-full overflow-x-scroll no-scrollbar lg:gap-8 gap-4">
        {articles.map((article, idx) => (
          <ArticleCard key={idx} {...article} />
        ))}
      </div>
    </section>
  );
};

export default Articles;
