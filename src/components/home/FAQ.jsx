import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import GradientText from "../../universal/GradientText";

const accordianData = [
  {
    title: "האם השירות באמת חינם?",
    desc: "כן. חלק מהכלים מוצעים בחינם, וחלק במחיר סמלי כדי לכסות עלויות עיבוד.",
  },
  {
    title: "איך אני יודע שהמידע שלי בטוח?",
    desc: "כן. חלק מהכלים מוצעים בחינם, וחלק במחיר סמלי כדי לכסות עלויות עיבוד.",
  },
  {
    title: "כמה זמן זה לוקח להתהליכים שאני מבצע דרכים להתבצע?",
    desc: "כן. חלק מהכלים מוצעים בחינם, וחלק במחיר סמלי כדי לכסות עלויות עיבוד.",
  },
  {
    title: "האם אפשר לעשות את זה מהנייד?",
    desc: "כן. חלק מהכלים מוצעים בחינם, וחלק במחיר סמלי כדי לכסות עלויות עיבוד.",
  },
  {
    title: "איך אני מקבל את המסמכים?",
    desc: "כן. חלק מהכלים מוצעים בחינם, וחלק במחיר סמלי כדי לכסות עלויות עיבוד.",
  },
  {
    title: "האם יש נציג אנושי אם אני צריך עזרה?",
    desc: "כן. חלק מהכלים מוצעים בחינם, וחלק במחיר סמלי כדי לכסות עלויות עיבוד.",
  },
  {
    title: "האם יש נציג אנושי אם אני צריך עזרה?",
    desc: "כן. חלק מהכלים מוצעים בחינם, וחלק במחיר סמלי כדי לכסות עלויות עיבוד.",
  },
];

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <div className="flex w-full justify-between flex-row-reverse gap-16">
        <p className="text-right">{header}</p>
        <img
          className={`transition-transform duration-200 ease-out w-4 ${
            isEnter && "rotate-45"
          }`}
          src="/icons/plus.svg"
          alt="Chevron"
        />
      </div>
    )}
    className="border-b-[#EAEAEA] border-b-[1px] gap-4"
    buttonProps={{
      className: ({ isEnter }) => `flex w-full p-4 text-left`,
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out text-secondary text-right",
    }}
    panelProps={{ className: "p-4" }}
  />
);

const FAQ = () => {
  return (
    <div className="lg:py-16 py-10 lg:mx-56 flex flex-col gap-4 text-center">
      <p className="text-3xl">
        <GradientText text={"שאלות "} />
        <span>שאולי יש לכם</span>
      </p>

      <Accordion
        transition
        transitionTimeout={200}
        className="flex flex-col mt-6 text-left"
      >
        {accordianData.map((item, index) => (
          <AccordionItem header={item.title} key={index + 40}>
            {item.desc}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
