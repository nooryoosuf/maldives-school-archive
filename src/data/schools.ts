export type SubLogo = {
    name: string;
    path: string;
};

export type School = {
    id: string;
    name: string;
    nameDhivehi: string;
    motto?: string;
    mission?: string;
    vision?: string;
    atoll: string;
    island: string;
    location: string;
    category: "Primary" | "Secondary" | "Higher Secondary" | "Combined";
    logo: string;
    coverImage: string;
    description: string;
    contact: string;
    socials: {
        website?: string;
        facebook?: string;
        instagram?: string;
    };
    colors: string[];
    stats: {
        downloads: string;
        views: string;
    };
    subLogos?: SubLogo[];
};

export const schools: School[] = [
    {
        id: "angolhitheem",
        name: "Angolhitheem School",
        nameDhivehi: "އަނގޮޅިތީމު ސްކޫލް",
        motto: "Learning for Life",
        mission: "To provide a conducive learning environment that empowers students to reach their full potential.",
        vision: "To be a leading educational institution known for academic excellence and character building.",
        atoll: "Raa Atoll",
        island: "Angolhitheemu",
        location: "R. Angolhitheemu",
        category: "Secondary",
        logo: "/logos/angolhitheem.svg",
        coverImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
        description: "Angolhitheem School is a pillar of education in the Raa Atoll, dedicated to fostering a nurturing environment for students to excel academically and socially.",
        contact: "+960 6580512",
        socials: {
            facebook: "https://facebook.com/angolhitheemschool",
            instagram: "https://instagram.com/angolhitheemschool"
        },
        colors: ["#0062E3", "#FFFFFF", "#FFD700"],
        stats: { downloads: "1.2k", views: "4.5k" }
    },
    {
        id: "hithaadhoo",
        name: "Hithaadhoo School",
        nameDhivehi: "ހިތާދޫ ސްކޫލް",
        motto: "Education is Empowerment",
        mission: "To inspire students to become lifelong learners and responsible citizens.",
        vision: "Excellence in education for a bright future.",
        atoll: "Baa Atoll",
        island: "Hithaadhoo",
        location: "B. Hithaadhoo",
        category: "Primary",
        logo: "/logos/hithaadhoo.svg",
        coverImage: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop",
        description: "Located in the beautiful Baa Atoll, Hithaadhoo School provides quality education with a focus on community values and modern learning techniques.",
        contact: "+960 6600028",
        socials: {
            facebook: "https://facebook.com/hithaadhooschool"
        },
        colors: ["#2E7D32", "#FFFFFF", "#81C784"],
        stats: { downloads: "850", views: "3.2k" }
    },
    {
        id: "hulhudhuffaaru",
        name: "Hulhudhuffaaru School",
        nameDhivehi: "ހުޅުދުއްފާރު ސްކޫލް",
        motto: "Knowledge is Light",
        mission: "To foster an inclusive environment where students can thrive academically, socially and emotionally.",
        vision: "Empowering students today for a better tomorrow.",
        atoll: "Raa Atoll",
        island: "Hulhudhuffaaru",
        location: "R. Hulhudhuffaaru",
        category: "Secondary",
        logo: "/logos/hulhudhuffaaru.svg",
        coverImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
        description: "Hulhudhuffaaru School is committed to developing well-rounded citizens through a comprehensive curriculum and diverse extracurricular activities.",
        contact: "+960 6580045",
        socials: {
            instagram: "https://instagram.com/hulhudhuffaaruschool"
        },
        colors: ["#D32F2F", "#FFFFFF", "#FFCDD2"],
        stats: { downloads: "2.1k", views: "8.9k" },
        subLogos: [
            { name: "Human Rights Club", path: "/logos/hulhudhuffaaru/HumanRightsLogo.png" },
            { name: "Language Club", path: "/logos/hulhudhuffaaru/LanguageClubLogo.png" },
            { name: "Prefect Board", path: "/logos/hulhudhuffaaru/PrefectBoardLogo.png" },
            { name: "Sports Club", path: "/logos/hulhudhuffaaru/SportsClubLogo.png" },
            { name: "Student Council", path: "/logos/hulhudhuffaaru/StudentCouncil.png" },
            { name: "Business Club", path: "/logos/hulhudhuffaaru/businessLogo.png" },
            { name: "Islam Club", path: "/logos/hulhudhuffaaru/islamLogo.png" },
            { name: "Science Club", path: "/logos/hulhudhuffaaru/scienceclub.png" },
            { name: "Higher Secondary", path: "/logos/hulhudhuffaaru/hs-logo.svg" },
        ]
    },
    {
        id: "vaadhoo",
        name: "Vaadhoo School",
        nameDhivehi: "ވާދޫ ސްކޫލް",
        motto: "Strive for Excellence",
        mission: "To provide a holistic education that prepares students for global challenges.",
        vision: "A community of learners achieving excellence.",
        atoll: "Gaafu Dhaalu Atoll",
        island: "Vaadhoo",
        location: "GDh. Vaadhoo",
        category: "Primary",
        logo: "/logos/vaadhoo.svg",
        coverImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2089&auto=format&fit=crop",
        description: "Vaadhoo School serves the community of GDh. Vaadhoo, providing excellence in teaching and learning for all students.",
        contact: "+960 6840012",
        socials: {
            facebook: "https://facebook.com/vaadhooschool"
        },
        colors: ["#1976D2", "#FFFFFF", "#BBDEFB"],
        stats: { downloads: "1.5k", views: "5.1k" }
    }
];
