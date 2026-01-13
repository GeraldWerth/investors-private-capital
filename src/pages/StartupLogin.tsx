import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, TrendingUp, Users, LogOut, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const StartupLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const features = [
    {
      icon: TrendingUp,
      title: "Funding Rounds",
      description: "Apply for current funding rounds"
    },
    {
      icon: Users,
      title: "Pilot Projects",
      description: "Participate in exciting pilot projects"
    },
    {
      icon: LogOut,
      title: "Exit & Preparation",
      description: "Plan your successful exit"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Features */}
      <div className="hidden lg:flex lg:w-1/2 p-12 flex-col justify-center bg-accent">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
              <Rocket className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-accent-foreground">EIN Energy</h1>
              <p className="text-sm text-primary font-medium">Startups & Scaleups Portal</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-accent-foreground mb-4">
            Welcome to the<br />
            <span className="text-primary">
              Innovation Portal
            </span>
          </h2>
          <p className="text-accent-foreground/80 mb-10 text-lg">
            Your central hub for growth, financing, and strategic partnerships.
          </p>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-2xl bg-accent-foreground/5 backdrop-blur-sm border border-accent-foreground/10 hover:bg-accent-foreground/10 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-accent-foreground">{feature.title}</h3>
                  <p className="text-sm text-accent-foreground/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <Card className="w-full max-w-md border-0 shadow-2xl bg-card/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-2">
            <div className="lg:hidden flex items-center justify-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                <Rocket className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">EIN Energy</span>
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">Sign In</CardTitle>
            <CardDescription className="text-muted-foreground">
              Sign in to your energy portal
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@startup.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 border-border focus:border-primary focus:ring-primary rounded-xl bg-secondary/50"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-foreground font-medium">Password</Label>
                <button className="text-sm text-primary hover:text-accent font-medium transition-colors">
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 border-border focus:border-primary focus:ring-primary rounded-xl bg-secondary/50 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button asChild className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-lg transition-all duration-300 group">
              <Link to="/private-capital-dashboard">
                Sign In
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <p className="text-center text-xs text-muted-foreground pt-2">
              By signing in, you accept our{" "}
              <a href="#" className="text-primary hover:underline">Terms of Service</a>
              {" "}and{" "}
              <a href="#" className="text-primary hover:underline">Privacy Policy</a>
            </p>

            <p className="text-center text-sm text-muted-foreground">
              No account yet?{" "}
              <a href="#" className="text-primary hover:text-accent font-medium hover:underline transition-colors">
                Contact us
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StartupLogin;