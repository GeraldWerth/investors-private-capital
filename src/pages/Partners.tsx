import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowLeft, Users, TrendingUp, ChevronRight,
  Scale, Cpu, Leaf, LineChart, MapPin, Mail, Phone, Briefcase, Award, Send
} from "lucide-react";
import { Link } from "react-router-dom";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().max(100, "Company must be less than 100 characters").optional(),
  phone: z.string().trim().max(30, "Phone must be less than 30 characters").optional(),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

const Partners = () => {
  const { toast } = useToast();
  const [showContactDialog, setShowContactDialog] = useState(false);
  const [selectedPartnerForContact, setSelectedPartnerForContact] = useState<{ name: string; email: string } | null>(null);
  const [contactForm, setContactForm] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOpenContactDialog = (partnerName: string, partnerEmail: string) => {
    setSelectedPartnerForContact({ name: partnerName, email: partnerEmail });
    setContactForm({
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: `Inquiry via EIN Energy Portal`,
      message: ""
    });
    setFormErrors({});
    setShowContactDialog(true);
  };

  const handleContactSubmit = () => {
    const result = contactSchema.safeParse(contactForm);
    
    if (!result.success) {
      const errors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          errors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate sending
    setTimeout(() => {
      setIsSubmitting(false);
      setShowContactDialog(false);
      toast({
        title: "Message Sent",
        description: `Your inquiry has been successfully sent to ${selectedPartnerForContact?.name}.`,
      });
    }, 1000);
  };

  const partnerCategories = [
    {
      id: "legal",
      icon: Scale,
      title: "Legal & Compliance",
      fullTitle: "Legal, Regulatory & Compliance Partners",
      description: "Legal advisory and regulatory support",
      partners: [
        { 
          id: "morrison-foerster",
          name: "Morrison & Foerster LLP", 
          specialty: "M&A, Venture Capital",
          location: "Frankfurt, Munich",
          contact: "Dr. Michael Weber",
          email: "mweber@mofo.com",
          phone: "+49 69 7033 0",
          services: ["Transaction Advisory", "Due Diligence", "Contract Drafting"],
          experience: "25+ years in energy sector"
        },
        { 
          id: "hengeler-mueller",
          name: "Hengeler Mueller", 
          specialty: "Corporate Law, Compliance",
          location: "Berlin, Düsseldorf",
          contact: "Dr. Anna Schmidt",
          email: "a.schmidt@hengeler.com",
          phone: "+49 30 2039 6000",
          services: ["Corporate Law", "Regulatory Compliance", "ESG Advisory"],
          experience: "30+ years of experience"
        },
        { 
          id: "noerr",
          name: "Noerr LLP", 
          specialty: "Regulation, Energy Law",
          location: "Munich, Hamburg",
          contact: "Dr. Thomas Müller",
          email: "thomas.mueller@noerr.com",
          phone: "+49 89 2862 8000",
          services: ["Energy Law", "Permit Procedures", "Regulatory Affairs"],
          experience: "Renewable energy specialist"
        }
      ],
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      id: "engineering",
      icon: Cpu,
      title: "Engineering & Due Diligence",
      fullTitle: "Engineering, Technical & Due Diligence Partners",
      description: "Technical assessment and due diligence",
      partners: [
        { 
          id: "tuv-rheinland",
          name: "TÜV Rheinland", 
          specialty: "Technical Inspection, Certification",
          location: "Cologne, Germany-wide",
          contact: "Ing. Klaus Bauer",
          email: "klaus.bauer@tuv.com",
          phone: "+49 221 806 0",
          services: ["Technical Inspection", "Certification", "Safety Testing"],
          experience: "150+ years of expertise"
        },
        { 
          id: "dnv",
          name: "DNV", 
          specialty: "Energy Due Diligence",
          location: "Hamburg, Oslo",
          contact: "Dr. Erik Johansen",
          email: "erik.johansen@dnv.com",
          phone: "+49 40 3616 1000",
          services: ["Asset Valuation", "Risk Management", "Performance Analysis"],
          experience: "Global market leader"
        },
        { 
          id: "fraunhofer-ise",
          name: "Fraunhofer ISE", 
          specialty: "Technology Assessment",
          location: "Freiburg",
          contact: "Prof. Dr. Lisa Hartmann",
          email: "lisa.hartmann@ise.fraunhofer.de",
          phone: "+49 761 4588 0",
          services: ["Technology Assessment", "R&D Consulting", "Innovation Analysis"],
          experience: "Leading research institute"
        }
      ],
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      id: "esg",
      icon: Leaf,
      title: "ESG & Sustainability",
      fullTitle: "ESG, Certification & Sustainability Partners",
      description: "Sustainability assessment and certifications",
      partners: [
        { 
          id: "sustainalytics",
          name: "Sustainalytics", 
          specialty: "ESG Ratings & Research",
          location: "Amsterdam, Munich",
          contact: "Sarah van der Berg",
          email: "sarah.vanderberg@sustainalytics.com",
          phone: "+31 20 205 0000",
          services: ["ESG Risk Ratings", "Carbon Analytics", "Investor Research"],
          experience: "30+ years of ESG expertise"
        },
        { 
          id: "ecovadis",
          name: "EcoVadis", 
          specialty: "Sustainability Ratings",
          location: "Paris, Berlin",
          contact: "Marc Dubois",
          email: "m.dubois@ecovadis.com",
          phone: "+33 1 82 28 88 88",
          services: ["Sustainability Scorecards", "Supply Chain Assessment", "CSR Ratings"],
          experience: "100,000+ rated companies"
        },
        { 
          id: "climate-partner",
          name: "Climate Partner", 
          specialty: "Carbon Footprint, Climate Strategy",
          location: "Munich",
          contact: "Dr. Julia Berger",
          email: "j.berger@climatepartner.com",
          phone: "+49 89 1222 875 0",
          services: ["Carbon Accounting", "Climate Strategy", "Offset Projects"],
          experience: "6,000+ corporate clients"
        }
      ],
      color: "bg-green-500/10 text-green-600"
    },
    {
      id: "transaction",
      icon: LineChart,
      title: "Transaction & Strategy",
      fullTitle: "Transaction, Strategy & Market Advisory Partners",
      description: "Strategic consulting and market analysis",
      partners: [
        { 
          id: "roland-berger",
          name: "Roland Berger", 
          specialty: "Strategy, Energy & Utilities",
          location: "Munich, Berlin",
          contact: "Dr. Markus Fischer",
          email: "markus.fischer@rolandberger.com",
          phone: "+49 89 9230 0",
          services: ["Strategy Development", "M&A Advisory", "Restructuring"],
          experience: "Europe's leading strategy consultancy"
        },
        { 
          id: "mckinsey",
          name: "McKinsey & Company", 
          specialty: "Transformation, Sustainability",
          location: "Frankfurt, Düsseldorf",
          contact: "Dr. Claudia Schulz",
          email: "claudia_schulz@mckinsey.com",
          phone: "+49 69 7162 0",
          services: ["Sustainable Transformation", "Operational Excellence", "Digital Strategy"],
          experience: "Global #1 management consultancy"
        },
        { 
          id: "aurora-energy",
          name: "Aurora Energy Research", 
          specialty: "Market Analysis, Forecasting",
          location: "Oxford, Berlin",
          contact: "Dr. Felix Braun",
          email: "felix.braun@auroraer.com",
          phone: "+44 1865 339 350",
          services: ["Market Forecasting", "Asset Valuation", "Policy Analysis"],
          experience: "Energy markets specialist"
        }
      ],
      color: "bg-purple-500/10 text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg">
                <TrendingUp className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">EIN Energy</h1>
                <p className="text-xs text-primary font-medium">Investor Portal</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link 
          to="/private-capital-dashboard" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </Link>

        {/* Page Title */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Partners
              </h2>
              <p className="text-muted-foreground">
                Strategic and operational partners for your investment
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="legal" className="w-full">
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 h-auto gap-2 bg-transparent p-0 mb-6">
            {partnerCategories.map((category) => (
              <TabsTrigger 
                key={category.id}
                value={category.id}
                className="flex flex-col items-center gap-2 p-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-muted rounded-xl border border-border data-[state=active]:border-primary transition-all"
              >
                <category.icon className="w-5 h-5" />
                <span className="text-xs font-medium text-center leading-tight">{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {partnerCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${category.color}`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {category.fullTitle}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {category.partners.map((partner, partnerIndex) => (
                      <div 
                        key={partnerIndex}
                        className="p-5 rounded-xl bg-muted/50 hover:bg-muted transition-colors group cursor-pointer border border-transparent hover:border-primary/20"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-semibold text-foreground text-lg">{partner.name}</h4>
                            <p className="text-sm text-primary font-medium">{partner.specialty}</p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-1" />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 text-primary/70" />
                            <span>{partner.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="w-4 h-4 text-primary/70" />
                            <span>{partner.contact}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Mail className="w-4 h-4 text-primary/70" />
                            <span>{partner.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Phone className="w-4 h-4 text-primary/70" />
                            <span>{partner.phone}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                          <Award className="w-4 h-4 text-primary/70" />
                          <span className="text-sm text-muted-foreground">{partner.experience}</span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {partner.services.map((service, serviceIndex) => (
                            <span 
                              key={serviceIndex}
                              className="px-3 py-1 bg-background text-xs font-medium text-foreground rounded-full border border-border"
                            >
                              {service}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-3 pt-3 border-t border-border">
                          <Button 
                            size="sm" 
                            className="bg-primary hover:bg-primary/90 text-primary-foreground"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenContactDialog(partner.name, partner.email);
                            }}
                          >
                            <Mail className="w-4 h-4 mr-2" />
                            Contact
                          </Button>
                          <Link to={`/partners/${partner.id}`}>
                            <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white">
                              <Users className="w-4 h-4 mr-2" />
                              View Profile
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Button variant="outline" className="text-primary border-primary/30 hover:bg-primary/10">
                      View All Partners
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Contact Dialog */}
        <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Contact Partner</DialogTitle>
              <DialogDescription>
                Send a message to {selectedPartnerForContact?.name}
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Name *</Label>
                  <Input
                    id="contact-name"
                    value={contactForm.name}
                    onChange={(e) => {
                      setContactForm({ ...contactForm, name: e.target.value });
                      if (formErrors.name) setFormErrors({ ...formErrors, name: undefined });
                    }}
                    placeholder="Your name"
                    className={formErrors.name ? "border-destructive" : ""}
                  />
                  {formErrors.name && <p className="text-xs text-destructive">{formErrors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email *</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => {
                      setContactForm({ ...contactForm, email: e.target.value });
                      if (formErrors.email) setFormErrors({ ...formErrors, email: undefined });
                    }}
                    placeholder="your@email.com"
                    className={formErrors.email ? "border-destructive" : ""}
                  />
                  {formErrors.email && <p className="text-xs text-destructive">{formErrors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-company">Company</Label>
                  <Input
                    id="contact-company"
                    value={contactForm.company}
                    onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                    placeholder="Your company"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Phone</Label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    placeholder="+49 123 456789"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-subject">Subject *</Label>
                <Input
                  id="contact-subject"
                  value={contactForm.subject}
                  onChange={(e) => {
                    setContactForm({ ...contactForm, subject: e.target.value });
                    if (formErrors.subject) setFormErrors({ ...formErrors, subject: undefined });
                  }}
                  placeholder="Subject of your inquiry"
                  className={formErrors.subject ? "border-destructive" : ""}
                />
                {formErrors.subject && <p className="text-xs text-destructive">{formErrors.subject}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message">Message *</Label>
                <Textarea
                  id="contact-message"
                  value={contactForm.message}
                  onChange={(e) => {
                    setContactForm({ ...contactForm, message: e.target.value });
                    if (formErrors.message) setFormErrors({ ...formErrors, message: undefined });
                  }}
                  placeholder="Your message..."
                  rows={4}
                  className={formErrors.message ? "border-destructive" : ""}
                />
                {formErrors.message && <p className="text-xs text-destructive">{formErrors.message}</p>}
                <p className="text-xs text-muted-foreground text-right">
                  {contactForm.message.length} / 2,000 characters
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setShowContactDialog(false)}>
                Cancel
              </Button>
              <Button 
                onClick={handleContactSubmit}
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};

export default Partners;
