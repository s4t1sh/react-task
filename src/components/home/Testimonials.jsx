const TestimonialCard = ({ name, action, quote, avatar }) => {
  return (
    <div
      className="bg-[#FDF9FC] rounded-xl lg:p-10 p-4 flex flex-col gap-6 flex-1 text-right"
      dir="rtl"
    >
      <div className="flex lg:flex-row flex-col items-center gap-4 justify-start w-full">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover grayscale"
        />
        <div className="lg:text-right text-center">
          <p className="font-bold text-gray-900">{name}</p>
          <p className="text-xs text-gray-500">{action}</p>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed font-medium lg:w-2xl w-full lg:text-right text-center">"{quote}"</p>
    </div>
  );
};

const StatCard = ({ main, sub, showCurrency }) => {
  return (
    <div className="bg-primary rounded-3xl px-10 lg:py-5 py-4 flex flex-col items-end text-white min-w-[280px] h-full shadow-lg">
      <div className="flex items-baseline gap-2">
        {showCurrency && <span className="text-2xl font-bold">₪</span>}
        <h3 className="lg:text-5xl text-3xl font-bold">{main}</h3>
      </div>
      <p className="text-sm font-bold opacity-90 lg:mt-2">{sub}</p>
    </div>
  );
};

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "הלני זר",
      action: "הכינה מכתב לתביעה קטנה",
      quote:
        "לא ידעתי איך בכלל להתחיל לכתוב מכתב לתביעה קטנה. בירוקליק הנחתה אותי שלב אחרי שלב וייצרה בשבילי מכתב שנראה כאילו נכתב על ידי עורך דין. הרגשתי ביטחון שאני מציגה את הסיפור שלי כמו שצריך.",
      avatar: "https://i.pravatar.cc/150?u=helena",
    },
    {
      name: "דניאל מתתיהו",
      action: "קיבל החזר מחברת ביטוח",
      quote:
        "המערכת של בירוקליק חסכה לי שעות של ניסיונות להבין איך לנסח מכתב לביטוח. הכל היה פשוט - כמה שאלות קצרות ובום, יצא מכתב מוכן לשליחה. לא דמיינתי שזה יהיה כל כך קל!",
      avatar: "https://i.pravatar.cc/150?u=daniel",
    },
    {
      name: "סהר מזרחי",
      action: "הכין מכתב לתביעה",
      quote:
        "במקום לשבת שעות מול דף ריק, נכנסתי לבירוקליק ותוך דקות היה לי מכתב מסודר וברור להגשה לבית המשפט. אהבתי במיוחד את השפה — מקצועית אבל מובנת. ממש שירות מציל עצבים.",
      avatar: "https://i.pravatar.cc/150?u=sahar",
    },
  ];

  const statsData = [
    {
      main: "1.2 מיליון",
      sub: "כסף שנכנס ללקוחות בירוקליק",
      showCurrency: true,
    },
    { main: "4 דקות", sub: "זמן ממוצע בתהליך", showCurrency: false },
    { main: "130", sub: "תהליכים שהושלמו בהצלחה", showCurrency: false },
  ];

  return (
    <section className="mx-auto lg:px-10 px-4 flex flex-col gap-8">
      {/* Row 1: Testimonial Left, Stat Right */}
      <div className="flex flex-col md:flex-row lg:gap-8 gap-4 items-stretch">
        <TestimonialCard {...testimonialsData[0]} />
        <StatCard {...statsData[0]} />
      </div>

      {/* Row 2: Stat Left, Testimonial Right */}
      <div className="flex flex-col-reverse md:flex-row lg:gap-8 gap-4 items-stretch">
        <StatCard {...statsData[1]} />
        <TestimonialCard {...testimonialsData[1]} />
      </div>

      {/* Row 3: Testimonial Left, Stat Right */}
      <div className="flex flex-col md:flex-row lg:gap-8 gap-4 items-stretch">
        <TestimonialCard {...testimonialsData[2]} />
        <StatCard {...statsData[2]} />
      </div>
    </section>
  );
};

export default Testimonials;
