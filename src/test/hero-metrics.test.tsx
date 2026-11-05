import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import EditorialHero from "@/components/EditorialHero";
import MetricsBand from "@/components/MetricsBand";

describe("EditorialHero & MetricsBand", () => {
  it("renders display typography, headline copy, and code card snippet", () => {
    render(
      <>
        <EditorialHero />
        <MetricsBand />
      </>
    );

    expect(screen.getByText(/Associate Backend Developer/i)).toBeInTheDocument();
    expect(screen.getByText(/BankingCaseDispatcher/i)).toBeInTheDocument();
    expect(screen.getByText(/bpm\.banking\.sync/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Download CV/i })).toHaveAttribute("href", "/CV_Samaya_Mahate.pdf");
    expect(screen.getByText(/AWS SAA/i)).toBeInTheDocument();
    expect(screen.getByText(/Banking BPM/i)).toBeInTheDocument();
  });
});
