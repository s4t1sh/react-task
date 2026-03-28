import illustration from "../../assets/home/illustration.svg";
import Button from "../../universal/Button";
import GradientText from "../../universal/GradientText";

export default function Hero() {
  return (
    <section className="pb-6 text-center grid grid-cols-2 gap-8">
      <article>
        <img src={illustration} alt="hero" className="lg:w-3xl" />
      </article>
      <article className="md:text-right flex flex-col gap-6 items-end items-center justify-center">
        <button className="bg-[#F9F0F8] text-primary px-6 py-3 text-sm rounded-xl cursor-pointer flex gap-4 items-center justify-end w-fit">
          פלטפורמת AI לתהליכים בירוקרטיים
        </button>
        <h1 className="text-4xl md:text-6xl leading-tight">
          פחות בירוקרטיה, <br />
          <GradientText text={"יותר כסף בכיס שלך"} />
        </h1>

        <p>
          בירוקליק מאחדת את כל הכלים שיעזרו לך לקבל <br /> את מה שמגיע לך- פשוט,
          חכם ובמינימום מאמץ.
        </p>

        <Button title={"התחילו עכשיו"} />
      </article>
    </section>
  );
}
