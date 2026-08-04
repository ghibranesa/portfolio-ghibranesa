import { useRef } from "react";
import { Gsap } from "../utils/gsapAnimate";

// Simple Icons (brand icons) from react-icons/si
import {
    SiC,
    SiCplusplus,
    SiPython,
    SiPhp,
    SiJavascript,
    SiHtml5,
    SiCss,
    SiReact,
    SiMysql,
    SiArduino,
    SiEspressif,
    SiCisco,
    SiGit,
    SiAutocad,
    SiSketchup,
    SiEasyeda,
    SiRaspberrypi,
    SiMqtt,
    SiHuawei,
    SiMikrotik,
    SiProteus,
    SiWireshark,
    SiFortinet,
    SiJunipernetworks,
    SiOpenvpn,
    SiWireguard,
    SiXampp,
    SiLaragon,
    SiVite,
    SiGithub,
    SiVercel,
    SiTailwindcss,
    SiLinux,
    SiOctave,
    SiPostman,
    SiNodered,
    SiDassaultsystemes,
    SiNodedotjs,
} from "react-icons/si";

// Lucide icons for generic/non-branded concepts
import {
    Activity,
    Sprout,
    Orbit,
    ScanEye,
    Pyramid,
    Waypoints,
    SignalHigh,
} from "lucide-react";

const stackCategories = [
    {
        title: "Networking & Telecommunications",
        description: "Network infrastructure & communication systems",
        skills: [
            { name: "Cisco", icon: SiCisco },
            { name: "Juniper", icon: SiJunipernetworks },
            { name: "MikroTik / The Dude", icon: SiMikrotik },
            { name: "Huawei", icon: SiHuawei },
            { name: "Fortinet", icon: SiFortinet },
            { name: "Wireshark", icon: SiWireshark },
            { name: "OpenVPN", icon: SiOpenvpn },
            { name: "WireGuard", icon: SiWireguard },
            { name: "OptiSystem", icon: Orbit },
            { name: "Cacti", icon: Sprout },
            { name: "Nmap", icon: ScanEye },
            { name: "Atoll", icon: Pyramid },
            { name: "Pathloss", icon: Waypoints },
            { name: "TEMS Investigation", icon: SignalHigh },
        ]
    },
    {
        title: "Embedded Systems & IoT",
        description: "Microcontroller & automation systems",
        skills: [
            { name: "ESP32", icon: SiEspressif },
            { name: "Arduino", icon: SiArduino },
            { name: "Raspberry Pi", icon: SiRaspberrypi },
            { name: "C", icon: SiC },
            { name: "C++", icon: SiCplusplus },
            { name: "MQTT", icon: SiMqtt },
            { name: "Node-RED", icon: SiNodered },
            { name: "Postman", icon: SiPostman },
        ]
    },
    {
        title: "Web Development",
        description: "Monitoring dashboard & backend development",
        skills: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "React", icon: SiReact },
            { name: "JavaScript", icon: SiJavascript },
            { name: "PHP", icon: SiPhp },
            { name: "HTML5", icon: SiHtml5 },
            { name: "CSS3", icon: SiCss },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "MySQL", icon: SiMysql },
            { name: "XAMPP", icon: SiXampp },
            { name: "Laragon", icon: SiLaragon },
            { name: "Vite", icon: SiVite },
            { name: "Vercel", icon: SiVercel },
        ]
    },
    {
        title: "Engineering Software",
        description: "Programming & engineering applications",
        skills: [
            { name: "Python", icon: SiPython },
            { name: "Linux", icon: SiLinux },
            { name: "Git", icon: SiGit },
            { name: "GitHub", icon: SiGithub },
            { name: "AutoCAD", icon: SiAutocad },
            { name: "SketchUp", icon: SiSketchup },
            { name: "EasyEDA", icon: SiEasyeda },
            { name: "Proteus", icon: SiProteus },
            { name: "GNU Octave", icon: SiOctave },
            { name: "CST Studio", icon: SiDassaultsystemes },
            { name: "Keysight ADS", icon: Activity },
        ]
    }
];

const TechStack = () => {
    const containerRef = useRef(null);

    return (
        <section id="tech-stack-section" ref={containerRef} className="pt-20 md:pt-24 pb-24 md:pb-32 w-full relative bg-[#0A0A0A] overflow-hidden">

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

                {/* ── SECTION HEADER ── */}
                <Gsap.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-20 md:mb-32"
                >
                    <div className="w-2 h-2 bg-lime-400 rounded-full" />
                    <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] md:tracking-[0.26em] text-white/40">
                        04. Engineer_Toolkit
                    </span>
                    <div className="flex-1 h-[1px] bg-white/10" />
                </Gsap.div>

                {/* Main Content Area */}
                <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24 items-start">

                    {/* Left side: Sticky Title area */}
                    <div className="lg:sticky lg:top-36 flex flex-col pt-4">
                        <Gsap.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-3xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.98] sm:leading-[0.95] text-white"
                        >
                            Engineer<br />
                            <span className="text-lime-400">Toolkit.</span>
                        </Gsap.h2>

                        <Gsap.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="mt-6 md:mt-8 font-sans text-sm md:text-base text-white/55 leading-7 md:leading-8 max-w-sm"
                        >
                            <p>
                                A collection of programming languages, networking platforms, embedded technologies, and engineering software used to design, develop, and deploy reliable telecommunication and IoT solutions.
                            </p>
                        </Gsap.div>
                    </div>

                    {/* Right side: Table List */}
                    <div className="flex flex-col border-t border-white/10">
                        {stackCategories.map((category, index) => (
                            <Gsap.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group border-b border-white/10 py-8 md:py-12 flex flex-col md:flex-row gap-6 md:gap-12 transition-colors hover:bg-white/[0.02] -mx-4 px-4 sm:px-4 cursor-default"
                            >
                                <div className="md:w-1/3 shrink-0 flex flex-col gap-2">
                                    <h4 className="text-xl md:text-2xl font-bold uppercase text-white tracking-tight group-hover:text-lime-400 transition-colors">
                                        {category.title}
                                    </h4>
                                    <span className="font-mono text-xs text-white/40 uppercase tracking-[0.12em] md:tracking-[0.16em] hidden md:block">
                                        {'// '}{category.description}
                                    </span>
                                </div>

                                <div className="md:w-2/3 flex flex-wrap gap-4 lg:gap-5 items-center">
                                    {category.skills.map((skill, idx) => {
                                        const IconComponent = skill.icon;
                                        return (
                                            <div
                                                key={idx}
                                                className="relative group/icon w-11 h-11 md:w-12 md:h-12 flex items-center justify-center border border-white/10 rounded-lg hover:border-lime-400/50 hover:bg-lime-400/10 transition-all duration-300 cursor-default"
                                                title={skill.name}
                                            >
                                                {skill.logo ? (
                                                    <img
                                                        src={skill.logo}
                                                        alt={skill.name}
                                                        loading="lazy"
                                                        decoding="async"
                                                        className="w-6 h-6 md:w-7 md:h-7 object-contain"
                                                    />
                                                ) : (
                                                    <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white/60 group-hover:text-white/80 group-hover/icon:text-lime-400 transition-colors" />
                                                )}
                                                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-white text-black text-[10px] font-mono font-bold uppercase tracking-wider rounded whitespace-nowrap opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </Gsap.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TechStack;
