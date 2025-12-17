import { useState } from 'react';
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
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <HeroSection scrollToSection={scrollToSection} />
      <USPSection />
      <LeistungenSection />
      <AboutSection />
      <ContactSection />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

function Header({
  scrollToSection,
  mobileMenuOpen,
  setMobileMenuOpen,
}: {
  scrollToSection: (id: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}) {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#96B522] rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-[#666D5A]">
                Lars Winter
              </div>
              <div className="text-sm text-gray-500">Energieberatung</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('leistungen')}
              className="text-[#666D5A] hover:text-[#96B522] transition-colors font-medium"
            >
              Leistungen
            </button>
            <button
              onClick={() => scrollToSection('ueber-mich')}
              className="text-[#666D5A] hover:text-[#96B522] transition-colors font-medium"
            >
              Über mich
            </button>
            <button
              onClick={() => scrollToSection('fuer-wen')}
              className="text-[#666D5A] hover:text-[#96B522] transition-colors font-medium"
            >
              Für Wen?
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="text-[#666D5A] hover:text-[#96B522] transition-colors font-medium"
            >
              Kontakt
            </button>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="relative px-4 py-2 border-2 border-gray-200 text-gray-400 rounded-xl font-medium cursor-not-allowed">
              Kunden-Login
              <span className="absolute -top-2 -right-2 bg-[#96B522] text-white text-xs px-2 py-0.5 rounded-full">
                Bald
              </span>
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="px-4 py-2 bg-[#96B522] text-white rounded-xl font-medium hover:bg-[#86a51e] transition-colors"
            >
              Termin vereinbaren
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#666D5A]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 space-y-4 border-t border-gray-100"
          >
            <button
              onClick={() => scrollToSection('leistungen')}
              className="block w-full text-left text-[#666D5A] hover:text-[#96B522] py-2 font-medium"
            >
              Leistungen
            </button>
            <button
              onClick={() => scrollToSection('ueber-mich')}
              className="block w-full text-left text-[#666D5A] hover:text-[#96B522] py-2 font-medium"
            >
              Über mich
            </button>
            <button
              onClick={() => scrollToSection('fuer-wen')}
              className="block w-full text-left text-[#666D5A] hover:text-[#96B522] py-2 font-medium"
            >
              Für Wen?
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="block w-full text-left text-[#666D5A] hover:text-[#96B522] py-2 font-medium"
            >
              Kontakt
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="w-full px-4 py-2 bg-[#96B522] text-white rounded-xl font-medium"
            >
              Termin vereinbaren
            </button>
          </motion.div>
        )}
      </nav>
    </header>
  );
}

