"use client";

import { useState } from "react";

type Language = "DE" | "EN";

const copy = {
  DE: {
    nav: ["Unternehmen", "Geschäftsfelder", "Governance", "Kontakt"],
    eyebrow: "Schweizer Aktiengesellschaft · Globale Perspektive",
    title: "Werte schaffen, die Grenzen überschreiten.",
    intro:
      "Angel Global AG verbindet strategisches Denken, verantwortungsvolle Unternehmensführung und internationale Chancen zu nachhaltigem Wachstum.",
    primary: "Unternehmen entdecken",
    secondary: "Kontakt aufnehmen",
    metric1: "Schweizer Basis",
    metric2: "Globale Ausrichtung",
    metric3: "Verantwortung",
    aboutTag: "ÜBER UNS",
    aboutTitle: "Ein verlässlicher Partner für langfristige Entwicklung.",
    aboutText:
      "Wir entwickeln und begleiten Beteiligungen, Partnerschaften und zukunftsorientierte Projekte mit einem klaren Fokus auf Transparenz, Substanz und nachhaltige Wertschöpfung.",
    profileTag: "UNTERNEHMENSPROFIL",
    profileTitle: "Auf Schweizer Grundsätzen aufgebaut.",
    profileFacts: [
      ["Rechtsform", "Aktiengesellschaft (AG)"],
      ["Sitz", "Zürich, Schweiz"],
      ["Aktienkapital", "CHF 1’000’000"],
      ["Kapitalstruktur", "10’000 Aktien · Nennwert CHF 100"],
    ],
    profileNote:
      "Angaben gemäss den bereitgestellten Statuten. Rechtswirksamkeit und Registerangaben richten sich nach der amtlichen Eintragung und den Beschlüssen der zuständigen Organe.",
    pillars: [
      ["Strategische Beteiligungen", "Gezielte Entwicklung aussichtsreicher Unternehmen und Projekte."],
      ["Internationale Partnerschaften", "Verbindungen zwischen Märkten, Ideen und kompetenten Partnern."],
      ["Verantwortungsvolle Führung", "Klare Strukturen, nachvollziehbare Entscheidungen und langfristiges Denken."],
    ],
    sectorsTag: "GRUPPENSTRUKTUR",
    sectorsTitle: "Fünf spezialisierte Geschäftsfelder.",
    sectors: [
      ["Immobilien & Bau", "Wohn- und Gewerbeprojekte, Hotels, Einkaufszentren und Quartiersentwicklung."],
      ["Finanzen & Beteiligungen", "Beteiligungsmanagement, Fonds, globale Märkte sowie Edelmetall- und Währungsstrategien."],
      ["Industrie & Energie", "Industrieanlagen, Energie, Bergbau, Petrochemie und Nahrungsmittelproduktion."],
      ["Technologie", "Start-ups, Fintech, Softwareunternehmen und digitale Infrastruktur."],
      ["Internationaler Handel", "Import, Export, Logistik, Schifffahrt und Transport."],
    ],
    governanceTag: "GOVERNANCE & COMPLIANCE",
    governanceTitle: "Kontrolle, Verantwortung und Transparenz.",
    governanceItems: [
      ["9-köpfiger Verwaltungsrat", "Vorgesehene Struktur mit mindestens drei unabhängigen Mitgliedern und individuellen Amtszeiten."],
      ["Vier Fachausschüsse", "Audit, Investitionen, Compliance & Risiko sowie Vergütung & Nominierung."],
      ["Finanzberichterstattung", "Geschäftsjahr vom 1. Januar bis 31. Dezember; Berichterstattung nach IFRS oder Swiss GAAP FER."],
      ["Integritätsrahmen", "KYC/AML, Sanktionskontrollen, Interessenkonfliktregeln und vertraulicher Hinweisgeberkanal."],
    ],
    leadershipTag: "UNTERNEHMENSFÜHRUNG",
    leadershipTitle: "Verwaltungsrat & Geschäftsleitung",
    leadershipText:
      "Die Führung von Angel Global AG steht für Verantwortung, klare Entscheidungen und eine langfristige internationale Perspektive.",
    executiveName: "Mohammad Hossein Soroush",
    viceChairName: "Elham Mohammadpour",
    auditChairName: "Sajjad Soroush",
    roles: [
      "Chief Executive Officer & Präsident des Verwaltungsrats",
      "Vizepräsident/in des Verwaltungsrats",
      "Mitglied des Verwaltungsrats & Vorsitz Audit Committee",
    ],
    pending: "Angaben folgen",
    cryptoTag: "DIGITALE VERMÖGENSWERTE",
    cryptoTitle: "Transparenz schafft Vertrauen.",
    cryptoText:
      "Angel Global AG bereitet einen verifizierbaren Überblick über die ausgewiesene Krypto-Unterlegung vor. Beträge und Nachweise werden erst nach unabhängiger Prüfung veröffentlicht.",
    status: "Verifizierung in Vorbereitung",
    disclaimer: "Keine Anlageberatung · Angaben vorbehaltlich Prüfung",
    contactTitle: "Gemeinsam neue Möglichkeiten gestalten.",
    contactText: "Für Partnerschaften, Unternehmensanfragen und weitere Informationen.",
    contact: "Kontakt",
    footer: "Alle Rechte vorbehalten.",
  },
  EN: {
    nav: ["Company", "Business", "Governance", "Contact"],
    eyebrow: "Swiss Corporation · Global Perspective",
    title: "Creating value beyond borders.",
    intro:
      "Angel Global AG brings together strategic thinking, responsible governance and international opportunity to build sustainable growth.",
    primary: "Discover our company",
    secondary: "Get in touch",
    metric1: "Swiss foundation",
    metric2: "Global outlook",
    metric3: "Responsible growth",
    aboutTag: "ABOUT US",
    aboutTitle: "A trusted partner for long-term development.",
    aboutText:
      "We develop and support investments, partnerships and forward-looking projects with a clear focus on transparency, substance and sustainable value creation.",
    profileTag: "CORPORATE PROFILE",
    profileTitle: "Built on Swiss corporate principles.",
    profileFacts: [
      ["Legal form", "Aktiengesellschaft (AG)"],
      ["Registered office", "Zurich, Switzerland"],
      ["Share capital", "CHF 1,000,000"],
      ["Capital structure", "10,000 shares · CHF 100 nominal value"],
    ],
    profileNote:
      "Information is based on the provided articles of association. Legal effect and registry particulars remain subject to official registration and resolutions of the competent corporate bodies.",
    pillars: [
      ["Strategic Investments", "Focused development of promising companies and projects."],
      ["International Partnerships", "Connecting markets, ideas and capable partners."],
      ["Responsible Governance", "Clear structures, accountable decisions and long-term thinking."],
    ],
    sectorsTag: "GROUP STRUCTURE",
    sectorsTitle: "Five specialised business verticals.",
    sectors: [
      ["Real Estate & Construction", "Residential and commercial projects, hotels, shopping centres and urban development."],
      ["Finance & Investment", "Investment management, funds, global markets, precious metals and currency strategies."],
      ["Industry & Energy", "Industrial facilities, energy, mining, petrochemicals and food production."],
      ["Technology", "Start-ups, fintech, software companies and digital infrastructure."],
      ["International Trade", "Import, export, logistics, shipping and transportation."],
    ],
    governanceTag: "GOVERNANCE & COMPLIANCE",
    governanceTitle: "Control, accountability and transparency.",
    governanceItems: [
      ["Nine-member board", "The contemplated structure includes at least three independent directors and individual terms."],
      ["Four specialist committees", "Audit, Investment, Compliance & Risk, and Remuneration & Nomination."],
      ["Financial reporting", "Financial year from 1 January to 31 December; reporting under IFRS or Swiss GAAP FER."],
      ["Integrity framework", "KYC/AML, sanctions controls, conflict-of-interest rules and a confidential whistleblowing channel."],
    ],
    leadershipTag: "LEADERSHIP",
    leadershipTitle: "Board of Directors & Executive Management",
    leadershipText:
      "The leadership of Angel Global AG represents accountability, clear decision-making and a long-term international perspective.",
    executiveName: "Mohammad Hossein Soroush",
    viceChairName: "Elham Mohammadpour",
    auditChairName: "Sajjad Soroush",
    roles: [
      "Chief Executive Officer & Chairman of the Board",
      "Vice-Chair of the Board",
      "Board Member & Chair of the Audit Committee",
    ],
    pending: "Details forthcoming",
    cryptoTag: "DIGITAL ASSETS",
    cryptoTitle: "Transparency builds trust.",
    cryptoText:
      "Angel Global AG is preparing a verifiable overview of its stated crypto backing. Amounts and supporting evidence will only be published after independent verification.",
    status: "Verification in preparation",
    disclaimer: "Not investment advice · Information subject to verification",
    contactTitle: "Let’s shape new opportunities.",
    contactText: "For partnerships, corporate enquiries and further information.",
    contact: "Contact us",
    footer: "All rights reserved.",
  },
  FA: {
    nav: ["درباره شرکت", "حوزه‌های فعالیت", "مدیریت", "تماس"],
    eyebrow: "شرکت سهامی سوئیسی · چشم‌انداز جهانی",
    title: "خلق ارزش، فراتر از مرزها.",
    intro:
      "Angel Global AG با ترکیب تفکر راهبردی، حاکمیت مسئولانه و فرصت‌های بین‌المللی، مسیر رشد پایدار را می‌سازد.",
    primary: "معرفی شرکت",
    secondary: "تماس با ما",
    metric1: "پایه سوئیسی",
    metric2: "نگاه جهانی",
    metric3: "رشد مسئولانه",
    aboutTag: "درباره ما",
    aboutTitle: "شریکی قابل‌اعتماد برای توسعه بلندمدت.",
    aboutText:
      "ما سرمایه‌گذاری‌ها، مشارکت‌ها و پروژه‌های آینده‌محور را با تمرکز روشن بر شفافیت، اعتبار و ارزش‌آفرینی پایدار توسعه می‌دهیم.",
    profileTag: "پروفایل حقوقی شرکت",
    profileTitle: "ساختاری مبتنی بر اصول شرکتی سوئیس.",
    profileFacts: [
      ["شکل حقوقی", "شرکت سهامی (AG)"],
      ["مقر ثبتی", "زوریخ، سوئیس"],
      ["سرمایه سهام", "۱٬۰۰۰٬۰۰۰ فرانک سوئیس"],
      ["ساختار سرمایه", "۱۰٬۰۰۰ سهم · ارزش اسمی هر سهم ۱۰۰ فرانک"],
    ],
    profileNote:
      "اطلاعات این بخش بر اساس اساسنامه ارائه‌شده تنظیم شده است. اعتبار حقوقی و مشخصات ثبتی نهایی تابع ثبت رسمی و مصوبات ارکان صلاحیت‌دار شرکت است.",
    pillars: [
      ["سرمایه‌گذاری راهبردی", "توسعه هدفمند شرکت‌ها و پروژه‌های دارای چشم‌انداز."],
      ["مشارکت بین‌المللی", "پیوند بازارها، ایده‌ها و شرکای توانمند."],
      ["حاکمیت مسئولانه", "ساختار شفاف، تصمیم‌گیری پاسخ‌گو و نگاه بلندمدت."],
    ],
    sectorsTag: "ساختار گروه",
    sectorsTitle: "پنج حوزه تخصصی فعالیت.",
    sectors: [
      ["املاک و ساخت‌وساز", "پروژه‌های مسکونی و تجاری، هتل‌ها، مراکز خرید و توسعه شهری."],
      ["مالی و سرمایه‌گذاری", "مدیریت سرمایه‌گذاری، صندوق‌ها، بازارهای جهانی، فلزات گران‌بها و ارز."],
      ["صنعت و انرژی", "کارخانه‌ها، انرژی، معادن، پتروشیمی و صنایع غذایی."],
      ["فناوری", "استارتاپ‌ها، فین‌تک، شرکت‌های نرم‌افزاری و زیرساخت دیجیتال."],
      ["تجارت بین‌المللی", "واردات، صادرات، لجستیک، کشتیرانی و حمل‌ونقل."],
    ],
    governanceTag: "حاکمیت و انطباق",
    governanceTitle: "کنترل، پاسخ‌گویی و شفافیت.",
    governanceItems: [
      ["هیئت‌مدیره ۹نفره", "ساختار پیش‌بینی‌شده با حداقل سه عضو مستقل و دوره‌های عضویت فردی."],
      ["چهار کمیته تخصصی", "حسابرسی، سرمایه‌گذاری، انطباق و ریسک، و حقوق و انتصابات."],
      ["گزارشگری مالی", "سال مالی از اول ژانویه تا ۳۱ دسامبر؛ گزارشگری بر مبنای IFRS یا Swiss GAAP FER."],
      ["چارچوب سلامت سازمانی", "الزامات KYC/AML، کنترل تحریم‌ها، تعارض منافع و کانال محرمانه گزارش تخلف."],
    ],
    leadershipTag: "مدیریت شرکت",
    leadershipTitle: "مدیرعامل و اعضای هیئت‌مدیره",
    leadershipText:
      "مدیریت Angel Global AG بر پایه مسئولیت‌پذیری، تصمیم‌گیری شفاف و چشم‌انداز بلندمدت بین‌المللی شکل گرفته است.",
    executiveName: "محمدحسین سروش",
    viceChairName: "الهام محمدپور",
    auditChairName: "سجاد سروش",
    roles: [
      "مدیرعامل و رئیس هیئت‌مدیره",
      "نایب‌رئیس هیئت‌مدیره",
      "عضو هیئت‌مدیره و رئیس کمیته حسابرسی",
    ],
    pending: "اطلاعات به‌زودی",
    cryptoTag: "دارایی‌های دیجیتال",
    cryptoTitle: "شفافیت، پایه اعتماد است.",
    cryptoText:
      "Angel Global AG در حال آماده‌سازی گزارش قابل‌راستی‌آزمایی از پشتوانه رمزارزی اعلام‌شده است. مبلغ و مستندات تنها پس از بررسی مستقل منتشر می‌شود.",
    status: "در حال آماده‌سازی اعتبارسنجی",
    disclaimer: "این اطلاعات توصیه سرمایه‌گذاری نیست · اطلاعات مشروط به راستی‌آزمایی",
    contactTitle: "فرصت‌های تازه را با هم می‌سازیم.",
    contactText: "برای همکاری، درخواست‌های سازمانی و دریافت اطلاعات بیشتر.",
    contact: "تماس با ما",
    footer: "تمامی حقوق محفوظ است.",
  },
};

