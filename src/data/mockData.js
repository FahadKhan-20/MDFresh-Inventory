// MD FRESH - Inventory Data Store & State
// Complete Official Catalog: 186 Products across all 4 Retail Branches
// Branches: ANNASANDRAPALYA, KODIHALLI, LBS NAGAR, BASAVANAGAR

export const INITIAL_BRANCHES = [
  {
    id: 'BR001',
    name: 'ANNASANDRAPALYA',
    code: 'BR-ASP',
    location: 'Main Road, Annasandrapalya, HAL Post, Bengaluru',
    manager: 'Rahul Sharma',
    phone: '+91 98450 12345',
    stockHealth: 'Healthy',
    totalProducts: 186,
    lowStockCount: 6,
    lastAudit: '03 Oct 2026, 08:30 AM'
  },
  {
    id: 'BR002',
    name: 'KODIHALLI',
    code: 'BR-KDH',
    location: 'Old Airport Road, Kodihalli, Bengaluru',
    manager: 'Priya Nair',
    phone: '+91 98860 54321',
    stockHealth: 'Low',
    totalProducts: 186,
    lowStockCount: 8,
    lastAudit: '03 Oct 2026, 07:45 AM'
  },
  {
    id: 'BR003',
    name: 'LBS NAGAR',
    code: 'BR-LBS',
    location: 'Kaggadasapura Main Rd, LBS Nagar, Bengaluru',
    manager: 'Vikram Singh',
    phone: '+91 97410 98765',
    stockHealth: 'Healthy',
    totalProducts: 186,
    lowStockCount: 4,
    lastAudit: '03 Oct 2026, 09:10 AM'
  },
  {
    id: 'BR004',
    name: 'BASAVANAGAR',
    code: 'BR-BSV',
    location: 'Basavanagar Main Road, Marathahalli, Bengaluru',
    manager: 'Suresh Kumar',
    phone: '+91 96110 34567',
    stockHealth: 'Attention',
    totalProducts: 186,
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
    "category": "Fruits",
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
    "category": "Dairy & Others",
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
    "category": "Fruits",
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
    "category": "Fruits",
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
    "category": "Fruits",
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
    "category": "Fruits",
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
    "submittedBy": "Rahul Sharma",
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
    "submittedBy": "Priya Nair",
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
    "submittedBy": "Vikram Singh",
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
    "submittedBy": "Suresh Kumar",
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
