import React from "react";

const MetricsBand: React.FC = () => {
  const metrics = [
    {
      label: "Banking BPM",
      title: "Core Workflow Systems",
      detail: "Developed banking workflow dashboards and customer portals using Laravel at Amnil Technologies.",
    },
    {
      label: "RabbitMQ",
      title: "Asynchronous Queues",
      detail: "Engineered external API event pipelines for reliable distributed communication across microservices.",
    },
    {
      label: "AWS SAA",
      title: "Solutions Architect",
      detail: "Certified in designing resilient cloud architectures, containerized deployments, and CI/CD pipelines.",
    },
    {
      label: "Peer-Reviewed",
      title: "Research Author",
      detail: "Published IT research paper in the NPRC Journal of Multidisciplinary Research on sustainable energy systems.",
    },
  ];

  return (
    <section className="border-b border-[var(--line)] bg-[var(--bg-surface)] py-10 transition-colors duration-200">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-[var(--line)]">
          {metrics.map((item, idx) => (
            <div key={item.label} className={`${idx !== 0 ? "lg:pl-8" : ""} ${idx !== metrics.length - 1 ? "lg:pr-8" : ""}`}>
              <div className="text-[11px] font-mono uppercase tracking-widest text-[var(--accent)] font-semibold mb-1">
                {item.label}
              </div>
              <h3 className="font-serif text-lg font-medium text-[var(--text-primary)] mb-2">
                {item.title}
              </h3>
              <p className="text-[13px] text-[var(--text-muted)] leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsBand;
