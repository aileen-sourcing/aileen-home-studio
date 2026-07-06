// 📦 BAILUX 全量独立站产品参数数据库（全链路打通核心骨架）
const detailsDatabase = {

    // ==========================================
    // 🎄 大类 1：Holiday Decor (cat: "holiday")
    // ==========================================
    
    "premium pe lighted christmas tree": {
        category: "holiday decor",
        subcategory: "christmas", 
        code: "Item Code: ct26062801",
        images: [
            "images/products/holiday-decor/christmas/ct26062801/1.jpg",
            "images/products/holiday-decor/christmas/ct26062801/2.jpg",
            "images/products/holiday-decor/christmas/ct26062801/3.jpg",
            "images/products/holiday-decor/christmas/ct26062801/4.jpg",
            "images/products/holiday-decor/christmas/ct26062801/5.jpg"
        ], 
        specs: [
            { label: "Material", value: "100% PE Premium Tips (Fireproofing)" },
            { label: "Height", value: "7.5 FT (Customizable)" },
            { label: "Lighting", value: "Pre-lit Warm White LED Eco-Lights" },
            { label: "Application", value: "Indoor Holiday Decoration / Commercial Display" }
        ]
    },

    "luxury flocked snowy christmas tree": {
        category: "holiday",
        subcategory: "flocked", // 👈 对应主页植绒雪花树分类
        code: "Item Code: 26062802",
        images: ["images/products/holiday-decor/christmas/26062802/1.jpg"], 
        specs: [
            { label: "Material", value: "Premium PVC + Heavy Flocked Snow" },
            { label: "Height", value: "6 FT / 7.5 FT / 9 FT" },
            { label: "Features", value: "Eco-friendly, No Shedding Snow Effect" },
            { label: "Application", value: "Home Luxury Christmas Decor" }
        ]
    },

    "pre-lit led christmas holiday garland": {
        category: "holiday",
        subcategory: "garlands", // 👈 对应主页藤条/花环分类
        code: "Item Code: GL-001",
        images: ["images/products/holiday-decor/garlands/GL-001/1.jpg"], 
        specs: [
            { label: "Length", value: "9 FT / Customizable" },
            { label: "Tips Material", value: "PE/PVC Mixed Real-touch Tips" },
            { label: "Lighting", value: "50 Waterproof Warm LED Bulbs" },
            { label: "Application", value: "Staircase, Mantle, Front Door Frame Decor" }
        ]
    },

    "classic pine cone artificial wreath": {
        category: "holiday",
        subcategory: "wreaths", // 👈 对应主页花圈分类
        code: "Item Code: WR-001",
        images: ["images/products/holiday-decor/wreaths/WR-001/1.jpg"], 
        specs: [
            { label: "Diameter", value: "24 Inch / 30 Inch" },
            { label: "Ornaments", value: "Natural Pine Cones & Red Berries" },
            { label: "Base", value: "Sturdy Natural Vine Frame" },
            { label: "Application", value: "Outdoor/Indoor Front Door Welcome Display" }
        ]
    },


    // ==========================================
    // 💡 大类 2：Home Lighting (cat: "lighting")
    // ==========================================
    
    "minimalist dimmable ceramic table lamp": {
        category: "lighting",
        subcategory: "table-lamps", // 👈 对应主页台灯分类
        code: "Item Code: TL-001",
        images: ["images/lamp01.jpg", "images/lamp02.jpg"], 
        specs: [
            { label: "Material", value: "Premium Ceramic Base + Fabric Lampshade" },
            { label: "Light Source", value: "LED E27 (Dimmable Supported)" },
            { label: "Certification", value: "CE / RoHS / UL Compliant" },
            { label: "Application", value: "Hotel Bedroom, Living Room, Showroom" }
        ]
    },

    "modern minimalist linear floor lamp": {
        category: "lighting",
        subcategory: "floor-lamps", // 👈 对应主页落地灯分类
        code: "Item Code: FL-001",
        images: ["images/products/lighting/floor/FL-001/1.jpg"], 
        specs: [
            { label: "Material", value: "Anodized Aluminum + Heavy Iron Base" },
            { label: "Control", value: "Remote Control & Touch Stepless Dimming" },
            { label: "Height", value: "150 cm / Custom" },
            { label: "Application", value: "Reading Room, Office, Nordic Living Room" }
        ]
    },

    "luxury crystal living room pendant light": {
        category: "lighting",
        subcategory: "pendant-lights", // 👈 对应主页吊灯分类
        code: "Item Code: PL-001",
        images: ["images/products/lighting/pendant/PL-001/1.jpg"], 
        specs: [
            { label: "Material", value: "K9 Clear Crystal + Stainless Steel Frame" },
            { label: "Voltage", value: "110V - 240V Available" },
            { label: "Finish", value: "Luxury Electroplated Gold / Chrome" },
            { label: "Application", value: "Dining Room, Luxury Hotel Lobby, Villa Villa" }
        ]
    },

    "waterproof smart led outdoor garden light": {
        category: "lighting",
        subcategory: "outdoor-lights", // 👈 对应主页户外灯分类
        code: "Item Code: OL-001",
        images: ["images/products/lighting/outdoor/OL-001/1.jpg"], 
        specs: [
            { label: "IP Rating", value: "IP65 Weatherproof & Dustproof" },
            { label: "Material", value: "Die-cast Aluminum Body + PC Diffuser" },
            { label: "Power Source", value: "Solar Powered / AC Hardwired" },
            { label: "Application", value: "Pathway, Backyard Yard, Villa Landscaping" }
        ]
    },


    // ==========================================
    // ⚙️ 大类 3：Raw Materials (cat: "material")
    // ==========================================
    
    "rigid green pvc film for christmas tree": {
        category: "material",
        subcategory: "pvc-film", // 👈 对应主页PVC膜分类
        code: "Item Code: RM-PVC01",
        images: ["images/products/materials/pvc/RM-PVC01/1.jpg"], 
        specs: [
            { label: "Type", value: "Embossed / Rigid PVC Roll" },
            { label: "Thickness", value: "0.05 mm - 0.15 mm (Customizable)" },
            { label: "Features", value: "Anti-UV, Flame Retardant, High Tensile Strength" },
            { label: "Usage", value: "Raw Material for Manufacturing Christmas Tree Leaves" }
        ]
    },

    "bicolor artificial pet pine needles roll": {
        category: "material",
        subcategory: "pine-needle", // 👈 对应主页松针分类
        code: "Item Code: RM-PN01",
        images: ["images/products/materials/needles/RM-PN01/1.jpg"], 
        specs: [
            { label: "Material", value: "100% Virgin PET / PVC Material" },
            { label: "Shape", value: "Round, Flat, or Star Shape with Round Wire Inside" },
            { label: "Color", value: "Dark Green, Light Green, Frosting Effect" },
            { label: "Usage", value: "High-end Pine Needle Trees Production" }
        ]
    },

    "heavy duty foldable metal stands base": {
        category: "material",
        subcategory: "metal-stands", // 👈 对应主页铁底座分类
        code: "Item Code: RM-ST01",
        images: ["images/products/materials/stands/RM-ST01/1.jpg"], 
        specs: [
            { label: "Material", value: "Reinforced Iron Cast Carbon Steel" },
            { label: "Tube Diameter", value: "19mm / 22mm / 32mm Available" },
            { label: "Surface Treatment", value: "Anti-rust Black / Green Powder Coating" },
            { label: "Usage", value: "Support for 5 FT to 12 FT Artificial Trees" }
        ]
    }, // 👈 🌟 注意：这里我帮你补上了一个至关重要的逗号！

    // 🌟 ✨ 以下是为你追加的全新铁架子产品（精准匹配你删掉第3张大写图后的实际文件）
    "reinforced christmas tree metal stand": {
        category: "material",
        subcategory: "metal-stands", 
        code: "Item Code: MS-20260629",
        images: [
            "images/products/raw-material/metal-stand/ms20260629/ms20260629-1.jpg",
            "images/products/raw-material/metal-stand/ms20260629/ms20260629-2.jpg",
            "images/products/raw-material/metal-stand/ms20260629/ms20260629-4.jpg" 
        ],
        specs: [
            { label: "Material", value: "Heavy-Duty Reinforced Iron / Steel" },
            { label: "Available Sizes", value: "40cm, 50cm, 60cm, 70cm, 120cm (Customizable)" },
            { label: "Application", value: "Artificial Christmas Tree Base Support" },
            { label: "Surface Treatment", value: "Anti-Rust Powder Coating (Green/Black)" }
        ]
    }

};