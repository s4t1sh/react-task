const Footer = () => {
  return (
    <footer className="border-t border-[#EAEAEA] py-16  bg-[#FBFBFB]" dir="rtl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Column 1: Logo & Branding */}
        <img src="/logo.png" alt="logo" />

        {/* Column 2: Navigation */}  
        <div className="flex flex-col gap-5">
          <h3 className="text-lg font-bold text-[#0F172A]">ניווט</h3>
          <ul className="flex flex-col gap-3 text-gray-500 text-sm font-medium">
            <li><a href="#" className="hover:text-primary transition-colors">ראשי</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">איך זה עובד?</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">הכלים שלנו</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">לקוחות משתפים</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">שאלות ותשובות</a></li>
          </ul>
        </div>

        {/* Column 3: Privacy & Legal */}
        <div className="flex flex-col gap-5">
          <h3 className="text-lg font-bold text-[#0F172A]">פרטיות</h3>
          <ul className="flex flex-col gap-3 text-gray-500 text-sm font-medium">
            <li><a href="#" className="hover:text-primary transition-colors">תקנון שימוש</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">מדיניות פרטיות</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">עוגיות</a></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="flex flex-col gap-5">
          <h3 className="text-lg font-bold text-[#0F172A]">יצירת קשר</h3>
          <ul className="flex flex-col gap-3 text-gray-500 text-sm font-medium">
            <li><a href="mailto:shushanran@gmail.com" className="hover:text-primary transition-colors">shushanran@gmail.com</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Row: Copyright */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 text-center">
        <p className="text-[#0F172A] font-bold text-sm">
          בירוקליק 2025 כל הזכויות שמורות
        </p>
      </div>
    </footer>
  );
};

export default Footer;