const holdingContent = {
  DE: {
    overviewTag: "ANGEL GLOBAL HOLDING", overviewTitle: "Eine Plattform. Fünf Sektoren. Ein langfristiger Horizont.",
    overviewText: "Wir verbinden Kapital, operative Expertise und internationale Netzwerke, um eigenständige Unternehmen verantwortungsvoll zu entwickeln.",
    stats: [["5", "Geschäftsfelder"], ["3", "Kontinente im Fokus"], ["4", "Governance-Ausschüsse"], ["100%", "Langfristige Ausrichtung"]],
    portfolioTag: "PORTFOLIO", portfolioTitle: "Aktive Wertschöpfung über den gesamten Beteiligungszyklus.",
    portfolioSteps: [["01", "Identifizieren", "Sektoren und Unternehmen mit robustem Potenzial."], ["02", "Investieren", "Diszipliniertes Kapital mit klaren Entscheidungskriterien."], ["03", "Entwickeln", "Strategie, Governance, Technologie und Marktzugang."], ["04", "Skalieren", "Internationale Partnerschaften und nachhaltiges Wachstum."]],
    irTag: "INVESTOR RELATIONS", irTitle: "Informationen für Aktionäre und Partner.", irText: "Ein zentraler Zugang zu Unternehmensprofil, Governance-Grundsätzen, Finanzkalender und zukünftigen Berichten.",
    documents: ["Corporate Profile", "Governance Charter", "Code of Conduct", "Sustainability Framework"], download: "In Vorbereitung",
    sustainabilityTag: "NACHHALTIGKEIT", sustainabilityTitle: "Wachstum mit Verantwortung.", sustainability: [["Umwelt", "Ressourceneffizienz und Klimarisiken in Investitionsentscheidungen integrieren."], ["Menschen", "Sichere Arbeit, Vielfalt, Entwicklung und faire Partnerschaften fördern."], ["Governance", "Integrität, Kontrolle und nachvollziehbare Verantwortlichkeiten sichern."]],
    newsTag: "NEWSROOM", newsTitle: "Aktuelles aus der Gruppe.", news: [["Corporate", "Gruppenstrategie 2026", "Angel Global AG richtet die Plattform auf ausgewählte internationale Wachstumsfelder aus."], ["Governance", "Governance-Rahmen", "Ausschussstruktur und Kontrollprinzipien werden gruppenweit harmonisiert."], ["Partnerships", "Partnernetzwerk", "Neue strategische Gespräche in Europa, dem Nahen Osten und Asien."]],
    careersTag: "KARRIERE", careersTitle: "Mit unternehmerischen Menschen Zukunft gestalten.", careersText: "Wir suchen Menschen mit Verantwortung, Urteilskraft und internationaler Perspektive.", careersCta: "Initiativbewerbung",
    officesTag: "PRÄSENZ", officesTitle: "Schweizer Basis. Internationale Reichweite.", offices: [["Zürich", "Hauptsitz · Schweiz"], ["Europa", "Investitionen & Partnerschaften"], ["Middle East", "Strategische Märkte"], ["Asia", "Wachstum & Handel"]],
    legal: "Impressum · Datenschutz · Compliance · Hinweisgeberkanal"
  },
  EN: {
    overviewTag: "ANGEL GLOBAL HOLDING", overviewTitle: "One platform. Five sectors. A long-term horizon.", overviewText: "We connect capital, operational expertise and international networks to responsibly develop independent businesses.",
    stats: [["5", "Business verticals"], ["3", "Focus continents"], ["4", "Governance committees"], ["100%", "Long-term orientation"]],
    portfolioTag: "PORTFOLIO", portfolioTitle: "Active value creation across the investment lifecycle.", portfolioSteps: [["01", "Identify", "Sectors and businesses with resilient potential."], ["02", "Invest", "Disciplined capital with clear decision criteria."], ["03", "Develop", "Strategy, governance, technology and market access."], ["04", "Scale", "International partnerships and sustainable growth."]],
    irTag: "INVESTOR RELATIONS", irTitle: "Information for shareholders and partners.", irText: "A central gateway to the corporate profile, governance principles, financial calendar and future reports.", documents: ["Corporate Profile", "Governance Charter", "Code of Conduct", "Sustainability Framework"], download: "In preparation",
    sustainabilityTag: "SUSTAINABILITY", sustainabilityTitle: "Growth with responsibility.", sustainability: [["Environment", "Integrating resource efficiency and climate risk into investment decisions."], ["People", "Advancing safe work, diversity, development and fair partnerships."], ["Governance", "Securing integrity, control and accountable ownership."]],
    newsTag: "NEWSROOM", newsTitle: "Latest from the group.", news: [["Corporate", "Group strategy 2026", "Angel Global AG aligns its platform with selected international growth fields."], ["Governance", "Governance framework", "Committee structures and control principles are being harmonised across the group."], ["Partnerships", "Partner network", "New strategic discussions across Europe, the Middle East and Asia."]],
    careersTag: "CAREERS", careersTitle: "Build the future with entrepreneurial people.", careersText: "We look for people with accountability, sound judgement and an international perspective.", careersCta: "Open application",
    officesTag: "PRESENCE", officesTitle: "Swiss foundation. International reach.", offices: [["Zurich", "Head office · Switzerland"], ["Europe", "Investment & partnerships"], ["Middle East", "Strategic markets"], ["Asia", "Growth & trade"]], legal: "Legal notice · Privacy · Compliance · Speak-up channel"
  },
  FA: {
    overviewTag: "هلدینگ ANGEL GLOBAL", overviewTitle: "یک پلتفرم، پنج حوزه، یک افق بلندمدت.", overviewText: "ما سرمایه، تخصص اجرایی و شبکه‌های بین‌المللی را برای توسعه مسئولانه شرکت‌های مستقل کنار هم قرار می‌دهیم.",
    stats: [["۵", "حوزه کسب‌وکار"], ["۳", "قاره هدف"], ["۴", "کمیته حاکمیتی"], ["۱۰۰٪", "نگاه بلندمدت"]],
    portfolioTag: "سبد سرمایه‌گذاری", portfolioTitle: "ارزش‌آفرینی فعال در تمام چرخه سرمایه‌گذاری.", portfolioSteps: [["۰۱", "شناسایی", "حوزه‌ها و کسب‌وکارهای دارای ظرفیت پایدار."], ["۰۲", "سرمایه‌گذاری", "تخصیص منضبط سرمایه با معیارهای روشن."], ["۰۳", "توسعه", "راهبرد، حاکمیت، فناوری و دسترسی به بازار."], ["۰۴", "مقیاس‌پذیری", "مشارکت بین‌المللی و رشد پایدار."]],
    irTag: "روابط سرمایه‌گذاران", irTitle: "اطلاعات سهام‌داران و شرکای تجاری.", irText: "درگاه مرکزی پروفایل شرکت، اصول حاکمیت، تقویم مالی و گزارش‌های آتی.", documents: ["پروفایل شرکت", "منشور حاکمیت", "آیین‌نامه اخلاق", "چارچوب پایداری"], download: "در حال آماده‌سازی",
    sustainabilityTag: "پایداری", sustainabilityTitle: "رشد همراه با مسئولیت.", sustainability: [["محیط‌زیست", "ادغام بهره‌وری منابع و ریسک اقلیمی در تصمیم‌های سرمایه‌گذاری."], ["سرمایه انسانی", "ترویج محیط کار امن، تنوع، توسعه و مشارکت منصفانه."], ["حاکمیت", "تضمین سلامت، کنترل و مسئولیت‌پذیری شفاف."]],
    newsTag: "رسانه و اخبار", newsTitle: "آخرین اخبار گروه.", news: [["شرکت", "راهبرد گروه در ۲۰۲۶", "تمرکز پلتفرم Angel Global AG بر حوزه‌های منتخب رشد بین‌المللی."], ["حاکمیت", "چارچوب حاکمیت", "هماهنگ‌سازی ساختار کمیته‌ها و اصول کنترل در سطح گروه."], ["مشارکت‌ها", "شبکه شرکای تجاری", "گفت‌وگوهای راهبردی تازه در اروپا، خاورمیانه و آسیا."]],
    careersTag: "فرصت‌های شغلی", careersTitle: "آینده را با افراد کارآفرین می‌سازیم.", careersText: "به‌دنبال افرادی مسئولیت‌پذیر، دقیق و دارای نگاه بین‌المللی هستیم.", careersCta: "ارسال درخواست همکاری",
    officesTag: "حضور بین‌المللی", officesTitle: "پایه سوئیسی، دسترسی جهانی.", offices: [["زوریخ", "دفتر مرکزی · سوئیس"], ["اروپا", "سرمایه‌گذاری و مشارکت"], ["خاورمیانه", "بازارهای راهبردی"], ["آسیا", "رشد و تجارت"]], legal: "اطلاعات حقوقی · حریم خصوصی · انطباق · گزارش محرمانه"
  }
};

