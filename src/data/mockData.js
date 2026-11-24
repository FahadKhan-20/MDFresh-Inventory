// MD FRESH - Inventory Data Store & State
// Complete Official Catalog: 215 Products across all 4 Retail Branches
// Branches: ANNASANDRAPALYA, KODIHALLI, LBS NAGAR, BASAVANAGAR

export const INITIAL_BRANCHES = [
  {
    id: 'BR001',
    name: 'ANNASANDRAPALYA',
    code: 'BR-ASP',
    location: 'Main Road, Annasandrapalya, HAL Post, Bengaluru',
    manager: 'MD FRESH STAFF',
    phone: '+91 98450 12345',
    stockHealth: 'Healthy',
    totalProducts: 217,
    lowStockCount: 6,
    lastAudit: '03 Oct 2026, 08:30 AM'
  },
  {
    id: 'BR002',
    name: 'KODIHALLI',
    code: 'BR-KDH',
    location: 'Old Airport Road, Kodihalli, Bengaluru',
    manager: 'MD FRESH STAFF',
    phone: '+91 98860 54321',
    stockHealth: 'Low',
    totalProducts: 217,
    lowStockCount: 8,
    lastAudit: '03 Oct 2026, 07:45 AM'
  },
  {
    id: 'BR003',
    name: 'LBS NAGAR',
    code: 'BR-LBS',
    location: 'Kaggadasapura Main Rd, LBS Nagar, Bengaluru',
    manager: 'MD FRESH STAFF',
    phone: '+91 97410 98765',
    stockHealth: 'Healthy',
    totalProducts: 217,
    lowStockCount: 4,
    lastAudit: '03 Oct 2026, 09:10 AM'
  },
  {
    id: 'BR004',
    name: 'BASAVANAGAR',
    code: 'BR-BSV',
    location: 'Basavanagar Main Road, Marathahalli, Bengaluru',
    manager: 'MD FRESH STAFF',
    phone: '+91 96110 34567',
    stockHealth: 'Attention',
    totalProducts: 217,
    lowStockCount: 7,
    lastAudit: '02 Oct 2026, 06:15 PM'
  }
];

export const INITIAL_SUPPLIERS = [
  {
    id: 'SUP001',
    name: 'ABC Fruit Market',
    mandi: 'Yeshwanthpur APMC Yard',
    contactPerson: 'Srinivasa Rao',
    phone: '+91 98440 88990',
    categories: ['Fruits']
  },
  {
    id: 'SUP002',
    name: 'K.R. Market Veg Syndicate',
    mandi: 'K.R. Market Yard',
    contactPerson: 'Muniswamy Gowda',
    phone: '+91 99001 22334',
    categories: ['Vegetables']
  },
  {
    id: 'SUP003',
    name: 'Sahyadri Farm Fresh',
    mandi: 'Direct Farm Gate',
    contactPerson: 'Kailash Patil',
    phone: '+91 97230 45678',
    categories: ['Fruits', 'Vegetables', 'Dairy & Others']
  }
];

