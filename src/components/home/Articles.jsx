import GradientText from "../../universal/GradientText";
import headaway from "../../assets/home/headaway.png";

const ArticleCard = ({ badge, badgeColor, title, desc, time }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-end text-right border border-gray-50">
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
      className="max-w-7xl mx-auto py-24 px-10 text-center flex flex-col gap-12"
      dir="rtl"
    >
      <h2 className="text-4xl font-bold">
        <span>קצת תוכן </span>
        <GradientText text="שבטוח יעניין אתכם" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, idx) => (
          <ArticleCard key={idx} {...article} />
        ))}
      </div>
    </section>
  );
};

export default Articles;
