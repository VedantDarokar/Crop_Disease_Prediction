/* ==========================================================================
   AgroPath™ Enterprise — Client Application Controller & Translation Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // --- Translation Dictionary (I18N) for Full Multi-Language Support ---
  const I18N = {
    English: {
      subline: "Precision Crop Pathology & Field Advisory System",
      navHistory: "Records",
      lblInspectionDate: "Inspection Date:",
      lblPlotId: "Field Plot ID:",
      lblProtocol: "Protocol:",
      lblEngineReady: "Pathology Engine Ready",
      titleSpecimen: "Foliage Specimen Inspection",
      descSpecimen: "Provide macroscopic photography of affected leaf, stem, or fruit tissue",
      dropHeading: "Mount Specimen Image",
      dropSub: "Drag and drop high-resolution foliage photo or browse system",
      btnBrowse: "Upload Specimen",
      btnCamera: "Field Camera",
      btnRemove: "Unmount",
      scanningTissue: "SCANNING LESION MORPHOLOGY...",
      lblCropCultivar: "Crop Family or Cultivar (Optional)",
      btnRunAnalysis: "Run Pathological Diagnostic",
      lblRefSpecimens: "Standard Reference Library Specimens",
      lblQuickTest: "1-Click Test",
      cropTomato: "Tomato",
      disTomatoBlight: "Early Blight",
      cropCorn: "Corn (Maize)",
      disCornRust: "Common Rust",
      cropGrape: "Grapevine",
      disGrapeMildew: "Powdery Mildew",
      cropApple: "Apple Leaf",
      disAppleScab: "Apple Scab",
      idleTitle: "Diagnostic Workstation Inactive",
      idleDesc: "Mount a leaf specimen photo or select a reference sample from the left panel. The pathology diagnostic engine will analyze cellular lesion patterns, cross-reference taxonomic indices, and formulate certified treatment protocols.",
      cap1Title: "Cellular Pathogen Taxonomy",
      cap1Desc: "Binomial identification of fungal, bacterial, and viral vectors.",
      cap2Title: "Certified Bio-Organic Recipes",
      cap2Desc: "Exact natural dilution ratios, botanical extracts, and application timings.",
      cap3Title: "Chemical Crop Protection Protocols",
      cap3Desc: "Active ingredients, field dosages, PPE safety, and harvest intervals.",
      cap4Title: "Certified Field PDF Generation",
      cap4Desc: "Instant printable agronomy laboratory diagnostic reports for field records.",
      loadTitle: "Processing Pathological Biometrics",
      loadStep1: "Extracting necrosis morphology and chlorotic lesion margins...",
      step1Text: "Tissue Segmentation",
      step2Text: "Pathology Engine",
      step3Text: "Treatment Protocol",
      lblSeverityLevel: "Severity Level",
      lblMatchIndex: "Diagnostic Index",
      btnListenAdvisory: "Listen to Field Advisory",
      btnExportPdf: "Export Certified Field PDF",
      btnCopySummary: "Copy Protocol",
      lblTaxaClass: "Taxonomic Vector",
      lblCanopyAffected: "Affected Leaf Area",
      lblLeafMoisture: "Canopy Moisture",
      lblRecoveryForecast: "Recovery Outlook",
      tabOverview: "Pathology & Symptoms",
      tabImmediate: "24-48h Containment",
      tabOrganic: "Bio-Organic Remedies",
      tabChemical: "Chemical Treatments",
      tabPrevention: "Prevention & Climate",
      secExecutiveSummary: "Executive Diagnostic Summary",
      secVisualSymptoms: "Verified Microscopic & Visual Symptoms",
      alertUrgentTitle: "Immediate 24–48 Hour Isolation Protocol:",
      alertUrgentDesc: "Act swiftly to contain fungal conidia or bacterial inoculum from spreading across neighboring crop rows via wind drift and overhead splash.",
      introOrganic: "Certified ecological plant protection measures safe for beneficial pollinators, biological predators, and organic certification compliance:",
      alertSafetyTitle: "Fungicide Safety & Stewardship:",
      alertSafetyDesc: "Strictly observe certified Pre-Harvest Intervals (PHI), calibrate spray equipment, wear full PPE (nitrile gloves, particulate respirator, eye protection), and adhere to FRAC mode of action rotations.",
      secMicroclimate: "Pathogen Microclimate Dynamics",
      lblOptimalHumidity: "Sporulation Humidity",
      lblOptimalTemp: "Optimal Temperature Range",
      secAgronomicPrevention: "Long-Term Agronomic Sanitation Practices",
      certFooterTitle: "Certified Agronomic Laboratory Diagnostic Protocol",
      certFooterDesc: "Verified against international plant pathology indices and IPM crop protection standards.",
      certVerifiedBy: "Verified By:",
      modalCameraTitle: "Field Optical Specimen Capture",
      cameraGuidance: "Align affected leaf or lesion inside focal boundary",
      btnFlipCamera: "Flip Camera",
      btnCapturePhoto: "Capture Specimen",
      modalConfigTitle: "Diagnostic Engine Configuration",
      configInstruction: "Configure diagnostic laboratory credentials to enable real-time multimodal optical spectroscopy on custom foliage specimens.",
      lblEngineKey: "Pathology Engine Key (API Key)",
      keyHelp: "Stored securely in local environment. Configured keys enable live pathology processing.",
      btnTestConnection: "Test Connection",
      btnClear: "Clear",
      btnSaveKey: "Save Configuration",
      modalArchiveTitle: "Field Diagnostic Archives",
      btnClearArchive: "Clear Records",
      archiveEmpty: "No field diagnostic records archived yet.",
      tabWeather: "Field Weather (GPS)",
      btnRefreshGps: "Refresh GPS Telemetry",
      lblCurrentTemp: "Ambient Air Temperature",
      lblRelativeHumidity: "Relative Canopy Humidity",
      lblWindSpeed: "Field Wind Velocity (10m)",
      lblPrecipitation: "Precipitation Probability",
      titleForecast: "3-Day Agricultural Microclimate Forecast",
      sprayTitleEvaluating: "Evaluating Field Spraying Window...",
      sprayDescEvaluating: "Calculating real-time wind drift velocity and 6-hour precipitation risk from GPS telemetry.",
      modeDiagnosis: "Foliage Diagnosis",
      modeWeatherDetails: "Weather Details",
      modeWeatherForecast: "Weather Forecasting",
      modeWeatherHistory: "Weather History",
      lblForecastHeader: "7-Day Agricultural Outlook",
      titleForecastingSection: "Weather Forecasting & Spray Windows",
      descForecastingSection: "24-hour hourly microclimate progression and 7-day extended agricultural forecast to schedule protective applications before rain events.",
      titleHourly24: "24-Hour Hourly Field Timeline",
      descHourly24: "Continuous progression of temperature, rain probability, humidity, and wind speed for optimal spray timing.",
      titleExtended7Day: "7-Day Extended Agricultural Forecast",
      descExtended7Day: "Multi-day predictive outlook including expected precipitation accumulation, wind gust maximums, and daily spray suitability.",
      titleDryingGuidance: "Agronomic Foliar Uptake & Drying Guidance",
      lblOptimalHours: "Recommended Application Hours",
      descOptimalHours: "Avoid midday application when temperatures exceed 30°C to eliminate droplet vaporization and leaf stomata closure.",
      lblRainfast: "Rainfast Uptake Threshold",
      descRainfast: "Systemic fungicides require at least 4 hours of rain-free foliage for full translaminar absorption.",
      lblDewEvaporation: "Dew Evaporation Window",
      descDewEvaporation: "Applying sprays to leaves dripping with heavy morning dew causes immediate runoff and pesticide dilution.",
      lblHistoricalArchive: "Epidemiological Retrospective",
      titleHistorySection: "Weather History & Pathogen Incubation Log",
      descHistorySection: "Past 7 days verified weather telemetry archive. Correlate recent rain accumulation and humidity spikes with visible leaf lesions.",
      lblTotalRain: "7-Day Rainfall Total",
      lblAvgTemp: "Avg Field Temperature",
      lblAvgHumidity: "Avg Canopy Humidity",
      lblIncubationWindow: "Disease Incubation Window",
      titleDailyHistoryTable: "Daily Historical Microclimate Records (Past 7 Days)",
      thDate: "Date",
      thCondition: "Weather Summary",
      thTempRange: "Temp Range (°C)",
      thPrecip: "Precipitation (mm)",
      thWindGust: "Max Wind Gust",
      thSporeRisk: "Canopy Wetness / Spore Germination Risk",
      titleEpidemiologyCycle: "How Historical Weather Triggers Current Foliar Symptoms",
      descEpidemiologyCycle: "Plant fungal and bacterial spores require an incubation period of 3 to 7 days between microscopic infection and visible necrotic lesion expression.",
      btnNavForecast: "View 7-Day Weather Forecast & Hourly Timeline →",
      btnNavHistory: "View Past 7-Day Weather History & Rain Log →",
      weatherStationTitle: "Field Microclimate & Spraying Suitability Center",
      weatherStationDesc: "Live atmospheric telemetry, wind drift velocity, leaf wetness models, and agricultural chemical spray windows.",
      weatherLiveTelemetry: "Real-time GPS Telemetry",
      btnOpenWeatherTab: "Open Live Weather Station →",
      titlePathogenRiskMatrix: "Pathogen Microclimate Incubation Risk",
      descPathogenRiskMatrix: "Evaluated in real-time based on your field's current ambient temperature and humidity against established epidemiological spore germination models.",
      titleAgriculturalForecast: "3-Day Agronomic Spray Outlook",
      descAgriculturalForecast: "Forecasted rain probability, wind drift thresholds, and recommended spray windows for optimal field application.",
      btnGoToDiagnosis: "Mount Diseased Crop Leaf for AI Diagnosis"
    },

    Hindi: {
      subline: "सटीक फसल रोग निदान एवं कृषि सलाहकार प्रणाली",
      navHistory: "अभिलेख (रिकॉर्ड)",
      navSettings: "कॉन्फ़िगरेशन",
      lblInspectionDate: "निरीक्षण तिथि:",
      lblPlotId: "खेत प्लॉट सं.:",
      lblProtocol: "मानक प्रोटोकॉल:",
      lblEngineReady: "रोग निदान प्रणाली तैयार",
      titleSpecimen: "पत्ती नमूना निरीक्षण",
      descSpecimen: "प्रभावित पत्ती, तने या फल के ऊतकों की स्पष्ट फोटो प्रदान करें",
      dropHeading: "फसल का नमूना अपलोड करें",
      dropSub: "पत्ती की उच्च-गुणवत्ता वाली फोटो खींचें या खींचकर लाएं",
      btnBrowse: "फ़ाइल चुनें",
      btnCamera: "खेत कैमरा",
      btnRemove: "हटाएं",
      scanningTissue: "पत्ती घाव एवं बीजाणु विश्लेषण जारी...",
      lblCropCultivar: "फसल का प्रकार या नाम (वैकल्पिक)",
      btnRunAnalysis: "रोग निदान व उपचार योजना शुरू करें",
      lblRefSpecimens: "प्रमाणित मानक रोग नमूने",
      lblQuickTest: "1-क्लिक परीक्षण",
      cropTomato: "टमाटर",
      disTomatoBlight: "अगेती झुलसा",
      cropCorn: "मक्का",
      disCornRust: "सामान्य रतुआ",
      cropGrape: "अंगूर",
      disGrapeMildew: "चूर्णिल आसिता (पाउडरी)",
      cropApple: "सेब की पत्ती",
      disAppleScab: "सेब स्कैब",
      idleTitle: "रोग निदान केंद्र तैयार है",
      idleDesc: "निरीक्षण के लिए बाईं ओर से अपनी पत्ती की फोटो अपलोड करें या नमूना चुनें। प्रणाली तुरंत रोग के सटीक लक्षण, जैविक नुस्खे और रासायनिक दवाओं का विवरण तैयार करेगी।",
      cap1Title: "सटीक कवक व रोगजनक पहचान",
      cap1Desc: "फफूंद, जीवाणु, वायरस एवं पोषक तत्वों की कमी की वैज्ञानिक पहचान।",
      cap2Title: "प्रमाणित जैविक व देसी नुस्खे",
      cap2Desc: "नीम तेल, ट्राइकोडर्मा एवं जैव कवकनाशी का सही अनुपात।",
      cap3Title: "व्यावसायिक कीटनाशक व कवकनाशी",
      cap3Desc: "दवा का नाम, प्रति लीटर पानी की मात्रा, पीपीई सुरक्षा और तुड़ाई अंतराल।",
      cap4Title: "प्रमाणित किसान पीडीएफ रिपोर्ट",
      cap4Desc: "खेत रिकॉर्ड और कृषि अधिकारियों के साथ साझा करने हेतु 1-क्लिक प्रिंट।",
      loadTitle: "रोग लक्षणों का वैज्ञानिक विश्लेषण जारी",
      loadStep1: "पत्तियों के धब्बों, छल्लों और पीलेपन का अध्ययन...",
      step1Text: "ऊतक परीक्षण",
      step2Text: "पैथोलॉजी इंजन",
      step3Text: "उपचार निर्माण",
      lblSeverityLevel: "रोग गंभीरता",
      lblMatchIndex: "सटीकता सूचकांक",
      btnListenAdvisory: "सलाह सुनें (आवाज़)",
      btnExportPdf: "किसान रिपोर्ट (PDF) डाउनलोड",
      btnCopySummary: "सारांश कॉपी करें",
      lblTaxaClass: "रोगजनक प्रकार",
      lblCanopyAffected: "प्रभावित पत्ती क्षेत्र",
      lblLeafMoisture: "पत्ती नमी स्तर",
      lblRecoveryForecast: "सुधार पूर्वानुमान",
      tabOverview: "रोग व लक्षण",
      tabImmediate: "24-48 घंटे आपातकालीन कदम",
      tabOrganic: "जैविक व देसी उपाय",
      tabChemical: "रासायनिक कवकनाशी",
      tabPrevention: "रोकथाम व मौसम",
      secExecutiveSummary: "रोग निदान का मुख्य सारांश",
      secVisualSymptoms: "पत्ती पर दिखे प्रमुख लक्षण",
      alertUrgentTitle: "शुरुआती 24-48 घंटों में जरूरी कार्रवाई:",
      alertUrgentDesc: "कवक बीजाणुओं को हवा या सिंचाई के पानी से स्वस्थ पौधों तक फैलने से रोकने के लिए तुरंत कदम उठाएं।",
      introOrganic: "पर्यावरण-अनुकूल और जैविक खेती के लिए सुरक्षित प्रमाणित प्राकृतिक उपचार विधि:",
      alertSafetyTitle: "दवा छिड़काव सुरक्षा निर्देश:",
      alertSafetyDesc: "छिड़काव करते समय सदैव मास्क और दस्ताने पहनें। फल तुड़ाई से पहले अनिवार्य प्रतीक्षा अवधि (PHI) का पालन करें।",
      secMicroclimate: "रोग अनुकूल मौसम व तापमान",
      lblOptimalHumidity: "अनुकूल आर्द्रता (नमी)",
      lblOptimalTemp: "अनुकूल तापमान",
      secAgronomicPrevention: "दीर्घकालिक फसल बचाव उपाय",
      certFooterTitle: "प्रमाणित कृषि विज्ञान प्रयोगशाला रिपोर्ट",
      certFooterDesc: "अंतरराष्ट्रीय एकीकृत कीट प्रबंधन (आईपीएम) मानकों द्वारा प्रमाणित।",
      certVerifiedBy: "सत्यापित कर्ता:",
      modalCameraTitle: "खेत में कैमरे से फोटो लें",
      cameraGuidance: "प्रभावित पत्ती को फ्रेम के बीच में रखें",
      btnFlipCamera: "कैमरा बदलें",
      btnCapturePhoto: "फोटो खींचें",
      modalConfigTitle: "निदान प्रणाली सेटिंग्स",
      configInstruction: "कस्टम पत्तियों के वास्तविक समय विश्लेषण हेतु अपनी प्रयोगशाला कुंजी दर्ज करें।",
      lblEngineKey: "पैथोलॉजी इंजन कुंजी (API Key)",
      keyHelp: "स्थानीय ब्राउज़र में सुरक्षित। कुंजी दर्ज होने पर लाइव विश्लेषण सक्रिय रहता है।",
      btnTestConnection: "कनेक्शन जांचें",
      btnClear: "साफ करें",
      btnSaveKey: "सहेजें",
      modalArchiveTitle: "पिछले स्कैन का अभिलेख",
      btnClearArchive: "इतिहास मिटाएं",
      archiveEmpty: "अभी तक कोई पिछला रिकॉर्ड नहीं है।",
      tabWeather: "खेत मौसम (GPS)",
      btnRefreshGps: "जीपीएस मौसम अपडेट",
      lblCurrentTemp: "तापमान",
      lblRelativeHumidity: "हवा में नमी (आर्द्रता)",
      lblWindSpeed: "हवा की गति",
      lblPrecipitation: "बारिश की संभावना",
      titleForecast: "3-दिवसीय कृषि मौसम पूर्वानुमान",
      sprayTitleEvaluating: "छिड़काव अनुकूलता का आकलन...",
      sprayDescEvaluating: "हवा की गति और बारिश के जोखिम की वास्तविक समय में गणना की जा रही है।",
      modeDiagnosis: "फसल रोग निदान",
      modeWeatherDetails: "मौसम विवरण",
      modeWeatherForecast: "मौसम पूर्वानुमान",
      modeWeatherHistory: "मौसम इतिहास",
      lblForecastHeader: "7-दिवसीय कृषि पूर्वानुमान",
      titleForecastingSection: "मौसम पूर्वानुमान व छिड़काव खिड़की",
      descForecastingSection: "24-घंटे का प्रति-घंटे मौसम एवं 7-दिवसीय कृषि पूर्वानुमान जिससे बारिश से पूर्व समय पर छिड़काव हो सके।",
      titleHourly24: "24-घंटे का प्रति-घंटे खेत टाइमलाइन",
      descHourly24: "तापमान, बारिश, नमी और हवा की गति का क्रमिक विश्लेषण।",
      titleExtended7Day: "7-दिवसीय विस्तृत कृषि पूर्वानुमान",
      descExtended7Day: "आगामी 7 दिनों की बारिश, तेज हवा के झोंके एवं दैनिक छिड़काव अनुकूलता।",
      titleDryingGuidance: "दवा अवशोषण व पत्ती सुखाने की सलाह",
      lblOptimalHours: "छिड़काव का सबसे उत्तम समय",
      descOptimalHours: "दोपहर की तेज धूप और 30°C से अधिक तापमान में छिड़काव से बचें।",
      lblRainfast: "दवा अवशोषण की बारिश पूर्व अवधि",
      descRainfast: "सिस्टमिक फफूंदनाशक दवाओं के पूर्ण अवशोषण हेतु कम से कम 4 घंटे बारिश रहित मौसम आवश्यक है।",
      lblDewEvaporation: "सुबह की ओस सूखने की प्रतीक्षा",
      descDewEvaporation: "ओस से भीगी पत्तियों पर छिड़काव करने से दवा बह जाती है और उसका असर कम हो जाता है।",
      lblHistoricalArchive: "महामारी विज्ञान एवं मौसम इतिहास",
      titleHistorySection: "मौसम इतिहास एवं रोग पनपने का रिकॉर्ड",
      descHistorySection: "पिछले 7 दिनों का वास्तविक मौसम रिकॉर्ड। हाल ही की बारिश और नमी से पत्तियों पर उभरे रोगों का सहसंबंध।",
      lblTotalRain: "7 दिनों की कुल बारिश",
      lblAvgTemp: "औसत खेत तापमान",
      lblAvgHumidity: "औसत पत्ती नमी",
      lblIncubationWindow: "रोग संक्रमण सक्रियता",
      titleDailyHistoryTable: "दैनिक ऐतिहासिक मौसम रिकॉर्ड (पिछले 7 दिन)",
      thDate: "दिनांक",
      thCondition: "मौसम स्थिति",
      thTempRange: "तापमान सीमा (°C)",
      thPrecip: "बारिश (मिमी)",
      thWindGust: "अधिकतम हवा झोंका",
      thSporeRisk: "बीजाणु अंकुरण व पत्ती गीलापन जोखिम",
      titleEpidemiologyCycle: "पिछला मौसम कैसे आज के पत्ती रोगों को जन्म देता है",
      descEpidemiologyCycle: "फफूंद व जीवाणु संक्रमण से पत्तियों पर धब्बे दिखने में 3 से 7 दिन का ऊष्मायन समय लगता है।",
      btnNavForecast: "7-दिवसीय मौसम पूर्वानुमान व 24h टाइमलाइन देखें →",
      btnNavHistory: "पिछले 7 दिनों का मौसम इतिहास व बारिश रिकॉर्ड देखें →",
      weatherStationTitle: "खेत सूक्ष्म जलवायु एवं कीटनाशक छिड़काव केंद्र",
      weatherStationDesc: "सटीक जीपीएस आधारित मौसम, हवा की गति, पत्तियों की नमी और सुरक्षित छिड़काव का समय।",
      weatherLiveTelemetry: "लाइव जीपीएस टेलीमेट्री",
      btnOpenWeatherTab: "लाइव मौसम स्टेशन खोलें →",
      titlePathogenRiskMatrix: "रोगजनक कवक व जीवाणु पनपने का जोखिम",
      descPathogenRiskMatrix: "वर्तमान तापमान और हवा में नमी के आधार पर रोगजनक बीजाणुओं के प्रसार का रीयल-टाइम आकलन।",
      titleAgriculturalForecast: "3-दिवसीय कृषि छिड़काव दृष्टिकोण",
      descAgriculturalForecast: "बारिश की संभावना और हवा की गति के आधार पर फसल सुरक्षा छिड़काव की योजना।",
      btnGoToDiagnosis: "रोग निदान के लिए पत्ती का फोटो लगाएं"
    },

    Marathi: {
      subline: "अचूक पीक रोग निदान व कृषी सल्लागार प्रणाली",
      navHistory: "इतिहास (नोंदी)",
      navSettings: "कॉन्फिगरेशन",
      lblInspectionDate: "तपासणी दिनांक:",
      lblPlotId: "शेत गट क्रमांक:",
      lblProtocol: "मानक प्रोटोकॉल:",
      lblEngineReady: "रोग निदान प्रणाली सज्ज",
      titleSpecimen: "पानांचे नमुने तपासणी",
      descSpecimen: "बाधित पान, खोड किंवा फळाचा स्पष्ट फोटो प्रदान करा",
      dropHeading: "पिकाचा नमुना अपलोड करा",
      dropSub: "पानाचा स्पष्ट फोटो निवडा किंवा कॅमेऱ्याने काढा",
      btnBrowse: "फोटो निवडा",
      btnCamera: "शेत कॅमेरा",
      btnRemove: "काढून टाका",
      scanningTissue: "पानावरील डागांचे जैविक विश्लेषण सुरू...",
      lblCropCultivar: "पिकाचे नाव (पर्यायी)",
      btnRunAnalysis: "रोग निदान व उपचार योजना सुरू करा",
      lblRefSpecimens: "प्रमाणित मानक रोग नमुने",
      lblQuickTest: "१-क्लिक चाचणी",
      cropTomato: "टोमॅटो",
      disTomatoBlight: "करपा रोग",
      cropCorn: "मका",
      disCornRust: "तांबेरा रोग",
      cropGrape: "द्राक्ष",
      disGrapeMildew: "भुरी रोग",
      cropApple: "सफरचंद पान",
      disAppleScab: "स्कॅब रोग",
      idleTitle: "रोग निदान केंद्र सज्ज आहे",
      idleDesc: "तपासणीसाठी डाव्या बाजूने पानाचा फोटो अपलोड करा किंवा नमुना निवडा. प्रणाली लगेच रोगाचे अचूक निदान, सेंद्रिय उपाय आणि रासायनिक औषधांची माहिती देईल.",
      cap1Title: "अचूक बुरशी व रोग निदान",
      cap1Desc: "बुरशी, जिवाणू आणि अन्नद्रव्यांच्या कमतरतेचे अचूक शास्त्रीय निदान.",
      cap2Title: "सेंद्रिय व जैविक उपचार",
      cap2Desc: "कडुलिंब तेल, ट्रायकोडर्मा व जैविक बुरशीनाशकांचे प्रमाण.",
      cap3Title: "रासायनिक बुरशीनाशके व मात्रा",
      cap3Desc: "योग्य औषध, प्रति लिटर पाण्याचे प्रमाण आणि सुरक्षित फवारणी.",
      cap4Title: "प्रमाणित शेतकरी अहवाल (PDF)",
      cap4Desc: "शेतकरी नोंदी व कृषी अधिकाऱ्यांसाठी १-क्लिक अहवाल.",
      loadTitle: "रोग लक्षणांचे वैज्ञानिक विश्लेषण सुरू आहे",
      loadStep1: "पानावरील डाग, वलय आणि सुकलेल्या भागाची तपासणी...",
      step1Text: "ऊती तपासणी",
      step2Text: "निदान प्रणाली",
      step3Text: "उपचार निर्मिती",
      lblSeverityLevel: "रोगाची तीव्रता",
      lblMatchIndex: "अचूकता निर्देशांक",
      btnListenAdvisory: "सल्ला ऐका (आवाज)",
      btnExportPdf: "अहवाल (PDF) डाउनलोड",
      btnCopySummary: "सारांश कॉपी करा",
      lblTaxaClass: "रोग प्रकार",
      lblCanopyAffected: "बाधित क्षेत्र",
      lblLeafMoisture: "पानावरील ओलावा",
      lblRecoveryForecast: "सुधारणेचा अंदाज",
      tabOverview: "रोग व लक्षणे",
      tabImmediate: "२४-४८ तास तातडीचे उपाय",
      tabOrganic: "सेंद्रिय व जैविक उपाय",
      tabChemical: "रासायनिक बुरशीनाशके",
      tabPrevention: "प्रतिबंध व हवामान",
      secExecutiveSummary: "रोग निदानाचा मुख्य सारांश",
      secVisualSymptoms: "पानावर दिसलेली मुख्य लक्षणे",
      alertUrgentTitle: "सुरुवातीच्या २४ ते ४८ तासांत घ्यावयाची काळजी:",
      alertUrgentDesc: "बुरशीचा प्रादुर्भाव इतर झाडांवर पसरू नये म्हणून तातडीने उपाययोजना करा.",
      introOrganic: "पर्यावरणपूरक व सेंद्रिय शेतीसाठी सुरक्षित प्रमाणित नैसर्गिक उपचार:",
      alertSafetyTitle: "फवारणी सुरक्षा सूचना:",
      alertSafetyDesc: "फवारणी करताना मास्क आणि हातमोजे वापरा. फळे काढणीपूर्वी सुरक्षित कालावधीचे (PHI) पालन करा.",
      secMicroclimate: "रोगास पोषक हवामान",
      lblOptimalHumidity: "पोषक आर्द्रता (ओलावा)",
      lblOptimalTemp: "पोषक तापमान",
      secAgronomicPrevention: "दीर्घकालीन पीक संरक्षण उपाय",
      certFooterTitle: "प्रमाणित कृषी विज्ञान प्रयोगशाळा अहवाल",
      certFooterDesc: "आंतरराष्ट्रीय एकात्मिक कीड व्यवस्थापन (IPM) मानकांनुसार प्रमाणित.",
      certVerifiedBy: "तपासणी अधिकारी:",
      modalCameraTitle: "कॅमेऱ्याने पानाचा फोटो घ्या",
      cameraGuidance: "बाधित पान चौकटीच्या मध्यभागी ठेवा",
      btnFlipCamera: "कॅमेरा बदला",
      btnCapturePhoto: "फोटो काढा",
      modalConfigTitle: "निदान प्रणाली सेटिंग्स",
      configInstruction: "थेट रोग निदानासाठी आपली प्रयोगशाळा की (API Key) प्रविष्ट करा.",
      lblEngineKey: "इंजिन की (API Key)",
      keyHelp: "ब्राउझरमध्ये सुरक्षित ठेवली जाते.",
      btnTestConnection: "तपासा",
      btnClear: "साफ करा",
      btnSaveKey: "जतन करा",
      modalArchiveTitle: "मागील तपासण्यांचा इतिहास",
      btnClearArchive: "नोंदी मिटवा",
      archiveEmpty: "अद्याप कोणतीही नोंद उपलब्ध नाही.",
      tabWeather: "शेत हवामान (GPS)",
      btnRefreshGps: "हवामान अपडेट",
      lblCurrentTemp: "तापमान",
      lblRelativeHumidity: "हवेतील आर्द्रता",
      lblWindSpeed: "वाऱ्याचा वेग",
      lblPrecipitation: "पावसाची शक्यता",
      titleForecast: "३-दिवसीय कृषी हवामान अंदाज",
      sprayTitleEvaluating: "फवारणी अनुकूलतेची तपासणी...",
      modeDiagnosis: "पीक रोग निदान",
      modeWeatherDetails: "हवामान तपशील",
      modeWeatherForecast: "हवामान अंदाज",
      modeWeatherHistory: "हवामान इतिहास",
      weatherStationTitle: "शेत सूक्ष्म हवामान व फवारणी अनुकूलता केंद्र",
      weatherStationDesc: "थेट जीपीएस हवामान, वाऱ्याचा वेग, पानावरील ओलावा आणि योग्य फवारणीच्या वेळा.",
      weatherLiveTelemetry: "थेट जीपीएस हवामान माहिती",
      btnOpenWeatherTab: "थेट हवामान केंद्र उघडा →",
      titlePathogenRiskMatrix: "रोगजनक बुरशी व जिवाणू वाढीचा धोका",
      descPathogenRiskMatrix: "सध्याचे तापमान आणि हवेतील आर्द्रतेच्या आधारे रोगांचा प्रादुर्भाव वाढण्याचा शास्त्रीय अंदाज.",
      titleAgriculturalForecast: "३-दिवसीय शेती फवारणी अंदाज",
      descAgriculturalForecast: "पावसाची शक्यता आणि वाऱ्याच्या वेगावरून फवारणीचे नियोजन.",
      btnGoToDiagnosis: "रोग निदानासाठी बाधित पानाचा फोटो लावा"
    },

    Spanish: {
      subline: "Sistema de Fitopatología de Precisión y Asesoramiento",
      navHistory: "Registros",
      navSettings: "Configuración",
      lblInspectionDate: "Fecha de Inspección:",
      lblPlotId: "Lote de Campo:",
      lblProtocol: "Protocolo:",
      lblEngineReady: "Motor Fitosanitario Listo",
      titleSpecimen: "Inspección de Muestra Foliar",
      descSpecimen: "Fotografía macroscópica de hoja, tallo o fruto afectado",
      dropHeading: "Montar Muestra Foliar",
      dropSub: "Arrastre imagen de alta resolución o examine archivos",
      btnBrowse: "Cargar Muestra",
      btnCamera: "Cámara de Campo",
      btnRemove: "Desmontar",
      scanningTissue: "ESCANEANDO MORFOLOGÍA LESIONAL...",
      lblCropCultivar: "Cultivo o Variedad (Opcional)",
      btnRunAnalysis: "Ejecutar Diagnóstico Fitosanitario",
      lblRefSpecimens: "Muestras Estándar de Referencia",
      lblQuickTest: "Prueba 1-Clic",
      cropTomato: "Tomate",
      disTomatoBlight: "Tizón Temprano",
      cropCorn: "Maíz",
      disCornRust: "Roya Común",
      cropGrape: "Vid / Uva",
      disGrapeMildew: "Oídio (Cenicilla)",
      cropApple: "Manzano",
      disAppleScab: "Moteado (Sarna)",
      idleTitle: "Estación de Diagnóstico Inactiva",
      idleDesc: "Monte una muestra de hoja o seleccione una referencia a la izquierda. El sistema analizará patrones celulares de necrosis y formulará un protocolo agronómico completo.",
      cap1Title: "Taxonomía Celular de Patógenos",
      cap1Desc: "Identificación binomial de agentes fúngicos, bacterianos y virales.",
      cap2Title: "Recetas Bio-Orgánicas Certificadas",
      cap2Desc: "Dosis exactas de extractos naturales y épocas de pulverización.",
      cap3Title: "Tratamientos Químicos Certificados",
      cap3Desc: "Materia activa, dosis de campo, EPP y plazos de seguridad.",
      cap4Title: "Generación de Informe PDF",
      cap4Desc: "Emisión de certificados de laboratorio fitopatológico de campo.",
      loadTitle: "Procesando Biometría Patológica",
      loadStep1: "Segmentando tejido necrótico y halos cloróticos...",
      step1Text: "Segmentación Foliar",
      step2Text: "Motor Patológico",
      step3Text: "Protocolo de Tratamiento",
      lblSeverityLevel: "Nivel de Severidad",
      lblMatchIndex: "Índice Diagnóstico",
      btnListenAdvisory: "Escuchar Asesoramiento",
      btnExportPdf: "Exportar PDF Certificado",
      btnCopySummary: "Copiar Protocolo",
      lblTaxaClass: "Vector Taxonómico",
      lblCanopyAffected: "Área Foliar Afectada",
      lblLeafMoisture: "Humedad del Dosel",
      lblRecoveryForecast: "Pronóstico de Recuperación",
      tabOverview: "Patología y Síntomas",
      tabImmediate: "Contención 24-48h",
      tabOrganic: "Remedios Bio-Orgánicos",
      tabChemical: "Tratamientos Químicos",
      tabPrevention: "Prevención y Clima",
      secExecutiveSummary: "Resumen Ejecutivo del Diagnóstico",
      secVisualSymptoms: "Síntomas Visuales y Microscópicos",
      alertUrgentTitle: "Protocolo Inmediato de Aislamiento (24-48h):",
      alertUrgentDesc: "Actúe con rapidez para contener la dispersión de esporas o inóculo hacia surcos sanos adyacentes.",
      introOrganic: "Medidas ecológicas certificadas respetuosas con polinizadores y fauna auxiliar:",
      alertSafetyTitle: "Manejo Seguro de Fitosanitarios:",
      alertSafetyDesc: "Respete los plazos de seguridad (PHI), utilice EPP completo (guantes de nitrilo, mascarilla, gafas) y rote materias activas (FRAC).",
      secMicroclimate: "Dinámica Microclimática del Patógeno",
      lblOptimalHumidity: "Humedad de Esporulación",
      lblOptimalTemp: "Temperatura Óptima",
      secAgronomicPrevention: "Prácticas de Saneamiento Cultural",
      certFooterTitle: "Protocolo de Diagnóstico Certificado de Laboratorio",
      certFooterDesc: "Conforme a normas internacionales de fitopatología y Manejo Integrado de Plagas (MIP).",
      certVerifiedBy: "Verificado Por:",
      modalCameraTitle: "Captura Óptica de Campo",
      cameraGuidance: "Encuadre la hoja afectada dentro de la retícula",
      btnFlipCamera: "Invertir Cámara",
      btnCapturePhoto: "Capturar Muestra",
      modalConfigTitle: "Configuración del Motor Fitosanitario",
      configInstruction: "Ingrese credenciales de laboratorio para habilitar el análisis espectral en tiempo real.",
      lblEngineKey: "Clave de Motor (API Key)",
      keyHelp: "Guardada localmente en su entorno de trabajo.",
      btnTestConnection: "Probar Conexión",
      btnClear: "Borrar",
      btnSaveKey: "Guardar",
      modalArchiveTitle: "Archivos de Diagnósticos de Campo",
      btnClearArchive: "Limpiar Archivos",
      archiveEmpty: "No hay registros fitopatológicos archivados aún.",
      tabWeather: "Clima de Campo (GPS)",
      btnRefreshGps: "Actualizar Clima GPS",
      lblCurrentTemp: "Temperatura Ambiente",
      lblRelativeHumidity: "Humedad Relativa",
      lblWindSpeed: "Velocidad del Viento",
      lblPrecipitation: "Probabilidad de Lluvia",
      titleForecast: "Pronóstico Microclimático a 3 Días",
      sprayTitleEvaluating: "Evaluando Ventana de Pulverización...",
      sprayDescEvaluating: "Calculando deriva por viento y riesgo de lluvia en tiempo real.",
      modeDiagnosis: "Diagnóstico Foliar",
      modeWeatherDetails: "Detalles del Clima",
      modeWeatherForecast: "Pronóstico Meteorológico",
      modeWeatherHistory: "Historial Meteorológico",
      weatherStationTitle: "Centro Microclimático y de Pulverización Agronómica",
      weatherStationDesc: "Telemetría atmosférica en tiempo real, deriva de viento y ventanas seguras de aplicación fitosanitaria.",
      weatherLiveTelemetry: "Telemetría GPS en Vivo",
      btnOpenWeatherTab: "Abrir Estación Meteorológica →",
      titlePathogenRiskMatrix: "Riesgo de Incubación de Patógenos",
      descPathogenRiskMatrix: "Evaluado en tiempo real según temperatura y humedad ambiental de su campo.",
      titleAgriculturalForecast: "Pronóstico de Pulverización Agrícola a 3 Días",
      descAgriculturalForecast: "Probabilidad de lluvia y velocidad del viento para la aplicación óptima de fungicidas.",
      btnGoToDiagnosis: "Montar Hoja Enferma para Diagnóstico AI"
    },

    French: {
      subline: "Système de Diagnostic Phytopathologique de Précision",
      navHistory: "Archives",
      navSettings: "Configuration",
      lblInspectionDate: "Date d'Inspection:",
      lblPlotId: "Parcelle:",
      lblProtocol: "Protocole:",
      lblEngineReady: "Moteur Pathologique Prêt",
      titleSpecimen: "Inspection du Spécimen Foliaire",
      descSpecimen: "Photographie macroscopique du tissu foliaire ou fruitier atteint",
      dropHeading: "Charger le Spécimen",
      dropSub: "Glissez une photo haute résolution ou parcourez vos fichiers",
      btnBrowse: "Téléverser",
      btnCamera: "Caméra Terrain",
      btnRemove: "Retirer",
      scanningTissue: "ANALYSE DE LA MORPHOLOGIE LÉSIONNELLE...",
      lblCropCultivar: "Culture ou Variété (Optionnel)",
      btnRunAnalysis: "Lancer le Diagnostic Pathologique",
      lblRefSpecimens: "Spécimens de Référence Standard",
      lblQuickTest: "Test 1-Clic",
      cropTomato: "Tomate",
      disTomatoBlight: "Alternariose (Tache Cible)",
      cropCorn: "Maïs",
      disCornRust: "Rouille Commune",
      cropGrape: "Vigne",
      disGrapeMildew: "Oïdium de la Vigne",
      cropApple: "Pommier",
      disAppleScab: "Tavelure du Pommier",
      idleTitle: "Poste de Diagnostic Inactif",
      idleDesc: "Chargez un spécimen foliaire pour démarrer l'analyse phytosanitaire complète et obtenir les recommandations de traitement.",
      cap1Title: "Taxonomie Cellulaire des Pathogènes",
      cap1Desc: "Identification binomiale des agents cryptogamiques et bactériens.",
      cap2Title: "Recettes Bio-Organiques Certifiées",
      cap2Desc: "Dosages exacts d'extraits naturels et calendriers d'application.",
      cap3Title: "Traitements Fongicides Homologués",
      cap3Desc: "Substances actives, doses de plein champ, EPI et délais avant récolte (DAR).",
      cap4Title: "Export PDF Certifié de Terrain",
      cap4Desc: "Émission instantanée de rapports de laboratoire pour vos archives.",
      loadTitle: "Analyse Biométrique en Cours",
      loadStep1: "Extraction des marges nécrotiques et halos chlorotiques...",
      step1Text: "Segmentation Tissulaire",
      step2Text: "Moteur Pathologique",
      step3Text: "Protocole de Soins",
      lblSeverityLevel: "Niveau de Sévérité",
      lblMatchIndex: "Indice Diagnostique",
      btnListenAdvisory: "Écouter l'Avis Phytosanitaire",
      btnExportPdf: "Exporter Rapport PDF Certifié",
      btnCopySummary: "Copier le Protocole",
      lblTaxaClass: "Vecteur Taxonomique",
      lblCanopyAffected: "Surface Foliaire Atteinte",
      lblLeafMoisture: "Humidité Foliaire",
      lblRecoveryForecast: "Pronostic de Récupération",
      tabOverview: "Pathologie & Symptômes",
      tabImmediate: "Confinement 24-48h",
      tabOrganic: "Remèdes Bio-Organiques",
      tabChemical: "Traitements Chimiques",
      tabPrevention: "Prévention & Climat",
      secExecutiveSummary: "Résumé Synthétique du Diagnostic",
      secVisualSymptoms: "Symptômes Visuels et Microscopiques Observés",
      alertUrgentTitle: "Protocole d'Isolement Immédiat (24-48h):",
      alertUrgentDesc: "Intervenez rapidement pour éviter la propagation des conidies fongiques aux rangs sains voisins.",
      introOrganic: "Traitements écologiques respectueux des pollinisateurs et auxiliaires de culture:",
      alertSafetyTitle: "Sécurité et Bonnes Pratiques Phytosanitaires:",
      alertSafetyDesc: "Respectez rigoureusement les délais avant récolte (DAR), portez vos EPI et alternez les modes d'action (FRAC).",
      secMicroclimate: "Dynamique Microclimatique du Pathogène",
      lblOptimalHumidity: "Hygrométrie de Sporulation",
      lblOptimalTemp: "Température Optimale",
      secAgronomicPrevention: "Pratiques Culturales et Prophylactiques",
      certFooterTitle: "Protocole Certifié de Laboratoire Phytosanitaire",
      certFooterDesc: "Certifié selon les directives internationales de protection intégrée des cultures.",
      certVerifiedBy: "Validé Par:",
      modalCameraTitle: "Capture Optique de Terrain",
      cameraGuidance: "Cadrez le feuillage affecté dans la mire",
      btnFlipCamera: "Changer de Caméra",
      btnCapturePhoto: "Capturer",
      modalConfigTitle: "Configuration du Moteur Fitosanitaire",
      configInstruction: "Configurez vos identifiants pour l'analyse spectrale en direct.",
      lblEngineKey: "Clé du Moteur (API Key)",
      keyHelp: "Enregistrée localement et de manière sécurisée.",
      btnTestConnection: "Tester la Connexion",
      btnClear: "Effacer",
      btnSaveKey: "Enregistrer",
      modalArchiveTitle: "Archives des Diagnostics de Terrain",
      btnClearArchive: "Vider l'Historique",
      archiveEmpty: "Aucun diagnostic archivé pour le moment.",
      tabWeather: "Météo Terrain (GPS)",
      btnRefreshGps: "Actualiser Météo GPS",
      lblCurrentTemp: "Température Ambiante",
      lblRelativeHumidity: "Hygrométrie Relative",
      lblWindSpeed: "Vitesse du Vent",
      lblPrecipitation: "Probabilité de Pluie",
      titleForecast: "Prévisions Microclimatiques à 3 Jours",
      sprayTitleEvaluating: "Évaluation de la Fenêtre de Traitement...",
      sprayDescEvaluating: "Analyse en temps réel du risque de dérive et de lessivage par la pluie.",
      modeDiagnosis: "Diagnostic Foliaire",
      modeWeatherDetails: "Détails Météo",
      modeWeatherForecast: "Prévisions Météo",
      modeWeatherHistory: "Historique Météo",
      weatherStationTitle: "Station Microclimatique & Pulvérisation Agricole",
      weatherStationDesc: "Télémétrie en temps réel, vitesse de dérive éolienne et fenêtres d'application des traitements.",
      weatherLiveTelemetry: "Télémétrie GPS en Direct",
      btnOpenWeatherTab: "Ouvrir la Station Météo →",
      titlePathogenRiskMatrix: "Risque d'Incubation Pathologique",
      descPathogenRiskMatrix: "Évalué en temps réel selon la température et l'hygrométrie de votre parcelle.",
      titleAgriculturalForecast: "Prévisions Agricoles à 3 Jours",
      descAgriculturalForecast: "Probabilités de pluie et seuils de dérive pour des pulvérisations optimales.",
      btnGoToDiagnosis: "Analyser une Feuille Malade par IA"
    },

    Punjabi: {
      subline: "ਸਟੀਕ ਫ਼ਸਲ ਬਿਮਾਰੀ ਜਾਂਚ ਅਤੇ ਖੇਤੀਬਾੜੀ ਸਲਾਹ ਪ੍ਰਣਾਲੀ",
      navHistory: "ਰਿਕਾਰਡ",
      navSettings: "ਸੈਟਿੰਗਾਂ",
      lblInspectionDate: "ਨਿਰੀਖਣ ਮਿਤੀ:",
      lblPlotId: "ਖੇਤ ਪਲਾਟ ਨੰਬਰ:",
      lblProtocol: "ਪ੍ਰੋਟੋਕੋਲ:",
      lblEngineReady: "ਜਾਂਚ ਪ੍ਰਣਾਲੀ ਤਿਆਰ ਹੈ",
      titleSpecimen: "ਪੱਤਾ ਨਮੂਨਾ ਨਿਰੀਖਣ",
      descSpecimen: "ਪ੍ਰਭਾਵਿਤ ਪੱਤੇ ਜਾਂ ਫਲ ਦੀ ਸਾਫ਼ ਫੋਟੋ ਅੱਪਲੋਡ ਕਰੋ",
      dropHeading: "ਫ਼ਸਲ ਦਾ ਨਮੂਨਾ ਅੱਪਲੋਡ ਕਰੋ",
      dropSub: "ਪੱਤੇ ਦੀ ਫੋਟੋ ਖਿੱਚੋ ਜਾਂ ਫਾਈਲ ਚੁਣੋ",
      btnBrowse: "ਫਾਈਲ ਚੁਣੋ",
      btnCamera: "ਖੇਤ ਕੈਮਰਾ",
      btnRemove: "ਹਟਾਓ",
      scanningTissue: "ਪੱਤੇ ਦੇ ਧੱਬਿਆਂ ਦੀ ਜਾਂਚ ਜਾਰੀ ਹੈ...",
      lblCropCultivar: "ਫ਼ਸਲ ਦਾ ਨਾਂ (ਵਿਕਲਪਿਕ)",
      btnRunAnalysis: "ਬਿਮਾਰੀ ਜਾਂਚ ਅਤੇ ਇਲਾਜ ਸ਼ੁਰੂ ਕਰੋ",
      lblRefSpecimens: "ਪ੍ਰਮਾਣਿਤ ਨਮੂਨੇ",
      lblQuickTest: "1-ਕਲਿੱਕ ਟੈਸਟ",
      cropTomato: "ਟਮਾਟਰ",
      disTomatoBlight: "ਅਗੇਤਾ ਝੁਲਸ ਰੋਗ",
      cropCorn: "ਮੱਕੀ",
      disCornRust: "ਕੁੰਗੀ ਰੋਗ (ਰਸਟ)",
      cropGrape: "ਅੰਗੂਰ",
      disGrapeMildew: "ਚਿੱਟਾ ਰੋਗ (ਮਿਲਡਿਊ)",
      cropApple: "ਸੇਬ ਦਾ ਪੱਤਾ",
      disAppleScab: "ਸਕੈਬ ਰੋਗ",
      idleTitle: "ਜਾਂਚ ਸਟੇਸ਼ਨ ਤਿਆਰ ਹੈ",
      idleDesc: "ਖੱਬੇ ਪਾਸੇ ਤੋਂ ਪੱਤੇ ਦੀ ਫੋਟੋ ਅੱਪਲੋਡ ਕਰੋ। ਸਿਸਟਮ ਤੁਰੰਤ ਬਿਮਾਰੀ ਦਾ ਸਹੀ ਇਲਾਜ ਅਤੇ ਸਪਰੇਅ ਦੀ ਜਾਣਕਾਰੀ ਦੇਵੇਗਾ।",
      cap1Title: "ਸਹੀ ਉੱਲੀ ਅਤੇ ਬਿਮਾਰੀ ਦੀ ਪਛਾਣ",
      cap1Desc: "ਉੱਲੀ ਅਤੇ ਜੀਵਾਣੂਆਂ ਦੀ ਵਿਗਿਆਨਕ ਜਾਂਚ।",
      cap2Title: "ਪ੍ਰਮਾਣਿਤ ਜੈਵਿਕ ਨੁਸਖੇ",
      cap2Desc: "ਨੀਮ ਦਾ ਤੇਲ ਅਤੇ ਜੈਵਿਕ ਉੱਲੀਨਾਸ਼ਕ ਦੀ ਸਹੀ ਮਾਤਰਾ।",
      cap3Title: "ਰਸਾਇਣਕ ਦਵਾਈਆਂ ਅਤੇ ਸਪਰੇਅ",
      cap3Desc: "ਸਹੀ ਦਵਾਈ, ਪ੍ਰਤੀ ਲੀਟਰ ਪਾਣੀ ਦੀ ਮਾਤਰਾ ਅਤੇ ਸੁਰੱਖਿਆ।",
      cap4Title: "ਕਿਸਾਨ ਰਿਪੋਰਟ (PDF) ਡਾਊਨਲੋਡ",
      cap4Desc: "ਖੇਤੀ ਅਧਿਕਾਰੀਆਂ ਲਈ ਪ੍ਰਮਾਣਿਤ ਰਿਪੋਰਟ।",
      loadTitle: "ਵਿਗਿਆਨਕ ਜਾਂਚ ਚੱਲ ਰਹੀ ਹੈ",
      loadStep1: "ਪੱਤੇ ਦੇ ਧੱਬਿਆਂ ਦੀ ਜਾਂਚ...",
      step1Text: "ਟਿਸ਼ੂ ਜਾਂਚ",
      step2Text: "ਪੈਥੋਲੋਜੀ ਇੰਜਣ",
      step3Text: "ਇਲਾਜ ਯੋਜਨਾ",
      lblSeverityLevel: "ਬਿਮਾਰੀ ਦੀ ਗੰਭੀਰਤਾ",
      lblMatchIndex: "ਸ਼ੁੱਧਤਾ ਸੂਚਕਾਂਕ",
      btnListenAdvisory: "ਸਲਾਹ ਸੁਣੋ (ਆਵਾਜ਼)",
      btnExportPdf: "ਰਿਪੋਰਟ (PDF) ਡਾਊਨਲੋਡ",
      btnCopySummary: "ਸਾਰ ਕਾਪੀ ਕਰੋ",
      lblTaxaClass: "ਰੋਗ ਦੀ ਕਿਸਮ",
      lblCanopyAffected: "ਪ੍ਰਭਾਵਿਤ ਖੇਤਰ",
      lblLeafMoisture: "ਪੱਤੇ ਦੀ ਨਮੀ",
      lblRecoveryForecast: "ਸੁਧਾਰ ਦੀ ਸੰਭਾਵਨਾ",
      tabOverview: "ਬਿਮਾਰੀ ਅਤੇ ਲੱਛਣ",
      tabImmediate: "24-48 ਘੰਟੇ ਜ਼ਰੂਰੀ ਕਦਮ",
      tabOrganic: "ਜੈਵਿਕ ਅਤੇ ਦੇਸੀ ਨੁਸਖੇ",
      tabChemical: "ਰਸਾਇਣਕ ਸਪਰੇਅ",
      tabPrevention: "ਰੋਕਥਾਮ ਅਤੇ ਮੌਸਮ",
      secExecutiveSummary: "ਮੁੱਖ ਜਾਂਚ ਸਾਰ",
      secVisualSymptoms: "ਵੇਖੇ ਗਏ ਮੁੱਖ ਲੱਛਣ",
      alertUrgentTitle: "ਪਹਿਲੇ 24-48 ਘੰਟਿਆਂ ਵਿੱਚ ਜ਼ਰੂਰੀ ਕਾਰਵਾਈ:",
      alertUrgentDesc: "ਬਿਮਾਰੀ ਨੂੰ ਦੂਜੇ ਪੌਦਿਆਂ ਤੱਕ ਫੈਲਣ ਤੋਂ ਰੋਕਣ ਲਈ ਤੁਰੰਤ ਕਦਮ ਚੁੱਕੋ।",
      introOrganic: "ਜੈਵਿਕ ਖੇਤੀ ਲਈ ਪ੍ਰਮਾਣਿਤ ਕੁਦਰਤੀ ਇਲਾਜ:",
      alertSafetyTitle: "ਸਪਰੇਅ ਸੁਰੱਖਿਆ ਨਿਰਦੇਸ਼:",
      alertSafetyDesc: "ਸਪਰੇਅ ਵੇਲੇ ਮਾਸਕ ਅਤੇ ਦਸਤਾਨੇ ਪਹਿਨੋ। ਫ਼ਸਲ ਤੋੜਨ ਤੋਂ ਪਹਿਲਾਂ ਲਾਜ਼ਮੀ ਦਿਨਾਂ ਦੀ ਉਡੀਕ ਕਰੋ।",
      secMicroclimate: "ਅਨੁਕੂਲ ਮੌਸਮ",
      lblOptimalHumidity: "ਅਨੁਕੂਲ ਨਮੀ",
      lblOptimalTemp: "ਅਨੁਕੂਲ ਤਾਪਮਾਨ",
      secAgronomicPrevention: "ਲੰਮੇ ਸਮੇਂ ਲਈ ਬਚਾਅ ਉਪਾਅ",
      certFooterTitle: "ਪ੍ਰਮਾਣਿਤ ਖੇਤੀਬਾੜੀ ਲੈਬਾਰਟਰੀ ਰਿਪੋਰਟ",
      certFooterDesc: "ਅੰਤਰਰਾਸ਼ਟਰੀ ਪੌਦਾ ਸੁਰੱਖਿਆ ਮਾਪਦੰਡਾਂ ਅਨੁਸਾਰ ਪ੍ਰਮਾਣਿਤ।",
      certVerifiedBy: "ਤਸਦੀਕ ਕਰਤਾ:",
      modalCameraTitle: "ਕੈਮਰੇ ਨਾਲ ਫੋਟੋ ਲਵੋ",
      cameraGuidance: "ਪੱਤੇ ਨੂੰ ਚੌਖਟੇ ਦੇ ਵਿਚਕਾਰ ਰੱਖੋ",
      btnFlipCamera: "ਕੈਮਰਾ ਬਦਲੋ",
      btnCapturePhoto: "ਫੋਟੋ ਖਿੱਚੋ",
      modalConfigTitle: "ਸਿਸਟਮ ਸੈਟਿੰਗਾਂ",
      configInstruction: "ਲਾਈਵ ਜਾਂਚ ਲਈ ਆਪਣੀ ਲੈਬ ਕੁੰਜੀ (API Key) ਦਾਖਲ ਕਰੋ।",
      lblEngineKey: "ਇੰਜਣ ਕੁੰਜੀ (API Key)",
      keyHelp: "ਸਥਾਨਕ ਬਰਾਊਜ਼ਰ ਵਿੱਚ ਸੁਰੱਖਿਅਤ।",
      btnTestConnection: "ਟੈਸਟ ਕਰੋ",
      btnClear: "ਸਾਫ਼ ਕਰੋ",
      btnSaveKey: "ਸੰਭਾਲੋ",
      modalArchiveTitle: "ਪਿਛਲਾ ਰਿਕਾਰਡ",
      btnClearArchive: "ਰਿਕਾਰਡ ਮਿਟਾਓ",
      archiveEmpty: "ਕੋਈ ਪਿਛਲਾ ਰਿਕਾਰਡ ਨਹੀਂ ਹੈ।",
      tabWeather: "ਖੇਤ ਮੌਸਮ (GPS)",
      btnRefreshGps: "ਮੌਸਮ ਅੱਪਡੇਟ ਕਰੋ",
      lblCurrentTemp: "ਤਾਪਮਾਨ",
      lblRelativeHumidity: "ਹਵਾ ਵਿੱਚ ਨਮੀ",
      lblWindSpeed: "ਹਵਾ ਦੀ ਰਫ਼ਤਾਰ",
      lblPrecipitation: "ਮੀਂਹ ਦੀ ਸੰਭਾਵਨਾ",
      titleForecast: "3-ਦਿਨਾ ਖੇਤੀ ਮੌਸਮ ਭਵਿੱਖਬਾਣੀ",
      sprayTitleEvaluating: "ਸਪਰੇਅ ਦੇ ਸਮੇਂ ਦੀ ਜਾਂਚ...",
      sprayDescEvaluating: "ਹਵਾ ਦੀ ਗਤੀ ਅਤੇ ਮੀਂਹ ਦੇ ਜੋਖਮ ਦੀ ਜਾਂਚ ਕੀਤੀ ਜਾ ਰਹੀ ਹੈ।",
      modeDiagnosis: "ਫ਼ਸਲ ਰੋਗ ਜਾਂਚ",
      modeWeatherDetails: "ਮੌਸਮ ਵੇਰਵੇ",
      modeWeatherForecast: "ਮੌਸਮ ਭਵਿੱਖਬਾਣੀ",
      modeWeatherHistory: "ਮੌਸਮ ਇਤਿਹਾਸ",
      weatherStationTitle: "ਖੇਤ ਮੌਸਮ ਅਤੇ ਸਪਰੇਅ ਅਨੁਕੂਲਤਾ ਕੇਂਦਰ",
      weatherStationDesc: "ਜੀਪੀਐਸ ਆਧਾਰਿਤ ਲਾਈਵ ਮੌਸਮ, ਹਵਾ ਦੀ ਰਫ਼ਤਾਰ ਅਤੇ ਸੁਰੱਖਿਅਤ ਸਪਰੇਅ ਸਮਾਂ।",
      weatherLiveTelemetry: "ਲਾਈਵ ਜੀਪੀਐਸ ਮੌਸਮ",
      btnOpenWeatherTab: "ਮੌਸਮ ਸਟੇਸ਼ਨ ਖੋਲ੍ਹੋ →",
      titlePathogenRiskMatrix: "ਬਿਮਾਰੀ ਫੈਲਣ ਦਾ ਖ਼ਤਰਾ",
      descPathogenRiskMatrix: "ਮੌਜੂਦਾ ਤਾਪਮਾਨ ਅਤੇ ਨਮੀ ਦੇ ਆਧਾਰ 'ਤੇ ਬਿਮਾਰੀ ਦੇ ਫੈਲਾਅ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ।",
      titleAgriculturalForecast: "3-ਦਿਨਾ ਖੇਤੀ ਸਪਰੇਅ ਅਨੁਮਾਨ",
      descAgriculturalForecast: "ਮੀਂਹ ਦੀ ਸੰਭਾਵਨਾ ਅਤੇ ਹਵਾ ਦੀ ਗਤੀ ਦੇ ਆਧਾਰ 'ਤੇ ਸਪਰੇਅ ਦੀ ਯੋਜਨਾ।",
      btnGoToDiagnosis: "ਰੋਗ ਜਾਂਚ ਲਈ ਪੱਤੇ ਦੀ ਫੋਟੋ ਲਗਾਓ"
    }
  };

  // State Management
  const state = {
    currentLanguage: 'English',
    currentImageBase64: null,
    currentMimeType: 'image/jpeg',
    currentFileName: 'leaf_specimen.jpg',
    currentFileSize: '1.2 MB',
    currentSampleId: null,
    currentDiagnosisData: null,
    clientApiKey: localStorage.getItem('agropath_api_key') || '',
    history: JSON.parse(localStorage.getItem('agropath_history') || '[]'),
    cameraStream: null,
    currentFacingMode: 'environment',
    isSpeaking: false,
    speechUtterance: null
  };

  // DOM Elements
  const languageSelect = document.getElementById('languageSelect');
  const dropzone = document.getElementById('dropzone');
  const dropzoneContent = document.getElementById('dropzoneContent');
  const fileInput = document.getElementById('fileInput');
  const browseBtn = document.getElementById('browseBtn');
  const cameraBtn = document.getElementById('cameraBtn');
  const previewContainer = document.getElementById('previewContainer');
  const imagePreview = document.getElementById('imagePreview');
  const imageFileName = document.getElementById('imageFileName');
  const imageFileSize = document.getElementById('imageFileSize');
  const resetImageBtn = document.getElementById('resetImageBtn');
  const scanLaser = document.getElementById('scanLaser');
  const cropHintInput = document.getElementById('cropHintInput');
  const analyzeBtn = document.getElementById('analyzeBtn');
  const analyzeBtnText = document.getElementById('analyzeBtnText');
  const currentDateDisplay = document.getElementById('currentDateDisplay');

  // Studio States
  const idleState = document.getElementById('idleState');
  const loadingState = document.getElementById('loadingState');
  const resultsState = document.getElementById('resultsState');
  const loadingStepText = document.getElementById('loadingStepText');
  const analysisProgressBar = document.getElementById('analysisProgressBar');

  // Results Fields
  const resCropName = document.getElementById('resCropName');
  const resDiseaseName = document.getElementById('resDiseaseName');
  const resPathogenName = document.getElementById('resPathogenName');
  const resSeverityPill = document.getElementById('resSeverityPill');
  const resSeverityText = document.getElementById('resSeverityText');
  const resConfidenceVal = document.getElementById('resConfidenceVal');
  const resCategory = document.getElementById('resCategory');
  const resAffectedArea = document.getElementById('resAffectedArea');
  const resMoisture = document.getElementById('resMoisture');
  const resPrognosis = document.getElementById('resPrognosis');
  const resSummary = document.getElementById('resSummary');
  const resSymptomsList = document.getElementById('resSymptomsList');
  const resImmediateList = document.getElementById('resImmediateList');
  const resOrganicGrid = document.getElementById('resOrganicGrid');
  const resChemicalGrid = document.getElementById('resChemicalGrid');
  const resPreventionList = document.getElementById('resPreventionList');
  const resFavorableHumidity = document.getElementById('resFavorableHumidity');
  const resFavorableTemp = document.getElementById('resFavorableTemp');
  const resWeatherWarning = document.getElementById('resWeatherWarning');

  // Actions
  const ttsPlayBtn = document.getElementById('ttsPlayBtn');
  const ttsBtnText = document.getElementById('ttsBtnText');
  const exportReportBtn = document.getElementById('exportReportBtn');
  const shareReportBtn = document.getElementById('shareReportBtn');

  // Modals & History
  const settingsBtn = document.getElementById('settingsBtn');
  const settingsModal = document.getElementById('settingsModal');
  const closeSettingsBtn = document.getElementById('closeSettingsBtn');
  const apiKeyInput = document.getElementById('apiKeyInput');
  const toggleKeyVisibilityBtn = document.getElementById('toggleKeyVisibilityBtn');
  const testKeyBtn = document.getElementById('testKeyBtn');
  const saveKeyBtn = document.getElementById('saveKeyBtn');
  const clearKeyBtn = document.getElementById('clearKeyBtn');
  const apiTestStatus = document.getElementById('apiTestStatus');

  const cameraModal = document.getElementById('cameraModal');
  const closeCameraBtn = document.getElementById('closeCameraBtn');
  const webcamVideo = document.getElementById('webcamVideo');
  const cameraCanvas = document.getElementById('cameraCanvas');
  const snapPhotoBtn = document.getElementById('snapPhotoBtn');
  const switchCameraBtn = document.getElementById('switchCameraBtn');

  const historyBtn = document.getElementById('historyBtn');
  const historyBadge = document.getElementById('historyBadge');
  const historyModal = document.getElementById('historyModal');
  const closeHistoryBtn = document.getElementById('closeHistoryBtn');
  const clearHistoryBtn = document.getElementById('clearHistoryBtn');
  const historyList = document.getElementById('historyList');
  const historyEmpty = document.getElementById('historyEmpty');
  const toastContainer = document.getElementById('toastContainer');

  // --- Real-time Date/Time Formatting ---
  function updateInspectionTimestamp() {
    const now = new Date();
    currentDateDisplay.textContent = now.toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }) + ' • ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  updateInspectionTimestamp();
  setInterval(updateInspectionTimestamp, 60000);

  // --- Toast System ---
  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerHTML = `<i data-lucide="check-circle-2"></i> <span>${message}</span>`;
    toastContainer.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(20px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // --- Workspace View Mode Switcher (Diagnosis vs Weather Details vs Forecasting vs History) ---
  const modeBtnDiagnosis = document.getElementById('modeBtnDiagnosis');
  const modeBtnWeatherDetails = document.getElementById('modeBtnWeatherDetails');
  const modeBtnWeatherForecast = document.getElementById('modeBtnWeatherForecast');
  const modeBtnWeatherHistory = document.getElementById('modeBtnWeatherHistory');

  const viewDiagnosis = document.getElementById('viewDiagnosis');
  const viewWeatherDetails = document.getElementById('viewWeatherDetails');
  const viewWeatherForecast = document.getElementById('viewWeatherForecast');
  const viewWeatherHistory = document.getElementById('viewWeatherHistory');

  const headerWeatherPill = document.getElementById('headerWeatherPill');
  const standbyViewWeatherBtn = document.getElementById('standbyViewWeatherBtn');
  const btnBackToDiagnosis = document.getElementById('btnBackToDiagnosis');
  const btnGoToForecast = document.getElementById('btnGoToForecast');
  const btnGoToHistory = document.getElementById('btnGoToHistory');
  const mainRefreshGpsBtn = document.getElementById('mainRefreshGpsBtn');

  function switchWorkstationMode(targetMode) {
    const modes = [
      { id: 'diagnosis', btn: modeBtnDiagnosis, view: viewDiagnosis },
      { id: 'weather-details', btn: modeBtnWeatherDetails, view: viewWeatherDetails },
      { id: 'weather-forecast', btn: modeBtnWeatherForecast, view: viewWeatherForecast },
      { id: 'weather-history', btn: modeBtnWeatherHistory, view: viewWeatherHistory }
    ];

    modes.forEach(m => {
      const isTarget = m.id === targetMode;
      if (m.view) {
        if (isTarget) {
          m.view.classList.remove('hidden');
        } else {
          m.view.classList.add('hidden');
        }
      }
      if (m.btn) {
        if (isTarget) {
          m.btn.classList.add('active');
          m.btn.setAttribute('aria-selected', 'true');
        } else {
          m.btn.classList.remove('active');
          m.btn.setAttribute('aria-selected', 'false');
        }
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.lucide) window.lucide.createIcons();
  }

  if (modeBtnDiagnosis) {
    modeBtnDiagnosis.addEventListener('click', () => switchWorkstationMode('diagnosis'));
  }
  if (modeBtnWeatherDetails) {
    modeBtnWeatherDetails.addEventListener('click', () => switchWorkstationMode('weather-details'));
  }
  if (modeBtnWeatherForecast) {
    modeBtnWeatherForecast.addEventListener('click', () => switchWorkstationMode('weather-forecast'));
  }
  if (modeBtnWeatherHistory) {
    modeBtnWeatherHistory.addEventListener('click', () => switchWorkstationMode('weather-history'));
  }
  if (headerWeatherPill) {
    headerWeatherPill.addEventListener('click', () => switchWorkstationMode('weather-details'));
  }
  if (standbyViewWeatherBtn) {
    standbyViewWeatherBtn.addEventListener('click', () => switchWorkstationMode('weather-details'));
  }
  if (btnBackToDiagnosis) {
    btnBackToDiagnosis.addEventListener('click', () => switchWorkstationMode('diagnosis'));
  }
  if (btnGoToForecast) {
    btnGoToForecast.addEventListener('click', () => switchWorkstationMode('weather-forecast'));
  }
  if (btnGoToHistory) {
    btnGoToHistory.addEventListener('click', () => switchWorkstationMode('weather-history'));
  }

  // --- Live Multi-Language UI Translation Engine ---
  function applyLanguage(langName) {
    state.currentLanguage = langName;
    const dict = I18N[langName] || I18N.English;

    // Translate all static elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(elem => {
      const key = elem.getAttribute('data-i18n');
      if (dict[key]) {
        elem.textContent = dict[key];
      }
    });

    // If an active diagnosis report is currently displayed, translate the diagnostic payload in real-time!
    if (state.currentDiagnosisData && !resultsState.classList.contains('hidden')) {
      translateActiveDiagnosis(langName);
    }
  }

  async function translateActiveDiagnosis(langName) {
    if (!state.currentDiagnosisData) return;

    showToast(`Updating diagnostic report to ${langName}...`);

    try {
      const res = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          diagnosticData: state.currentDiagnosisData,
          targetLanguage: langName
        })
      });

      if (res.ok) {
        const translatedData = await res.json();
        state.currentDiagnosisData = translatedData;
        renderDiagnosticResults(translatedData);
      }
    } catch (err) {
      console.warn('Translation fetch failed:', err);
    }
  }

  languageSelect.addEventListener('change', (e) => {
    applyLanguage(e.target.value);
  });

  // --- Dark Mode / Light Mode Theme Engine ---
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const themeText = document.getElementById('themeText');

  function initTheme() {
    const savedTheme = localStorage.getItem('agropath_theme') || 'light';
    applyTheme(savedTheme, false);
  }

  function applyTheme(theme, notify = true) {
    const favicon = document.getElementById('appFavicon') || document.querySelector("link[rel*='icon']");
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      if (themeText) themeText.textContent = 'Light';
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
        themeToggleBtn.innerHTML = '<i data-lucide="sun"></i> <span>Light</span>';
      }
      if (favicon) {
        favicon.href = 'favicon.png?v=' + Date.now();
      }
      localStorage.setItem('agropath_theme', 'dark');
      if (notify) showToast('Dark Mode Activated');
    } else {
      document.body.classList.remove('dark-mode');
      if (themeText) themeText.textContent = 'Dark';
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
        themeToggleBtn.innerHTML = '<i data-lucide="moon"></i> <span>Dark</span>';
      }
      if (favicon) {
        favicon.href = 'favicon.png?v=' + Date.now();
      }
      localStorage.setItem('agropath_theme', 'light');
      if (notify) showToast('Light Mode Activated');
    }
    if (window.lucide) window.lucide.createIcons();
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.body.classList.contains('dark-mode');
      applyTheme(isDark ? 'light' : 'dark', true);
    });
  }

  initTheme();

  // --- Specimen Upload & Drag-and-Drop ---
  browseBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    fileInput.click();
  });

  dropzone.addEventListener('click', (e) => {
    if (previewContainer.classList.contains('hidden') && e.target !== cameraBtn) {
      fileInput.click();
    }
  });

  dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.classList.add('drag-over');
  });

  ['dragleave', 'dragend'].forEach(evt => {
    dropzone.addEventListener(evt, () => dropzone.classList.remove('drag-over'));
  });

  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.classList.remove('drag-over');
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleSelectedSpecimen(e.dataTransfer.files[0]);
    }
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      handleSelectedSpecimen(e.target.files[0]);
    }
  });

  function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }

  function handleSelectedSpecimen(file) {
    if (!file.type.match(/image\/(jpeg|png|webp)/i)) {
      showToast('Please upload a valid foliage photo (JPG, PNG, WEBP).');
      return;
    }

    state.currentFileName = file.name;
    state.currentFileSize = formatBytes(file.size);
    state.currentMimeType = file.type;
    state.currentSampleId = null;

    const reader = new FileReader();
    reader.onload = (e) => {
      mountSpecimen(e.target.result, file.name, formatBytes(file.size));
    };
    reader.readAsDataURL(file);
  }

  function mountSpecimen(dataUrl, name, size) {
    state.currentImageBase64 = dataUrl;
    imagePreview.src = dataUrl;
    imageFileName.textContent = name || 'specimen_foliage.jpg';
    imageFileSize.textContent = size || '';

    dropzoneContent.classList.add('hidden');
    previewContainer.classList.remove('hidden');
    analyzeBtn.disabled = false;
    const dict = I18N[state.currentLanguage] || I18N.English;
    analyzeBtnText.textContent = dict.btnRunAnalysis;

    stopSpeech();
  }

  resetImageBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    unmountSpecimen();
  });

  function unmountSpecimen() {
    state.currentImageBase64 = null;
    state.currentSampleId = null;
    fileInput.value = '';
    imagePreview.src = '';
    previewContainer.classList.add('hidden');
    dropzoneContent.classList.remove('hidden');
    scanLaser.classList.add('hidden');
    analyzeBtn.disabled = true;
    stopSpeech();
  }

  // --- Reference Specimens Gallery (1-Click Test) ---
  document.querySelectorAll('.specimen-card').forEach(card => {
    card.addEventListener('click', async () => {
      const sampleId = card.getAttribute('data-sample');
      const imgElem = card.querySelector('img');
      const host = card.querySelector('.specimen-host').textContent;
      const cond = card.querySelector('.specimen-cond').textContent;

      state.currentSampleId = sampleId;
      if (cropHintInput) {
        let matched = false;
        for (let i = 0; i < cropHintInput.options.length; i++) {
          const val = cropHintInput.options[i].value;
          if (val && (val === host || host.includes(val) || val.includes(host))) {
            cropHintInput.selectedIndex = i;
            matched = true;
            break;
          }
        }
        if (!matched) cropHintInput.value = host;
      }

      try {
        const response = await fetch(imgElem.src);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onloadend = () => {
          mountSpecimen(reader.result, `${sampleId}.jpg`, formatBytes(blob.size));
          showToast(`Specimen Mounted: ${host} - ${cond}`);
        };
        reader.readAsDataURL(blob);
      } catch (err) {
        console.error('Error loading reference sample:', err);
      }
    });
  });

  // --- Field Camera Capture Modal ---
  cameraBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    openCameraModal();
  });

  closeCameraBtn.addEventListener('click', closeCameraModal);

  async function openCameraModal() {
    cameraModal.style.display = 'flex';
    cameraModal.classList.remove('hidden');
    await startCameraStream();
  }

  async function startCameraStream() {
    if (state.cameraStream) {
      state.cameraStream.getTracks().forEach(track => track.stop());
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: state.currentFacingMode },
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false
      });
      state.cameraStream = stream;
      webcamVideo.srcObject = stream;
    } catch (err) {
      console.warn('Camera error:', err);
      showToast('Camera access denied or unavailable.');
      closeCameraModal();
    }
  }

  switchCameraBtn.addEventListener('click', async () => {
    state.currentFacingMode = state.currentFacingMode === 'environment' ? 'user' : 'environment';
    await startCameraStream();
  });

  snapPhotoBtn.addEventListener('click', () => {
    if (!state.cameraStream) return;

    cameraCanvas.width = webcamVideo.videoWidth || 640;
    cameraCanvas.height = webcamVideo.videoHeight || 480;
    const ctx = cameraCanvas.getContext('2d');
    ctx.drawImage(webcamVideo, 0, 0, cameraCanvas.width, cameraCanvas.height);

    const capturedDataUrl = cameraCanvas.toDataURL('image/jpeg', 0.92);
    mountSpecimen(capturedDataUrl, `field_specimen_${Date.now()}.jpg`, 'Field Capture');
    closeCameraModal();
    showToast('Foliage specimen captured successfully.');
  });

  function closeCameraModal() {
    if (state.cameraStream) {
      state.cameraStream.getTracks().forEach(track => track.stop());
      state.cameraStream = null;
    }
    cameraModal.style.display = 'none';
    cameraModal.classList.add('hidden');
  }

  // --- Advisory Tabs Navigation ---
  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-view').forEach(v => v.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      const targetView = document.getElementById(targetId);
      if (targetView) {
        targetView.classList.add('active');
      }
    });
  });

  // --- Diagnostic Execution ---
  analyzeBtn.addEventListener('click', runDiagnostic);

  async function runDiagnostic() {
    if (!state.currentImageBase64) {
      showToast('Please mount a specimen image first.');
      return;
    }

    stopSpeech();

    // UI State Transition
    idleState.classList.add('hidden');
    resultsState.classList.add('hidden');
    loadingState.classList.remove('hidden');
    scanLaser.classList.remove('hidden');
    analyzeBtn.disabled = true;
    analyzeBtnText.textContent = 'Processing Biometrics...';

    updateStep(1);
    analysisProgressBar.style.width = '20%';

    const pTimer1 = setTimeout(() => {
      updateStep(2);
      analysisProgressBar.style.width = '60%';
      loadingStepText.textContent = 'Cross-referencing agronomic pathology indices...';
    }, 800);

    const pTimer2 = setTimeout(() => {
      updateStep(3);
      analysisProgressBar.style.width = '88%';
      loadingStepText.textContent = 'Formulating certified bio-organic and chemical protocols...';
    }, 1800);

    const selectedLanguage = languageSelect.value;
    const cropHint = cropHintInput.value.trim();

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imageBase64: state.currentImageBase64,
          mimeType: state.currentMimeType,
          clientApiKey: state.clientApiKey,
          language: selectedLanguage,
          cropHint: cropHint,
          sampleId: state.currentSampleId
        })
      });

      clearTimeout(pTimer1);
      clearTimeout(pTimer2);
      analysisProgressBar.style.width = '100%';

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Server error during pathological analysis.');
      }

      state.currentDiagnosisData = data;
      archiveReport(data, state.currentImageBase64);

      setTimeout(() => {
        renderDiagnosticResults(data);
        loadingState.classList.add('hidden');
        scanLaser.classList.add('hidden');
        resultsState.classList.remove('hidden');
        analyzeBtn.disabled = false;
        analyzeBtnText.textContent = 'Re-Run Diagnostic';
        showToast(`Diagnostic verified: ${data.disease}`);
      }, 450);

    } catch (err) {
      console.error('Diagnosis failed:', err);
      clearTimeout(pTimer1);
      clearTimeout(pTimer2);
      loadingState.classList.add('hidden');
      scanLaser.classList.add('hidden');
      idleState.classList.remove('hidden');
      analyzeBtn.disabled = false;
      analyzeBtnText.textContent = 'Run Pathological Diagnostic';
      showToast(`Diagnostic failed: ${err.message}`);
    }
  }

  function updateStep(stepIndex) {
    document.querySelectorAll('.workflow-step').forEach((step, idx) => {
      if (idx + 1 === stepIndex) {
        step.className = 'workflow-step active';
      } else if (idx + 1 < stepIndex) {
        step.className = 'workflow-step done';
      } else {
        step.className = 'workflow-step';
      }
    });
  }

  // --- Render Diagnostic Results ---
  function renderDiagnosticResults(data) {
    resCropName.textContent = `${data.crop || 'Crop Foliage'} (${data.cropScientificName || ''})`;
    resDiseaseName.textContent = data.disease || 'Detected Pathology';
    resPathogenName.innerHTML = `<i data-lucide="microscope"></i> <span>${data.pathogen || 'Undetermined'} &bull; ${data.pathogenTaxonomy || 'Fungal Vector'}</span>`;

    // Severity Pill (if present)
    const sev = (data.severity || 'Moderate').toLowerCase();
    if (resSeverityText) resSeverityText.textContent = data.severity || 'Moderate';
    if (resSeverityPill) resSeverityPill.className = `meter-status-pill ${sev.includes('severe') || sev.includes('crit') ? 'severe' : sev.includes('low') || sev.includes('none') ? 'low' : 'moderate'}`;

    // Gauges & Metrics
    resConfidenceVal.textContent = `${data.confidence || 96}%`;
    resCategory.textContent = data.category || 'Pathological';
    resAffectedArea.textContent = `~${data.affectedAreaPercentage || 35}% of foliage`;
    resMoisture.textContent = data.leafMoistureStatus || 'Elevated (>80% RH)';
    resPrognosis.textContent = data.prognosis ? (data.prognosis.length > 32 ? data.prognosis.substring(0, 32) + '...' : data.prognosis) : 'Prompt intervention required';
    resPrognosis.title = data.prognosis || '';

    // Summary
    resSummary.textContent = data.summary || 'Pathological biometric analysis indicates symptomatic necrosis on leaf tissue.';

    // Symptoms List
    resSymptomsList.innerHTML = '';
    (data.keySymptoms || ['Necrotic lesions on older foliage', 'Chlorotic margin']).forEach(sym => {
      const li = document.createElement('li');
      li.textContent = sym;
      resSymptomsList.appendChild(li);
    });

    // Immediate Isolation Protocol
    resImmediateList.innerHTML = '';
    (data.immediateActions || ['Prune infected leaves immediately.', 'Transition to drip irrigation.']).forEach((act, idx) => {
      const li = document.createElement('li');
      li.innerHTML = `<span class="protocol-num">${idx + 1}</span> <span>${act}</span>`;
      resImmediateList.appendChild(li);
    });

    // Bio-Organic Remedies
    resOrganicGrid.innerHTML = '';
    (data.organicRemedies || []).forEach(rem => {
      const card = document.createElement('div');
      card.className = 'remedy-card';
      card.innerHTML = `
        <div class="remedy-header">
          <span class="remedy-title">${rem.title || 'Organic Protocol'}</span>
          <span class="taxa-tag fungal">Bio-Certified</span>
        </div>
        <div class="remedy-body"><strong>Preparation:</strong> ${rem.recipe || 'Standard formulation.'}</div>
        <div class="remedy-timing"><i data-lucide="clock"></i> <strong>Schedule:</strong> ${rem.frequency || 'Weekly'}</div>
      `;
      resOrganicGrid.appendChild(card);
    });

    // Chemical Solutions
    resChemicalGrid.innerHTML = '';
    (data.chemicalTreatments || []).forEach(chem => {
      const card = document.createElement('div');
      card.className = 'chemical-card';
      card.innerHTML = `
        <div class="chemical-header">
          <span class="chemical-title">${chem.product || 'Agricultural Fungicide'}</span>
          <span class="cert-pill">${chem.activeIngredient || 'Active Agent'}</span>
        </div>
        <div class="chemical-body"><strong>Application Dosage:</strong> ${chem.dosage || '2.0 g/L'}</div>
        <div class="chemical-safety"><i data-lucide="shield-alert"></i> <strong>Stewardship & PHI:</strong> ${chem.safetyPrecaution || 'Wear standard PPE.'}</div>
      `;
      resChemicalGrid.appendChild(card);
    });

    // Prevention & Climate Risks
    resPreventionList.innerHTML = '';
    (data.preventiveMeasures || ['Practice 3-year crop rotation', 'Ensure optimal canopy spacing']).forEach(prev => {
      const li = document.createElement('li');
      li.textContent = prev;
      resPreventionList.appendChild(li);
    });

    if (data.environmentalRisks) {
      resFavorableHumidity.textContent = data.environmentalRisks.favorableHumidity || '> 80% RH';
      resFavorableTemp.textContent = data.environmentalRisks.favorableTemperature || '24°C - 29°C';
      resWeatherWarning.textContent = data.environmentalRisks.weatherWarning || 'Extended leaf wetness promotes rapid spore penetration.';
    }

    // Default to Overview tab
    document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-view').forEach(v => v.classList.remove('active'));
    document.querySelector('.tab-button[data-tab="tab-overview"]').classList.add('active');
    document.getElementById('tab-overview').classList.add('active');

    if (window.lucide) window.lucide.createIcons();
  }

  // --- Voice Readout (TTS) with Native Language Matching ---
  ttsPlayBtn.addEventListener('click', toggleAudioSpeech);

  function toggleAudioSpeech() {
    if (!state.currentDiagnosisData) return;
    if (state.isSpeaking) {
      stopSpeech();
    } else {
      startSpeech();
    }
  }

  function startSpeech() {
    if (!('speechSynthesis' in window)) {
      showToast('Voice readout not supported on this browser.');
      return;
    }

    const data = state.currentDiagnosisData;
    const selectedLang = languageSelect.value;

    let text = `Diagnostic report for ${data.crop}: ${data.disease}. Severity is ${data.severity}. ${data.summary}. Immediate isolation step: ${data.immediateActions?.[0] || ''}.`;
    if (data.organicRemedies?.[0]) {
      text += ` Recommended bio-organic treatment: ${data.organicRemedies[0].title}. ${data.organicRemedies[0].recipe}.`;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;

    // Language Detection
    if (selectedLang.includes('Hindi') || selectedLang.includes('हिन्दी')) {
      utterance.lang = 'hi-IN';
    } else if (selectedLang.includes('Marathi') || selectedLang.includes('मराठी')) {
      utterance.lang = 'mr-IN';
    } else if (selectedLang.includes('Spanish') || selectedLang.includes('Español')) {
      utterance.lang = 'es-ES';
    } else if (selectedLang.includes('French') || selectedLang.includes('Français')) {
      utterance.lang = 'fr-FR';
    } else if (selectedLang.includes('Punjabi') || selectedLang.includes('ਪੰਜਾਬੀ')) {
      utterance.lang = 'pa-IN';
    } else {
      utterance.lang = 'en-US';
    }

    utterance.onstart = () => {
      state.isSpeaking = true;
      ttsBtnText.textContent = 'Pause Readout';
      ttsPlayBtn.classList.add('btn-primary');
      ttsPlayBtn.classList.remove('btn-outline-clean');
    };

    utterance.onend = stopSpeech;
    utterance.onerror = stopSpeech;

    state.speechUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  }

  function stopSpeech() {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    state.isSpeaking = false;
    const dict = I18N[state.currentLanguage] || I18N.English;
    ttsBtnText.textContent = dict.btnListenAdvisory;
    ttsPlayBtn.classList.remove('btn-primary');
    ttsPlayBtn.classList.add('btn-outline-clean');
  }

  // --- Export Certified Field PDF ---
  exportReportBtn.addEventListener('click', () => {
    if (!state.currentDiagnosisData) return;
    window.print();
  });

  // --- Copy Protocol Summary ---
  shareReportBtn.addEventListener('click', async () => {
    if (!state.currentDiagnosisData) return;
    const d = state.currentDiagnosisData;
    const summaryText = `AgroPath™ Precision Pathology Report
Specimen: ${d.crop} (${d.cropScientificName || ''})
Pathology: ${d.disease} &bull; ${d.pathogen || ''}
Severity: ${d.severity} (Match Index: ${d.confidence}%)
Summary: ${d.summary}
Immediate Containment: ${d.immediateActions?.[0] || 'Sanitize affected leaves'}
Organic Formulation: ${d.organicRemedies?.[0]?.title || 'Neem oil formulation'}`;

    try {
      await navigator.clipboard.writeText(summaryText);
      showToast('Pathology protocol copied to clipboard.');
    } catch {
      showToast('Clipboard access failed.');
    }
  });

  // --- Archive & History ---
  function archiveReport(diagnosis, imageBase64) {
    const item = {
      id: Date.now(),
      crop: diagnosis.crop,
      disease: diagnosis.disease,
      severity: diagnosis.severity,
      confidence: diagnosis.confidence,
      thumbnail: imageBase64,
      timestamp: new Date().toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      fullData: diagnosis
    };

    state.history.unshift(item);
    if (state.history.length > 12) state.history.pop();

    try {
      localStorage.setItem('agropath_history', JSON.stringify(state.history.slice(0, 8)));
    } catch (e) {
      console.warn('Storage limit for history thumbnail', e);
    }
    updateHistoryBadge();
  }

  function updateHistoryBadge() {
    if (state.history.length > 0) {
      historyBadge.textContent = state.history.length;
      historyBadge.classList.remove('hidden');
    } else {
      historyBadge.classList.add('hidden');
    }
  }

  historyBtn.addEventListener('click', () => {
    renderHistoryModal();
    historyModal.style.display = 'flex';
    historyModal.classList.remove('hidden');
  });

  // Universal Modal Dismissal Handlers (Overlay click & Escape key)
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.style.display = 'none';
        overlay.classList.add('hidden');
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
      document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.style.display = 'none';
        modal.classList.add('hidden');
      });
    }
  });

  if (closeHistoryBtn) {
    closeHistoryBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      historyModal.style.display = 'none';
      historyModal.classList.add('hidden');
    });
  }

  if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener('click', () => {
      state.history = [];
      localStorage.removeItem('agropath_history');
      updateHistoryBadge();
      renderHistoryModal();
      showToast('Archive records cleared.');
    });
  }

  function renderHistoryModal() {
    if (state.history.length === 0) {
      historyEmpty.classList.remove('hidden');
      historyList.classList.add('hidden');
      return;
    }

    historyEmpty.classList.add('hidden');
    historyList.classList.remove('hidden');
    historyList.innerHTML = '';

    state.history.forEach(item => {
      const card = document.createElement('div');
      card.className = 'archive-card';
      card.innerHTML = `
        <img src="${item.thumbnail}" alt="${item.crop}" class="archive-thumb">
        <div class="archive-meta">
          <div class="archive-title">${item.crop}: ${item.disease}</div>
          <div class="archive-sub">${item.timestamp} &bull; ${item.confidence}% Match Index</div>
        </div>
        <span class="meter-status-pill ${item.severity?.toLowerCase() || 'moderate'}">${item.severity || 'Moderate'}</span>
      `;

      card.addEventListener('click', () => {
        mountSpecimen(item.thumbnail, `${item.crop}_record.jpg`, '');
        state.currentDiagnosisData = item.fullData;
        renderDiagnosticResults(item.fullData);
        idleState.classList.add('hidden');
        loadingState.classList.add('hidden');
        resultsState.classList.remove('hidden');
        historyModal.classList.add('hidden');
        showToast(`Loaded ${item.disease} record.`);
      });

      historyList.appendChild(card);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  // --- Configuration Modal (if present) ---
  if (settingsBtn) {
    settingsBtn.addEventListener('click', () => {
      apiKeyInput.value = state.clientApiKey;
      apiTestStatus.classList.add('hidden');
      settingsModal.style.display = 'flex';
      settingsModal.classList.remove('hidden');
    });
  }

  closeSettingsBtn.addEventListener('click', () => {
    settingsModal.style.display = 'none';
    settingsModal.classList.add('hidden');
  });

  toggleKeyVisibilityBtn.addEventListener('click', () => {
    if (apiKeyInput.type === 'password') {
      apiKeyInput.type = 'text';
      toggleKeyVisibilityBtn.innerHTML = '<i data-lucide="eye-off"></i>';
    } else {
      apiKeyInput.type = 'password';
      toggleKeyVisibilityBtn.innerHTML = '<i data-lucide="eye"></i>';
    }
    if (window.lucide) window.lucide.createIcons();
  });

  testKeyBtn.addEventListener('click', async () => {
    const key = apiKeyInput.value.trim();
    if (!key) {
      showToast('Please enter a key to test.');
      return;
    }

    testKeyBtn.disabled = true;
    testKeyBtn.innerHTML = '<i data-lucide="loader-2"></i> Verifying...';
    if (window.lucide) window.lucide.createIcons();

    try {
      const res = await fetch('/api/test-key', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ apiKey: key })
      });
      const data = await res.json();
      apiTestStatus.classList.remove('hidden');

      if (data.success) {
        apiTestStatus.className = 'status-callout success';
        apiTestStatus.textContent = data.message || 'Diagnostic Engine Connected.';
        showToast('Engine credentials verified.');
      } else {
        apiTestStatus.className = 'status-callout error';
        apiTestStatus.textContent = `Error: ${data.error}`;
      }
    } catch (err) {
      apiTestStatus.classList.remove('hidden');
      apiTestStatus.className = 'status-callout error';
      apiTestStatus.textContent = `Connection failed: ${err.message}`;
    } finally {
      testKeyBtn.disabled = false;
      testKeyBtn.innerHTML = '<i data-lucide="check-circle-2"></i> Test Connection';
      if (window.lucide) window.lucide.createIcons();
    }
  });

  saveKeyBtn.addEventListener('click', () => {
    const key = apiKeyInput.value.trim();
    state.clientApiKey = key;
    if (key) {
      localStorage.setItem('agropath_api_key', key);
      showToast('Configuration saved.');
    } else {
      localStorage.removeItem('agropath_api_key');
      showToast('Configuration cleared.');
    }
    settingsModal.classList.add('hidden');
  });

  clearKeyBtn.addEventListener('click', () => {
    apiKeyInput.value = '';
    state.clientApiKey = '';
    localStorage.removeItem('agropath_api_key');
    apiTestStatus.classList.add('hidden');
    showToast('Configuration reset.');
  });

  // --- Live GPS Field Weather Controller ---
  async function initGpsWeather() {
    const refreshBtn = document.getElementById('refreshGpsBtn');
    if (refreshBtn) refreshBtn.classList.add('loading');

    const setStatus = (msg) => {
      const headerText = document.getElementById('headerWeatherText');
      if (headerText) headerText.textContent = msg;
      const loc = document.getElementById('weatherLocationName');
      if (loc) loc.textContent = msg;
      const standbyLoc = document.getElementById('standbyLocationText');
      if (standbyLoc) standbyLoc.textContent = msg;
    };

    setStatus('Detecting field GPS...');

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          await loadWeatherData(lat, lon, 'GPS');
        },
        async (error) => {
          console.warn('Geolocation denied or failed, falling back to IP geo:', error.message);
          await loadFallbackIpWeather();
        },
        { timeout: 8000, enableHighAccuracy: true }
      );
    } else {
      await loadFallbackIpWeather();
    }
  }

  async function loadFallbackIpWeather() {
    try {
      const ipRes = await fetch('https://get.geojs.io/v1/ip/geo.json');
      const ipData = await ipRes.json();
      const lat = parseFloat(ipData.latitude);
      const lon = parseFloat(ipData.longitude);
      const locName = `${ipData.city || 'Local Farm'}, ${ipData.region || ipData.country_code}`;
      await loadWeatherData(lat, lon, locName);
    } catch (e) {
      await loadWeatherData(19.076, 72.877, 'Local Agricultural Station');
    }
  }

  async function loadWeatherData(lat, lon, customName) {
    try {
      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat.toFixed(4)}&longitude=${lon.toFixed(4)}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation,weather_code&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,wind_speed_10m_max&past_days=7&forecast_days=7&timezone=auto`;
      const res = await fetch(weatherUrl);
      const data = await res.json();
      const cur = data.current;

      let resolvedCity = customName;
      if (customName === 'GPS') {
        try {
          const geoRes = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
          const geoData = await geoRes.json();
          resolvedCity = `${geoData.locality || geoData.city || 'Field Zone'}, ${geoData.principalSubdivision || ''}`;
        } catch {
          resolvedCity = `Lat ${lat.toFixed(2)}°, Lon ${lon.toFixed(2)}°`;
        }
      }

      // Today is index 7 in daily array because of past_days=7
      const todayIdx = data.daily?.time && data.daily.time.length > 7 ? 7 : 0;
      const rainProbToday = data.daily?.precipitation_probability_max?.[todayIdx] || 0;
      const minTempToday = Math.round(data.daily?.temperature_2m_min?.[todayIdx] ?? (cur.temperature_2m - 4));
      const maxTempToday = Math.round(data.daily?.temperature_2m_max?.[todayIdx] ?? (cur.temperature_2m + 5));

      // Update Header Sensor Pill
      const headerText = document.getElementById('headerWeatherText');
      if (headerText) {
        headerText.textContent = `${resolvedCity} • ${Math.round(cur.temperature_2m)}°C / ${Math.round(cur.relative_humidity_2m)}% RH`;
      }

      // Update Standby Weather Widget
      const standbyLoc = document.getElementById('standbyLocationText');
      if (standbyLoc) standbyLoc.textContent = resolvedCity;
      const standbyTemp = document.getElementById('standbyTemp');
      if (standbyTemp) standbyTemp.textContent = `${Math.round(cur.temperature_2m)}°C`;
      const standbyHumidity = document.getElementById('standbyHumidity');
      if (standbyHumidity) standbyHumidity.textContent = `${Math.round(cur.relative_humidity_2m)}%`;
      const standbyWind = document.getElementById('standbyWind');
      if (standbyWind) standbyWind.textContent = `${cur.wind_speed_10m} km/h`;
      const standbyRain = document.getElementById('standbyRain');
      if (standbyRain) standbyRain.textContent = `${rainProbToday}%`;

      const isRainLikely = rainProbToday > 40 || cur.precipitation > 0.5;
      const isHighWind = cur.wind_speed_10m > 18;
      const isExtremeWind = cur.wind_speed_10m > 25;

      const standbyBadge = document.getElementById('standbySprayBadge');
      if (standbyBadge) {
        if (isExtremeWind || isRainLikely) {
          standbyBadge.className = 'spray-badge warn';
          standbyBadge.textContent = 'Spray Warning: Drift/Rain Risk';
        } else if (isHighWind) {
          standbyBadge.className = 'spray-badge warn';
          standbyBadge.textContent = 'Spray Caution: Moderate Wind';
        } else {
          standbyBadge.className = 'spray-badge safe';
          standbyBadge.textContent = 'Optimal Spray Window';
        }
      }

      // Update Weather Tab Elements inside Details
      const weatherLoc = document.getElementById('weatherLocationName');
      if (weatherLoc) weatherLoc.textContent = resolvedCity;
      const weatherCoords = document.getElementById('weatherCoordinates');
      if (weatherCoords) weatherCoords.textContent = `GPS: ${lat.toFixed(4)}° N, ${lon.toFixed(4)}° E • Elev: Auto`;

      const weatherCurrentTemp = document.getElementById('weatherCurrentTemp');
      if (weatherCurrentTemp) weatherCurrentTemp.textContent = Math.round(cur.temperature_2m);
      const weatherConditionText = document.getElementById('weatherConditionText');
      if (weatherConditionText) weatherConditionText.textContent = getWeatherDesc(cur.weather_code);

      const weatherHumidity = document.getElementById('weatherHumidity');
      if (weatherHumidity) weatherHumidity.textContent = `${Math.round(cur.relative_humidity_2m)}%`;
      const weatherHumidityStatus = document.getElementById('weatherHumidityStatus');
      if (weatherHumidityStatus) {
        weatherHumidityStatus.textContent = cur.relative_humidity_2m > 80 ? 'Elevated Spore Risk' : cur.relative_humidity_2m < 50 ? 'Dry Air / Low Fungal Risk' : 'Optimal Field Humidity';
      }

      const weatherWindSpeed = document.getElementById('weatherWindSpeed');
      if (weatherWindSpeed) weatherWindSpeed.textContent = `${cur.wind_speed_10m} km/h`;
      const weatherWindStatus = document.getElementById('weatherWindStatus');
      if (weatherWindStatus) {
        weatherWindStatus.textContent = isExtremeWind ? 'High Drift Hazard' : isHighWind ? 'Moderate Drift Risk' : 'Minimal Spray Drift';
      }

      const weatherRainChance = document.getElementById('weatherRainChance');
      if (weatherRainChance) weatherRainChance.textContent = `${rainProbToday}%`;
      const weatherRainStatus = document.getElementById('weatherRainStatus');
      if (weatherRainStatus) {
        weatherRainStatus.textContent = isRainLikely ? 'Rain Expected (Wash-off Risk)' : 'No Rain in Forecast';
      }

      // Spray Advisory Card & Main Hero Banner
      const sprayCard = document.getElementById('sprayAdvisoryCard');
      const sprayTitle = document.getElementById('sprayStatusTitle');
      const sprayDesc = document.getElementById('sprayStatusDesc');

      const mainHero = document.getElementById('mainSprayHero');
      const mainHeroIcon = document.getElementById('mainSprayHeroIcon');
      const mainHeroPill = document.getElementById('mainSprayHeroPill');
      const mainHeroTitle = document.getElementById('mainSprayHeroTitle');
      const mainHeroDesc = document.getElementById('mainSprayHeroDesc');
      const mainDriftChip = document.getElementById('mainDriftChip');
      const mainWashoffChip = document.getElementById('mainWashoffChip');
      const mainNozzleChip = document.getElementById('mainNozzleChip');

      if (isExtremeWind || isRainLikely) {
        if (sprayCard) sprayCard.className = 'spray-advisory-card danger';
        if (sprayTitle) sprayTitle.textContent = 'Adverse Spraying Conditions (Postpone Application)';
        if (sprayDesc) sprayDesc.textContent = `Rain probability is ${rainProbToday}% and wind speed is ${cur.wind_speed_10m} km/h. Fungicide spray will wash off foliage or drift excessively into unintended borders.`;

        if (mainHero) mainHero.className = 'spray-window-hero danger';
        if (mainHeroIcon) mainHeroIcon.setAttribute('data-lucide', 'octagon-alert');
        if (mainHeroPill) {
          mainHeroPill.className = 'spray-hero-pill danger';
          mainHeroPill.textContent = 'DO NOT SPRAY — ADVERSE WEATHER';
        }
        if (mainHeroTitle) mainHeroTitle.textContent = 'Chemical Wash-Off & High Drift Hazard Warning';
        if (mainHeroDesc) mainHeroDesc.textContent = `Precipitation probability is ${rainProbToday}% with wind velocity of ${cur.wind_speed_10m} km/h. Applications made now will wash off or drift severely onto non-target crops. Postpone spraying.`;
        if (mainDriftChip) mainDriftChip.textContent = `${cur.wind_speed_10m} km/h (High Drift Hazard)`;
        if (mainWashoffChip) mainWashoffChip.textContent = `${rainProbToday}% Rain Risk`;
        if (mainNozzleChip) mainNozzleChip.textContent = 'Postpone Application';
      } else if (isHighWind) {
        if (sprayCard) sprayCard.className = 'spray-advisory-card caution';
        if (sprayTitle) sprayTitle.textContent = 'Moderate Spray Window (Use Coarse Droplets)';
        if (sprayDesc) sprayDesc.textContent = `Wind speed is ${cur.wind_speed_10m} km/h. Use air-induction low-drift nozzles and maintain lower boom height to protect against wind drift.`;

        if (mainHero) mainHero.className = 'spray-window-hero caution';
        if (mainHeroIcon) mainHeroIcon.setAttribute('data-lucide', 'alert-triangle');
        if (mainHeroPill) {
          mainHeroPill.className = 'spray-hero-pill caution';
          mainHeroPill.textContent = 'MODERATE SPRAY WINDOW (USE CAUTION)';
        }
        if (mainHeroTitle) mainHeroTitle.textContent = 'Moderate Spray Window — Use Low-Drift Nozzles';
        if (mainHeroDesc) mainHeroDesc.textContent = `Wind velocity is ${cur.wind_speed_10m} km/h. Use air-induction coarse droplet nozzles, reduce boom height, and avoid fine mist sprays to prevent border contamination.`;
        if (mainDriftChip) mainDriftChip.textContent = `${cur.wind_speed_10m} km/h (Moderate Drift Risk)`;
        if (mainWashoffChip) mainWashoffChip.textContent = `${rainProbToday}% Rain Risk (Low)`;
        if (mainNozzleChip) mainNozzleChip.textContent = 'Coarse / Air-Induction';
      } else {
        if (sprayCard) sprayCard.className = 'spray-advisory-card optimal';
        if (sprayTitle) sprayTitle.textContent = 'Optimal Chemical & Bio-Fungicide Spraying Window';
        if (sprayDesc) sprayDesc.textContent = `Calm wind velocity (${cur.wind_speed_10m} km/h) and zero imminent rainfall. Ideal conditions for contact coverage and systemic leaf uptake.`;

        if (mainHero) mainHero.className = 'spray-window-hero optimal';
        if (mainHeroIcon) mainHeroIcon.setAttribute('data-lucide', 'shield-check');
        if (mainHeroPill) {
          mainHeroPill.className = 'spray-hero-pill optimal';
          mainHeroPill.textContent = 'OPTIMAL SPRAY WINDOW';
        }
        if (mainHeroTitle) mainHeroTitle.textContent = 'Optimal Conditions for Foliar Spray & Crop Protection';
        if (mainHeroDesc) mainHeroDesc.textContent = `Calm wind speed (${cur.wind_speed_10m} km/h) and no rainfall forecasted within the 6-hour uptake period. Droplet drift is minimal, allowing systemic absorption and full leaf canopy penetration.`;
        if (mainDriftChip) mainDriftChip.textContent = `${cur.wind_speed_10m} km/h (Minimal Drift)`;
        if (mainWashoffChip) mainWashoffChip.textContent = `${rainProbToday}% Rain Risk`;
        if (mainNozzleChip) mainNozzleChip.textContent = 'Medium / Flat Fan';
      }

      // Populate Dedicated Weather Details Panel Elements
      const mainLoc = document.getElementById('mainWeatherLocationName');
      if (mainLoc) mainLoc.textContent = resolvedCity;
      const mainCoords = document.getElementById('mainWeatherCoordinates');
      if (mainCoords) mainCoords.textContent = `GPS: ${lat.toFixed(4)}° N, ${lon.toFixed(4)}° E • Open-Meteo Satellite Sync`;

      const mainCurTemp = document.getElementById('mainWeatherCurrentTemp');
      if (mainCurTemp) mainCurTemp.textContent = Math.round(cur.temperature_2m);
      const mainCond = document.getElementById('mainWeatherConditionText');
      if (mainCond) mainCond.textContent = getWeatherDesc(cur.weather_code);
      const mainTempRange = document.getElementById('mainWeatherTempRange');
      if (mainTempRange) mainTempRange.textContent = `${minTempToday}°C / ${maxTempToday}°C`;

      const mainHumidity = document.getElementById('mainWeatherHumidity');
      if (mainHumidity) mainHumidity.textContent = Math.round(cur.relative_humidity_2m);
      const mainHumidityStatus = document.getElementById('mainWeatherHumidityStatus');
      const mainHumidityRiskBadge = document.getElementById('mainHumidityRiskBadge');
      if (mainHumidityStatus && mainHumidityRiskBadge) {
        if (cur.relative_humidity_2m > 80) {
          mainHumidityStatus.textContent = 'High Leaf Wetness / Spore Germination Risk';
          mainHumidityRiskBadge.className = 'sensor-tag danger';
          mainHumidityRiskBadge.textContent = 'High Inoculum';
        } else if (cur.relative_humidity_2m > 65) {
          mainHumidityStatus.textContent = 'Moderate Canopy Moisture Level';
          mainHumidityRiskBadge.className = 'sensor-tag warn';
          mainHumidityRiskBadge.textContent = 'Moderate Spores';
        } else {
          mainHumidityStatus.textContent = 'Dry Canopy / Low Fungal Spore Activity';
          mainHumidityRiskBadge.className = 'sensor-tag safe';
          mainHumidityRiskBadge.textContent = 'Low Inoculum';
        }
      }

      const mainWind = document.getElementById('mainWeatherWindSpeed');
      if (mainWind) mainWind.textContent = cur.wind_speed_10m;
      const mainWindStatus = document.getElementById('mainWeatherWindStatus');
      const mainWindDriftBadge = document.getElementById('mainWindDriftBadge');
      if (mainWindStatus && mainWindDriftBadge) {
        if (isExtremeWind) {
          mainWindStatus.textContent = 'Severe Drift Hazard (> 25 km/h)';
          mainWindDriftBadge.className = 'sensor-tag danger';
          mainWindDriftBadge.textContent = 'Severe Drift';
        } else if (isHighWind) {
          mainWindStatus.textContent = 'Moderate Drift Velocity (18-25 km/h)';
          mainWindDriftBadge.className = 'sensor-tag warn';
          mainWindDriftBadge.textContent = 'Moderate Drift';
        } else {
          mainWindStatus.textContent = 'Safe Spray Threshold (< 15 km/h)';
          mainWindDriftBadge.className = 'sensor-tag safe';
          mainWindDriftBadge.textContent = 'Negligible Drift';
        }
      }

      const mainRainChance = document.getElementById('mainWeatherRainChance');
      if (mainRainChance) mainRainChance.textContent = rainProbToday;
      const mainRainStatus = document.getElementById('mainWeatherRainStatus');
      const mainRainWashBadge = document.getElementById('mainRainWashBadge');
      if (mainRainStatus && mainRainWashBadge) {
        if (isRainLikely) {
          mainRainStatus.textContent = 'Rain Expected (Wash-off Risk)';
          mainRainWashBadge.className = 'sensor-tag danger';
          mainRainWashBadge.textContent = 'Wash-off Hazard';
        } else {
          mainRainStatus.textContent = 'No Precipitation in 24h Outlook';
          mainRainWashBadge.className = 'sensor-tag safe';
          mainRainWashBadge.textContent = 'Safe to Apply';
        }
      }

      // Pathogen Disease Microclimate Risk Gauges
      const t = cur.temperature_2m;
      const rh = cur.relative_humidity_2m;

      const blightBadge = document.getElementById('riskBadgeBlight');
      if (blightBadge) {
        if (t >= 20 && t <= 30 && rh >= 80) {
          blightBadge.className = 'risk-badge high';
          blightBadge.textContent = 'HIGH RISK';
        } else if (t >= 18 && t <= 32 && rh >= 65) {
          blightBadge.className = 'risk-badge mod';
          blightBadge.textContent = 'MODERATE';
        } else {
          blightBadge.className = 'risk-badge low';
          blightBadge.textContent = 'LOW RISK';
        }
      }

      const mildewBadge = document.getElementById('riskBadgeMildew');
      if (mildewBadge) {
        if (t >= 18 && t <= 28 && rh >= 50 && rh <= 85) {
          mildewBadge.className = 'risk-badge high';
          mildewBadge.textContent = 'HIGH RISK';
        } else if (t >= 15 && t <= 32) {
          mildewBadge.className = 'risk-badge mod';
          mildewBadge.textContent = 'MODERATE';
        } else {
          mildewBadge.className = 'risk-badge low';
          mildewBadge.textContent = 'LOW RISK';
        }
      }

      const rustBadge = document.getElementById('riskBadgeRust');
      if (rustBadge) {
        if (t >= 16 && t <= 25 && (rh >= 75 || isRainLikely)) {
          rustBadge.className = 'risk-badge high';
          rustBadge.textContent = 'HIGH RISK';
        } else if (t >= 14 && t <= 28) {
          rustBadge.className = 'risk-badge mod';
          rustBadge.textContent = 'MODERATE';
        } else {
          rustBadge.className = 'risk-badge low';
          rustBadge.textContent = 'LOW RISK';
        }
      }

      const bacteriaBadge = document.getElementById('riskBadgeBacteria');
      if (bacteriaBadge) {
        if (t >= 26 && (isRainLikely || rh >= 85)) {
          bacteriaBadge.className = 'risk-badge high';
          bacteriaBadge.textContent = 'HIGH RISK';
        } else if (t >= 24 && rh >= 70) {
          bacteriaBadge.className = 'risk-badge mod';
          bacteriaBadge.textContent = 'MODERATE';
        } else {
          bacteriaBadge.className = 'risk-badge low';
          bacteriaBadge.textContent = 'LOW RISK';
        }
      }

      // --- POPULATE VIEW 3: WEATHER FORECASTING ---
      const forecastLoc = document.getElementById('forecastLocationName');
      if (forecastLoc) forecastLoc.textContent = resolvedCity;

      // 1. 24-Hour Hourly Timeline Slider
      const hourlySlider = document.getElementById('hourlyTimelineSlider');
      if (hourlySlider && data.hourly && data.hourly.time) {
        hourlySlider.innerHTML = '';
        const nowIsoHour = new Date().toISOString().slice(0, 13);
        let startIdx = data.hourly.time.findIndex(timeStr => timeStr.startsWith(nowIsoHour));
        if (startIdx === -1) startIdx = Math.max(0, 7 * 24);
        const limit = Math.min(24, data.hourly.time.length - startIdx);

        for (let h = 0; h < limit; h++) {
          const idx = startIdx + h;
          const timeStr = data.hourly.time[idx];
          const d = new Date(timeStr);
          const hourLabel = d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
          const tempH = Math.round(data.hourly.temperature_2m[idx]);
          const rainProbH = data.hourly.precipitation_probability[idx] || 0;
          const windH = Math.round(data.hourly.wind_speed_10m[idx]);
          const codeH = data.hourly.weather_code[idx];

          const isDanger = rainProbH > 40 || windH > 22;
          const isCaution = !isDanger && (windH > 15 || rainProbH > 20);
          const sprayTag = isDanger
            ? '<span class="hourly-spray-tag danger">Adverse</span>'
            : isCaution
            ? '<span class="hourly-spray-tag warn">Caution</span>'
            : '<span class="hourly-spray-tag safe">Optimal</span>';

          const card = document.createElement('div');
          card.className = 'hourly-card';
          card.innerHTML = `
            <div class="hourly-time">${h === 0 ? 'Now' : hourLabel}</div>
            <div class="hourly-icon"><i data-lucide="${getWeatherIcon(codeH)}"></i></div>
            <div class="hourly-temp">${tempH}°C</div>
            <div class="hourly-detail"><i data-lucide="cloud-rain" style="width:12px;height:12px"></i> ${rainProbH}%</div>
            <div class="hourly-detail"><i data-lucide="wind" style="width:12px;height:12px"></i> ${windH} km/h</div>
            ${sprayTag}
          `;
          hourlySlider.appendChild(card);
        }
      }

      // 2. 7-Day Extended Agricultural Forecast Cards (Days 7 to 13)
      const forecast7DayGrid = document.getElementById('forecast7DayGrid');
      if (forecast7DayGrid && data.daily && data.daily.time) {
        forecast7DayGrid.innerHTML = '';
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const startDayIdx = Math.min(7, data.daily.time.length - 1);
        const endDayIdx = Math.min(startDayIdx + 7, data.daily.time.length);

        for (let i = startDayIdx; i < endDayIdx; i++) {
          const d = new Date(data.daily.time[i] + 'T12:00:00');
          const dayLabel = i === startDayIdx ? 'Today' : i === startDayIdx + 1 ? 'Tomorrow' : weekdays[d.getDay()];
          const dateLabel = d.toLocaleDateString([], { month: 'short', day: 'numeric' });
          const maxT = Math.round(data.daily.temperature_2m_max[i]);
          const minT = Math.round(data.daily.temperature_2m_min[i]);
          const rainP = data.daily.precipitation_probability_max[i] || 0;
          const rainMm = data.daily.precipitation_sum?.[i] ?? 0;
          const windMax = Math.round(data.daily.wind_speed_10m_max?.[i] ?? 10);
          const code = data.daily.weather_code[i];

          const isDanger = rainP > 40 || rainMm > 5 || windMax > 24;
          const isCaution = !isDanger && (rainP > 20 || windMax > 16);
          const sprayBadge = isDanger
            ? '<span class="fc-7day-spray-pill danger">Wash-off Risk</span>'
            : isCaution
            ? '<span class="fc-7day-spray-pill warn">Drift Caution</span>'
            : '<span class="fc-7day-spray-pill safe">Optimal Window</span>';

          const card = document.createElement('div');
          card.className = 'fc-7day-card';
          card.innerHTML = `
            <div>
              <div class="fc-7day-day">${dayLabel}</div>
              <div class="fc-7day-date">${dateLabel}</div>
              <div class="fc-7day-icon"><i data-lucide="${getWeatherIcon(code)}"></i></div>
              <div class="fc-7day-temp-row">
                <span class="fc-temp-max">${maxT}°</span>
                <span class="fc-temp-min">${minT}°</span>
              </div>
              <div class="fc-7day-stats">
                <span><i data-lucide="cloud-rain" style="width:12px;height:12px;display:inline"></i> ${rainP}% (${rainMm.toFixed(1)}mm)</span>
                <span><i data-lucide="wind" style="width:12px;height:12px;display:inline"></i> Gusts: ${windMax} km/h</span>
              </div>
            </div>
            ${sprayBadge}
          `;
          forecast7DayGrid.appendChild(card);
        }
      }

      // --- POPULATE VIEW 4: WEATHER HISTORY ---
      const historyLoc = document.getElementById('historyLocationName');
      if (historyLoc) historyLoc.textContent = resolvedCity;

      if (data.daily && data.daily.time && data.daily.time.length >= 7) {
        let totalRain7 = 0;
        let rainEvents7 = 0;
        let sumMaxT = 0;
        let maxPastT = -999;
        let minPastT = 999;

        const histCount = Math.min(7, data.daily.time.length);
        for (let i = 0; i < histCount; i++) {
          const rain = data.daily.precipitation_sum?.[i] || 0;
          totalRain7 += rain;
          if (rain > 0.4) rainEvents7++;
          const maxT = data.daily.temperature_2m_max[i];
          const minT = data.daily.temperature_2m_min[i];
          sumMaxT += maxT;
          if (maxT > maxPastT) maxPastT = maxT;
          if (minT < minPastT) minPastT = minT;
        }

        const avgMaxT = Math.round(sumMaxT / histCount);
        const totalRainElem = document.getElementById('histTotalRain');
        if (totalRainElem) totalRainElem.textContent = totalRain7.toFixed(1);

        const rainEventsElem = document.getElementById('histRainEvents');
        if (rainEventsElem) rainEventsElem.textContent = `Rain Events: ${rainEvents7} days`;

        const avgTempElem = document.getElementById('histAvgTemp');
        if (avgTempElem) avgTempElem.textContent = avgMaxT;

        const tempExtremesElem = document.getElementById('histTempExtremes');
        if (tempExtremesElem) tempExtremesElem.textContent = `High: ${Math.round(maxPastT)}°C / Low: ${Math.round(minPastT)}°C`;

        let pastHumidityAvg = 70;
        if (data.hourly?.relative_humidity_2m) {
          const pastHums = data.hourly.relative_humidity_2m.slice(0, 7 * 24);
          if (pastHums.length > 0) {
            const sumH = pastHums.reduce((a, b) => a + b, 0);
            pastHumidityAvg = Math.round(sumH / pastHums.length);
          }
        }
        const avgHumElem = document.getElementById('histAvgHumidity');
        if (avgHumElem) avgHumElem.textContent = pastHumidityAvg;

        const infectionElem = document.getElementById('histInfectionRating');
        if (infectionElem) {
          if (totalRain7 > 10 || pastHumidityAvg > 75) {
            infectionElem.className = 'hm-val text-warn';
            infectionElem.textContent = 'High Inoculum';
          } else if (totalRain7 > 3 || pastHumidityAvg > 65) {
            infectionElem.className = 'hm-val text-warn';
            infectionElem.textContent = 'Moderate';
          } else {
            infectionElem.className = 'hm-val';
            infectionElem.textContent = 'Low Pressure';
          }
        }

        // Populate History Table (past 7 days in descending chronological order)
        const tableBody = document.getElementById('historyTableBody');
        if (tableBody) {
          tableBody.innerHTML = '';
          const maxPastIdx = Math.min(6, data.daily.time.length - 1);
          for (let i = maxPastIdx; i >= 0; i--) {
            const d = new Date(data.daily.time[i] + 'T12:00:00');
            const dateStr = d.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
            const code = data.daily.weather_code[i];
            const condDesc = getWeatherDesc(code);
            const maxT = Math.round(data.daily.temperature_2m_max[i]);
            const minT = Math.round(data.daily.temperature_2m_min[i]);
            const rain = (data.daily.precipitation_sum?.[i] || 0).toFixed(1);
            const gust = Math.round(data.daily.wind_speed_10m_max?.[i] || 10);

            let sporeRiskTag = '<span class="sensor-tag safe">Low Inoculum</span>';
            if (parseFloat(rain) > 6 || (maxT >= 20 && maxT <= 28 && parseFloat(rain) > 1)) {
              sporeRiskTag = '<span class="sensor-tag danger">High Spore Germination</span>';
            } else if (parseFloat(rain) > 0.4 || pastHumidityAvg > 75) {
              sporeRiskTag = '<span class="sensor-tag warn">Moderate Wetness</span>';
            }

            const row = document.createElement('tr');
            row.innerHTML = `
              <td><strong>${dateStr}</strong></td>
              <td><i data-lucide="${getWeatherIcon(code)}" style="width:16px;height:16px;vertical-align:middle;margin-right:4px"></i> ${condDesc}</td>
              <td>${minT}°C – ${maxT}°C</td>
              <td><strong>${rain} mm</strong></td>
              <td>${gust} km/h</td>
              <td>${sporeRiskTag}</td>
            `;
            tableBody.appendChild(row);
          }
        }
      }

      // Populate 3-Day Forecast Grid inside Foliage Results Tab
      const forecastGrid = document.getElementById('weatherForecastGrid');
      if (forecastGrid && data.daily && data.daily.time) {
        forecastGrid.innerHTML = '';
        const dayNames = ['Tomorrow', 'Day 2', 'Day 3'];
        const startResultIdx = Math.min(8, data.daily.time.length - 1);
        for (let i = startResultIdx; i <= startResultIdx + 2 && i < data.daily.time.length; i++) {
          const maxT = Math.round(data.daily.temperature_2m_max[i]);
          const minT = Math.round(data.daily.temperature_2m_min[i]);
          const rainProb = data.daily.precipitation_probability_max[i] || 0;

          const card = document.createElement('div');
          card.className = 'forecast-day-card';
          card.innerHTML = `
            <div class="fc-day-name">${dayNames[i - startResultIdx]}</div>
            <div class="fc-weather-row">
              <span class="fc-temp">${minT}°C - ${maxT}°C</span>
              <span class="fc-rain"><i data-lucide="cloud-rain"></i> ${rainProb}% rain</span>
            </div>
            <span class="fc-spray-tag ${rainProb > 40 ? 'warn' : 'safe'}">
              ${rainProb > 40 ? 'High Rain Risk' : 'Suitable to Spray'}
            </span>
          `;
          forecastGrid.appendChild(card);
        }
      }

      if (window.lucide) window.lucide.createIcons();
    } catch (err) {
      console.warn('Error loading weather data:', err);
    } finally {
      const refreshBtn = document.getElementById('refreshGpsBtn');
      if (refreshBtn) refreshBtn.classList.remove('loading');
      const mainRefresh = document.getElementById('mainRefreshGpsBtn');
      if (mainRefresh) mainRefresh.classList.remove('loading');
    }
  }

  function getWeatherIcon(code) {
    if (code === 0) return 'sun';
    if (code <= 3) return 'cloud-sun';
    if (code <= 48) return 'cloud-fog';
    if (code <= 55) return 'cloud-drizzle';
    if (code <= 65) return 'cloud-rain';
    if (code <= 82) return 'cloud-rain-wind';
    if (code >= 95) return 'cloud-lightning';
    return 'cloud';
  }

  function getWeatherDesc(code) {
    if (code === 0) return 'Clear Sky & Sun';
    if (code <= 3) return 'Partly Cloudy';
    if (code <= 48) return 'Morning Fog / Dew';
    if (code <= 55) return 'Light Drizzle';
    if (code <= 65) return 'Rain Showers';
    if (code <= 82) return 'Heavy Rainfall';
    if (code >= 95) return 'Thunderstorm Warning';
    return 'Overcast / Stable';
  }

  const refreshGpsBtn = document.getElementById('refreshGpsBtn');
  if (refreshGpsBtn) {
    refreshGpsBtn.addEventListener('click', () => {
      refreshGpsBtn.classList.add('loading');
      initGpsWeather();
      showToast('Refreshing field GPS weather...');
    });
  }

  const mainRefreshBtn = document.getElementById('mainRefreshGpsBtn');
  if (mainRefreshBtn) {
    mainRefreshBtn.addEventListener('click', () => {
      mainRefreshBtn.classList.add('loading');
      initGpsWeather();
      showToast('Refreshing field GPS weather...');
    });
  }

  // Initialize live GPS weather upon load
  initGpsWeather();

  updateHistoryBadge();
});
