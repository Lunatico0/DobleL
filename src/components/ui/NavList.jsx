import { motion } from "framer-motion";

const NavList = ({ sections, direction = "row", includeCTA = false, isMobile = false }) => {
  return (
    <ul
      className={`flex ${
        direction === "row" ? "flex-row gap-6 py-2" : "flex-col gap-4 py-4 items-center"
      }`}
    >
      {sections.map((item, index) => (
        <motion.li
          key={index}
          whileHover={{ scale: isMobile ? 1.05 : 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <a
            href={`#${item.id}`}
            className="relative group"
          >
            {item.label}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
        </motion.li>
      ))}

      {includeCTA && (
        <li>
          <a
            href="https://wa.me/5493435451198"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/80 text-text px-4 py-2 rounded-full transition duration-300 text-sm"
          >
            Solicitar Entrevista
          </a>
        </li>
      )}
    </ul>
  );
};

export default NavList;