function HeroSection({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#666D5A] leading-tight mb-6">
              Energieberatung modern gedacht.{' '}
              <span className="text-[#96B522]">
                Persönlich, digital, effizient.
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ihr zertifizierter Experte für Sanierungsfahrpläne (iSFP),
              Fördermittel und Effizienzhäuser in Schladen, Wolfenbüttel und
              Umgebung.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-[#666D5A]">
                <Award className="w-5 h-5 text-[#96B522]" />
                <span className="font-medium">Gebäudeenergieberater (HWK)</span>
              </div>
              <div className="flex items-center gap-2 text-[#666D5A]">
                <Award className="w-5 h-5 text-[#96B522]" />
                <span className="font-medium">
                  Energie-Effizienz-Experte (KfW + BAFA)
                </span>
              </div>
            </div>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#96B522] text-white rounded-xl font-semibold hover:bg-[#86a51e] transition-all shadow-lg hover:shadow-xl"
            >
              Kostenloses Erstgespräch
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
                alt="Moderne Energieberatung"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#96B522] rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-[#666D5A] text-lg">
                    100% Erfolgsquote
                  </div>
                  <div className="text-sm text-gray-500">
                    Bei Fördermittel-Anträgen
                  </div>
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
    {
      icon: User,
      title: 'Chef-Sache',
      description:
        'Kein Callcenter. Ich betreue Ihr Projekt persönlich – von der Analyse bis zur Baubegleitung.',
    },
    {
      icon: Zap,
      title: 'Digital & Einfach',
      description:
        'Schlanke Prozesse, weniger Papierkram und verständliche Ergebnisse statt Fachchinesisch.',
    },
    {
      icon: Shield,
      title: 'Fördermittel-Garantie',
      description:
        'Als gelisteter Experte hole ich das Maximum an BAFA- & KfW-Zuschüssen für Sie raus.',
    },
  ];

  return (
    <section className="py-20 bg-white" id="fuer-wen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#666D5A] mb-4">
            Warum Lars Winter?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Drei gute Gründe, die für eine Zusammenarbeit sprechen
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-14 h-14 bg-[#96B522] rounded-xl flex items-center justify-center mb-6">
                <usp.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#666D5A] mb-4">
                {usp.title}
              </h3>
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
    {
      icon: Home,
      title: 'Wohngebäude & Sanierung',
      services: [
        'iSFP Sanierungsfahrplan',
        'BAFA Einzelmaßnahmen',
        'Effizienzhaus Planung & Baubegleitung',
      ],
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      icon: Landmark,
      title: 'Spezial & Denkmal',
      services: [
        'Energetische Sanierung von Baudenkmalen',
        'Erhaltenswerter Bausubstanz',
      ],
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Calculator,
      title: 'Berechnungen',
      services: [
        'Heizlastberechnung',
        'Hydraulischer Abgleich (Verfahren B)',
        'Wärmebrückenberechnung',
      ],
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: FileText,
      title: 'Energieausweise',
      services: [
        'Bedarfs- und Verbrauchsausweise',
        'Wohn- und Nichtwohngebäude',
        'Nach DIN 18599',
      ],
      gradient: 'from-orange-500 to-red-600',
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="leistungen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#666D5A] mb-4">
            Meine Leistungen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Von der Analyse bis zur Umsetzung – alles aus einer Hand
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {leistungen.map((leistung, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${leistung.gradient} rounded-xl flex items-center justify-center mb-6`}
              >
                <leistung.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#666D5A] mb-4 group-hover:text-[#96B522] transition-colors">
                {leistung.title}
              </h3>
              <ul className="space-y-3">
                {leistung.services.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#96B522] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{service}</span>
                  </li>
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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80"
                alt="Lars Winter"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#666D5A] mb-6">
              Über mich
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Mein Name ist{' '}
                <span className="font-semibold text-[#666D5A]">
                  Lars Winter
                </span>
                . Als Gebäudeenergieberater (HWK) und Schornsteinfeger verbinde
                ich praktisches Handwerk mit theoretischer Expertise.
              </p>
              <p>
                Ich verkaufe Ihnen keine unnötige Technik, sondern plane das
                Haus, das zu Ihrem Leben passt.
              </p>
              <p>
                Mit jahrelanger Erfahrung in der Energieberatung und als
                gelisteter Energie-Effizienz-Experte für KfW und BAFA helfe ich
                Ihnen, Ihre Immobilie zukunftssicher und energieeffizient zu
                gestalten – von der ersten Analyse bis zur erfolgreichen
                Umsetzung.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-[#96B522] mb-2">
                  15+
                </div>
                <div className="text-gray-600">Jahre Erfahrung</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-[#96B522] mb-2">
                  500+
                </div>
                <div className="text-gray-600">Erfolgreiche Projekte</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Formular-Daten für Netlify aufbereiten
    const myForm = e.currentTarget;
    const formDataObj = new FormData(myForm);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formDataObj as any).toString(),
    })
      .then(() => {
        alert('Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.');
        // Formular zurücksetzen nach Erfolg
        setFormData({ name: '', email: '', phone: '', message: '' });
      })
      .catch((error) => alert('Fehler beim Senden: ' + error));
  };

  return (
    <section className="py-20 bg-gray-50" id="kontakt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#666D5A] mb-4">
            Kontakt aufnehmen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Lassen Sie uns über Ihr Projekt sprechen
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#96B522] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-[#666D5A] mb-1">
                    Adresse
                  </div>
                  <div className="text-gray-600">
                    Leo-von-Klenze-Str. 30
                    <br />
                    38315 Schladen
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#96B522] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-[#666D5A] mb-1">
                    Telefon
                  </div>
                  <a
                    href="tel:053359298612"
                    className="text-gray-600 hover:text-[#96B522] transition-colors block"
                  >
                    05335-9298612
                  </a>
                  <a
                    href="tel:01718347611"
                    className="text-gray-600 hover:text-[#96B522] transition-colors block"
                  >
                    0171-8347611
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#96B522] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-[#666D5A] mb-1">
                    E-Mail
                  </div>
                  <a
                    href="mailto:hallo@lw-energie.de"
                    className="text-gray-600 hover:text-[#96B522] transition-colors"
                  >
                    hallo@lw-energie.de
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 mt-8">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                  alt="Kontakt"
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <p className="text-gray-600">
                  Ich freue mich darauf, Sie bei Ihrem Projekt zu unterstützen
                  und gemeinsam die beste Lösung für Ihre Immobilie zu finden.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* NETLIFY FORMULAR */}
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              {/* HIDDEN INPUT FÜR NETLIFY */}
              <input type="hidden" name="form-name" value="contact" />

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#666D5A] mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name" // Name Attribut hinzugefügt
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#96B522] focus:border-transparent"
                    placeholder="Ihr Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#666D5A] mb-2"
                  >
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email" // Name Attribut hinzugefügt
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#96B522] focus:border-transparent"
                    placeholder="ihre@email.de"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[#666D5A] mb-2"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone" // Name Attribut hinzugefügt
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#96B522] focus:border-transparent"
                    placeholder="Ihre Telefonnummer"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#666D5A] mb-2"
                  >
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message" // Name Attribut hinzugefügt
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#96B522] focus:border-transparent resize-none"
                    placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#96B522] text-white rounded-xl font-semibold hover:bg-[#86a51e] transition-colors shadow-lg hover:shadow-xl"
                >
                  Nachricht senden
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) {
  return (
    <footer className="bg-[#666D5A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#96B522] rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">Lars Winter</div>
                <div className="text-sm text-gray-300">Energieberatung</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Ihr zertifizierter Partner für energieeffiziente Gebäudesanierung
              und Fördermittelberatung.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#96B522]" />
                <span>Leo-von-Klenze-Str. 30, 38315 Schladen</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#96B522]" />
                <span>05335-9298612 | 0171-8347611</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#96B522]" />
                <a
                  href="mailto:hallo@lw-energie.de"
                  className="hover:text-[#96B522] transition-colors"
                >
                  hallo@lw-energie.de
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('leistungen')}
                  className="hover:text-[#96B522] transition-colors"
                >
                  Leistungen
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('ueber-mich')}
                  className="hover:text-[#96B522] transition-colors"
                >
                  Über mich
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('fuer-wen')}
                  className="hover:text-[#96B522] transition-colors"
                >
                  Für Wen?
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('kontakt')}
                  className="hover:text-[#96B522] transition-colors"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.lw-energie.de/impressum"
                  className="hover:text-[#96B522] transition-colors"
                >
                  Impressum
                </a>
              </li>
              <li>
                <a
                  href="https://www.lw-energie.de/datenschutz"
                  className="hover:text-[#96B522] transition-colors"
                >
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>
            © {new Date().getFullYear()} Lars Winter Energieberatung. Alle
            Rechte vorbehalten.
          </p>
          <p className="mt-2">
            <a
              href="https://www.lw-energie.de"
              className="hover:text-[#96B522] transition-colors"
            >
              www.lw-energie.de
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default App;
