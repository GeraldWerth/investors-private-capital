import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Rocket, Users, ArrowLeft, ArrowRight,
  Plus, FileText, CheckCircle2,
  Clock, Building2, Briefcase, Send,
  Package, Eye, Edit, Trash2
} from "lucide-react";
import { Link } from "react-router-dom";

const PilotProjects = () => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    targetGroup: "",
    pricing: "",
    availability: "",
    references: ""
  });

  const existingServices = [
    {
      id: 1,
      title: "Smart Grid Optimization",
      category: "Software",
      status: "Active",
      views: 124,
      inquiries: 5,
      createdAt: "Nov 15, 2025"
    },
    {
      id: 2,
      title: "Energy Storage Solution",
      category: "Hardware",
      status: "Active",
      views: 89,
      inquiries: 3,
      createdAt: "Dec 20, 2025"
    },
    {
      id: 3,
      title: "AI Load Forecasting",
      category: "AI/ML",
      status: "Under Review",
      views: 12,
      inquiries: 0,
      createdAt: "Jan 5, 2026"
    }
  ];

  const applicationHistory = [
    {
      id: 1,
      company: "EnergieCorp AG",
      project: "Grid Integration 2026",
      status: "Accepted",
      date: "Jan 10, 2026"
    },
    {
      id: 2,
      company: "GreenPower Inc.",
      project: "Storage Optimization",
      status: "Under Review",
      date: "Jan 3, 2026"
    },
    {
      id: 3,
      company: "TechGrid Solutions",
      project: "AI Pilot Project",
      status: "Rejected",
      date: "Dec 20, 2025"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setShowApplicationForm(false);
    setFormData({
      title: "",
      category: "",
      description: "",
      targetGroup: "",
      pricing: "",
      availability: "",
      references: ""
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
      case "Accepted":
        return "bg-primary/20 text-primary";
      case "Under Review":
        return "bg-accent/20 text-accent";
      case "Rejected":
        return "bg-destructive/20 text-destructive";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link 
                to="/startup-dashboard" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline font-medium">Back</span>
              </Link>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                  <Briefcase className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-foreground">Pilot Projects</h1>
                  <p className="text-xs text-muted-foreground">Your solutions for partners</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Rocket className="w-4 h-4 text-accent-foreground" />
              </div>
              <span className="hidden sm:inline text-sm font-semibold text-foreground">EIN Energy</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Package className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">3</p>
                <p className="text-xs text-muted-foreground">Active Offers</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">225</p>
                <p className="text-xs text-muted-foreground">Total Views</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Send className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">8</p>
                <p className="text-xs text-muted-foreground">Inquiries</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">1</p>
                <p className="text-xs text-muted-foreground">Accepted</p>
              </div>
            </div>
          </div>
        </div>

        {/* New Application Form */}
        {showApplicationForm ? (
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                <Plus className="w-5 h-5 text-primary" />
                Start Pilot Project
              </CardTitle>
              <CardDescription>Create a detailed application for your solution</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Service Title *</Label>
                    <Input 
                      id="title" 
                      name="title" 
                      placeholder="e.g. Smart Grid Optimization"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="rounded-xl"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Input 
                      id="category" 
                      name="category" 
                      placeholder="e.g. Software, Hardware, Consulting"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="rounded-xl"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Detailed Description *</Label>
                  <Textarea 
                    id="description" 
                    name="description" 
                    placeholder="Describe your solution in detail: What do you offer? What are the benefits? Which technologies do you use?"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="rounded-xl min-h-32"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="targetGroup">Target Group</Label>
                    <Input 
                      id="targetGroup" 
                      name="targetGroup" 
                      placeholder="e.g. Energy suppliers, Grid operators"
                      value={formData.targetGroup}
                      onChange={handleInputChange}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pricing">Pricing Model</Label>
                    <Input 
                      id="pricing" 
                      name="pricing" 
                      placeholder="e.g. License, SaaS, Project-based"
                      value={formData.pricing}
                      onChange={handleInputChange}
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability</Label>
                    <Input 
                      id="availability" 
                      name="availability" 
                      placeholder="e.g. Immediately, Q2 2026"
                      value={formData.availability}
                      onChange={handleInputChange}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="references">References</Label>
                    <Input 
                      id="references" 
                      name="references" 
                      placeholder="e.g. Existing customers, Pilot projects"
                      value={formData.references}
                      onChange={handleInputChange}
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-secondary border border-border">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong className="text-foreground">Note:</strong> After submission, your application will be reviewed by our team. 
                    You will receive feedback within 3-5 business days.
                  </p>
                </div>

                <div className="flex gap-3 justify-end">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setShowApplicationForm(false)}
                    className="rounded-xl"
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
                  >
                    Submit Application
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Button 
            onClick={() => setShowApplicationForm(true)}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-14 text-lg"
          >
            <Plus className="w-5 h-5 mr-2" />
            Start Pilot Project
          </Button>
        )}

        {/* Existing Services */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <Package className="w-5 h-5 text-primary" />
              Your Pilot Projects
            </CardTitle>
            <CardDescription>Overview of your offered solutions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {existingServices.map((service) => (
              <div 
                key={service.id}
                className="p-5 rounded-2xl bg-secondary border border-border hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-foreground">{service.title}</h3>
                      <Badge className={getStatusColor(service.status)}>
                        {service.status}
                      </Badge>
                      <Badge variant="outline" className="border-muted-foreground/30">
                        {service.category}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {service.views} Views
                      </span>
                      <span className="flex items-center gap-1">
                        <Send className="w-4 h-4" />
                        {service.inquiries} Inquiries
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Created: {service.createdAt}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/10 rounded-xl">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="border-destructive/30 text-destructive hover:bg-destructive/10 rounded-xl">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Application Status */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <FileText className="w-5 h-5 text-accent" />
              Application Status
            </CardTitle>
            <CardDescription>Status of your applications with partners</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {applicationHistory.map((application) => (
              <div 
                key={application.id}
                className="flex items-center justify-between p-4 rounded-xl bg-secondary border border-border hover:bg-primary/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{application.project}</p>
                    <p className="text-sm text-muted-foreground">{application.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground hidden sm:inline">{application.date}</span>
                  <Badge className={getStatusColor(application.status)}>
                    {application.status}
                  </Badge>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4 border-primary/30 text-primary hover:bg-primary/10 rounded-xl">
              View All Applications
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PilotProjects;
