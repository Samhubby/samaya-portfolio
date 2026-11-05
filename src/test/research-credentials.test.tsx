import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ResearchAndWriting from "@/components/ResearchAndWriting";
import CredentialsSection from "@/components/CredentialsSection";

describe("ResearchAndWriting & CredentialsSection", () => {
  it("renders academic publications with DOI, blog posts, and certifications", () => {
    render(
      <>
        <ResearchAndWriting />
        <CredentialsSection />
      </>
    );

    expect(screen.getByText(/Helambu Rural Municipality/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /doi\.org/i })).toHaveAttribute("href", "https://doi.org/10.3126/nprcjmr.v2i14.88023");
    expect(screen.getByRole("heading", { name: /Laravel Telescope/i })).toBeInTheDocument();
    expect(screen.getByText(/AWS Solutions Architect Associate/i)).toBeInTheDocument();
    expect(screen.getByText("Presidential Graduate School")).toBeInTheDocument();
  });
});
