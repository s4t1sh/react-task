import Button from "./Button";

export default function Header() {
  return (
    <nav className="hidden lg:flex border-[1px] border-[#EAEAEA] items-center justify-between py-4 px-24 sticky top-0 bg-white z-40">
      <Button title={"התחילו עכשיו"}/>

      <div className="hidden md:flex gap-8 text-sm">
        <a href="#">תקנון שימוש</a>
        <a href="#">הבלוג שלנו</a>
        <a href="#">הכלים שלנו</a>
        <a href="#">ראשי</a>
      </div>

      <img src="/logo.png" alt="logo" />
    </nav>
  );
}
