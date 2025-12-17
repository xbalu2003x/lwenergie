import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  User,
  Zap,
  Shield,
  Home,
  Landmark,
  Calculator,
  FileText,
  ChevronRight,
  Award,
  ArrowLeft,
} from 'lucide-react';

// --- HAUPTKOMPONENTE ---
function App() {
  // Hier speichern wir, welche Seite gerade angezeigt wird ('home', 'impressum', 'datenschutz')
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Funktion zum Scrollen (nur auf der Startseite verfügbar)
  const scrollToSection = (id: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      // Kleiner Timeout, damit die Seite erst rendert, bevor gescrollt wird
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  // Wenn Impressum ausgewählt ist, zeige die Impressum-Komponente
  if (currentPage === 'impressum') {
    return <ImpressumPage onBack={() => setCurrentPage('home')} />;
  }

  // Wenn Datenschutz ausgewählt ist, zeige die Datenschutz-Komponente
  if (currentPage === 'datenschutz') {
    return <DatenschutzPage onBack={() => setCurrentPage('home')} />;
  }

  // Ansonsten zeige die normale Startseite
  return (
    <div className="min-h-screen bg-white">
      <Header
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        setCurrentPage={setCurrentPage}
      />
      <HeroSection scrollToSection={scrollToSection} />
      <USPSection />
      <LeistungenSection />
      <AboutSection />
      <ContactSection />
      <Footer 
        scrollToSection={scrollToSection} 
        openLegal={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

// --- IMPRESSUM SEITE ---
function ImpressumPage({ onBack }: { onBack: () => void }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white p-8 md:p-12 max-w-4xl mx-auto text-gray-800">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-[#96B522] font-semibold mb-8 hover:underline"
      >
        <ArrowLeft size={20} /> Zurück zur Startseite
      </button>
      
      <h1 className="text-3xl font-bold mb-6 text-[#666D5A]">Impressum</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
          <p>Lars Winter Energieberatung</p>
          <p>Leo-von-Klenze-Str. 30</p>
          <p>38315 Schladen</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
          <p>Telefon: 05335-9298612</p>
          <p>Mobil: 0171-8347611</p>
          <p>E-Mail: hallo@lw-energie.de</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p><strong>Berufsbezeichnung:</strong> Schornsteinfeger & Gebäudeenergieberater (HWK)</p>
          <p><strong>Zuständige Kammer:</strong> Handwerkskammer Braunschweig-Lüneburg-Stade</p>
          <p><strong>Verliehen in:</strong> Deutschland</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
          <p>DE300153730</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
          <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        </section>
      </div>
    </div>
  );
}

// --- DATENSCHUTZ SEITE ---
function DatenschutzPage({ onBack }: { onBack: () => void }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white p-8 md:p-12 max-w-4xl mx-auto text-gray-800">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-[#96B522] font-semibold mb-8 hover:underline"
      >
        <ArrowLeft size={20} /> Zurück zur Startseite
      </button>

      <h1 className="text-3xl font-bold mb-6 text-[#666D5A]">Datenschutzerklärung</h1>

      <div className="space-y-6 text-sm md:text-base">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Datenschutz auf einen Blick</h2>
          <h3 className="font-bold mt-2">Allgemeine Hinweise</h3>
          <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Hosting</h2>
          <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
          <h3 className="font-bold mt-2">Netlify</h3>
          <p>Anbieter ist die Netlify, Inc., 44 Montgomery Street, Suite 300, San Francisco, CA 94104, USA. Wenn Sie unsere Website besuchen, erfasst Netlify verschiedene Logfiles inklusive Ihrer IP-Adressen.</p>
          <p>Die Verwendung von Netlify erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3 className="font-bold mt-2">Datenschutz</h3>
          <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
          
          <h3 className="font-bold mt-2">Hinweis zur verantwortlichen Stelle</h3>
          <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
          <p className="mt-2">
            Lars Winter Energieberatung<br/>
            Leo-von-Klenze-Str. 30<br/>
            38315 Schladen
          </p>
          <p>Telefon: 05335-9298612<br/>E-Mail: hallo@lw-energie.de</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Datenerfassung auf dieser Website</h2>
          <h3 className="font-bold mt-2">Kontaktformular</h3>
          <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
          <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.</p>
          <p>Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.</p>
        </section>
      </div>
    </div>
  );
}

// --- HEADER ---
function Header({
  scrollToSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  setCurrentPage,
}: {
  scrollToSection: (id: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  setCurrentPage: (page: string) => void;
}) {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => setCurrentPage('home')}
          >
            <div className="w-10 h-10 bg-[#96B522] rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-[#666D5A]">Lars Winter</div>
              <div className="text-sm text-gray-500">Energieberatung</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('leistungen')} className="text-[#666D5A] hover:text-[#96B522] transition-colors font-medium">Leistungen</button>
            <button onClick={() => scrollToSection('ueber-mich')} className="text-[#666D5A] hover:text-[#96B522] transition-colors font-medium">Über mich</button>
            <button onClick={() => scrollToSection('fuer-wen')} className="text-[#666D5A] hover:text-[#96B522] transition-colors font-medium">Für Wen?</button>
            <button onClick={() => scrollToSection('kontakt')} className="text-[#666D5A] hover:text-[#96B522] transition-colors font-medium">Kontakt</button>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="relative px-4 py-2 border-2 border-gray-200 text-gray-400 rounded-xl font-medium cursor-not-allowed">
              Kunden-Login
              <span className="absolute -top-2 -right-2 bg-[#96B522] text-white text-xs px-2 py-0.5 rounded-full">Bald</span>
            </button>
            <button onClick={() => scrollToSection('kontakt')} className="px-4 py-2 bg-[#96B522] text-white rounded-xl font-medium hover:bg-[#86a51e] transition-colors">
              Termin vereinbaren
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-[#666D5A]">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden py-4 space-y-4 border-t border-gray-100">
            <button onClick={() => scrollToSection('leistungen')} className="block w-full text-left text-[#666D5A] hover:text-[#96B522] py-2 font-medium">Leistungen</button>
            <button onClick={() => scrollToSection('ueber-mich')} className="block w-full text-left text-[#666D5A] hover:text-[#96B522] py-2 font-medium">Über mich</button>
            <button onClick={() => scrollToSection('fuer-wen')} className="block w-full text-left text-[#666D5A] hover:text-[#96B522] py-2 font-medium">Für Wen?</button>
            <button onClick={() => scrollToSection('kontakt')} className="block w-full text-left text-[#666D5A] hover:text-[#96B522] py-2 font-medium">Kontakt</button>
          </motion.div>
        )}
      </nav>
    </header>
  );
}

