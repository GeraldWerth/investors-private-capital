import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, User, TrendingUp, Users, LogOut, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const StartupLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const features = [
    {
      icon: User,
      title: "Persönliche Daten",
      description: "Verwalten Sie Ihr Profil und Unternehmensdaten"
    },
    {
      icon: TrendingUp,
      title: "Fundingrunden",
      description: "Bewerben Sie sich für aktuelle Finanzierungsrunden"
    },
    {
      icon: Users,
      title: "Pilotprojekte",
      description: "Nehmen Sie an spannenden Pilotprojekten teil"
    },
    {
      icon: LogOut,
      title: "Exit & Vorbereitung",
      description: "Planen Sie Ihren erfolgreichen Exit"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex">
      {/* Left Side - Features */}
      <div className="hidden lg:flex lg:w-1/2 p-12 flex-col justify-center">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-200">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">EIN Energy</h1>
              <p className="text-sm text-orange-600 font-medium">Startups & Scaleups Portal</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Willkommen im<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Innovationsportal
            </span>
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            Ihr zentraler Hub für Wachstum, Finanzierung und strategische Partnerschaften.
          </p>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-orange-100 hover:bg-white/80 hover:shadow-lg hover:shadow-orange-100 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center group-hover:from-orange-200 group-hover:to-amber-200 transition-colors">
                  <feature.icon className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <Card className="w-full max-w-md border-0 shadow-2xl shadow-orange-100/50 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-2">
            <div className="lg:hidden flex items-center justify-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">EIN Energy</span>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">Anmelden</CardTitle>
            <CardDescription className="text-gray-500">
              Melden Sie sich in Ihrem Startup-Portal an
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">E-Mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="ihre@startup.de"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 border-gray-200 focus:border-orange-400 focus:ring-orange-400 rounded-xl bg-gray-50/50"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-gray-700 font-medium">Passwort</Label>
                <button className="text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors">
                  Passwort vergessen?
                </button>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 border-gray-200 focus:border-orange-400 focus:ring-orange-400 rounded-xl bg-gray-50/50 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button asChild className="w-full h-12 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-xl shadow-lg shadow-orange-200 transition-all duration-300 hover:shadow-xl hover:shadow-orange-300 group">
              <Link to="/startup-dashboard">
                Anmelden
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Neu bei EIN Energy?</span>
              </div>
            </div>

            <Button 
              variant="outline" 
              className="w-full h-12 border-2 border-orange-200 text-orange-600 hover:bg-orange-50 hover:border-orange-300 font-semibold rounded-xl transition-all duration-300"
            >
              Startup registrieren
            </Button>

            <p className="text-center text-xs text-gray-400 pt-2">
              Mit der Anmeldung akzeptieren Sie unsere{" "}
              <a href="#" className="text-orange-600 hover:underline">Nutzungsbedingungen</a>
              {" "}und{" "}
              <a href="#" className="text-orange-600 hover:underline">Datenschutzrichtlinie</a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StartupLogin;
