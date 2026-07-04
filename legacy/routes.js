<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SHIM STUDIO | Strategic AI Advisory</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts for High-End Typography -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>

    <style>
        :root {
            --studio-bg: #F8F9FA;
            --studio-text: #1A1D20;
            --studio-text-muted: #5A5E63;
            --studio-accent-bronze: #8C7853;
            --studio-accent-steel: #4A607A;
            --studio-font: 'Plus Jakarta Sans', sans-serif;
        }
        body {
            font-family: var(--studio-font);
            background-color: var(--studio-bg);
            color: var(--studio-text);
        }
        /* Design Token: Radial Dot-Matrix Grid Background */
        .studio-grid {
            background-image: radial-gradient(rgba(140, 120, 83, 0.08) 1px, transparent 1px);
            background-size: 24px 24px;
        }
        .bg-studio-btn { background-color: var(--studio-accent-bronze); }
        .bg-studio-btn:hover { background-color: #766444; }
    </style>
</head>
<body class="min-h-screen flex flex-col overflow-y-auto relative studio-grid">

    <!-- Header Navigation -->
    <header class="relative z-10 px-8 py-6 border-b border-gray-200/60 flex items-center justify-between bg-white/40 backdrop-blur-md">
        <div class="flex items-center gap-3">
            <!-- Studio Custom Colored SVG Logo -->
            <div class="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="#8C7853" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="w-9 h-9">
                    <path d="M6 14 L18 26 C21 29 25 29 28 26 C31 23 31 19 28 16 L16 4 C13 1 9 1 6 4 C3 7 3 11 6 14 Z" fill="#8C7853" fill-opacity="0.08"></path>
                    <path d="M11 9 L21 19" stroke-width="4.5" stroke="#4A607A"></path>
                </svg>
            </div>
            <div>
                <span class="font-bold tracking-widest text-[#1A1D20] text-sm block">SHIM STUDIO</span>
                <span class="text-[9px] text-[#8C7853] font-semibold tracking-wider block -mt-1">SHIMSYSTEMS.AU</span>
            </div>
        </div>
        <nav class="hidden sm:flex items-center gap-6 text-xs font-semibold tracking-wider text-[#1A1D20]/70">
            <span onclick="document.getElementById('studio-process-section').scrollIntoView({behavior: 'smooth'})" class="hover:text-[#8C7853] cursor-pointer uppercase">OUR PROCESS</span>
            <a href="index_systems.html" target="_parent" class="text-xs py-1.5 px-3 border border-[#8C7853]/30 rounded text-[#8C7853] hover:bg-[#8C7853]/5 transition-all">SYSTEMS ENGINE</a>
        </nav>
    </header>

    <!-- Main Content -->
    <main class="relative z-10 flex-grow px-8 py-12 max-w-2xl mx-auto flex flex-col justify-center">
        
        <!-- Hero Core -->
        <div class="mb-12">
            <span class="text-xs uppercase font-bold tracking-widest text-[#8C7853] bg-[#8C7853]/10 px-3 py-1 rounded-full border border-[#8C7853]/20 inline-block mb-4">
                Strategic Advisory
            </span>
            <h2 class="text-3xl md:text-4xl font-bold text-[#1A1D20] tracking-tight leading-tight mb-4">
                De-risk your AI strategy.<br>Reclaim productive time.
            </h2>
            <p class="text-base text-gray-600 font-medium leading-relaxed mb-6">
                Clear, structured, and risk-mitigated pathways to automation—backed by rigorous systems engineering and adaptive hardware routing.
            </p>
            <p class="text-sm text-gray-500 leading-relaxed mb-8">
                The greatest obstacle to AI adoption isn’t capability—it’s risk. Many organisations want to harness the efficiency of generative AI but are rightfully held back by concerns over data leaks, intellectual property exposure, and unpredictable system behaviours.
            </p>
            
            <div class="flex flex-wrap gap-4">
                <button onclick="document.getElementById('studio-contact-section').scrollIntoView({behavior: 'smooth'})" class="bg-studio-btn text-white px-6 py-3 text-xs font-bold tracking-wider uppercase shadow-md hover:shadow-lg transition-all rounded">
                    Get in Touch
                </button>
                <button onclick="document.getElementById('studio-process-section').scrollIntoView({behavior: 'smooth'})" class="border border-[#1A1D20]/20 text-[#1A1D20] px-6 py-3 text-xs font-bold tracking-wider uppercase rounded bg-white/50 hover:border-[#1A1D20]/60 transition-colors">
                    Our Process
                </button>
            </div>
        </div>

        <!-- Strategy Steps Section -->
        <section id="studio-process-section" class="border-t border-gray-200 pt-10 mb-16 scroll-mt-6">
            <h3 class="text-xs uppercase font-extrabold tracking-widest text-gray-400 mb-6">How We De-Risk Your Strategy</h3>
            
            <div class="grid gap-6">
                <!-- Step 1 -->
                <div class="bg-white p-6 border border-gray-200/75 rounded shadow-sm relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-[4px] h-full bg-[#8C7853]"></div>
                    <div class="flex items-start gap-4">
                        <div class="p-2.5 bg-gray-50 border border-gray-100 rounded text-[#8C7853]">
                            <i data-lucide="search-code" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <h4 class="font-bold text-sm text-[#1A1D20] mb-1">Step 01: Friction Audit</h4>
                            <p class="text-xs text-gray-500 leading-relaxed">
                                Workflows are mapped to isolate where staff lose critical hours to repetitive administrative tasks. Whether parsing manual checklists, auditing complex compliance files, or sorting through unstructured corporate records, Shim Studio locates the bottlenecks.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Step 2 -->
                <div class="bg-white p-6 border border-gray-200/75 rounded shadow-sm relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-[4px] h-full bg-[#4A607A]"></div>
                    <div class="flex items-start gap-4">
                        <div class="p-2.5 bg-gray-50 border border-gray-100 rounded text-[#4A607A]">
                            <i data-lucide="shield-check" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <h4 class="font-bold text-sm text-[#1A1D20] mb-1">Step 02: Risk &amp; Governance Assessment</h4>
                            <p class="text-xs text-gray-500 leading-relaxed">
                                Operational risks and data exposure are systematically evaluated. Uncompromising privacy guardrails are established to ensure no proprietary data, intellectual property, or sensitive client information can ever leak outside the organisation.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Step 3 -->
                <div class="bg-white p-6 border border-gray-200/75 rounded shadow-sm relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-[4px] h-full bg-gray-500"></div>
                    <div class="flex items-start gap-4">
                        <div class="p-2.5 bg-gray-50 border border-gray-100 rounded text-gray-500">
                            <i data-lucide="cpu" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <h4 class="font-bold text-sm text-[#1A1D20] mb-1">Step 03: Hardware Blueprint</h4>
                            <p class="text-xs text-gray-500 leading-relaxed">
                                A custom technical roadmap is designed to match your existing environment. Shim Studio provides a tiered hardware specification, ensuring your custom AI engine can run stably on your existing standard CPU-only servers immediately, with a seamless, configuration-driven path to scale.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Direct Contact Inquiries Form -->
        <section id="studio-contact-section" class="border-t border-gray-200 pt-10 mb-16 scroll-mt-6">
            <h3 class="text-xs uppercase font-extrabold tracking-widest text-[#8C7853] mb-3">Direct Enquiry</h3>
            <p class="text-xs text-gray-500 mb-6 max-w-md">
                Please enter your details below. We will review your enquiry and respond to your corporate email address.
            </p>
            <form class="space-y-4 max-w-md" onsubmit="handleFormSubmit(event)">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <label class="block text-[9px] uppercase font-bold text-gray-400 mb-1">Corporate Email</label>
                        <input type="email" placeholder="name@organisation.com.au" class="w-full bg-white border border-gray-200 rounded px-3 py-2 text-xs text-[#1A1D20] focus:outline-none focus:border-[#8C7853] shadow-sm" required>
                    </div>
                    <div>
                        <label class="block text-[9px] uppercase font-bold text-gray-400 mb-1">Operational Area</label>
                        <input type="text" placeholder="e.g. Compliance, Estimating" class="w-full bg-white border border-gray-200 rounded px-3 py-2 text-xs text-[#1A1D20] focus:outline-none focus:border-[#8C7853] shadow-sm" required>
                    </div>
                </div>
                <button type="submit" class="w-full bg-studio-btn text-white py-2 px-4 text-xs font-bold tracking-wider uppercase transition-all rounded shadow-sm hover:shadow">
                    Submit Enquiry
                </button>
            </form>
        </section>
    </main>

    <!-- Footer -->
    <footer class="max-w-2xl mx-auto w-full border-t border-gray-200/60 pt-12 pb-8 flex flex-col md:flex-row items-center justify-between gap-6 px-8">
        <div class="flex items-center gap-3">
            <div class="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="#8C7853" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8">
                    <path d="M6 14 L18 26 C21 29 25 29 28 26 C31 23 31 19 28 16 L16 4 C13 1 9 1 6 4 C3 7 3 11 6 14 Z" fill="#8C7853" fill-opacity="0.08"></path>
                    <path d="M11 9 L21 19" stroke-width="4.5" stroke="#4A607A"></path>
                </svg>
            </div>
            <div>
                <span class="font-bold tracking-widest text-[#1A1D20] text-xs block">SHIM STUDIO</span>
                <span class="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Unlocking Productive Time. Safely.</span>
            </div>
        </div>
        <div class="text-right md:text-right flex flex-col items-center md:items-end gap-1">
            <span class="text-xs text-gray-500 font-medium">Enquiries: <a href="#" class="shim-contact text-[#8C7853] hover:underline decoration-dotted" data-show-text="true"></a></span>
            <div class="flex gap-2 text-[10px] text-gray-400 font-sans">
                <button onclick="openPrivacyModal()" class="hover:text-[#8C7853] transition-colors focus:outline-none">Privacy Policy</button>
                <span>&bull;</span>
                <span>&copy; 2026 Shim Studio. All rights reserved.</span>
            </div>
        </div>
    </footer>

    <!-- Privacy Policy Modal Overlay -->
    <div id="privacy-modal" class="fixed inset-0 z-50 hidden items-center justify-center bg-gray-950/80 backdrop-blur-sm p-4">
        <div class="bg-white text-gray-900 max-w-lg w-full rounded p-8 shadow-2xl border border-gray-200 relative">
            <button onclick="closePrivacyModal()" class="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors focus:outline-none">
                <i data-lucide="x" class="w-5 h-5"></i>
            </button>
            <h3 class="text-lg font-bold text-[#1A1D20] mb-4 tracking-tight flex items-center gap-2">
                <i data-lucide="shield-check" class="w-5 h-5 text-[#8C7853]"></i> Sovereignty &amp; Privacy Policy
            </h3>
            <div class="text-xs text-gray-600 space-y-4 leading-relaxed font-medium">
                <p>This website operates strictly as a static point of contact. We do not utilise tracking cookies, performance analytics, or third-party marketing trackers of any kind.</p>
                <p>If you choose to submit an enquiry via our forms, we temporarily collect and process only the contact details and operational parameters you explicitly provide. This information is used solely to respond to your request and is handled with strict confidentiality; we do not share, sell, or distribute it.</p>
                <p>All software we build is deployed directly into your own private IT environment. We do not host your systems on our web servers, ensuring your business documents, files, and operational tools remain entirely within your own controlled network.</p>
            </div>
        </div>
    </div>

    <!-- Non-blocking custom toast confirmation -->
    <div id="toast-notification" class="fixed bottom-6 right-6 z-50 hidden items-center gap-3 bg-white border border-gray-200 px-5 py-4 rounded-lg shadow-2xl max-w-sm animate-bounce">
        <div class="p-1.5 bg-emerald-50 border border-emerald-200 rounded text-emerald-600">
            <i data-lucide="check" class="w-4 h-4"></i>
        </div>
        <div>
            <h4 class="text-xs font-bold text-gray-900">Enquiry Received</h4>
            <p class="text-[10px] text-gray-500 mt-0.5">We will review your strategic profile and reply shortly.</p>
        </div>
    </div>

    <script>
        // Init icons
        lucide.createIcons();

        // Privacy Modal Controls
        function openPrivacyModal() {
            document.getElementById('privacy-modal').classList.replace('hidden', 'flex');
        }
        function closePrivacyModal() {
            document.getElementById('privacy-modal').classList.replace('flex', 'hidden');
        }

        // Handle submissions without using alert()
        function handleFormSubmit(event) {
            event.preventDefault();
            const toast = document.getElementById('toast-notification');
            toast.classList.replace('hidden', 'flex');
            event.target.reset();
            setTimeout(() => {
                toast.classList.replace('flex', 'hidden');
            }, 3000);
        }

        // Close on window click
        window.onclick = function(event) {
            const modal = document.getElementById('privacy-modal');
            if (event.target === modal) {
                closePrivacyModal();
            }
        }

        // Spam Protection Obfuscator: dynamically assembles email in memory
        document.addEventListener("DOMContentLoaded", () => {
            const account = "office";
            const domain = "shimsystems.au";
            const assembledEmail = `${account}@${domain}`;
            document.querySelectorAll('.shim-contact').forEach(element => {
                element.href = `mailto:${assembledEmail}`;
                if (element.getAttribute('data-show-text') === 'true') {
                    element.textContent = assembledEmail;
                }
            });
        });
    </script>
</body>
</html>