import { ArrowLeft, Upload, FileText, Folder, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

interface UploadedFile {
  id: string;
  name: string;
  category: string;
  uploadedAt: string;
}

const DataRoom = () => {
  const [files, setFiles] = useState<UploadedFile[]>([
    { id: "1", name: "Gesellschaftsvertrag.pdf", category: "Legal", uploadedAt: "2024-01-15" },
    { id: "2", name: "Jahresabschluss_2023.pdf", category: "Financials", uploadedAt: "2024-01-10" },
  ]);

  const categories = [
    { name: "Company & Legal", description: "Gesellschaftsverträge, Satzung, Patente, Lizenzen, Handelsregister" },
    { name: "Financials & Funding", description: "Jahresabschlüsse, BWA, Forecasts, Cap Table, Funding History" },
    { name: "Product & Technology", description: "Produktdokumentation, Roadmaps, Tech Stack, IP-Portfolio" },
    { name: "Market & Business Model", description: "Marktanalysen, Wettbewerb, Geschäftsmodell, Pricing" },
    { name: "Team & Organization", description: "Lebensläufe, Organigramme, Vesting, Berater" },
    { name: "Traction & Partnerships", description: "KPIs, Kundenverträge, LOIs, Partnerschaften, Referenzen" },
  ];

  const handleFileUpload = (category: string) => {
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = true;
    input.onchange = (e) => {
      const target = e.target as HTMLInputElement;
      if (target.files) {
        const newFiles: UploadedFile[] = Array.from(target.files).map((file, index) => ({
          id: `${Date.now()}-${index}`,
          name: file.name,
          category,
          uploadedAt: new Date().toISOString().split("T")[0],
        }));
        setFiles((prev) => [...prev, ...newFiles]);
      }
    };
    input.click();
  };

  const handleDelete = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/startup-dashboard">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Data Room</h1>
              <p className="text-muted-foreground">Dokumente für Funding & Exit</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* All-in-One Upload Section */}
        <Card className="bg-card border-border mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Upload className="h-5 w-5 text-primary" />
              Alle Dokumente hochladen
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Laden Sie alle Dokumente in einer einzigen Datei hoch (z.B. ZIP-Archiv mit allen Unterlagen)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {files
                .filter((f) => f.category === "All-in-One")
                .map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <div>
                        <span className="text-sm font-medium text-foreground">{file.name}</span>
                        <p className="text-xs text-muted-foreground">Hochgeladen am {file.uploadedAt}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground hover:text-destructive"
                      onClick={() => handleDelete(file.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              <Button
                variant="default"
                className="w-full"
                onClick={() => handleFileUpload("All-in-One")}
              >
                <Upload className="h-4 w-4 mr-2" />
                Gesamtes Dokumentenpaket hochladen
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Category Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Card key={category.name} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Folder className="h-5 w-5 text-primary" />
                  {category.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  {files
                    .filter((f) => f.category === category.name)
                    .map((file) => (
                      <div
                        key={file.id}
                        className="flex items-center justify-between p-2 bg-muted/50 rounded-lg"
                      >
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-primary" />
                          <span className="text-sm text-foreground truncate max-w-[150px]">
                            {file.name}
                          </span>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 text-muted-foreground hover:text-destructive"
                          onClick={() => handleDelete(file.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => handleFileUpload(category.name)}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Hochladen
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DataRoom;
