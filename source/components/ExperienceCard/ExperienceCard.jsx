import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

export default function ExperienceCard({
  description,
  company,
  role,
  period: { from, to },
}) {
  const { t } = useTranslation("experience-card");

  const periodString = to
    ? `${t("from")} ${from} ${t("to")} ${to}`
    : `${t("currently")}, ${t("from")} ${from}`;

  return (
    <div className="flex flex-col max-w-sm gap-6 p-4 bg-white rounded shadow">
      <div>
        <span className="font-display block mb-2 text-lg font-semibold">
          {company}
        </span>
        <span className="block text-sm font-medium">{role}</span>
        <span className="block text-xs">
          {periodString}
        </span>
      </div>

      <p className="text-sm">{description}</p>
    </div>
  );
}

ExperienceCard.propTypes = {
  description: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  period: PropTypes.shape({
    from: PropTypes.string.isRequired,
    to: PropTypes.string,
  }).isRequired,
};
