import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AboutSection from "@/components/AboutSection";

describe("AboutSection", () => {
  it("renders about narrative and core backend engineering philosophy", () => {
    render(<AboutSection />);

    const section = screen.getByTestId("about-section");
    expect(section).toHaveAttribute("id", "about");
    expect(screen.getByText(/Engineering Philosophy/i)).toBeInTheDocument();
    expect(screen.getByText(/Amnil Technologies/i)).toBeInTheDocument();
    expect(screen.getByText(/Presidential Graduate School/i)).toBeInTheDocument();
  });
});
