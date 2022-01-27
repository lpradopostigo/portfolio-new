import React from "react";
import { useTranslation } from "react-i18next";
import ExperienceCard from "../ExperienceCard";

export default function Experience() {
  const { t } = useTranslation("experience");
  return (
    <section id="experience" className="bg-pink flex flex-col gap-10 p-10">
      <h2 className="font-display capitalize text-xl font-bold text-white">{t("heading")}</h2>

      <ExperienceCard
        company={t("1.company")}
        role={t("1.role")}
        description={t("1.description")}
        period={{ from: t("1.period.from"), to: t("1.period.to") }}
      />
    </section>
  );
}
