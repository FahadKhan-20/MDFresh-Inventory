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
    "name": "Small Brinjal Green",
    "originalPluName": "SMALL BRINJAL GREEN",
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
    "name": "Long Brinjal Green",
    "originalPluName": "LONG BRINJAL GREEN",
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
    "name": "Bharta Green",
    "originalPluName": "BHARTA GREEN",
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
    "name": "Arvi",
    "originalPluName": "ARVI",
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
    "name": "Bhajji Chilly",
    "originalPluName": "BHAJJI CHILLY",
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
    "name": "Watermelon Normal",
    "originalPluName": "WATERMELON NORMAL",
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
    "name": "Watermelon Stripes",
    "originalPluName": "WATERMELON STRIPES",
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
    "name": "Muskmelon Farm",
    "originalPluName": "MUSKMELON FARM",
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
    "name": "Madrin",
    "originalPluName": "MADRIN",
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
    "name": "Sem",
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
    "name": "Dragon Fruit Red",
    "originalPluName": "DRAGON FRUIT RED",
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
    "name": "Small Brinjal Purple",
    "originalPluName": "SMALL BRINJAL PURPLE",
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
    "name": "Long Brinjal Purple",
    "originalPluName": "LONG BRINJAL PURPLE",
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
    "name": "Dragon Fruit White",
    "originalPluName": "DRAGON FRUIT WHITE",
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
    "name": "Bharta Black",
    "originalPluName": "BHARTA BLACK",
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
    "name": "Bhajji Chilly",
    "originalPluName": "BHAJJI CHILLY",
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
  },
  {
    "id": "PRD218",
    "name": "Muskmelon Nati",
    "originalPluName": "MUSKMELON NATI",
    "variety": "Local Sweet Striped Kharbuja",
    "sku": "FRU-218",
    "category": "Fruits",
    "unit": "Crates",
    "reorderLevel": 5,
    "unitCost": 650,
    "supplierName": "ABC Fruit Market",
    "image": "🍈",
    "stocks": {
      "BR001": 3,
      "BR002": 4,
      "BR003": 5,
      "BR004": 3
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
    "id": "PO-20261003-0001",
    "supplierName": "K.R. Market Veg Syndicate",
    "date": "03 Oct 2026",
    "time": "09:30 AM",
    "totalAmount": 34500,
    "items": [
      {
        "productId": "PRD001",
        "productName": "Onion",
        "qty": 12,
        "unit": "Bags",
        "rate": 1350,
        "amount": 16200,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 3,
            "received": 3
          },
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 4,
            "received": 4
          },
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 3,
            "received": 3
          },
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 2,
            "received": 2
          }
        ]
      },
      {
        "productId": "PRD002",
        "productName": "Potato",
        "qty": 10,
        "unit": "Bags",
        "rate": 1150,
        "amount": 11500,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 3,
            "received": 3
          },
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 3,
            "received": 3
          },
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 2,
            "received": 2
          },
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 2,
            "received": 2
          }
        ]
      },
      {
        "productId": "PRD003",
        "productName": "Tomato",
        "qty": 12,
        "unit": "Crates",
        "rate": 550,
        "amount": 6600,
        "allocations": [
          {
            "branch": "ANNASANDRAPALYA",
            "branchId": "BR001",
            "qty": 4,
            "received": 4
          },
          {
            "branch": "KODIHALLI",
            "branchId": "BR002",
            "qty": 3,
            "received": 3
          },
          {
            "branch": "LBS NAGAR",
            "branchId": "BR003",
            "qty": 3,
            "received": 3
          },
          {
            "branch": "BASAVANAGAR",
            "branchId": "BR004",
            "qty": 2,
            "received": 2
          }
        ]
      }
    ],
    "timeline": [
      {
        "step": "Requirement",
        "status": "completed",
        "timestamp": "08:45 AM"
      },
      {
        "step": "Approved",
        "status": "completed",
        "timestamp": "09:00 AM"
      },
      {
        "step": "Purchase Order",
        "status": "completed",
        "timestamp": "09:30 AM"
      },
      {
        "step": "Purchasing",
        "status": "active",
        "timestamp": "10:15 AM"
      },
      {
        "step": "Dispatched",
        "status": "pending",
        "timestamp": "Est. 12:30 PM"
      },
      {
        "step": "Received",
        "status": "pending",
        "timestamp": "Est. 02:00 PM"
      }
    ],
    "status": "Purchasing"
  },
  {
    "id": "PO-20261003-KDH01",
    "supplierName": "K.R. Market & APMC Fruit-Veg Terminal",
    "date": "03 Oct 2026",
    "time": "06:45 AM",
    "totalAmount": 670987,
    "source": "DAILY_STOCK_CHECK_KODIHALLI_DISPATCH",
    "manifestReference": "KDH-MORNING-DISPATCH-01",
    "items": [
      {
        "productId": "PRD023",
        "productName": "Cucumber Local",
        "unit": "Crates",
        "totalQuantity": 3,
        "unitPrice": 450,
        "totalCost": 1350,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 3,
          "allocated": 3,
          "received": 3
          }
        ]
      },
      {
        "productId": "PRD004",
        "productName": "Carrot",
        "unit": "Bags",
        "totalQuantity": 10,
        "unitPrice": 850,
        "totalCost": 8500,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 10,
          "allocated": 10,
          "received": 10
          }
        ]
      },
      {
        "productId": "PRD019",
        "productName": "Lauki (Bottle Gourd)",
        "unit": "Bags",
        "totalQuantity": 17,
        "unitPrice": 400,
        "totalCost": 6800,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 17,
          "allocated": 17,
          "received": 17
          }
        ]
      },
      {
        "productId": "PRD021",
        "productName": "Capsicum Green",
        "unit": "Crates",
        "totalQuantity": 9,
        "unitPrice": 700,
        "totalCost": 6300,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 9,
          "allocated": 9,
          "received": 9
          }
        ]
      },
      {
        "productId": "PRD032",
        "productName": "Cauliflower",
        "unit": "Crates",
        "totalQuantity": 16,
        "unitPrice": 600,
        "totalCost": 9600,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 16,
          "allocated": 16,
          "received": 16
          }
        ]
      },
      {
        "productId": "PRD022",
        "productName": "Cabbage Green",
        "unit": "Bags",
        "totalQuantity": 8,
        "unitPrice": 420,
        "totalCost": 3360,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 8,
          "allocated": 8,
          "received": 8
          }
        ]
      },
      {
        "productId": "PRD005",
        "productName": "Green Beans",
        "unit": "Bags",
        "totalQuantity": 15,
        "unitPrice": 900,
        "totalCost": 13500,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 15,
          "allocated": 15,
          "received": 15
          }
        ]
      },
      {
        "productId": "PRD006",
        "productName": "Ladies Finger",
        "unit": "Crates",
        "totalQuantity": 7,
        "unitPrice": 650,
        "totalCost": 4550,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 7,
          "allocated": 7,
          "received": 7
          }
        ]
      },
      {
        "productId": "PRD012",
        "productName": "Radish White",
        "unit": "Bags",
        "totalQuantity": 14,
        "unitPrice": 480,
        "totalCost": 6720,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 14,
          "allocated": 14,
          "received": 14
          }
        ]
      },
      {
        "productId": "PRD057",
        "productName": "Beetroot",
        "unit": "Bags",
        "totalQuantity": 6,
        "unitPrice": 750,
        "totalCost": 4500,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 6,
          "allocated": 6,
          "received": 6
          }
        ]
      },
      {
        "productId": "PRD049",
        "productName": "Ridge Gourd (Hirekayi)",
        "unit": "Bags",
        "totalQuantity": 13,
        "unitPrice": 500,
        "totalCost": 6500,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 13,
          "allocated": 13,
          "received": 13
          }
        ]
      },
      {
        "productId": "PRD187",
        "productName": "Akash Chilli",
        "unit": "Kg",
        "totalQuantity": 5,
        "unitPrice": 60,
        "totalCost": 300,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 5,
          "allocated": 5,
          "received": 5
          }
        ]
      },
      {
        "productId": "PRD008",
        "productName": "Long Beans",
        "unit": "Kg",
        "totalQuantity": 12,
        "unitPrice": 50,
        "totalCost": 600,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 12,
          "allocated": 12,
          "received": 12
          }
        ]
      },
      {
        "productId": "PRD014",
        "productName": "Small Brinjal Green",
        "unit": "Crates",
        "totalQuantity": 4,
        "unitPrice": 480,
        "totalCost": 1920,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 4,
          "allocated": 4,
          "received": 4
          }
        ]
      },
      {
        "productId": "PRD188",
        "productName": "Small Brinjal Purple",
        "unit": "Crates",
        "totalQuantity": 11,
        "unitPrice": 500,
        "totalCost": 5500,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 11,
          "allocated": 11,
          "received": 11
          }
        ]
      },
      {
        "productId": "PRD015",
        "productName": "Long Brinjal Green",
        "unit": "Crates",
        "totalQuantity": 3,
        "unitPrice": 480,
        "totalCost": 1440,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 3,
          "allocated": 3,
          "received": 3
          }
        ]
      },
      {
        "productId": "PRD189",
        "productName": "Long Brinjal Purple",
        "unit": "Crates",
        "totalQuantity": 10,
        "unitPrice": 520,
        "totalCost": 5200,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 10,
          "allocated": 10,
          "received": 10
          }
        ]
      },
      {
        "productId": "PRD205",
        "productName": "Bharta Black",
        "unit": "Crates",
        "totalQuantity": 17,
        "unitPrice": 550,
        "totalCost": 9350,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 17,
          "allocated": 17,
          "received": 17
          }
        ]
      },
      {
        "productId": "PRD190",
        "productName": "Bengali Bharta",
        "unit": "Crates",
        "totalQuantity": 9,
        "unitPrice": 550,
        "totalCost": 4950,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 9,
          "allocated": 9,
          "received": 9
          }
        ]
      },
      {
        "productId": "PRD191",
        "productName": "Totapuri",
        "unit": "Crates",
        "totalQuantity": 16,
        "unitPrice": 600,
        "totalCost": 9600,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 16,
          "allocated": 16,
          "received": 16
          }
        ]
      },
      {
        "productId": "PRD125",
        "productName": "Parval (Pointed Gourd)",
        "unit": "Crates",
        "totalQuantity": 8,
        "unitPrice": 650,
        "totalCost": 5200,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 8,
          "allocated": 8,
          "received": 8
          }
        ]
      },
      {
        "productId": "PRD192",
        "productName": "Big Chilli",
        "unit": "Crates",
        "totalQuantity": 15,
        "unitPrice": 620,
        "totalCost": 9300,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 15,
          "allocated": 15,
          "received": 15
          }
        ]
      },
      {
        "productId": "PRD058",
        "productName": "Bhajji Chilly",
        "unit": "Crates",
        "totalQuantity": 7,
        "unitPrice": 650,
        "totalCost": 4550,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 7,
          "allocated": 7,
          "received": 7
          }
        ]
      },
      {
        "productId": "PRD170",
        "productName": "Sem",
        "unit": "Kg",
        "totalQuantity": 14,
        "unitPrice": 55,
        "totalCost": 770,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 14,
          "allocated": 14,
          "received": 14
          }
        ]
      },
      {
        "productId": "PRD053",
        "productName": "Avarakkai",
        "unit": "Kg",
        "totalQuantity": 6,
        "unitPrice": 55,
        "totalCost": 330,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 6,
          "allocated": 6,
          "received": 6
          }
        ]
      },
      {
        "productId": "PRD009",
        "productName": "Green Peas",
        "unit": "Bags",
        "totalQuantity": 13,
        "unitPrice": 1400,
        "totalCost": 18200,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 13,
          "allocated": 13,
          "received": 13
          }
        ]
      },
      {
        "productId": "PRD169",
        "productName": "Matki Falli (Moth Pods)",
        "unit": "Kg",
        "totalQuantity": 5,
        "unitPrice": 65,
        "totalCost": 325,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 5,
          "allocated": 5,
          "received": 5
          }
        ]
      },
      {
        "productId": "PRD183",
        "productName": "Small Karela (S.Karela)",
        "unit": "Crates",
        "totalQuantity": 12,
        "unitPrice": 600,
        "totalCost": 7200,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 12,
          "allocated": 12,
          "received": 12
          }
        ]
      },
      {
        "productId": "PRD020",
        "productName": "Bitter Gourd",
        "unit": "Crates",
        "totalQuantity": 4,
        "unitPrice": 600,
        "totalCost": 2400,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 4,
          "allocated": 4,
          "received": 4
          }
        ]
      },
      {
        "productId": "PRD017",
        "productName": "Amla",
        "unit": "Kg",
        "totalQuantity": 11,
        "unitPrice": 60,
        "totalCost": 660,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 11,
          "allocated": 11,
          "received": 11
          }
        ]
      },
      {
        "productId": "PRD037",
        "productName": "Kovakkai / Kundru (Tindora)",
        "unit": "Crates",
        "totalQuantity": 3,
        "unitPrice": 550,
        "totalCost": 1650,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 3,
          "allocated": 3,
          "received": 3
          }
        ]
      },
      {
        "productId": "PRD011",
        "productName": "Nookkol",
        "unit": "Bags",
        "totalQuantity": 10,
        "unitPrice": 520,
        "totalCost": 5200,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 10,
          "allocated": 10,
          "received": 10
          }
        ]
      },
      {
        "productId": "PRD010",
        "productName": "Chow Chow",
        "unit": "Bags",
        "totalQuantity": 17,
        "unitPrice": 450,
        "totalCost": 7650,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 17,
          "allocated": 17,
          "received": 17
          }
        ]
      },
      {
        "productId": "PRD030",
        "productName": "Raw Green Papaya",
        "unit": "Crates",
        "totalQuantity": 9,
        "unitPrice": 650,
        "totalCost": 5850,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 9,
          "allocated": 9,
          "received": 9
          }
        ]
      },
      {
        "productId": "PRD024",
        "productName": "Raw Banana (Cooking)",
        "unit": "Bunches",
        "totalQuantity": 16,
        "unitPrice": 350,
        "totalCost": 5600,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 16,
          "allocated": 16,
          "received": 16
          }
        ]
      },
      {
        "productId": "PRD038",
        "productName": "Snake Gourd (Padavalakai)",
        "unit": "Bags",
        "totalQuantity": 8,
        "unitPrice": 420,
        "totalCost": 3360,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 8,
          "allocated": 8,
          "received": 8
          }
        ]
      },
      {
        "productId": "PRD193",
        "productName": "Kandrela",
        "unit": "Kg",
        "totalQuantity": 15,
        "unitPrice": 90,
        "totalCost": 1350,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 15,
          "allocated": 15,
          "received": 15
          }
        ]
      },
      {
        "productId": "PRD145",
        "productName": "B GUARD WIT",
        "unit": "Kg",
        "totalQuantity": 7,
        "unitPrice": 45,
        "totalCost": 315,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 7,
          "allocated": 7,
          "received": 7
          }
        ]
      },
      {
        "productId": "PRD171",
        "productName": "Ballar Falli (Avarekalu)",
        "unit": "Kg",
        "totalQuantity": 14,
        "unitPrice": 55,
        "totalCost": 770,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 14,
          "allocated": 14,
          "received": 14
          }
        ]
      },
      {
        "productId": "PRD018",
        "productName": "Avarakkai",
        "unit": "Kg",
        "totalQuantity": 6,
        "unitPrice": 55,
        "totalCost": 330,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 6,
          "allocated": 6,
          "received": 6
          }
        ]
      },
      {
        "productId": "PRD156",
        "productName": "Turmeric Raw (Haldi)",
        "unit": "Kg",
        "totalQuantity": 13,
        "unitPrice": 90,
        "totalCost": 1170,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 13,
          "allocated": 13,
          "received": 13
          }
        ]
      },
      {
        "productId": "PRD029",
        "productName": "Drumstick",
        "unit": "Bags",
        "totalQuantity": 5,
        "unitPrice": 550,
        "totalCost": 2750,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 5,
          "allocated": 5,
          "received": 5
          }
        ]
      },
      {
        "productId": "PRD031",
        "productName": "Lemon Standard",
        "unit": "Bags",
        "totalQuantity": 12,
        "unitPrice": 650,
        "totalCost": 7800,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 12,
          "allocated": 12,
          "received": 12
          }
        ]
      },
      {
        "productId": "PRD034",
        "productName": "Arvi",
        "unit": "Bags",
        "totalQuantity": 4,
        "unitPrice": 750,
        "totalCost": 3000,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 4,
          "allocated": 4,
          "received": 4
          }
        ]
      },
      {
        "productId": "PRD045",
        "productName": "Coriander (Kothmir)",
        "unit": "Bunches",
        "totalQuantity": 11,
        "unitPrice": 25,
        "totalCost": 275,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 11,
          "allocated": 11,
          "received": 11
          }
        ]
      },
      {
        "productId": "PRD194",
        "productName": "Naati",
        "unit": "Bunches",
        "totalQuantity": 3,
        "unitPrice": 15,
        "totalCost": 45,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 3,
          "allocated": 3,
          "received": 3
          }
        ]
      },
      {
        "productId": "PRD042",
        "productName": "Pudina (Mint)",
        "unit": "Bunches",
        "totalQuantity": 10,
        "unitPrice": 25,
        "totalCost": 250,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 10,
          "allocated": 10,
          "received": 10
          }
        ]
      },
      {
        "productId": "PRD041",
        "productName": "Curry Leaf",
        "unit": "Bunches",
        "totalQuantity": 17,
        "unitPrice": 25,
        "totalCost": 425,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 17,
          "allocated": 17,
          "received": 17
          }
        ]
      },
      {
        "productId": "PRD043",
        "productName": "Palak (Spinach)",
        "unit": "Bunches",
        "totalQuantity": 9,
        "unitPrice": 25,
        "totalCost": 225,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 9,
          "allocated": 9,
          "received": 9
          }
        ]
      },
      {
        "productId": "PRD044",
        "productName": "Methi (Fenugreek)",
        "unit": "Bunches",
        "totalQuantity": 16,
        "unitPrice": 25,
        "totalCost": 400,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 16,
          "allocated": 16,
          "received": 16
          }
        ]
      },
      {
        "productId": "PRD046",
        "productName": "Spring Onion",
        "unit": "Bunches",
        "totalQuantity": 8,
        "unitPrice": 28,
        "totalCost": 224,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 8,
          "allocated": 8,
          "received": 8
          }
        ]
      },
      {
        "productId": "PRD195",
        "productName": "Sabakki",
        "unit": "Bunches",
        "totalQuantity": 15,
        "unitPrice": 15,
        "totalCost": 225,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 15,
          "allocated": 15,
          "received": 15
          }
        ]
      },
      {
        "productId": "PRD143",
        "productName": "S POTATO",
        "unit": "Kg",
        "totalQuantity": 7,
        "unitPrice": 45,
        "totalCost": 315,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 7,
          "allocated": 7,
          "received": 7
          }
        ]
      },
      {
        "productId": "PRD085",
        "productName": "Apple Premium",
        "unit": "Crates",
        "totalQuantity": 14,
        "unitPrice": 2100,
        "totalCost": 29400,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 14,
          "allocated": 14,
          "received": 14
          }
        ]
      },
      {
        "productId": "PRD097",
        "productName": "Muskmelon Farm",
        "unit": "Crates",
        "totalQuantity": 6,
        "unitPrice": 600,
        "totalCost": 3600,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 6,
          "allocated": 6,
          "received": 6
          }
        ]
      },
      {
        "productId": "PRD218",
        "productName": "Muskmelon Nati",
        "unit": "Crates",
        "totalQuantity": 13,
        "unitPrice": 650,
        "totalCost": 8450,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 13,
          "allocated": 13,
          "received": 13
          }
        ]
      },
      {
        "productId": "PRD196",
        "productName": "Pink Lady",
        "unit": "Crates",
        "totalQuantity": 5,
        "unitPrice": 1850,
        "totalCost": 9250,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 5,
          "allocated": 5,
          "received": 5
          }
        ]
      },
      {
        "productId": "PRD174",
        "productName": "Persimmon Fruit",
        "unit": "Boxes",
        "totalQuantity": 12,
        "unitPrice": 850,
        "totalCost": 10200,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 12,
          "allocated": 12,
          "received": 12
          }
        ]
      },
      {
        "productId": "PRD073",
        "productName": "Apple Green (Granny Smith)",
        "unit": "Crates",
        "totalQuantity": 4,
        "unitPrice": 2100,
        "totalCost": 8400,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 4,
          "allocated": 4,
          "received": 4
          }
        ]
      },
      {
        "productId": "PRD075",
        "productName": "Apple Royal Gala",
        "unit": "Crates",
        "totalQuantity": 11,
        "unitPrice": 2100,
        "totalCost": 23100,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 11,
          "allocated": 11,
          "received": 11
          }
        ]
      },
      {
        "productId": "PRD072",
        "productName": "Apple China Fuji",
        "unit": "Crates",
        "totalQuantity": 3,
        "unitPrice": 2100,
        "totalCost": 6300,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 3,
          "allocated": 3,
          "received": 3
          }
        ]
      },
      {
        "productId": "PRD090",
        "productName": "Pear Green",
        "unit": "Boxes",
        "totalQuantity": 10,
        "unitPrice": 1450,
        "totalCost": 14500,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 10,
          "allocated": 10,
          "received": 10
          }
        ]
      },
      {
        "productId": "PRD091",
        "productName": "Golden Pear",
        "unit": "Boxes",
        "totalQuantity": 17,
        "unitPrice": 1450,
        "totalCost": 24650,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 17,
          "allocated": 17,
          "received": 17
          }
        ]
      },
      {
        "productId": "PRD084",
        "productName": "Kiwi Fruit",
        "unit": "Boxes",
        "totalQuantity": 9,
        "unitPrice": 850,
        "totalCost": 7650,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 9,
          "allocated": 9,
          "received": 9
          }
        ]
      },
      {
        "productId": "PRD166",
        "productName": "Chiku (Sapota)",
        "unit": "Crates",
        "totalQuantity": 16,
        "unitPrice": 650,
        "totalCost": 10400,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 16,
          "allocated": 16,
          "received": 16
          }
        ]
      },
      {
        "productId": "PRD081",
        "productName": "Grapes Green Thompson",
        "unit": "Crates",
        "totalQuantity": 8,
        "unitPrice": 1200,
        "totalCost": 9600,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 8,
          "allocated": 8,
          "received": 8
          }
        ]
      },
      {
        "productId": "PRD080",
        "productName": "Grapes Black Seedless",
        "unit": "Crates",
        "totalQuantity": 15,
        "unitPrice": 1200,
        "totalCost": 18000,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 15,
          "allocated": 15,
          "received": 15
          }
        ]
      },
      {
        "productId": "PRD079",
        "productName": "Grapes Red Globe Imported",
        "unit": "Crates",
        "totalQuantity": 7,
        "unitPrice": 1200,
        "totalCost": 8400,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 7,
          "allocated": 7,
          "received": 7
          }
        ]
      },
      {
        "productId": "PRD077",
        "productName": "Anar (Pomegranate)",
        "unit": "Boxes",
        "totalQuantity": 14,
        "unitPrice": 1650,
        "totalCost": 23100,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 14,
          "allocated": 14,
          "received": 14
          }
        ]
      },
      {
        "productId": "PRD197",
        "productName": "Pomegranate Big",
        "unit": "Boxes",
        "totalQuantity": 6,
        "unitPrice": 1400,
        "totalCost": 8400,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 6,
          "allocated": 6,
          "received": 6
          }
        ]
      },
      {
        "productId": "PRD099",
        "productName": "Butter Fruit (Avocado)",
        "unit": "Crates",
        "totalQuantity": 13,
        "unitPrice": 1500,
        "totalCost": 19500,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 13,
          "allocated": 13,
          "received": 13
          }
        ]
      },
      {
        "productId": "PRD173",
        "productName": "Dragon Fruit Red",
        "unit": "Boxes",
        "totalQuantity": 5,
        "unitPrice": 900,
        "totalCost": 4500,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 5,
          "allocated": 5,
          "received": 5
          }
        ]
      },
      {
        "productId": "PRD198",
        "productName": "Dragon Fruit White",
        "unit": "Boxes",
        "totalQuantity": 12,
        "unitPrice": 1100,
        "totalCost": 13200,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 12,
          "allocated": 12,
          "received": 12
          }
        ]
      },
      {
        "productId": "PRD104",
        "productName": "Madrin",
        "unit": "Crates",
        "totalQuantity": 4,
        "unitPrice": 1350,
        "totalCost": 5400,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 4,
          "allocated": 4,
          "received": 4
          }
        ]
      },
      {
        "productId": "PRD101",
        "productName": "Guava (Allahabad Safeda)",
        "unit": "Crates",
        "totalQuantity": 11,
        "unitPrice": 650,
        "totalCost": 7150,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 11,
          "allocated": 11,
          "received": 11
          }
        ]
      },
      {
        "productId": "PRD199",
        "productName": "Nati Gauva",
        "unit": "Crates",
        "totalQuantity": 3,
        "unitPrice": 550,
        "totalCost": 1650,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 3,
          "allocated": 3,
          "received": 3
          }
        ]
      },
      {
        "productId": "PRD094",
        "productName": "Apple Premium",
        "unit": "Crates",
        "totalQuantity": 10,
        "unitPrice": 2100,
        "totalCost": 21000,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 10,
          "allocated": 10,
          "received": 10
          }
        ]
      },
      {
        "productId": "PRD179",
        "productName": "CITRUS",
        "unit": "Kg",
        "totalQuantity": 17,
        "unitPrice": 45,
        "totalCost": 765,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 17,
          "allocated": 17,
          "received": 17
          }
        ]
      },
      {
        "productId": "PRD074",
        "productName": "Apple Premium",
        "unit": "Crates",
        "totalQuantity": 9,
        "unitPrice": 2100,
        "totalCost": 18900,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 9,
          "allocated": 9,
          "received": 9
          }
        ]
      },
      {
        "productId": "PRD076",
        "productName": "Mosambi Sweet Lime",
        "unit": "Bags",
        "totalQuantity": 16,
        "unitPrice": 1100,
        "totalCost": 17600,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 16,
          "allocated": 16,
          "received": 16
          }
        ]
      },
      {
        "productId": "PRD180",
        "productName": "MADRIN",
        "unit": "Kg",
        "totalQuantity": 8,
        "unitPrice": 45,
        "totalCost": 360,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 8,
          "allocated": 8,
          "received": 8
          }
        ]
      },
      {
        "productId": "PRD200",
        "productName": "Malda",
        "unit": "Crates",
        "totalQuantity": 15,
        "unitPrice": 950,
        "totalCost": 14250,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 15,
          "allocated": 15,
          "received": 15
          }
        ]
      },
      {
        "productId": "PRD201",
        "productName": "Kashmiri Apple",
        "unit": "Crates",
        "totalQuantity": 7,
        "unitPrice": 1650,
        "totalCost": 11550,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 7,
          "allocated": 7,
          "received": 7
          }
        ]
      },
      {
        "productId": "PRD070",
        "productName": "Apple Indian (Shimla)",
        "unit": "Crates",
        "totalQuantity": 14,
        "unitPrice": 2100,
        "totalCost": 29400,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 14,
          "allocated": 14,
          "received": 14
          }
        ]
      },
      {
        "productId": "PRD202",
        "productName": "Misri Apple",
        "unit": "Crates",
        "totalQuantity": 6,
        "unitPrice": 1700,
        "totalCost": 10200,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 6,
          "allocated": 6,
          "received": 6
          }
        ]
      },
      {
        "productId": "PRD203",
        "productName": "Ooty Apple",
        "unit": "Crates",
        "totalQuantity": 13,
        "unitPrice": 1600,
        "totalCost": 20800,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 13,
          "allocated": 13,
          "received": 13
          }
        ]
      },
      {
        "productId": "PRD078",
        "productName": "Papaya Ripe (Red Lady)",
        "unit": "Crates",
        "totalQuantity": 5,
        "unitPrice": 650,
        "totalCost": 3250,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 5,
          "allocated": 5,
          "received": 5
          }
        ]
      },
      {
        "productId": "PRD086",
        "productName": "Banana Yellaki",
        "unit": "Bunches",
        "totalQuantity": 12,
        "unitPrice": 450,
        "totalCost": 5400,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 12,
          "allocated": 12,
          "received": 12
          }
        ]
      },
      {
        "productId": "PRD092",
        "productName": "Banana Robusta",
        "unit": "Bunches",
        "totalQuantity": 4,
        "unitPrice": 450,
        "totalCost": 1800,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 4,
          "allocated": 4,
          "received": 4
          }
        ]
      },
      {
        "productId": "PRD088",
        "productName": "Watermelon Normal",
        "unit": "Kg",
        "totalQuantity": 11,
        "unitPrice": 22,
        "totalCost": 242,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 11,
          "allocated": 11,
          "received": 11
          }
        ]
      },
      {
        "productId": "PRD089",
        "productName": "Watermelon Stripes",
        "unit": "Kg",
        "totalQuantity": 3,
        "unitPrice": 22,
        "totalCost": 66,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 3,
          "allocated": 3,
          "received": 3
          }
        ]
      },
      {
        "productId": "PRD087",
        "productName": "Banana Nendran",
        "unit": "Bunches",
        "totalQuantity": 10,
        "unitPrice": 450,
        "totalCost": 4500,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 10,
          "allocated": 10,
          "received": 10
          }
        ]
      },
      {
        "productId": "PRD093",
        "productName": "Red Banana",
        "unit": "Bunches",
        "totalQuantity": 17,
        "unitPrice": 450,
        "totalCost": 7650,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 17,
          "allocated": 17,
          "received": 17
          }
        ]
      },
      {
        "productId": "PRD112",
        "productName": "Mango Banganapalli",
        "unit": "Crates",
        "totalQuantity": 9,
        "unitPrice": 2200,
        "totalCost": 19800,
        "allocations": [
          {
            "branchId": "BR002",
            "branch": "Kodihalli",
            "qty": 9,
          "allocated": 9,
          "received": 9
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
  },
  {
    "id": "PO-20261003-LBS01",
    "supplierName": "K.R. Market & APMC Fruit-Veg Terminal (LBS Nagar)",
    "date": "03 Oct 2026",
    "time": "06:45 AM",
    "totalAmount": 835114,
    "source": "DAILY_STOCK_CHECK_LBS_DISPATCH",
    "manifestReference": "LBS-MORNING-DISPATCH-01",
    "items": [
      {
        "productId": "PRD005",
        "productName": "Green Beans",
        "unit": "Bags",
        "totalQuantity": 3,
        "unitPrice": 900,
        "totalCost": 2700,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 3,
          "allocated": 3,
          "received": 3
          }
        ]
      },
      {
        "productId": "PRD004",
        "productName": "Carrot",
        "unit": "Bags",
        "totalQuantity": 10,
        "unitPrice": 850,
        "totalCost": 8500,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 10,
          "allocated": 10,
          "received": 10
          }
        ]
      },
      {
        "productId": "PRD023",
        "productName": "Cucumber Local",
        "unit": "Crates",
        "totalQuantity": 17,
        "unitPrice": 450,
        "totalCost": 7650,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 17,
          "allocated": 17,
          "received": 17
          }
        ]
      },
      {
        "productId": "PRD057",
        "productName": "Beetroot",
        "unit": "Bags",
        "totalQuantity": 9,
        "unitPrice": 750,
        "totalCost": 6750,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 9,
          "allocated": 9,
          "received": 9
          }
        ]
      },
      {
        "productId": "PRD032",
        "productName": "Cauliflower",
        "unit": "Crates",
        "totalQuantity": 16,
        "unitPrice": 600,
        "totalCost": 9600,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 16,
          "allocated": 16,
          "received": 16
          }
        ]
      },
      {
        "productId": "PRD022",
        "productName": "Cabbage Green",
        "unit": "Bags",
        "totalQuantity": 8,
        "unitPrice": 420,
        "totalCost": 3360,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 8,
          "allocated": 8,
          "received": 8
          }
        ]
      },
      {
        "productId": "PRD028",
        "productName": "Green Chilli",
        "unit": "Crates",
        "totalQuantity": 15,
        "unitPrice": 650,
        "totalCost": 9750,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 15,
          "allocated": 15,
          "received": 15
          }
        ]
      },
      {
        "productId": "PRD192",
        "productName": "Big Chilli",
        "unit": "Crates",
        "totalQuantity": 7,
        "unitPrice": 620,
        "totalCost": 4340,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 7,
          "allocated": 7,
          "received": 7
          }
        ]
      },
      {
        "productId": "PRD009",
        "productName": "Green Peas",
        "unit": "Bags",
        "totalQuantity": 14,
        "unitPrice": 1400,
        "totalCost": 19600,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 14,
          "allocated": 14,
          "received": 14
          }
        ]
      },
      {
        "productId": "PRD125",
        "productName": "Parval (Pointed Gourd)",
        "unit": "Crates",
        "totalQuantity": 6,
        "unitPrice": 650,
        "totalCost": 3900,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 6,
          "allocated": 6,
          "received": 6
          }
        ]
      },
      {
        "productId": "PRD019",
        "productName": "Lauki (Bottle Gourd)",
        "unit": "Bags",
        "totalQuantity": 13,
        "unitPrice": 400,
        "totalCost": 5200,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 13,
          "allocated": 13,
          "received": 13
          }
        ]
      },
      {
        "productId": "PRD012",
        "productName": "Radish White",
        "unit": "Bags",
        "totalQuantity": 5,
        "unitPrice": 480,
        "totalCost": 2400,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 5,
          "allocated": 5,
          "received": 5
          }
        ]
      },
      {
        "productId": "PRD014",
        "productName": "Small Brinjal Green",
        "unit": "Crates",
        "totalQuantity": 12,
        "unitPrice": 480,
        "totalCost": 5760,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 12,
          "allocated": 12,
          "received": 12
          }
        ]
      },
      {
        "productId": "PRD188",
        "productName": "Small Brinjal Purple",
        "unit": "Crates",
        "totalQuantity": 4,
        "unitPrice": 500,
        "totalCost": 2000,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 4,
          "allocated": 4,
          "received": 4
          }
        ]
      },
      {
        "productId": "PRD011",
        "productName": "Nookkol",
        "unit": "Bags",
        "totalQuantity": 11,
        "unitPrice": 520,
        "totalCost": 5720,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 11,
          "allocated": 11,
          "received": 11
          }
        ]
      },
      {
        "productId": "PRD183",
        "productName": "Small Karela (S.Karela)",
        "unit": "Crates",
        "totalQuantity": 3,
        "unitPrice": 600,
        "totalCost": 1800,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 3,
          "allocated": 3,
          "received": 3
          }
        ]
      },
      {
        "productId": "PRD020",
        "productName": "Bitter Gourd",
        "unit": "Crates",
        "totalQuantity": 10,
        "unitPrice": 600,
        "totalCost": 6000,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 10,
          "allocated": 10,
          "received": 10
          }
        ]
      },
      {
        "productId": "PRD006",
        "productName": "Ladies Finger",
        "unit": "Crates",
        "totalQuantity": 17,
        "unitPrice": 650,
        "totalCost": 11050,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 17,
          "allocated": 17,
          "received": 17
          }
        ]
      },
      {
        "productId": "PRD049",
        "productName": "Ridge Gourd (Hirekayi)",
        "unit": "Bags",
        "totalQuantity": 9,
        "unitPrice": 500,
        "totalCost": 4500,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 9,
          "allocated": 9,
          "received": 9
          }
        ]
      },
      {
        "productId": "PRD021",
        "productName": "Capsicum Green",
        "unit": "Crates",
        "totalQuantity": 16,
        "unitPrice": 700,
        "totalCost": 11200,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 16,
          "allocated": 16,
          "received": 16
          }
        ]
      },
      {
        "productId": "PRD027",
        "productName": "Ginger",
        "unit": "Bags",
        "totalQuantity": 8,
        "unitPrice": 1600,
        "totalCost": 12800,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 8,
          "allocated": 8,
          "received": 8
          }
        ]
      },
      {
        "productId": "PRD204",
        "productName": "Ginger Old",
        "unit": "Bags",
        "totalQuantity": 15,
        "unitPrice": 1800,
        "totalCost": 27000,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 15,
          "allocated": 15,
          "received": 15
          }
        ]
      },
      {
        "productId": "PRD024",
        "productName": "Raw Banana (Cooking)",
        "unit": "Bunches",
        "totalQuantity": 7,
        "unitPrice": 350,
        "totalCost": 2450,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 7,
          "allocated": 7,
          "received": 7
          }
        ]
      },
      {
        "productId": "PRD030",
        "productName": "Raw Green Papaya",
        "unit": "Crates",
        "totalQuantity": 14,
        "unitPrice": 650,
        "totalCost": 9100,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 14,
          "allocated": 14,
          "received": 14
          }
        ]
      },
      {
        "productId": "PRD051",
        "productName": "Banana Stem",
        "unit": "Pieces",
        "totalQuantity": 6,
        "unitPrice": 25,
        "totalCost": 150,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 6,
          "allocated": 6,
          "received": 6
          }
        ]
      },
      {
        "productId": "PRD060",
        "productName": "Banana Flower (Vazhaipoo)",
        "unit": "Pieces",
        "totalQuantity": 13,
        "unitPrice": 30,
        "totalCost": 390,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 13,
          "allocated": 13,
          "received": 13
          }
        ]
      },
      {
        "productId": "PRD054",
        "productName": "English Cucumber",
        "unit": "Crates",
        "totalQuantity": 5,
        "unitPrice": 450,
        "totalCost": 2250,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 5,
          "allocated": 5,
          "received": 5
          }
        ]
      },
      {
        "productId": "PRD143",
        "productName": "S POTATO",
        "unit": "Kg",
        "totalQuantity": 12,
        "unitPrice": 45,
        "totalCost": 540,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 12,
          "allocated": 12,
          "received": 12
          }
        ]
      },
      {
        "productId": "PRD172",
        "productName": "Tapioca (Kappa / Cassava)",
        "unit": "Bags",
        "totalQuantity": 4,
        "unitPrice": 650,
        "totalCost": 2600,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 4,
          "allocated": 4,
          "received": 4
          }
        ]
      },
      {
        "productId": "PRD029",
        "productName": "Drumstick",
        "unit": "Bags",
        "totalQuantity": 11,
        "unitPrice": 550,
        "totalCost": 6050,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 11,
          "allocated": 11,
          "received": 11
          }
        ]
      },
      {
        "productId": "PRD017",
        "productName": "Amla",
        "unit": "Kg",
        "totalQuantity": 3,
        "unitPrice": 60,
        "totalCost": 180,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 3,
          "allocated": 3,
          "received": 3
          }
        ]
      },
      {
        "productId": "PRD189",
        "productName": "Long Brinjal Purple",
        "unit": "Crates",
        "totalQuantity": 10,
        "unitPrice": 520,
        "totalCost": 5200,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 10,
          "allocated": 10,
          "received": 10
          }
        ]
      },
      {
        "productId": "PRD015",
        "productName": "Long Brinjal Green",
        "unit": "Crates",
        "totalQuantity": 17,
        "unitPrice": 480,
        "totalCost": 8160,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 17,
          "allocated": 17,
          "received": 17
          }
        ]
      },
      {
        "productId": "PRD058",
        "productName": "Bhajji Chilly",
        "unit": "Crates",
        "totalQuantity": 9,
        "unitPrice": 650,
        "totalCost": 5850,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 9,
          "allocated": 9,
          "received": 9
          }
        ]
      },
      {
        "productId": "PRD205",
        "productName": "Bharta Black",
        "unit": "Crates",
        "totalQuantity": 16,
        "unitPrice": 550,
        "totalCost": 8800,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 16,
          "allocated": 16,
          "received": 16
          }
        ]
      },
      {
        "productId": "PRD016",
        "productName": "Bharta Green",
        "unit": "Crates",
        "totalQuantity": 8,
        "unitPrice": 480,
        "totalCost": 3840,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 8,
          "allocated": 8,
          "received": 8
          }
        ]
      },
      {
        "productId": "PRD047",
        "productName": "Yellow Pumpkin",
        "unit": "Bags",
        "totalQuantity": 15,
        "unitPrice": 550,
        "totalCost": 8250,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 15,
          "allocated": 15,
          "received": 15
          }
        ]
      },
      {
        "productId": "PRD048",
        "productName": "White Pumpkin (Ash Gourd)",
        "unit": "Bags",
        "totalQuantity": 7,
        "unitPrice": 550,
        "totalCost": 3850,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 7,
          "allocated": 7,
          "received": 7
          }
        ]
      },
      {
        "productId": "PRD052",
        "productName": "Elephant Foot Yam (Suran)",
        "unit": "Bags",
        "totalQuantity": 14,
        "unitPrice": 900,
        "totalCost": 12600,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 14,
          "allocated": 14,
          "received": 14
          }
        ]
      },
      {
        "productId": "PRD031",
        "productName": "Lemon Standard",
        "unit": "Bags",
        "totalQuantity": 6,
        "unitPrice": 650,
        "totalCost": 3900,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 6,
          "allocated": 6,
          "received": 6
          }
        ]
      },
      {
        "productId": "PRD035",
        "productName": "Small Onion (Shallots)",
        "unit": "Bags",
        "totalQuantity": 13,
        "unitPrice": 1450,
        "totalCost": 18850,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 13,
          "allocated": 13,
          "received": 13
          }
        ]
      },
      {
        "productId": "PRD033",
        "productName": "Sambar Cucumber",
        "unit": "Crates",
        "totalQuantity": 5,
        "unitPrice": 450,
        "totalCost": 2250,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 5,
          "allocated": 5,
          "received": 5
          }
        ]
      },
      {
        "productId": "PRD193",
        "productName": "Kandrela",
        "unit": "Kg",
        "totalQuantity": 12,
        "unitPrice": 90,
        "totalCost": 1080,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 12,
          "allocated": 12,
          "received": 12
          }
        ]
      },
      {
        "productId": "PRD206",
        "productName": "Round Loki",
        "unit": "Bags",
        "totalQuantity": 4,
        "unitPrice": 420,
        "totalCost": 1680,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 4,
          "allocated": 4,
          "received": 4
          }
        ]
      },
      {
        "productId": "PRD156",
        "productName": "Turmeric Raw (Haldi)",
        "unit": "Kg",
        "totalQuantity": 11,
        "unitPrice": 90,
        "totalCost": 990,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 11,
          "allocated": 11,
          "received": 11
          }
        ]
      },
      {
        "productId": "PRD034",
        "productName": "Arvi",
        "unit": "Bags",
        "totalQuantity": 3,
        "unitPrice": 750,
        "totalCost": 2250,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 3,
          "allocated": 3,
          "received": 3
          }
        ]
      },
      {
        "productId": "PRD169",
        "productName": "Matki Falli (Moth Pods)",
        "unit": "Kg",
        "totalQuantity": 10,
        "unitPrice": 65,
        "totalCost": 650,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 10,
          "allocated": 10,
          "received": 10
          }
        ]
      },
      {
        "productId": "PRD170",
        "productName": "Sem",
        "unit": "Kg",
        "totalQuantity": 17,
        "unitPrice": 55,
        "totalCost": 935,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 17,
          "allocated": 17,
          "received": 17
          }
        ]
      },
      {
        "productId": "PRD053",
        "productName": "Avarakkai",
        "unit": "Kg",
        "totalQuantity": 9,
        "unitPrice": 55,
        "totalCost": 495,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 9,
          "allocated": 9,
          "received": 9
          }
        ]
      },
      {
        "productId": "PRD037",
        "productName": "Kovakkai / Kundru (Tindora)",
        "unit": "Crates",
        "totalQuantity": 16,
        "unitPrice": 550,
        "totalCost": 8800,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 16,
          "allocated": 16,
          "received": 16
          }
        ]
      },
      {
        "productId": "PRD008",
        "productName": "Long Beans",
        "unit": "Kg",
        "totalQuantity": 8,
        "unitPrice": 50,
        "totalCost": 400,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 8,
          "allocated": 8,
          "received": 8
          }
        ]
      },
      {
        "productId": "PRD066",
        "productName": "Double Beans (Lima)",
        "unit": "Kg",
        "totalQuantity": 15,
        "unitPrice": 80,
        "totalCost": 1200,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 15,
          "allocated": 15,
          "received": 15
          }
        ]
      },
      {
        "productId": "PRD018",
        "productName": "Avarakkai",
        "unit": "Kg",
        "totalQuantity": 7,
        "unitPrice": 55,
        "totalCost": 385,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 7,
          "allocated": 7,
          "received": 7
          }
        ]
      },
      {
        "productId": "PRD010",
        "productName": "Chow Chow",
        "unit": "Bags",
        "totalQuantity": 14,
        "unitPrice": 450,
        "totalCost": 6300,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 14,
          "allocated": 14,
          "received": 14
          }
        ]
      },
      {
        "productId": "PRD176",
        "productName": "Karamani (Cowpea Pods)",
        "unit": "Kg",
        "totalQuantity": 6,
        "unitPrice": 65,
        "totalCost": 390,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 6,
          "allocated": 6,
          "received": 6
          }
        ]
      },
      {
        "productId": "PRD038",
        "productName": "Snake Gourd (Padavalakai)",
        "unit": "Bags",
        "totalQuantity": 13,
        "unitPrice": 420,
        "totalCost": 5460,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 13,
          "allocated": 13,
          "received": 13
          }
        ]
      },
      {
        "productId": "PRD207",
        "productName": "Bhajji Chilly",
        "unit": "Bunches",
        "totalQuantity": 5,
        "unitPrice": 15,
        "totalCost": 75,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 5,
          "allocated": 5,
          "received": 5
          }
        ]
      },
      {
        "productId": "PRD045",
        "productName": "Coriander (Kothmir)",
        "unit": "Bunches",
        "totalQuantity": 12,
        "unitPrice": 25,
        "totalCost": 300,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 12,
          "allocated": 12,
          "received": 12
          }
        ]
      },
      {
        "productId": "PRD042",
        "productName": "Pudina (Mint)",
        "unit": "Bunches",
        "totalQuantity": 4,
        "unitPrice": 25,
        "totalCost": 100,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 4,
          "allocated": 4,
          "received": 4
          }
        ]
      },
      {
        "productId": "PRD041",
        "productName": "Curry Leaf",
        "unit": "Bunches",
        "totalQuantity": 11,
        "unitPrice": 25,
        "totalCost": 275,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 11,
          "allocated": 11,
          "received": 11
          }
        ]
      },
      {
        "productId": "PRD003",
        "productName": "Tomato",
        "unit": "Crates",
        "totalQuantity": 3,
        "unitPrice": 550,
        "totalCost": 1650,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 3,
          "allocated": 3,
          "received": 3
          }
        ]
      },
      {
        "productId": "PRD185",
        "productName": "N TOMATO",
        "unit": "Kg",
        "totalQuantity": 10,
        "unitPrice": 45,
        "totalCost": 450,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 10,
          "allocated": 10,
          "received": 10
          }
        ]
      },
      {
        "productId": "PRD092",
        "productName": "Banana Robusta",
        "unit": "Bunches",
        "totalQuantity": 17,
        "unitPrice": 450,
        "totalCost": 7650,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 17,
          "allocated": 17,
          "received": 17
          }
        ]
      },
      {
        "productId": "PRD079",
        "productName": "Grapes Red Globe Imported",
        "unit": "Crates",
        "totalQuantity": 9,
        "unitPrice": 1200,
        "totalCost": 10800,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 9,
          "allocated": 9,
          "received": 9
          }
        ]
      },
      {
        "productId": "PRD075",
        "productName": "Apple Royal Gala",
        "unit": "Crates",
        "totalQuantity": 16,
        "unitPrice": 2100,
        "totalCost": 33600,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 16,
          "allocated": 16,
          "received": 16
          }
        ]
      },
      {
        "productId": "PRD196",
        "productName": "Pink Lady",
        "unit": "Crates",
        "totalQuantity": 8,
        "unitPrice": 1850,
        "totalCost": 14800,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 8,
          "allocated": 8,
          "received": 8
          }
        ]
      },
      {
        "productId": "PRD208",
        "productName": "Turkey Apple",
        "unit": "Crates",
        "totalQuantity": 15,
        "unitPrice": 1750,
        "totalCost": 26250,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 15,
          "allocated": 15,
          "received": 15
          }
        ]
      },
      {
        "productId": "PRD071",
        "productName": "Apple Washington",
        "unit": "Crates",
        "totalQuantity": 7,
        "unitPrice": 2100,
        "totalCost": 14700,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 7,
          "allocated": 7,
          "received": 7
          }
        ]
      },
      {
        "productId": "PRD209",
        "productName": "Rocket Apple",
        "unit": "Boxes",
        "totalQuantity": 14,
        "unitPrice": 1950,
        "totalCost": 27300,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 14,
          "allocated": 14,
          "received": 14
          }
        ]
      },
      {
        "productId": "PRD210",
        "productName": "Alibinder",
        "unit": "Crates",
        "totalQuantity": 6,
        "unitPrice": 1800,
        "totalCost": 10800,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 6,
          "allocated": 6,
          "received": 6
          }
        ]
      },
      {
        "productId": "PRD073",
        "productName": "Apple Green (Granny Smith)",
        "unit": "Crates",
        "totalQuantity": 13,
        "unitPrice": 2100,
        "totalCost": 27300,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 13,
          "allocated": 13,
          "received": 13
          }
        ]
      },
      {
        "productId": "PRD211",
        "productName": "Iran Apple",
        "unit": "Crates",
        "totalQuantity": 5,
        "unitPrice": 1600,
        "totalCost": 8000,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 5,
          "allocated": 5,
          "received": 5
          }
        ]
      },
      {
        "productId": "PRD201",
        "productName": "Kashmiri Apple",
        "unit": "Crates",
        "totalQuantity": 12,
        "unitPrice": 1650,
        "totalCost": 19800,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 12,
          "allocated": 12,
          "received": 12
          }
        ]
      },
      {
        "productId": "PRD070",
        "productName": "Apple Indian (Shimla)",
        "unit": "Crates",
        "totalQuantity": 4,
        "unitPrice": 2100,
        "totalCost": 8400,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 4,
          "allocated": 4,
          "received": 4
          }
        ]
      },
      {
        "productId": "PRD202",
        "productName": "Misri Apple",
        "unit": "Crates",
        "totalQuantity": 11,
        "unitPrice": 1700,
        "totalCost": 18700,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 11,
          "allocated": 11,
          "received": 11
          }
        ]
      },
      {
        "productId": "PRD090",
        "productName": "Pear Green",
        "unit": "Boxes",
        "totalQuantity": 3,
        "unitPrice": 1450,
        "totalCost": 4350,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 3,
          "allocated": 3,
          "received": 3
          }
        ]
      },
      {
        "productId": "PRD091",
        "productName": "Golden Pear",
        "unit": "Boxes",
        "totalQuantity": 10,
        "unitPrice": 1450,
        "totalCost": 14500,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 10,
          "allocated": 10,
          "received": 10
          }
        ]
      },
      {
        "productId": "PRD174",
        "productName": "Persimmon Fruit",
        "unit": "Boxes",
        "totalQuantity": 17,
        "unitPrice": 850,
        "totalCost": 14450,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 17,
          "allocated": 17,
          "received": 17
          }
        ]
      },
      {
        "productId": "PRD084",
        "productName": "Kiwi Fruit",
        "unit": "Boxes",
        "totalQuantity": 9,
        "unitPrice": 850,
        "totalCost": 7650,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 9,
          "allocated": 9,
          "received": 9
          }
        ]
      },
      {
        "productId": "PRD099",
        "productName": "Butter Fruit (Avocado)",
        "unit": "Crates",
        "totalQuantity": 16,
        "unitPrice": 1500,
        "totalCost": 24000,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 16,
          "allocated": 16,
          "received": 16
          }
        ]
      },
      {
        "productId": "PRD212",
        "productName": "Butter Fruit Imported",
        "unit": "Crates",
        "totalQuantity": 8,
        "unitPrice": 2200,
        "totalCost": 17600,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 8,
          "allocated": 8,
          "received": 8
          }
        ]
      },
      {
        "productId": "PRD080",
        "productName": "Grapes Black Seedless",
        "unit": "Crates",
        "totalQuantity": 15,
        "unitPrice": 1200,
        "totalCost": 18000,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 15,
          "allocated": 15,
          "received": 15
          }
        ]
      },
      {
        "productId": "PRD213",
        "productName": "Black Grapes Imported",
        "unit": "Crates",
        "totalQuantity": 7,
        "unitPrice": 1400,
        "totalCost": 9800,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 7,
          "allocated": 7,
          "received": 7
          }
        ]
      },
      {
        "productId": "PRD081",
        "productName": "Grapes Green Thompson",
        "unit": "Crates",
        "totalQuantity": 14,
        "unitPrice": 1200,
        "totalCost": 16800,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 14,
          "allocated": 14,
          "received": 14
          }
        ]
      },
      {
        "productId": "PRD097",
        "productName": "Muskmelon Farm",
        "unit": "Crates",
        "totalQuantity": 6,
        "unitPrice": 600,
        "totalCost": 3600,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 6,
          "allocated": 6,
          "received": 6
          }
        ]
      },
      {
        "productId": "PRD218",
        "productName": "Muskmelon Nati",
        "unit": "Crates",
        "totalQuantity": 13,
        "unitPrice": 650,
        "totalCost": 8450,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 13,
          "allocated": 13,
          "received": 13
          }
        ]
      },
      {
        "productId": "PRD166",
        "productName": "Chiku (Sapota)",
        "unit": "Crates",
        "totalQuantity": 5,
        "unitPrice": 650,
        "totalCost": 3250,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 5,
          "allocated": 5,
          "received": 5
          }
        ]
      },
      {
        "productId": "PRD157",
        "productName": "BAERY",
        "unit": "Kg",
        "totalQuantity": 12,
        "unitPrice": 45,
        "totalCost": 540,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 12,
          "allocated": 12,
          "received": 12
          }
        ]
      },
      {
        "productId": "PRD076",
        "productName": "Mosambi Sweet Lime",
        "unit": "Bags",
        "totalQuantity": 4,
        "unitPrice": 1100,
        "totalCost": 4400,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 4,
          "allocated": 4,
          "received": 4
          }
        ]
      },
      {
        "productId": "PRD104",
        "productName": "Madrin",
        "unit": "Crates",
        "totalQuantity": 11,
        "unitPrice": 1350,
        "totalCost": 14850,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 11,
          "allocated": 11,
          "received": 11
          }
        ]
      },
      {
        "productId": "PRD173",
        "productName": "Dragon Fruit Red",
        "unit": "Boxes",
        "totalQuantity": 3,
        "unitPrice": 900,
        "totalCost": 2700,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 3,
          "allocated": 3,
          "received": 3
          }
        ]
      },
      {
        "productId": "PRD198",
        "productName": "Dragon Fruit White",
        "unit": "Boxes",
        "totalQuantity": 10,
        "unitPrice": 1100,
        "totalCost": 11000,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 10,
          "allocated": 10,
          "received": 10
          }
        ]
      },
      {
        "productId": "PRD214",
        "productName": "Logan",
        "unit": "Boxes",
        "totalQuantity": 17,
        "unitPrice": 1250,
        "totalCost": 21250,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 17,
          "allocated": 17,
          "received": 17
          }
        ]
      },
      {
        "productId": "PRD197",
        "productName": "Pomegranate Big",
        "unit": "Boxes",
        "totalQuantity": 9,
        "unitPrice": 1400,
        "totalCost": 12600,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 9,
          "allocated": 9,
          "received": 9
          }
        ]
      },
      {
        "productId": "PRD077",
        "productName": "Anar (Pomegranate)",
        "unit": "Boxes",
        "totalQuantity": 16,
        "unitPrice": 1650,
        "totalCost": 26400,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 16,
          "allocated": 16,
          "received": 16
          }
        ]
      },
      {
        "productId": "PRD179",
        "productName": "CITRUS",
        "unit": "Kg",
        "totalQuantity": 8,
        "unitPrice": 45,
        "totalCost": 360,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 8,
          "allocated": 8,
          "received": 8
          }
        ]
      },
      {
        "productId": "PRD094",
        "productName": "Apple Premium",
        "unit": "Crates",
        "totalQuantity": 15,
        "unitPrice": 2100,
        "totalCost": 31500,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 15,
          "allocated": 15,
          "received": 15
          }
        ]
      },
      {
        "productId": "PRD215",
        "productName": "Ramphal",
        "unit": "Crates",
        "totalQuantity": 7,
        "unitPrice": 800,
        "totalCost": 5600,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 7,
          "allocated": 7,
          "received": 7
          }
        ]
      },
      {
        "productId": "PRD101",
        "productName": "Guava (Allahabad Safeda)",
        "unit": "Crates",
        "totalQuantity": 14,
        "unitPrice": 650,
        "totalCost": 9100,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 14,
          "allocated": 14,
          "received": 14
          }
        ]
      },
      {
        "productId": "PRD085",
        "productName": "Apple Premium",
        "unit": "Crates",
        "totalQuantity": 6,
        "unitPrice": 2100,
        "totalCost": 12600,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 6,
          "allocated": 6,
          "received": 6
          }
        ]
      },
      {
        "productId": "PRD180",
        "productName": "MADRIN",
        "unit": "Kg",
        "totalQuantity": 13,
        "unitPrice": 45,
        "totalCost": 585,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 13,
          "allocated": 13,
          "received": 13
          }
        ]
      },
      {
        "productId": "PRD088",
        "productName": "Watermelon Normal",
        "unit": "Kg",
        "totalQuantity": 5,
        "unitPrice": 22,
        "totalCost": 110,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 5,
          "allocated": 5,
          "received": 5
          }
        ]
      },
      {
        "productId": "PRD089",
        "productName": "Watermelon Stripes",
        "unit": "Kg",
        "totalQuantity": 12,
        "unitPrice": 22,
        "totalCost": 264,
        "allocations": [
          {
            "branchId": "BR003",
            "branch": "LB Shastri Nagar",
            "qty": 12,
          "allocated": 12,
          "received": 12
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
  },
  {
    "id": "PO-20261003-BSV01",
    "supplierName": "K.R. Market & APMC Fruit-Veg Terminal (Basavanagar)",
    "date": "03 Oct 2026",
    "time": "06:45 AM",
    "totalAmount": 825961,
    "source": "DAILY_STOCK_CHECK_BSV_DISPATCH",
    "manifestReference": "BSV-MORNING-DISPATCH-01",
    "items": [
      {
        "productId": "PRD088",
        "productName": "Watermelon Normal",
        "unit": "Kg",
        "totalQuantity": 3,
        "unitPrice": 22,
        "totalCost": 66,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 3,
          "allocated": 3,
          "received": 3
          }
        ]
      },
      {
        "productId": "PRD089",
        "productName": "Watermelon Stripes",
        "unit": "Kg",
        "totalQuantity": 10,
        "unitPrice": 22,
        "totalCost": 220,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 10,
          "allocated": 10,
          "received": 10
          }
        ]
      },
      {
        "productId": "PRD078",
        "productName": "Papaya Ripe (Red Lady)",
        "unit": "Crates",
        "totalQuantity": 17,
        "unitPrice": 650,
        "totalCost": 11050,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 17,
          "allocated": 17,
          "received": 17
          }
        ]
      },
      {
        "productId": "PRD085",
        "productName": "Apple Premium",
        "unit": "Crates",
        "totalQuantity": 9,
        "unitPrice": 2100,
        "totalCost": 18900,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 9,
          "allocated": 9,
          "received": 9
          }
        ]
      },
      {
        "productId": "PRD104",
        "productName": "Madrin",
        "unit": "Crates",
        "totalQuantity": 16,
        "unitPrice": 1350,
        "totalCost": 21600,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 16,
          "allocated": 16,
          "received": 16
          }
        ]
      },
      {
        "productId": "PRD179",
        "productName": "CITRUS",
        "unit": "Kg",
        "totalQuantity": 8,
        "unitPrice": 45,
        "totalCost": 360,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 8,
          "allocated": 8,
          "received": 8
          }
        ]
      },
      {
        "productId": "PRD180",
        "productName": "MADRIN",
        "unit": "Kg",
        "totalQuantity": 15,
        "unitPrice": 45,
        "totalCost": 675,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 15,
          "allocated": 15,
          "received": 15
          }
        ]
      },
      {
        "productId": "PRD076",
        "productName": "Mosambi Sweet Lime",
        "unit": "Bags",
        "totalQuantity": 7,
        "unitPrice": 1100,
        "totalCost": 7700,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 7,
          "allocated": 7,
          "received": 7
          }
        ]
      },
      {
        "productId": "PRD097",
        "productName": "Muskmelon Farm",
        "unit": "Crates",
        "totalQuantity": 14,
        "unitPrice": 600,
        "totalCost": 8400,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 14,
          "allocated": 14,
          "received": 14
          }
        ]
      },
      {
        "productId": "PRD218",
        "productName": "Muskmelon Nati",
        "unit": "Crates",
        "totalQuantity": 6,
        "unitPrice": 650,
        "totalCost": 3900,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 6,
          "allocated": 6,
          "received": 6
          }
        ]
      },
      {
        "productId": "PRD094",
        "productName": "Apple Premium",
        "unit": "Crates",
        "totalQuantity": 13,
        "unitPrice": 2100,
        "totalCost": 27300,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 13,
          "allocated": 13,
          "received": 13
          }
        ]
      },
      {
        "productId": "PRD166",
        "productName": "Chiku (Sapota)",
        "unit": "Crates",
        "totalQuantity": 5,
        "unitPrice": 650,
        "totalCost": 3250,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 5,
          "allocated": 5,
          "received": 5
          }
        ]
      },
      {
        "productId": "PRD216",
        "productName": "Thai Guava",
        "unit": "Crates",
        "totalQuantity": 12,
        "unitPrice": 1100,
        "totalCost": 13200,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 12,
          "allocated": 12,
          "received": 12
          }
        ]
      },
      {
        "productId": "PRD199",
        "productName": "Nati Gauva",
        "unit": "Crates",
        "totalQuantity": 4,
        "unitPrice": 550,
        "totalCost": 2200,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 4,
          "allocated": 4,
          "received": 4
          }
        ]
      },
      {
        "productId": "PRD157",
        "productName": "BAERY",
        "unit": "Kg",
        "totalQuantity": 11,
        "unitPrice": 45,
        "totalCost": 495,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 11,
          "allocated": 11,
          "received": 11
          }
        ]
      },
      {
        "productId": "PRD173",
        "productName": "Dragon Fruit Red",
        "unit": "Boxes",
        "totalQuantity": 3,
        "unitPrice": 900,
        "totalCost": 2700,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 3,
          "allocated": 3,
          "received": 3
          }
        ]
      },
      {
        "productId": "PRD198",
        "productName": "Dragon Fruit White",
        "unit": "Boxes",
        "totalQuantity": 10,
        "unitPrice": 1100,
        "totalCost": 11000,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 10,
          "allocated": 10,
          "received": 10
          }
        ]
      },
      {
        "productId": "PRD081",
        "productName": "Grapes Green Thompson",
        "unit": "Crates",
        "totalQuantity": 17,
        "unitPrice": 1200,
        "totalCost": 20400,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 17,
          "allocated": 17,
          "received": 17
          }
        ]
      },
      {
        "productId": "PRD080",
        "productName": "Grapes Black Seedless",
        "unit": "Crates",
        "totalQuantity": 9,
        "unitPrice": 1200,
        "totalCost": 10800,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 9,
          "allocated": 9,
          "received": 9
          }
        ]
      },
      {
        "productId": "PRD079",
        "productName": "Grapes Red Globe Imported",
        "unit": "Crates",
        "totalQuantity": 16,
        "unitPrice": 1200,
        "totalCost": 19200,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 16,
          "allocated": 16,
          "received": 16
          }
        ]
      },
      {
        "productId": "PRD217",
        "productName": "Golden Kiwi",
        "unit": "Boxes",
        "totalQuantity": 8,
        "unitPrice": 1400,
        "totalCost": 11200,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 8,
          "allocated": 8,
          "received": 8
          }
        ]
      },
      {
        "productId": "PRD084",
        "productName": "Kiwi Fruit",
        "unit": "Boxes",
        "totalQuantity": 15,
        "unitPrice": 850,
        "totalCost": 12750,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 15,
          "allocated": 15,
          "received": 15
          }
        ]
      },
      {
        "productId": "PRD197",
        "productName": "Pomegranate Big",
        "unit": "Boxes",
        "totalQuantity": 7,
        "unitPrice": 1400,
        "totalCost": 9800,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 7,
          "allocated": 7,
          "received": 7
          }
        ]
      },
      {
        "productId": "PRD077",
        "productName": "Anar (Pomegranate)",
        "unit": "Boxes",
        "totalQuantity": 14,
        "unitPrice": 1650,
        "totalCost": 23100,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 14,
          "allocated": 14,
          "received": 14
          }
        ]
      },
      {
        "productId": "PRD103",
        "productName": "Plum Black",
        "unit": "Boxes",
        "totalQuantity": 6,
        "unitPrice": 650,
        "totalCost": 3900,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 6,
          "allocated": 6,
          "received": 6
          }
        ]
      },
      {
        "productId": "PRD090",
        "productName": "Pear Green",
        "unit": "Boxes",
        "totalQuantity": 13,
        "unitPrice": 1450,
        "totalCost": 18850,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 13,
          "allocated": 13,
          "received": 13
          }
        ]
      },
      {
        "productId": "PRD099",
        "productName": "Butter Fruit (Avocado)",
        "unit": "Crates",
        "totalQuantity": 5,
        "unitPrice": 1500,
        "totalCost": 7500,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 5,
          "allocated": 5,
          "received": 5
          }
        ]
      },
      {
        "productId": "PRD212",
        "productName": "Butter Fruit Imported",
        "unit": "Crates",
        "totalQuantity": 12,
        "unitPrice": 2200,
        "totalCost": 26400,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 12,
          "allocated": 12,
          "received": 12
          }
        ]
      },
      {
        "productId": "PRD174",
        "productName": "Persimmon Fruit",
        "unit": "Boxes",
        "totalQuantity": 4,
        "unitPrice": 850,
        "totalCost": 3400,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 4,
          "allocated": 4,
          "received": 4
          }
        ]
      },
      {
        "productId": "PRD075",
        "productName": "Apple Royal Gala",
        "unit": "Crates",
        "totalQuantity": 11,
        "unitPrice": 2100,
        "totalCost": 23100,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 11,
          "allocated": 11,
          "received": 11
          }
        ]
      },
      {
        "productId": "PRD196",
        "productName": "Pink Lady",
        "unit": "Crates",
        "totalQuantity": 3,
        "unitPrice": 1850,
        "totalCost": 5550,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 3,
          "allocated": 3,
          "received": 3
          }
        ]
      },
      {
        "productId": "PRD208",
        "productName": "Turkey Apple",
        "unit": "Crates",
        "totalQuantity": 10,
        "unitPrice": 1750,
        "totalCost": 17500,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 10,
          "allocated": 10,
          "received": 10
          }
        ]
      },
      {
        "productId": "PRD071",
        "productName": "Apple Washington",
        "unit": "Crates",
        "totalQuantity": 17,
        "unitPrice": 2100,
        "totalCost": 35700,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 17,
          "allocated": 17,
          "received": 17
          }
        ]
      },
      {
        "productId": "PRD209",
        "productName": "Rocket Apple",
        "unit": "Boxes",
        "totalQuantity": 9,
        "unitPrice": 1950,
        "totalCost": 17550,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 9,
          "allocated": 9,
          "received": 9
          }
        ]
      },
      {
        "productId": "PRD210",
        "productName": "Alibinder",
        "unit": "Crates",
        "totalQuantity": 16,
        "unitPrice": 1800,
        "totalCost": 28800,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 16,
          "allocated": 16,
          "received": 16
          }
        ]
      },
      {
        "productId": "PRD073",
        "productName": "Apple Green (Granny Smith)",
        "unit": "Crates",
        "totalQuantity": 8,
        "unitPrice": 2100,
        "totalCost": 16800,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 8,
          "allocated": 8,
          "received": 8
          }
        ]
      },
      {
        "productId": "PRD211",
        "productName": "Iran Apple",
        "unit": "Crates",
        "totalQuantity": 15,
        "unitPrice": 1600,
        "totalCost": 24000,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 15,
          "allocated": 15,
          "received": 15
          }
        ]
      },
      {
        "productId": "PRD201",
        "productName": "Kashmiri Apple",
        "unit": "Crates",
        "totalQuantity": 7,
        "unitPrice": 1650,
        "totalCost": 11550,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 7,
          "allocated": 7,
          "received": 7
          }
        ]
      },
      {
        "productId": "PRD070",
        "productName": "Apple Indian (Shimla)",
        "unit": "Crates",
        "totalQuantity": 14,
        "unitPrice": 2100,
        "totalCost": 29400,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 14,
          "allocated": 14,
          "received": 14
          }
        ]
      },
      {
        "productId": "PRD202",
        "productName": "Misri Apple",
        "unit": "Crates",
        "totalQuantity": 6,
        "unitPrice": 1700,
        "totalCost": 10200,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 6,
          "allocated": 6,
          "received": 6
          }
        ]
      },
      {
        "productId": "PRD023",
        "productName": "Cucumber Local",
        "unit": "Crates",
        "totalQuantity": 13,
        "unitPrice": 450,
        "totalCost": 5850,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 13,
          "allocated": 13,
          "received": 13
          }
        ]
      },
      {
        "productId": "PRD032",
        "productName": "Cauliflower",
        "unit": "Crates",
        "totalQuantity": 5,
        "unitPrice": 600,
        "totalCost": 3000,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 5,
          "allocated": 5,
          "received": 5
          }
        ]
      },
      {
        "productId": "PRD022",
        "productName": "Cabbage Green",
        "unit": "Bags",
        "totalQuantity": 12,
        "unitPrice": 420,
        "totalCost": 5040,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 12,
          "allocated": 12,
          "received": 12
          }
        ]
      },
      {
        "productId": "PRD019",
        "productName": "Lauki (Bottle Gourd)",
        "unit": "Bags",
        "totalQuantity": 4,
        "unitPrice": 400,
        "totalCost": 1600,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 4,
          "allocated": 4,
          "received": 4
          }
        ]
      },
      {
        "productId": "PRD049",
        "productName": "Ridge Gourd (Hirekayi)",
        "unit": "Bags",
        "totalQuantity": 11,
        "unitPrice": 500,
        "totalCost": 5500,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 11,
          "allocated": 11,
          "received": 11
          }
        ]
      },
      {
        "productId": "PRD143",
        "productName": "S POTATO",
        "unit": "Kg",
        "totalQuantity": 3,
        "unitPrice": 45,
        "totalCost": 135,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 3,
          "allocated": 3,
          "received": 3
          }
        ]
      },
      {
        "productId": "PRD006",
        "productName": "Ladies Finger",
        "unit": "Crates",
        "totalQuantity": 10,
        "unitPrice": 650,
        "totalCost": 6500,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 10,
          "allocated": 10,
          "received": 10
          }
        ]
      },
      {
        "productId": "PRD009",
        "productName": "Green Peas",
        "unit": "Bags",
        "totalQuantity": 17,
        "unitPrice": 1400,
        "totalCost": 23800,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 17,
          "allocated": 17,
          "received": 17
          }
        ]
      },
      {
        "productId": "PRD005",
        "productName": "Green Beans",
        "unit": "Bags",
        "totalQuantity": 9,
        "unitPrice": 900,
        "totalCost": 8100,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 9,
          "allocated": 9,
          "received": 9
          }
        ]
      },
      {
        "productId": "PRD004",
        "productName": "Carrot",
        "unit": "Bags",
        "totalQuantity": 16,
        "unitPrice": 850,
        "totalCost": 13600,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 16,
          "allocated": 16,
          "received": 16
          }
        ]
      },
      {
        "productId": "PRD057",
        "productName": "Beetroot",
        "unit": "Bags",
        "totalQuantity": 8,
        "unitPrice": 750,
        "totalCost": 6000,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 8,
          "allocated": 8,
          "received": 8
          }
        ]
      },
      {
        "productId": "PRD029",
        "productName": "Drumstick",
        "unit": "Bags",
        "totalQuantity": 15,
        "unitPrice": 550,
        "totalCost": 8250,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 15,
          "allocated": 15,
          "received": 15
          }
        ]
      },
      {
        "productId": "PRD012",
        "productName": "Radish White",
        "unit": "Bags",
        "totalQuantity": 7,
        "unitPrice": 480,
        "totalCost": 3360,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 7,
          "allocated": 7,
          "received": 7
          }
        ]
      },
      {
        "productId": "PRD021",
        "productName": "Capsicum Green",
        "unit": "Crates",
        "totalQuantity": 14,
        "unitPrice": 700,
        "totalCost": 9800,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 14,
          "allocated": 14,
          "received": 14
          }
        ]
      },
      {
        "productId": "PRD125",
        "productName": "Parval (Pointed Gourd)",
        "unit": "Crates",
        "totalQuantity": 6,
        "unitPrice": 650,
        "totalCost": 3900,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 6,
          "allocated": 6,
          "received": 6
          }
        ]
      },
      {
        "productId": "PRD017",
        "productName": "Amla",
        "unit": "Kg",
        "totalQuantity": 13,
        "unitPrice": 60,
        "totalCost": 780,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 13,
          "allocated": 13,
          "received": 13
          }
        ]
      },
      {
        "productId": "PRD008",
        "productName": "Long Beans",
        "unit": "Kg",
        "totalQuantity": 5,
        "unitPrice": 50,
        "totalCost": 250,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 5,
          "allocated": 5,
          "received": 5
          }
        ]
      },
      {
        "productId": "PRD018",
        "productName": "Avarakkai",
        "unit": "Kg",
        "totalQuantity": 12,
        "unitPrice": 55,
        "totalCost": 660,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 12,
          "allocated": 12,
          "received": 12
          }
        ]
      },
      {
        "productId": "PRD066",
        "productName": "Double Beans (Lima)",
        "unit": "Kg",
        "totalQuantity": 4,
        "unitPrice": 80,
        "totalCost": 320,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 4,
          "allocated": 4,
          "received": 4
          }
        ]
      },
      {
        "productId": "PRD011",
        "productName": "Nookkol",
        "unit": "Bags",
        "totalQuantity": 11,
        "unitPrice": 520,
        "totalCost": 5720,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 11,
          "allocated": 11,
          "received": 11
          }
        ]
      },
      {
        "productId": "PRD183",
        "productName": "Small Karela (S.Karela)",
        "unit": "Crates",
        "totalQuantity": 3,
        "unitPrice": 600,
        "totalCost": 1800,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 3,
          "allocated": 3,
          "received": 3
          }
        ]
      },
      {
        "productId": "PRD020",
        "productName": "Bitter Gourd",
        "unit": "Crates",
        "totalQuantity": 10,
        "unitPrice": 600,
        "totalCost": 6000,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 10,
          "allocated": 10,
          "received": 10
          }
        ]
      },
      {
        "productId": "PRD014",
        "productName": "Small Brinjal Green",
        "unit": "Crates",
        "totalQuantity": 17,
        "unitPrice": 480,
        "totalCost": 8160,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 17,
          "allocated": 17,
          "received": 17
          }
        ]
      },
      {
        "productId": "PRD188",
        "productName": "Small Brinjal Purple",
        "unit": "Crates",
        "totalQuantity": 9,
        "unitPrice": 500,
        "totalCost": 4500,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 9,
          "allocated": 9,
          "received": 9
          }
        ]
      },
      {
        "productId": "PRD189",
        "productName": "Long Brinjal Purple",
        "unit": "Crates",
        "totalQuantity": 16,
        "unitPrice": 520,
        "totalCost": 8320,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 16,
          "allocated": 16,
          "received": 16
          }
        ]
      },
      {
        "productId": "PRD015",
        "productName": "Long Brinjal Green",
        "unit": "Crates",
        "totalQuantity": 8,
        "unitPrice": 480,
        "totalCost": 3840,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 8,
          "allocated": 8,
          "received": 8
          }
        ]
      },
      {
        "productId": "PRD016",
        "productName": "Bharta Green",
        "unit": "Crates",
        "totalQuantity": 15,
        "unitPrice": 480,
        "totalCost": 7200,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 15,
          "allocated": 15,
          "received": 15
          }
        ]
      },
      {
        "productId": "PRD205",
        "productName": "Bharta Black",
        "unit": "Crates",
        "totalQuantity": 7,
        "unitPrice": 550,
        "totalCost": 3850,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 7,
          "allocated": 7,
          "received": 7
          }
        ]
      },
      {
        "productId": "PRD028",
        "productName": "Green Chilli",
        "unit": "Crates",
        "totalQuantity": 14,
        "unitPrice": 650,
        "totalCost": 9100,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 14,
          "allocated": 14,
          "received": 14
          }
        ]
      },
      {
        "productId": "PRD192",
        "productName": "Big Chilli",
        "unit": "Crates",
        "totalQuantity": 6,
        "unitPrice": 620,
        "totalCost": 3720,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 6,
          "allocated": 6,
          "received": 6
          }
        ]
      },
      {
        "productId": "PRD058",
        "productName": "Bhajji Chilly",
        "unit": "Crates",
        "totalQuantity": 13,
        "unitPrice": 650,
        "totalCost": 8450,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 13,
          "allocated": 13,
          "received": 13
          }
        ]
      },
      {
        "productId": "PRD169",
        "productName": "Matki Falli (Moth Pods)",
        "unit": "Kg",
        "totalQuantity": 5,
        "unitPrice": 65,
        "totalCost": 325,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 5,
          "allocated": 5,
          "received": 5
          }
        ]
      },
      {
        "productId": "PRD170",
        "productName": "Sem",
        "unit": "Kg",
        "totalQuantity": 12,
        "unitPrice": 55,
        "totalCost": 660,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 12,
          "allocated": 12,
          "received": 12
          }
        ]
      },
      {
        "productId": "PRD053",
        "productName": "Avarakkai",
        "unit": "Kg",
        "totalQuantity": 4,
        "unitPrice": 55,
        "totalCost": 220,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 4,
          "allocated": 4,
          "received": 4
          }
        ]
      },
      {
        "productId": "PRD037",
        "productName": "Kovakkai / Kundru (Tindora)",
        "unit": "Crates",
        "totalQuantity": 11,
        "unitPrice": 550,
        "totalCost": 6050,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 11,
          "allocated": 11,
          "received": 11
          }
        ]
      },
      {
        "productId": "PRD038",
        "productName": "Snake Gourd (Padavalakai)",
        "unit": "Bags",
        "totalQuantity": 3,
        "unitPrice": 420,
        "totalCost": 1260,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 3,
          "allocated": 3,
          "received": 3
          }
        ]
      },
      {
        "productId": "PRD010",
        "productName": "Chow Chow",
        "unit": "Bags",
        "totalQuantity": 10,
        "unitPrice": 450,
        "totalCost": 4500,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 10,
          "allocated": 10,
          "received": 10
          }
        ]
      },
      {
        "productId": "PRD030",
        "productName": "Raw Green Papaya",
        "unit": "Crates",
        "totalQuantity": 17,
        "unitPrice": 650,
        "totalCost": 11050,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 17,
          "allocated": 17,
          "received": 17
          }
        ]
      },
      {
        "productId": "PRD024",
        "productName": "Raw Banana (Cooking)",
        "unit": "Bunches",
        "totalQuantity": 9,
        "unitPrice": 350,
        "totalCost": 3150,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 9,
          "allocated": 9,
          "received": 9
          }
        ]
      },
      {
        "productId": "PRD051",
        "productName": "Banana Stem",
        "unit": "Pieces",
        "totalQuantity": 16,
        "unitPrice": 25,
        "totalCost": 400,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 16,
          "allocated": 16,
          "received": 16
          }
        ]
      },
      {
        "productId": "PRD060",
        "productName": "Banana Flower (Vazhaipoo)",
        "unit": "Pieces",
        "totalQuantity": 8,
        "unitPrice": 30,
        "totalCost": 240,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 8,
          "allocated": 8,
          "received": 8
          }
        ]
      },
      {
        "productId": "PRD131",
        "productName": "Raw Green Mango",
        "unit": "Crates",
        "totalQuantity": 15,
        "unitPrice": 2200,
        "totalCost": 33000,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 15,
          "allocated": 15,
          "received": 15
          }
        ]
      },
      {
        "productId": "PRD050",
        "productName": "Jackfruit (Raw / Ripe)",
        "unit": "Kg",
        "totalQuantity": 7,
        "unitPrice": 45,
        "totalCost": 315,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 7,
          "allocated": 7,
          "received": 7
          }
        ]
      },
      {
        "productId": "PRD034",
        "productName": "Arvi",
        "unit": "Bags",
        "totalQuantity": 14,
        "unitPrice": 750,
        "totalCost": 10500,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 14,
          "allocated": 14,
          "received": 14
          }
        ]
      },
      {
        "productId": "PRD172",
        "productName": "Tapioca (Kappa / Cassava)",
        "unit": "Bags",
        "totalQuantity": 6,
        "unitPrice": 650,
        "totalCost": 3900,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 6,
          "allocated": 6,
          "received": 6
          }
        ]
      },
      {
        "productId": "PRD027",
        "productName": "Ginger",
        "unit": "Bags",
        "totalQuantity": 13,
        "unitPrice": 1600,
        "totalCost": 20800,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 13,
          "allocated": 13,
          "received": 13
          }
        ]
      },
      {
        "productId": "PRD048",
        "productName": "White Pumpkin (Ash Gourd)",
        "unit": "Bags",
        "totalQuantity": 5,
        "unitPrice": 550,
        "totalCost": 2750,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 5,
          "allocated": 5,
          "received": 5
          }
        ]
      },
      {
        "productId": "PRD047",
        "productName": "Yellow Pumpkin",
        "unit": "Bags",
        "totalQuantity": 12,
        "unitPrice": 550,
        "totalCost": 6600,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 12,
          "allocated": 12,
          "received": 12
          }
        ]
      },
      {
        "productId": "PRD052",
        "productName": "Elephant Foot Yam (Suran)",
        "unit": "Bags",
        "totalQuantity": 4,
        "unitPrice": 900,
        "totalCost": 3600,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 4,
          "allocated": 4,
          "received": 4
          }
        ]
      },
      {
        "productId": "PRD033",
        "productName": "Sambar Cucumber",
        "unit": "Crates",
        "totalQuantity": 11,
        "unitPrice": 450,
        "totalCost": 4950,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 11,
          "allocated": 11,
          "received": 11
          }
        ]
      },
      {
        "productId": "PRD035",
        "productName": "Small Onion (Shallots)",
        "unit": "Bags",
        "totalQuantity": 3,
        "unitPrice": 1450,
        "totalCost": 4350,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 3,
          "allocated": 3,
          "received": 3
          }
        ]
      },
      {
        "productId": "PRD193",
        "productName": "Kandrela",
        "unit": "Kg",
        "totalQuantity": 10,
        "unitPrice": 90,
        "totalCost": 900,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 10,
          "allocated": 10,
          "received": 10
          }
        ]
      },
      {
        "productId": "PRD156",
        "productName": "Turmeric Raw (Haldi)",
        "unit": "Kg",
        "totalQuantity": 17,
        "unitPrice": 90,
        "totalCost": 1530,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 17,
          "allocated": 17,
          "received": 17
          }
        ]
      },
      {
        "productId": "PRD176",
        "productName": "Karamani (Cowpea Pods)",
        "unit": "Kg",
        "totalQuantity": 9,
        "unitPrice": 65,
        "totalCost": 585,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 9,
          "allocated": 9,
          "received": 9
          }
        ]
      },
      {
        "productId": "PRD045",
        "productName": "Coriander (Kothmir)",
        "unit": "Bunches",
        "totalQuantity": 16,
        "unitPrice": 25,
        "totalCost": 400,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 16,
          "allocated": 16,
          "received": 16
          }
        ]
      },
      {
        "productId": "PRD194",
        "productName": "Naati",
        "unit": "Bunches",
        "totalQuantity": 8,
        "unitPrice": 15,
        "totalCost": 120,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 8,
          "allocated": 8,
          "received": 8
          }
        ]
      },
      {
        "productId": "PRD041",
        "productName": "Curry Leaf",
        "unit": "Bunches",
        "totalQuantity": 15,
        "unitPrice": 25,
        "totalCost": 375,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 15,
          "allocated": 15,
          "received": 15
          }
        ]
      },
      {
        "productId": "PRD042",
        "productName": "Pudina (Mint)",
        "unit": "Bunches",
        "totalQuantity": 7,
        "unitPrice": 25,
        "totalCost": 175,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 7,
          "allocated": 7,
          "received": 7
          }
        ]
      },
      {
        "productId": "PRD043",
        "productName": "Palak (Spinach)",
        "unit": "Bunches",
        "totalQuantity": 14,
        "unitPrice": 25,
        "totalCost": 350,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 14,
          "allocated": 14,
          "received": 14
          }
        ]
      },
      {
        "productId": "PRD044",
        "productName": "Methi (Fenugreek)",
        "unit": "Bunches",
        "totalQuantity": 6,
        "unitPrice": 25,
        "totalCost": 150,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 6,
          "allocated": 6,
          "received": 6
          }
        ]
      },
      {
        "productId": "PRD207",
        "productName": "Bhajji Chilly",
        "unit": "Bunches",
        "totalQuantity": 13,
        "unitPrice": 15,
        "totalCost": 195,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 13,
          "allocated": 13,
          "received": 13
          }
        ]
      },
      {
        "productId": "PRD092",
        "productName": "Banana Robusta",
        "unit": "Bunches",
        "totalQuantity": 5,
        "unitPrice": 450,
        "totalCost": 2250,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 5,
          "allocated": 5,
          "received": 5
          }
        ]
      },
      {
        "productId": "PRD185",
        "productName": "N TOMATO",
        "unit": "Kg",
        "totalQuantity": 12,
        "unitPrice": 45,
        "totalCost": 540,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 12,
          "allocated": 12,
          "received": 12
          }
        ]
      },
      {
        "productId": "PRD003",
        "productName": "Tomato",
        "unit": "Crates",
        "totalQuantity": 4,
        "unitPrice": 550,
        "totalCost": 2200,
        "allocations": [
          {
            "branchId": "BR004",
            "branch": "Basavanagar",
            "qty": 4,
          "allocated": 4,
          "received": 4
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
  },
  {
    "id": "PO-20261003-ASP01",
    "supplierName": "K.R. Market & APMC Fruit-Veg Terminal (Annasandrapalya)",
    "date": "03 Oct 2026",
    "time": "06:45 AM",
    "totalAmount": 823472,
    "source": "DAILY_STOCK_CHECK_ASP_DISPATCH",
    "manifestReference": "ASP-MORNING-DISPATCH-01",
    "items": [
      {
        "productId": "PRD005",
        "productName": "Green Beans",
        "unit": "Bags",
        "totalQuantity": 3,
        "unitPrice": 900,
        "totalCost": 2700,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 3,
          "allocated": 3,
          "received": 3
          }
        ]
      },
      {
        "productId": "PRD004",
        "productName": "Carrot",
        "unit": "Bags",
        "totalQuantity": 10,
        "unitPrice": 850,
        "totalCost": 8500,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 10,
          "allocated": 10,
          "received": 10
          }
        ]
      },
      {
        "productId": "PRD023",
        "productName": "Cucumber Local",
        "unit": "Crates",
        "totalQuantity": 17,
        "unitPrice": 450,
        "totalCost": 7650,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 17,
          "allocated": 17,
          "received": 17
          }
        ]
      },
      {
        "productId": "PRD057",
        "productName": "Beetroot",
        "unit": "Bags",
        "totalQuantity": 9,
        "unitPrice": 750,
        "totalCost": 6750,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 9,
          "allocated": 9,
          "received": 9
          }
        ]
      },
      {
        "productId": "PRD032",
        "productName": "Cauliflower",
        "unit": "Crates",
        "totalQuantity": 16,
        "unitPrice": 600,
        "totalCost": 9600,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 16,
          "allocated": 16,
          "received": 16
          }
        ]
      },
      {
        "productId": "PRD022",
        "productName": "Cabbage Green",
        "unit": "Bags",
        "totalQuantity": 8,
        "unitPrice": 420,
        "totalCost": 3360,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 8,
          "allocated": 8,
          "received": 8
          }
        ]
      },
      {
        "productId": "PRD028",
        "productName": "Green Chilli",
        "unit": "Crates",
        "totalQuantity": 15,
        "unitPrice": 650,
        "totalCost": 9750,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 15,
          "allocated": 15,
          "received": 15
          }
        ]
      },
      {
        "productId": "PRD192",
        "productName": "Big Chilli",
        "unit": "Crates",
        "totalQuantity": 7,
        "unitPrice": 620,
        "totalCost": 4340,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 7,
          "allocated": 7,
          "received": 7
          }
        ]
      },
      {
        "productId": "PRD009",
        "productName": "Green Peas",
        "unit": "Bags",
        "totalQuantity": 14,
        "unitPrice": 1400,
        "totalCost": 19600,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 14,
          "allocated": 14,
          "received": 14
          }
        ]
      },
      {
        "productId": "PRD125",
        "productName": "Parval (Pointed Gourd)",
        "unit": "Crates",
        "totalQuantity": 6,
        "unitPrice": 650,
        "totalCost": 3900,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 6,
          "allocated": 6,
          "received": 6
          }
        ]
      },
      {
        "productId": "PRD019",
        "productName": "Lauki (Bottle Gourd)",
        "unit": "Bags",
        "totalQuantity": 13,
        "unitPrice": 400,
        "totalCost": 5200,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 13,
          "allocated": 13,
          "received": 13
          }
        ]
      },
      {
        "productId": "PRD012",
        "productName": "Radish White",
        "unit": "Bags",
        "totalQuantity": 5,
        "unitPrice": 480,
        "totalCost": 2400,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 5,
          "allocated": 5,
          "received": 5
          }
        ]
      },
      {
        "productId": "PRD014",
        "productName": "Small Brinjal Green",
        "unit": "Crates",
        "totalQuantity": 12,
        "unitPrice": 480,
        "totalCost": 5760,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 12,
          "allocated": 12,
          "received": 12
          }
        ]
      },
      {
        "productId": "PRD188",
        "productName": "Small Brinjal Purple",
        "unit": "Crates",
        "totalQuantity": 4,
        "unitPrice": 500,
        "totalCost": 2000,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 4,
          "allocated": 4,
          "received": 4
          }
        ]
      },
      {
        "productId": "PRD011",
        "productName": "Nookkol",
        "unit": "Bags",
        "totalQuantity": 11,
        "unitPrice": 520,
        "totalCost": 5720,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 11,
          "allocated": 11,
          "received": 11
          }
        ]
      },
      {
        "productId": "PRD183",
        "productName": "Small Karela (S.Karela)",
        "unit": "Crates",
        "totalQuantity": 3,
        "unitPrice": 600,
        "totalCost": 1800,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 3,
          "allocated": 3,
          "received": 3
          }
        ]
      },
      {
        "productId": "PRD020",
        "productName": "Bitter Gourd",
        "unit": "Crates",
        "totalQuantity": 10,
        "unitPrice": 600,
        "totalCost": 6000,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 10,
          "allocated": 10,
          "received": 10
          }
        ]
      },
      {
        "productId": "PRD006",
        "productName": "Ladies Finger",
        "unit": "Crates",
        "totalQuantity": 17,
        "unitPrice": 650,
        "totalCost": 11050,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 17,
          "allocated": 17,
          "received": 17
          }
        ]
      },
      {
        "productId": "PRD049",
        "productName": "Ridge Gourd (Hirekayi)",
        "unit": "Bags",
        "totalQuantity": 9,
        "unitPrice": 500,
        "totalCost": 4500,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 9,
          "allocated": 9,
          "received": 9
          }
        ]
      },
      {
        "productId": "PRD021",
        "productName": "Capsicum Green",
        "unit": "Crates",
        "totalQuantity": 16,
        "unitPrice": 700,
        "totalCost": 11200,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 16,
          "allocated": 16,
          "received": 16
          }
        ]
      },
      {
        "productId": "PRD027",
        "productName": "Ginger",
        "unit": "Bags",
        "totalQuantity": 8,
        "unitPrice": 1600,
        "totalCost": 12800,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 8,
          "allocated": 8,
          "received": 8
          }
        ]
      },
      {
        "productId": "PRD204",
        "productName": "Ginger Old",
        "unit": "Bags",
        "totalQuantity": 15,
        "unitPrice": 1800,
        "totalCost": 27000,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 15,
          "allocated": 15,
          "received": 15
          }
        ]
      },
      {
        "productId": "PRD024",
        "productName": "Raw Banana (Cooking)",
        "unit": "Bunches",
        "totalQuantity": 7,
        "unitPrice": 350,
        "totalCost": 2450,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 7,
          "allocated": 7,
          "received": 7
          }
        ]
      },
      {
        "productId": "PRD030",
        "productName": "Raw Green Papaya",
        "unit": "Crates",
        "totalQuantity": 14,
        "unitPrice": 650,
        "totalCost": 9100,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 14,
          "allocated": 14,
          "received": 14
          }
        ]
      },
      {
        "productId": "PRD051",
        "productName": "Banana Stem",
        "unit": "Pieces",
        "totalQuantity": 6,
        "unitPrice": 25,
        "totalCost": 150,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 6,
          "allocated": 6,
          "received": 6
          }
        ]
      },
      {
        "productId": "PRD060",
        "productName": "Banana Flower (Vazhaipoo)",
        "unit": "Pieces",
        "totalQuantity": 13,
        "unitPrice": 30,
        "totalCost": 390,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 13,
          "allocated": 13,
          "received": 13
          }
        ]
      },
      {
        "productId": "PRD054",
        "productName": "English Cucumber",
        "unit": "Crates",
        "totalQuantity": 5,
        "unitPrice": 450,
        "totalCost": 2250,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 5,
          "allocated": 5,
          "received": 5
          }
        ]
      },
      {
        "productId": "PRD143",
        "productName": "S POTATO",
        "unit": "Kg",
        "totalQuantity": 12,
        "unitPrice": 45,
        "totalCost": 540,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 12,
          "allocated": 12,
          "received": 12
          }
        ]
      },
      {
        "productId": "PRD172",
        "productName": "Tapioca (Kappa / Cassava)",
        "unit": "Bags",
        "totalQuantity": 4,
        "unitPrice": 650,
        "totalCost": 2600,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 4,
          "allocated": 4,
          "received": 4
          }
        ]
      },
      {
        "productId": "PRD029",
        "productName": "Drumstick",
        "unit": "Bags",
        "totalQuantity": 11,
        "unitPrice": 550,
        "totalCost": 6050,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 11,
          "allocated": 11,
          "received": 11
          }
        ]
      },
      {
        "productId": "PRD017",
        "productName": "Amla",
        "unit": "Kg",
        "totalQuantity": 3,
        "unitPrice": 60,
        "totalCost": 180,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 3,
          "allocated": 3,
          "received": 3
          }
        ]
      },
      {
        "productId": "PRD189",
        "productName": "Long Brinjal Purple",
        "unit": "Crates",
        "totalQuantity": 10,
        "unitPrice": 520,
        "totalCost": 5200,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 10,
          "allocated": 10,
          "received": 10
          }
        ]
      },
      {
        "productId": "PRD015",
        "productName": "Long Brinjal Green",
        "unit": "Crates",
        "totalQuantity": 17,
        "unitPrice": 480,
        "totalCost": 8160,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 17,
          "allocated": 17,
          "received": 17
          }
        ]
      },
      {
        "productId": "PRD058",
        "productName": "Bhajji Chilly",
        "unit": "Crates",
        "totalQuantity": 9,
        "unitPrice": 650,
        "totalCost": 5850,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 9,
          "allocated": 9,
          "received": 9
          }
        ]
      },
      {
        "productId": "PRD205",
        "productName": "Bharta Black",
        "unit": "Crates",
        "totalQuantity": 16,
        "unitPrice": 550,
        "totalCost": 8800,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 16,
          "allocated": 16,
          "received": 16
          }
        ]
      },
      {
        "productId": "PRD016",
        "productName": "Bharta Green",
        "unit": "Crates",
        "totalQuantity": 8,
        "unitPrice": 480,
        "totalCost": 3840,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 8,
          "allocated": 8,
          "received": 8
          }
        ]
      },
      {
        "productId": "PRD047",
        "productName": "Yellow Pumpkin",
        "unit": "Bags",
        "totalQuantity": 15,
        "unitPrice": 550,
        "totalCost": 8250,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 15,
          "allocated": 15,
          "received": 15
          }
        ]
      },
      {
        "productId": "PRD048",
        "productName": "White Pumpkin (Ash Gourd)",
        "unit": "Bags",
        "totalQuantity": 7,
        "unitPrice": 550,
        "totalCost": 3850,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 7,
          "allocated": 7,
          "received": 7
          }
        ]
      },
      {
        "productId": "PRD052",
        "productName": "Elephant Foot Yam (Suran)",
        "unit": "Bags",
        "totalQuantity": 14,
        "unitPrice": 900,
        "totalCost": 12600,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 14,
          "allocated": 14,
          "received": 14
          }
        ]
      },
      {
        "productId": "PRD031",
        "productName": "Lemon Standard",
        "unit": "Bags",
        "totalQuantity": 6,
        "unitPrice": 650,
        "totalCost": 3900,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 6,
          "allocated": 6,
          "received": 6
          }
        ]
      },
      {
        "productId": "PRD035",
        "productName": "Small Onion (Shallots)",
        "unit": "Bags",
        "totalQuantity": 13,
        "unitPrice": 1450,
        "totalCost": 18850,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 13,
          "allocated": 13,
          "received": 13
          }
        ]
      },
      {
        "productId": "PRD033",
        "productName": "Sambar Cucumber",
        "unit": "Crates",
        "totalQuantity": 5,
        "unitPrice": 450,
        "totalCost": 2250,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 5,
          "allocated": 5,
          "received": 5
          }
        ]
      },
      {
        "productId": "PRD193",
        "productName": "Kandrela",
        "unit": "Kg",
        "totalQuantity": 12,
        "unitPrice": 90,
        "totalCost": 1080,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 12,
          "allocated": 12,
          "received": 12
          }
        ]
      },
      {
        "productId": "PRD206",
        "productName": "Round Loki",
        "unit": "Bags",
        "totalQuantity": 4,
        "unitPrice": 420,
        "totalCost": 1680,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 4,
          "allocated": 4,
          "received": 4
          }
        ]
      },
      {
        "productId": "PRD156",
        "productName": "Turmeric Raw (Haldi)",
        "unit": "Kg",
        "totalQuantity": 11,
        "unitPrice": 90,
        "totalCost": 990,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 11,
          "allocated": 11,
          "received": 11
          }
        ]
      },
      {
        "productId": "PRD034",
        "productName": "Arvi",
        "unit": "Bags",
        "totalQuantity": 3,
        "unitPrice": 750,
        "totalCost": 2250,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 3,
          "allocated": 3,
          "received": 3
          }
        ]
      },
      {
        "productId": "PRD169",
        "productName": "Matki Falli (Moth Pods)",
        "unit": "Kg",
        "totalQuantity": 10,
        "unitPrice": 65,
        "totalCost": 650,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 10,
          "allocated": 10,
          "received": 10
          }
        ]
      },
      {
        "productId": "PRD170",
        "productName": "Sem",
        "unit": "Kg",
        "totalQuantity": 17,
        "unitPrice": 55,
        "totalCost": 935,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 17,
          "allocated": 17,
          "received": 17
          }
        ]
      },
      {
        "productId": "PRD053",
        "productName": "Avarakkai",
        "unit": "Kg",
        "totalQuantity": 9,
        "unitPrice": 55,
        "totalCost": 495,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 9,
          "allocated": 9,
          "received": 9
          }
        ]
      },
      {
        "productId": "PRD037",
        "productName": "Kovakkai / Kundru (Tindora)",
        "unit": "Crates",
        "totalQuantity": 16,
        "unitPrice": 550,
        "totalCost": 8800,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 16,
          "allocated": 16,
          "received": 16
          }
        ]
      },
      {
        "productId": "PRD008",
        "productName": "Long Beans",
        "unit": "Kg",
        "totalQuantity": 8,
        "unitPrice": 50,
        "totalCost": 400,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 8,
          "allocated": 8,
          "received": 8
          }
        ]
      },
      {
        "productId": "PRD066",
        "productName": "Double Beans (Lima)",
        "unit": "Kg",
        "totalQuantity": 15,
        "unitPrice": 80,
        "totalCost": 1200,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 15,
          "allocated": 15,
          "received": 15
          }
        ]
      },
      {
        "productId": "PRD018",
        "productName": "Avarakkai",
        "unit": "Kg",
        "totalQuantity": 7,
        "unitPrice": 55,
        "totalCost": 385,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 7,
          "allocated": 7,
          "received": 7
          }
        ]
      },
      {
        "productId": "PRD010",
        "productName": "Chow Chow",
        "unit": "Bags",
        "totalQuantity": 14,
        "unitPrice": 450,
        "totalCost": 6300,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 14,
          "allocated": 14,
          "received": 14
          }
        ]
      },
      {
        "productId": "PRD176",
        "productName": "Karamani (Cowpea Pods)",
        "unit": "Kg",
        "totalQuantity": 6,
        "unitPrice": 65,
        "totalCost": 390,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 6,
          "allocated": 6,
          "received": 6
          }
        ]
      },
      {
        "productId": "PRD038",
        "productName": "Snake Gourd (Padavalakai)",
        "unit": "Bags",
        "totalQuantity": 13,
        "unitPrice": 420,
        "totalCost": 5460,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 13,
          "allocated": 13,
          "received": 13
          }
        ]
      },
      {
        "productId": "PRD207",
        "productName": "Bhajji Chilly",
        "unit": "Bunches",
        "totalQuantity": 5,
        "unitPrice": 15,
        "totalCost": 75,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 5,
          "allocated": 5,
          "received": 5
          }
        ]
      },
      {
        "productId": "PRD045",
        "productName": "Coriander (Kothmir)",
        "unit": "Bunches",
        "totalQuantity": 12,
        "unitPrice": 25,
        "totalCost": 300,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 12,
          "allocated": 12,
          "received": 12
          }
        ]
      },
      {
        "productId": "PRD042",
        "productName": "Pudina (Mint)",
        "unit": "Bunches",
        "totalQuantity": 4,
        "unitPrice": 25,
        "totalCost": 100,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 4,
          "allocated": 4,
          "received": 4
          }
        ]
      },
      {
        "productId": "PRD041",
        "productName": "Curry Leaf",
        "unit": "Bunches",
        "totalQuantity": 11,
        "unitPrice": 25,
        "totalCost": 275,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 11,
          "allocated": 11,
          "received": 11
          }
        ]
      },
      {
        "productId": "PRD003",
        "productName": "Tomato",
        "unit": "Crates",
        "totalQuantity": 3,
        "unitPrice": 550,
        "totalCost": 1650,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 3,
          "allocated": 3,
          "received": 3
          }
        ]
      },
      {
        "productId": "PRD185",
        "productName": "N TOMATO",
        "unit": "Kg",
        "totalQuantity": 10,
        "unitPrice": 45,
        "totalCost": 450,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 10,
          "allocated": 10,
          "received": 10
          }
        ]
      },
      {
        "productId": "PRD088",
        "productName": "Watermelon Normal",
        "unit": "Kg",
        "totalQuantity": 17,
        "unitPrice": 22,
        "totalCost": 374,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 17,
          "allocated": 17,
          "received": 17
          }
        ]
      },
      {
        "productId": "PRD089",
        "productName": "Watermelon Stripes",
        "unit": "Kg",
        "totalQuantity": 9,
        "unitPrice": 22,
        "totalCost": 198,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 9,
          "allocated": 9,
          "received": 9
          }
        ]
      },
      {
        "productId": "PRD078",
        "productName": "Papaya Ripe (Red Lady)",
        "unit": "Crates",
        "totalQuantity": 16,
        "unitPrice": 650,
        "totalCost": 10400,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 16,
          "allocated": 16,
          "received": 16
          }
        ]
      },
      {
        "productId": "PRD085",
        "productName": "Apple Premium",
        "unit": "Crates",
        "totalQuantity": 8,
        "unitPrice": 2100,
        "totalCost": 16800,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 8,
          "allocated": 8,
          "received": 8
          }
        ]
      },
      {
        "productId": "PRD104",
        "productName": "Madrin",
        "unit": "Crates",
        "totalQuantity": 15,
        "unitPrice": 1350,
        "totalCost": 20250,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 15,
          "allocated": 15,
          "received": 15
          }
        ]
      },
      {
        "productId": "PRD179",
        "productName": "CITRUS",
        "unit": "Kg",
        "totalQuantity": 7,
        "unitPrice": 45,
        "totalCost": 315,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 7,
          "allocated": 7,
          "received": 7
          }
        ]
      },
      {
        "productId": "PRD180",
        "productName": "MADRIN",
        "unit": "Kg",
        "totalQuantity": 14,
        "unitPrice": 45,
        "totalCost": 630,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 14,
          "allocated": 14,
          "received": 14
          }
        ]
      },
      {
        "productId": "PRD076",
        "productName": "Mosambi Sweet Lime",
        "unit": "Bags",
        "totalQuantity": 6,
        "unitPrice": 1100,
        "totalCost": 6600,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 6,
          "allocated": 6,
          "received": 6
          }
        ]
      },
      {
        "productId": "PRD097",
        "productName": "Muskmelon Farm",
        "unit": "Crates",
        "totalQuantity": 13,
        "unitPrice": 600,
        "totalCost": 7800,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 13,
          "allocated": 13,
          "received": 13
          }
        ]
      },
      {
        "productId": "PRD218",
        "productName": "Muskmelon Nati",
        "unit": "Crates",
        "totalQuantity": 5,
        "unitPrice": 650,
        "totalCost": 3250,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 5,
          "allocated": 5,
          "received": 5
          }
        ]
      },
      {
        "productId": "PRD094",
        "productName": "Apple Premium",
        "unit": "Crates",
        "totalQuantity": 12,
        "unitPrice": 2100,
        "totalCost": 25200,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 12,
          "allocated": 12,
          "received": 12
          }
        ]
      },
      {
        "productId": "PRD166",
        "productName": "Chiku (Sapota)",
        "unit": "Crates",
        "totalQuantity": 4,
        "unitPrice": 650,
        "totalCost": 2600,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 4,
          "allocated": 4,
          "received": 4
          }
        ]
      },
      {
        "productId": "PRD216",
        "productName": "Thai Guava",
        "unit": "Crates",
        "totalQuantity": 11,
        "unitPrice": 1100,
        "totalCost": 12100,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 11,
          "allocated": 11,
          "received": 11
          }
        ]
      },
      {
        "productId": "PRD199",
        "productName": "Nati Gauva",
        "unit": "Crates",
        "totalQuantity": 3,
        "unitPrice": 550,
        "totalCost": 1650,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 3,
          "allocated": 3,
          "received": 3
          }
        ]
      },
      {
        "productId": "PRD157",
        "productName": "BAERY",
        "unit": "Kg",
        "totalQuantity": 10,
        "unitPrice": 45,
        "totalCost": 450,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 10,
          "allocated": 10,
          "received": 10
          }
        ]
      },
      {
        "productId": "PRD173",
        "productName": "Dragon Fruit Red",
        "unit": "Boxes",
        "totalQuantity": 17,
        "unitPrice": 900,
        "totalCost": 15300,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 17,
          "allocated": 17,
          "received": 17
          }
        ]
      },
      {
        "productId": "PRD198",
        "productName": "Dragon Fruit White",
        "unit": "Boxes",
        "totalQuantity": 9,
        "unitPrice": 1100,
        "totalCost": 9900,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 9,
          "allocated": 9,
          "received": 9
          }
        ]
      },
      {
        "productId": "PRD081",
        "productName": "Grapes Green Thompson",
        "unit": "Crates",
        "totalQuantity": 16,
        "unitPrice": 1200,
        "totalCost": 19200,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 16,
          "allocated": 16,
          "received": 16
          }
        ]
      },
      {
        "productId": "PRD080",
        "productName": "Grapes Black Seedless",
        "unit": "Crates",
        "totalQuantity": 8,
        "unitPrice": 1200,
        "totalCost": 9600,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 8,
          "allocated": 8,
          "received": 8
          }
        ]
      },
      {
        "productId": "PRD079",
        "productName": "Grapes Red Globe Imported",
        "unit": "Crates",
        "totalQuantity": 15,
        "unitPrice": 1200,
        "totalCost": 18000,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 15,
          "allocated": 15,
          "received": 15
          }
        ]
      },
      {
        "productId": "PRD217",
        "productName": "Golden Kiwi",
        "unit": "Boxes",
        "totalQuantity": 7,
        "unitPrice": 1400,
        "totalCost": 9800,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 7,
          "allocated": 7,
          "received": 7
          }
        ]
      },
      {
        "productId": "PRD084",
        "productName": "Kiwi Fruit",
        "unit": "Boxes",
        "totalQuantity": 14,
        "unitPrice": 850,
        "totalCost": 11900,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 14,
          "allocated": 14,
          "received": 14
          }
        ]
      },
      {
        "productId": "PRD197",
        "productName": "Pomegranate Big",
        "unit": "Boxes",
        "totalQuantity": 6,
        "unitPrice": 1400,
        "totalCost": 8400,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 6,
          "allocated": 6,
          "received": 6
          }
        ]
      },
      {
        "productId": "PRD077",
        "productName": "Anar (Pomegranate)",
        "unit": "Boxes",
        "totalQuantity": 13,
        "unitPrice": 1650,
        "totalCost": 21450,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 13,
          "allocated": 13,
          "received": 13
          }
        ]
      },
      {
        "productId": "PRD103",
        "productName": "Plum Black",
        "unit": "Boxes",
        "totalQuantity": 5,
        "unitPrice": 650,
        "totalCost": 3250,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 5,
          "allocated": 5,
          "received": 5
          }
        ]
      },
      {
        "productId": "PRD090",
        "productName": "Pear Green",
        "unit": "Boxes",
        "totalQuantity": 12,
        "unitPrice": 1450,
        "totalCost": 17400,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 12,
          "allocated": 12,
          "received": 12
          }
        ]
      },
      {
        "productId": "PRD099",
        "productName": "Butter Fruit (Avocado)",
        "unit": "Crates",
        "totalQuantity": 4,
        "unitPrice": 1500,
        "totalCost": 6000,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 4,
          "allocated": 4,
          "received": 4
          }
        ]
      },
      {
        "productId": "PRD212",
        "productName": "Butter Fruit Imported",
        "unit": "Crates",
        "totalQuantity": 11,
        "unitPrice": 2200,
        "totalCost": 24200,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 11,
          "allocated": 11,
          "received": 11
          }
        ]
      },
      {
        "productId": "PRD174",
        "productName": "Persimmon Fruit",
        "unit": "Boxes",
        "totalQuantity": 3,
        "unitPrice": 850,
        "totalCost": 2550,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 3,
          "allocated": 3,
          "received": 3
          }
        ]
      },
      {
        "productId": "PRD075",
        "productName": "Apple Royal Gala",
        "unit": "Crates",
        "totalQuantity": 10,
        "unitPrice": 2100,
        "totalCost": 21000,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 10,
          "allocated": 10,
          "received": 10
          }
        ]
      },
      {
        "productId": "PRD196",
        "productName": "Pink Lady",
        "unit": "Crates",
        "totalQuantity": 17,
        "unitPrice": 1850,
        "totalCost": 31450,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 17,
          "allocated": 17,
          "received": 17
          }
        ]
      },
      {
        "productId": "PRD208",
        "productName": "Turkey Apple",
        "unit": "Crates",
        "totalQuantity": 9,
        "unitPrice": 1750,
        "totalCost": 15750,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 9,
          "allocated": 9,
          "received": 9
          }
        ]
      },
      {
        "productId": "PRD071",
        "productName": "Apple Washington",
        "unit": "Crates",
        "totalQuantity": 16,
        "unitPrice": 2100,
        "totalCost": 33600,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 16,
          "allocated": 16,
          "received": 16
          }
        ]
      },
      {
        "productId": "PRD209",
        "productName": "Rocket Apple",
        "unit": "Boxes",
        "totalQuantity": 8,
        "unitPrice": 1950,
        "totalCost": 15600,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 8,
          "allocated": 8,
          "received": 8
          }
        ]
      },
      {
        "productId": "PRD210",
        "productName": "Alibinder",
        "unit": "Crates",
        "totalQuantity": 15,
        "unitPrice": 1800,
        "totalCost": 27000,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 15,
          "allocated": 15,
          "received": 15
          }
        ]
      },
      {
        "productId": "PRD073",
        "productName": "Apple Green (Granny Smith)",
        "unit": "Crates",
        "totalQuantity": 7,
        "unitPrice": 2100,
        "totalCost": 14700,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 7,
          "allocated": 7,
          "received": 7
          }
        ]
      },
      {
        "productId": "PRD211",
        "productName": "Iran Apple",
        "unit": "Crates",
        "totalQuantity": 14,
        "unitPrice": 1600,
        "totalCost": 22400,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 14,
          "allocated": 14,
          "received": 14
          }
        ]
      },
      {
        "productId": "PRD201",
        "productName": "Kashmiri Apple",
        "unit": "Crates",
        "totalQuantity": 6,
        "unitPrice": 1650,
        "totalCost": 9900,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 6,
          "allocated": 6,
          "received": 6
          }
        ]
      },
      {
        "productId": "PRD070",
        "productName": "Apple Indian (Shimla)",
        "unit": "Crates",
        "totalQuantity": 13,
        "unitPrice": 2100,
        "totalCost": 27300,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 13,
          "allocated": 13,
          "received": 13
          }
        ]
      },
      {
        "productId": "PRD202",
        "productName": "Misri Apple",
        "unit": "Crates",
        "totalQuantity": 5,
        "unitPrice": 1700,
        "totalCost": 8500,
        "allocations": [
          {
            "branchId": "BR001",
            "branch": "Annasandra Palya",
            "qty": 5,
          "allocated": 5,
          "received": 5
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

// Official sequence for KODIHALLI branch (BR002)
export const KODIHALLI_SEQUENCE = [
  "PRD023", // 1
  "PRD004", // 2
  "PRD019", // 3
  "PRD021", // 4
  "PRD032", // 5
  "PRD022", // 6
  "PRD005", // 7
  "PRD006", // 8
  "PRD012", // 9
  "PRD057", // 10
  "PRD049", // 11
  "PRD187", // 12
  "PRD008", // 13
  "PRD014", // 14
  "PRD188", // 15
  "PRD015", // 16
  "PRD189", // 17
  "PRD205", // 18
  "PRD190", // 19
  "PRD191", // 20
  "PRD125", // 21
  "PRD192", // 22
  "PRD058", // 23
  "PRD170", // 24
  "PRD053", // 25
  "PRD009", // 26
  "PRD169", // 27
  "PRD183", // 28
  "PRD020", // 29
  "PRD017", // 30
  "PRD037", // 31
  "PRD011", // 32
  "PRD010", // 33
  "PRD030", // 34
  "PRD024", // 35
  "PRD038", // 36
  "PRD193", // 37
  "PRD145", // 38
  "PRD171", // 39
  "PRD018", // 40
  "PRD156", // 41
  "PRD029", // 42
  "PRD031", // 43
  "PRD034", // 44
  "PRD045", // 45
  "PRD194", // 46
  "PRD042", // 47
  "PRD041", // 48
  "PRD043", // 49
  "PRD044", // 50
  "PRD046", // 51
  "PRD195", // 52
  "PRD143", // 53
  "PRD085", // 54
  "PRD097", // 55
  "PRD218", // 56
  "PRD196", // 57
  "PRD174", // 58
  "PRD073", // 59
  "PRD075", // 60
  "PRD072", // 61
  "PRD090", // 62
  "PRD091", // 63
  "PRD084", // 64
  "PRD166", // 65
  "PRD081", // 66
  "PRD080", // 67
  "PRD079", // 68
  "PRD077", // 69
  "PRD197", // 70
  "PRD099", // 71
  "PRD173", // 72
  "PRD198", // 73
  "PRD104", // 74
  "PRD101", // 75
  "PRD199", // 76
  "PRD094", // 77
  "PRD179", // 78
  "PRD074", // 79
  "PRD076", // 80
  "PRD180", // 81
  "PRD200", // 82
  "PRD201", // 83
  "PRD070", // 84
  "PRD202", // 85
  "PRD203", // 86
  "PRD078", // 87
  "PRD086", // 88
  "PRD092", // 89
  "PRD088", // 90
  "PRD089", // 91
  "PRD087", // 92
  "PRD093", // 93
  "PRD112" // 94
];

// Official sequence for LB SHASTRI NAGAR branch (BR003)
export const LBS_NAGAR_SEQUENCE = [
  "PRD005", // 1
  "PRD004", // 2
  "PRD023", // 3
  "PRD057", // 4
  "PRD032", // 5
  "PRD022", // 6
  "PRD028", // 7
  "PRD192", // 8
  "PRD009", // 9
  "PRD125", // 10
  "PRD019", // 11
  "PRD012", // 12
  "PRD014", // 13
  "PRD188", // 14
  "PRD011", // 15
  "PRD183", // 16
  "PRD020", // 17
  "PRD006", // 18
  "PRD049", // 19
  "PRD021", // 20
  "PRD027", // 21
  "PRD204", // 22
  "PRD024", // 23
  "PRD030", // 24
  "PRD051", // 25
  "PRD060", // 26
  "PRD054", // 27
  "PRD143", // 28
  "PRD172", // 29
  "PRD029", // 30
  "PRD017", // 31
  "PRD189", // 32
  "PRD015", // 33
  "PRD058", // 34
  "PRD205", // 35
  "PRD016", // 36
  "PRD047", // 37
  "PRD048", // 38
  "PRD052", // 39
  "PRD031", // 40
  "PRD035", // 41
  "PRD033", // 42
  "PRD193", // 43
  "PRD206", // 44
  "PRD156", // 45
  "PRD034", // 46
  "PRD169", // 47
  "PRD170", // 48
  "PRD053", // 49
  "PRD037", // 50
  "PRD008", // 51
  "PRD066", // 52
  "PRD018", // 53
  "PRD010", // 54
  "PRD176", // 55
  "PRD038", // 56
  "PRD207", // 57
  "PRD045", // 58
  "PRD042", // 59
  "PRD041", // 60
  "PRD003", // 61
  "PRD185", // 62
  "PRD092", // 63
  "PRD079", // 64
  "PRD075", // 65
  "PRD196", // 66
  "PRD208", // 67
  "PRD071", // 68
  "PRD209", // 69
  "PRD210", // 70
  "PRD073", // 71
  "PRD211", // 72
  "PRD201", // 73
  "PRD070", // 74
  "PRD202", // 75
  "PRD090", // 76
  "PRD091", // 77
  "PRD174", // 78
  "PRD084", // 79
  "PRD099", // 80
  "PRD212", // 81
  "PRD080", // 82
  "PRD213", // 83
  "PRD081", // 84
  "PRD097", // 85
  "PRD218", // 86
  "PRD166", // 87
  "PRD157", // 88
  "PRD076", // 89
  "PRD104", // 90
  "PRD173", // 91
  "PRD198", // 92
  "PRD214", // 93
  "PRD197", // 94
  "PRD077", // 95
  "PRD179", // 96
  "PRD094", // 97
  "PRD215", // 98
  "PRD101", // 99
  "PRD085", // 100
  "PRD180", // 101
  "PRD088", // 102
  "PRD089" // 103
];


// Official sequence for BASAVANAGAR branch (BR004)
export const BASAVANAGAR_SEQUENCE = [
  "PRD088", // 1
  "PRD089", // 2
  "PRD078", // 3
  "PRD085", // 4
  "PRD104", // 5
  "PRD179", // 6
  "PRD180", // 7
  "PRD076", // 8
  "PRD097", // 9
  "PRD218", // 10
  "PRD094", // 11
  "PRD166", // 12
  "PRD216", // 13
  "PRD199", // 14
  "PRD157", // 15
  "PRD173", // 16
  "PRD198", // 17
  "PRD081", // 18
  "PRD080", // 19
  "PRD079", // 20
  "PRD217", // 21
  "PRD084", // 22
  "PRD197", // 23
  "PRD077", // 24
  "PRD103", // 25
  "PRD090", // 26
  "PRD099", // 27
  "PRD212", // 28
  "PRD174", // 29
  "PRD075", // 30
  "PRD196", // 31
  "PRD208", // 32
  "PRD071", // 33
  "PRD209", // 34
  "PRD210", // 35
  "PRD073", // 36
  "PRD211", // 37
  "PRD201", // 38
  "PRD070", // 39
  "PRD202", // 40
  "PRD023", // 41
  "PRD032", // 42
  "PRD022", // 43
  "PRD019", // 44
  "PRD049", // 45
  "PRD143", // 46
  "PRD006", // 47
  "PRD009", // 48
  "PRD005", // 49
  "PRD004", // 50
  "PRD057", // 51
  "PRD029", // 52
  "PRD012", // 53
  "PRD021", // 54
  "PRD125", // 55
  "PRD017", // 56
  "PRD008", // 57
  "PRD018", // 58
  "PRD066", // 59
  "PRD011", // 60
  "PRD183", // 61
  "PRD020", // 62
  "PRD014", // 63
  "PRD188", // 64
  "PRD189", // 65
  "PRD015", // 66
  "PRD016", // 67
  "PRD205", // 68
  "PRD028", // 69
  "PRD192", // 70
  "PRD058", // 71
  "PRD169", // 72
  "PRD170", // 73
  "PRD053", // 74
  "PRD037", // 75
  "PRD038", // 76
  "PRD010", // 77
  "PRD030", // 78
  "PRD024", // 79
  "PRD051", // 80
  "PRD060", // 81
  "PRD131", // 82
  "PRD050", // 83
  "PRD034", // 84
  "PRD172", // 85
  "PRD027", // 86
  "PRD048", // 87
  "PRD047", // 88
  "PRD052", // 89
  "PRD033", // 90
  "PRD035", // 91
  "PRD193", // 92
  "PRD156", // 93
  "PRD176", // 94
  "PRD045", // 95
  "PRD194", // 96
  "PRD041", // 97
  "PRD042", // 98
  "PRD043", // 99
  "PRD044", // 100
  "PRD207", // 101
  "PRD092", // 102
  "PRD185", // 103
  "PRD003" // 104
];


// Official sequence for ANNASANDRAPALYA branch (BR001)
export const ANNASANDRAPALYA_SEQUENCE = [
  "PRD005", // 1
  "PRD004", // 2
  "PRD023", // 3
  "PRD057", // 4
  "PRD032", // 5
  "PRD022", // 6
  "PRD028", // 7
  "PRD192", // 8
  "PRD009", // 9
  "PRD125", // 10
  "PRD019", // 11
  "PRD012", // 12
  "PRD014", // 13
  "PRD188", // 14
  "PRD011", // 15
  "PRD183", // 16
  "PRD020", // 17
  "PRD006", // 18
  "PRD049", // 19
  "PRD021", // 20
  "PRD027", // 21
  "PRD204", // 22
  "PRD024", // 23
  "PRD030", // 24
  "PRD051", // 25
  "PRD060", // 26
  "PRD054", // 27
  "PRD143", // 28
  "PRD172", // 29
  "PRD029", // 30
  "PRD017", // 31
  "PRD189", // 32
  "PRD015", // 33
  "PRD058", // 34
  "PRD205", // 35
  "PRD016", // 36
  "PRD047", // 37
  "PRD048", // 38
  "PRD052", // 39
  "PRD031", // 40
  "PRD035", // 41
  "PRD033", // 42
  "PRD193", // 43
  "PRD206", // 44
  "PRD156", // 45
  "PRD034", // 46
  "PRD169", // 47
  "PRD170", // 48
  "PRD053", // 49
  "PRD037", // 50
  "PRD008", // 51
  "PRD066", // 52
  "PRD018", // 53
  "PRD010", // 54
  "PRD176", // 55
  "PRD038", // 56
  "PRD207", // 57
  "PRD045", // 58
  "PRD042", // 59
  "PRD041", // 60
  "PRD003", // 61
  "PRD185", // 62
  "PRD088", // 63
  "PRD089", // 64
  "PRD078", // 65
  "PRD085", // 66
  "PRD104", // 67
  "PRD179", // 68
  "PRD180", // 69
  "PRD076", // 70
  "PRD097", // 71
  "PRD218", // 72
  "PRD094", // 73
  "PRD166", // 74
  "PRD216", // 75
  "PRD199", // 76
  "PRD157", // 77
  "PRD173", // 78
  "PRD198", // 79
  "PRD081", // 80
  "PRD080", // 81
  "PRD079", // 82
  "PRD217", // 83
  "PRD084", // 84
  "PRD197", // 85
  "PRD077", // 86
  "PRD103", // 87
  "PRD090", // 88
  "PRD099", // 89
  "PRD212", // 90
  "PRD174", // 91
  "PRD075", // 92
  "PRD196", // 93
  "PRD208", // 94
  "PRD071", // 95
  "PRD209", // 96
  "PRD210", // 97
  "PRD073", // 98
  "PRD211", // 99
  "PRD201", // 100
  "PRD070", // 101
  "PRD202" // 102
];
