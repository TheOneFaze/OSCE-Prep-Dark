const CACHE_NAME = 'osce-prep-cache-v1';
const urlsToCache = [
  // Core HTML file
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/index.html', // [cite: 1]

  // Images from the OSCE Page/ directory
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Icon.png', // [cite: 1]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/OSCE%20SPARK.png', // [cite: 1]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/OSCE%20SPARK%20-%20Copy.png', // [cite: 1]

  // Your main page's apple-touch-icon (if you keep it in OSCE Page/)
  // Make sure this path is accurate if you rename/move it.
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/apple-touch-icon.png', // [cite: 1]

  // Add the new icons you'll create in the root /icons/ folder
  '/OSCE-Prep-Dark/icons/icon-192x192.png',
  '/OSCE-Prep-Dark/icons/icon-512x512.png',

  // All individual History Taking HTML files
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/History%20Taking/Abdominal%20Pain.html', // [cite: 1]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/History%20Taking/Anxiety.html', // [cite: 1]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/History%20Taking/Breast%20Lump.html', // [cite: 1]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/History%20Taking/Cardiovascular.html', // [cite: 1]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/History%20Taking/Chest%20Pain.html', // [cite: 1]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/History%20Taking/Cough.html', // [cite: 1]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/History%20Taking/Depression.html', // [cite: 1]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/History%20Taking/Dizziness%20History.html', // [cite: 1]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/History%20Taking/Dysphagia.html', // [cite: 1]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/History%20Taking/Dyspnoea.html', // [cite: 1]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/History%20Taking/Falls.html', // [cite: 1]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/History%20Taking/Female%20LUTS.html', // [cite: 1]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/History%20Taking/Headache.html', // [cite: 1]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/History%20Taking/Leg%20Swelling.html', // [cite: 1]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/History%20Taking/Loss%20of%20Consciousness.html', // [cite: 1]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/History%20Taking/Male%20LUTS.html', // [cite: 1]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/History%20Taking/Ophthalmic.html', // [cite: 1]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/History%20Taking/Palpitations.html', // [cite: 1]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/History%20Taking/Respiratory.html', // [cite: 1]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/History%20Taking/Seizure.html', // [cite: 1]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/History%20Taking/Stroke-TIA.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/History%20Taking/Tiredness.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/History%20Taking/Unintentional%20Weight%20Loss.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/History%20Taking/Urological.html', // [cite: 2]

  // Main category pages
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_community_stations.html', // [cite: 1]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_diagnosis_stations.html', // [cite: 1]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_history_taking.html', // [cite: 1]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_medication_stations.html', // [cite: 1]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_post-procedure__stations.html', // [cite: 1]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_procedure_stations.html', // [cite: 1]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_surgery_stations.html', // [cite: 1]

  // Community Stations
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_community_stations/alcohol_cessation_counselling.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_community_stations/bowel_cancer_screening_counselling.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_community_stations/community_blood_pressure_check.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_community_stations/dnacpr_counselling.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_community_stations/hypertension_counselling.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_community_stations/inhaler_technique_counselling.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_community_stations/peak_flow_counselling.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_community_stations/smoking_cessation_counselling.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_community_stations/weight_loss_counselling.html', // [cite: 2]

  // Diagnosis Stations
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_diagnosis_stations/atrial_fibrillation_counselling.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_diagnosis_stations/bacterial_vaginosis_counselling.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_diagnosis_stations/chronic_kidney_disease_counselling.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_diagnosis_stations/explaining_a_diagnosis_of_asthma.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_diagnosis_stations/explaining_diagnosis_copd.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_diagnosis_stations/explaining_diagnosis_eczema.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_diagnosis_stations/explaining_diagnosis_fibroadenoma.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_diagnosis_stations/explaining_diagnosis_glaucoma.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_diagnosis_stations/explaining_diagnosis_type1_diabetes.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_diagnosis_stations/explaining_diagnosis_type2_diabetes.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_diagnosis_stations/hypertension_counselling.html', // [cite: 2]

  // Medication Stations
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_medication_stations/ace_inhibitor_counselling.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_medication_stations/amitriptyline_counselling.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_medication_stations/anticoagulant_counselling_pharmacy.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_medication_stations/asthma_spacer_explanation.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_medication_stations/direct_oral_anticoagulant_counselling.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_medication_stations/gliclazide_counselling.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_medication_stations/gtn_spray_counselling.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_medication_stations/inhaler_counselling_01_pharmacy.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_medication_stations/inhaler_counselling_02_pharmacy.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_medication_stations/insulin_counselling.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_medication_stations/iron_supplementation_counselling.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_medication_stations/metformin_counselling.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_medication_stations/opioid_analgesia_counselling.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_medication_stations/ssri_counselling.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_medication_stations/statin_counselling.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_medication_stations/warfarin_counselling.html', // [cite: 2]

  // Post-Procedure Stations
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_post-procedure__stations/post_stemi_counselling.html', // [cite: 2]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_post-procedure__stations/post_stroke_counselling.html', // [cite: 2]

  // Procedure Stations
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_procedure_stations/ascitic_drain_explanation.html', // [cite: 3]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_procedure_stations/blood_transfusion_counselling.html', // [cite: 3]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_procedure_stations/bronchoscopy_counselling.html', // [cite: 3]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_procedure_stations/chest_drain_explanation.html', // [cite: 3]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_procedure_stations/colonoscopy_explanation.html', // [cite: 3]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_procedure_stations/echocardiogram_explanation.html', // [cite: 3]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_procedure_stations/endoscopy_counselling.html', // [cite: 3]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_procedure_stations/ercp_explanation.html', // [cite: 3]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_procedure_stations/haemodialysis_counselling.html', // [cite: 3]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_procedure_stations/tuberculosis_treatment_counselling.html', // [cite: 3]

  // Surgery Stations
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_surgery_stations/appendicectomy_counselling.html', // [cite: 3]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_surgery_stations/cabg_counselling.html', // [cite: 3]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_surgery_stations/cholecystectomy_counselling.html', // [cite: 3]
  [cite_start]'/OSCE-Prep-Dark/OSCE%20Page/Main%20Page/pretty_surgery_stations/gastrectomy_counselling.html', // [cite: 3]

  // Other assets like CSS and JS (if external)
  // If style.css or script.js are used externally, add them here
  [cite_start]// '/OSCE-Prep-Dark/OSCE%20Page/style.css', // [cite: 1] (If used externally)
  [cite_start]// '/OSCE-Prep-Dark/OSCE%20Page/script.js', // [cite: 1] (If used externally)
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching App Shell');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        // Fallback to network if not in cache
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