// --- SECTIONS ---
function HeroSection({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#666D5A] leading-tight mb-6">
              Energieberatung modern gedacht.{' '}
              <span className="text-[#96B522]">Persönlich, digital, effizient.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ihr zertifizierter Experte für Sanierungsfahrpläne (iSFP), Fördermittel und Effizienzhäuser in Schladen, Wolfenbüttel und Umgebung.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-[#666D5A]">
                <Award className="w-5 h-5 text-[#96B522]" />
                <span className="font-medium">Gebäudeenergieberater (HWK)</span>
              </div>
              <div className="flex items-center gap-2 text-[#666D5A]">
                <Award className="w-5 h-5 text-[#96B522]" />
                <span className="font-medium">Energie-Effizienz-Experte (KfW + BAFA)</span>
              </div>
            </div>
            <button onClick={() => scrollToSection('kontakt')} className="group inline-flex items-center gap-2 px-8 py-4 bg-[#96B522] text-white rounded-xl font-semibold hover:bg-[#86a51e] transition-all shadow-lg hover:shadow-xl">
              Kostenloses Erstgespräch
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80" alt="Moderne Energieberatung" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#96B522] rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-[#666D5A] text-lg">100% Erfolgsquote</div>
                  <div className="text-sm text-gray-500">Bei Fördermittel-Anträgen</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function USPSection() {
  const usps = [
    { icon: User, title: 'Chef-Sache', description: 'Kein Callcenter. Ich betreue Ihr Projekt persönlich – von der Analyse bis zur Baubegleitung.' },
    { icon: Zap, title: 'Digital & Einfach', description: 'Schlanke Prozesse, weniger Papierkram und verständliche Ergebnisse statt Fachchinesisch.' },
    { icon: Shield, title: 'Fördermittel-Garantie', description: 'Als gelisteter Experte hole ich das Maximum an BAFA- & KfW-Zuschüssen für Sie raus.' },
  ];

  return (
    <section className="py-20 bg-white" id="fuer-wen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#666D5A] mb-4">Warum Lars Winter?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Drei gute Gründe, die für eine Zusammenarbeit sprechen</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-[#96B522] rounded-xl flex items-center justify-center mb-6"><usp.icon className="w-7 h-7 text-white" /></div>
              <h3 className="text-2xl font-bold text-[#666D5A] mb-4">{usp.title}</h3>
              <p className="text-gray-600 leading-relaxed">{usp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeistungenSection() {
  const leistungen = [
    { icon: Home, title: 'Wohngebäude & Sanierung', services: ['iSFP Sanierungsfahrplan', 'BAFA Einzelmaßnahmen', 'Effizienzhaus Planung & Baubegleitung'], gradient: 'from-emerald-500 to-teal-600' },
    { icon: Landmark, title: 'Spezial & Denkmal', services: ['Energetische Sanierung von Baudenkmalen', 'Erhaltenswerter Bausubstanz'], gradient: 'from-blue-500 to-cyan-600' },
    { icon: Calculator, title: 'Berechnungen', services: ['Heizlastberechnung', 'Hydraulischer Abgleich (Verfahren B)', 'Wärmebrückenberechnung'], gradient: 'from-purple-500 to-pink-600' },
    { icon: FileText, title: 'Energieausweise', services: ['Bedarfs- und Verbrauchsausweise', 'Wohn- und Nichtwohngebäude', 'Nach DIN 18599'], gradient: 'from-orange-500 to-red-600' },
  ];

  return (
    <section className="py-20 bg-gray-50" id="leistungen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#666D5A] mb-4">Meine Leistungen</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Von der Analyse bis zur Umsetzung – alles aus einer Hand</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {leistungen.map((leistung, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all border border-gray-100 group">
              <div className={`w-14 h-14 bg-gradient-to-br ${leistung.gradient} rounded-xl flex items-center justify-center mb-6`}><leistung.icon className="w-7 h-7 text-white" /></div>
              <h3 className="text-2xl font-bold text-[#666D5A] mb-4 group-hover:text-[#96B522] transition-colors">{leistung.title}</h3>
              <ul className="space-y-3">
                {leistung.services.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#96B522] flex-shrink-0 mt-0.5" /><span className="text-gray-600">{service}</span></li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-20 bg-white" id="ueber-mich">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80" alt="Lars Winter" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-[#666D5A] mb-6">Über mich</h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>Mein Name ist <span className="font-semibold text-[#666D5A]">Lars Winter</span>. Als Gebäudeenergieberater (HWK) und Schornsteinfeger verbinde ich praktisches Handwerk mit theoretischer Expertise.</p>
              <p>Ich verkaufe Ihnen keine unnötige Technik, sondern plane das Haus, das zu Ihrem Leben passt.</p>
              <p>Mit jahrelanger Erfahrung in der Energieberatung und als gelisteter Energie-Effizienz-Experte für KfW und BAFA helfe ich Ihnen, Ihre Immobilie zukunftssicher und energieeffizient zu gestalten.</p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl"><div className="text-3xl font-bold text-[#96B522] mb-2">15+</div><div className="text-gray-600">Jahre Erfahrung</div></div>
              <div className="bg-gray-50 p-6 rounded-xl"><div className="text-3xl font-bold text-[#96B522] mb-2">500+</div><div className="text-gray-600">Erfolgreiche Projekte</div></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const myForm = e.currentTarget;
    const formDataObj = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formDataObj as any).toString(),
    })
      .then(() => {
        alert("Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.");
        setFormData({ name: '', email: '', phone: '', message: '' });
      })
      .catch((error) => alert("Fehler beim Senden: " + error));
  };

  return (
    <section className="py-20 bg-gray-50" id="kontakt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#666D5A] mb-4">Kontakt aufnehmen</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Lassen Sie uns über Ihr Projekt sprechen</p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#96B522] rounded-xl flex items-center justify-center flex-shrink-0"><MapPin className="w-6 h-6 text-white" /></div>
                <div><div className="font-semibold text-[#666D5A] mb-1">Adresse</div><div className="text-gray-600">Leo-von-Klenze-Str. 30<br />38315 Schladen</div></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#96B522] rounded-xl flex items-center justify-center flex-shrink-0"><Phone className="w-6 h-6 text-white" /></div>
                <div><div className="font-semibold text-[#666D5A] mb-1">Telefon</div><a href="tel:053359298612" className="text-gray-600 hover:text-[#96B522] transition-colors block">05335-9298612</a><a href="tel:01718347611" className="text-gray-600 hover:text-[#96B522] transition-colors block">0171-8347611</a></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#96B522] rounded-xl flex items-center justify-center flex-shrink-0"><Mail className="w-6 h-6 text-white" /></div>
                <div><div className="font-semibold text-[#666D5A] mb-1">E-Mail</div><a href="mailto:hallo@lw-energie.de" className="text-gray-600 hover:text-[#96B522] transition-colors">hallo@lw-energie.de</a></div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 mt-8">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" alt="Kontakt" className="w-full h-48 object-cover rounded-xl mb-4" />
                <p className="text-gray-600">Ich freue mich darauf, Sie bei Ihrem Projekt zu unterstützen und gemeinsam die beste Lösung für Ihre Immobilie zu finden.</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <input type="hidden" name="form-name" value="contact" />
              <div className="space-y-6">
                <div><label htmlFor="name" className="block text-sm font-medium text-[#666D5A] mb-2">Name</label><input type="text" id="name" name="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#96B522] focus:border-transparent" placeholder="Ihr Name" /></div>
                <div><label htmlFor="email" className="block text-sm font-medium text-[#666D5A] mb-2">E-Mail</label><input type="email" id="email" name="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#96B522] focus:border-transparent" placeholder="ihre@email.de" /></div>
                <div><label htmlFor="phone" className="block text-sm font-medium text-[#666D5A] mb-2">Telefon</label><input type="tel" id="phone" name="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#96B522] focus:border-transparent" placeholder="Ihre Telefonnummer" /></div>
                <div><label htmlFor="message" className="block text-sm font-medium text-[#666D5A] mb-2">Nachricht</label><textarea id="message" name="message" required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#96B522] focus:border-transparent resize-none" placeholder="Beschreiben Sie kurz Ihr Anliegen..." /></div>
                <button type="submit" className="w-full px-8 py-4 bg-[#96B522] text-white rounded-xl font-semibold hover:bg-[#86a51e] transition-colors shadow-lg hover:shadow-xl">Nachricht senden</button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer({ scrollToSection, openLegal }: { scrollToSection: (id: string) => void, openLegal: (page: string) => void }) {
  return (
    <footer className="bg-[#666D5A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#96B522] rounded-lg flex items-center justify-center"><Zap className="w-6 h-6 text-white" /></div>
              <div><div className="text-xl font-bold">Lars Winter</div><div className="text-sm text-gray-300">Energieberatung</div></div>
            </div>
            <p className="text-gray-300 mb-4">Ihr zertifizierter Partner für energieeffiziente Gebäudesanierung und Fördermittelberatung.</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#96B522]" /><span>Leo-von-Klenze-Str. 30, 38315 Schladen</span></div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#96B522]" /><span>05335-9298612 | 0171-8347611</span></div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#96B522]" /><a href="mailto:hallo@lw-energie.de" className="hover:text-[#96B522] transition-colors">hallo@lw-energie.de</a></div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollToSection('leistungen')} className="hover:text-[#96B522] transition-colors">Leistungen</button></li>
              <li><button onClick={() => scrollToSection('ueber-mich')} className="hover:text-[#96B522] transition-colors">Über mich</button></li>
              <li><button onClick={() => scrollToSection('fuer-wen')} className="hover:text-[#96B522] transition-colors">Für Wen?</button></li>
              <li><button onClick={() => scrollToSection('kontakt')} className="hover:text-[#96B522] transition-colors">Kontakt</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => openLegal('impressum')} className="hover:text-[#96B522] transition-colors text-left">Impressum</button></li>
              <li><button onClick={() => openLegal('datenschutz')} className="hover:text-[#96B522] transition-colors text-left">Datenschutz</button></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} Lars Winter Energieberatung. Alle Rechte vorbehalten.</p>
          <p className="mt-2"><a href="https://www.lw-energie.de" className="hover:text-[#96B522] transition-colors">www.lw-energie.de</a></p>
        </div>
      </div>
    </footer>
  );
}

export default App;