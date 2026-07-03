// 20-Supplement Reference Database with rules, colors, categories, and descriptions
const SUPPLEMENT_DB = {
  creatine: {
    id: "creatine",
    name: "Creatine Monohydrate",
    category: "muscle",
    color: "#00b4d8",
    ruleType: "WITH_MEAL",
    preferredMeal: "breakfast",
    offsetMinutes: 0,
    clashDetection: { preventEmptyStomach: true },
    unit: "6g",
    desc: "Supports cell hydration, strength, and ATP regeneration. Take with carbs/protein to maximize absorption."
  },
  whey: {
    id: "whey",
    name: "Whey Protein",
    category: "muscle",
    color: "#4ea8de",
    ruleType: "RELATIVE_TO_WORKOUT",
    anchor: "workout_end",
    offsetMinutes: 15,
    clashDetection: { checkNearbyMeal: 45 },
    unit: "25g",
    desc: "Rapidly absorbed protein to stimulate muscle protein synthesis."
  },
  casein: {
    id: "casein",
    name: "Casein Protein",
    category: "muscle",
    color: "#56cfe1",
    ruleType: "RELATIVE_TO_SLEEP",
    anchor: "sleep_start",
    offsetMinutes: -30,
    clashDetection: { checkHighProteinDinner: true, minGapFromDinner: 60 },
    unit: "30g",
    desc: "Slow-release protein for prolonged nitrogen balance overnight."
  },
  eaas: {
    id: "eaas",
    name: "EAAs / BCAAs",
    category: "muscle",
    color: "#72efdd",
    ruleType: "SPAN_WORKOUT",
    offsetMinutes: 0,
    unit: "10g",
    desc: "Essential amino acids to prevent intra-workout catabolism."
  },
  hmb: {
    id: "hmb",
    name: "HMB",
    category: "muscle",
    color: "#80ffdb",
    ruleType: "SPLIT_ALL_MEALS",
    offsetMinutes: 0,
    unit: "3g",
    desc: "Leucine metabolite preventing protein breakdown."
  },
  caffeine: {
    id: "caffeine",
    name: "Caffeine / Pre-Workout",
    category: "performance",
    color: "#ffb703",
    ruleType: "RELATIVE_TO_WORKOUT",
    anchor: "workout_start",
    offsetMinutes: -45,
    clashDetection: { maxSleepProximity: 360 },
    unit: "200mg",
    desc: "Adenosine blocker to boost power, alertness, and energy. Avoid taking within 6 hours of sleep."
  },
  beta_alanine: {
    id: "beta_alanine",
    name: "Beta-Alanine",
    category: "performance",
    color: "#fb8500",
    ruleType: "RELATIVE_TO_WORKOUT",
    anchor: "workout_start",
    offsetMinutes: -30,
    allowSplit: true,
    unit: "3.2g",
    desc: "Increases muscle carnosine levels to buffer acid build-up."
  },
  citrulline: {
    id: "citrulline",
    name: "L-Citrulline Malate",
    category: "performance",
    color: "#ff006e",
    ruleType: "RELATIVE_TO_WORKOUT",
    anchor: "workout_start",
    offsetMinutes: -60,
    unit: "6g",
    desc: "Precursor to nitric oxide for vasodilation and muscle pumps."
  },
  alpha_gpc: {
    id: "alpha_gpc",
    name: "Alpha-GPC",
    category: "performance",
    color: "#8338ec",
    ruleType: "RELATIVE_TO_WORKOUT",
    anchor: "workout_start",
    offsetMinutes: -45,
    unit: "300mg",
    desc: "Choline source promoting focus and growth hormone output."
  },
  tyrosine: {
    id: "tyrosine",
    name: "L-Tyrosine",
    category: "performance",
    color: "#3a86ff",
    ruleType: "EMPTY_STOMACH_BEFORE_WORKOUT",
    anchor: "workout_start",
    offsetMinutes: -60,
    clashDetection: { requireEmptyStomach: true, foodGapMinutes: 60 },
    unit: "1.5g",
    desc: "Precursor for neurotransmitters to combat intense workout stress. Take on empty stomach."
  },
  omega3: {
    id: "omega3",
    name: "Omega-3 Fish Oil",
    category: "health",
    color: "#2a9d8f",
    ruleType: "WITH_HEAVIEST_MEAL",
    clashDetection: { requiresFat: true },
    unit: "2g",
    desc: "Healthy fats support brain structure, joint recovery, and anti-inflammation."
  },
  vit_d3_k2: {
    id: "vit_d3_k2",
    name: "Vitamin D3 + K2",
    category: "health",
    color: "#e9c46a",
    ruleType: "WITH_MEAL",
    preferredMeal: "breakfast",
    clashDetection: { blockAfterHour: 16 },
    unit: "5000 IU",
    desc: "Supports immune function, calcium absorption, and hormone production. Avoid taking near bedtime."
  },
  multivitamin: {
    id: "multivitamin",
    name: "Multivitamin",
    category: "health",
    color: "#f4a261",
    ruleType: "WITH_MEAL",
    preferredMeal: "lunch",
    unit: "1 tab",
    desc: "Provides vital micronutrient cofactors for cellular health."
  },
  ashwagandha: {
    id: "ashwagandha",
    name: "Ashwagandha (KSM-66)",
    category: "health",
    color: "#e76f51",
    ruleType: "CONDITIONAL_GOAL",
    defaultAnchor: "sleep_start",
    offsetMinutes: -60,
    unit: "600mg",
    desc: "Adaptogen that lowers stress levels and balances cortisol."
  },
  turmeric: {
    id: "turmeric",
    name: "Turmeric / Curcumin",
    category: "health",
    color: "#ffcdb2",
    ruleType: "WITH_MEAL",
    preferredMeal: "dinner",
    unit: "1000mg",
    desc: "Potent polyphenol that addresses systematic inflammation."
  },
  zma: {
    id: "zma",
    name: "ZMA",
    category: "sleep",
    color: "#7209b7",
    ruleType: "RELATIVE_TO_SLEEP",
    anchor: "sleep_start",
    offsetMinutes: -60,
    clashDetection: { requireEmptyStomach: true, calciumConflictGap: 90 },
    unit: "3 caps",
    desc: "Zinc, Magnesium, and B6. Optimizes recovery and sleep quality. Do not take with dairy or calcium."
  },
  magnesium_glycinate: {
    id: "magnesium_glycinate",
    name: "Magnesium Glycinate",
    category: "sleep",
    color: "#b5179e",
    ruleType: "RELATIVE_TO_SLEEP",
    anchor: "sleep_start",
    offsetMinutes: -60,
    clashDetection: { calciumConflictGap: 90 },
    unit: "200mg",
    desc: "Highly absorbable magnesium that calms the central nervous system."
  },
  theanine: {
    id: "theanine",
    name: "L-Theanine",
    category: "sleep",
    color: "#480ca8",
    ruleType: "SMART_CO_INGEST",
    fallbackAnchor: "sleep_start",
    offsetMinutes: -60,
    unit: "200mg",
    desc: "Promotes alpha brain wave state and relaxation. Pairs with caffeine to reduce jitters."
  },
  melatonin: {
    id: "melatonin",
    name: "Melatonin",
    category: "sleep",
    color: "#3f37c9",
    ruleType: "RELATIVE_TO_SLEEP",
    anchor: "sleep_start",
    offsetMinutes: -45,
    unit: "1mg",
    desc: "Circadian hormone signaling dark cycle start."
  },
  apigenin: {
    id: "apigenin",
    name: "Apigenin / Tart Cherry",
    category: "sleep",
    color: "#4cc9f0",
    ruleType: "RELATIVE_TO_SLEEP",
    anchor: "sleep_start",
    offsetMinutes: -45,
    unit: "50mg",
    desc: "Acts on GABA receptors, enhancing slow-wave deep sleep latency."
  },
  electrolytes: {
    id: "electrolytes",
    name: "Electrolyte Hydration",
    category: "performance",
    color: "#a855f7",
    ruleType: "RELATIVE_TO_WORKOUT",
    anchor: "workout_start",
    offsetMinutes: 30,
    unit: "2g",
    desc: "Essential minerals for nerve firing and hydration during workout."
  },
  t_booster: {
    id: "t_booster",
    name: "T-Booster",
    category: "health",
    color: "#22c55e",
    ruleType: "WITH_MEAL",
    preferredMeal: "breakfast",
    offsetMinutes: 0,
    unit: "2 caps",
    desc: "Botanical ingredients optimizing natural male androgen synthesis."
  }
};

// Time parsing helper utilities
function timeStringToMinutes(timeStr) {
  if (!timeStr) return 0;
  const [hrs, mins] = timeStr.split(':').map(Number);
  return (hrs * 60) + mins;
}

