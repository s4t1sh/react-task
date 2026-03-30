import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menu = [
  {
    title: "תקנון שימוש",
    href: "#",
  },
  {
    title: "הבלוג שלנו",
    href: "#",
  },
  {
    title: "הכלים שלנו",
    href: "#",
  },
  {
    title: "ראשי",
    href: "#",
  },
];

const MobileNavbar = () => {
  const [sideNav, setSideNav] = useState(false);

  return (
    <nav className="lg:hidden sticky top-0 bg-white z-60 border-b-[1px] border-[#EAEAEA]">
      <div className="flex justify-between items-center py-4 px-2">
        <div className="flex items-center gap-10">
          <button
            className={`bg-primary text-white px-4 py-2 rounded-xl cursor-pointer w-fit focus:outline-none text-sm`}
          >
            התחילו עכשיו
          </button>
          <img src="/logo.png" alt="logo" className="w-20" />
        </div>
        <img
          src="/icons/hamburger.svg"
          alt="hamburger"
          className="w-5"
          onClick={() => setSideNav(true)}
        />
      </div>

      <AnimatePresence>
        {sideNav && (
          <motion.div
            key="sideNav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            onClick={() => setSideNav(false)}
            className="lg:hidden z-30 fixed top-0 left-0 h-screen w-full flex justify-end bg-black/50"
          >
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              exit={{ x: "100vw" }}
              transition={{
                ease: "linear",
                duration: 0.2,
              }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-md w-3/4 lg:hidden overflow-auto px-4 pt-4"
            >
              <img src="/logo.png" alt="logo" className="h-[45px]" />
              <ul className="flex flex-col mt-8">
                {menu.map((item) => (
                  <li
                    key={item.title}
                    onClick={() => setSideNav(false)}
                  >
                    <a
                      href={item.href}
                      className={`block py-3 px-5  border-b-[1px] border-[#E9D9D9] text-base font-medium`}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNavbar;
