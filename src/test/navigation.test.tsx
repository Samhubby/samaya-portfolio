import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ThemeProvider } from "@/hooks/use-theme";
import EditorialNavbar from "@/components/EditorialNavbar";
import EditorialFooter from "@/components/EditorialFooter";

describe("EditorialNavbar and EditorialFooter", () => {
  it("renders brand logo, nav anchor links, and toggles theme", () => {
    render(
      <ThemeProvider>
        <EditorialNavbar />
        <EditorialFooter />
      </ThemeProvider>
    );

    expect(screen.getByRole("link", { name: /Samaya/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /About/i })).toHaveAttribute("href", "#about");
    expect(screen.getByRole("link", { name: /Experience/i })).toHaveAttribute("href", "#experience");
    expect(screen.getByRole("link", { name: /Systems/i })).toHaveAttribute("href", "#projects");
    expect(screen.getByRole("link", { name: /Contact/i })).toHaveAttribute("href", "#contact");

    const toggleBtn = screen.getByRole("button", { name: /toggle theme/i });
    fireEvent.click(toggleBtn);
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
  });
});