function minutesToTimeString(totalMinutes) {
  const mins = ((totalMinutes % 1440) + 1440) % 1440;
  const hrs = Math.floor(mins / 60);
  const m = mins % 60;
  return `${String(hrs).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}


// State management & LocalStorage persistence
const DEFAULTS = {
  training: {
    sleepStart: "23:00",
    sleepEnd: "07:00",
    workoutStart: "17:00",
    workoutEnd: "18:30",
    breakfast: "10:00",
    lunch: "13:00",
    dinner: "19:30",
  },
  rest: {
    sleepStart: "23:00",
    sleepEnd: "07:00",
    workoutStart: "",
    workoutEnd: "",
    breakfast: "10:00",
    lunch: "13:00",
    dinner: "19:30",
  },
};
let menuContext = "training";

let appState = {
  viewDateOffset: 0,
  dayType: "training",
  weeklySchedule: [false, false, false, false, false, false, false], // Sun-Sat (false=rest, true=training)
  schedule: JSON.parse(JSON.stringify(DEFAULTS)),
  weeklySchedules: {
    0: JSON.parse(JSON.stringify(DEFAULTS.rest)),
    1: JSON.parse(JSON.stringify(DEFAULTS.training)),
    2: JSON.parse(JSON.stringify(DEFAULTS.training)),
    3: JSON.parse(JSON.stringify(DEFAULTS.training)),
    4: JSON.parse(JSON.stringify(DEFAULTS.training)),
    5: JSON.parse(JSON.stringify(DEFAULTS.training)),
    6: JSON.parse(JSON.stringify(DEFAULTS.rest))
  },
  weeklySupplements: {
    0: ["creatine", "omega3", "t_booster", "whey", "electrolytes", "zma", "casein"],
    1: ["creatine", "omega3", "t_booster", "whey", "electrolytes", "zma", "casein"],
    2: ["creatine", "omega3", "t_booster", "whey", "electrolytes", "zma", "casein"],
    3: ["creatine", "omega3", "t_booster", "whey", "electrolytes", "zma", "casein"],
    4: ["creatine", "omega3", "t_booster", "whey", "electrolytes", "zma", "casein"],
    5: ["creatine", "omega3", "t_booster", "whey", "electrolytes", "zma", "casein"],
    6: ["creatine", "omega3", "t_booster", "whey", "electrolytes", "zma", "casein"]
  },
  weeklyOverrides: {
    0: {},
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {}
  },
  supplements: {
    training: [
      "creatine",
      "omega3",
      "t_booster",
      "whey",
      "electrolytes",
      "zma",
      "casein",
    ],
    rest: [
      "creatine",
      "omega3",
      "t_booster",
      "whey",
      "electrolytes",
      "zma",
      "casein",
    ]
  },
  highProteinDinnerRest: true,
  splitBetaAlanine: false,
  ashwagandhaGoal: "sleep",
  overrides: {
    training: {},
    rest: {}
  }
};

// IndexedDB persistence helpers
function getIndexedDBState() {
  return new Promise((resolve) => {
    if (!window.indexedDB) return resolve(null);
    try {
      const request = indexedDB.open("ChronosDatabase", 1);
      request.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains("state")) {
          db.createObjectStore("state");
        }
      };
      request.onsuccess = (e) => {
        const db = e.target.result;
        const transaction = db.transaction("state", "readonly");
        const store = transaction.objectStore("state");
        const getReq = store.get("chronos_clock_state");
        getReq.onsuccess = () => resolve(getReq.result || null);
        getReq.onerror = () => resolve(null);
      };
      request.onerror = () => resolve(null);
    } catch (err) {
      console.warn("IndexedDB open failed:", err);
      resolve(null);
    }
  });
}

function saveIndexedDBState(state) {
  if (!window.indexedDB) return;
  try {
    const request = indexedDB.open("ChronosDatabase", 1);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains("state")) {
        db.createObjectStore("state");
      }
    };
    request.onsuccess = (e) => {
      const db = e.target.result;
      const transaction = db.transaction("state", "readwrite");
      const store = transaction.objectStore("state");
      store.put(state, "chronos_clock_state");
    };
  } catch (err) {
    console.warn("IndexedDB write failed:", err);
  }
}

async function requestStoragePersistence() {
  if (navigator.storage && navigator.storage.persist) {
    try {
      const isPersisted = await navigator.storage.persisted();
      console.log(`[Storage] Persistence status: ${isPersisted ? "persisted" : "not persisted"}`);
      if (!isPersisted) {
        const granted = await navigator.storage.persist();
        console.log(`[Storage] Persistence request: ${granted ? "granted" : "denied"}`);
      }
    } catch (e) {
      console.warn("[Storage] Failed to request storage persistence:", e);
    }
  }
}

// Load from localstorage if available (fallback to IndexedDB)
async function loadState() {
  let stored = null;
  try {
    stored = localStorage.getItem("chronos_clock_state");
  } catch (e) {
    console.warn(
      "LocalStorage read blocked, attempting IndexedDB fallback",
      e,
    );
  }

  // Fallback to IndexedDB if LocalStorage is empty or failed
  if (!stored) {
    const backupState = await getIndexedDBState();
    if (backupState) {
      appState = backupState;
      // Sync back to LocalStorage
      try {
        localStorage.setItem("chronos_clock_state", JSON.stringify(appState));
      } catch (e) {
        console.warn("LocalStorage recovery write blocked:", e);
      }
      return;
    }
  }

  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (parsed && parsed.schedule) {
        if (parsed.schedule.training && parsed.schedule.rest) {
          appState.schedule = parsed.schedule;
        } else {
          // Legacy migration
          appState.schedule = {
            training: JSON.parse(JSON.stringify(parsed.schedule)),
            rest: JSON.parse(JSON.stringify(parsed.schedule))
          };
          appState.schedule.rest.workoutStart = "";
          appState.schedule.rest.workoutEnd = "";
        }
      }
      if (parsed && parsed.dayType) {
        appState.dayType = parsed.dayType;
      }
      if (parsed && parsed.weeklySchedule && Array.isArray(parsed.weeklySchedule)) {
        appState.weeklySchedule = parsed.weeklySchedule;
      }
      
      // Migrate from old activeSupplements to new day-specific supplements
      if (parsed && Array.isArray(parsed.activeSupplements)) {
        const migrated = parsed.activeSupplements.map(id => {
          if (id === "vitd3") return "vit_d3_k2";
          if (id === "magnesium") return "magnesium_glycinate";
          return id;
        }).filter((id) => SUPPLEMENT_DB[id]);
        
        appState.supplements = {
          training: [...migrated],
          rest: [...migrated]
        };
      } else if (parsed && parsed.supplements && parsed.supplements.training && parsed.supplements.rest) {
        appState.supplements = parsed.supplements;
      }

      // Load or migrate to weekly day-of-the-week supplements & overrides
      if (parsed && parsed.weeklySupplements) {
        appState.weeklySupplements = parsed.weeklySupplements;
      } else {
        const initialWeeklySupplements = {};
        for (let i = 0; i < 7; i++) {
          const isTraining = appState.weeklySchedule[i];
          const sourceList = (parsed && parsed.supplements)
            ? (isTraining ? parsed.supplements.training : parsed.supplements.rest)
            : (isTraining ? appState.supplements.training : appState.supplements.rest);
          initialWeeklySupplements[i] = [...(sourceList || [])];
        }
        appState.weeklySupplements = initialWeeklySupplements;
      }

      if (parsed && parsed.weeklyOverrides) {
        appState.weeklyOverrides = parsed.weeklyOverrides;
      } else {
        const initialWeeklyOverrides = {};
        for (let i = 0; i < 7; i++) {
          const isTraining = appState.weeklySchedule[i];
          const sourceOverrides = (parsed && parsed.overrides)
            ? (isTraining ? parsed.overrides.training : parsed.overrides.rest)
            : (isTraining ? appState.overrides.training : appState.overrides.rest);
          initialWeeklyOverrides[i] = JSON.parse(JSON.stringify(sourceOverrides || {}));
        }
        appState.weeklyOverrides = initialWeeklyOverrides;
      }

      if (parsed && parsed.weeklySchedules) {
        appState.weeklySchedules = parsed.weeklySchedules;
      } else {
        const initialWeeklySchedules = {};
        for (let i = 0; i < 7; i++) {
          const isTraining = appState.weeklySchedule[i];
          const sourceSchedule = (parsed && parsed.schedule)
            ? (isTraining ? parsed.schedule.training : parsed.schedule.rest)
            : (isTraining ? appState.schedule.training : appState.schedule.rest);
          initialWeeklySchedules[i] = JSON.parse(JSON.stringify(sourceSchedule || {}));
        }
        appState.weeklySchedules = initialWeeklySchedules;
      }

      if (parsed && parsed.hasOwnProperty("highProteinDinnerRest")) {
        appState.highProteinDinnerRest = parsed.highProteinDinnerRest;
      }
      if (parsed && parsed.hasOwnProperty("splitBetaAlanine")) {
        appState.splitBetaAlanine = parsed.splitBetaAlanine;
      }
      if (parsed && parsed.ashwagandhaGoal) {
        appState.ashwagandhaGoal = parsed.ashwagandhaGoal;
      }
      if (parsed && parsed.overrides) {
        appState.overrides = parsed.overrides;
      } else {
        appState.overrides = { training: {}, rest: {} };
      }

      // Sync/Save to IndexedDB to keep it in sync
      saveIndexedDBState(appState);
    } catch (e) {
      console.warn(
        "Storage access blocked or empty, falling back to app memory",
        e,
      );
    }
  }
}

function saveState() {
  try {
    localStorage.setItem("chronos_clock_state", JSON.stringify(appState));
  } catch (e) {
    console.warn(
      "Storage write blocked: state remains active in-memory",
      e,
    );
  }
  // Write to IndexedDB in background asynchronously
  saveIndexedDBState(appState);
}

// Adjust time string by offset minutes (wrapping around midnight)
function adjustTime(timeStr, minutesOffset) {
  if (!timeStr) return "";
  let [h, m] = timeStr.split(":").map(Number);
  let totalMin = h * 60 + m + minutesOffset;
  totalMin = ((totalMin % 1440) + 1440) % 1440;
  const newH = Math.floor(totalMin / 60);
  const newM = totalMin % 60;
  return `${String(newH).padStart(2, "0")}:${String(newM).padStart(2, "0")}`;
}

// Polar-to-cartesian coordinate conversion
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function timeToHours(timeStr) {
  if (!timeStr) return null;
  const [h, m] = timeStr.split(":").map(Number);
  return h + m / 60;
}

function describeArcPath(centerX, centerY, radius, startHour, endHour) {
  const startAngle = startHour * 15;
  let endAngle = endHour * 15;

  if (endAngle < startAngle) {
    endAngle += 360;
  }

  const start = polarToCartesian(centerX, centerY, radius, startAngle);
  const end = polarToCartesian(centerX, centerY, radius, endAngle);

  const arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    arcSweep,
    1,
    end.x,
    end.y,
  ].join(" ");
}

// Core Algorithmic Time Placement Engine
function calculateOptimalTimes(userAnchors, userStack, settings = {}) {
  let scheduledSupplements = [];
  
  const dayType = userAnchors.isRestDay ? "rest" : "training";
  const overrides = (settings.dayOfWeek !== undefined)
    ? (appState.weeklyOverrides[settings.dayOfWeek] || {})
    : (appState.overrides?.[dayType] || {});

  userStack.forEach(suppId => {
    const supp = SUPPLEMENT_DB[suppId];
    if (!supp) return;

    const override = overrides[suppId];
    const hasTimeOverride = override && override.time;
    const hasDoseOverride = override && override.dose;

    let targetTime = 0;
    let flags = [];
    let state = "active"; // active, muted, warned

    const dose = hasDoseOverride ? override.dose : supp.unit;

    if (hasTimeOverride) {
      targetTime = timeStringToMinutes(override.time);
      flags.push(`Manual timing: Set to ${override.time}.`);
      scheduledSupplements.push({
        ...supp,
        dose,
        targetTime,
        flags,
        state,
        isManual: true
      });
      return;
    }

    // REST DAY INTERCEPT: Strip out active training elements cleanly
    if (userAnchors.isRestDay && (supp.ruleType === "RELATIVE_TO_WORKOUT" || supp.ruleType === "SPAN_WORKOUT" || supp.ruleType === "EMPTY_STOMACH_BEFORE_WORKOUT")) {
      if (supp.id === "caffeine" || supp.id === "citrulline" || supp.id === "alpha_gpc" || supp.id === "eaas" || supp.id === "electrolytes") {
        return; // Remove completely from the timeline to clear visual clutter
      }
      if (supp.id === "whey" || supp.id === "beta_alanine") {
        // Pivot structural amino acids or multi-use powders to basic day maintenance positions
        targetTime = userAnchors.meals.breakfast || 600;
        flags.push("Rest Day Mode: Shifted to breakfast coverage.");
        scheduledSupplements.push({ ...supp, dose, targetTime, flags, state });
        return;
      }
    }

    // BETA-ALANINE TINGLE SPLIT OPTION: Split Beta-alanine into Breakfast & Pre-workout
    if (supp.id === "beta_alanine" && settings.splitBetaAlanine && !userAnchors.isRestDay) {
      let dose1 = "1.6g";
      let dose2 = "1.6g";
      if (hasDoseOverride) {
        const match = override.dose.match(/^([0-9.]+)\s*([a-zA-Z]*)$/);
        if (match) {
          const val = parseFloat(match[1]);
          const unitSymbol = match[2];
          dose1 = `${val / 2}${unitSymbol}`;
          dose2 = `${val / 2}${unitSymbol}`;
        } else {
          dose1 = override.dose;
          dose2 = override.dose;
        }
      }
      // Dose 1: Breakfast
      scheduledSupplements.push({
        ...supp,
        id: "beta_alanine_breakfast",
        name: "Beta-Alanine (Breakfast Split)",
        dose: dose1,
        targetTime: userAnchors.meals.breakfast || 600,
        flags: ["Split Dose: Breakfast portion to prevent paresthesia tingles."],
        state: "active"
      });
      // Dose 2: Pre-workout
      scheduledSupplements.push({
        ...supp,
        id: "beta_alanine_preworkout",
        name: "Beta-Alanine (Pre-Workout Split)",
        dose: dose2,
        targetTime: (userAnchors.workout.workout_start - 30 + 1440) % 1440,
        flags: ["Split Dose: Pre-workout portion to buffer lactic acid."],
        state: "active"
      });
      return;
    }

    // GENERAL CONSTRAINT EXECUTION SWITCH
    switch (supp.ruleType) {
      case "WITH_MEAL":
        targetTime = userAnchors.meals[supp.preferredMeal] || userAnchors.meals.breakfast || 600;
        break;
      case "RELATIVE_TO_WORKOUT":
        let workoutAnchorTime = userAnchors.workout[supp.anchor];
        targetTime = workoutAnchorTime + supp.offsetMinutes;
        break;
      case "RELATIVE_TO_SLEEP":
        targetTime = userAnchors.sleep[supp.anchor] + supp.offsetMinutes;
        break;
      case "SPAN_WORKOUT":
        // Maps a multi-time array to allow SVG to render a block path overlay
        targetTime = [userAnchors.workout.workout_start, userAnchors.workout.workout_end];
        break;
      case "WITH_HEAVIEST_MEAL":
        // Fallback tracking logic for the largest meal (dinner -> lunch -> breakfast)
        targetTime = userAnchors.meals.dinner || userAnchors.meals.lunch || userAnchors.meals.breakfast || 720;
        break;
      case "SPLIT_ALL_MEALS":
        // Outputs three individual child nodes directly into the visual array loop
        let splitDose = dose;
        const activeMealsCount = Object.values(userAnchors.meals).filter(Boolean).length || 3;
        if (hasDoseOverride) {
          const match = override.dose.match(/^([0-9.]+)\s*([a-zA-Z]*)$/);
          if (match) {
            const val = parseFloat(match[1]);
            const unitSymbol = match[2];
            splitDose = `${(val / activeMealsCount).toFixed(1).replace(/\.0$/, "")}${unitSymbol}`;
          }
        }
        Object.keys(userAnchors.meals).forEach(meal => {
          if (userAnchors.meals[meal]) {
            scheduledSupplements.push({
              ...supp,
              id: `${supp.id}_${meal}`,
              name: `${supp.name} (${meal.charAt(0).toUpperCase() + meal.slice(1)} Split)`,
              dose: splitDose,
              targetTime: userAnchors.meals[meal],
              flags: [`Dose synchronized with ${meal}.`],
              state: "active"
            });
          }
        });
        return; // Break parent wrapper intercept execution
      case "EMPTY_STOMACH_BEFORE_WORKOUT":
        targetTime = userAnchors.workout.workout_start + supp.offsetMinutes;
        break;
      case "SMART_CO_INGEST":
        if (userStack.includes("caffeine")) {
          // Sync cleanly with caffeine pre-workout targets instead of sleep markers
          targetTime = (userAnchors.workout.workout_start - 45);
          flags.push("Synergy Detected: Stacked alongside caffeine to suppress nervous jitters.");
        } else {
          targetTime = userAnchors.sleep[supp.fallbackAnchor] + supp.offsetMinutes;
        }
        break;
      case "CONDITIONAL_GOAL":
        if (settings.ashwagandhaGoal === "anxiety") {
          targetTime = userAnchors.meals.breakfast || 600;
          flags.push("Anxiety Management Goal: Scheduled with breakfast.");
        } else {
          targetTime = userAnchors.sleep[supp.defaultAnchor] + supp.offsetMinutes;
          flags.push("Sleep Support Goal: Scheduled 60m pre-bed.");
        }
        break;
      default:
        targetTime = 720; // Default center fallback noon line
    }

    // Ensure 24-hour mathematical wrap-around boundaries [0 - 1439 minutes]
    if (Array.isArray(targetTime)) {
      targetTime = targetTime.map(t => (t + 1440) % 1440);
    } else {
      targetTime = (targetTime + 1440) % 1440;
    }
    scheduledSupplements.push({ ...supp, dose, targetTime, flags, state });
  });

  // Run Conflict & Optimization Checks over the generated array map
  return resolveInterferenceConflicts(scheduledSupplements, userAnchors, userStack);
}

// Structural Optimization & Interference Resolution Engine
function resolveInterferenceConflicts(scheduledList, userAnchors, rawStack) {
  const sleepStart = userAnchors.sleep.sleep_start;
  scheduledList.forEach(item => {
    // Conflict 1: Caffeine Sleep-Architecture Proximity Rule
    if (item.id === "caffeine" && !userAnchors.isRestDay) {
      let timeToSleep = (sleepStart - item.targetTime + 1440) % 1440;
      if (timeToSleep < 360) { // Falls within 6 hours of bedtime
        item.state = "warned";
        item.flags.push("CRITICAL ALERT: Caffeine taken within 6 hours of sleep. High risk of suppressing melatonin and altering slow-wave delta sleep architecture.");
        item.color = "#d90429"; // Render marker red
      }
    }

    // Conflict 2: L-Tyrosine Empty-Stomach Interference Regulation
    if (item.id === "tyrosine" && !userAnchors.isRestDay) {
      Object.keys(userAnchors.meals).forEach(mealKey => {
        const mealTime = userAnchors.meals[mealKey];
        if (mealTime) {
          let diff = Math.min((item.targetTime - mealTime + 1440) % 1440, (mealTime - item.targetTime + 1440) % 1440);
          
          const wheyScheduled = scheduledList.find(x => x.id === "whey");
          let wheyDistance = 9999;
          if (wheyScheduled) {
            wheyDistance = Math.min((item.targetTime - wheyScheduled.targetTime + 1440) % 1440, (wheyScheduled.targetTime - item.targetTime + 1440) % 1440);
          }

          if (diff < 60 || wheyDistance < 30) {
            item.state = "warned";
            item.flags.push("ABSORPTION BLOCKED: Competitor amino acids nearby. Take Tyrosine at least 60m away from whole proteins or whey shakes.");
          }
        }
      });
    }

    // Conflict 3: ZMA / Magnesium Absorption Divalent Calcium Conflict Loop
    if (item.id === "zma" || item.id === "magnesium_glycinate") {
      const dinnerTime = userAnchors.meals.dinner;
      const caseinTime = rawStack.includes("casein") ? ((userAnchors.sleep.sleep_start - 30 + 1440) % 1440) : null;
            
      let dinnerConflict = dinnerTime && (Math.min((item.targetTime - dinnerTime + 1440) % 1440, (dinnerTime - item.targetTime + 1440) % 1440) < 90);
      let caseinConflict = caseinTime && (Math.min((item.targetTime - caseinTime + 1440) % 1440, (caseinTime - item.targetTime + 1440) % 1440) < 60);

      if (dinnerConflict || caseinConflict) {
        item.state = "muted"; // Visual dimming state wrapper on the SVG ring
        item.flags.push("ABSORPTION INTERFERENCE: High concentration of calcium nearby. Calcium competes for identical transport carriers. Shift ZMA/Magnesium further from dairy/casein.");
      }
    }

    // Conflict 4: Vitamin D3 Circadian Signaling Alignment Lockout
    if (item.id === "vit_d3_k2") {
      if (item.targetTime > 960 || item.targetTime < 300) { // 16:00 / 4:00 PM boundary threshold
        item.state = "warned";
        item.flags.push("CIRCADIAN ALERT: Vitamin D3 synthesized past late afternoon can suppress physiological melatonin pathways.");
      }
    }
  });
  return scheduledList;
}

// Render Dial Ticks
function renderDialTicks() {
  const ticksGroup = document.getElementById("clock-ticks");
  ticksGroup.innerHTML = "";

  for (let h = 0; h < 24; h++) {
    const angle = h * 15;
    const isMajor = h % 6 === 0;
    const isMedium = h % 3 === 0 && !isMajor;

    let startR = 88;
    if (isMajor) startR = 84;
    else if (isMedium) startR = 86;

    const ptStart = polarToCartesian(100, 100, startR, angle);
    const ptEnd = polarToCartesian(100, 100, 92, angle);

    const line = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line",
    );
    line.setAttribute("x1", ptStart.x);
    line.setAttribute("y1", ptStart.y);
    line.setAttribute("x2", ptEnd.x);
    line.setAttribute("y2", ptEnd.y);
    line.setAttribute("class", isMajor ? "tick-major" : "tick-minor");
    ticksGroup.appendChild(line);

    if (h % 6 === 0) {
      const textPt = polarToCartesian(100, 100, 76, angle);
      const text = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text",
      );
      text.setAttribute("x", textPt.x);
      text.setAttribute("y", textPt.y);
      text.setAttribute("class", "tick-text");
      text.textContent = String(h).padStart(2, "0");
      ticksGroup.appendChild(text);
    }
  }
}

// // Render SVG Segments & Markers
function renderClockSegments(scheduledSupps, userAnchors, dayOfWeek) {
  const sched = appState.weeklySchedules[dayOfWeek];
  const dayType = appState.dayType;

  // 1. Sleep Segment Arc
  const sleepStart = timeToHours(sched.sleepStart);
  const sleepEnd = timeToHours(sched.sleepEnd);
  const sleepArc = document.getElementById("sleep-arc");
  const sleepArcBg = document.getElementById("sleep-arc-bg");

  if (sleepStart !== null && sleepEnd !== null) {
    const pathData = describeArcPath(100, 100, 85, sleepStart, sleepEnd);
    sleepArc.setAttribute("d", pathData);
    sleepArc.setAttribute("stroke-width", "6");
    sleepArcBg.setAttribute("d", pathData);
    sleepArcBg.setAttribute("stroke-width", "6");
    sleepArc.style.display = "block";
    sleepArcBg.style.display = "block";
  } else {
    sleepArc.style.display = "none";
    sleepArcBg.style.display = "none";
  }

  // 2. Workout Segment Arc
  const workoutArc = document.getElementById("workout-arc");
  const workoutArcBg = document.getElementById("workout-arc-bg");

  if (dayType === "training" && sched.workoutStart && sched.workoutEnd) {
    const workStart = timeToHours(sched.workoutStart);
    const workEnd = timeToHours(sched.workoutEnd);
    const pathData = describeArcPath(100, 100, 85, workStart, workEnd);

    workoutArc.setAttribute("d", pathData);
    workoutArc.setAttribute("stroke-width", "6");
    workoutArcBg.setAttribute("d", pathData);
    workoutArcBg.setAttribute("stroke-width", "6");
    workoutArc.style.display = "block";
    workoutArcBg.style.display = "block";
  } else {
    workoutArc.style.display = "none";
    workoutArcBg.style.display = "none";
  }

  // 3. Meal Anchors (Breakfast, Lunch, Dinner - green diamonds on r=42)
  const mealGroup = document.getElementById("meal-markers");
  mealGroup.innerHTML = "";

  const meals = [
    { name: "breakfast", time: sched.breakfast, label: "Breakfast" },
    { name: "lunch", time: sched.lunch, label: "Lunch" },
    { name: "dinner", time: sched.dinner, label: "Dinner" },
  ];

  if (sched.additionalMeals) {
    sched.additionalMeals.forEach(m => {
      if (m.time) {
        meals.push({ name: m.id, time: m.time, label: m.name });
      }
    });
  }

  meals.forEach((m) => {
    if (!m.time) return;
    const hr = timeToHours(m.time);
    const pt = polarToCartesian(100, 100, 42, hr * 15);

    const diamond = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon",
    );
    const size = 3;
    const pts = `${pt.x},${pt.y - size} ${pt.x + size},${pt.y} ${pt.x},${pt.y + size} ${pt.x - size},${pt.y}`;
    diamond.setAttribute("points", pts);
    diamond.setAttribute("class", "meal-anchor");
    diamond.setAttribute("data-meal", m.name);
    diamond.style.cursor = "pointer";
    diamond.addEventListener("click", () => {
      focusTimelineCard(`meal-${m.name}`);
      highlightClockSegment(`meal-${m.name}`);
    });

    const title = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "title",
    );
    title.textContent = `Anchor Meal: ${m.label} (${m.time})`;
    diamond.appendChild(title);
    mealGroup.appendChild(diamond);
  });

  // 4. Dynamic active supplement markers
  const suppGroup = document.getElementById("supp-markers");
  suppGroup.innerHTML = "";

  scheduledSupps.forEach((item) => {
    let r = 58; // default health
    let color = item.color || "var(--cat-health)";

    if (item.category === "muscle") {
      r = 74;
    } else if (item.category === "performance") {
      r = 66;
    } else if (item.category === "health") {
      r = 58;
    } else if (item.category === "sleep") {
      r = 50;
    }

    let opacity = 1;
    if (item.state === "muted") {
      opacity = 0.25; // Calcium interference or similar: dim marker
    }

    if (Array.isArray(item.targetTime)) {
      // SPAN_WORKOUT: Render as continuous arc segment
      const [startMin, endMin] = item.targetTime;
      const startHr = startMin / 60;
      const endHr = endMin / 60;
      const pathData = describeArcPath(100, 100, r, startHr, endHr);

      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path",
      );
      path.setAttribute("d", pathData);
      path.setAttribute("stroke", color);
      path.setAttribute("stroke-width", "3.5");
      path.setAttribute("fill", "none");
      path.setAttribute("stroke-linecap", "round");
      path.setAttribute("class", "supp-arc");
      path.setAttribute("data-supp", item.id);
      path.style.opacity = opacity;
      path.style.cursor = "pointer";
      path.addEventListener("click", () => {
        focusTimelineCard(item.id);
        highlightClockSegment(item.id);
      });

      const title = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "title",
      );
      title.textContent = `${item.name} spanning ${minutesToTimeString(startMin)} to ${minutesToTimeString(endMin)}`;
      path.appendChild(title);
      suppGroup.appendChild(path);
    } else {
      // Standard dot
      const hr = item.targetTime / 60;
      const pt = polarToCartesian(100, 100, r, hr * 15);

      const dot = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle",
      );
      dot.setAttribute("cx", pt.x);
      dot.setAttribute("cy", pt.y);
      dot.setAttribute("r", "3.5");
      dot.setAttribute("fill", color);
      dot.setAttribute("stroke", "#0c0c0e");
      dot.setAttribute("stroke-width", "0.75");
      dot.setAttribute("class", "supp-dot");
      dot.setAttribute("data-supp", item.id);
      dot.style.opacity = opacity;
      dot.style.cursor = "pointer";
      dot.addEventListener("click", () => {
        focusTimelineCard(item.id);
        highlightClockSegment(item.id);
      });

      const title = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "title",
      );
      title.textContent = `${item.name} at ${minutesToTimeString(item.targetTime)}`;
      dot.appendChild(title);
      suppGroup.appendChild(dot);
    }

    // Draw clash warning triangle if needed
    if (item.state === "warned" || item.state === "muted") {
      let angleDegrees;
      if (Array.isArray(item.targetTime)) {
        angleDegrees = (item.targetTime[0] / 60) * 15;
      } else {
        angleDegrees = (item.targetTime / 60) * 15;
      }
      
      const ptTip = polarToCartesian(100, 100, 93, angleDegrees);
      const ptLeft = polarToCartesian(100, 100, 100, angleDegrees - 2);
      const ptRight = polarToCartesian(100, 100, 100, angleDegrees + 2);
      
      const triangle = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
      triangle.setAttribute("points", `${ptTip.x},${ptTip.y} ${ptLeft.x},${ptLeft.y} ${ptRight.x},${ptRight.y}`);
      triangle.setAttribute("fill", "#ef4444"); // Always pure red
      triangle.setAttribute("class", "clash-triangle");
      
      const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
      title.textContent = `Clash detected: ${item.name}`;
      triangle.appendChild(title);
      suppGroup.appendChild(triangle);
    }
  });
}

// Highlight specific events in the SVG clock face when clicking list item
let highlightTimeout = null;
function highlightClockSegment(type) {
  if (!type) return; // Safety guard
  if (highlightTimeout) clearTimeout(highlightTimeout);

  const segments = document.querySelectorAll(
    ".arc-segment, .supp-dot, .meal-anchor",
  );
  segments.forEach((el) => {
    el.classList.remove("highlighted");
    el.classList.add("dimmed");
  });

  if (type === "sleep") {
    document.getElementById("sleep-arc").classList.add("highlighted");
    document.getElementById("sleep-arc").classList.remove("dimmed");
  } else if (type === "workout") {
    const workoutArc = document.getElementById("workout-arc");
    if (workoutArc.style.display !== "none") {
      workoutArc.classList.add("highlighted");
      workoutArc.classList.remove("dimmed");
    }
  } else if (type.startsWith("meal-")) {
    const mealName = type.replace("meal-", "");
    document
      .querySelectorAll(`[data-meal="${mealName}"]`)
      .forEach((el) => {
        el.classList.add("highlighted");
        el.classList.remove("dimmed");
      });
  } else {
    // Individual supplement type
    document.querySelectorAll(`[data-supp="${type}"]`).forEach((el) => {
      el.classList.add("highlighted");
      el.classList.remove("dimmed");
    });
  }

  highlightTimeout = setTimeout(() => {
    segments.forEach((el) => {
      el.classList.remove("highlighted", "dimmed");
    });
  }, 2500);
}

// Build chronological timeline event list
function renderTimeline(scheduledSupps, userAnchors, dayOfWeek) {
  const sched = appState.weeklySchedules[dayOfWeek];
  const dayType = appState.dayType;
  const listEl = document.getElementById("timeline-list");
  listEl.innerHTML = "";

  // 1. Gather and display warnings
  const warnings = [];
  scheduledSupps.forEach(item => {
    if (item.state === "warned" || item.state === "muted") {
      const severity = item.state === "warned" ? "severe" : "moderate";
      const title = item.state === "warned" ? "Circadian / Safety Hazard" : "Absorption Interference";
      item.flags.forEach(flag => {
        warnings.push({
          id: item.id,
          severity: severity,
          title: title,
          message: flag
        });
      });
    }
  });
  renderWarningsPanel(warnings);

  const slots = {};

  const addSupplementToSlot = (item, timeStr) => {
    if (!timeStr) return;
    if (!slots[timeStr]) {
      slots[timeStr] = { time: timeStr, type: "supplements", items: [] };
    } else if (!slots[timeStr].items) {
      slots[timeStr].items = [];
    }
    slots[timeStr].items.push(item);
  };

  // 1. Map all anchors
  if (sched.sleepStart && sched.sleepEnd) {
    slots[sched.sleepStart] = {
      time: sched.sleepStart,
      type: "sleep_start",
      title: "Sleep Wind-down",
      desc: "Start parasympathetic wind-down. Prepare for cell recovery.",
      items: [],
    };
    slots[sched.sleepEnd] = {
      time: sched.sleepEnd,
      type: "sleep_end",
      title: "Wake Up & Circadian Start",
      desc: "Immediate exposure to light to anchor sleep-wake rhythms.",
      items: [],
    };
  }

  if (dayType === "training" && sched.workoutStart && sched.workoutEnd) {
    slots[sched.workoutStart] = {
      time: sched.workoutStart,
      type: "workout_start",
      title: "Workout Window Begins",
      desc: "Optimal body temp window for physical training.",
      items: [],
    };
    slots[sched.workoutEnd] = {
      time: sched.workoutEnd,
      type: "workout_end",
      title: "Workout Window Ends",
      desc: "Begin post-workout protein assimilation.",
      items: [],
    };
  }

  if (sched.breakfast)
    slots[sched.breakfast] = {
      time: sched.breakfast,
      type: "meal_breakfast",
      title: "Breakfast Stack Window",
      desc: "Anchor nutrient assimilation window.",
      items: [],
    };
  if (sched.lunch)
    slots[sched.lunch] = {
      time: sched.lunch,
      type: "meal_lunch",
      title: "Lunch Stack Window",
      desc: "Mid-day performance macro refueling.",
      items: [],
    };
  if (sched.dinner)
    slots[sched.dinner] = {
      time: sched.dinner,
      type: "meal_dinner",
      title: "Dinner Stack Window",
      desc: "Pre-fasting evening recovery meal.",
      items: [],
    };

  if (sched.additionalMeals) {
    sched.additionalMeals.forEach(m => {
      if (m.time) {
        slots[m.time] = {
          time: m.time,
          type: `meal_${m.id}`,
          title: `${m.name} Stack Window`,
          desc: "Custom scheduled anchor meal.",
          items: [],
        };
      }
    });
  }

  // 2. Map active supplements to slots
  scheduledSupps.forEach((item) => {
    const timeStr = Array.isArray(item.targetTime)
      ? minutesToTimeString(item.targetTime[0])
      : minutesToTimeString(item.targetTime);
    addSupplementToSlot(item, timeStr);
  });

  // Sort keys chronologically
  const sortedTimes = Object.keys(slots).sort(
    (a, b) => timeToHours(a) - timeToHours(b),
  );

  sortedTimes.forEach((timeStr) => {
    const slot = slots[timeStr];
    const item = document.createElement("div");
    item.className = "timeline-item";

    let typeIndicatorClass = "indicator-supp";
    let titleText = slot.title || "Scheduled Event";
    let descText = slot.desc || "";
    let tapType = "";

    if (slot.type === "sleep_start" || slot.type === "sleep_end") {
      typeIndicatorClass = "indicator-sleep";
      tapType = "sleep";
    } else if (
      slot.type === "workout_start" ||
      slot.type === "workout_end"
    ) {
      typeIndicatorClass = "indicator-workout";
      tapType = "workout";
    } else if (slot.type.startsWith("meal_")) {
      typeIndicatorClass = "indicator-meal";
      tapType = `meal-${slot.type.replace("meal_", "")}`;
    }

    // Build supplements block HTML if any fall into this slot time
    let suppsBlockHtml = "";
    let hasClash = false;

    if (slot.items && slot.items.length > 0) {
      typeIndicatorClass = "indicator-supp";

      let boxClass = "supp-box-generic";
      if (slot.type === "sleep_start") boxClass = "supp-box-sleep";
      else if (slot.type === "workout_start")
        boxClass = "supp-box-workout";
      else if (slot.type.startsWith("meal_")) boxClass = "supp-box-meal";

      const tagsHtml = slot.items
        .map((suppItem) => {
          let tagWarnClass = "";
          let warningText = "";

          if (suppItem.state === "warned") {
            tagWarnClass = "tag-warn";
            warningText = " ⚠ Alert";
            hasClash = true;
          } else if (suppItem.state === "muted") {
            tagWarnClass = "tag-warn";
            warningText = " ⚠ Clash";
            hasClash = true;
          }

          return `
        <span class="supp-tag tag-${suppItem.category} ${tagWarnClass}" onclick="event.stopPropagation(); highlightClockSegment('${suppItem.id}')">
          ${suppItem.name} (${suppItem.dose || suppItem.unit})${warningText ? ` <span style="font-size: 8px; font-weight:700;">${warningText}</span>` : ""}
          <button class="tag-edit-btn" onclick="event.stopPropagation(); openAdjustSupplementDrawer('${suppItem.id}')" title="Edit timing/dosage">
            <span class="material-symbols-outlined">edit</span>
          </button>
        </span>
      `;
        })
        .join("");

      suppsBlockHtml = `
      <div class="supplements-box ${boxClass}">
        <div class="supp-label">Active Supplement Stack</div>
        <div class="supp-tags">
          ${tagsHtml}
        </div>
      </div>
    `;
    }

    if (slot.type === "supplements") {
      titleText = "Supplement Ingestion Window";
      descText = "Timed absorption target.";
      if (slot.items.length === 1) {
        const info = slot.items[0];
        titleText = `${info.name} Ingestion`;
        descText = info.desc;
      }
      tapType = slot.items[0].id;
    }

    item.setAttribute("data-timeline-id", tapType);

    item.innerHTML = `
    <div class="timeline-item-indicator ${typeIndicatorClass}"></div>
    <div class="timeline-item-content">
      <div class="timeline-item-header">
        <span class="time-text">${timeStr}</span>
      </div>
      <div class="event-title">${titleText}</div>
      <div class="event-details">${descText}</div>
      ${suppsBlockHtml}
    </div>
  `;
    if (hasClash) {
      item.classList.add("has-clash");
    }

    item.addEventListener("click", () => {
      highlightClockSegment(tapType);
    });

    listEl.appendChild(item);
  });

  // Inject rest optimization status badge
  if (dayType === "rest") {
    const banner = document.createElement("div");
    banner.className = "warning-card warning-card-success";
    banner.innerHTML = `
    <div class="warning-icon">💤</div>
    <div class="warning-content">
      <div class="warning-title" style="color:#a5b4fc">Rest Day Adjustments Active</div>
      <div class="warning-message" style="color:#cbd5e1">Workout stack suspended (Caffeine, Citrulline, EAAs, Electrolytes suspended). Beta-Alanine and Whey Protein safely shifted to morning. ZMA omitted.</div>
    </div>
  `;
    listEl.prepend(banner);
  }
}

// Render Warnings Box
function renderWarningsPanel(warnings) {
  const panel = document.getElementById("warnings-panel");
  panel.innerHTML = "";

  if (warnings.length === 0) {
    panel.classList.remove("sticky-warnings");
    const card = document.createElement("div");
    card.className = "warning-card warning-card-success";
    card.innerHTML = `
    <div class="warning-icon">✓</div>
    <div class="warning-content">
      <div class="warning-title">Circadian Stack Optimized</div>
      <div class="warning-message">All active supplements are perfectly aligned. Zero absorption or circadian conflicts detected.</div>
    </div>
  `;
    panel.appendChild(card);
    return;
  }

  panel.classList.add("sticky-warnings");
  warnings.forEach((w) => {
    const card = document.createElement("div");
    card.className = `warning-card warning-card-${w.severity}`;

    let icon = "⚠";
    if (w.severity === "severe") icon = "🛑";
    else if (w.severity === "moderate") icon = "⚡";

    card.innerHTML = `
    <div class="warning-icon">${icon}</div>
    <div class="warning-content">
      <div class="warning-title">${w.title}</div>
      <div class="warning-message">${w.message}</div>
    </div>
  `;
    panel.appendChild(card);
  });
}

// Update digital display and clock hands
function updateClockHands() {
  const now = new Date();
  
  // Calculate view date
  const viewDate = new Date();
  if (appState.viewDateOffset !== 0) {
    viewDate.setDate(viewDate.getDate() + appState.viewDateOffset);
  }

  // Only the digital time displays the actual current time always
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  const timeStr = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  document.getElementById("digital-time").textContent = timeStr;

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  
  let dateStr = `${days[viewDate.getDay()]}, ${months[viewDate.getMonth()]} ${viewDate.getDate()}`;
  if (appState.viewDateOffset === -1) dateStr = "Yesterday";
  else if (appState.viewDateOffset === 1) dateStr = "Tomorrow";
  else if (appState.viewDateOffset !== 0) dateStr = `${dateStr}`;
  
  document.getElementById("digital-date").textContent = dateStr;

  const pointer = document.getElementById("current-time-pointer");
  const dot = document.getElementById("current-time-dot");

  if (appState.viewDateOffset !== 0) {
    pointer.style.display = "none";
    dot.style.display = "none";
  } else {
    pointer.style.display = "block";
    dot.style.display = "block";
    const totalHours = h + m / 60 + s / 3600;
    const angle = totalHours * 15;

    const ptStart = polarToCartesian(100, 100, 36, angle);
    const ptEnd = polarToCartesian(100, 100, 91, angle);

    pointer.setAttribute("x1", ptStart.x);
    pointer.setAttribute("y1", ptStart.y);
    pointer.setAttribute("x2", ptEnd.x);
    pointer.setAttribute("y2", ptEnd.y);

    dot.setAttribute("cx", ptEnd.x);
    dot.setAttribute("cy", ptEnd.y);
  }

  const centerGroup = document.getElementById("clock-center-group");
  if (appState.viewDateOffset !== 0) {
    centerGroup.style.cursor = "pointer";
  } else {
    centerGroup.style.cursor = "default";
  }
}

function changeViewDate(offsetDelta) {
  appState.viewDateOffset += offsetDelta;
  
  // Re-evaluate what day type this viewed date is
  const viewDate = new Date();
  viewDate.setDate(viewDate.getDate() + appState.viewDateOffset);
  
  const dayOfWeek = viewDate.getDay();
  const isTrainingDay = appState.weeklySchedule[dayOfWeek];
  
  appState.dayType = isTrainingDay ? "training" : "rest";
  
  // Update the UI
  setDayType(appState.dayType); // this calls saveState and renderAll
}

function resetViewDate() {
  if (appState.viewDateOffset === 0) return;
  appState.viewDateOffset = 0;
  
  const today = new Date().getDay();
  const isTrainingDay = appState.weeklySchedule[today];
  appState.dayType = isTrainingDay ? "training" : "rest";
  
  setDayType(appState.dayType);
}

// Manage Supplement Drawer logic
function openSupplementsDrawer(resetContext = true) {
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const viewDate = new Date();
  viewDate.setDate(viewDate.getDate() + appState.viewDateOffset);
  const dayOfWeek = viewDate.getDay();

  if (resetContext) {
    menuContext = dayOfWeek; // menuContext stores the viewed dayOfWeek index (0-6)
  }

  // Update day-type badge
  const isTrainingDay = appState.weeklySchedule[menuContext];
  const badge = document.getElementById("supp-day-type-badge");
  if (badge) {
    badge.textContent = isTrainingDay ? "Training Day" : "Rest Day";
    badge.className = `supp-day-type-badge ${isTrainingDay ? "badge-training" : "badge-rest"}`;
  }

  updateCopyOptionsDropdown();

  const container = document.getElementById("supplements-list-container");
  if (!container) return;
  container.innerHTML = "";

  const categories = {
    muscle: { name: "Muscle & Strength Stacking", class: "tag-muscle" },
    performance: {
      name: "Performance & Stimulants",
      class: "tag-performance",
    },
    health: { name: "Vital Health & Adaptogens", class: "tag-health" },
    sleep: { name: "Sleep & Night Recovery", class: "tag-sleep" },
  };

  Object.keys(categories).forEach((catKey) => {
    const cat = categories[catKey];
    const groupTitle = document.createElement("div");
    groupTitle.className = "form-group-title";
    groupTitle.textContent = cat.name;
    container.appendChild(groupTitle);

    const groupDiv = document.createElement("div");
    groupDiv.className = "supplements-group";

    Object.keys(SUPPLEMENT_DB).forEach((id) => {
      const supp = SUPPLEMENT_DB[id];
      if (supp.category !== catKey) return;

      const activeList = appState.weeklySupplements[menuContext] || [];
      const isActive = activeList.includes(id);

      const item = document.createElement("div");
      item.className = "supp-list-item";

      const customDose = (isActive && appState.weeklyOverrides?.[menuContext]?.[id]?.dose)
        ? appState.weeklyOverrides[menuContext][id].dose
        : supp.unit;

      const editButtonHtml = isActive ? `
        <button type="button" class="supp-item-edit-btn" data-id="${id}" title="Adjust dose/timing">
          <span class="material-symbols-outlined">edit</span>
        </button>
      ` : "";

      item.innerHTML = `
      <div class="supp-item-info">
        <div class="supp-item-name-row">
          <span class="supp-item-name">${supp.name}</span>
          <span class="supp-item-dose">${customDose}</span>
          ${editButtonHtml}
        </div>
        <div class="supp-item-desc">${supp.desc}</div>
      </div>
      <label class="switch">
        <input type="checkbox" data-id="${id}" ${isActive ? "checked" : ""}>
        <span class="slider"></span>
      </label>
    `;

      if (isActive) {
        item.querySelector(".supp-item-edit-btn").addEventListener("click", (e) => {
          e.stopPropagation();
          openAdjustSupplementDrawer(id);
        });
      }

      item.addEventListener("click", (e) => {
        if (e.target.closest('.switch') || e.target.closest('.supp-item-edit-btn')) return;
        const input = item.querySelector("input");
        input.checked = !input.checked;
        input.dispatchEvent(new Event("change"));
      });

      item.querySelector("input").addEventListener("change", (e) => {
        const suppId = e.target.getAttribute("data-id");
        const list = appState.weeklySupplements[menuContext] || [];
        if (e.target.checked) {
          if (!list.includes(suppId)) {
            list.push(suppId);
          }
        } else {
          appState.weeklySupplements[menuContext] = list.filter(
            (x) => x !== suppId,
          );
        }
        saveState();
        renderAll();
        openSupplementsDrawer(false);
      });

      groupDiv.appendChild(item);
    });

    container.appendChild(groupDiv);
  });
}

function updateCopyOptionsDropdown() {
  const select = document.getElementById("copy-from-day-select");
  select.innerHTML = '<option value="">Select day...</option>';

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let hasOptions = false;
  for (let i = 0; i < 7; i++) {
    if (i === menuContext) continue; // skip current day
    // Only show days that have been configured (have at least one supplement)
    const dayStack = appState.weeklySupplements[i] || [];
    if (dayStack.length > 0) {
      const isTraining = appState.weeklySchedule[i];
      const opt = document.createElement("option");
      opt.value = i;
      opt.textContent = `${dayNames[i]} (${isTraining ? "Training" : "Rest"})`;
      select.appendChild(opt);
      hasOptions = true;
    }
  }

  const copyContainer = document.getElementById("supplements-copy-container");
  copyContainer.style.display = hasOptions ? "block" : "none";
}

function closeSupplementsDrawer() {
  closeSupplementsSetupDrawer();
}

function openSideMenu() {
  document.getElementById("side-menu-overlay").classList.add("active");
  document.getElementById("side-menu").classList.add("active");

  const viewDate = new Date();
  viewDate.setDate(viewDate.getDate() + appState.viewDateOffset);
  const dayOfWeek = viewDate.getDay();
  selectDayInWeeklyPlanner(dayOfWeek);
}

function closeSideMenu() {
  document.getElementById("side-menu-overlay").classList.remove("active");
  document.getElementById("side-menu").classList.remove("active");
}

let activeAdjustSuppId = null;

function openAdjustSupplementDrawer(suppId) {
  activeAdjustSuppId = suppId;
  const supp = SUPPLEMENT_DB[suppId];
  if (!supp) return;

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const isTraining = appState.weeklySchedule[menuContext];
  const dayType = isTraining ? "training" : "rest";

  const overrides = appState.weeklyOverrides?.[menuContext] || {};
  const override = overrides[suppId];
  
  document.getElementById("adjust-supp-title").textContent = `Adjust ${supp.name}`;
  document.getElementById("adjust-supp-subtitle").textContent = `${supp.name} Settings (${dayNames[menuContext]} - ${isTraining ? "Training" : "Rest"})`;

  const doseInput = document.getElementById("adjust-supp-dose");
  doseInput.value = (override && override.dose) ? override.dose : supp.unit;

  const timeInput = document.getElementById("adjust-supp-time");
  
  // Calculate default suggested time to display as info
  const currentSched = appState.weeklySchedules[menuContext];
  const userAnchors = {
    isRestDay: !isTraining,
    meals: {
      breakfast: timeStringToMinutes(currentSched.breakfast),
      lunch: timeStringToMinutes(currentSched.lunch),
      dinner: timeStringToMinutes(currentSched.dinner)
    },
    workout: {
      workout_start: timeStringToMinutes(currentSched.workoutStart),
      workout_end: timeStringToMinutes(currentSched.workoutEnd)
    },
    sleep: {
      sleep_start: timeStringToMinutes(currentSched.sleepStart),
      sleep_end: timeStringToMinutes(currentSched.sleepEnd)
    }
  };
  const settings = {
    splitBetaAlanine: appState.splitBetaAlanine,
    ashwagandhaGoal: appState.ashwagandhaGoal,
    dayOfWeek: menuContext
  };
  
  // Save overrides temporarily to compute the normal timing
  const originalWeeklyOverrides = appState.weeklyOverrides[menuContext];
  const tempWeeklyOverrides = JSON.parse(JSON.stringify(appState.weeklyOverrides[menuContext] || {}));
  delete tempWeeklyOverrides[suppId];
  
  appState.weeklyOverrides[menuContext] = tempWeeklyOverrides;
  const tempScheduled = calculateOptimalTimes(userAnchors, [suppId], settings);
  appState.weeklyOverrides[menuContext] = originalWeeklyOverrides;

  let defaultTimeStr = "12:00";
  if (tempScheduled.length > 0) {
    let tVal = tempScheduled[0].targetTime;
    if (Array.isArray(tVal)) tVal = tVal[0];
    defaultTimeStr = minutesToTimeString(tVal);
  }

  const timingToggle = document.getElementById("adjust-supp-timing-toggle");
  const autoBtn = timingToggle.querySelector('[data-timing="auto"]');
  const manualBtn = timingToggle.querySelector('[data-timing="manual"]');
  const timeField = document.getElementById("adjust-supp-time-field");

  if (override && override.time) {
    autoBtn.classList.remove("active");
    manualBtn.classList.add("active");
    timeInput.value = override.time;
    timeField.style.display = "block";
  } else {
    autoBtn.classList.add("active");
    manualBtn.classList.remove("active");
    timeInput.value = defaultTimeStr;
    timeField.style.display = "none";
  }

  // Open sheets
  document.getElementById("sheet-overlay").classList.add("active");
  document.getElementById("adjust-supplement-sheet").classList.add("active");

  updateAdjustSuppClashPreview(suppId);
}

function closeAdjustSupplementDrawer() {
  document.getElementById("sheet-overlay").classList.remove("active");
  document.getElementById("adjust-supplement-sheet").classList.remove("active");
  activeAdjustSuppId = null;
}

function updateAdjustSuppClashPreview(suppId) {
  const isManual = document.querySelector("#adjust-supp-timing-toggle .active").getAttribute("data-timing") === "manual";
  const customTime = document.getElementById("adjust-supp-time").value;
  const customDose = document.getElementById("adjust-supp-dose").value;
  const previewDiv = document.getElementById("adjust-supp-clash-preview");

  const tempOverrides = JSON.parse(JSON.stringify(appState.weeklyOverrides || { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {} }));
  
  if (!tempOverrides[menuContext]) {
    tempOverrides[menuContext] = {};
  }
  
  tempOverrides[menuContext][suppId] = {
    dose: customDose,
    time: isManual ? customTime : null
  };

  const currentSched = appState.weeklySchedules[menuContext];
  const isTraining = appState.weeklySchedule[menuContext];
  const userAnchors = {
    isRestDay: !isTraining,
    meals: {
      breakfast: timeStringToMinutes(currentSched.breakfast),
      lunch: timeStringToMinutes(currentSched.lunch),
      dinner: timeStringToMinutes(currentSched.dinner)
    },
    workout: {
      workout_start: timeStringToMinutes(currentSched.workoutStart),
      workout_end: timeStringToMinutes(currentSched.workoutEnd)
    },
    sleep: {
      sleep_start: timeStringToMinutes(currentSched.sleepStart),
      sleep_end: timeStringToMinutes(currentSched.sleepEnd)
    }
  };

  const viewDate = new Date();
  viewDate.setDate(viewDate.getDate() + appState.viewDateOffset);
  const dayOfWeek = viewDate.getDay();

  const settings = {
    splitBetaAlanine: appState.splitBetaAlanine,
    ashwagandhaGoal: appState.ashwagandhaGoal,
    dayOfWeek: dayOfWeek
  };

  const originalWeeklyOverrides = appState.weeklyOverrides[dayOfWeek];
  appState.weeklyOverrides[dayOfWeek] = tempOverrides[dayOfWeek];
  
  const tempScheduled = calculateOptimalTimes(userAnchors, appState.weeklySupplements[dayOfWeek], settings);
  
  appState.weeklyOverrides[dayOfWeek] = originalWeeklyOverrides;

  const targetId = suppId;
  const relevantWarnings = [];
  tempScheduled.forEach(item => {
    if (item.id === targetId || item.id.startsWith(targetId + "_") || item.id.replace("_breakfast", "").replace("_preworkout", "") === targetId) {
      if (item.state === "warned" || item.state === "muted") {
        item.flags.forEach(flag => {
          relevantWarnings.push(flag);
        });
      }
    }
  });

  if (relevantWarnings.length > 0) {
    previewDiv.className = "adjust-clash-preview active-warning";
    previewDiv.innerHTML = `<strong>Clash/Interference Warning:</strong><br>${relevantWarnings.join("<br>")}`;
  } else {
    previewDiv.className = "adjust-clash-preview active-success";
    previewDiv.innerHTML = `✓ Timing optimized. No circadian or absorption clashes detected.`;
  }
}

// UI Drawer Form Handlers
function updateContextToggles() {
  document.querySelectorAll(".context-btn").forEach((btn) => {
    if (btn.getAttribute("data-context") === menuContext) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function addMealRowToDOM(id, name, time) {
  const container = document.getElementById("additional-meals-list");
  const row = document.createElement("div");
  row.className = "additional-meal-row";
  row.setAttribute("data-meal-id", id);

  row.innerHTML = `
    <input type="text" class="text-input meal-name-input" placeholder="e.g. Snack 1" value="${name}" required />
    <input type="text" id="input_${id}" class="time-input meal-time-input" value="${time}" readonly required />
    <button type="button" class="meal-delete-btn" title="Delete Meal">
      <span class="material-symbols-outlined">delete</span>
    </button>
  `;

  // Bind click trigger for custom meal time input to picker
  const timeInput = row.querySelector(".meal-time-input");
  timeInput.addEventListener("click", () => {
    const label = row.querySelector(".meal-name-input").value.trim() || "Custom Meal";
    openTimePicker(timeInput.id, label);
  });

  // Bind delete listener
  row.querySelector(".meal-delete-btn").addEventListener("click", () => {
    row.remove();
  });

  container.appendChild(row);
}

function openDrawer(resetContext = true) {
  if (resetContext) {
    const viewDate = new Date();
    viewDate.setDate(viewDate.getDate() + appState.viewDateOffset);
    menuContext = viewDate.getDay();
  }

  const sched = appState.weeklySchedules[menuContext];

  document.getElementById("f-sleep-start").value = sched.sleepStart;
  document.getElementById("f-sleep-end").value = sched.sleepEnd;
  document.getElementById("f-breakfast").value = sched.breakfast;
  document.getElementById("f-lunch").value = sched.lunch;
  document.getElementById("f-dinner").value = sched.dinner;

  // Clear and repopulate additional meals
  const listContainer = document.getElementById("additional-meals-list");
  listContainer.innerHTML = "";
  const additionalMeals = sched.additionalMeals || [];
  additionalMeals.forEach(m => {
    addMealRowToDOM(m.id, m.name, m.time);
  });

  document.getElementById("f-high-protein-dinner").checked =
    appState.highProteinDinnerRest;
  
  // Populating new supplement preferences
  document.getElementById("f-split-beta-alanine").checked =
    appState.splitBetaAlanine;
  document.getElementById("f-ashwagandha-goal").value =
    appState.ashwagandhaGoal || "sleep";

  const isTraining = appState.weeklySchedule[menuContext];
  const trCheck = document.getElementById("f-is-training-day");
  if (trCheck) {
    trCheck.checked = isTraining;
  }
  const workoutGroup = document.getElementById("form-workout-group");
  if (isTraining) {
    workoutGroup.style.display = "block";
    document.getElementById("f-workout-start").value =
      sched.workoutStart || "";
    document.getElementById("f-workout-end").value =
      sched.workoutEnd || "";
    document.getElementById("f-workout-start").required = true;
    document.getElementById("f-workout-end").required = true;
  } else {
    workoutGroup.style.display = "none";
    document.getElementById("f-workout-start").required = false;
    document.getElementById("f-workout-end").required = false;
  }
}

function closeDrawer() {
  closeAnchorsSetupDrawer();
}

function selectDayInWeeklyPlanner(dayIndex) {
  menuContext = dayIndex;

  document.querySelectorAll("#side-menu .day-btn").forEach(btn => {
    const idx = parseInt(btn.getAttribute("data-day"));
    if (idx === dayIndex) {
      btn.classList.add("selected-day");
    } else {
      btn.classList.remove("selected-day");
    }
  });

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const title = document.getElementById("side-menu-setup-title");
  if (title) {
    title.textContent = `Configure ${dayNames[dayIndex]}`;
  }
}

function openSupplementsSetupDrawer() {
  openSupplementsDrawer(false);
  document.getElementById("sheet-overlay").classList.add("active");
  const sheet = document.getElementById("supplements-setup-sheet");
  if (sheet) sheet.classList.add("active");
}

function closeSupplementsSetupDrawer() {
  document.getElementById("sheet-overlay").classList.remove("active");
  const sheet = document.getElementById("supplements-setup-sheet");
  if (sheet) sheet.classList.remove("active");
  renderAll();
}

function openAnchorsSetupDrawer() {
  openDrawer(false);
  document.getElementById("sheet-overlay").classList.add("active");
  const sheet = document.getElementById("anchors-setup-sheet");
  if (sheet) sheet.classList.add("active");
}

function closeAnchorsSetupDrawer() {
  document.getElementById("sheet-overlay").classList.remove("active");
  const sheet = document.getElementById("anchors-setup-sheet");
  if (sheet) sheet.classList.remove("active");
  renderAll();
}

function openGuideSheet() {
  document.getElementById("sheet-overlay").classList.add("active");
  document.getElementById("guide-sheet").classList.add("active");
}

function closeGuideSheet() {
  document.getElementById("sheet-overlay").classList.remove("active");
  document.getElementById("guide-sheet").classList.remove("active");
}

// Toggle Training vs Rest day state
function setDayType(type) {
  appState.dayType = type;
  document.body.setAttribute("data-day", type);
  document.getElementById("app").setAttribute("data-day", type);

  const badge = document.getElementById("day-badge");
  if (type === "training") {
    badge.textContent = "Training";
    badge.className = "badge badge-training";
    document.getElementById("tab-training").classList.add("active");
    document.getElementById("tab-rest").classList.remove("active");
  } else {
    badge.textContent = "Rest";
    badge.className = "badge badge-rest";
    document.getElementById("tab-training").classList.remove("active");
    document.getElementById("tab-rest").classList.add("active");
  }

  saveState();
  renderAll();
  
  // Scroll to nearest event after rendering is complete
  setTimeout(scrollToNearestEvent, 100);
}

function renderAll() {
  const viewDate = new Date();
  viewDate.setDate(viewDate.getDate() + appState.viewDateOffset);
  const dayOfWeek = viewDate.getDay();

  const currentSched = appState.weeklySchedules[dayOfWeek];
  const userAnchors = {
    isRestDay: appState.dayType === "rest",
    meals: {
      breakfast: timeStringToMinutes(currentSched.breakfast),
      lunch: timeStringToMinutes(currentSched.lunch),
      dinner: timeStringToMinutes(currentSched.dinner)
    },
    workout: {
      workout_start: timeStringToMinutes(currentSched.workoutStart),
      workout_end: timeStringToMinutes(currentSched.workoutEnd)
    },
    sleep: {
      sleep_start: timeStringToMinutes(currentSched.sleepStart),
      sleep_end: timeStringToMinutes(currentSched.sleepEnd)
    }
  };

  if (currentSched.additionalMeals) {
    currentSched.additionalMeals.forEach(m => {
      if (m.time) {
        userAnchors.meals[m.id] = timeStringToMinutes(m.time);
      }
    });
  }

  const settings = {
    splitBetaAlanine: appState.splitBetaAlanine,
    ashwagandhaGoal: appState.ashwagandhaGoal,
    dayOfWeek: dayOfWeek
  };

  const scheduledSupps = calculateOptimalTimes(userAnchors, appState.weeklySupplements[dayOfWeek], settings);

  renderClockSegments(scheduledSupps, userAnchors, dayOfWeek);
  renderTimeline(scheduledSupps, userAnchors, dayOfWeek);

  // If daily setup view is visible, keep inline cards populated with the current day's state
  const suppSheet = document.getElementById("supplements-setup-sheet");
  if (suppSheet && suppSheet.classList.contains("active")) {
    openSupplementsDrawer(false);
  }
  const anchorsSheet = document.getElementById("anchors-setup-sheet");
  if (anchorsSheet && anchorsSheet.classList.contains("active")) {
    openDrawer(false);
  }
}

// iOS Custom Wheel Picker Helpers
let activeTimeInputId = null;

function populateWheel(element, min, max) {
  element.innerHTML = "";
  element.appendChild(createEmptyItem());
  element.appendChild(createEmptyItem());

  for (let i = min; i <= max; i++) {
    const val = String(i).padStart(2, "0");
    const item = document.createElement("div");
    item.className = "picker-item";
    item.style.willChange = "transform, opacity";
    item.textContent = val;
    item.setAttribute("data-value", val);
    element.appendChild(item);
  }

  element.appendChild(createEmptyItem());
  element.appendChild(createEmptyItem());
}

function createEmptyItem() {
  const item = document.createElement("div");
  item.className = "picker-item-empty";
  return item;
}

function selectValueInWheel(wheelElement, value) {
  const items = wheelElement.querySelectorAll(
    ".picker-item:not(.picker-item-empty)",
  );
  for (let item of items) {
    if (item.getAttribute("data-value") === value) {
      const index = Array.from(wheelElement.children).indexOf(item);
      const scrollPos = (index - 2) * 40;
      wheelElement.scrollTop = scrollPos;
      break;
    }
  }
}

function getSelectedValueFromWheel(wheelElement) {
  const scrollTop = wheelElement.scrollTop;
  const index = Math.round(scrollTop / 40);
  const items = wheelElement.querySelectorAll(
    ".picker-item:not(.picker-item-empty)",
  );
  if (items[index]) {
    return items[index].getAttribute("data-value");
  }
  return "00";
}

function setupWheelHighlight(wheelElement) {
  const updateHighlight = () => {
    const scrollTop = wheelElement.scrollTop;
    const index = Math.round(scrollTop / 40);
    const items = wheelElement.querySelectorAll(
      ".picker-item:not(.picker-item-empty)",
    );

    items.forEach((item, idx) => {
      const itemCenterY = (idx + 2) * 40;
      const viewCenterY = scrollTop + 80;
      const distanceFromCenter = itemCenterY - viewCenterY;

      // Compute angle (22.5 degrees per 40px item height)
      const angle = (distanceFromCenter / 40) * 22.5;
      const rad = (angle * Math.PI) / 180;
      const cosVal = Math.cos(rad);
      const sinVal = Math.sin(rad);

      // Radius of virtual cylinder
      const R = 90;

      // Calculate difference between cylindrical projection and flat layout
      const yProjected = R * sinVal;
      const yFlat = R * rad;
      const translateY = yProjected - yFlat;

      const absAngle = Math.abs(angle);
      if (absAngle <= 90) {
        item.style.visibility = "visible";
        const baseScale = idx === index ? 1.15 : 1.0;

        // Apply 2D translation, squashing (cosVal), and scaling
        item.style.transform = `translateY(${translateY}px) scaleY(${cosVal}) scale(${baseScale})`;

        // Set opacity: center is 1, edges are faded
        const opacity = 1 - (absAngle / 90) * 0.7;
        item.style.opacity = opacity;

        if (idx === index) {
          item.style.color = "#ffffff";
          item.style.fontWeight = "700";
        } else {
          item.style.color = "#8e8e93";
          item.style.fontWeight = "500";
        }
      } else {
        item.style.visibility = "hidden";
        item.style.opacity = "0";
      }
    });
  };

  wheelElement.addEventListener("scroll", updateHighlight);
  setTimeout(updateHighlight, 100);
}

function openTimePicker(inputId, label) {
  activeTimeInputId = inputId;
  document.getElementById("ios-picker-title").textContent = label;

  const input = document.getElementById(inputId);
  let val = input.value || "12:00";
  const [hr, min] = val.split(":");

  document.getElementById("ios-picker-overlay").classList.add("active");
  document.getElementById("ios-picker-sheet").classList.add("active");

  setTimeout(() => {
    const hourWheel = document.getElementById("hour-wheel");
    const minuteWheel = document.getElementById("minute-wheel");
    selectValueInWheel(hourWheel, hr);
    selectValueInWheel(minuteWheel, min);
  }, 50);
}

function closeTimePicker() {
  document
    .getElementById("ios-picker-overlay")
    .classList.remove("active");
  document.getElementById("ios-picker-sheet").classList.remove("active");
  activeTimeInputId = null;
}

// Smooth scroll and focus timeline card matching selected event/supplement
function focusTimelineCard(type) {
  if (!type) return;

  let targetCard = document.querySelector(`[data-timeline-id="${type}"]`);

  if (!targetCard) {
    // Find slot containing supplement tag
    const tag = document.querySelector(`.supp-tag[onclick*="${type}"]`);
    if (tag) {
      targetCard = tag.closest(".timeline-item");
    }
  }

  if (targetCard) {
    const container = document.querySelector('.timeline-section');
    if (container) {
      const cRect = container.getBoundingClientRect();
      const tRect = targetCard.getBoundingClientRect();
      const scrollPos = container.scrollTop + (tRect.top - cRect.top) - (container.clientHeight / 2) + (tRect.height / 2);
      container.scrollTo({ top: scrollPos, behavior: "smooth" });
    }

    targetCard.classList.add("focused-glow");
    setTimeout(() => {
      targetCard.classList.remove("focused-glow");
    }, 1500);
  }
}

// Scroll to the card nearest to the current clock time
function scrollToNearestEvent() {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const items = document.querySelectorAll('.timeline-item');
  if (items.length === 0) return;

  let nearestItem = null;
  let minDiff = Infinity;

  items.forEach((item) => {
    const timeTextEl = item.querySelector('.time-text');
    if (!timeTextEl) return;
    const timeStr = timeTextEl.textContent;
    if (!timeStr) return;
    const itemMinutes = timeStringToMinutes(timeStr);

    let diff = Math.abs(itemMinutes - currentMinutes);
    if (diff > 720) {
      diff = 1440 - diff; // Wrap around 24h
    }

    if (diff < minDiff) {
      minDiff = diff;
      nearestItem = item;
    }
  });

  if (nearestItem) {
    const container = document.querySelector('.timeline-section');
    if (container) {
      const cRect = container.getBoundingClientRect();
      const tRect = nearestItem.getBoundingClientRect();
      const scrollPos = container.scrollTop + (tRect.top - cRect.top) - (container.clientHeight / 2) + (tRect.height / 2);
      container.scrollTo({ top: scrollPos, behavior: "smooth" });
    }

    nearestItem.classList.add("focused-glow");
    setTimeout(() => nearestItem.classList.remove("focused-glow"), 1500);
  }
}

// Modal logic for manual day type changes
let pendingDayTypeChange = null;

function handleDayTypeChangeAttempt(targetType) {
  if (appState.dayType === targetType) return;
  pendingDayTypeChange = targetType;
  
  const modal = document.getElementById("confirm-modal");
  const overlay = document.getElementById("sheet-overlay");
  
  const typeName = targetType === "training" ? "Training" : "Rest";
  document.getElementById("confirm-modal-msg").textContent = `Are you sure you want to manually change the current day to a ${typeName} day?`;
  
  modal.classList.add("active");
  overlay.classList.add("active");
}

function confirmDayTypeChange() {
  if (pendingDayTypeChange) {
    setDayType(pendingDayTypeChange);
    pendingDayTypeChange = null;
  }
  closeConfirmModal();
}

function closeConfirmModal() {
  document.getElementById("confirm-modal").classList.remove("active");
  document.getElementById("sheet-overlay").classList.remove("active");
  pendingDayTypeChange = null;
}

// Initial setup & Event listeners
async function initApp() {
  await loadState();
  await requestStoragePersistence();

  const today = new Date().getDay(); // 0 is Sunday, 6 is Saturday
  const isTrainingDay = appState.weeklySchedule[today];
  appState.dayType = isTrainingDay ? "training" : "rest";

  renderDialTicks();
  setDayType(appState.dayType);

  updateClockHands();
  setInterval(updateClockHands, 1000);

  // (Tab indicators are static, no click listeners required)

  document
    .getElementById("prev-day-btn")
    .addEventListener("click", () => changeViewDate(-1));
  document
    .getElementById("next-day-btn")
    .addEventListener("click", () => changeViewDate(1));
    
  document
    .getElementById("clock-center-group")
    .addEventListener("click", resetViewDate);

  // Bind click triggers for SVG Sleep and Workout segments to scroll timeline cards
  const sleepArc = document.getElementById("sleep-arc");
  sleepArc.style.cursor = "pointer";
  sleepArc.addEventListener("click", () => {
    focusTimelineCard("sleep");
    highlightClockSegment("sleep");
  });

  const workoutArc = document.getElementById("workout-arc");
  workoutArc.style.cursor = "pointer";
  workoutArc.addEventListener("click", () => {
    focusTimelineCard("workout");
    highlightClockSegment("workout");
  });

  // Initialize the iOS Picker Wheels
  const hourWheel = document.getElementById("hour-wheel");
  const minuteWheel = document.getElementById("minute-wheel");

  populateWheel(hourWheel, 0, 23);
  populateWheel(minuteWheel, 0, 59);

  setupWheelHighlight(hourWheel);
  setupWheelHighlight(minuteWheel);

  // Bind click triggers for the time input fields to open our custom iOS picker
  document.querySelectorAll(".time-input").forEach((input) => {
    input.addEventListener("click", (e) => {
      const id = input.id;
      const label = input
        .closest(".form-field")
        .querySelector("label").textContent;
      openTimePicker(id, label);
    });
  });

  // iOS Time Picker buttons event handlers
  document
    .getElementById("ios-picker-cancel")
    .addEventListener("click", closeTimePicker);
  document
    .getElementById("ios-picker-overlay")
    .addEventListener("click", closeTimePicker);
  document
    .getElementById("ios-picker-done")
    .addEventListener("click", () => {
      const hr = getSelectedValueFromWheel(hourWheel);
      const min = getSelectedValueFromWheel(minuteWheel);
      const finalTime = `${hr}:${min}`;
      const input = document.getElementById(activeTimeInputId);
      if (input) {
        input.value = finalTime;
        input.dispatchEvent(new Event("change"));
      }
      closeTimePicker();
    });

  // Main Menu bindings
  document
    .getElementById("main-menu-btn")
    .addEventListener("click", openSideMenu);
  
  document
    .getElementById("close-side-menu-btn")
    .addEventListener("click", closeSideMenu);

  document
    .getElementById("side-menu-overlay")
    .addEventListener("click", closeSideMenu);

  // Setup Weekly Planner buttons to select active day for configuration
  document.querySelectorAll(".day-btn").forEach(btn => {
    const dayIndex = parseInt(btn.getAttribute("data-day"));
    if (appState.weeklySchedule[dayIndex]) {
      btn.classList.add("active");
    }
    btn.addEventListener("click", () => {
      selectDayInWeeklyPlanner(dayIndex);
    });
  });

  // Bind inline day setup card buttons
  document.getElementById("btn-open-supplements-setup").addEventListener("click", openSupplementsSetupDrawer);
  document.getElementById("btn-open-anchors-setup").addEventListener("click", openAnchorsSetupDrawer);

  const updateWeeklyPlannerButtons = () => {
    document.querySelectorAll(".day-btn").forEach(btn => {
      const dayIndex = parseInt(btn.getAttribute("data-day"));
      if (appState.weeklySchedule[dayIndex]) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  };

  // Change handler for training day checkbox in anchors card
  const trainingDayCheckbox = document.getElementById("f-is-training-day");
  if (trainingDayCheckbox) {
    trainingDayCheckbox.addEventListener("change", (e) => {
      const isTraining = e.target.checked;
      appState.weeklySchedule[menuContext] = isTraining;
      
      const workoutGroup = document.getElementById("form-workout-group");
      if (workoutGroup) {
        workoutGroup.style.display = isTraining ? "block" : "none";
        document.getElementById("f-workout-start").required = isTraining;
        document.getElementById("f-workout-end").required = isTraining;
      }
      
      updateWeeklyPlannerButtons();
      saveState();
      
      // Update badge in supplements card
      const badge = document.getElementById("supp-day-type-badge");
      if (badge) {
        badge.textContent = isTraining ? "Training Day" : "Rest Day";
        badge.className = `supp-day-type-badge ${isTraining ? "badge-training" : "badge-rest"}`;
      }
    });
  }

  // Close buttons for separate drawers
  const closeSuppsBtn = document.getElementById("close-supplements-setup-btn");
  if (closeSuppsBtn) {
    closeSuppsBtn.addEventListener("click", closeSupplementsSetupDrawer);
  }
  const closeAnchorsBtn = document.getElementById("close-anchors-setup-btn");
  if (closeAnchorsBtn) {
    closeAnchorsBtn.addEventListener("click", closeAnchorsSetupDrawer);
  }

  // Copy day stack button
  document.getElementById("btn-copy-day-stack").addEventListener("click", () => {
    const select = document.getElementById("copy-from-day-select");
    const fromDay = parseInt(select.value);
    if (isNaN(fromDay)) return;

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const fromName = dayNames[fromDay];
    const toName = dayNames[menuContext];

    if (!confirm(`Copy ${fromName}'s supplement stack to ${toName}? This will replace ${toName}'s current stack.`)) return;

    appState.weeklySupplements[menuContext] = JSON.parse(JSON.stringify(appState.weeklySupplements[fromDay] || []));
    appState.weeklyOverrides[menuContext] = JSON.parse(JSON.stringify(appState.weeklyOverrides[fromDay] || {}));

    saveState();
    renderAll();
    openSupplementsDrawer(false);
  });

  const closeAdjustSuppBtn = document.getElementById("close-adjust-supp-btn");
  if (closeAdjustSuppBtn) {
    closeAdjustSuppBtn.addEventListener("click", closeAdjustSupplementDrawer);
  }

  document
    .getElementById("sheet-overlay")
    .addEventListener("click", () => {
      closeSupplementsSetupDrawer();
      closeAnchorsSetupDrawer();
      closeAdjustSupplementDrawer();
      closeConfirmModal();
      closeGuideSheet();
    });

  document
    .getElementById("clock-info-btn")
    .addEventListener("click", openGuideSheet);

  document
    .getElementById("close-guide-sheet-btn")
    .addEventListener("click", closeGuideSheet);

  document
    .getElementById("add-meal-field-btn")
    .addEventListener("click", () => {
      const uniqueId = "custom_meal_" + Date.now();
      addMealRowToDOM(uniqueId, "", "12:00");
    });

  // Form submission saves state for daily anchors card
  document
    .getElementById("schedule-form")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      const sched = appState.weeklySchedules[menuContext];

      sched.sleepStart = document.getElementById("f-sleep-start").value;
      sched.sleepEnd = document.getElementById("f-sleep-end").value;
      sched.breakfast = document.getElementById("f-breakfast").value;
      sched.lunch = document.getElementById("f-lunch").value;
      sched.dinner = document.getElementById("f-dinner").value;

      // Read additional meals from DOM
      const additionalMeals = [];
      document.querySelectorAll(".additional-meal-row").forEach(row => {
        const id = row.getAttribute("data-meal-id");
        const name = row.querySelector(".meal-name-input").value.trim();
        const time = row.querySelector(".meal-time-input").value;
        additionalMeals.push({ id, name, time });
      });
      sched.additionalMeals = additionalMeals;

      appState.highProteinDinnerRest = document.getElementById(
        "f-high-protein-dinner",
      ).checked;

      appState.splitBetaAlanine = document.getElementById(
        "f-split-beta-alanine",
      ).checked;
      appState.ashwagandhaGoal = document.getElementById(
        "f-ashwagandha-goal",
      ).value;

      const isTraining = document.getElementById("f-is-training-day").checked;
      appState.weeklySchedule[menuContext] = isTraining;
      if (isTraining) {
        sched.workoutStart = document.getElementById("f-workout-start").value;
        sched.workoutEnd = document.getElementById("f-workout-end").value;
      } else {
        sched.workoutStart = "";
        sched.workoutEnd = "";
      }

      updateWeeklyPlannerButtons();
      saveState();
      renderAll();
      closeAnchorsSetupDrawer();
    });

  // Reset settings to initial defaults
  document
    .getElementById("reset-defaults-btn")
    .addEventListener("click", () => {
      const isTraining = document.getElementById("f-is-training-day").checked;
      appState.weeklySchedules[menuContext] = JSON.parse(
        JSON.stringify(DEFAULTS[isTraining ? "training" : "rest"]),
      );
      appState.splitBetaAlanine = false;
      appState.ashwagandhaGoal = "sleep";
      openDrawer(false);
    });

  // Adjust Supplement Drawer Form listeners
  const timingToggle = document.getElementById("adjust-supp-timing-toggle");
  timingToggle.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      timingToggle.querySelector(".active").classList.remove("active");
      btn.classList.add("active");
      
      const isManual = btn.getAttribute("data-timing") === "manual";
      const timeField = document.getElementById("adjust-supp-time-field");
      timeField.style.display = isManual ? "block" : "none";
      
      if (activeAdjustSuppId) {
        updateAdjustSuppClashPreview(activeAdjustSuppId);
      }
    });
  });

  document.getElementById("adjust-supp-dose").addEventListener("input", () => {
    if (activeAdjustSuppId) updateAdjustSuppClashPreview(activeAdjustSuppId);
  });
  document.getElementById("adjust-supp-time").addEventListener("change", () => {
    if (activeAdjustSuppId) updateAdjustSuppClashPreview(activeAdjustSuppId);
  });

  document.getElementById("adjust-supp-form").addEventListener("submit", (e) => {
    e.preventDefault();
    if (!activeAdjustSuppId) return;

    const isManual = document.querySelector("#adjust-supp-timing-toggle .active").getAttribute("data-timing") === "manual";
    const customDose = document.getElementById("adjust-supp-dose").value.trim();
    const customTime = document.getElementById("adjust-supp-time").value;

    if (!appState.weeklyOverrides) {
      appState.weeklyOverrides = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {} };
    }
    if (!appState.weeklyOverrides[menuContext]) {
      appState.weeklyOverrides[menuContext] = {};
    }

    appState.weeklyOverrides[menuContext][activeAdjustSuppId] = {
      dose: customDose,
      time: isManual ? customTime : null
    };

    saveState();
    renderAll();
    closeAdjustSupplementDrawer();
    
    const suppSheet = document.getElementById("supplements-setup-sheet");
    if (suppSheet && suppSheet.classList.contains("active")) {
      openSupplementsDrawer(false);
    }
  });

  document.getElementById("adjust-supp-reset-btn").addEventListener("click", () => {
    if (!activeAdjustSuppId) return;

    if (appState.weeklyOverrides?.[menuContext]?.[activeAdjustSuppId]) {
      delete appState.weeklyOverrides[menuContext][activeAdjustSuppId];
    }

    saveState();
    renderAll();
    closeAdjustSupplementDrawer();

    const suppSheet = document.getElementById("supplements-setup-sheet");
    if (suppSheet && suppSheet.classList.contains("active")) {
      openSupplementsDrawer(false);
    }
  });
}

// Safe execution of initialization
if (document.readyState === "loading") {
  window.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

// PWA Manifest and Service Worker Dynamic Registration
const manifest = {
  name: "Chronos Supplement Clock",
  short_name: "Chronos",
  description: "Visual circadian supplement and activity tracking clock.",
  start_url: ".",
  display: "standalone",
  background_color: "#09090b",
  theme_color: "#09090b",
  orientation: "portrait",
  icons: [
    {
      src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><rect width='512' height='512' rx='120' fill='%2309090b'/><circle cx='256' cy='256' r='180' stroke='%2318181b' stroke-width='12' fill='none'/><path d='M256 76 A180 180 0 0 1 436 256' stroke='%236366f1' stroke-width='16' fill='none' stroke-linecap='round'/><path d='M256 256 L256 120' stroke='%23f43f5e' stroke-width='12' stroke-linecap='round'/><circle cx='256' cy='256' r='20' fill='%23f43f5e'/></svg>",
      sizes: "512x512",
      type: "image/svg+xml",
      purpose: "any maskable",
    },
  ],
};

// Inject manifest dynamically
const manifestStr = encodeURIComponent(JSON.stringify(manifest));
const link = document.createElement("link");
link.rel = "manifest";
link.href = "data:application/manifest+json," + manifestStr;
document.head.appendChild(link);

// Register Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then(() => {
      console.log("Service Worker registered successfully via sw.js");
    })
    .catch((err) => {
      console.warn(
        "Service worker registration failed (PWA offline functionality limited):",
        err,
      );
    });
}

// Handle standard iOS/Android install prompt banner
let deferredPrompt;
const installBanner = document.getElementById("install-banner");
const bannerInstallBtn = document.getElementById("banner-install-btn");
const menuDownloadBtn = document.getElementById("menu-download-btn");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  if (menuDownloadBtn) menuDownloadBtn.style.display = "flex";
});

function triggerInstall() {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === "accepted") {
      console.log("User accepted PWA installation");
    }
    deferredPrompt = null;
    installBanner.classList.remove("active");
    if (menuDownloadBtn) menuDownloadBtn.style.display = "none";
  });
}

bannerInstallBtn.addEventListener("click", triggerInstall);

if (menuDownloadBtn) {
  menuDownloadBtn.addEventListener("click", () => {
    closeSideMenu();
    if (deferredPrompt) {
      triggerInstall();
    } else {
      installBanner.classList.toggle("active");
    }
  });
}

window.addEventListener("appinstalled", (evt) => {
  console.log("Chronos was successfully installed");
  installBanner.classList.remove("active");
  if (menuDownloadBtn) menuDownloadBtn.style.display = "none";
});
