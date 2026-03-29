import bgRings from "../../assets/home/form-circles.png";

const ContactForm = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-10" dir="rtl">
      <div className="relative bg-[#FBFCFF] rounded-[60px] p-16 flex flex-col items-center text-center overflow-hidden">
        {/* Decorative Background Rings */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[60px] -translate-x-1/2  left-1/2">
          <img src={bgRings} alt="rings" />
          {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gray-300 opacity-80 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gray-300 opacity-60 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-gray-300 opacity-40 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-gray-300 opacity-20 rounded-full"></div> */}
        </div>

        <div className="relative z-10 flex flex-col gap-8 max-w-4xl">
          <h2 className="text-4xl font-bold text-[#0F172A] leading-tight">
            נשמח לדבר אתכם, השאירו פרטים ונחזור אליכם בהקדם.
          </h2>
          <p className="text-gray-500 font-medium text-lg lg:px-20 leading-relaxed">
            אנחנו מייצרים עבורכם את כל הטפסים בעזרת מערכת חכמה וחדשנית וחוסכים
            לכם את כל הכאב ראש והבירוקרטיה
          </p>

          <form className="flex flex-col md:flex-row gap-4 mt-8 w-full items-center justify-center">
            <input
              type="text"
              placeholder="שם"
              className="bg-white border border-gray-100 rounded-2xl px-6 py-4 w-full md:w-64 text-right shadow-sm focus:outline-none transition-all"
            />
            <input
              type="text"
              placeholder="טלפון"
              className="bg-white border border-gray-100 rounded-2xl px-6 py-4 w-full md:w-64 text-right shadow-sm focus:outline-none transition-all"
            />
            <button
              type="submit"
              className="bg-primary text-white font-bold px-12 py-4 rounded-2xl w-full md:w-auto hover:bg-opacity-90 transition-all cursor-pointer shadow-lg shadow-primary/20"
            >
              שליחה
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
