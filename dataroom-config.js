/* ============================================
   AXIOS EQUITY DATA ROOM — Central Configuration
   ============================================
   Single source of truth for Investor Projects and Partner Workstreams
   served from the axiosequity.com Client Login portal.

   Edit via admin.html → Project & Workstream Manager,
   or directly here (then commit & push).
   ============================================ */

window.AXIOS_CONFIG = {

    /* ==========  GOOGLE API CONFIG  ==========
       Required for in-portal folder browsing.
       Get from: https://console.cloud.google.com/apis/credentials
       Restrict to your domain in Google Cloud Console for security:
         - HTTP referrers: axiosequity.com/*, *.axiosequity.com/*, *.vercel.app/*
         - API restrictions: Google Drive API only

       If left as 'PASTE_API_KEY_HERE', the portal falls back to a Drive
       iframe (files open in a new tab on Drive instead of in the portal viewer).
       ============================================ */
    googleApiKey: 'AIzaSyDbYf4FDn6rlPhPVBepFjYFYz-lbO19MYo',

    /* ==========  PARTNER ACCESS CODES  ==========
       Each partner / counterparty gets a UNIQUE access code that grants
       visibility to only their workstream(s).

       Use ['*'] for admin codes that see every workstream.

       SECURITY NOTE: These codes live in client-side JS. Anyone who views the
       page source can see all codes. Real security is the Google Drive sharing
       settings on each folder. This gate exists to prevent casual access only.
       ============================================ */
    partnerAccess: {
        'AXIOS-PT-2026': {
            company: 'AXIOS EQUITY Internal',
            workstreams: ['*']
        },
        'YTONG-MGMT-2026': {
            company: 'Turk Ytong',
            workstreams: ['turk-ytong']
        },
        'IEP-PT-2026': {
            company: 'IEP',
            workstreams: ['iep']
        }
        // Add per-partner codes as needed, e.g.:
        // 'NEW-PARTNER-PT-2026': { company: 'New Partner Co', workstreams: ['workstream-key'] }
    },

    /* ==========  INVESTOR ACCESS CODES  ==========
       Each investor / firm gets a unique code that grants access
       to only the project(s) they are evaluating.
       Use ['*'] for admin codes that see every project.
       ============================================ */
    investorAccess: {
        'AXIOS-IR-2026': {
            firm: 'AXIOS EQUITY Internal',
            projects: ['*']
        },
        'NEWCASTLE-INV-2026': {
            firm: 'Newcastle Investor Group',
            projects: ['newcastle-claim']
        }
        // Add per-investor codes as needed, e.g.:
        // 'ACME-CAPITAL-2026': { firm: 'Acme Capital', projects: ['newcastle-claim'] }
    },

    /* ==========  INVESTOR PROJECTS  ==========
       Master code AXIOS-IR-2026 (projects: ['*']) sees ALL entries here.
       Per-investor codes only see the project keys they are explicitly granted.
       ============================================ */
    projects: {

        'newcastle-claim': {
            title: 'Newcastle Claim - BKGT Gold Mining + PCE Technology',
            sector: 'Mining - Energy - Tokenisation',
            description: 'BKGT gold mining project at Newcastle Claim, Nevada, combined with Precision Controlled Electrolysis (PCE) technology and parallel development across Argentina (Catamarca), Saudi Arabia, and OKAN CEEG. Includes SPAC strategy, tokenisation, and integrated financial / operational thesis.',
            status: 'Status - Active - Multi-jurisdiction',
            keywords: 'newcastle bkgt gold mining nevada pce precision controlled electrolysis catamarca argentina saudi okan ceeg spac stablecoin tether',
            driveFolderId: '1RNt-UfneEohx8UShyhrVRhDbA1yYR7H4',
            documents: []
        },

        'turk-ytong': {
            title: 'Türk Ytong',
            sector: 'Building Materials - Industrial',
            description: 'Türk Ytong partnership - operational and financial reporting, resource statements, project pipeline. Annual reports 2022-2025, operational results, UMREK resource report, SPP project.',
            status: 'Active partnership',
            keywords: 'turk ytong building materials autoclaved aerated concrete operational financial spp umrek',
            driveFolderId: '1tuPEOL7TRQJEH0EdmDIUPk_FqQRHyy1m',
            documents: []
        },

        'iep': {
            title: 'IEP',
            sector: 'Partner Workstream',
            description: 'IEP partner engagement and shared materials. Description to be updated by AXIOS EQUITY partnerships team.',
            status: 'Active partnership',
            keywords: 'iep partner',
            driveFolderId: '1hh23Yk9KlXCgULwzUIlAGKT1IWo1opc0',
            documents: []
        },

        'iep-confidential': {
            title: 'IEP — Confidential (Admin only)',
            sector: 'Restricted · Admin',
            description: 'IEP confidential workstream — admin-only materials. Not visible to the IEP partner code. Visible only to master admin codes (AXIOS-IR-2026 / AXIOS-PT-2026).',
            status: 'Restricted access',
            keywords: 'iep confidential admin restricted',
            driveFolderId: '1jRIcOZodplemhrLnAwITSVROQUA8bdT1',
            documents: []
        }

        // Add additional investor projects below as needed.
    },

    /* ==========  PARTNER WORKSTREAMS  ==========
       Master code AXIOS-PT-2026 (workstreams: ['*']) sees ALL entries here.
       Per-partner codes only see the workstream keys they are explicitly granted.
       Newcastle is mirrored here so the master partner code sees all 3 rooms.
       ============================================ */
    workstreams: {

        'newcastle-claim': {
            title: 'Newcastle Claim - BKGT Gold Mining + PCE Technology',
            sector: 'Mining - Energy - Tokenisation',
            description: 'BKGT gold mining project at Newcastle Claim, Nevada, combined with Precision Controlled Electrolysis (PCE) technology and parallel development across Argentina (Catamarca), Saudi Arabia, and OKAN CEEG. Includes SPAC strategy, tokenisation, and integrated financial / operational thesis.',
            status: 'Status - Active - Multi-jurisdiction',
            keywords: 'newcastle bkgt gold mining nevada pce precision controlled electrolysis catamarca argentina saudi okan ceeg spac stablecoin tether',
            driveFolderId: '1RNt-UfneEohx8UShyhrVRhDbA1yYR7H4',
            documents: []
        },

        'turk-ytong': {
            title: 'Türk Ytong',
            sector: 'Building Materials - Industrial',
            description: 'Türk Ytong partnership - operational and financial reporting, resource statements, project pipeline. Annual reports 2022-2025, operational results, UMREK resource report, SPP project.',
            status: 'Active partnership',
            keywords: 'turk ytong building materials autoclaved aerated concrete operational financial spp umrek',
            driveFolderId: '1tuPEOL7TRQJEH0EdmDIUPk_FqQRHyy1m',
            documents: []
        },

        'iep': {
            title: 'IEP',
            sector: 'Partner Workstream',
            description: 'IEP partner engagement and shared materials. Description to be updated by AXIOS EQUITY partnerships team.',
            status: 'Active partnership',
            keywords: 'iep partner',
            driveFolderId: '1hh23Yk9KlXCgULwzUIlAGKT1IWo1opc0',
            documents: []
        },

        'iep-confidential': {
            title: 'IEP — Confidential (Admin only)',
            sector: 'Restricted · Admin',
            description: 'IEP confidential workstream — admin-only materials. Not visible to the IEP partner code. Visible only to master admin codes (AXIOS-IR-2026 / AXIOS-PT-2026).',
            status: 'Restricted access',
            keywords: 'iep confidential admin restricted',
            driveFolderId: '1jRIcOZodplemhrLnAwITSVROQUA8bdT1',
            documents: []
        }

        // Add additional partner workstreams here as needed.
    }
};
