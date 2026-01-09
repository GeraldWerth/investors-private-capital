import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Rocket, User, Building2, Settings, ArrowLeft, 
  Mail, Phone, MapPin, Globe, Calendar, Users,
  Shield, Key, Bell, Trash2, Save, Upload, UserPlus
} from "lucide-react";
import { Link } from "react-router-dom";

const PersonalData = () => {
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Smith",
    email: "john@techstartup.com",
    phone: "+1 555 123 4567",
    position: "CEO & Founder"
  });

  const [companyData, setCompanyData] = useState({
    name: "TechStartup Inc.",
    street: "Innovation Street 42",
    city: "San Francisco",
    zip: "94102",
    country: "United States",
    website: "www.techstartup.com",
    founded: "2022",
    employees: "12",
    description: "We develop innovative solutions for sustainable energy."
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link 
                to="/private-capital-dashboard" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline font-medium">Back</span>
              </Link>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                  <User className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-foreground">Personal Data</h1>
                  <p className="text-xs text-muted-foreground">Manage profile & company</p>
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
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="bg-card/80 backdrop-blur-sm border border-border p-1 rounded-2xl shadow-lg">
            <TabsTrigger 
              value="profile" 
              className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6"
            >
              <User className="w-4 h-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger 
              value="company" 
              className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6"
            >
              <Building2 className="w-4 h-4 mr-2" />
              Company
            </TabsTrigger>
            <TabsTrigger 
              value="account" 
              className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6"
            >
              <Settings className="w-4 h-4 mr-2" />
              Account
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Personal Profile
                </CardTitle>
                <CardDescription>Manage your personal contact information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Avatar Section */}
                <div className="flex items-center gap-6 p-4 rounded-2xl bg-secondary border border-border">
                  <Avatar className="w-20 h-20 border-4 border-card shadow-lg">
                    <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-bold">
                      {profileData.firstName[0]}{profileData.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{profileData.firstName} {profileData.lastName}</h3>
                    <p className="text-sm text-muted-foreground">{profileData.position}</p>
                    <Button variant="outline" size="sm" className="mt-2 border-primary/30 text-primary hover:bg-primary/10">
                      <Upload className="w-4 h-4 mr-2" />
                      Change Photo
                    </Button>
                  </div>
                </div>

                {/* Profile Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground font-medium">First Name</Label>
                    <Input
                      id="firstName"
                      value={profileData.firstName}
                      onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
                      className="h-11 border-border focus:border-primary focus:ring-primary rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground font-medium">Last Name</Label>
                    <Input
                      id="lastName"
                      value={profileData.lastName}
                      onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                      className="h-11 border-border focus:border-primary focus:ring-primary rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium flex items-center gap-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      className="h-11 border-border focus:border-primary focus:ring-primary rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-medium flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                      className="h-11 border-border focus:border-primary focus:ring-primary rounded-xl"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="position" className="text-foreground font-medium">Position in Company</Label>
                    <Input
                      id="position"
                      value={profileData.position}
                      onChange={(e) => setProfileData({...profileData, position: e.target.value})}
                      className="h-11 border-border focus:border-primary focus:ring-primary rounded-xl"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-lg">
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Company Tab */}
          <TabsContent value="company" className="space-y-6">
            <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  Company Details
                </CardTitle>
                <CardDescription>Information about your startup</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Company Header */}
                <div className="flex items-center gap-6 p-4 rounded-2xl bg-accent/20 border border-accent/30">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
                    <Building2 className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{companyData.name}</h3>
                    <p className="text-sm text-muted-foreground">Founded {companyData.founded} · {companyData.employees} Employees</p>
                  </div>
                </div>

                {/* Company Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="companyName" className="text-foreground font-medium">Company Name</Label>
                    <Input
                      id="companyName"
                      value={companyData.name}
                      onChange={(e) => setCompanyData({...companyData, name: e.target.value})}
                      className="h-11 border-border focus:border-primary focus:ring-primary rounded-xl"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="street" className="text-foreground font-medium flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      Street & Number
                    </Label>
                    <Input
                      id="street"
                      value={companyData.street}
                      onChange={(e) => setCompanyData({...companyData, street: e.target.value})}
                      className="h-11 border-border focus:border-primary focus:ring-primary rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip" className="text-foreground font-medium">ZIP Code</Label>
                    <Input
                      id="zip"
                      value={companyData.zip}
                      onChange={(e) => setCompanyData({...companyData, zip: e.target.value})}
                      className="h-11 border-border focus:border-primary focus:ring-primary rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-foreground font-medium">City</Label>
                    <Input
                      id="city"
                      value={companyData.city}
                      onChange={(e) => setCompanyData({...companyData, city: e.target.value})}
                      className="h-11 border-border focus:border-primary focus:ring-primary rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-foreground font-medium flex items-center gap-2">
                      <Globe className="w-4 h-4 text-muted-foreground" />
                      Website
                    </Label>
                    <Input
                      id="website"
                      value={companyData.website}
                      onChange={(e) => setCompanyData({...companyData, website: e.target.value})}
                      className="h-11 border-border focus:border-primary focus:ring-primary rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employees" className="text-foreground font-medium flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      Number of Employees
                    </Label>
                    <Input
                      id="employees"
                      value={companyData.employees}
                      onChange={(e) => setCompanyData({...companyData, employees: e.target.value})}
                      className="h-11 border-border focus:border-primary focus:ring-primary rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="founded" className="text-foreground font-medium flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      Year Founded
                    </Label>
                    <Input
                      id="founded"
                      value={companyData.founded}
                      onChange={(e) => setCompanyData({...companyData, founded: e.target.value})}
                      className="h-11 border-border focus:border-primary focus:ring-primary rounded-xl"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="description" className="text-foreground font-medium">Company Description</Label>
                    <Textarea
                      id="description"
                      value={companyData.description}
                      onChange={(e) => setCompanyData({...companyData, description: e.target.value})}
                      className="min-h-24 border-border focus:border-primary focus:ring-primary rounded-xl resize-none"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl shadow-lg">
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Account Tab */}
          <TabsContent value="account" className="space-y-6">
            {/* User Management */}
            <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                  <UserPlus className="w-5 h-5 text-primary" />
                  User Management
                </CardTitle>
                <CardDescription>Manage team members and access rights</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Current User */}
                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12 border-2 border-card shadow">
                        <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                          JS
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-foreground">John Smith</p>
                        <p className="text-sm text-muted-foreground">john@techstartup.com</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                      Administrator
                    </span>
                  </div>
                </div>

                {/* Team Members */}
                <div className="space-y-3">
                  <h4 className="font-medium text-foreground text-sm">Team Members</h4>
                  
                  <div className="p-3 rounded-xl bg-secondary border border-border flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-muted text-muted-foreground text-sm">AJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-foreground text-sm">Anna Johnson</p>
                        <p className="text-xs text-muted-foreground">anna@techstartup.com</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                      Member
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-secondary border border-border flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-muted text-muted-foreground text-sm">TM</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-foreground text-sm">Tom Miller</p>
                        <p className="text-xs text-muted-foreground">tom@techstartup.com</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                      Member
                    </span>
                  </div>
                </div>

                <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/10 rounded-xl">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Invite New Team Member
                </Button>
              </CardContent>
            </Card>

            {/* Security Settings */}
            <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  Security & Account
                </CardTitle>
                <CardDescription>Password and security settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-2xl bg-secondary border border-border flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Key className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Change Password</p>
                      <p className="text-sm text-muted-foreground">Last changed 30 days ago</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/10 rounded-xl">
                    Change
                  </Button>
                </div>

                <div className="p-4 rounded-2xl bg-secondary border border-border flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Bell className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Notifications</p>
                      <p className="text-sm text-muted-foreground">Manage email notifications</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/10 rounded-xl">
                    Manage
                  </Button>
                </div>

                <div className="p-4 rounded-2xl bg-destructive/10 border border-destructive/20 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                      <Trash2 className="w-5 h-5 text-destructive" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Delete Account</p>
                      <p className="text-sm text-muted-foreground">All data will be permanently deleted</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-destructive/30 text-destructive hover:bg-destructive/10 rounded-xl">
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default PersonalData;