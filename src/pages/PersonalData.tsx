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
    firstName: "Max",
    lastName: "Mustermann",
    email: "max@techstartup.de",
    phone: "+49 123 456789",
    position: "CEO & Gründer"
  });

  const [companyData, setCompanyData] = useState({
    name: "TechStartup GmbH",
    street: "Innovationsstraße 42",
    city: "Berlin",
    zip: "10115",
    country: "Deutschland",
    website: "www.techstartup.de",
    founded: "2022",
    employees: "12",
    description: "Wir entwickeln innovative Lösungen für nachhaltige Energie."
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link 
                to="/startup-dashboard" 
                className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline font-medium">Zurück</span>
              </Link>
              <div className="h-6 w-px bg-gray-200" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-gray-900">Persönliche Daten</h1>
                  <p className="text-xs text-gray-500">Profil & Unternehmen verwalten</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center">
                <Rocket className="w-4 h-4 text-white" />
              </div>
              <span className="hidden sm:inline text-sm font-semibold text-gray-900">EIN Energy</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="bg-white/80 backdrop-blur-sm border border-orange-100 p-1 rounded-2xl shadow-lg shadow-orange-100/30">
            <TabsTrigger 
              value="profile" 
              className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white px-6"
            >
              <User className="w-4 h-4 mr-2" />
              Profil
            </TabsTrigger>
            <TabsTrigger 
              value="company" 
              className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white px-6"
            >
              <Building2 className="w-4 h-4 mr-2" />
              Unternehmen
            </TabsTrigger>
            <TabsTrigger 
              value="account" 
              className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white px-6"
            >
              <Settings className="w-4 h-4 mr-2" />
              Konto
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="border-0 shadow-xl shadow-orange-100/50 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-500" />
                  Persönliches Profil
                </CardTitle>
                <CardDescription>Verwalten Sie Ihre persönlichen Kontaktdaten</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Avatar Section */}
                <div className="flex items-center gap-6 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100">
                  <Avatar className="w-20 h-20 border-4 border-white shadow-lg">
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-2xl font-bold">
                      {profileData.firstName[0]}{profileData.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{profileData.firstName} {profileData.lastName}</h3>
                    <p className="text-sm text-gray-500">{profileData.position}</p>
                    <Button variant="outline" size="sm" className="mt-2 border-blue-200 text-blue-600 hover:bg-blue-50">
                      <Upload className="w-4 h-4 mr-2" />
                      Foto ändern
                    </Button>
                  </div>
                </div>

                {/* Profile Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-700 font-medium">Vorname</Label>
                    <Input
                      id="firstName"
                      value={profileData.firstName}
                      onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
                      className="h-11 border-gray-200 focus:border-blue-400 focus:ring-blue-400 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-700 font-medium">Nachname</Label>
                    <Input
                      id="lastName"
                      value={profileData.lastName}
                      onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                      className="h-11 border-gray-200 focus:border-blue-400 focus:ring-blue-400 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      E-Mail
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      className="h-11 border-gray-200 focus:border-blue-400 focus:ring-blue-400 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700 font-medium flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      Telefon
                    </Label>
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                      className="h-11 border-gray-200 focus:border-blue-400 focus:ring-blue-400 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="position" className="text-gray-700 font-medium">Position im Unternehmen</Label>
                    <Input
                      id="position"
                      value={profileData.position}
                      onChange={(e) => setProfileData({...profileData, position: e.target.value})}
                      className="h-11 border-gray-200 focus:border-blue-400 focus:ring-blue-400 rounded-xl"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-200">
                    <Save className="w-4 h-4 mr-2" />
                    Änderungen speichern
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Company Tab */}
          <TabsContent value="company" className="space-y-6">
            <Card className="border-0 shadow-xl shadow-orange-100/50 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-blue-500" />
                  Unternehmensdetails
                </CardTitle>
                <CardDescription>Informationen zu Ihrem Startup</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Company Header */}
                <div className="flex items-center gap-6 p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{companyData.name}</h3>
                    <p className="text-sm text-gray-500">Gegründet {companyData.founded} · {companyData.employees} Mitarbeiter</p>
                  </div>
                </div>

                {/* Company Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="companyName" className="text-gray-700 font-medium">Unternehmensname</Label>
                    <Input
                      id="companyName"
                      value={companyData.name}
                      onChange={(e) => setCompanyData({...companyData, name: e.target.value})}
                      className="h-11 border-gray-200 focus:border-emerald-400 focus:ring-emerald-400 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="street" className="text-gray-700 font-medium flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      Straße & Hausnummer
                    </Label>
                    <Input
                      id="street"
                      value={companyData.street}
                      onChange={(e) => setCompanyData({...companyData, street: e.target.value})}
                      className="h-11 border-gray-200 focus:border-emerald-400 focus:ring-emerald-400 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip" className="text-gray-700 font-medium">PLZ</Label>
                    <Input
                      id="zip"
                      value={companyData.zip}
                      onChange={(e) => setCompanyData({...companyData, zip: e.target.value})}
                      className="h-11 border-gray-200 focus:border-emerald-400 focus:ring-emerald-400 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-gray-700 font-medium">Stadt</Label>
                    <Input
                      id="city"
                      value={companyData.city}
                      onChange={(e) => setCompanyData({...companyData, city: e.target.value})}
                      className="h-11 border-gray-200 focus:border-emerald-400 focus:ring-emerald-400 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-gray-700 font-medium flex items-center gap-2">
                      <Globe className="w-4 h-4 text-gray-400" />
                      Website
                    </Label>
                    <Input
                      id="website"
                      value={companyData.website}
                      onChange={(e) => setCompanyData({...companyData, website: e.target.value})}
                      className="h-11 border-gray-200 focus:border-emerald-400 focus:ring-emerald-400 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employees" className="text-gray-700 font-medium flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      Mitarbeiterzahl
                    </Label>
                    <Input
                      id="employees"
                      value={companyData.employees}
                      onChange={(e) => setCompanyData({...companyData, employees: e.target.value})}
                      className="h-11 border-gray-200 focus:border-emerald-400 focus:ring-emerald-400 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="founded" className="text-gray-700 font-medium flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      Gründungsjahr
                    </Label>
                    <Input
                      id="founded"
                      value={companyData.founded}
                      onChange={(e) => setCompanyData({...companyData, founded: e.target.value})}
                      className="h-11 border-gray-200 focus:border-emerald-400 focus:ring-emerald-400 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="description" className="text-gray-700 font-medium">Unternehmensbeschreibung</Label>
                    <Textarea
                      id="description"
                      value={companyData.description}
                      onChange={(e) => setCompanyData({...companyData, description: e.target.value})}
                      className="min-h-24 border-gray-200 focus:border-emerald-400 focus:ring-emerald-400 rounded-xl resize-none"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-xl shadow-lg shadow-emerald-200">
                    <Save className="w-4 h-4 mr-2" />
                    Änderungen speichern
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Account Tab */}
          <TabsContent value="account" className="space-y-6">
            {/* User Management */}
            <Card className="border-0 shadow-xl shadow-orange-100/50 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <UserPlus className="w-5 h-5 text-violet-500" />
                  Nutzerverwaltung
                </CardTitle>
                <CardDescription>Verwalten Sie Teammitglieder und Zugriffsrechte</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Current User */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12 border-2 border-white shadow">
                        <AvatarFallback className="bg-gradient-to-br from-violet-500 to-purple-500 text-white font-semibold">
                          MM
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-gray-900">Max Mustermann</p>
                        <p className="text-sm text-gray-500">max@techstartup.de</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-medium">
                      Administrator
                    </span>
                  </div>
                </div>

                {/* Team Members */}
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-700 text-sm">Teammitglieder</h4>
                  
                  <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gray-200 text-gray-600 text-sm">AK</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">Anna Klein</p>
                        <p className="text-xs text-gray-500">anna@techstartup.de</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                      Mitglied
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gray-200 text-gray-600 text-sm">TM</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">Tom Müller</p>
                        <p className="text-xs text-gray-500">tom@techstartup.de</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                      Mitglied
                    </span>
                  </div>
                </div>

                <Button variant="outline" className="w-full border-violet-200 text-violet-600 hover:bg-violet-50 rounded-xl">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Neues Teammitglied einladen
                </Button>
              </CardContent>
            </Card>

            {/* Security Settings */}
            <Card className="border-0 shadow-xl shadow-orange-100/50 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-orange-500" />
                  Sicherheit & Konto
                </CardTitle>
                <CardDescription>Passwort und Sicherheitseinstellungen</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                      <Key className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Passwort ändern</p>
                      <p className="text-sm text-gray-500">Zuletzt geändert vor 30 Tagen</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-orange-200 text-orange-600 hover:bg-orange-50 rounded-xl">
                    Ändern
                  </Button>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                      <Bell className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Benachrichtigungen</p>
                      <p className="text-sm text-gray-500">E-Mail-Benachrichtigungen verwalten</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-blue-200 text-blue-600 hover:bg-blue-50 rounded-xl">
                    Verwalten
                  </Button>
                </div>

                <div className="p-4 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                      <Trash2 className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Konto löschen</p>
                      <p className="text-sm text-gray-500">Alle Daten werden unwiderruflich gelöscht</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-red-200 text-red-600 hover:bg-red-100 rounded-xl">
                    Löschen
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
