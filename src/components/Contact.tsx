import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FORMSPREE_ENDPOINT } from "@/data/profile";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
        form.reset();
      } else {
        toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Network error. Please try again.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-lg mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
          <p className="text-sm text-muted-foreground">Have a question or want to work together?</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="name" placeholder="Name" required maxLength={100} className="bg-secondary border-border focus:ring-primary" />
          <Input name="email" type="email" placeholder="Email" required maxLength={255} className="bg-secondary border-border focus:ring-primary" />
          <Input name="subject" placeholder="Subject" required maxLength={200} className="bg-secondary border-border focus:ring-primary" />
          <Textarea name="message" placeholder="Message" required maxLength={2000} rows={5} className="bg-secondary border-border focus:ring-primary resize-none" />
          <Button type="submit" disabled={submitting} className="w-full" size="lg">
            <Send size={16} />
            {submitting ? "Sending…" : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
