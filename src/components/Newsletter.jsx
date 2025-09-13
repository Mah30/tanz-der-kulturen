import { useTranslation } from "react-i18next";

const Newsletter = () => {
  const { t } = useTranslation("common");
  return (
    <section id="newsletter" className="py-20 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-4">
        {t("newsletter.title", "Newsletter")}
      </h2>
      {/* ...newsletter content... */}
    </section>
  );
};

export default Newsletter;
