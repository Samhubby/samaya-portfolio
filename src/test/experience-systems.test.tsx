import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import EditorialExperience from "@/components/EditorialExperience";
import FeaturedSystems from "@/components/FeaturedSystems";

describe("EditorialExperience & FeaturedSystems", () => {
  it("renders experience details and featured projects with links and tags", () => {
    render(
      <>
        <EditorialExperience />
        <FeaturedSystems />
      </>
    );

    expect(screen.getByText("Amnil Technologies")).toBeInTheDocument();
    expect(screen.getByText(/Associate Backend Developer/i)).toBeInTheDocument();
    expect(screen.getByText("Flag-Forge")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /flagforgectf\.com/i })).toHaveAttribute("href", "https://www.flagforgectf.com/");
    expect(screen.getByText(/Banking BPM Dashboards/i)).toBeInTheDocument();
  });
});
