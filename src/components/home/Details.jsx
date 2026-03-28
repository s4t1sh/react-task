import testimonial from "../../assets/home/testimonial.png";
import Button from "../../universal/Button";

const detailsData = [
  {
    image: "edit",
    title: "מילוי פרטים",
    desc: "הזינו את פרטי התביעה ותתארו את המקרה בליווי בוט AI חכם שמנחה אתכם בכל שלב",
    tag: "שלב 1",
  },
  {
    image: "add",
    title: "צירוף מסמכים ",
    desc: "העלו מסמכים ותמונות בקלות ובמהירות",
    tag: "שלב 2",
  },
  {
    image: "checks",
    title: "הגשה וסיום",
    desc: "סקירה סופית ותשלום מאובטח והגשה מקוונת של התביעה",
    tag: "שלב 3",
  },
];

const DetailCard = ({ title, desc, tag, image }) => {
  return (
    <div className="flex gap-6 text-right w-md justify-end">
      <div>
        <p className="text-xs text-primary">{tag}</p>
        <p className="text-lg font-bold mt-4">{title}</p>
        <p className="text-sm">{desc}</p>
      </div>
      <img src={`/icons/${image}.svg`} alt={title} className="w-16 h-16" />
    </div>
  );
};

const Details = () => {
  return (
    <section className="grid grid-cols-2 gap-40 px-16 py-16 mt-4">
      <img src={testimonial} alt="testimonial" className="w-lg ml-auto" />
      <article className="flex flex-col gap-10">
        {detailsData.map((d, i) => (
          <DetailCard key={d.tag} {...d} />
        ))}
        <div className="flex justify-end w-md mt-4">
          <Button title={"התחילו עכשיו"} />
        </div>
      </article>
    </section>
  );
};

export default Details;