export const INITIAL_PRODUCTS = [
  {
    "id": "PRD001",
    "name": "Onion",
    "originalPluName": "OINION",
    "variety": "Nashik Red",
    "sku": "VEG-001",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 1350,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🧅",
    "stocks": {
      "BR001": 3,
      "BR002": 6,
      "BR003": 0,
      "BR004": 5
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD002",
    "name": "Potato",
    "originalPluName": "POTATO",
    "variety": "Agra Jyoti",
    "sku": "VEG-002",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 1150,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥔",
    "stocks": {
      "BR001": 1,
      "BR002": 3,
      "BR003": 7,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD003",
    "name": "Tomato",
    "originalPluName": "TOMATO",
    "variety": "Hybrid Local",
    "sku": "VEG-003",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 550,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🍅",
    "stocks": {
      "BR001": 2,
      "BR002": 5,
      "BR003": 7,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD004",
    "name": "Carrot",
    "originalPluName": "CARROT",
    "variety": "Ooty Fresh",
    "sku": "VEG-004",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 850,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥕",
    "stocks": {
      "BR001": 0,
      "BR002": 2,
      "BR003": 6,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD005",
    "name": "Green Beans",
    "originalPluName": "BEANS",
    "variety": "Ring Beans",
    "sku": "VEG-005",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 900,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🫘",
    "stocks": {
      "BR001": 1,
      "BR002": 4,
      "BR003": 6,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD006",
    "name": "Ladies Finger",
    "originalPluName": "L FINGER",
    "variety": "Bhindi Fresh",
    "sku": "VEG-006",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 650,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🫛",
    "stocks": {
      "BR001": 8,
      "BR002": 1,
      "BR003": 5,
      "BR004": 1
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD007",
    "name": "Coconut",
    "originalPluName": "COCONUT",
    "variety": "Tiptur Grade-A",
    "sku": "VEG-007",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 1200,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥥",
    "stocks": {
      "BR001": 0,
      "BR002": 3,
      "BR003": 5,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD008",
    "name": "Long Beans",
    "originalPluName": "LONG BEANS",
    "variety": "Yardlong / Achinga",
    "sku": "VEG-008",
    "category": "Vegetables",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 50,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🫛",
    "stocks": {
      "BR001": 7,
      "BR002": 0,
      "BR003": 4,
      "BR004": 0
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD009",
    "name": "Green Peas",
    "originalPluName": "GREEN PEAS",
    "variety": "Hilly Fresh",
    "sku": "VEG-009",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 1400,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🫛",
    "stocks": {
      "BR001": 5,
      "BR002": 7,
      "BR003": 3,
      "BR004": 7
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD010",
    "name": "Chow Chow",
    "originalPluName": "CHOWCHOW",
    "variety": "Chayote",
    "sku": "VEG-010",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 450,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🍈",
    "stocks": {
      "BR001": 6,
      "BR002": 9,
      "BR003": 3,
      "BR004": 8
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD011",
    "name": "Nookkol",
    "originalPluName": "NOOKKOL",
    "variety": "Kohlrabi",
    "sku": "VEG-011",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 520,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥬",
    "stocks": {
      "BR001": 4,
      "BR002": 6,
      "BR003": 2,
      "BR004": 6
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD012",
    "name": "Radish White",
    "originalPluName": "RADISH",
    "variety": "Mooli",
    "sku": "VEG-012",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 480,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥕",
    "stocks": {
      "BR001": 5,
      "BR002": 8,
      "BR003": 2,
      "BR004": 7
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD013",
    "name": "Delhi Carrot",
    "originalPluName": "D.CRROT",
    "variety": "Desi Red Carrot",
    "sku": "VEG-013",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 950,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥕",
    "stocks": {
      "BR001": 3,
      "BR002": 5,
      "BR003": 1,
      "BR004": 5
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD014",
    "name": "Brinjal Mysore",
    "originalPluName": "BRNJAL MYSOR",
    "variety": "Round / Long",
    "sku": "VEG-014",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 480,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🍆",
    "stocks": {
      "BR001": 4,
      "BR002": 7,
      "BR003": 1,
      "BR004": 6
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD015",
    "name": "Brinjal Green",
    "originalPluName": "BRINJAL GREEN",
    "variety": "Round / Long",
    "sku": "VEG-015",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 480,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🍆",
    "stocks": {
      "BR001": 2,
      "BR002": 4,
      "BR003": 0,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD016",
    "name": "Brinjal Bhartha",
    "originalPluName": "BRINJAL BARTHA",
    "variety": "Round / Long",
    "sku": "VEG-016",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 480,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🍆",
    "stocks": {
      "BR001": 3,
      "BR002": 6,
      "BR003": 0,
      "BR004": 5
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD017",
    "name": "Amla",
    "originalPluName": "AMLA",
    "variety": "Indian Gooseberry",
    "sku": "FRU-017",
    "category": "Vegetables",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 60,
    "supplierName": "ABC Fruit Market",
    "image": "🫒",
    "stocks": {
      "BR001": 1,
      "BR002": 3,
      "BR003": 7,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD018",
    "name": "Avarakkai",
    "originalPluName": "AVARAKAI",
    "variety": "Country Flat Beans",
    "sku": "VEG-018",
    "category": "Vegetables",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 55,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🫛",
    "stocks": {
      "BR001": 2,
      "BR002": 5,
      "BR003": 7,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD019",
    "name": "Lauki (Bottle Gourd)",
    "originalPluName": "LOCKY",
    "variety": "Long Bottle Gourd",
    "sku": "VEG-019",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 400,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥒",
    "stocks": {
      "BR001": 0,
      "BR002": 2,
      "BR003": 6,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD020",
    "name": "Bitter Gourd",
    "originalPluName": "BITTERGOURD",
    "variety": "Fresh Green",
    "sku": "VEG-020",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 600,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥒",
    "stocks": {
      "BR001": 1,
      "BR002": 4,
      "BR003": 6,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD021",
    "name": "Capsicum Green",
    "originalPluName": "CAPSICUM",
    "variety": "Bell Pepper",
    "sku": "VEG-021",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 700,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🫑",
    "stocks": {
      "BR001": 8,
      "BR002": 1,
      "BR003": 5,
      "BR004": 1
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD022",
    "name": "Cabbage Green",
    "originalPluName": "CABBAGE",
    "variety": "Round Fresh",
    "sku": "OTH-022",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 420,
    "supplierName": "Sahyadri Farm Fresh",
    "image": "🥬",
    "stocks": {
      "BR001": 0,
      "BR002": 3,
      "BR003": 5,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD023",
    "name": "Cucumber Local",
    "originalPluName": "CUCUMBER",
    "variety": "Crisp Fresh",
    "sku": "VEG-023",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 450,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥒",
    "stocks": {
      "BR001": 7,
      "BR002": 0,
      "BR003": 4,
      "BR004": 0
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD024",
    "name": "Raw Banana (Cooking)",
    "originalPluName": "RAW BANANA",
    "variety": "Plantain Green",
    "sku": "FRU-024",
    "category": "Vegetables",
    "unit": "Bunches",
    "reorderLevel": 5,
    "unitCost": 350,
    "supplierName": "ABC Fruit Market",
    "image": "🍌",
    "stocks": {
      "BR001": 5,
      "BR002": 7,
      "BR003": 3,
      "BR004": 7
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD025",
    "name": "Garlic Indian",
    "originalPluName": "GARLIC",
    "variety": "M.P. Garlic",
    "sku": "VEG-025",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 2800,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🧄",
    "stocks": {
      "BR001": 6,
      "BR002": 9,
      "BR003": 3,
      "BR004": 8
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD026",
    "name": "Garlic Peeled",
    "originalPluName": "GARLIC PLD",
    "variety": "M.P. Garlic",
    "sku": "VEG-026",
    "category": "Vegetables",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 180,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🧄",
    "stocks": {
      "BR001": 4,
      "BR002": 6,
      "BR003": 2,
      "BR004": 6
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD027",
    "name": "Ginger",
    "originalPluName": "GINGER",
    "variety": "Hassan Fresh",
    "sku": "VEG-027",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 1600,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🫚",
    "stocks": {
      "BR001": 5,
      "BR002": 8,
      "BR003": 2,
      "BR004": 7
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD028",
    "name": "Green Chilli",
    "originalPluName": "GREEN CHILLI",
    "variety": "Spicy Fresh",
    "sku": "VEG-028",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 650,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🌶️",
    "stocks": {
      "BR001": 3,
      "BR002": 5,
      "BR003": 1,
      "BR004": 5
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD029",
    "name": "Drumstick",
    "originalPluName": "DRUMSTICK",
    "variety": "Local Moringa",
    "sku": "VEG-029",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 550,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥢",
    "stocks": {
      "BR001": 4,
      "BR002": 7,
      "BR003": 1,
      "BR004": 6
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD030",
    "name": "Raw Green Papaya",
    "originalPluName": "PAPAYA RAW",
    "variety": "Taiwan Red Lady",
    "sku": "FRU-030",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 650,
    "supplierName": "ABC Fruit Market",
    "image": "🍈",
    "stocks": {
      "BR001": 2,
      "BR002": 4,
      "BR003": 0,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD031",
    "name": "Lemon Standard",
    "originalPluName": "LEMON",
    "variety": "Seedless Juicy",
    "sku": "VEG-031",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 650,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🍋",
    "stocks": {
      "BR001": 3,
      "BR002": 6,
      "BR003": 0,
      "BR004": 5
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD032",
    "name": "Cauliflower",
    "originalPluName": "CAULIFLOWER",
    "variety": "Snow White",
    "sku": "VEG-032",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 600,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥦",
    "stocks": {
      "BR001": 1,
      "BR002": 3,
      "BR003": 7,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD033",
    "name": "Sambar Cucumber",
    "originalPluName": "SAMBAR CUCUMER",
    "variety": "Crisp Fresh",
    "sku": "VEG-033",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 450,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥒",
    "stocks": {
      "BR001": 2,
      "BR002": 5,
      "BR003": 7,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD034",
    "name": "Arbi (Colocasia)",
    "originalPluName": "ARAVI",
    "variety": "Aravi Root",
    "sku": "VEG-034",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 750,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥔",
    "stocks": {
      "BR001": 0,
      "BR002": 2,
      "BR003": 6,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD035",
    "name": "Small Onion (Shallots)",
    "originalPluName": "S ONION",
    "variety": "Sambar Onion",
    "sku": "VEG-035",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 1450,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🧅",
    "stocks": {
      "BR001": 1,
      "BR002": 4,
      "BR003": 6,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD036",
    "name": "Baby Potato",
    "originalPluName": "B POTATO",
    "variety": "Dum Potato",
    "sku": "VEG-036",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 850,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥔",
    "stocks": {
      "BR001": 8,
      "BR002": 1,
      "BR003": 5,
      "BR004": 1
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD037",
    "name": "Kovakkai / Kundru (Tindora)",
    "originalPluName": "KOVAKKA KUNDRU",
    "variety": "Ivy Gourd",
    "sku": "VEG-037",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 550,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥒",
    "stocks": {
      "BR001": 0,
      "BR002": 3,
      "BR003": 5,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD038",
    "name": "Snake Gourd (Padavalakai)",
    "originalPluName": "SNAKEGRD",
    "variety": "Long Snake Gourd",
    "sku": "VEG-038",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 420,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥒",
    "stocks": {
      "BR001": 7,
      "BR002": 0,
      "BR003": 4,
      "BR004": 0
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD039",
    "name": "Button Mushroom",
    "originalPluName": "MUSHROOM",
    "variety": "White Button Fresh",
    "sku": "VEG-039",
    "category": "Vegetables",
    "unit": "Packets",
    "reorderLevel": 5,
    "unitCost": 42,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🍄",
    "stocks": {
      "BR001": 5,
      "BR002": 7,
      "BR003": 3,
      "BR004": 7
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD040",
    "name": "Baby Corn",
    "originalPluName": "BABY CORN",
    "variety": "Peeled Tray",
    "sku": "VEG-040",
    "category": "Vegetables",
    "unit": "Packets",
    "reorderLevel": 5,
    "unitCost": 35,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🌽",
    "stocks": {
      "BR001": 6,
      "BR002": 9,
      "BR003": 3,
      "BR004": 8
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD041",
    "name": "Curry Leaf",
    "originalPluName": "CURRY LEAF",
    "variety": "Fresh Herb Bunches",
    "sku": "VEG-041",
    "category": "Vegetables",
    "unit": "Bunches",
    "reorderLevel": 5,
    "unitCost": 25,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🌿",
    "stocks": {
      "BR001": 4,
      "BR002": 6,
      "BR003": 2,
      "BR004": 6
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD042",
    "name": "Pudina (Mint)",
    "originalPluName": "PUDINA",
    "variety": "Fresh Herb Bunches",
    "sku": "VEG-042",
    "category": "Vegetables",
    "unit": "Bunches",
    "reorderLevel": 5,
    "unitCost": 25,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🌿",
    "stocks": {
      "BR001": 5,
      "BR002": 8,
      "BR003": 2,
      "BR004": 7
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD043",
    "name": "Palak (Spinach)",
    "originalPluName": "PALAK",
    "variety": "Fresh Herb Bunches",
    "sku": "VEG-043",
    "category": "Vegetables",
    "unit": "Bunches",
    "reorderLevel": 5,
    "unitCost": 25,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🌿",
    "stocks": {
      "BR001": 3,
      "BR002": 5,
      "BR003": 1,
      "BR004": 5
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD044",
    "name": "Methi (Fenugreek)",
    "originalPluName": "METHI",
    "variety": "Fresh Herb Bunches",
    "sku": "VEG-044",
    "category": "Vegetables",
    "unit": "Bunches",
    "reorderLevel": 5,
    "unitCost": 25,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🌿",
    "stocks": {
      "BR001": 4,
      "BR002": 7,
      "BR003": 1,
      "BR004": 6
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD045",
    "name": "Coriander (Kothmir)",
    "originalPluName": "CORIANDER",
    "variety": "Fresh Herb Bunches",
    "sku": "VEG-045",
    "category": "Vegetables",
    "unit": "Bunches",
    "reorderLevel": 5,
    "unitCost": 25,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🌿",
    "stocks": {
      "BR001": 2,
      "BR002": 4,
      "BR003": 0,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD046",
    "name": "Spring Onion",
    "originalPluName": "SPRING ONION",
    "variety": "Green Tops",
    "sku": "VEG-046",
    "category": "Vegetables",
    "unit": "Bunches",
    "reorderLevel": 5,
    "unitCost": 28,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🌱",
    "stocks": {
      "BR001": 3,
      "BR002": 6,
      "BR003": 0,
      "BR004": 5
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD047",
    "name": "Yellow Pumpkin",
    "originalPluName": "PUMPKIN YEL",
    "variety": "Whole Squash",
    "sku": "VEG-047",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 550,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🎃",
    "stocks": {
      "BR001": 1,
      "BR002": 3,
      "BR003": 7,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD048",
    "name": "White Pumpkin (Ash Gourd)",
    "originalPluName": "PUMPKIN WHT",
    "variety": "Whole Squash",
    "sku": "VEG-048",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 550,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🎃",
    "stocks": {
      "BR001": 2,
      "BR002": 5,
      "BR003": 7,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD049",
    "name": "Ridge Gourd (Hirekayi)",
    "originalPluName": "RIDGE GRD",
    "variety": "Fresh Ribbed",
    "sku": "VEG-049",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 500,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥒",
    "stocks": {
      "BR001": 0,
      "BR002": 2,
      "BR003": 6,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD050",
    "name": "Jackfruit (Raw / Ripe)",
    "originalPluName": "JACK FRUIT",
    "variety": "Panruti Fresh",
    "sku": "VEG-050",
    "category": "Vegetables",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 45,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🍈",
    "stocks": {
      "BR001": 1,
      "BR002": 4,
      "BR003": 6,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD051",
    "name": "Banana Stem",
    "originalPluName": "BANANA STEM",
    "variety": "Tender Core",
    "sku": "FRU-051",
    "category": "Vegetables",
    "unit": "Pieces",
    "reorderLevel": 5,
    "unitCost": 25,
    "supplierName": "ABC Fruit Market",
    "image": "🎋",
    "stocks": {
      "BR001": 8,
      "BR002": 1,
      "BR003": 5,
      "BR004": 1
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD052",
    "name": "Elephant Foot Yam (Suran)",
    "originalPluName": "CHENA SURAN",
    "variety": "Chena Yam",
    "sku": "VEG-052",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 900,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥔",
    "stocks": {
      "BR001": 0,
      "BR002": 3,
      "BR003": 5,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD053",
    "name": "Avarakkai",
    "originalPluName": "AVARAKAI C",
    "variety": "Country Flat Beans",
    "sku": "VEG-053",
    "category": "Vegetables",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 55,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🫛",
    "stocks": {
      "BR001": 7,
      "BR002": 0,
      "BR003": 4,
      "BR004": 0
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD054",
    "name": "English Cucumber",
    "originalPluName": "ENG CUCUMBER",
    "variety": "Crisp Fresh",
    "sku": "VEG-054",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 450,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥒",
    "stocks": {
      "BR001": 5,
      "BR002": 7,
      "BR003": 3,
      "BR004": 7
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD055",
    "name": "Egg Suguna Farm Fresh",
    "originalPluName": "EGG SUGUNA",
    "variety": "Layer Fresh (Tray 30s)",
    "sku": "OTH-055",
    "category": "Dairy & Others",
    "unit": "Trays",
    "reorderLevel": 5,
    "unitCost": 180,
    "supplierName": "Sahyadri Farm Fresh",
    "image": "🥚",
    "stocks": {
      "BR001": 6,
      "BR002": 9,
      "BR003": 3,
      "BR004": 8
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD056",
    "name": "Tapioca (Kappa / Cassava)",
    "originalPluName": "TAPIOCA",
    "variety": "Fresh Starchy Root",
    "sku": "VEG-056",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 650,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥔",
    "stocks": {
      "BR001": 4,
      "BR002": 6,
      "BR003": 2,
      "BR004": 6
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD057",
    "name": "Beetroot",
    "originalPluName": "BEETROOT",
    "variety": "Ooty Dark Red",
    "sku": "VEG-057",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 750,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🫐",
    "stocks": {
      "BR001": 5,
      "BR002": 8,
      "BR003": 2,
      "BR004": 7
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD058",
    "name": "Bajji Chilli (Bhavnagri)",
    "originalPluName": "BAJJI CHILI",
    "variety": "Spicy Fresh",
    "sku": "VEG-058",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 650,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🌶️",
    "stocks": {
      "BR001": 3,
      "BR002": 5,
      "BR003": 1,
      "BR004": 5
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD059",
    "name": "Green Beans",
    "originalPluName": "BEANS GREEN",
    "variety": "Ring Beans",
    "sku": "VEG-059",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 900,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🫘",
    "stocks": {
      "BR001": 4,
      "BR002": 7,
      "BR003": 1,
      "BR004": 6
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD060",
    "name": "Banana Flower (Vazhaipoo)",
    "originalPluName": "BANANA FLOWER",
    "variety": "Fresh Blossom",
    "sku": "FRU-060",
    "category": "Vegetables",
    "unit": "Pieces",
    "reorderLevel": 5,
    "unitCost": 30,
    "supplierName": "ABC Fruit Market",
    "image": "🌺",
    "stocks": {
      "BR001": 2,
      "BR002": 4,
      "BR003": 0,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD061",
    "name": "Capsicum Yellow",
    "originalPluName": "CAPSICUM YEL",
    "variety": "Bell Pepper",
    "sku": "VEG-061",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 1600,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🫑",
    "stocks": {
      "BR001": 3,
      "BR002": 6,
      "BR003": 0,
      "BR004": 5
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD062",
    "name": "Broccoli",
    "originalPluName": "BROOKLY",
    "variety": "Green Florets",
    "sku": "VEG-062",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 950,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥦",
    "stocks": {
      "BR001": 1,
      "BR002": 3,
      "BR003": 7,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD063",
    "name": "Sarson Leaf",
    "originalPluName": "SARSO LEAF",
    "variety": "Fresh Herb Bunches",
    "sku": "VEG-063",
    "category": "Vegetables",
    "unit": "Bunches",
    "reorderLevel": 5,
    "unitCost": 25,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🌿",
    "stocks": {
      "BR001": 2,
      "BR002": 5,
      "BR003": 7,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD064",
    "name": "Cluster Beans (Gorikai)",
    "originalPluName": "KOTHAVARA",
    "variety": "Tender Guar",
    "sku": "VEG-064",
    "category": "Vegetables",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 45,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🫛",
    "stocks": {
      "BR001": 0,
      "BR002": 2,
      "BR003": 6,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD065",
    "name": "Garlic Indian",
    "originalPluName": "GARLIC",
    "variety": "M.P. Garlic",
    "sku": "VEG-065",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 2800,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🧄",
    "stocks": {
      "BR001": 1,
      "BR002": 4,
      "BR003": 6,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD066",
    "name": "Double Beans (Lima)",
    "originalPluName": "DBL BEANS",
    "variety": "Fresh Pods",
    "sku": "VEG-066",
    "category": "Vegetables",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 80,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🫘",
    "stocks": {
      "BR001": 8,
      "BR002": 1,
      "BR003": 5,
      "BR004": 1
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD067",
    "name": "Capsicum Red",
    "originalPluName": "CAPSICUM RED",
    "variety": "Bell Pepper",
    "sku": "VEG-067",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 1600,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🫑",
    "stocks": {
      "BR001": 0,
      "BR002": 3,
      "BR003": 5,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD068",
    "name": "Red Cabbage",
    "originalPluName": "RED CABBAGE",
    "variety": "Purple Round",
    "sku": "OTH-068",
    "category": "Dairy & Others",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 750,
    "supplierName": "Sahyadri Farm Fresh",
    "image": "🥬",
    "stocks": {
      "BR001": 7,
      "BR002": 0,
      "BR003": 4,
      "BR004": 0
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD069",
    "name": "Sweet Corn",
    "originalPluName": "SWEETCORN",
    "variety": "Golden Cob",
    "sku": "VEG-069",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 550,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🌽",
    "stocks": {
      "BR001": 5,
      "BR002": 7,
      "BR003": 3,
      "BR004": 7
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD070",
    "name": "Apple Indian (Shimla)",
    "originalPluName": "APPLE IND",
    "variety": "Grade-A Fresh",
    "sku": "FRU-070",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 2100,
    "supplierName": "ABC Fruit Market",
    "image": "🍎",
    "stocks": {
      "BR001": 6,
      "BR002": 9,
      "BR003": 3,
      "BR004": 8
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD071",
    "name": "Apple Washington",
    "originalPluName": "APPLE WSH",
    "variety": "Grade-A Fresh",
    "sku": "FRU-071",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 2100,
    "supplierName": "ABC Fruit Market",
    "image": "🍎",
    "stocks": {
      "BR001": 4,
      "BR002": 6,
      "BR003": 2,
      "BR004": 6
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD072",
    "name": "Apple China Fuji",
    "originalPluName": "APPLE CHINA",
    "variety": "Grade-A Fresh",
    "sku": "FRU-072",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 2100,
    "supplierName": "ABC Fruit Market",
    "image": "🍎",
    "stocks": {
      "BR001": 5,
      "BR002": 8,
      "BR003": 2,
      "BR004": 7
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD073",
    "name": "Apple Green (Granny Smith)",
    "originalPluName": "APPLE GREEN",
    "variety": "Grade-A Fresh",
    "sku": "FRU-073",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 2100,
    "supplierName": "ABC Fruit Market",
    "image": "🍏",
    "stocks": {
      "BR001": 3,
      "BR002": 5,
      "BR003": 1,
      "BR004": 5
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD074",
    "name": "Apple Premium",
    "originalPluName": "APPLE",
    "variety": "Grade-A Fresh",
    "sku": "FRU-074",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 2100,
    "supplierName": "ABC Fruit Market",
    "image": "🍎",
    "stocks": {
      "BR001": 4,
      "BR002": 7,
      "BR003": 1,
      "BR004": 6
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD075",
    "name": "Apple Royal Gala",
    "originalPluName": "APPLE GALA",
    "variety": "Grade-A Fresh",
    "sku": "FRU-075",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 2100,
    "supplierName": "ABC Fruit Market",
    "image": "🍎",
    "stocks": {
      "BR001": 2,
      "BR002": 4,
      "BR003": 0,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD076",
    "name": "Mosambi Sweet Lime",
    "originalPluName": "MUSAMBI",
    "variety": "Juicy Citrus",
    "sku": "FRU-076",
    "category": "Fruits",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 1100,
    "supplierName": "ABC Fruit Market",
    "image": "🍈",
    "stocks": {
      "BR001": 3,
      "BR002": 6,
      "BR003": 0,
      "BR004": 5
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD077",
    "name": "Anar (Pomegranate)",
    "originalPluName": "ANAR",
    "variety": "Bhagwa Red Ruby",
    "sku": "FRU-077",
    "category": "Fruits",
    "unit": "Boxes",
    "reorderLevel": 5,
    "unitCost": 1650,
    "supplierName": "ABC Fruit Market",
    "image": "🫐",
    "stocks": {
      "BR001": 1,
      "BR002": 3,
      "BR003": 7,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD078",
    "name": "Papaya Ripe (Red Lady)",
    "originalPluName": "PAPAYA",
    "variety": "Taiwan Red Lady",
    "sku": "FRU-078",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 650,
    "supplierName": "ABC Fruit Market",
    "image": "🍈",
    "stocks": {
      "BR001": 2,
      "BR002": 5,
      "BR003": 7,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD079",
    "name": "Grapes Red Globe Imported",
    "originalPluName": "GRAPES IMP",
    "variety": "Nashik / Bangalore",
    "sku": "FRU-079",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 1200,
    "supplierName": "ABC Fruit Market",
    "image": "🍇",
    "stocks": {
      "BR001": 0,
      "BR002": 2,
      "BR003": 6,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD080",
    "name": "Grapes Black Seedless",
    "originalPluName": "GRAPES BLK",
    "variety": "Nashik / Bangalore",
    "sku": "FRU-080",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 1200,
    "supplierName": "ABC Fruit Market",
    "image": "🍇",
    "stocks": {
      "BR001": 1,
      "BR002": 4,
      "BR003": 6,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD081",
    "name": "Grapes Green Thompson",
    "originalPluName": "GRAPES GREEN",
    "variety": "Nashik / Bangalore",
    "sku": "FRU-081",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 1200,
    "supplierName": "ABC Fruit Market",
    "image": "🍇",
    "stocks": {
      "BR001": 8,
      "BR002": 1,
      "BR003": 5,
      "BR004": 1
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD082",
    "name": "Grapes Sharad Seedless",
    "originalPluName": "GRAPES SHARI",
    "variety": "Nashik / Bangalore",
    "sku": "FRU-082",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 1200,
    "supplierName": "ABC Fruit Market",
    "image": "🍇",
    "stocks": {
      "BR001": 0,
      "BR002": 3,
      "BR003": 5,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD083",
    "name": "Grapes Sharad Seedless",
    "originalPluName": "GRPS BOX SHARAD",
    "variety": "Nashik / Bangalore",
    "sku": "FRU-083",
    "category": "Fruits",
    "unit": "Boxes",
    "reorderLevel": 5,
    "unitCost": 1200,
    "supplierName": "ABC Fruit Market",
    "image": "🍇",
    "stocks": {
      "BR001": 7,
      "BR002": 0,
      "BR003": 4,
      "BR004": 0
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD084",
    "name": "Kiwi Fruit",
    "originalPluName": "KIWI FRUIT",
    "variety": "Zespri Green",
    "sku": "FRU-084",
    "category": "Fruits",
    "unit": "Boxes",
    "reorderLevel": 5,
    "unitCost": 850,
    "supplierName": "ABC Fruit Market",
    "image": "🥝",
    "stocks": {
      "BR001": 5,
      "BR002": 7,
      "BR003": 3,
      "BR004": 7
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD085",
    "name": "Apple Premium",
    "originalPluName": "PINEAPPLE",
    "variety": "Grade-A Fresh",
    "sku": "FRU-085",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 2100,
    "supplierName": "ABC Fruit Market",
    "image": "🍎",
    "stocks": {
      "BR001": 6,
      "BR002": 9,
      "BR003": 3,
      "BR004": 8
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD086",
    "name": "Banana Yellaki",
    "originalPluName": "BANANA ELACHI",
    "variety": "Karnataka / Kerala",
    "sku": "FRU-086",
    "category": "Fruits",
    "unit": "Bunches",
    "reorderLevel": 5,
    "unitCost": 450,
    "supplierName": "ABC Fruit Market",
    "image": "🍌",
    "stocks": {
      "BR001": 4,
      "BR002": 6,
      "BR003": 2,
      "BR004": 6
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD087",
    "name": "Banana Nendran",
    "originalPluName": "BANANA KERALA",
    "variety": "Karnataka / Kerala",
    "sku": "FRU-087",
    "category": "Fruits",
    "unit": "Bunches",
    "reorderLevel": 5,
    "unitCost": 450,
    "supplierName": "ABC Fruit Market",
    "image": "🍌",
    "stocks": {
      "BR001": 5,
      "BR002": 8,
      "BR003": 2,
      "BR004": 7
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD088",
    "name": "Watermelon Big Dark",
    "originalPluName": "WTRMELON BIG",
    "variety": "Sweet Striped",
    "sku": "FRU-088",
    "category": "Fruits",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 22,
    "supplierName": "ABC Fruit Market",
    "image": "🍉",
    "stocks": {
      "BR001": 3,
      "BR002": 5,
      "BR003": 1,
      "BR004": 5
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD089",
    "name": "Watermelon Kiran",
    "originalPluName": "WTRMELON KIRAN",
    "variety": "Sweet Striped",
    "sku": "FRU-089",
    "category": "Fruits",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 22,
    "supplierName": "ABC Fruit Market",
    "image": "🍉",
    "stocks": {
      "BR001": 4,
      "BR002": 7,
      "BR003": 1,
      "BR004": 6
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD090",
    "name": "Pear Green",
    "originalPluName": "PEAR",
    "variety": "Imported Sweet",
    "sku": "FRU-090",
    "category": "Fruits",
    "unit": "Boxes",
    "reorderLevel": 5,
    "unitCost": 1450,
    "supplierName": "ABC Fruit Market",
    "image": "🍐",
    "stocks": {
      "BR001": 2,
      "BR002": 4,
      "BR003": 0,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD091",
    "name": "Golden Pear",
    "originalPluName": "GOLDEN PEAR",
    "variety": "Imported Sweet",
    "sku": "FRU-091",
    "category": "Fruits",
    "unit": "Boxes",
    "reorderLevel": 5,
    "unitCost": 1450,
    "supplierName": "ABC Fruit Market",
    "image": "🍐",
    "stocks": {
      "BR001": 3,
      "BR002": 6,
      "BR003": 0,
      "BR004": 5
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD092",
    "name": "Banana Robusta",
    "originalPluName": "BANANA ROBUST",
    "variety": "Karnataka / Kerala",
    "sku": "FRU-092",
    "category": "Fruits",
    "unit": "Bunches",
    "reorderLevel": 5,
    "unitCost": 450,
    "supplierName": "ABC Fruit Market",
    "image": "🍌",
    "stocks": {
      "BR001": 1,
      "BR002": 3,
      "BR003": 7,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD093",
    "name": "Red Banana",
    "originalPluName": "RED.BANANA",
    "variety": "Karnataka / Kerala",
    "sku": "FRU-093",
    "category": "Fruits",
    "unit": "Bunches",
    "reorderLevel": 5,
    "unitCost": 450,
    "supplierName": "ABC Fruit Market",
    "image": "🍌",
    "stocks": {
      "BR001": 2,
      "BR002": 5,
      "BR003": 7,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD094",
    "name": "Apple Premium",
    "originalPluName": "CUST APPLE",
    "variety": "Grade-A Fresh",
    "sku": "FRU-094",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 2100,
    "supplierName": "ABC Fruit Market",
    "image": "🍎",
    "stocks": {
      "BR001": 0,
      "BR002": 2,
      "BR003": 6,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD095",
    "name": "Litchi Shahi Big",
    "originalPluName": "LITCHI BIG",
    "variety": "Muzaffarpur",
    "sku": "FRU-095",
    "category": "Fruits",
    "unit": "Boxes",
    "reorderLevel": 5,
    "unitCost": 950,
    "supplierName": "ABC Fruit Market",
    "image": "🍒",
    "stocks": {
      "BR001": 1,
      "BR002": 4,
      "BR003": 6,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD096",
    "name": "Litchi Small",
    "originalPluName": "LITCHI SML",
    "variety": "Muzaffarpur",
    "sku": "FRU-096",
    "category": "Fruits",
    "unit": "Boxes",
    "reorderLevel": 5,
    "unitCost": 950,
    "supplierName": "ABC Fruit Market",
    "image": "🍒",
    "stocks": {
      "BR001": 8,
      "BR002": 1,
      "BR003": 5,
      "BR004": 1
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD097",
    "name": "Muskmelon",
    "originalPluName": "MUSKMELON",
    "variety": "Kharbuja Golden",
    "sku": "FRU-097",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 600,
    "supplierName": "ABC Fruit Market",
    "image": "🍈",
    "stocks": {
      "BR001": 0,
      "BR002": 3,
      "BR003": 5,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD098",
    "name": "Dates Fresh / Kimia",
    "originalPluName": "DATES",
    "variety": "Arabian Soft Dates",
    "sku": "FRU-098",
    "category": "Fruits",
    "unit": "Boxes",
    "reorderLevel": 5,
    "unitCost": 750,
    "supplierName": "ABC Fruit Market",
    "image": "🟤",
    "stocks": {
      "BR001": 7,
      "BR002": 0,
      "BR003": 4,
      "BR004": 0
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD099",
    "name": "Butter Fruit (Avocado)",
    "originalPluName": "BUTTER FRT",
    "variety": "Kodaikanal Hass",
    "sku": "FRU-099",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 1500,
    "supplierName": "ABC Fruit Market",
    "image": "🥑",
    "stocks": {
      "BR001": 5,
      "BR002": 7,
      "BR003": 3,
      "BR004": 7
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD100",
    "name": "Strawberry",
    "originalPluName": "STRAWBERRY",
    "variety": "Mahabaleshwar Box",
    "sku": "FRU-100",
    "category": "Fruits",
    "unit": "Boxes",
    "reorderLevel": 5,
    "unitCost": 450,
    "supplierName": "ABC Fruit Market",
    "image": "🍓",
    "stocks": {
      "BR001": 6,
      "BR002": 9,
      "BR003": 3,
      "BR004": 8
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD101",
    "name": "Guava (Allahabad Safeda)",
    "originalPluName": "GUAVA",
    "variety": "Taiwan Pink / White",
    "sku": "FRU-101",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 650,
    "supplierName": "ABC Fruit Market",
    "image": "🍈",
    "stocks": {
      "BR001": 4,
      "BR002": 6,
      "BR003": 2,
      "BR004": 6
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD102",
    "name": "Anjeer Fresh Figs",
    "originalPluName": "ANJEER BOX",
    "variety": "Purandar Sweet Box",
    "sku": "FRU-102",
    "category": "Fruits",
    "unit": "Boxes",
    "reorderLevel": 5,
    "unitCost": 380,
    "supplierName": "ABC Fruit Market",
    "image": "🫐",
    "stocks": {
      "BR001": 5,
      "BR002": 8,
      "BR003": 2,
      "BR004": 7
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD103",
    "name": "Plum Black",
    "originalPluName": "PLUM",
    "variety": "Indian Plum",
    "sku": "FRU-103",
    "category": "Fruits",
    "unit": "Boxes",
    "reorderLevel": 5,
    "unitCost": 650,
    "supplierName": "ABC Fruit Market",
    "image": "🫐",
    "stocks": {
      "BR001": 3,
      "BR002": 5,
      "BR003": 1,
      "BR004": 5
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD104",
    "name": "Orange Nagpur Sweet",
    "originalPluName": "ORANGE",
    "variety": "Juicy Table",
    "sku": "FRU-104",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 1350,
    "supplierName": "ABC Fruit Market",
    "image": "🍊",
    "stocks": {
      "BR001": 4,
      "BR002": 7,
      "BR003": 1,
      "BR004": 6
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD105",
    "name": "Orange Special",
    "originalPluName": "ORANGE SP",
    "variety": "Juicy Table",
    "sku": "FRU-105",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 1350,
    "supplierName": "ABC Fruit Market",
    "image": "🍊",
    "stocks": {
      "BR001": 2,
      "BR002": 4,
      "BR003": 0,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD106",
    "name": "Orange Imported Valencia",
    "originalPluName": "ORANGE IMP",
    "variety": "Juicy Table",
    "sku": "FRU-106",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 1350,
    "supplierName": "ABC Fruit Market",
    "image": "🍊",
    "stocks": {
      "BR001": 3,
      "BR002": 6,
      "BR003": 0,
      "BR004": 5
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD107",
    "name": "Sweet Tamarind Box",
    "originalPluName": "SWT TAMARIND",
    "variety": "Thai Sweet Tamarind",
    "sku": "VEG-107",
    "category": "Vegetables",
    "unit": "Boxes",
    "reorderLevel": 5,
    "unitCost": 320,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥜",
    "stocks": {
      "BR001": 1,
      "BR002": 3,
      "BR003": 7,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD108",
    "name": "Mango Imam Pasand",
    "originalPluName": "IP.PASAND",
    "variety": "Andhra Royal",
    "sku": "VEG-108",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 2400,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥭",
    "stocks": {
      "BR001": 2,
      "BR002": 5,
      "BR003": 7,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD109",
    "name": "Mango Banganapalli",
    "originalPluName": "BAIGAN.PALLI",
    "variety": "Andhra Royal",
    "sku": "VEG-109",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 2400,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥭",
    "stocks": {
      "BR001": 0,
      "BR002": 2,
      "BR003": 6,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD110",
    "name": "Mango Sindhura",
    "originalPluName": "SENDURA.MANGO",
    "variety": "Premium Orchards",
    "sku": "FRU-110",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 2200,
    "supplierName": "ABC Fruit Market",
    "image": "🥭",
    "stocks": {
      "BR001": 1,
      "BR002": 4,
      "BR003": 6,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD111",
    "name": "Mango Malgova",
    "originalPluName": "MANGO.MALGOWA",
    "variety": "Premium Orchards",
    "sku": "FRU-111",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 2200,
    "supplierName": "ABC Fruit Market",
    "image": "🥭",
    "stocks": {
      "BR001": 8,
      "BR002": 1,
      "BR003": 5,
      "BR004": 1
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD112",
    "name": "Mango Banganapalli",
    "originalPluName": "MANGO",
    "variety": "Premium Orchards",
    "sku": "FRU-112",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 2200,
    "supplierName": "ABC Fruit Market",
    "image": "🥭",
    "stocks": {
      "BR001": 0,
      "BR002": 3,
      "BR003": 5,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD113",
    "name": "Mango Raspuri",
    "originalPluName": "MANGO RASPURI",
    "variety": "Premium Orchards",
    "sku": "FRU-113",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 2200,
    "supplierName": "ABC Fruit Market",
    "image": "🥭",
    "stocks": {
      "BR001": 7,
      "BR002": 0,
      "BR003": 4,
      "BR004": 0
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD114",
    "name": "Mango Badami (Alphonso)",
    "originalPluName": "MANGO.BADAMI",
    "variety": "Premium Orchards",
    "sku": "FRU-114",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 2200,
    "supplierName": "ABC Fruit Market",
    "image": "🥭",
    "stocks": {
      "BR001": 5,
      "BR002": 7,
      "BR003": 3,
      "BR004": 7
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD115",
    "name": "Groundnut Fresh (Peanuts)",
    "originalPluName": "ground.nut",
    "variety": "Wet Boiled Grade",
    "sku": "VEG-115",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 850,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥜",
    "stocks": {
      "BR001": 6,
      "BR002": 9,
      "BR003": 3,
      "BR004": 8
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD116",
    "name": "Mango Langra",
    "originalPluName": "MANGO LANGENDS",
    "variety": "Premium Orchards",
    "sku": "FRU-116",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 2200,
    "supplierName": "ABC Fruit Market",
    "image": "🥭",
    "stocks": {
      "BR001": 4,
      "BR002": 6,
      "BR003": 2,
      "BR004": 6
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD117",
    "name": "Mango Kalapadi",
    "originalPluName": "MANGO KALAPADI",
    "variety": "Premium Orchards",
    "sku": "FRU-117",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 2200,
    "supplierName": "ABC Fruit Market",
    "image": "🥭",
    "stocks": {
      "BR001": 5,
      "BR002": 8,
      "BR003": 2,
      "BR004": 7
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD118",
    "name": "Elephant Foot Yam (Suran)",
    "originalPluName": "YAM",
    "variety": "Chena Yam",
    "sku": "VEG-118",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 900,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥔",
    "stocks": {
      "BR001": 3,
      "BR002": 5,
      "BR003": 1,
      "BR004": 5
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD119",
    "name": "Sweetcorn USA",
    "originalPluName": "CORN USA",
    "variety": "Golden Cob",
    "sku": "VEG-119",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 550,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🌽",
    "stocks": {
      "BR001": 4,
      "BR002": 7,
      "BR003": 1,
      "BR004": 6
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD120",
    "name": "Table Eggs White",
    "originalPluName": "EGG",
    "variety": "Layer Fresh (Tray 30s)",
    "sku": "OTH-120",
    "category": "Dairy & Others",
    "unit": "Trays",
    "reorderLevel": 5,
    "unitCost": 180,
    "supplierName": "Sahyadri Farm Fresh",
    "image": "🥚",
    "stocks": {
      "BR001": 2,
      "BR002": 4,
      "BR003": 0,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD121",
    "name": "SWEET MILON",
    "originalPluName": "SWEET MILON",
    "variety": "SWEET MILON",
    "sku": "FRU-121",
    "category": "Fruits",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 45,
    "supplierName": "ABC Fruit Market",
    "image": "🥦",
    "stocks": {
      "BR001": 3,
      "BR002": 6,
      "BR003": 0,
      "BR004": 5
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD122",
    "name": "Raw Banana (Cooking)",
    "originalPluName": "GREEN BANANA",
    "variety": "Plantain Green",
    "sku": "FRU-122",
    "category": "Fruits",
    "unit": "Bunches",
    "reorderLevel": 5,
    "unitCost": 350,
    "supplierName": "ABC Fruit Market",
    "image": "🍌",
    "stocks": {
      "BR001": 1,
      "BR002": 3,
      "BR003": 7,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD123",
    "name": "STAR FRUIT",
    "originalPluName": "STAR FRUIT",
    "variety": "STAR FRUIT",
    "sku": "FRU-123",
    "category": "Fruits",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 45,
    "supplierName": "ABC Fruit Market",
    "image": "🥦",
    "stocks": {
      "BR001": 2,
      "BR002": 5,
      "BR003": 7,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD124",
    "name": "Iceberg Lettuce",
    "originalPluName": "LETUCE",
    "variety": "Crisphead",
    "sku": "VEG-124",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 600,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥬",
    "stocks": {
      "BR001": 0,
      "BR002": 2,
      "BR003": 6,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD125",
    "name": "Parval (Pointed Gourd)",
    "originalPluName": "PARVAL",
    "variety": "Bengal Fresh",
    "sku": "VEG-125",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 650,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥒",
    "stocks": {
      "BR001": 1,
      "BR002": 4,
      "BR003": 6,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD126",
    "name": "Lemon Standard",
    "originalPluName": "LIMON",
    "variety": "Seedless Juicy",
    "sku": "VEG-126",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 650,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🍋",
    "stocks": {
      "BR001": 8,
      "BR002": 1,
      "BR003": 5,
      "BR004": 1
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD127",
    "name": "SATARY LEAVES",
    "originalPluName": "SATARY LEAVES",
    "variety": "SATARY LEAVES",
    "sku": "VEG-127",
    "category": "Vegetables",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 45,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥦",
    "stocks": {
      "BR001": 0,
      "BR002": 3,
      "BR003": 5,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD128",
    "name": "Iceberg Lettuce",
    "originalPluName": "LITIUS SML",
    "variety": "Crisphead",
    "sku": "VEG-128",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 600,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥬",
    "stocks": {
      "BR001": 7,
      "BR002": 0,
      "BR003": 4,
      "BR004": 0
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD129",
    "name": "CUST FRIT",
    "originalPluName": "CUST FRIT",
    "variety": "CUST FRIT",
    "sku": "FRU-129",
    "category": "Fruits",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 45,
    "supplierName": "ABC Fruit Market",
    "image": "🥦",
    "stocks": {
      "BR001": 5,
      "BR002": 7,
      "BR003": 3,
      "BR004": 7
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD130",
    "name": "PLD ONION",
    "originalPluName": "PLD ONION",
    "variety": "PLD ONION",
    "sku": "VEG-130",
    "category": "Vegetables",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 45,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥦",
    "stocks": {
      "BR001": 6,
      "BR002": 9,
      "BR003": 3,
      "BR004": 8
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD131",
    "name": "Raw Green Mango",
    "originalPluName": "GREEN MANGO",
    "variety": "Premium Orchards",
    "sku": "FRU-131",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 2200,
    "supplierName": "ABC Fruit Market",
    "image": "🥭",
    "stocks": {
      "BR001": 4,
      "BR002": 6,
      "BR003": 2,
      "BR004": 6
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD132",
    "name": "PLD GRN MNG",
    "originalPluName": "PLD GRN MNG",
    "variety": "PLD GRN MNG",
    "sku": "VEG-132",
    "category": "Vegetables",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 45,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥦",
    "stocks": {
      "BR001": 5,
      "BR002": 8,
      "BR003": 2,
      "BR004": 7
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD133",
    "name": "Sweet Corn Big",
    "originalPluName": "S CORN BIG",
    "variety": "Golden Cob",
    "sku": "VEG-133",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 550,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🌽",
    "stocks": {
      "BR001": 3,
      "BR002": 5,
      "BR003": 1,
      "BR004": 5
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD134",
    "name": "Grapes Bangalore Blue (Paneer)",
    "originalPluName": "GRAPES PANEER",
    "variety": "Nashik / Bangalore",
    "sku": "FRU-134",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 1200,
    "supplierName": "ABC Fruit Market",
    "image": "🍇",
    "stocks": {
      "BR001": 4,
      "BR002": 7,
      "BR003": 1,
      "BR004": 6
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD135",
    "name": "Sugar Cane Sticks",
    "originalPluName": "SUGAR CANE",
    "variety": "Sweet Yellow",
    "sku": "VEG-135",
    "category": "Vegetables",
    "unit": "Bundles",
    "reorderLevel": 5,
    "unitCost": 350,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🎋",
    "stocks": {
      "BR001": 2,
      "BR002": 4,
      "BR003": 0,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD136",
    "name": "Rambutan Fresh",
    "originalPluName": "RAMBUTTAN",
    "variety": "Kerala Red",
    "sku": "FRU-136",
    "category": "Fruits",
    "unit": "Boxes",
    "reorderLevel": 5,
    "unitCost": 1100,
    "supplierName": "ABC Fruit Market",
    "image": "🍒",
    "stocks": {
      "BR001": 3,
      "BR002": 6,
      "BR003": 0,
      "BR004": 5
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD137",
    "name": "Grapes Green Thompson",
    "originalPluName": "S P GRAPES",
    "variety": "Nashik / Bangalore",
    "sku": "FRU-137",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 1200,
    "supplierName": "ABC Fruit Market",
    "image": "🍇",
    "stocks": {
      "BR001": 1,
      "BR002": 3,
      "BR003": 7,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD138",
    "name": "Grapes Green Thompson",
    "originalPluName": "GRP GRN SEEDLES",
    "variety": "Nashik / Bangalore",
    "sku": "FRU-138",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 1200,
    "supplierName": "ABC Fruit Market",
    "image": "🍇",
    "stocks": {
      "BR001": 2,
      "BR002": 5,
      "BR003": 7,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD139",
    "name": "Jackfruit (Raw / Ripe)",
    "originalPluName": "JACK FRUIT",
    "variety": "Panruti Fresh",
    "sku": "VEG-139",
    "category": "Vegetables",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 45,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🍈",
    "stocks": {
      "BR001": 0,
      "BR002": 2,
      "BR003": 6,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD140",
    "name": "Cluster Beans (Gorikai)",
    "originalPluName": "GORIKAI",
    "variety": "Tender Guar",
    "sku": "VEG-140",
    "category": "Vegetables",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 45,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🫛",
    "stocks": {
      "BR001": 1,
      "BR002": 4,
      "BR003": 6,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD141",
    "name": "Raw Green Papaya",
    "originalPluName": "G PAPAYA",
    "variety": "Taiwan Red Lady",
    "sku": "FRU-141",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 650,
    "supplierName": "ABC Fruit Market",
    "image": "🍈",
    "stocks": {
      "BR001": 8,
      "BR002": 1,
      "BR003": 5,
      "BR004": 1
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD142",
    "name": "Tapioca (Kappa / Cassava)",
    "originalPluName": "TAPIOCA",
    "variety": "Fresh Starchy Root",
    "sku": "VEG-142",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 650,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥔",
    "stocks": {
      "BR001": 0,
      "BR002": 3,
      "BR003": 5,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD143",
    "name": "S POTATO",
    "originalPluName": "S POTATO",
    "variety": "S POTATO",
    "sku": "VEG-143",
    "category": "Vegetables",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 45,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥦",
    "stocks": {
      "BR001": 7,
      "BR002": 0,
      "BR003": 4,
      "BR004": 0
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD144",
    "name": "LEAK LEAVES",
    "originalPluName": "LEAK LEAVES",
    "variety": "LEAK LEAVES",
    "sku": "VEG-144",
    "category": "Vegetables",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 45,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥦",
    "stocks": {
      "BR001": 5,
      "BR002": 7,
      "BR003": 3,
      "BR004": 7
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD145",
    "name": "B GUARD WIT",
    "originalPluName": "B GUARD WIT",
    "variety": "B GUARD WIT",
    "sku": "VEG-145",
    "category": "Vegetables",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 45,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥦",
    "stocks": {
      "BR001": 6,
      "BR002": 9,
      "BR003": 3,
      "BR004": 8
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD146",
    "name": "Egg Nati (Country Organic)",
    "originalPluName": "EGG NATI",
    "variety": "Layer Fresh (Tray 30s)",
    "sku": "OTH-146",
    "category": "Dairy & Others",
    "unit": "Trays",
    "reorderLevel": 5,
    "unitCost": 180,
    "supplierName": "Sahyadri Farm Fresh",
    "image": "🥚",
    "stocks": {
      "BR001": 4,
      "BR002": 6,
      "BR003": 2,
      "BR004": 6
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD147",
    "name": "WHT ONION",
    "originalPluName": "WHT ONION",
    "variety": "WHT ONION",
    "sku": "VEG-147",
    "category": "Vegetables",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 45,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥦",
    "stocks": {
      "BR001": 5,
      "BR002": 8,
      "BR003": 2,
      "BR004": 7
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD148",
    "name": "Baby Potato",
    "originalPluName": "BABYPOTATO",
    "variety": "Dum Potato",
    "sku": "VEG-148",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 850,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥔",
    "stocks": {
      "BR001": 3,
      "BR002": 5,
      "BR003": 1,
      "BR004": 5
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD149",
    "name": "ONION PKT",
    "originalPluName": "ONION PKT",
    "variety": "ONION PKT",
    "sku": "VEG-149",
    "category": "Vegetables",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 45,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥦",
    "stocks": {
      "BR001": 4,
      "BR002": 7,
      "BR003": 1,
      "BR004": 6
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD150",
    "name": "POTATO PKT",
    "originalPluName": "POTATO PKT",
    "variety": "POTATO PKT",
    "sku": "VEG-150",
    "category": "Vegetables",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 45,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥦",
    "stocks": {
      "BR001": 2,
      "BR002": 4,
      "BR003": 0,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD151",
    "name": "Lemon Large",
    "originalPluName": "LEMON LARGE",
    "variety": "Seedless Juicy",
    "sku": "VEG-151",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 650,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🍋",
    "stocks": {
      "BR001": 3,
      "BR002": 6,
      "BR003": 0,
      "BR004": 5
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD152",
    "name": "Mosambi Large",
    "originalPluName": "MUSAMBI L",
    "variety": "Juicy Citrus",
    "sku": "FRU-152",
    "category": "Fruits",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 1100,
    "supplierName": "ABC Fruit Market",
    "image": "🍈",
    "stocks": {
      "BR001": 1,
      "BR002": 3,
      "BR003": 7,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD153",
    "name": "Zucchini Green",
    "originalPluName": "ZUCHINI",
    "variety": "Exotic Green",
    "sku": "VEG-153",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 750,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥒",
    "stocks": {
      "BR001": 2,
      "BR002": 5,
      "BR003": 7,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD154",
    "name": "Disco Pumpkin",
    "originalPluName": "D PUMPKIN",
    "variety": "Whole Squash",
    "sku": "VEG-154",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 550,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🎃",
    "stocks": {
      "BR001": 0,
      "BR002": 2,
      "BR003": 6,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD155",
    "name": "Tinda (Apple Gourd)",
    "originalPluName": "TINDA",
    "variety": "Fresh Small",
    "sku": "VEG-155",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 550,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🍈",
    "stocks": {
      "BR001": 1,
      "BR002": 4,
      "BR003": 6,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD156",
    "name": "Turmeric Raw (Haldi)",
    "originalPluName": "TURMERIC",
    "variety": "Erode Fresh",
    "sku": "VEG-156",
    "category": "Vegetables",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 90,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🫚",
    "stocks": {
      "BR001": 8,
      "BR002": 1,
      "BR003": 5,
      "BR004": 1
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD157",
    "name": "BAERY",
    "originalPluName": "BAERY",
    "variety": "BAERY",
    "sku": "FRU-157",
    "category": "Fruits",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 45,
    "supplierName": "ABC Fruit Market",
    "image": "🥦",
    "stocks": {
      "BR001": 0,
      "BR002": 3,
      "BR003": 5,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD158",
    "name": "Shalgam (Turnip)",
    "originalPluName": "SHELGAM",
    "variety": "Purple Top",
    "sku": "VEG-158",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 450,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🧅",
    "stocks": {
      "BR001": 7,
      "BR002": 0,
      "BR003": 4,
      "BR004": 0
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD159",
    "name": "Banana Rasthali",
    "originalPluName": "RASTHALI",
    "variety": "Poovan / Rasthali",
    "sku": "FRU-159",
    "category": "Fruits",
    "unit": "Bunches",
    "reorderLevel": 5,
    "unitCost": 480,
    "supplierName": "ABC Fruit Market",
    "image": "🍌",
    "stocks": {
      "BR001": 5,
      "BR002": 7,
      "BR003": 3,
      "BR004": 7
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD160",
    "name": "MD Fresh Packaging Bag",
    "originalPluName": "BAG",
    "variety": "Eco Grocery Bag",
    "sku": "OTH-160",
    "category": "Dairy & Others",
    "unit": "Bundles",
    "reorderLevel": 5,
    "unitCost": 150,
    "supplierName": "Sahyadri Farm Fresh",
    "image": "🛍️",
    "stocks": {
      "BR001": 6,
      "BR002": 9,
      "BR003": 3,
      "BR004": 8
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD161",
    "name": "PLU NAME 202",
    "originalPluName": "PLU Name 202",
    "variety": "Special Store SKU",
    "sku": "OTH-161",
    "category": "Dairy & Others",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 50,
    "supplierName": "Sahyadri Farm Fresh",
    "image": "🏷️",
    "stocks": {
      "BR001": 4,
      "BR002": 6,
      "BR003": 2,
      "BR004": 6
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD162",
    "name": "Fresh Cow Milk",
    "originalPluName": "MILK",
    "variety": "Nandini Dairy",
    "sku": "OTH-162",
    "category": "Dairy & Others",
    "unit": "Packets",
    "reorderLevel": 5,
    "unitCost": 32,
    "supplierName": "Sahyadri Farm Fresh",
    "image": "🥛",
    "stocks": {
      "BR001": 5,
      "BR002": 8,
      "BR003": 2,
      "BR004": 7
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD163",
    "name": "Fresh Curd Pouch",
    "originalPluName": "CURD",
    "variety": "Nandini Dairy",
    "sku": "OTH-163",
    "category": "Dairy & Others",
    "unit": "Packets",
    "reorderLevel": 5,
    "unitCost": 32,
    "supplierName": "Sahyadri Farm Fresh",
    "image": "🥛",
    "stocks": {
      "BR001": 3,
      "BR002": 5,
      "BR003": 1,
      "BR004": 5
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD164",
    "name": "Malai Paneer Block",
    "originalPluName": "PANEER",
    "variety": "Nandini Dairy",
    "sku": "OTH-164",
    "category": "Dairy & Others",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 360,
    "supplierName": "Sahyadri Farm Fresh",
    "image": "🧀",
    "stocks": {
      "BR001": 4,
      "BR002": 7,
      "BR003": 1,
      "BR004": 6
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD165",
    "name": "Dates Fresh / Kimia",
    "originalPluName": "DATES",
    "variety": "Arabian Soft Dates",
    "sku": "FRU-165",
    "category": "Fruits",
    "unit": "Boxes",
    "reorderLevel": 5,
    "unitCost": 750,
    "supplierName": "ABC Fruit Market",
    "image": "🟤",
    "stocks": {
      "BR001": 2,
      "BR002": 4,
      "BR003": 0,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD166",
    "name": "Chiku (Sapota)",
    "originalPluName": "chiku",
    "variety": "Cricket Ball Round",
    "sku": "FRU-166",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 650,
    "supplierName": "ABC Fruit Market",
    "image": "🥔",
    "stocks": {
      "BR001": 3,
      "BR002": 6,
      "BR003": 0,
      "BR004": 5
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD167",
    "name": "PLU NAME 167",
    "originalPluName": "PLU Name 167",
    "variety": "Special Store SKU",
    "sku": "OTH-167",
    "category": "Dairy & Others",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 50,
    "supplierName": "Sahyadri Farm Fresh",
    "image": "🏷️",
    "stocks": {
      "BR001": 1,
      "BR002": 3,
      "BR003": 7,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD168",
    "name": "Apple Premium",
    "originalPluName": "APPLE",
    "variety": "Grade-A Fresh",
    "sku": "FRU-168",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 2100,
    "supplierName": "ABC Fruit Market",
    "image": "🍎",
    "stocks": {
      "BR001": 2,
      "BR002": 5,
      "BR003": 7,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD169",
    "name": "Matki Falli (Moth Pods)",
    "originalPluName": "MATKI.FALLI",
    "variety": "Fresh Green Pods",
    "sku": "VEG-169",
    "category": "Vegetables",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 65,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🫘",
    "stocks": {
      "BR001": 0,
      "BR002": 2,
      "BR003": 6,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD170",
    "name": "Sem Beans",
    "originalPluName": "SEM",
    "variety": "Country Flat Beans",
    "sku": "VEG-170",
    "category": "Vegetables",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 55,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🫛",
    "stocks": {
      "BR001": 1,
      "BR002": 4,
      "BR003": 6,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD171",
    "name": "Ballar Falli (Avarekalu)",
    "originalPluName": "BALLAR FALLI",
    "variety": "Country Flat Beans",
    "sku": "VEG-171",
    "category": "Vegetables",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 55,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🫛",
    "stocks": {
      "BR001": 8,
      "BR002": 1,
      "BR003": 5,
      "BR004": 1
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD172",
    "name": "Tapioca (Kappa / Cassava)",
    "originalPluName": "KAPPA",
    "variety": "Fresh Starchy Root",
    "sku": "VEG-172",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 650,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥔",
    "stocks": {
      "BR001": 0,
      "BR002": 3,
      "BR003": 5,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD173",
    "name": "Dragon Fruit (Pitaya)",
    "originalPluName": "DARAYGAN FURUT",
    "variety": "Red Flesh Sweet",
    "sku": "FRU-173",
    "category": "Fruits",
    "unit": "Boxes",
    "reorderLevel": 5,
    "unitCost": 900,
    "supplierName": "ABC Fruit Market",
    "image": "🐉",
    "stocks": {
      "BR001": 7,
      "BR002": 0,
      "BR003": 4,
      "BR004": 0
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD174",
    "name": "Persimmon Fruit",
    "originalPluName": "PARSUMAN",
    "variety": "Kaki Honey",
    "sku": "FRU-174",
    "category": "Fruits",
    "unit": "Boxes",
    "reorderLevel": 5,
    "unitCost": 850,
    "supplierName": "ABC Fruit Market",
    "image": "🍊",
    "stocks": {
      "BR001": 5,
      "BR002": 7,
      "BR003": 3,
      "BR004": 7
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD175",
    "name": "Toor Falli (Fresh Pigeon Pea)",
    "originalPluName": "TOOR FALLI",
    "variety": "Fresh Green Pods",
    "sku": "VEG-175",
    "category": "Vegetables",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 65,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🫘",
    "stocks": {
      "BR001": 6,
      "BR002": 9,
      "BR003": 3,
      "BR004": 8
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD176",
    "name": "Karamani (Cowpea Pods)",
    "originalPluName": "KARA MANI",
    "variety": "Fresh Green Pods",
    "sku": "VEG-176",
    "category": "Vegetables",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 65,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🫘",
    "stocks": {
      "BR001": 4,
      "BR002": 6,
      "BR003": 2,
      "BR004": 6
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD177",
    "name": "White Butter Beans",
    "originalPluName": "WHITE BEANS",
    "variety": "Fresh Pods",
    "sku": "VEG-177",
    "category": "Vegetables",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 80,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🫘",
    "stocks": {
      "BR001": 5,
      "BR002": 8,
      "BR003": 2,
      "BR004": 7
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD178",
    "name": "Double Beans (Lima)",
    "originalPluName": "DABAL BEANS",
    "variety": "Fresh Pods",
    "sku": "VEG-178",
    "category": "Vegetables",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 80,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🫘",
    "stocks": {
      "BR001": 3,
      "BR002": 5,
      "BR003": 1,
      "BR004": 5
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD179",
    "name": "CITRUS",
    "originalPluName": "CITRUS",
    "variety": "CITRUS",
    "sku": "FRU-179",
    "category": "Fruits",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 45,
    "supplierName": "ABC Fruit Market",
    "image": "🥦",
    "stocks": {
      "BR001": 4,
      "BR002": 7,
      "BR003": 1,
      "BR004": 6
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD180",
    "name": "MADRIN",
    "originalPluName": "MADRIN",
    "variety": "MADRIN",
    "sku": "FRU-180",
    "category": "Fruits",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 45,
    "supplierName": "ABC Fruit Market",
    "image": "🥦",
    "stocks": {
      "BR001": 2,
      "BR002": 4,
      "BR003": 0,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD181",
    "name": "MD Fresh Packaging Bag",
    "originalPluName": "BEG",
    "variety": "Eco Grocery Bag",
    "sku": "OTH-181",
    "category": "Dairy & Others",
    "unit": "Bundles",
    "reorderLevel": 5,
    "unitCost": 150,
    "supplierName": "Sahyadri Farm Fresh",
    "image": "🛍️",
    "stocks": {
      "BR001": 3,
      "BR002": 6,
      "BR003": 0,
      "BR004": 5
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD182",
    "name": "PLU NAME 201",
    "originalPluName": "PLU Name 201",
    "variety": "Special Store SKU",
    "sku": "OTH-182",
    "category": "Dairy & Others",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 50,
    "supplierName": "Sahyadri Farm Fresh",
    "image": "🏷️",
    "stocks": {
      "BR001": 1,
      "BR002": 3,
      "BR003": 7,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD183",
    "name": "Small Karela (S.Karela)",
    "originalPluName": "S.KARELA",
    "variety": "Fresh Green",
    "sku": "VEG-183",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 600,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥒",
    "stocks": {
      "BR001": 2,
      "BR002": 5,
      "BR003": 7,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD184",
    "name": "POTATO N",
    "originalPluName": "POTATO N",
    "variety": "POTATO N",
    "sku": "VEG-184",
    "category": "Vegetables",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 45,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥦",
    "stocks": {
      "BR001": 0,
      "BR002": 2,
      "BR003": 6,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD185",
    "name": "N TOMATO",
    "originalPluName": "N.TOMATO",
    "variety": "N TOMATO",
    "sku": "VEG-185",
    "category": "Vegetables",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 45,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥦",
    "stocks": {
      "BR001": 1,
      "BR002": 4,
      "BR003": 6,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD186",
    "name": "Small Karela (S.Karela)",
    "originalPluName": "S.KARELA",
    "variety": "Fresh Green",
    "sku": "VEG-186",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 600,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥒",
    "stocks": {
      "BR001": 8,
      "BR002": 1,
      "BR003": 5,
      "BR004": 1
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD187",
    "name": "Akash Chilli",
    "originalPluName": "AKASH CHILLI",
    "variety": "Sharp Spicy Fresh",
    "sku": "VEG-187",
    "category": "Vegetables",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 60,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🌶️",
    "stocks": {
      "BR001": 4,
      "BR002": 8,
      "BR003": 2,
      "BR004": 5
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD188",
    "name": "Rampuri Brinjal",
    "originalPluName": "RAMPURI BRINJAL",
    "variety": "Striped Green Round",
    "sku": "VEG-188",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 500,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🍆",
    "stocks": {
      "BR001": 3,
      "BR002": 6,
      "BR003": 2,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD189",
    "name": "L Brinjal Purple",
    "originalPluName": "L BRINJAL PURPLE",
    "variety": "Long Glossy Purple",
    "sku": "VEG-189",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 520,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🍆",
    "stocks": {
      "BR001": 2,
      "BR002": 5,
      "BR003": 3,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD190",
    "name": "Bengali Bharta",
    "originalPluName": "BENGALI BHARTA",
    "variety": "Large Round Roasting",
    "sku": "VEG-190",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 550,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🍆",
    "stocks": {
      "BR001": 3,
      "BR002": 5,
      "BR003": 1,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD191",
    "name": "Totapuri",
    "originalPluName": "TOTAPURI",
    "variety": "Totapuri Fresh",
    "sku": "FRU-191",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 600,
    "supplierName": "ABC Fruit Market",
    "image": "🥭",
    "stocks": {
      "BR001": 2,
      "BR002": 6,
      "BR003": 2,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD192",
    "name": "Big Chilli",
    "originalPluName": "BIG CHILLI",
    "variety": "Mild Bhavnagri Large",
    "sku": "VEG-192",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 620,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🌶️",
    "stocks": {
      "BR001": 3,
      "BR002": 5,
      "BR003": 2,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD193",
    "name": "Kandrela",
    "originalPluName": "KANDRELA",
    "variety": "Kantola / Spine Gourd",
    "sku": "VEG-193",
    "category": "Vegetables",
    "unit": "Kg",
    "reorderLevel": 5,
    "unitCost": 90,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥒",
    "stocks": {
      "BR001": 2,
      "BR002": 4,
      "BR003": 1,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD194",
    "name": "Naati",
    "originalPluName": "NAATI",
    "variety": "Country Coriander (Dhanya Naati)",
    "sku": "VEG-194",
    "category": "Vegetables",
    "unit": "Bunches",
    "reorderLevel": 5,
    "unitCost": 15,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🌿",
    "stocks": {
      "BR001": 5,
      "BR002": 9,
      "BR003": 3,
      "BR004": 6
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD195",
    "name": "Sabakki",
    "originalPluName": "SABAKKI",
    "variety": "Dill Leaves / Sabbasige",
    "sku": "VEG-195",
    "category": "Vegetables",
    "unit": "Bunches",
    "reorderLevel": 5,
    "unitCost": 15,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🌿",
    "stocks": {
      "BR001": 4,
      "BR002": 8,
      "BR003": 2,
      "BR004": 5
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD196",
    "name": "Pink Lady",
    "originalPluName": "PINK LADY",
    "variety": "Crisp Pink Lady Apple",
    "sku": "FRU-196",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 1850,
    "supplierName": "ABC Fruit Market",
    "image": "🍎",
    "stocks": {
      "BR001": 2,
      "BR002": 5,
      "BR003": 1,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD197",
    "name": "Pomegranate Big",
    "originalPluName": "POMEGRANATE BIG",
    "variety": "Jumbo Grade-A Ruby",
    "sku": "FRU-197",
    "category": "Fruits",
    "unit": "Boxes",
    "reorderLevel": 5,
    "unitCost": 1400,
    "supplierName": "ABC Fruit Market",
    "image": "🍎",
    "stocks": {
      "BR001": 2,
      "BR002": 6,
      "BR003": 2,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD198",
    "name": "Wht Dragon",
    "originalPluName": "WHT DRAGON",
    "variety": "White Flesh Pitaya",
    "sku": "FRU-198",
    "category": "Fruits",
    "unit": "Boxes",
    "reorderLevel": 5,
    "unitCost": 1100,
    "supplierName": "ABC Fruit Market",
    "image": "🐉",
    "stocks": {
      "BR001": 1,
      "BR002": 4,
      "BR003": 1,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD199",
    "name": "Nati Gauva",
    "originalPluName": "NATI GAUVA",
    "variety": "Country Fresh White",
    "sku": "FRU-199",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 550,
    "supplierName": "ABC Fruit Market",
    "image": "🍐",
    "stocks": {
      "BR001": 3,
      "BR002": 5,
      "BR003": 2,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD200",
    "name": "Malda",
    "originalPluName": "MALDA",
    "variety": "Malda Mango / Malda",
    "sku": "FRU-200",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 950,
    "supplierName": "ABC Fruit Market",
    "image": "🥭",
    "stocks": {
      "BR001": 2,
      "BR002": 4,
      "BR003": 1,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD201",
    "name": "Kashmiri Apple",
    "originalPluName": "KASHMIRI APPLE",
    "variety": "Delicious Red Kashmiri",
    "sku": "FRU-201",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 1650,
    "supplierName": "ABC Fruit Market",
    "image": "🍎",
    "stocks": {
      "BR001": 3,
      "BR002": 6,
      "BR003": 2,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD202",
    "name": "Misri Apple",
    "originalPluName": "MISRI APPLE",
    "variety": "Sweet Misri Grade",
    "sku": "FRU-202",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 1700,
    "supplierName": "ABC Fruit Market",
    "image": "🍎",
    "stocks": {
      "BR001": 2,
      "BR002": 5,
      "BR003": 1,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD203",
    "name": "Ooty Apple",
    "originalPluName": "OOTY APPLE",
    "variety": "Hill Fresh Ooty Apple",
    "sku": "FRU-203",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 1600,
    "supplierName": "ABC Fruit Market",
    "image": "🍎",
    "stocks": {
      "BR001": 2,
      "BR002": 5,
      "BR003": 2,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD204",
    "name": "Ginger Old",
    "originalPluName": "GINGER OLD",
    "variety": "Dry / Old Ginger Matured",
    "sku": "VEG-204",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 1800,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🫚",
    "stocks": {
      "BR001": 2,
      "BR002": 4,
      "BR003": 5,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD205",
    "name": "Bharta Green",
    "originalPluName": "BHARTA GREEN",
    "variety": "Large Round Green Eggplant",
    "sku": "VEG-205",
    "category": "Vegetables",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 550,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🍆",
    "stocks": {
      "BR001": 2,
      "BR002": 3,
      "BR003": 6,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD206",
    "name": "Round Loki",
    "originalPluName": "ROUND LOKI",
    "variety": "Round Bottle Gourd (Gol Lauki)",
    "sku": "VEG-206",
    "category": "Vegetables",
    "unit": "Bags",
    "reorderLevel": 5,
    "unitCost": 420,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥒",
    "stocks": {
      "BR001": 1,
      "BR002": 3,
      "BR003": 5,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD207",
    "name": "Bhaggi",
    "originalPluName": "BHAGGI",
    "variety": "Fresh Amaranth Leafy Greens",
    "sku": "VEG-207",
    "category": "Vegetables",
    "unit": "Bunches",
    "reorderLevel": 5,
    "unitCost": 15,
    "supplierName": "K.R. Market Veg Syndicate",
    "image": "🥬",
    "stocks": {
      "BR001": 3,
      "BR002": 6,
      "BR003": 8,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD208",
    "name": "Turkey Apple",
    "originalPluName": "TURKEY APPLE",
    "variety": "Imported Turkey Grade-A",
    "sku": "FRU-208",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 1750,
    "supplierName": "ABC Fruit Market",
    "image": "🍎",
    "stocks": {
      "BR001": 2,
      "BR002": 4,
      "BR003": 7,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD209",
    "name": "Rocket Apple",
    "originalPluName": "ROCKET APPLE",
    "variety": "Mini Sweet Snack Apples",
    "sku": "FRU-209",
    "category": "Fruits",
    "unit": "Boxes",
    "reorderLevel": 5,
    "unitCost": 1950,
    "supplierName": "ABC Fruit Market",
    "image": "🍎",
    "stocks": {
      "BR001": 1,
      "BR002": 3,
      "BR003": 6,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD210",
    "name": "Alibinder",
    "originalPluName": "ALIBINDER",
    "variety": "Alibinder Imported Apple",
    "sku": "FRU-210",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 1800,
    "supplierName": "ABC Fruit Market",
    "image": "🍎",
    "stocks": {
      "BR001": 1,
      "BR002": 3,
      "BR003": 5,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD211",
    "name": "Iran Apple",
    "originalPluName": "IRAN APPLE",
    "variety": "Iranian Red Sweet",
    "sku": "FRU-211",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 1600,
    "supplierName": "ABC Fruit Market",
    "image": "🍎",
    "stocks": {
      "BR001": 2,
      "BR002": 4,
      "BR003": 6,
      "BR004": 3
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD212",
    "name": "Butter Fruit Imported",
    "originalPluName": "AVOCADO IMP",
    "variety": "Imported Hass Avocado",
    "sku": "FRU-212",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 2200,
    "supplierName": "ABC Fruit Market",
    "image": "🥑",
    "stocks": {
      "BR001": 1,
      "BR002": 3,
      "BR003": 5,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD213",
    "name": "Black Grapes Imported",
    "originalPluName": "GRAPES BLK IMP",
    "variety": "Imported Autumn Royal Black",
    "sku": "FRU-213",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 1400,
    "supplierName": "ABC Fruit Market",
    "image": "🍇",
    "stocks": {
      "BR001": 2,
      "BR002": 3,
      "BR003": 5,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD214",
    "name": "Logan",
    "originalPluName": "LOGAN",
    "variety": "Fresh Longan Fruit",
    "sku": "FRU-214",
    "category": "Fruits",
    "unit": "Boxes",
    "reorderLevel": 5,
    "unitCost": 1250,
    "supplierName": "ABC Fruit Market",
    "image": "🍈",
    "stocks": {
      "BR001": 1,
      "BR002": 2,
      "BR003": 4,
      "BR004": 1
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD215",
    "name": "Ramphal",
    "originalPluName": "RAMPHAL",
    "variety": "Bullocks Heart / Wild Sweet",
    "sku": "FRU-215",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 800,
    "supplierName": "ABC Fruit Market",
    "image": "🍈",
    "stocks": {
      "BR001": 2,
      "BR002": 3,
      "BR003": 5,
      "BR004": 2
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD216",
    "name": "Thai Guava",
    "originalPluName": "THAI GUAVA",
    "variety": "Bangkok Crisp Jumbo",
    "sku": "FRU-216",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 1100,
    "supplierName": "ABC Fruit Market",
    "image": "🍈",
    "stocks": {
      "BR001": 3,
      "BR002": 4,
      "BR003": 5,
      "BR004": 4
    },
    "lastUpdated": "Just now"
  },
  {
    "id": "PRD217",
    "name": "Golden Kiwi",
    "originalPluName": "GOLDEN KIWI",
    "variety": "Zespri SunGold",
    "sku": "FRU-217",
    "category": "Fruits",
    "unit": "Boxes",
    "reorderLevel": 5,
    "unitCost": 1400,
    "supplierName": "ABC Fruit Market",
    "image": "🥝",
    "stocks": {
      "BR001": 2,
      "BR002": 3,
      "BR003": 4,
      "BR004": 5
    },
    "lastUpdated": "Just now"
  }
];

export const INITIAL_REQUIREMENTS = [
  {
    "id": "REQ-001",
    "reference": "SC-20261003-0001",
    "branchId": "BR001",
    "branchName": "ANNASANDRAPALYA",
    "branchCode": "BR-ASP",
    "date": "03 Oct 2026",
    "time": "08:45 AM",
    "submittedBy": "MD FRESH STAFF",
    "itemCount": 15,
    "status": "PENDING APPROVAL",
    "items": [
      {
        "productId": "PRD001",
        "productName": "Onion",
        "qty": 5,
        "unit": "Bags"
      },
      {
        "productId": "PRD002",
        "productName": "Potato",
        "qty": 7,
        "unit": "Bags"
      },
      {
        "productId": "PRD003",
        "productName": "Tomato",
        "qty": 9,
        "unit": "Crates"
      },
      {
        "productId": "PRD004",
        "productName": "Carrot",
        "qty": 3,
        "unit": "Bags"
      },
      {
        "productId": "PRD005",
        "productName": "Green Beans",
        "qty": 5,
        "unit": "Bags"
      },
      {
        "productId": "PRD006",
        "productName": "Ladies Finger",
        "qty": 7,
        "unit": "Crates"
      },
      {
        "productId": "PRD007",
        "productName": "Coconut",
        "qty": 9,
        "unit": "Bags"
      },
      {
        "productId": "PRD008",
        "productName": "Long Beans",
        "qty": 3,
        "unit": "Kg"
      },
      {
        "productId": "PRD009",
        "productName": "Green Peas",
        "qty": 5,
        "unit": "Bags"
      },
      {
        "productId": "PRD010",
        "productName": "Chow Chow",
        "qty": 7,
        "unit": "Bags"
      },
      {
        "productId": "PRD013",
        "productName": "Delhi Carrot",
        "qty": 9,
        "unit": "Bags"
      },
      {
        "productId": "PRD017",
        "productName": "Amla",
        "qty": 3,
        "unit": "Kg"
      },
      {
        "productId": "PRD021",
        "productName": "Capsicum Green",
        "qty": 5,
        "unit": "Crates"
      },
      {
        "productId": "PRD022",
        "productName": "Cabbage Green",
        "qty": 7,
        "unit": "Bags"
      },
      {
        "productId": "PRD023",
        "productName": "Cucumber Local",
        "qty": 9,
        "unit": "Crates"
      }
    ]
  },
  {
    "id": "REQ-002",
    "reference": "SC-20261003-0002",
    "branchId": "BR002",
    "branchName": "KODIHALLI",
    "branchCode": "BR-KDH",
    "date": "03 Oct 2026",
    "time": "08:45 AM",
    "submittedBy": "MD FRESH STAFF",
    "itemCount": 17,
    "status": "APPROVED",
    "items": [
      {
        "productId": "PRD001",
        "productName": "Onion",
        "qty": 8,
        "unit": "Bags"
      },
      {
        "productId": "PRD002",
        "productName": "Potato",
        "qty": 2,
        "unit": "Bags"
      },
      {
        "productId": "PRD003",
        "productName": "Tomato",
        "qty": 4,
        "unit": "Crates"
      },
      {
        "productId": "PRD004",
        "productName": "Carrot",
        "qty": 6,
        "unit": "Bags"
      },
      {
        "productId": "PRD005",
        "productName": "Green Beans",
        "qty": 8,
        "unit": "Bags"
      },
      {
        "productId": "PRD006",
        "productName": "Ladies Finger",
        "qty": 2,
        "unit": "Crates"
      },
      {
        "productId": "PRD007",
        "productName": "Coconut",
        "qty": 4,
        "unit": "Bags"
      },
      {
        "productId": "PRD008",
        "productName": "Long Beans",
        "qty": 6,
        "unit": "Kg"
      },
      {
        "productId": "PRD009",
        "productName": "Green Peas",
        "qty": 8,
        "unit": "Bags"
      },
      {
        "productId": "PRD010",
        "productName": "Chow Chow",
        "qty": 2,
        "unit": "Bags"
      },
      {
        "productId": "PRD013",
        "productName": "Delhi Carrot",
        "qty": 4,
        "unit": "Bags"
      },
      {
        "productId": "PRD017",
        "productName": "Amla",
        "qty": 6,
        "unit": "Kg"
      },
      {
        "productId": "PRD021",
        "productName": "Capsicum Green",
        "qty": 8,
        "unit": "Crates"
      },
      {
        "productId": "PRD022",
        "productName": "Cabbage Green",
        "qty": 2,
        "unit": "Bags"
      },
      {
        "productId": "PRD023",
        "productName": "Cucumber Local",
        "qty": 4,
        "unit": "Crates"
      },
      {
        "productId": "PRD025",
        "productName": "Garlic Indian",
        "qty": 6,
        "unit": "Bags"
      },
      {
        "productId": "PRD027",
        "productName": "Ginger",
        "qty": 8,
        "unit": "Bags"
      }
    ]
  },
  {
    "id": "REQ-003",
    "reference": "SC-20261003-0003",
    "branchId": "BR003",
    "branchName": "LBS NAGAR",
    "branchCode": "BR-LBS",
    "date": "03 Oct 2026",
    "time": "08:45 AM",
    "submittedBy": "MD FRESH STAFF",
    "itemCount": 19,
    "status": "APPROVED",
    "items": [
      {
        "productId": "PRD001",
        "productName": "Onion",
        "qty": 3,
        "unit": "Bags"
      },
      {
        "productId": "PRD002",
        "productName": "Potato",
        "qty": 5,
        "unit": "Bags"
      },
      {
        "productId": "PRD003",
        "productName": "Tomato",
        "qty": 7,
        "unit": "Crates"
      },
      {
        "productId": "PRD004",
        "productName": "Carrot",
        "qty": 9,
        "unit": "Bags"
      },
      {
        "productId": "PRD005",
        "productName": "Green Beans",
        "qty": 3,
        "unit": "Bags"
      },
      {
        "productId": "PRD006",
        "productName": "Ladies Finger",
        "qty": 5,
        "unit": "Crates"
      },
      {
        "productId": "PRD007",
        "productName": "Coconut",
        "qty": 7,
        "unit": "Bags"
      },
      {
        "productId": "PRD008",
        "productName": "Long Beans",
        "qty": 9,
        "unit": "Kg"
      },
      {
        "productId": "PRD009",
        "productName": "Green Peas",
        "qty": 3,
        "unit": "Bags"
      },
      {
        "productId": "PRD010",
        "productName": "Chow Chow",
        "qty": 5,
        "unit": "Bags"
      },
      {
        "productId": "PRD013",
        "productName": "Delhi Carrot",
        "qty": 7,
        "unit": "Bags"
      },
      {
        "productId": "PRD017",
        "productName": "Amla",
        "qty": 9,
        "unit": "Kg"
      },
      {
        "productId": "PRD021",
        "productName": "Capsicum Green",
        "qty": 3,
        "unit": "Crates"
      },
      {
        "productId": "PRD022",
        "productName": "Cabbage Green",
        "qty": 5,
        "unit": "Bags"
      },
      {
        "productId": "PRD023",
        "productName": "Cucumber Local",
        "qty": 7,
        "unit": "Crates"
      },
      {
        "productId": "PRD025",
        "productName": "Garlic Indian",
        "qty": 9,
        "unit": "Bags"
      },
      {
        "productId": "PRD027",
        "productName": "Ginger",
        "qty": 3,
        "unit": "Bags"
      },
      {
        "productId": "PRD028",
        "productName": "Green Chilli",
        "qty": 5,
        "unit": "Crates"
      },
      {
        "productId": "PRD031",
        "productName": "Lemon Standard",
        "qty": 7,
        "unit": "Bags"
      }
    ]
  },
  {
    "id": "REQ-004",
    "reference": "SC-20261003-0004",
    "branchId": "BR004",
    "branchName": "BASAVANAGAR",
    "branchCode": "BR-BSV",
    "date": "03 Oct 2026",
    "time": "08:45 AM",
    "submittedBy": "MD FRESH STAFF",
    "itemCount": 21,
    "status": "PENDING APPROVAL",
    "items": [
      {
        "productId": "PRD001",
        "productName": "Onion",
        "qty": 6,
        "unit": "Bags"
      },
      {
        "productId": "PRD002",
        "productName": "Potato",
        "qty": 8,
        "unit": "Bags"
      },
      {
        "productId": "PRD003",
        "productName": "Tomato",
        "qty": 2,
        "unit": "Crates"
      },
      {
        "productId": "PRD004",
        "productName": "Carrot",
        "qty": 4,
        "unit": "Bags"
      },
      {
        "productId": "PRD005",
        "productName": "Green Beans",
        "qty": 6,
        "unit": "Bags"
      },
      {
        "productId": "PRD006",
        "productName": "Ladies Finger",
        "qty": 8,
        "unit": "Crates"
      },
      {
        "productId": "PRD007",
        "productName": "Coconut",
        "qty": 2,
        "unit": "Bags"
      },
      {
        "productId": "PRD008",
        "productName": "Long Beans",
        "qty": 4,
        "unit": "Kg"
      },
      {
        "productId": "PRD009",
        "productName": "Green Peas",
        "qty": 6,
        "unit": "Bags"
      },
      {
        "productId": "PRD010",
        "productName": "Chow Chow",
        "qty": 8,
        "unit": "Bags"
      },
      {
        "productId": "PRD013",
        "productName": "Delhi Carrot",
        "qty": 2,
        "unit": "Bags"
      },
      {
        "productId": "PRD017",
        "productName": "Amla",
        "qty": 4,
        "unit": "Kg"
      },
      {
        "productId": "PRD021",
        "productName": "Capsicum Green",
        "qty": 6,
        "unit": "Crates"
      },
      {
        "productId": "PRD022",
        "productName": "Cabbage Green",
        "qty": 8,
        "unit": "Bags"
      },
      {
        "productId": "PRD023",
        "productName": "Cucumber Local",
        "qty": 2,
        "unit": "Crates"
      },
      {
        "productId": "PRD025",
        "productName": "Garlic Indian",
        "qty": 4,
        "unit": "Bags"
      },
      {
        "productId": "PRD027",
        "productName": "Ginger",
        "qty": 6,
        "unit": "Bags"
      },
      {
        "productId": "PRD028",
        "productName": "Green Chilli",
        "qty": 8,
        "unit": "Crates"
      },
      {
        "productId": "PRD031",
        "productName": "Lemon Standard",
        "qty": 2,
        "unit": "Bags"
      },
      {
        "productId": "PRD043",
        "productName": "Palak (Spinach)",
        "qty": 4,
        "unit": "Bunches"
      },
      {
        "productId": "PRD045",
        "productName": "Coriander (Kothmir)",
        "qty": 6,
        "unit": "Bunches"
      }
    ]
  }
];

export const INITIAL_PURCHASE_ORDERS = [
  {
    id: 'PO-20261003-0001',
    supplierName: 'K.R. Market Veg Syndicate',
    date: '03 Oct 2026',
    time: '09:30 AM',
    totalAmount: 34500,
    items: [
      {
        productId: 'PRD001',
        productName: 'Onion',
        qty: 12,
        unit: 'Bags',
        rate: 1350,
        amount: 16200,
        allocations: [
          { branch: 'ANNASANDRAPALYA', branchId: 'BR001', qty: 3, received: 3 },
          { branch: 'KODIHALLI', branchId: 'BR002', qty: 4, received: 4 },
          { branch: 'LBS NAGAR', branchId: 'BR003', qty: 3, received: 3 },
          { branch: 'BASAVANAGAR', branchId: 'BR004', qty: 2, received: 2 }
        ]
      },
      {
        productId: 'PRD002',
        productName: 'Potato',
        qty: 10,
        unit: 'Bags',
        rate: 1150,
        amount: 11500,
        allocations: [
          { branch: 'ANNASANDRAPALYA', branchId: 'BR001', qty: 3, received: 3 },
          { branch: 'KODIHALLI', branchId: 'BR002', qty: 3, received: 3 },
          { branch: 'LBS NAGAR', branchId: 'BR003', qty: 2, received: 2 },
          { branch: 'BASAVANAGAR', branchId: 'BR004', qty: 2, received: 2 }
        ]
      },
      {
        productId: 'PRD003',
        productName: 'Tomato',
        qty: 12,
        unit: 'Crates',
        rate: 550,
        amount: 6600,
        allocations: [
          { branch: 'ANNASANDRAPALYA', branchId: 'BR001', qty: 4, received: 4 },
          { branch: 'KODIHALLI', branchId: 'BR002', qty: 3, received: 3 },
          { branch: 'LBS NAGAR', branchId: 'BR003', qty: 3, received: 3 },
          { branch: 'BASAVANAGAR', branchId: 'BR004', qty: 2, received: 2 }
        ]
      }
    ],
    timeline: [
      { step: 'Requirement', status: 'completed', timestamp: '08:45 AM' },
      { step: 'Approved', status: 'completed', timestamp: '09:00 AM' },
      { step: 'Purchase Order', status: 'completed', timestamp: '09:30 AM' },
      { step: 'Purchasing', status: 'active', timestamp: '10:15 AM' },
      { step: 'Dispatched', status: 'pending', timestamp: 'Est. 12:30 PM' },
      { step: 'Received', status: 'pending', timestamp: 'Est. 02:00 PM' }
    ],
    status: 'Purchasing'
  },
  {
    "id": "PO-20261003-KDH01",
    "supplierName": "K.R. Market & APMC Fruit-Veg Terminal",
    "date": "03 Oct 2026",
    "time": "06:45 AM",
    "totalAmount": 298299,
    "source": "DAILY_STOCK_CHECK_KODIHALLI_DISPATCH",
    "manifestReference": "KDH-MORNING-DISPATCH-01",
    "items": [
      {
        "productId": "PRD023",
        "productName": "Cucumber Local",
        "qty": 4,
        "unit": "Crates",
        "rate": 450,
        "amount": 1800,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD004",
        "productName": "Carrot",
        "qty": 6,
        "unit": "Bags",
        "rate": 850,
        "amount": 5100,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD019",
        "productName": "Lauki (Bottle Gourd)",
        "qty": 3,
        "unit": "Bags",
        "rate": 400,
        "amount": 1200,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD021",
        "productName": "Capsicum Green",
        "qty": 5,
        "unit": "Crates",
        "rate": 700,
        "amount": 3500,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD032",
        "productName": "Cauliflower",
        "qty": 2,
        "unit": "Crates",
        "rate": 600,
        "amount": 1200,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 2,
            "received": 2
          }
        ]
      },
      {
        "productId": "PRD022",
        "productName": "Cabbage Green",
        "qty": 7,
        "unit": "Bags",
        "rate": 420,
        "amount": 2940,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 7,
            "received": 7
          }
        ]
      },
      {
        "productId": "PRD005",
        "productName": "Green Beans",
        "qty": 4,
        "unit": "Bags",
        "rate": 900,
        "amount": 3600,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD006",
        "productName": "Ladies Finger",
        "qty": 5,
        "unit": "Crates",
        "rate": 650,
        "amount": 3250,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD012",
        "productName": "Radish White",
        "qty": 3,
        "unit": "Bags",
        "rate": 480,
        "amount": 1440,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD057",
        "productName": "Beetroot",
        "qty": 4,
        "unit": "Bags",
        "rate": 750,
        "amount": 3000,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD049",
        "productName": "Ridge Gourd (Hirekayi)",
        "qty": 2,
        "unit": "Bags",
        "rate": 500,
        "amount": 1000,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 2,
            "received": 2
          }
        ]
      },
      {
        "productId": "PRD187",
        "productName": "Akash Chilli",
        "qty": 8,
        "unit": "Kg",
        "rate": 60,
        "amount": 480,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 8,
            "received": 8
          }
        ]
      },
      {
        "productId": "PRD008",
        "productName": "Long Beans",
        "qty": 3,
        "unit": "Kg",
        "rate": 50,
        "amount": 150,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD014",
        "productName": "Brinjal Mysore",
        "qty": 5,
        "unit": "Crates",
        "rate": 480,
        "amount": 2400,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD188",
        "productName": "Rampuri Brinjal",
        "qty": 4,
        "unit": "Crates",
        "rate": 500,
        "amount": 2000,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD015",
        "productName": "Brinjal Green",
        "qty": 6,
        "unit": "Crates",
        "rate": 480,
        "amount": 2880,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD189",
        "productName": "L Brinjal Purple",
        "qty": 3,
        "unit": "Crates",
        "rate": 520,
        "amount": 1560,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD016",
        "productName": "Brinjal Bhartha",
        "qty": 4,
        "unit": "Crates",
        "rate": 480,
        "amount": 1920,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD190",
        "productName": "Bengali Bharta",
        "qty": 5,
        "unit": "Crates",
        "rate": 550,
        "amount": 2750,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD191",
        "productName": "Totapuri",
        "qty": 6,
        "unit": "Crates",
        "rate": 600,
        "amount": 3600,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD125",
        "productName": "Parval (Pointed Gourd)",
        "qty": 4,
        "unit": "Crates",
        "rate": 650,
        "amount": 2600,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD192",
        "productName": "Big Chilli",
        "qty": 6,
        "unit": "Crates",
        "rate": 620,
        "amount": 3720,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD058",
        "productName": "Bajji Chilli (Bhavnagri)",
        "qty": 3,
        "unit": "Crates",
        "rate": 650,
        "amount": 1950,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD170",
        "productName": "Sem Beans",
        "qty": 5,
        "unit": "Kg",
        "rate": 55,
        "amount": 275,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD053",
        "productName": "Avarakkai",
        "qty": 2,
        "unit": "Kg",
        "rate": 55,
        "amount": 110,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 2,
            "received": 2
          }
        ]
      },
      {
        "productId": "PRD009",
        "productName": "Green Peas",
        "qty": 7,
        "unit": "Bags",
        "rate": 1400,
        "amount": 9800,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 7,
            "received": 7
          }
        ]
      },
      {
        "productId": "PRD169",
        "productName": "Matki Falli (Moth Pods)",
        "qty": 4,
        "unit": "Kg",
        "rate": 65,
        "amount": 260,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD183",
        "productName": "Small Karela (S.Karela)",
        "qty": 5,
        "unit": "Crates",
        "rate": 600,
        "amount": 3000,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD020",
        "productName": "Bitter Gourd",
        "qty": 3,
        "unit": "Crates",
        "rate": 600,
        "amount": 1800,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD017",
        "productName": "Amla",
        "qty": 4,
        "unit": "Kg",
        "rate": 60,
        "amount": 240,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD037",
        "productName": "Kovakkai / Kundru (Tindora)",
        "qty": 2,
        "unit": "Crates",
        "rate": 550,
        "amount": 1100,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 2,
            "received": 2
          }
        ]
      },
      {
        "productId": "PRD011",
        "productName": "Nookkol",
        "qty": 8,
        "unit": "Bags",
        "rate": 520,
        "amount": 4160,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 8,
            "received": 8
          }
        ]
      },
      {
        "productId": "PRD010",
        "productName": "Chow Chow",
        "qty": 3,
        "unit": "Bags",
        "rate": 450,
        "amount": 1350,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD030",
        "productName": "Raw Green Papaya",
        "qty": 5,
        "unit": "Crates",
        "rate": 650,
        "amount": 3250,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD024",
        "productName": "Raw Banana (Cooking)",
        "qty": 4,
        "unit": "Bunches",
        "rate": 350,
        "amount": 1400,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD038",
        "productName": "Snake Gourd (Padavalakai)",
        "qty": 6,
        "unit": "Bags",
        "rate": 420,
        "amount": 2520,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD193",
        "productName": "Kandrela",
        "qty": 3,
        "unit": "Kg",
        "rate": 90,
        "amount": 270,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD145",
        "productName": "B GUARD WIT",
        "qty": 4,
        "unit": "Kg",
        "rate": 45,
        "amount": 180,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD171",
        "productName": "Ballar Falli (Avarekalu)",
        "qty": 5,
        "unit": "Kg",
        "rate": 55,
        "amount": 275,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD018",
        "productName": "Avarakkai",
        "qty": 6,
        "unit": "Kg",
        "rate": 55,
        "amount": 330,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD156",
        "productName": "Turmeric Raw (Haldi)",
        "qty": 4,
        "unit": "Kg",
        "rate": 90,
        "amount": 360,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD029",
        "productName": "Drumstick",
        "qty": 6,
        "unit": "Bags",
        "rate": 550,
        "amount": 3300,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD031",
        "productName": "Lemon Standard",
        "qty": 3,
        "unit": "Bags",
        "rate": 650,
        "amount": 1950,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD034",
        "productName": "Arbi (Colocasia)",
        "qty": 5,
        "unit": "Bags",
        "rate": 750,
        "amount": 3750,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD045",
        "productName": "Coriander (Kothmir)",
        "qty": 2,
        "unit": "Bunches",
        "rate": 25,
        "amount": 50,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 2,
            "received": 2
          }
        ]
      },
      {
        "productId": "PRD194",
        "productName": "Naati",
        "qty": 7,
        "unit": "Bunches",
        "rate": 15,
        "amount": 105,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 7,
            "received": 7
          }
        ]
      },
      {
        "productId": "PRD042",
        "productName": "Pudina (Mint)",
        "qty": 4,
        "unit": "Bunches",
        "rate": 25,
        "amount": 100,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD041",
        "productName": "Curry Leaf",
        "qty": 5,
        "unit": "Bunches",
        "rate": 25,
        "amount": 125,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD043",
        "productName": "Palak (Spinach)",
        "qty": 3,
        "unit": "Bunches",
        "rate": 25,
        "amount": 75,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD044",
        "productName": "Methi (Fenugreek)",
        "qty": 4,
        "unit": "Bunches",
        "rate": 25,
        "amount": 100,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD046",
        "productName": "Spring Onion",
        "qty": 2,
        "unit": "Bunches",
        "rate": 28,
        "amount": 56,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 2,
            "received": 2
          }
        ]
      },
      {
        "productId": "PRD195",
        "productName": "Sabakki",
        "qty": 8,
        "unit": "Bunches",
        "rate": 15,
        "amount": 120,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 8,
            "received": 8
          }
        ]
      },
      {
        "productId": "PRD143",
        "productName": "S POTATO",
        "qty": 3,
        "unit": "Kg",
        "rate": 45,
        "amount": 135,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD085",
        "productName": "Apple Premium",
        "qty": 5,
        "unit": "Crates",
        "rate": 2100,
        "amount": 10500,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD097",
        "productName": "Muskmelon",
        "qty": 4,
        "unit": "Crates",
        "rate": 600,
        "amount": 2400,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD121",
        "productName": "SWEET MILON",
        "qty": 6,
        "unit": "Kg",
        "rate": 45,
        "amount": 270,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD196",
        "productName": "Pink Lady",
        "qty": 3,
        "unit": "Crates",
        "rate": 1850,
        "amount": 5550,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD174",
        "productName": "Persimmon Fruit",
        "qty": 4,
        "unit": "Boxes",
        "rate": 850,
        "amount": 3400,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD073",
        "productName": "Apple Green (Granny Smith)",
        "qty": 5,
        "unit": "Crates",
        "rate": 2100,
        "amount": 10500,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD075",
        "productName": "Apple Royal Gala",
        "qty": 6,
        "unit": "Crates",
        "rate": 2100,
        "amount": 12600,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD072",
        "productName": "Apple China Fuji",
        "qty": 4,
        "unit": "Crates",
        "rate": 2100,
        "amount": 8400,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD090",
        "productName": "Pear Green",
        "qty": 6,
        "unit": "Boxes",
        "rate": 1450,
        "amount": 8700,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD091",
        "productName": "Golden Pear",
        "qty": 3,
        "unit": "Boxes",
        "rate": 1450,
        "amount": 4350,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD084",
        "productName": "Kiwi Fruit",
        "qty": 5,
        "unit": "Boxes",
        "rate": 850,
        "amount": 4250,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD166",
        "productName": "Chiku (Sapota)",
        "qty": 2,
        "unit": "Crates",
        "rate": 650,
        "amount": 1300,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 2,
            "received": 2
          }
        ]
      },
      {
        "productId": "PRD081",
        "productName": "Grapes Green Thompson",
        "qty": 7,
        "unit": "Crates",
        "rate": 1200,
        "amount": 8400,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 7,
            "received": 7
          }
        ]
      },
      {
        "productId": "PRD080",
        "productName": "Grapes Black Seedless",
        "qty": 4,
        "unit": "Crates",
        "rate": 1200,
        "amount": 4800,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD079",
        "productName": "Grapes Red Globe Imported",
        "qty": 5,
        "unit": "Crates",
        "rate": 1200,
        "amount": 6000,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD077",
        "productName": "Anar (Pomegranate)",
        "qty": 3,
        "unit": "Boxes",
        "rate": 1650,
        "amount": 4950,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD197",
        "productName": "Pomegranate Big",
        "qty": 4,
        "unit": "Boxes",
        "rate": 1400,
        "amount": 5600,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD099",
        "productName": "Butter Fruit (Avocado)",
        "qty": 2,
        "unit": "Crates",
        "rate": 1500,
        "amount": 3000,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 2,
            "received": 2
          }
        ]
      },
      {
        "productId": "PRD173",
        "productName": "Dragon Fruit (Pitaya)",
        "qty": 8,
        "unit": "Boxes",
        "rate": 900,
        "amount": 7200,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 8,
            "received": 8
          }
        ]
      },
      {
        "productId": "PRD198",
        "productName": "Wht Dragon",
        "qty": 3,
        "unit": "Boxes",
        "rate": 1100,
        "amount": 3300,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD180",
        "productName": "MADRIN",
        "qty": 5,
        "unit": "Kg",
        "rate": 45,
        "amount": 225,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD101",
        "productName": "Guava (Allahabad Safeda)",
        "qty": 4,
        "unit": "Crates",
        "rate": 650,
        "amount": 2600,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD199",
        "productName": "Nati Gauva",
        "qty": 6,
        "unit": "Crates",
        "rate": 550,
        "amount": 3300,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD094",
        "productName": "Apple Premium",
        "qty": 3,
        "unit": "Crates",
        "rate": 2100,
        "amount": 6300,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD179",
        "productName": "CITRUS",
        "qty": 4,
        "unit": "Kg",
        "rate": 45,
        "amount": 180,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD074",
        "productName": "Apple Premium",
        "qty": 5,
        "unit": "Crates",
        "rate": 2100,
        "amount": 10500,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD076",
        "productName": "Mosambi Sweet Lime",
        "qty": 6,
        "unit": "Bags",
        "rate": 1100,
        "amount": 6600,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD104",
        "productName": "Orange Nagpur Sweet",
        "qty": 4,
        "unit": "Crates",
        "rate": 1350,
        "amount": 5400,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD200",
        "productName": "Malda",
        "qty": 6,
        "unit": "Crates",
        "rate": 950,
        "amount": 5700,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD201",
        "productName": "Kashmiri Apple",
        "qty": 3,
        "unit": "Crates",
        "rate": 1650,
        "amount": 4950,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD070",
        "productName": "Apple Indian (Shimla)",
        "qty": 5,
        "unit": "Crates",
        "rate": 2100,
        "amount": 10500,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD202",
        "productName": "Misri Apple",
        "qty": 2,
        "unit": "Crates",
        "rate": 1700,
        "amount": 3400,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 2,
            "received": 2
          }
        ]
      },
      {
        "productId": "PRD203",
        "productName": "Ooty Apple",
        "qty": 7,
        "unit": "Crates",
        "rate": 1600,
        "amount": 11200,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 7,
            "received": 7
          }
        ]
      },
      {
        "productId": "PRD078",
        "productName": "Papaya Ripe (Red Lady)",
        "qty": 4,
        "unit": "Crates",
        "rate": 650,
        "amount": 2600,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD086",
        "productName": "Banana Yellaki",
        "qty": 5,
        "unit": "Bunches",
        "rate": 450,
        "amount": 2250,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD092",
        "productName": "Banana Robusta",
        "qty": 3,
        "unit": "Bunches",
        "rate": 450,
        "amount": 1350,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD088",
        "productName": "Watermelon Big Dark",
        "qty": 4,
        "unit": "Kg",
        "rate": 22,
        "amount": 88,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD087",
        "productName": "Banana Nendran",
        "qty": 2,
        "unit": "Bunches",
        "rate": 450,
        "amount": 900,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 2,
            "received": 2
          }
        ]
      },
      {
        "productId": "PRD093",
        "productName": "Red Banana",
        "qty": 8,
        "unit": "Bunches",
        "rate": 450,
        "amount": 3600,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 8,
            "received": 8
          }
        ]
      },
      {
        "productId": "PRD112",
        "productName": "Mango Banganapalli",
        "qty": 3,
        "unit": "Crates",
        "rate": 2200,
        "amount": 6600,
        "allocations": [
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 3,
            "received": 3
          }
        ]
      }
    ],
    "timeline": [
      {
        "step": "Requirement",
        "status": "completed",
        "timestamp": "05:30 AM"
      },
      {
        "step": "Approved",
        "status": "completed",
        "timestamp": "05:45 AM"
      },
      {
        "step": "Purchase Order",
        "status": "completed",
        "timestamp": "06:00 AM"
      },
      {
        "step": "Dispatched",
        "status": "completed",
        "timestamp": "06:30 AM"
      },
      {
        "step": "Dock Arrived",
        "status": "active",
        "timestamp": "06:45 AM"
      },
      {
        "step": "Unloading Verified",
        "status": "pending",
        "timestamp": "Est. 07:15 AM"
      }
    ],
    "status": "Incoming Delivery"
  }
,
  {
    "id": "PO-20261003-LBS01",
    "supplierName": "K.R. Market & APMC Fruit-Veg Terminal (LBS Nagar)",
    "date": "03 Oct 2026",
    "time": "06:45 AM",
    "totalAmount": 369493,
    "source": "DAILY_STOCK_CHECK_LBS_DISPATCH",
    "manifestReference": "LBS-MORNING-DISPATCH-01",
    "items": [
      {
        "productId": "PRD005",
        "productName": "Green Beans",
        "qty": 5,
        "unit": "Bags",
        "rate": 900,
        "amount": 4500,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD004",
        "productName": "Carrot",
        "qty": 4,
        "unit": "Bags",
        "rate": 850,
        "amount": 3400,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD023",
        "productName": "Cucumber Local",
        "qty": 6,
        "unit": "Crates",
        "rate": 450,
        "amount": 2700,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD057",
        "productName": "Beetroot",
        "qty": 3,
        "unit": "Bags",
        "rate": 750,
        "amount": 2250,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD032",
        "productName": "Cauliflower",
        "qty": 7,
        "unit": "Crates",
        "rate": 600,
        "amount": 4200,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 7,
            "received": 7
          }
        ]
      },
      {
        "productId": "PRD022",
        "productName": "Cabbage Green",
        "qty": 5,
        "unit": "Bags",
        "rate": 420,
        "amount": 2100,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD028",
        "productName": "Green Chilli",
        "qty": 4,
        "unit": "Crates",
        "rate": 650,
        "amount": 2600,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD192",
        "productName": "Big Chilli",
        "qty": 6,
        "unit": "Crates",
        "rate": 620,
        "amount": 3720,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD009",
        "productName": "Green Peas",
        "qty": 3,
        "unit": "Bags",
        "rate": 1400,
        "amount": 4200,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD125",
        "productName": "Parval (Pointed Gourd)",
        "qty": 5,
        "unit": "Crates",
        "rate": 650,
        "amount": 3250,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD019",
        "productName": "Lauki (Bottle Gourd)",
        "qty": 4,
        "unit": "Bags",
        "rate": 400,
        "amount": 1600,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD012",
        "productName": "Radish White",
        "qty": 3,
        "unit": "Bags",
        "rate": 480,
        "amount": 1440,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD014",
        "productName": "Brinjal Mysore",
        "qty": 6,
        "unit": "Crates",
        "rate": 480,
        "amount": 2880,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD188",
        "productName": "Rampuri Brinjal",
        "qty": 5,
        "unit": "Crates",
        "rate": 500,
        "amount": 2500,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD011",
        "productName": "Nookkol",
        "qty": 2,
        "unit": "Bags",
        "rate": 520,
        "amount": 1040,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 2,
            "received": 2
          }
        ]
      },
      {
        "productId": "PRD183",
        "productName": "Small Karela (S.Karela)",
        "qty": 8,
        "unit": "Crates",
        "rate": 600,
        "amount": 4800,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 8,
            "received": 8
          }
        ]
      },
      {
        "productId": "PRD020",
        "productName": "Bitter Gourd",
        "qty": 4,
        "unit": "Crates",
        "rate": 600,
        "amount": 2400,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD006",
        "productName": "Ladies Finger",
        "qty": 5,
        "unit": "Crates",
        "rate": 650,
        "amount": 3250,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD049",
        "productName": "Ridge Gourd (Hirekayi)",
        "qty": 6,
        "unit": "Bags",
        "rate": 500,
        "amount": 3000,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD021",
        "productName": "Capsicum Green",
        "qty": 4,
        "unit": "Crates",
        "rate": 700,
        "amount": 2800,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD027",
        "productName": "Ginger",
        "qty": 5,
        "unit": "Bags",
        "rate": 1600,
        "amount": 8000,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD204",
        "productName": "Ginger Old",
        "qty": 4,
        "unit": "Bags",
        "rate": 1800,
        "amount": 7200,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD024",
        "productName": "Raw Banana (Cooking)",
        "qty": 6,
        "unit": "Bunches",
        "rate": 350,
        "amount": 2100,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD030",
        "productName": "Raw Green Papaya",
        "qty": 3,
        "unit": "Crates",
        "rate": 650,
        "amount": 1950,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD051",
        "productName": "Banana Stem",
        "qty": 7,
        "unit": "Pieces",
        "rate": 25,
        "amount": 175,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 7,
            "received": 7
          }
        ]
      },
      {
        "productId": "PRD060",
        "productName": "Banana Flower (Vazhaipoo)",
        "qty": 5,
        "unit": "Pieces",
        "rate": 30,
        "amount": 150,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD054",
        "productName": "English Cucumber",
        "qty": 4,
        "unit": "Crates",
        "rate": 450,
        "amount": 1800,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD143",
        "productName": "S POTATO",
        "qty": 6,
        "unit": "Kg",
        "rate": 45,
        "amount": 270,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD172",
        "productName": "Tapioca (Kappa / Cassava)",
        "qty": 3,
        "unit": "Bags",
        "rate": 650,
        "amount": 1950,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD029",
        "productName": "Drumstick",
        "qty": 5,
        "unit": "Bags",
        "rate": 550,
        "amount": 2750,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD017",
        "productName": "Amla",
        "qty": 4,
        "unit": "Kg",
        "rate": 60,
        "amount": 240,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD189",
        "productName": "L Brinjal Purple",
        "qty": 3,
        "unit": "Crates",
        "rate": 520,
        "amount": 1560,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD015",
        "productName": "Brinjal Green",
        "qty": 6,
        "unit": "Crates",
        "rate": 480,
        "amount": 2880,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD058",
        "productName": "Bajji Chilli (Bhavnagri)",
        "qty": 5,
        "unit": "Crates",
        "rate": 650,
        "amount": 3250,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD016",
        "productName": "Brinjal Bhartha",
        "qty": 2,
        "unit": "Crates",
        "rate": 480,
        "amount": 960,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 2,
            "received": 2
          }
        ]
      },
      {
        "productId": "PRD205",
        "productName": "Bharta Green",
        "qty": 8,
        "unit": "Crates",
        "rate": 550,
        "amount": 4400,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 8,
            "received": 8
          }
        ]
      },
      {
        "productId": "PRD047",
        "productName": "Yellow Pumpkin",
        "qty": 4,
        "unit": "Bags",
        "rate": 550,
        "amount": 2200,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD048",
        "productName": "White Pumpkin (Ash Gourd)",
        "qty": 5,
        "unit": "Bags",
        "rate": 550,
        "amount": 2750,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD052",
        "productName": "Elephant Foot Yam (Suran)",
        "qty": 6,
        "unit": "Bags",
        "rate": 900,
        "amount": 5400,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD031",
        "productName": "Lemon Standard",
        "qty": 4,
        "unit": "Bags",
        "rate": 650,
        "amount": 2600,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD035",
        "productName": "Small Onion (Shallots)",
        "qty": 5,
        "unit": "Bags",
        "rate": 1450,
        "amount": 7250,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD033",
        "productName": "Sambar Cucumber",
        "qty": 4,
        "unit": "Crates",
        "rate": 450,
        "amount": 1800,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD193",
        "productName": "Kandrela",
        "qty": 6,
        "unit": "Kg",
        "rate": 90,
        "amount": 540,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD206",
        "productName": "Round Loki",
        "qty": 3,
        "unit": "Bags",
        "rate": 420,
        "amount": 1260,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD156",
        "productName": "Turmeric Raw (Haldi)",
        "qty": 7,
        "unit": "Kg",
        "rate": 90,
        "amount": 630,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 7,
            "received": 7
          }
        ]
      },
      {
        "productId": "PRD034",
        "productName": "Arbi (Colocasia)",
        "qty": 5,
        "unit": "Bags",
        "rate": 750,
        "amount": 3750,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD169",
        "productName": "Matki Falli (Moth Pods)",
        "qty": 4,
        "unit": "Kg",
        "rate": 65,
        "amount": 260,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD170",
        "productName": "Sem Beans",
        "qty": 6,
        "unit": "Kg",
        "rate": 55,
        "amount": 330,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD053",
        "productName": "Avarakkai",
        "qty": 3,
        "unit": "Kg",
        "rate": 55,
        "amount": 165,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD037",
        "productName": "Kovakkai / Kundru (Tindora)",
        "qty": 5,
        "unit": "Crates",
        "rate": 550,
        "amount": 2750,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD008",
        "productName": "Long Beans",
        "qty": 4,
        "unit": "Kg",
        "rate": 50,
        "amount": 200,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD066",
        "productName": "Double Beans (Lima)",
        "qty": 3,
        "unit": "Kg",
        "rate": 80,
        "amount": 240,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD018",
        "productName": "Avarakkai",
        "qty": 6,
        "unit": "Kg",
        "rate": 55,
        "amount": 330,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD010",
        "productName": "Chow Chow",
        "qty": 5,
        "unit": "Bags",
        "rate": 450,
        "amount": 2250,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD176",
        "productName": "Karamani (Cowpea Pods)",
        "qty": 2,
        "unit": "Kg",
        "rate": 65,
        "amount": 130,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 2,
            "received": 2
          }
        ]
      },
      {
        "productId": "PRD038",
        "productName": "Snake Gourd (Padavalakai)",
        "qty": 8,
        "unit": "Bags",
        "rate": 420,
        "amount": 3360,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 8,
            "received": 8
          }
        ]
      },
      {
        "productId": "PRD207",
        "productName": "Bhaggi",
        "qty": 4,
        "unit": "Bunches",
        "rate": 15,
        "amount": 60,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD045",
        "productName": "Coriander (Kothmir)",
        "qty": 5,
        "unit": "Bunches",
        "rate": 25,
        "amount": 125,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD042",
        "productName": "Pudina (Mint)",
        "qty": 6,
        "unit": "Bunches",
        "rate": 25,
        "amount": 150,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD041",
        "productName": "Curry Leaf",
        "qty": 4,
        "unit": "Bunches",
        "rate": 25,
        "amount": 100,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD003",
        "productName": "Tomato",
        "qty": 5,
        "unit": "Crates",
        "rate": 550,
        "amount": 2750,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD185",
        "productName": "N TOMATO",
        "qty": 4,
        "unit": "Kg",
        "rate": 45,
        "amount": 180,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD092",
        "productName": "Banana Robusta",
        "qty": 6,
        "unit": "Bunches",
        "rate": 450,
        "amount": 2700,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD079",
        "productName": "Grapes Red Globe Imported",
        "qty": 3,
        "unit": "Crates",
        "rate": 1200,
        "amount": 3600,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD075",
        "productName": "Apple Royal Gala",
        "qty": 7,
        "unit": "Crates",
        "rate": 2100,
        "amount": 14700,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 7,
            "received": 7
          }
        ]
      },
      {
        "productId": "PRD196",
        "productName": "Pink Lady",
        "qty": 5,
        "unit": "Crates",
        "rate": 1850,
        "amount": 9250,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD208",
        "productName": "Turkey Apple",
        "qty": 4,
        "unit": "Crates",
        "rate": 1750,
        "amount": 7000,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD071",
        "productName": "Apple Washington",
        "qty": 6,
        "unit": "Crates",
        "rate": 2100,
        "amount": 12600,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD209",
        "productName": "Rocket Apple",
        "qty": 3,
        "unit": "Boxes",
        "rate": 1950,
        "amount": 5850,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD210",
        "productName": "Alibinder",
        "qty": 5,
        "unit": "Crates",
        "rate": 1800,
        "amount": 9000,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD073",
        "productName": "Apple Green (Granny Smith)",
        "qty": 4,
        "unit": "Crates",
        "rate": 2100,
        "amount": 8400,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD211",
        "productName": "Iran Apple",
        "qty": 3,
        "unit": "Crates",
        "rate": 1600,
        "amount": 4800,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD201",
        "productName": "Kashmiri Apple",
        "qty": 6,
        "unit": "Crates",
        "rate": 1650,
        "amount": 9900,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD070",
        "productName": "Apple Indian (Shimla)",
        "qty": 5,
        "unit": "Crates",
        "rate": 2100,
        "amount": 10500,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD202",
        "productName": "Misri Apple",
        "qty": 2,
        "unit": "Crates",
        "rate": 1700,
        "amount": 3400,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 2,
            "received": 2
          }
        ]
      },
      {
        "productId": "PRD090",
        "productName": "Pear Green",
        "qty": 8,
        "unit": "Boxes",
        "rate": 1450,
        "amount": 11600,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 8,
            "received": 8
          }
        ]
      },
      {
        "productId": "PRD091",
        "productName": "Golden Pear",
        "qty": 4,
        "unit": "Boxes",
        "rate": 1450,
        "amount": 5800,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD174",
        "productName": "Persimmon Fruit",
        "qty": 5,
        "unit": "Boxes",
        "rate": 850,
        "amount": 4250,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD084",
        "productName": "Kiwi Fruit",
        "qty": 6,
        "unit": "Boxes",
        "rate": 850,
        "amount": 5100,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD099",
        "productName": "Butter Fruit (Avocado)",
        "qty": 4,
        "unit": "Crates",
        "rate": 1500,
        "amount": 6000,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD212",
        "productName": "Butter Fruit Imported",
        "qty": 5,
        "unit": "Crates",
        "rate": 2200,
        "amount": 11000,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD080",
        "productName": "Grapes Black Seedless",
        "qty": 4,
        "unit": "Crates",
        "rate": 1200,
        "amount": 4800,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD213",
        "productName": "Black Grapes Imported",
        "qty": 6,
        "unit": "Crates",
        "rate": 1400,
        "amount": 8400,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD081",
        "productName": "Grapes Green Thompson",
        "qty": 3,
        "unit": "Crates",
        "rate": 1200,
        "amount": 3600,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD097",
        "productName": "Muskmelon",
        "qty": 7,
        "unit": "Crates",
        "rate": 600,
        "amount": 4200,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 7,
            "received": 7
          }
        ]
      },
      {
        "productId": "PRD121",
        "productName": "SWEET MILON",
        "qty": 5,
        "unit": "Kg",
        "rate": 45,
        "amount": 225,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD166",
        "productName": "Chiku (Sapota)",
        "qty": 4,
        "unit": "Crates",
        "rate": 650,
        "amount": 2600,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD157",
        "productName": "BAERY",
        "qty": 6,
        "unit": "Kg",
        "rate": 45,
        "amount": 270,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD076",
        "productName": "Mosambi Sweet Lime",
        "qty": 3,
        "unit": "Bags",
        "rate": 1100,
        "amount": 3300,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD180",
        "productName": "MADRIN",
        "qty": 5,
        "unit": "Kg",
        "rate": 45,
        "amount": 225,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD173",
        "productName": "Dragon Fruit (Pitaya)",
        "qty": 4,
        "unit": "Boxes",
        "rate": 900,
        "amount": 3600,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD198",
        "productName": "Wht Dragon",
        "qty": 3,
        "unit": "Boxes",
        "rate": 1100,
        "amount": 3300,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD214",
        "productName": "Logan",
        "qty": 6,
        "unit": "Boxes",
        "rate": 1250,
        "amount": 7500,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD197",
        "productName": "Pomegranate Big",
        "qty": 5,
        "unit": "Boxes",
        "rate": 1400,
        "amount": 7000,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD077",
        "productName": "Anar (Pomegranate)",
        "qty": 2,
        "unit": "Boxes",
        "rate": 1650,
        "amount": 3300,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 2,
            "received": 2
          }
        ]
      },
      {
        "productId": "PRD179",
        "productName": "CITRUS",
        "qty": 8,
        "unit": "Kg",
        "rate": 45,
        "amount": 360,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 8,
            "received": 8
          }
        ]
      },
      {
        "productId": "PRD094",
        "productName": "Apple Premium",
        "qty": 4,
        "unit": "Crates",
        "rate": 2100,
        "amount": 8400,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD215",
        "productName": "Ramphal",
        "qty": 5,
        "unit": "Crates",
        "rate": 800,
        "amount": 4000,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD101",
        "productName": "Guava (Allahabad Safeda)",
        "qty": 6,
        "unit": "Crates",
        "rate": 650,
        "amount": 3900,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD085",
        "productName": "Apple Premium",
        "qty": 4,
        "unit": "Crates",
        "rate": 2100,
        "amount": 8400,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD104",
        "productName": "Orange Nagpur Sweet",
        "qty": 5,
        "unit": "Crates",
        "rate": 1350,
        "amount": 6750,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD088",
        "productName": "Watermelon Big Dark",
        "qty": 4,
        "unit": "Kg",
        "rate": 22,
        "amount": 88,
        "allocations": [
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 4,
            "received": 4
          }
        ]
      }
    ],
    "timeline": [
      {
        "step": "Requirement",
        "status": "completed",
        "timestamp": "05:30 AM"
      },
      {
        "step": "Approved",
        "status": "completed",
        "timestamp": "05:45 AM"
      },
      {
        "step": "Purchase Order",
        "status": "completed",
        "timestamp": "06:00 AM"
      },
      {
        "step": "Dispatched",
        "status": "completed",
        "timestamp": "06:30 AM"
      },
      {
        "step": "Dock Arrived",
        "status": "active",
        "timestamp": "06:45 AM"
      },
      {
        "step": "Unloading Verified",
        "status": "pending",
        "timestamp": "Est. 07:15 AM"
      }
    ],
    "status": "Incoming Delivery"
  }
,
  {
    "id": "PO-20261003-BSV01",
    "supplierName": "K.R. Market & APMC Fruit-Veg Terminal (Basavanagar)",
    "date": "03 Oct 2026",
    "time": "06:45 AM",
    "totalAmount": 360300,
    "source": "DAILY_STOCK_CHECK_BSV_DISPATCH",
    "manifestReference": "BSV-MORNING-DISPATCH-01",
    "items": [
      {
        "productId": "PRD088",
        "productName": "Watermelon Big Dark",
        "qty": 5,
        "unit": "Kg",
        "rate": 22,
        "amount": 110,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD078",
        "productName": "Papaya Ripe (Red Lady)",
        "qty": 4,
        "unit": "Crates",
        "rate": 650,
        "amount": 2600,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD085",
        "productName": "Apple Premium",
        "qty": 6,
        "unit": "Crates",
        "rate": 2100,
        "amount": 12600,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD104",
        "productName": "Orange Nagpur Sweet",
        "qty": 3,
        "unit": "Crates",
        "rate": 1350,
        "amount": 4050,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD179",
        "productName": "CITRUS",
        "qty": 7,
        "unit": "Kg",
        "rate": 45,
        "amount": 315,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 7,
            "received": 7
          }
        ]
      },
      {
        "productId": "PRD180",
        "productName": "MADRIN",
        "qty": 5,
        "unit": "Kg",
        "rate": 45,
        "amount": 225,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD076",
        "productName": "Mosambi Sweet Lime",
        "qty": 4,
        "unit": "Bags",
        "rate": 1100,
        "amount": 4400,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD097",
        "productName": "Muskmelon",
        "qty": 6,
        "unit": "Crates",
        "rate": 600,
        "amount": 3600,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD094",
        "productName": "Apple Premium",
        "qty": 3,
        "unit": "Crates",
        "rate": 2100,
        "amount": 6300,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD166",
        "productName": "Chiku (Sapota)",
        "qty": 5,
        "unit": "Crates",
        "rate": 650,
        "amount": 3250,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD216",
        "productName": "Thai Guava",
        "qty": 4,
        "unit": "Crates",
        "rate": 1100,
        "amount": 4400,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD199",
        "productName": "Nati Gauva",
        "qty": 3,
        "unit": "Crates",
        "rate": 550,
        "amount": 1650,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD157",
        "productName": "BAERY",
        "qty": 6,
        "unit": "Kg",
        "rate": 45,
        "amount": 270,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD173",
        "productName": "Dragon Fruit (Pitaya)",
        "qty": 5,
        "unit": "Boxes",
        "rate": 900,
        "amount": 4500,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD198",
        "productName": "Wht Dragon",
        "qty": 2,
        "unit": "Boxes",
        "rate": 1100,
        "amount": 2200,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 2,
            "received": 2
          }
        ]
      },
      {
        "productId": "PRD081",
        "productName": "Grapes Green Thompson",
        "qty": 8,
        "unit": "Crates",
        "rate": 1200,
        "amount": 9600,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 8,
            "received": 8
          }
        ]
      },
      {
        "productId": "PRD080",
        "productName": "Grapes Black Seedless",
        "qty": 4,
        "unit": "Crates",
        "rate": 1200,
        "amount": 4800,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD079",
        "productName": "Grapes Red Globe Imported",
        "qty": 5,
        "unit": "Crates",
        "rate": 1200,
        "amount": 6000,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD217",
        "productName": "Golden Kiwi",
        "qty": 6,
        "unit": "Boxes",
        "rate": 1400,
        "amount": 8400,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD084",
        "productName": "Kiwi Fruit",
        "qty": 4,
        "unit": "Boxes",
        "rate": 850,
        "amount": 3400,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD197",
        "productName": "Pomegranate Big",
        "qty": 5,
        "unit": "Boxes",
        "rate": 1400,
        "amount": 7000,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD077",
        "productName": "Anar (Pomegranate)",
        "qty": 4,
        "unit": "Boxes",
        "rate": 1650,
        "amount": 6600,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD103",
        "productName": "Plum Black",
        "qty": 6,
        "unit": "Boxes",
        "rate": 650,
        "amount": 3900,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD090",
        "productName": "Pear Green",
        "qty": 3,
        "unit": "Boxes",
        "rate": 1450,
        "amount": 4350,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD099",
        "productName": "Butter Fruit (Avocado)",
        "qty": 7,
        "unit": "Crates",
        "rate": 1500,
        "amount": 10500,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 7,
            "received": 7
          }
        ]
      },
      {
        "productId": "PRD212",
        "productName": "Butter Fruit Imported",
        "qty": 5,
        "unit": "Crates",
        "rate": 2200,
        "amount": 11000,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD174",
        "productName": "Persimmon Fruit",
        "qty": 4,
        "unit": "Boxes",
        "rate": 850,
        "amount": 3400,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD075",
        "productName": "Apple Royal Gala",
        "qty": 6,
        "unit": "Crates",
        "rate": 2100,
        "amount": 12600,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD196",
        "productName": "Pink Lady",
        "qty": 3,
        "unit": "Crates",
        "rate": 1850,
        "amount": 5550,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD208",
        "productName": "Turkey Apple",
        "qty": 5,
        "unit": "Crates",
        "rate": 1750,
        "amount": 8750,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD071",
        "productName": "Apple Washington",
        "qty": 4,
        "unit": "Crates",
        "rate": 2100,
        "amount": 8400,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD209",
        "productName": "Rocket Apple",
        "qty": 3,
        "unit": "Boxes",
        "rate": 1950,
        "amount": 5850,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD210",
        "productName": "Alibinder",
        "qty": 6,
        "unit": "Crates",
        "rate": 1800,
        "amount": 10800,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD073",
        "productName": "Apple Green (Granny Smith)",
        "qty": 5,
        "unit": "Crates",
        "rate": 2100,
        "amount": 10500,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD211",
        "productName": "Iran Apple",
        "qty": 2,
        "unit": "Crates",
        "rate": 1600,
        "amount": 3200,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 2,
            "received": 2
          }
        ]
      },
      {
        "productId": "PRD201",
        "productName": "Kashmiri Apple",
        "qty": 8,
        "unit": "Crates",
        "rate": 1650,
        "amount": 13200,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 8,
            "received": 8
          }
        ]
      },
      {
        "productId": "PRD070",
        "productName": "Apple Indian (Shimla)",
        "qty": 4,
        "unit": "Crates",
        "rate": 2100,
        "amount": 8400,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD202",
        "productName": "Misri Apple",
        "qty": 5,
        "unit": "Crates",
        "rate": 1700,
        "amount": 8500,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD023",
        "productName": "Cucumber Local",
        "qty": 6,
        "unit": "Crates",
        "rate": 450,
        "amount": 2700,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD032",
        "productName": "Cauliflower",
        "qty": 4,
        "unit": "Crates",
        "rate": 600,
        "amount": 2400,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD022",
        "productName": "Cabbage Green",
        "qty": 5,
        "unit": "Bags",
        "rate": 420,
        "amount": 2100,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD019",
        "productName": "Lauki (Bottle Gourd)",
        "qty": 4,
        "unit": "Bags",
        "rate": 400,
        "amount": 1600,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD049",
        "productName": "Ridge Gourd (Hirekayi)",
        "qty": 6,
        "unit": "Bags",
        "rate": 500,
        "amount": 3000,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD143",
        "productName": "S POTATO",
        "qty": 3,
        "unit": "Kg",
        "rate": 45,
        "amount": 135,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD006",
        "productName": "Ladies Finger",
        "qty": 7,
        "unit": "Crates",
        "rate": 650,
        "amount": 4550,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 7,
            "received": 7
          }
        ]
      },
      {
        "productId": "PRD009",
        "productName": "Green Peas",
        "qty": 5,
        "unit": "Bags",
        "rate": 1400,
        "amount": 7000,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD005",
        "productName": "Green Beans",
        "qty": 4,
        "unit": "Bags",
        "rate": 900,
        "amount": 3600,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD004",
        "productName": "Carrot",
        "qty": 6,
        "unit": "Bags",
        "rate": 850,
        "amount": 5100,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD057",
        "productName": "Beetroot",
        "qty": 3,
        "unit": "Bags",
        "rate": 750,
        "amount": 2250,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD029",
        "productName": "Drumstick",
        "qty": 5,
        "unit": "Bags",
        "rate": 550,
        "amount": 2750,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD012",
        "productName": "Radish White",
        "qty": 4,
        "unit": "Bags",
        "rate": 480,
        "amount": 1920,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD021",
        "productName": "Capsicum Green",
        "qty": 3,
        "unit": "Crates",
        "rate": 700,
        "amount": 2100,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD125",
        "productName": "Parval (Pointed Gourd)",
        "qty": 6,
        "unit": "Crates",
        "rate": 650,
        "amount": 3900,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD017",
        "productName": "Amla",
        "qty": 5,
        "unit": "Kg",
        "rate": 60,
        "amount": 300,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD008",
        "productName": "Long Beans",
        "qty": 2,
        "unit": "Kg",
        "rate": 50,
        "amount": 100,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 2,
            "received": 2
          }
        ]
      },
      {
        "productId": "PRD018",
        "productName": "Avarakkai",
        "qty": 8,
        "unit": "Kg",
        "rate": 55,
        "amount": 440,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 8,
            "received": 8
          }
        ]
      },
      {
        "productId": "PRD177",
        "productName": "White Butter Beans",
        "qty": 4,
        "unit": "Kg",
        "rate": 80,
        "amount": 320,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD066",
        "productName": "Double Beans (Lima)",
        "qty": 5,
        "unit": "Kg",
        "rate": 80,
        "amount": 400,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD011",
        "productName": "Nookkol",
        "qty": 6,
        "unit": "Bags",
        "rate": 520,
        "amount": 3120,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD183",
        "productName": "Small Karela (S.Karela)",
        "qty": 4,
        "unit": "Crates",
        "rate": 600,
        "amount": 2400,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD020",
        "productName": "Bitter Gourd",
        "qty": 5,
        "unit": "Crates",
        "rate": 600,
        "amount": 3000,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD014",
        "productName": "Brinjal Mysore",
        "qty": 4,
        "unit": "Crates",
        "rate": 480,
        "amount": 1920,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD189",
        "productName": "L Brinjal Purple",
        "qty": 6,
        "unit": "Crates",
        "rate": 520,
        "amount": 3120,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD015",
        "productName": "Brinjal Green",
        "qty": 3,
        "unit": "Crates",
        "rate": 480,
        "amount": 1440,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD205",
        "productName": "Bharta Green",
        "qty": 7,
        "unit": "Crates",
        "rate": 550,
        "amount": 3850,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 7,
            "received": 7
          }
        ]
      },
      {
        "productId": "PRD016",
        "productName": "Brinjal Bhartha",
        "qty": 5,
        "unit": "Crates",
        "rate": 480,
        "amount": 2400,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD028",
        "productName": "Green Chilli",
        "qty": 4,
        "unit": "Crates",
        "rate": 650,
        "amount": 2600,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD192",
        "productName": "Big Chilli",
        "qty": 6,
        "unit": "Crates",
        "rate": 620,
        "amount": 3720,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD058",
        "productName": "Bajji Chilli (Bhavnagri)",
        "qty": 3,
        "unit": "Crates",
        "rate": 650,
        "amount": 1950,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD169",
        "productName": "Matki Falli (Moth Pods)",
        "qty": 5,
        "unit": "Kg",
        "rate": 65,
        "amount": 325,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD170",
        "productName": "Sem Beans",
        "qty": 4,
        "unit": "Kg",
        "rate": 55,
        "amount": 220,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD053",
        "productName": "Avarakkai",
        "qty": 3,
        "unit": "Kg",
        "rate": 55,
        "amount": 165,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD037",
        "productName": "Kovakkai / Kundru (Tindora)",
        "qty": 6,
        "unit": "Crates",
        "rate": 550,
        "amount": 3300,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD038",
        "productName": "Snake Gourd (Padavalakai)",
        "qty": 5,
        "unit": "Bags",
        "rate": 420,
        "amount": 2100,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD010",
        "productName": "Chow Chow",
        "qty": 2,
        "unit": "Bags",
        "rate": 450,
        "amount": 900,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 2,
            "received": 2
          }
        ]
      },
      {
        "productId": "PRD030",
        "productName": "Raw Green Papaya",
        "qty": 8,
        "unit": "Crates",
        "rate": 650,
        "amount": 5200,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 8,
            "received": 8
          }
        ]
      },
      {
        "productId": "PRD024",
        "productName": "Raw Banana (Cooking)",
        "qty": 4,
        "unit": "Bunches",
        "rate": 350,
        "amount": 1400,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD051",
        "productName": "Banana Stem",
        "qty": 5,
        "unit": "Pieces",
        "rate": 25,
        "amount": 125,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD060",
        "productName": "Banana Flower (Vazhaipoo)",
        "qty": 6,
        "unit": "Pieces",
        "rate": 30,
        "amount": 180,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD131",
        "productName": "Raw Green Mango",
        "qty": 4,
        "unit": "Crates",
        "rate": 2200,
        "amount": 8800,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD050",
        "productName": "Jackfruit (Raw / Ripe)",
        "qty": 5,
        "unit": "Kg",
        "rate": 45,
        "amount": 225,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD034",
        "productName": "Arbi (Colocasia)",
        "qty": 4,
        "unit": "Bags",
        "rate": 750,
        "amount": 3000,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD172",
        "productName": "Tapioca (Kappa / Cassava)",
        "qty": 6,
        "unit": "Bags",
        "rate": 650,
        "amount": 3900,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD027",
        "productName": "Ginger",
        "qty": 3,
        "unit": "Bags",
        "rate": 1600,
        "amount": 4800,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD048",
        "productName": "White Pumpkin (Ash Gourd)",
        "qty": 7,
        "unit": "Bags",
        "rate": 550,
        "amount": 3850,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 7,
            "received": 7
          }
        ]
      },
      {
        "productId": "PRD047",
        "productName": "Yellow Pumpkin",
        "qty": 5,
        "unit": "Bags",
        "rate": 550,
        "amount": 2750,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD052",
        "productName": "Elephant Foot Yam (Suran)",
        "qty": 4,
        "unit": "Bags",
        "rate": 900,
        "amount": 3600,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD033",
        "productName": "Sambar Cucumber",
        "qty": 6,
        "unit": "Crates",
        "rate": 450,
        "amount": 2700,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD035",
        "productName": "Small Onion (Shallots)",
        "qty": 3,
        "unit": "Bags",
        "rate": 1450,
        "amount": 4350,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD156",
        "productName": "Turmeric Raw (Haldi)",
        "qty": 5,
        "unit": "Kg",
        "rate": 90,
        "amount": 450,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD176",
        "productName": "Karamani (Cowpea Pods)",
        "qty": 4,
        "unit": "Kg",
        "rate": 65,
        "amount": 260,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD045",
        "productName": "Coriander (Kothmir)",
        "qty": 3,
        "unit": "Bunches",
        "rate": 25,
        "amount": 75,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD194",
        "productName": "Naati",
        "qty": 6,
        "unit": "Bunches",
        "rate": 15,
        "amount": 90,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD041",
        "productName": "Curry Leaf",
        "qty": 5,
        "unit": "Bunches",
        "rate": 25,
        "amount": 125,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD042",
        "productName": "Pudina (Mint)",
        "qty": 2,
        "unit": "Bunches",
        "rate": 25,
        "amount": 50,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 2,
            "received": 2
          }
        ]
      },
      {
        "productId": "PRD043",
        "productName": "Palak (Spinach)",
        "qty": 8,
        "unit": "Bunches",
        "rate": 25,
        "amount": 200,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 8,
            "received": 8
          }
        ]
      },
      {
        "productId": "PRD044",
        "productName": "Methi (Fenugreek)",
        "qty": 4,
        "unit": "Bunches",
        "rate": 25,
        "amount": 100,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD207",
        "productName": "Bhaggi",
        "qty": 5,
        "unit": "Bunches",
        "rate": 15,
        "amount": 75,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD092",
        "productName": "Banana Robusta",
        "qty": 6,
        "unit": "Bunches",
        "rate": 450,
        "amount": 2700,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD185",
        "productName": "N TOMATO",
        "qty": 4,
        "unit": "Kg",
        "rate": 45,
        "amount": 180,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD003",
        "productName": "Tomato",
        "qty": 5,
        "unit": "Crates",
        "rate": 550,
        "amount": 2750,
        "allocations": [
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 5,
            "received": 5
          }
        ]
      }
    ],
    "timeline": [
      {
        "status": "Requirements Compiled",
        "detail": "Automated aggregation from 101 Basavanagar produce items",
        "timestamp": "04:30 AM"
      },
      {
        "status": "Dispatch Manifest Created",
        "detail": "Strict Basavanagar fruit and vegetable layout verified",
        "timestamp": "05:15 AM"
      },
      {
        "status": "Dockside Arrival",
        "detail": "Truck at Basavanagar unloading dock bay 1",
        "timestamp": "Est. 07:15 AM"
      }
    ],
    "status": "Incoming Delivery"
  }
,
  {
    "id": "PO-20261003-ASP01",
    "supplierName": "K.R. Market & APMC Fruit-Veg Terminal (Annasandrapalya)",
    "date": "03 Oct 2026",
    "time": "06:45 AM",
    "totalAmount": 376747,
    "source": "DAILY_STOCK_CHECK_ASP_DISPATCH",
    "manifestReference": "ASP-MORNING-DISPATCH-01",
    "items": [
      {
        "productId": "PRD005",
        "productName": "Green Beans",
        "qty": 5,
        "unit": "Bags",
        "rate": 900,
        "amount": 4500,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD004",
        "productName": "Carrot",
        "qty": 4,
        "unit": "Bags",
        "rate": 850,
        "amount": 3400,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD023",
        "productName": "Cucumber Local",
        "qty": 6,
        "unit": "Crates",
        "rate": 450,
        "amount": 2700,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD057",
        "productName": "Beetroot",
        "qty": 3,
        "unit": "Bags",
        "rate": 750,
        "amount": 2250,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD032",
        "productName": "Cauliflower",
        "qty": 7,
        "unit": "Crates",
        "rate": 600,
        "amount": 4200,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 7,
            "received": 7
          }
        ]
      },
      {
        "productId": "PRD022",
        "productName": "Cabbage Green",
        "qty": 5,
        "unit": "Bags",
        "rate": 420,
        "amount": 2100,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD028",
        "productName": "Green Chilli",
        "qty": 4,
        "unit": "Crates",
        "rate": 650,
        "amount": 2600,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD192",
        "productName": "Big Chilli",
        "qty": 6,
        "unit": "Crates",
        "rate": 620,
        "amount": 3720,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD009",
        "productName": "Green Peas",
        "qty": 3,
        "unit": "Bags",
        "rate": 1400,
        "amount": 4200,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD125",
        "productName": "Parval (Pointed Gourd)",
        "qty": 5,
        "unit": "Crates",
        "rate": 650,
        "amount": 3250,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD019",
        "productName": "Lauki (Bottle Gourd)",
        "qty": 4,
        "unit": "Bags",
        "rate": 400,
        "amount": 1600,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD012",
        "productName": "Radish White",
        "qty": 3,
        "unit": "Bags",
        "rate": 480,
        "amount": 1440,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD014",
        "productName": "Brinjal Mysore",
        "qty": 6,
        "unit": "Crates",
        "rate": 480,
        "amount": 2880,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD188",
        "productName": "Rampuri Brinjal",
        "qty": 5,
        "unit": "Crates",
        "rate": 500,
        "amount": 2500,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD011",
        "productName": "Nookkol",
        "qty": 2,
        "unit": "Bags",
        "rate": 520,
        "amount": 1040,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 2,
            "received": 2
          }
        ]
      },
      {
        "productId": "PRD183",
        "productName": "Small Karela (S.Karela)",
        "qty": 8,
        "unit": "Crates",
        "rate": 600,
        "amount": 4800,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 8,
            "received": 8
          }
        ]
      },
      {
        "productId": "PRD020",
        "productName": "Bitter Gourd",
        "qty": 4,
        "unit": "Crates",
        "rate": 600,
        "amount": 2400,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD006",
        "productName": "Ladies Finger",
        "qty": 5,
        "unit": "Crates",
        "rate": 650,
        "amount": 3250,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD049",
        "productName": "Ridge Gourd (Hirekayi)",
        "qty": 6,
        "unit": "Bags",
        "rate": 500,
        "amount": 3000,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD021",
        "productName": "Capsicum Green",
        "qty": 4,
        "unit": "Crates",
        "rate": 700,
        "amount": 2800,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD027",
        "productName": "Ginger",
        "qty": 5,
        "unit": "Bags",
        "rate": 1600,
        "amount": 8000,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD204",
        "productName": "Ginger Old",
        "qty": 4,
        "unit": "Bags",
        "rate": 1800,
        "amount": 7200,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD024",
        "productName": "Raw Banana (Cooking)",
        "qty": 6,
        "unit": "Bunches",
        "rate": 350,
        "amount": 2100,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD030",
        "productName": "Raw Green Papaya",
        "qty": 3,
        "unit": "Crates",
        "rate": 650,
        "amount": 1950,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD051",
        "productName": "Banana Stem",
        "qty": 7,
        "unit": "Pieces",
        "rate": 25,
        "amount": 175,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 7,
            "received": 7
          }
        ]
      },
      {
        "productId": "PRD060",
        "productName": "Banana Flower (Vazhaipoo)",
        "qty": 5,
        "unit": "Pieces",
        "rate": 30,
        "amount": 150,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD054",
        "productName": "English Cucumber",
        "qty": 4,
        "unit": "Crates",
        "rate": 450,
        "amount": 1800,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD143",
        "productName": "S POTATO",
        "qty": 6,
        "unit": "Kg",
        "rate": 45,
        "amount": 270,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD172",
        "productName": "Tapioca (Kappa / Cassava)",
        "qty": 3,
        "unit": "Bags",
        "rate": 650,
        "amount": 1950,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD029",
        "productName": "Drumstick",
        "qty": 5,
        "unit": "Bags",
        "rate": 550,
        "amount": 2750,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD017",
        "productName": "Amla",
        "qty": 4,
        "unit": "Kg",
        "rate": 60,
        "amount": 240,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD189",
        "productName": "L Brinjal Purple",
        "qty": 3,
        "unit": "Crates",
        "rate": 520,
        "amount": 1560,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD015",
        "productName": "Brinjal Green",
        "qty": 6,
        "unit": "Crates",
        "rate": 480,
        "amount": 2880,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD058",
        "productName": "Bajji Chilli (Bhavnagri)",
        "qty": 5,
        "unit": "Crates",
        "rate": 650,
        "amount": 3250,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD016",
        "productName": "Brinjal Bhartha",
        "qty": 2,
        "unit": "Crates",
        "rate": 480,
        "amount": 960,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 2,
            "received": 2
          }
        ]
      },
      {
        "productId": "PRD205",
        "productName": "Bharta Green",
        "qty": 8,
        "unit": "Crates",
        "rate": 550,
        "amount": 4400,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 8,
            "received": 8
          }
        ]
      },
      {
        "productId": "PRD047",
        "productName": "Yellow Pumpkin",
        "qty": 4,
        "unit": "Bags",
        "rate": 550,
        "amount": 2200,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD048",
        "productName": "White Pumpkin (Ash Gourd)",
        "qty": 5,
        "unit": "Bags",
        "rate": 550,
        "amount": 2750,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD052",
        "productName": "Elephant Foot Yam (Suran)",
        "qty": 6,
        "unit": "Bags",
        "rate": 900,
        "amount": 5400,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD031",
        "productName": "Lemon Standard",
        "qty": 4,
        "unit": "Bags",
        "rate": 650,
        "amount": 2600,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD035",
        "productName": "Small Onion (Shallots)",
        "qty": 5,
        "unit": "Bags",
        "rate": 1450,
        "amount": 7250,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD033",
        "productName": "Sambar Cucumber",
        "qty": 4,
        "unit": "Crates",
        "rate": 450,
        "amount": 1800,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD193",
        "productName": "Kandrela",
        "qty": 6,
        "unit": "Kg",
        "rate": 90,
        "amount": 540,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD206",
        "productName": "Round Loki",
        "qty": 3,
        "unit": "Bags",
        "rate": 420,
        "amount": 1260,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD156",
        "productName": "Turmeric Raw (Haldi)",
        "qty": 7,
        "unit": "Kg",
        "rate": 90,
        "amount": 630,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 7,
            "received": 7
          }
        ]
      },
      {
        "productId": "PRD034",
        "productName": "Arbi (Colocasia)",
        "qty": 5,
        "unit": "Bags",
        "rate": 750,
        "amount": 3750,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD169",
        "productName": "Matki Falli (Moth Pods)",
        "qty": 4,
        "unit": "Kg",
        "rate": 65,
        "amount": 260,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD170",
        "productName": "Sem Beans",
        "qty": 6,
        "unit": "Kg",
        "rate": 55,
        "amount": 330,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD053",
        "productName": "Avarakkai",
        "qty": 3,
        "unit": "Kg",
        "rate": 55,
        "amount": 165,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD037",
        "productName": "Kovakkai / Kundru (Tindora)",
        "qty": 5,
        "unit": "Crates",
        "rate": 550,
        "amount": 2750,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD008",
        "productName": "Long Beans",
        "qty": 4,
        "unit": "Kg",
        "rate": 50,
        "amount": 200,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD066",
        "productName": "Double Beans (Lima)",
        "qty": 3,
        "unit": "Kg",
        "rate": 80,
        "amount": 240,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD018",
        "productName": "Avarakkai",
        "qty": 6,
        "unit": "Kg",
        "rate": 55,
        "amount": 330,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD010",
        "productName": "Chow Chow",
        "qty": 5,
        "unit": "Bags",
        "rate": 450,
        "amount": 2250,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD176",
        "productName": "Karamani (Cowpea Pods)",
        "qty": 2,
        "unit": "Kg",
        "rate": 65,
        "amount": 130,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 2,
            "received": 2
          }
        ]
      },
      {
        "productId": "PRD038",
        "productName": "Snake Gourd (Padavalakai)",
        "qty": 8,
        "unit": "Bags",
        "rate": 420,
        "amount": 3360,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 8,
            "received": 8
          }
        ]
      },
      {
        "productId": "PRD207",
        "productName": "Bhaggi",
        "qty": 4,
        "unit": "Bunches",
        "rate": 15,
        "amount": 60,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD045",
        "productName": "Coriander (Kothmir)",
        "qty": 5,
        "unit": "Bunches",
        "rate": 25,
        "amount": 125,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD042",
        "productName": "Pudina (Mint)",
        "qty": 6,
        "unit": "Bunches",
        "rate": 25,
        "amount": 150,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD041",
        "productName": "Curry Leaf",
        "qty": 4,
        "unit": "Bunches",
        "rate": 25,
        "amount": 100,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD003",
        "productName": "Tomato",
        "qty": 5,
        "unit": "Crates",
        "rate": 550,
        "amount": 2750,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD185",
        "productName": "N TOMATO",
        "qty": 4,
        "unit": "Kg",
        "rate": 45,
        "amount": 180,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD088",
        "productName": "Watermelon Big Dark",
        "qty": 6,
        "unit": "Kg",
        "rate": 22,
        "amount": 132,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD078",
        "productName": "Papaya Ripe (Red Lady)",
        "qty": 3,
        "unit": "Crates",
        "rate": 650,
        "amount": 1950,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD085",
        "productName": "Apple Premium",
        "qty": 7,
        "unit": "Crates",
        "rate": 2100,
        "amount": 14700,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 7,
            "received": 7
          }
        ]
      },
      {
        "productId": "PRD104",
        "productName": "Orange Nagpur Sweet",
        "qty": 5,
        "unit": "Crates",
        "rate": 1350,
        "amount": 6750,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD179",
        "productName": "CITRUS",
        "qty": 4,
        "unit": "Kg",
        "rate": 45,
        "amount": 180,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD180",
        "productName": "MADRIN",
        "qty": 6,
        "unit": "Kg",
        "rate": 45,
        "amount": 270,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD076",
        "productName": "Mosambi Sweet Lime",
        "qty": 3,
        "unit": "Bags",
        "rate": 1100,
        "amount": 3300,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD097",
        "productName": "Muskmelon",
        "qty": 5,
        "unit": "Crates",
        "rate": 600,
        "amount": 3000,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD094",
        "productName": "Apple Premium",
        "qty": 4,
        "unit": "Crates",
        "rate": 2100,
        "amount": 8400,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD166",
        "productName": "Chiku (Sapota)",
        "qty": 3,
        "unit": "Crates",
        "rate": 650,
        "amount": 1950,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD216",
        "productName": "Thai Guava",
        "qty": 6,
        "unit": "Crates",
        "rate": 1100,
        "amount": 6600,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD199",
        "productName": "Nati Gauva",
        "qty": 5,
        "unit": "Crates",
        "rate": 550,
        "amount": 2750,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD157",
        "productName": "BAERY",
        "qty": 2,
        "unit": "Kg",
        "rate": 45,
        "amount": 90,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 2,
            "received": 2
          }
        ]
      },
      {
        "productId": "PRD173",
        "productName": "Dragon Fruit (Pitaya)",
        "qty": 8,
        "unit": "Boxes",
        "rate": 900,
        "amount": 7200,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 8,
            "received": 8
          }
        ]
      },
      {
        "productId": "PRD198",
        "productName": "Wht Dragon",
        "qty": 4,
        "unit": "Boxes",
        "rate": 1100,
        "amount": 4400,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD081",
        "productName": "Grapes Green Thompson",
        "qty": 5,
        "unit": "Crates",
        "rate": 1200,
        "amount": 6000,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD080",
        "productName": "Grapes Black Seedless",
        "qty": 6,
        "unit": "Crates",
        "rate": 1200,
        "amount": 7200,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD079",
        "productName": "Grapes Red Globe Imported",
        "qty": 4,
        "unit": "Crates",
        "rate": 1200,
        "amount": 4800,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD217",
        "productName": "Golden Kiwi",
        "qty": 5,
        "unit": "Boxes",
        "rate": 1400,
        "amount": 7000,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD084",
        "productName": "Kiwi Fruit",
        "qty": 4,
        "unit": "Boxes",
        "rate": 850,
        "amount": 3400,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD197",
        "productName": "Pomegranate Big",
        "qty": 6,
        "unit": "Boxes",
        "rate": 1400,
        "amount": 8400,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD077",
        "productName": "Anar (Pomegranate)",
        "qty": 3,
        "unit": "Boxes",
        "rate": 1650,
        "amount": 4950,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD103",
        "productName": "Plum Black",
        "qty": 7,
        "unit": "Boxes",
        "rate": 650,
        "amount": 4550,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 7,
            "received": 7
          }
        ]
      },
      {
        "productId": "PRD090",
        "productName": "Pear Green",
        "qty": 5,
        "unit": "Boxes",
        "rate": 1450,
        "amount": 7250,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD099",
        "productName": "Butter Fruit (Avocado)",
        "qty": 4,
        "unit": "Crates",
        "rate": 1500,
        "amount": 6000,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD212",
        "productName": "Butter Fruit Imported",
        "qty": 6,
        "unit": "Crates",
        "rate": 2200,
        "amount": 13200,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD174",
        "productName": "Persimmon Fruit",
        "qty": 3,
        "unit": "Boxes",
        "rate": 850,
        "amount": 2550,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD075",
        "productName": "Apple Royal Gala",
        "qty": 5,
        "unit": "Crates",
        "rate": 2100,
        "amount": 10500,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD196",
        "productName": "Pink Lady",
        "qty": 4,
        "unit": "Crates",
        "rate": 1850,
        "amount": 7400,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD208",
        "productName": "Turkey Apple",
        "qty": 3,
        "unit": "Crates",
        "rate": 1750,
        "amount": 5250,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 3,
            "received": 3
          }
        ]
      },
      {
        "productId": "PRD071",
        "productName": "Apple Washington",
        "qty": 6,
        "unit": "Crates",
        "rate": 2100,
        "amount": 12600,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD209",
        "productName": "Rocket Apple",
        "qty": 5,
        "unit": "Boxes",
        "rate": 1950,
        "amount": 9750,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD210",
        "productName": "Alibinder",
        "qty": 2,
        "unit": "Crates",
        "rate": 1800,
        "amount": 3600,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 2,
            "received": 2
          }
        ]
      },
      {
        "productId": "PRD073",
        "productName": "Apple Green (Granny Smith)",
        "qty": 8,
        "unit": "Crates",
        "rate": 2100,
        "amount": 16800,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 8,
            "received": 8
          }
        ]
      },
      {
        "productId": "PRD211",
        "productName": "Iran Apple",
        "qty": 4,
        "unit": "Crates",
        "rate": 1600,
        "amount": 6400,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 4,
            "received": 4
          }
        ]
      },
      {
        "productId": "PRD201",
        "productName": "Kashmiri Apple",
        "qty": 5,
        "unit": "Crates",
        "rate": 1650,
        "amount": 8250,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 5,
            "received": 5
          }
        ]
      },
      {
        "productId": "PRD070",
        "productName": "Apple Indian (Shimla)",
        "qty": 6,
        "unit": "Crates",
        "rate": 2100,
        "amount": 12600,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 6,
            "received": 6
          }
        ]
      },
      {
        "productId": "PRD202",
        "productName": "Misri Apple",
        "qty": 4,
        "unit": "Crates",
        "rate": 1700,
        "amount": 6800,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 4,
            "received": 4
          }
        ]
      }
    ],
    "timeline": [
      {
        "status": "Requirements Compiled",
        "detail": "Automated aggregation from 100 Annasandrapalya produce items",
        "timestamp": "04:30 AM"
      },
      {
        "status": "Dispatch Manifest Created",
        "detail": "Strict Annasandrapalya fruit and vegetable layout verified",
        "timestamp": "05:15 AM"
      },
      {
        "status": "Dockside Arrival",
        "detail": "Truck at Annasandrapalya unloading dock bay 1",
        "timestamp": "Est. 07:15 AM"
      }
    ],
    "status": "Incoming Delivery"
  }
];

export const INITIAL_NOTIFICATIONS = [
  {
    id: 'NOTIF-001',
    title: 'Low Stock Alert',
    message: 'Onion is low in ANNASANDRAPALYA (3 Bags remaining, reorder level is 5).',
    type: 'warning',
    time: '5 min ago',
    unread: true,
    branch: 'ANNASANDRAPALYA'
  },
  {
    id: 'NOTIF-002',
    title: 'Requirement Recorded',
    message: 'Stock check completed for ANNASANDRAPALYA across retail SKU catalog.',
    type: 'info',
    time: '15 min ago',
    unread: true,
    branch: 'ANNASANDRAPALYA'
  },
  {
    id: 'NOTIF-003',
    title: 'PO Dispatched',
    message: 'PO-20261003-0001 from K.R. Market Veg Syndicate has been dispatched.',
    type: 'success',
    time: '35 min ago',
    unread: false,
    branch: 'All'
  }
];

export const INITIAL_STOCK_MOVEMENTS = [
  {
    productId: 'PRD001',
    date: '03 Oct 2026',
    change: '+12 Bags',
    type: 'Purchase',
    reference: 'PO-20261003-0001',
    branch: 'ANNASANDRAPALYA'
  },
  {
    productId: 'PRD002',
    date: '03 Oct 2026',
    change: '-2 Bags',
    type: 'Sale',
    reference: 'Morning Counter Sale',
    branch: 'ANNASANDRAPALYA'
  }
];

// Official sequence for KODIHALLI branch (BR002) for both Daily Stock Check and Stock Receiving
export const KODIHALLI_SEQUENCE = [
  "PRD023", // 1. Cucumber
  "PRD004", // 2. Carrot
  "PRD019", // 3. Loki
  "PRD021", // 4. Capsicum
  "PRD032", // 5. Gobi
  "PRD022", // 6. Cabage
  "PRD005", // 7. beans
  "PRD006", // 8. Bhindi
  "PRD012", // 9. Mooli
  "PRD057", // 10. Bitrot
  "PRD049", // 11. Turai
  "PRD187", // 12. Akash chilli
  "PRD008", // 13. L beans
  "PRD014", // 14. Gund brinjal
  "PRD188", // 15. Rampuri brinjal
  "PRD015", // 16. L brinjal green
  "PRD189", // 17. L brinjal purple
  "PRD016", // 18. Bharta blk
  "PRD190", // 19. Bengali bharta
  "PRD191", // 20. Totapuri
  "PRD125", // 21. Parval
  "PRD192", // 22. Big chilli
  "PRD058", // 23. Bajji chilli
  "PRD170", // 24. Same
  "PRD053", // 25. Belt
  "PRD009", // 26. Matar
  "PRD169", // 27. Matki
  "PRD183", // 28. Karela small
  "PRD020", // 29. Karela b
  "PRD017", // 30. Amla
  "PRD037", // 31. Kundru
  "PRD011", // 32. Nukul
  "PRD010", // 33. Chow Chow
  "PRD030", // 34. Raw papaya
  "PRD024", // 35. Raw banana
  "PRD038", // 36. Snake guard
  "PRD193", // 37. Kandrela
  "PRD145", // 38. White karela
  "PRD171", // 39. Ballar
  "PRD018", // 40. Nati beans
  "PRD156", // 41. Kacha haldi
  "PRD029", // 42. Drumstick
  "PRD031", // 43. Lemon
  "PRD034", // 44. Arvi
  "PRD045", // 45. Dhanya farm
  "PRD194", // 46. Naati
  "PRD042", // 47. Pudina
  "PRD041", // 48. Karileaf
  "PRD043", // 49. Palak
  "PRD044", // 50. Methi
  "PRD046", // 51. Spring onion
  "PRD195", // 52. Sabakki
  "PRD143", // 53. Sweet potato
  "PRD085", // 54. Pine apple
  "PRD097", // 55. Muskmelon
  "PRD121", // 56. Muskmelon lines
  "PRD196", // 57. Pink lady
  "PRD174", // 58. Persimmon
  "PRD073", // 59. Green apple
  "PRD075", // 60. Royal gala
  "PRD072", // 61. Fuji gala
  "PRD090", // 62. Pears
  "PRD091", // 63. Ind pears
  "PRD084", // 64. Kiwi
  "PRD166", // 65. Chikku
  "PRD081", // 66. Green grapes
  "PRD080", // 67. Black grapes
  "PRD079", // 68. Red globe
  "PRD077", // 69. Pomegranate
  "PRD197", // 70. Pomegranate big
  "PRD099", // 71. Avocado
  "PRD173", // 72. Red dragon
  "PRD198", // 73. Wht dragon
  "PRD180", // 74. Madrin
  "PRD101", // 75. Gauva
  "PRD199", // 76. Nati gauva
  "PRD094", // 77. Sithaphal
  "PRD179", // 78. Citrus
  "PRD074", // 79. Apple
  "PRD076", // 80. Mosambi
  "PRD104", // 81. Nagpur orange
  "PRD200", // 82. Malda
  "PRD201", // 83. Kashmiri apple
  "PRD070", // 84. Shimla apple
  "PRD202", // 85. Misri apple
  "PRD203", // 86. Ooty apple
  "PRD078", // 87. Papaya
  "PRD086", // 88. Yalakki banana
  "PRD092", // 89. Robusta
  "PRD088", // 90. Watermelon
  "PRD087", // 91. Nendra
  "PRD093", // 92. Red banana
  "PRD112"  // 93. Mangoes
];

// Official sequence for LB SHASTRI NAGAR branch (BR003) for both Daily Stock Check and Stock Receiving
// Categorized strictly: Items 1..62 (Vegetables), Items 63..102 (Fruits)
export const LBS_NAGAR_SEQUENCE = [
  // --- VEGETABLES (Image 1 & Image 2) ---
  "PRD005", // 1. Beans
  "PRD004", // 2. Carrot
  "PRD023", // 3. Cucumber
  "PRD057", // 4. Beetroot
  "PRD032", // 5. Gobi
  "PRD022", // 6. Cabbage
  "PRD028", // 7. chilli
  "PRD192", // 8. Big chilli
  "PRD009", // 9. Mattar
  "PRD125", // 10. Parval
  "PRD019", // 11. Loki
  "PRD012", // 12. Mulli
  "PRD014", // 13. Gund
  "PRD188", // 14. Rampuri
  "PRD011", // 15. Nukal
  "PRD183", // 16. Karela Small
  "PRD020", // 17. Karela Big
  "PRD006", // 18. Bhendi
  "PRD049", // 19. Turai
  "PRD021", // 20. Capsicum
  "PRD027", // 21. Ginger new
  "PRD204", // 22. Ginger old
  "PRD024", // 23. Raw Banana
  "PRD030", // 24. Raw papaya
  "PRD051", // 25. Banana stem
  "PRD060", // 26. Banana flower
  "PRD054", // 27. English Cucumber
  "PRD143", // 28. Sweet Potato
  "PRD172", // 29. Kappa
  "PRD029", // 30. Drumstick
  "PRD017", // 31. Amla
  "PRD189", // 32. Long Brinjal P.
  "PRD015", // 33. Long Brinjal G.
  "PRD058", // 34. Bhaggi chilli
  "PRD016", // 35. Bharta Black
  "PRD205", // 36. Bharta Green
  "PRD047", // 37. Yellow Pumpkin
  "PRD048", // 38. White pumpkin
  "PRD052", // 39. Suran
  "PRD031", // 40. Lemon
  "PRD035", // 41. Sambar onion
  "PRD033", // 42. Sambar cucumber
  "PRD193", // 43. Kankrela
  "PRD206", // 44. Round Loki
  "PRD156", // 45. Haldi Raw
  "PRD034", // 46. Arvi
  "PRD169", // 47. Matki phali
  "PRD170", // 48. Seem
  "PRD053", // 49. Belt
  "PRD037", // 50. Kunduru
  "PRD008", // 51. Long Beans
  "PRD066", // 52. D. phali
  "PRD018", // 53. N. Beans
  "PRD010", // 54. Chow chow
  "PRD176", // 55. Karamani
  "PRD038", // 56. Snake guard
  "PRD207", // 57. Bhaggi
  "PRD045", // 58. Coriender
  "PRD042", // 59. Pudina
  "PRD041", // 60. Carileaf
  "PRD003", // 61. Tomato Farm
  "PRD185", // 62. Tomato Nati
  // --- FRUITS ---
  "PRD092", // 63. robusta
  "PRD079", // 64. red globe
  "PRD075", // 65. Gala Apple
  "PRD196", // 66. Pink lady Apple
  "PRD208", // 67. Turkey Apple
  "PRD071", // 68. WashingtonApple
  "PRD209", // 69. Rocket Apple
  "PRD210", // 70. Alibinder
  "PRD073", // 71. Green Apple
  "PRD211", // 72. Iran apple
  "PRD201", // 73. Kashmir Apple
  "PRD070", // 74. Shimla Apple
  "PRD202", // 75. Misri Apple
  "PRD090", // 76. pears
  "PRD091", // 77. imported pears
  "PRD174", // 78. persuman
  "PRD084", // 79. kiwi
  "PRD099", // 80. butter fruit normal
  "PRD212", // 81. butter fruit imported
  "PRD080", // 82. black grapes normal
  "PRD213", // 83. black grapes imported
  "PRD081", // 84. green grapes
  "PRD097", // 85. musk mellon farm
  "PRD121", // 86. musk mellon nati
  "PRD166", // 87. sapota
  "PRD157", // 88. bear
  "PRD076", // 89. musambi
  "PRD180", // 90. madrin
  "PRD173", // 91. dragon red
  "PRD198", // 92. dragon white
  "PRD214", // 93. logan
  "PRD197", // 94. anar big
  "PRD077", // 95. anar small
  "PRD179", // 96. citrus
  "PRD094", // 97. sitaphal
  "PRD215", // 98. ramphal
  "PRD101", // 99. guava
  "PRD085", // 100. pineapple
  "PRD104", // 101. orange nati
  "PRD088"  // 102. watermellon
];


// Official sequence for BASAVANAGAR branch (BR004) for both Daily Stock Check and Stock Receiving
// Categorized strictly: Items 1..38 (Fruits), Items 39..101 (Vegetables)
export const BASAVANAGAR_SEQUENCE = [
  // --- FRUITS (38 items) ---
  "PRD088", // 1. Watermelon
  "PRD078", // 2. Papaya
  "PRD085", // 3. Pineapple
  "PRD104", // 4. Orange
  "PRD179", // 5. Citrus
  "PRD180", // 6. Madrin
  "PRD076", // 7. Mosambi
  "PRD097", // 8. Muskmelon
  "PRD094", // 9. Custard Apple
  "PRD166", // 10. Sapota
  "PRD216", // 11. Thai Guava
  "PRD199", // 12. Nati Guava
  "PRD157", // 13. Green Bear
  "PRD173", // 14. Red Dragon
  "PRD198", // 15. White Dragon
  "PRD081", // 16. Green Grapes
  "PRD080", // 17. Black Grapes
  "PRD079", // 18. Red Globe
  "PRD217", // 19. Golden Kiwi
  "PRD084", // 20. Kiwi
  "PRD197", // 21. Anar big
  "PRD077", // 22. Anar small
  "PRD103", // 23. Plums
  "PRD090", // 24. Pears
  "PRD099", // 25. Butter fruit nati
  "PRD212", // 26. Butter fruit imported
  "PRD174", // 27. Persuman
  "PRD075", // 28. Gala Apple
  "PRD196", // 29. Pink lady Apple
  "PRD208", // 30. Turkey Apple
  "PRD071", // 31. WashingtonApple
  "PRD209", // 32. Rocket Apple
  "PRD210", // 33. Alibinder
  "PRD073", // 34. Green Apple
  "PRD211", // 35. Iran apple
  "PRD201", // 36. Kashmir Apple
  "PRD070", // 37. Shimla Apple
  "PRD202", // 38. Misri Apple

  // --- VEGETABLES (63 items) ---
  "PRD023", // 39. Cucumber
  "PRD032", // 40. Gobi
  "PRD022", // 41. Cabbage
  "PRD019", // 42. Loki
  "PRD049", // 43. Turai
  "PRD143", // 44. Sweet potato
  "PRD006", // 45. Bhindi
  "PRD009", // 46. Matar
  "PRD005", // 47. Beans
  "PRD004", // 48. Carrot
  "PRD057", // 49. Beetroot
  "PRD029", // 50. Drumstick
  "PRD012", // 51. Mooli
  "PRD021", // 52. Capsicum
  "PRD125", // 53. Parval
  "PRD017", // 54. Aamla
  "PRD008", // 55. Long Beans
  "PRD018", // 56. Nati Beans
  "PRD177", // 57. White Beans
  "PRD066", // 58. D phalli
  "PRD011", // 59. Naukal
  "PRD183", // 60. Karela small
  "PRD020", // 61. Karela big
  "PRD014", // 62. Small Brinjal
  "PRD189", // 63. Long Brinjal purple
  "PRD015", // 64. Long Brinjal green
  "PRD205", // 65. Bharta Green
  "PRD016", // 66. Bharta Black
  "PRD028", // 67. Green chilli small
  "PRD192", // 68. Green chilli Big
  "PRD058", // 69. Bhajji chilli
  "PRD169", // 70. Matki
  "PRD170", // 71. Sem
  "PRD053", // 72. Belt
  "PRD037", // 73. Kundru
  "PRD038", // 74. Snake guard
  "PRD010", // 75. Chow Chow
  "PRD030", // 76. Raw papaya
  "PRD024", // 77. Raw Banana
  "PRD051", // 78. Banana stem
  "PRD060", // 79. Banana flower
  "PRD131", // 80. Raw Mango
  "PRD050", // 81. Jackfruit
  "PRD034", // 82. Arvi
  "PRD172", // 83. Kappa
  "PRD027", // 84. Ginger
  "PRD048", // 85. Ash guard
  "PRD047", // 86. Pumpkin
  "PRD052", // 87. Suran
  "PRD033", // 88. Sambar cucumber
  "PRD035", // 89. Sambar onion
  "PRD156", // 90. Haldi
  "PRD176", // 91. Karamani
  "PRD045", // 92. Dhaniya farm
  "PRD194", // 93. Dhaniya Nati
  "PRD041", // 94. Kadipatta
  "PRD042", // 95. Pudina
  "PRD043", // 96. Palak
  "PRD044", // 97. Mehti
  "PRD207", // 98. Bhaji
  "PRD092", // 99. Robusta
  "PRD185", // 100. Tomato nati
  "PRD003"  // 101. Tomato farm basvanagar
];


// Official sequence for ANNASANDRAPALYA branch (BR001) for both Daily Stock Check and Stock Receiving
// Sequence: 62 Vegetables (same as LB Shastri Nagar) + 38 Fruits (same as Basavanagar) = 100 items
export const ANNASANDRAPALYA_SEQUENCE = [
  "PRD005",
  "PRD004",
  "PRD023",
  "PRD057",
  "PRD032",
  "PRD022",
  "PRD028",
  "PRD192",
  "PRD009",
  "PRD125",
  "PRD019",
  "PRD012",
  "PRD014",
  "PRD188",
  "PRD011",
  "PRD183",
  "PRD020",
  "PRD006",
  "PRD049",
  "PRD021",
  "PRD027",
  "PRD204",
  "PRD024",
  "PRD030",
  "PRD051",
  "PRD060",
  "PRD054",
  "PRD143",
  "PRD172",
  "PRD029",
  "PRD017",
  "PRD189",
  "PRD015",
  "PRD058",
  "PRD016",
  "PRD205",
  "PRD047",
  "PRD048",
  "PRD052",
  "PRD031",
  "PRD035",
  "PRD033",
  "PRD193",
  "PRD206",
  "PRD156",
  "PRD034",
  "PRD169",
  "PRD170",
  "PRD053",
  "PRD037",
  "PRD008",
  "PRD066",
  "PRD018",
  "PRD010",
  "PRD176",
  "PRD038",
  "PRD207",
  "PRD045",
  "PRD042",
  "PRD041",
  "PRD003",
  "PRD185",
  "PRD088",
  "PRD078",
  "PRD085",
  "PRD104",
  "PRD179",
  "PRD180",
  "PRD076",
  "PRD097",
  "PRD094",
  "PRD166",
  "PRD216",
  "PRD199",
  "PRD157",
  "PRD173",
  "PRD198",
  "PRD081",
  "PRD080",
  "PRD079",
  "PRD217",
  "PRD084",
  "PRD197",
  "PRD077",
  "PRD103",
  "PRD090",
  "PRD099",
  "PRD212",
  "PRD174",
  "PRD075",
  "PRD196",
  "PRD208",
  "PRD071",
  "PRD209",
  "PRD210",
  "PRD073",
  "PRD211",
  "PRD201",
  "PRD070",
  "PRD202"
];