const sectionMenu = {
  DE: [
    ["company", "⌂", "Unternehmen"], ["business", "◇", "Geschäftsfelder"],
    ["portfolio", "▥", "Portfolio"], ["governance", "♜", "Governance"],
    ["investors", "↗", "Investor Relations"], ["sustainability", "♧", "Nachhaltigkeit"],
    ["news", "◫", "Newsroom"], ["careers", "◎", "Karriere"],
    ["presence", "⌖", "Präsenz"], ["contact", "✉", "Kontakt"]
  ],
  EN: [
    ["company", "⌂", "Company"], ["business", "◇", "Business"],
    ["portfolio", "▥", "Portfolio"], ["governance", "♜", "Governance"],
    ["investors", "↗", "Investor Relations"], ["sustainability", "♧", "Sustainability"],
    ["news", "◫", "Newsroom"], ["careers", "◎", "Careers"],
    ["presence", "⌖", "Global Presence"], ["contact", "✉", "Contact"]
  ],
  FA: [
    ["company", "⌂", "معرفی شرکت"], ["business", "◇", "حوزه‌های فعالیت"],
    ["portfolio", "▥", "سبد سرمایه‌گذاری"], ["governance", "♜", "حاکمیت شرکتی"],
    ["investors", "↗", "روابط سرمایه‌گذاران"], ["sustainability", "♧", "پایداری"],
    ["news", "◫", "اخبار گروه"], ["careers", "◎", "فرصت‌های شغلی"],
    ["presence", "⌖", "حضور بین‌المللی"], ["contact", "✉", "تماس با ما"]
  ]
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("DE");
  const t = copy[language];
  const h = holdingContent[language];
  const menu = sectionMenu[language];
  const rtl = false;

  return (
    <main dir={rtl ? "rtl" : "ltr"} className={rtl ? "rtl" : ""}>
      <header className="nav-shell">
        <a className="brand" href="#top" aria-label="Angel Global AG home">
          <img src="/Angelglobalag/angel-logo.jpeg" alt="Angel Global AG" />
          <span>ANGEL <small>GLOBAL AG</small></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#company">{t.nav[0]}</a>
          <a href="#business">{t.nav[1]}</a>
          <a href="#governance">{t.nav[2]}</a>
          <a href="#contact">{t.nav[3]}</a>
        </nav>
        <div className="language" aria-label="Language selector">
          {(["DE", "EN"] as Language[]).map((item) => (
            <button
              key={item}
              className={language === item ? "active" : ""}
              onClick={() => setLanguage(item)}
              aria-pressed={language === item}
            >
              {item}
            </button>
          ))}
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-content">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="hero-copy">{t.intro}</p>
          <div className="actions">
            <a className="button gold" href="#company">{t.primary}</a>
            <a className="button ghost" href="#contact">{t.secondary}</a>
          </div>
        </div>
        <div className="hero-mark">
          <div className="glow" />
          <img src="/Angelglobalag/angel-logo.jpeg" alt="" />
        </div>
        <div className="metrics">
          <span><b>CH</b>{t.metric1}</span>
          <span><b>360°</b>{t.metric2}</span>
          <span><b>ESG</b>{t.metric3}</span>
        </div>
      </section>

      <section className="icon-directory" aria-label="Site sections">
        {menu.map(([target, icon, label]) => (
          <a href={`#${target}`} className="directory-item" key={target}>
            <span className="directory-icon" aria-hidden="true">{icon}</span>
            <strong>{label}</strong>
            <i aria-hidden="true">↗</i>
          </a>
        ))}
      </section>

      <section className="section about" id="company">
        <div>
          <p className="section-tag">{t.aboutTag}</p>
          <h2>{t.aboutTitle}</h2>
        </div>
        <p className="lead">{t.aboutText}</p>
      </section>

      <section className="holding-overview">
        <div className="holding-copy"><p className="section-tag">{h.overviewTag}</p><h2>{h.overviewTitle}</h2><p>{h.overviewText}</p></div>
        <div className="holding-stats">{h.stats.map(([value,label]) => <article key={label}><strong>{value}</strong><span>{label}</span></article>)}</div>
      </section>

      <section className="pillars" id="business">
        {t.pillars.map(([title, text], index) => (
          <article key={title}>
            <span>0{index + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="corporate-profile">
        <div className="profile-intro">
          <p className="section-tag">{t.profileTag}</p>
          <h2>{t.profileTitle}</h2>
        </div>
        <div className="fact-grid">
          {t.profileFacts.map(([label, value]) => (
            <article key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </article>
          ))}
        </div>
        <p className="source-note">{t.profileNote}</p>
      </section>

      <section className="section sectors">
        <div className="section-heading">
          <p className="section-tag">{t.sectorsTag}</p>
          <h2>{t.sectorsTitle}</h2>
        </div>
        <div className="sector-grid">
          {t.sectors.map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-cycle" id="portfolio">
        <div className="portfolio-head"><p className="section-tag">{h.portfolioTag}</p><h2>{h.portfolioTitle}</h2></div>
        <div className="cycle-grid">{h.portfolioSteps.map(([n,title,text]) => <article key={title}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="governance-framework" id="governance-framework">
        <div className="framework-heading">
          <p className="section-tag">{t.governanceTag}</p>
          <h2>{t.governanceTitle}</h2>
        </div>
        <div className="framework-grid">
          {t.governanceItems.map(([title, text]) => (
            <article key={title}>
              <i />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section leadership" id="governance">
        <div className="section-heading">
          <p className="section-tag">{t.leadershipTag}</p>
          <h2>{t.leadershipTitle}</h2>
          <p>{t.leadershipText}</p>
        </div>
        <div className="people-grid">
          {t.roles.map((role, index) => (
            <article className="person" key={`${role}-${index}`}>
              {index === 0 ? (
                <div className="executive-portrait executive-photo">
                  <img
                    src="/Angelglobalag/mohammad-hossein-soroush-executive-v2.jpg"
                    alt={`${t.executiveName} — ${role}`}
                  />
                  <span className="executive-badge">CEO · CHAIRMAN</span>
                </div>
              ) : index === 1 ? (
                <div className="executive-portrait executive-photo executive-photo-elham">
                  <img
                    src="/Angelglobalag/elham-mohammadpour-executive-v2.jpg"
                    alt={`${t.viceChairName} — ${role}`}
                  />
                  <span className="executive-badge">VICE-CHAIR</span>
                </div>
              ) : index === 2 ? (
                <div className="executive-portrait executive-photo executive-photo-sajjad">
                  <img
                    src="/Angelglobalag/sajjad-soroush-executive-v2.jpg"
                    alt={`${t.auditChairName} — ${role}`}
                  />
                  <span className="executive-badge">BOARD · AUDIT CHAIR</span>
                </div>
              ) : (
                <div className="portrait-placeholder">
                  <span>BOD</span>
                </div>
              )}
              <div>
                <p className="person-name">
                  {index === 0
                    ? t.executiveName
                    : index === 1
                      ? t.viceChairName
                      : index === 2
                        ? t.auditChairName
                        : t.pending}
                </p>
                <p className="person-role">{role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="crypto">
        <div className="crypto-copy">
          <p className="section-tag">{t.cryptoTag}</p>
          <h2>{t.cryptoTitle}</h2>
          <p>{t.cryptoText}</p>
          <small>{t.disclaimer}</small>
        </div>
        <div className="verification-card">
          <div className="status-row">
            <span className="status-dot" />
            <span>{t.status}</span>
          </div>
          <div className="chain">
            <i /><i /><i /><i /><i />
          </div>
          <strong>ANGEL GLOBAL AG</strong>
          <span>Digital Asset Disclosure</span>
        </div>
      </section>

      <section className="investor-relations" id="investors">
        <div><p className="section-tag">{h.irTag}</p><h2>{h.irTitle}</h2><p>{h.irText}</p></div>
        <div className="document-list">{h.documents.map((doc) => <article key={doc}><strong>{doc}</strong><span>{h.download}</span></article>)}</div>
      </section>

      <section className="sustainability" id="sustainability">
        <div className="section-heading"><p className="section-tag">{h.sustainabilityTag}</p><h2>{h.sustainabilityTitle}</h2></div>
        <div className="esg-grid">{h.sustainability.map(([title,text],i) => <article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="newsroom" id="news">
        <div className="section-heading"><p className="section-tag">{h.newsTag}</p><h2>{h.newsTitle}</h2></div>
        <div className="news-grid">{h.news.map(([tag,title,text]) => <article key={title}><span>{tag}</span><h3>{title}</h3><p>{text}</p><time>2026</time></article>)}</div>
      </section>

      <section className="careers" id="careers">
        <div><p className="section-tag">{h.careersTag}</p><h2>{h.careersTitle}</h2><p>{h.careersText}</p></div>
        <a className="button gold" href="mailto:Angelglobalag@gmail.com?subject=Career%20Application%20%E2%80%94%20Angel%20Global%20AG">{h.careersCta}</a>
      </section>

      <section className="presence" id="presence">
        <div className="section-heading"><p className="section-tag">{h.officesTag}</p><h2>{h.officesTitle}</h2></div>
        <div className="office-grid">{h.offices.map(([city,role]) => <article key={city}><strong>{city}</strong><span>{role}</span></article>)}</div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-intro">
          <p className="section-tag">ANGEL GLOBAL AG</p>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
        </div>
        <div className="contact-options">
          <a className="contact-option" href="tel:+989129613500">
            <span>PHONE</span>
            <strong dir="ltr">+98 912 961 3500</strong>
          </a>
          <a className="contact-option" href="mailto:Angelglobalag@gmail.com?subject=Corporate%20Enquiry%20%E2%80%94%20Angel%20Global%20AG">
            <span>GENERAL ENQUIRIES</span>
            <strong>Angelglobalag@gmail.com</strong>
          </a>
          <a className="contact-option" href="mailto:Sorush367@gmail.com?subject=Management%20Enquiry%20%E2%80%94%20Angel%20Global%20AG">
            <span>MANAGEMENT OFFICE</span>
            <strong>Sorush367@gmail.com</strong>
          </a>
        </div>
      </section>

      <footer>
        <div className="brand footer-brand">
          <img src="/Angelglobalag/angel-logo.jpeg" alt="" />
          <span>ANGEL <small>GLOBAL AG</small></span>
        </div>
        <p>© 2026 Angel Global AG. {t.footer}</p>
        <p>{h.legal}</p>
      </footer>
    </main>
  );
}
