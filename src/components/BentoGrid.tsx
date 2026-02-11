"use client";

export default function BentoGrid() {
    const stats = [
        { label: "Archived Assets", value: "248+" },
        { label: "Monthly Users", value: "1.2k+" },
        { label: "Community", value: "19 Atolls" },
        { label: "Quality Status", value: "Verified" },
    ];

    return (
        <div className="max-w-7xl mx-auto px-8 mt-12 mb-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                    <div key={stat.label} className={`space-y-1 ${i % 2 === 0 ? 'pr-8' : ''}`}>
                        <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest leading-none mb-3">
                            {stat.label}
                        </p>
                        <p className="text-4xl font-semibold text-slate-900 leading-none">
                            {stat.value}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
