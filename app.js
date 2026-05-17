const DATA = {
  week: "Semana 1",
  profile: {
    name: "Musa",
    weight: "57 kg",
    height: "1,68 m",
    goalWeight: "53 kg",
    goalRun: "Correr 5 km ate outubro"
  },
  days: [
    day("seg", "Segunda", "Corrida 1 + musculacao complementar superior", "Queimar gordura e proteger postura sem cansar pernas depois da corrida", "Corrida fixa", ["1 km caminhando (aquecimento)", "3 km leve", "1 km caminhando para desacelerar", "Depois: musculacao superior curta, sem falha"], [
      ex("Puxada alta na polia", "2", "18", "Placa 1-2", "Costas e postura para correr melhor. Cotovelos descem, peito aberto.", "Polia alta", "30-40s"),
      ex("Chest press", "2", "18", "Placa 1-2", "Fortalece peito e triceps sem aumentar volume. Pare com 3 repeticoes sobrando.", "Chest press", "30-40s"),
      ex("Remada unilateral no banco", "2", "15 cada lado", "Halter leve", "Costas e postura. Apoie mao e joelho no banco, puxe o cotovelo para o quadril.", "Banco + halter", "30s"),
      ex("Triceps na polia", "2", "18", "Placa 1", "Braco definido, cotovelos parados, movimento controlado.", "Polia", "30s"),
      ex("Prancha + dead bug", "3", "30s + 10 cada lado", "Peso corporal", "Core firme para corrida, sem carga abdominal.", "Solo", "30s")
    ], meals("Ovos + fruta + cafe", "Iogurte natural ou fruta", "Frango/peixe + arroz pequeno + salada grande", "Banana antes da corrida", "Omelete ou peixe + legumes", "Cha sem acucar ou iogurte")),
    day("ter", "Terca", "Pernas definicao + aerobico diario", "Aumentar gasto calorico e resistencia das pernas sem carga pesada", "Aerobico + maquinas", ["Esteira ou bike 35-45 min em ritmo leve/moderado", "Depois: circuito de pernas nas maquinas"], [
      ex("Cadeira extensora", "3", "20", "Placa 1-2", "Coxa definida sem carga alta. Suba controlando e desca em 2 segundos.", "Cadeira extensora", "30s"),
      ex("Cadeira flexora sentada", "3", "20", "Placa 1-2", "Posterior de coxa. Quadril preso no banco, sem impulso.", "Cadeira flexora", "30s"),
      ex("Abdutora", "3", "20", "Placa 1-2", "Lateral de gluteo e estabilidade do quadril para corrida.", "Abdutora/adutora", "25-30s"),
      ex("Adutora", "3", "20", "Placa 1-2", "Interno de coxa com controle, sem bater peso.", "Abdutora/adutora", "25-30s"),
      ex("Ponte de gluteo no banco", "3", "18-20", "Peso corporal", "Ativar gluteo sem carga alta e sem buscar hipertrofia.", "Banco", "30s"),
      ex("Panturrilha em pe", "3", "20", "Peso corporal ou halter leve", "Fortalece panturrilha para corrida. Subida e descida lentas.", "Halteres", "30s")
    ], meals("Iogurte + aveia + fruta", "Castanhas pequenas", "Carne magra + batata doce + salada", "Fruta", "Sopa proteica ou salada com frango", "Agua + cha")),
    day("qua", "Quarta", "Corrida intervalada + superior leve", "Melhorar velocidade e condicionamento, com musculacao curta de manutencao", "Corrida fixa", ["1 km caminhando para aquecer", "5x (1 min forte + 2 min leve)", "1 km caminhando", "Depois: superior leve e core"], [
      ex("Chest press", "2", "15-18", "Placa 1", "Leve, sem falha. So para fortalecer e manter postura.", "Chest press", "30s"),
      ex("Puxada alta na polia", "2", "15-18", "Placa 1", "Costas, postura e ombros longe das orelhas.", "Polia alta", "30s"),
      ex("Elevacao lateral", "2", "15", "Halter leve", "Ombro definido, sem impulso.", "Halteres", "30s"),
      ex("Rosca biceps com halteres", "2", "15", "Halter leve", "Controle total, sem balancar.", "Halteres", "30s"),
      ex("Prancha lateral", "2", "25-30s cada lado", "Peso corporal", "Core e estabilidade para corrida.", "Solo", "30s")
    ], meals("Pao integral + ovo + fruta", "Iogurte", "Frango + feijao pequeno + salada", "Banana ou cafe antes do treino", "Peixe/frango + legumes + arroz pequeno", "Ceia leve se houver fome")),
    day("qui", "Quinta", "Circuito metabolico corpo todo", "Queimar gordura com maquinas, fortalecer sem volume e preparar para o longo", "Aerobico + circuito", ["Esteira inclinada leve ou bike 30-40 min", "Depois: circuito nas maquinas, 3 voltas"], [
      ex("Cadeira extensora", "3", "18", "Placa 1-2", "Quadriceps com resistencia, sem travar joelho.", "Cadeira extensora", "20-30s"),
      ex("Cadeira flexora sentada", "3", "18", "Placa 1-2", "Posterior forte para corrida, sem impulso.", "Cadeira flexora", "20-30s"),
      ex("Chest press", "3", "15", "Placa 1-2", "Empurrar com controle, sem falha muscular.", "Chest press", "20-30s"),
      ex("Puxada alta na polia", "3", "15", "Placa 1-2", "Puxar ate o alto do peito, tronco estavel.", "Polia alta", "20-30s"),
      ex("Abdutora/adutora", "2", "20 cada", "Placa 1", "Estabilidade de quadril e definicao.", "Abdutora/adutora", "20-30s"),
      ex("Dead bug", "3", "10 cada lado", "Peso corporal", "Core sem sobrecarregar lombar.", "Solo", "30s")
    ], meals("Vitamina proteica simples", "Fruta", "Ovos/frango + salada + carbo pequeno", "Iogurte ou fruta", "Carne magra + legumes", "Cha")),
    day("sex", "Sexta", "Corrida longa + recuperacao ativa", "Construir base para correr 5 km ate outubro sem sobrecarregar musculatura", "Corrida fixa", ["1 km caminhando aquecimento", "3,5 km leve", "1 km caminhando respirando e curtindo", "Depois: mobilidade e core leve"], [
      ex("Mobilidade pre-corrida", "1", "6-8 min", "Leve", "Tornozelo, quadril, posterior e panturrilha antes do longo.", "Solo/Esteira", "-"),
      ex("Prancha", "2", "30s", "Peso corporal", "Somente estabilidade, sem cansar demais.", "Solo", "30s"),
      ex("Dead bug", "2", "10 cada lado", "Peso corporal", "Controle abdominal e lombar protegida.", "Solo", "30s"),
      ex("Alongamento pos-corrida", "1", "10 min", "Leve", "Panturrilha, quadril e posterior para recuperar.", "Solo", "-")
    ], meals("Aveia + iogurte + banana", "Fruta", "Frango/peixe + arroz + salada", "Banana antes do longo", "Jantar com proteina + legumes + carbo pequeno", "Hidratacao")),
    day("sab", "Sabado", "Funcional com aparelhos da academia", "Gasto calorico alto, definicao geral e resistencia muscular", "Aerobico + funcional", ["Bike ou esteira 35-45 min continuo", "Depois: circuito funcional com aparelhos, 3 voltas"], [
      ex("Bike spinning ou esteira", "1", "35-45 min", "Moderado", "Cardio continuo sem sprint.", "Bike/Esteira", "-"),
      ex("Cadeira extensora", "3", "15", "Placa 1-2", "Parte do circuito, sem falhar.", "Cadeira extensora", "20s"),
      ex("Cadeira flexora sentada", "3", "15", "Placa 1-2", "Parte do circuito, controle total.", "Cadeira flexora", "20s"),
      ex("Chest press", "3", "15", "Placa 1-2", "Parte do circuito superior.", "Chest press", "20s"),
      ex("Puxada alta na polia", "3", "15", "Placa 1-2", "Parte do circuito superior.", "Polia alta", "20s"),
      ex("Abdutora", "3", "20", "Placa 1", "Finaliza com estabilidade de quadril.", "Abdutora/adutora", "20s")
    ], meals("Ovos + fruta", "Iogurte", "Prato livre controlado: proteina + salada + carbo", "Fruta", "Jantar leve com proteina", "Agua")),
    day("dom", "Domingo", "Recuperacao ativa + funcional leve", "Manter gasto calorico, reduzir estresse e chegar bem na proxima semana", "Leve", ["Caminhada na esteira ou bike leve 30 min", "Depois: mobilidade e respiracao"], [
      ex("Caminhada leve ou bike", "1", "30 min", "Confortavel", "Recuperar sem ficar parada.", "Esteira/Bike", "-"),
      ex("Alongamento e respiracao", "1", "12 min", "Leve", "Sono e recuperacao contam.", "Solo", "-"),
      ex("Prancha leve", "2", "20-30s", "Peso corporal", "Opcional, so se estiver bem recuperada.", "Solo", "30s")
    ], meals("Cafe completo leve", "Fruta", "Almoco equilibrado", "Opcional", "Sopa/salada proteica", "Preparar marmitas"))
  ],
  runs: [
    run("Treino 1", "Segunda", ["1 km caminhando (aquecimento)", "3 km leve", "1 km caminhando para desacelerar"], "Ritmo leve: consegue conversar."),
    run("Treino 2 - Intervalado", "Quarta", ["1 km caminhando para aquecer", "5x (1 min forte + 2 min leve)", "1 km caminhando"], "Forte sem perder tecnica."),
    run("Treino 3 - Longo", "Sexta", ["1 km caminhando aquecimento", "3,5 km leve", "1 km caminhando respirando e curtindo seu momento de vitoria"], "Longo sem pressa, foco em constancia.")
  ],
  supplements: [
    ["Cafeina", "Pode ajudar energia e desempenho. Use dose baixa antes do treino se voce tolera cafe, evitando a noite.", "Evitar se tiver ansiedade, pressao alta, arritmia, gastrite forte ou sensibilidade."],
    ["Proteina", "Whey ou iogurte/ovos/frango ajudam a bater proteina sem exagerar calorias.", "Nao emagrece sozinho; serve para preservar massa magra."],
    ["Creatina", "Pode ajudar forca e recuperacao sem ser queimador de gordura. Pode aumentar peso na balanca por agua muscular.", "Se a balanca te desmotiva, alinhar expectativa antes."],
    ["Cha/cafe sem acucar", "Ajuda rotina, hidratacao e controle de vontade de doce.", "Nao substitui refeicao nem sono."],
    ["Evitar termogenicos agressivos", "Muitos prometem acelerar metabolismo, mas podem dar taquicardia, ansiedade e atrapalhar sono.", "Melhor custo-beneficio: deficit leve, proteina, passos, sono e consistencia."]
  ]
};

const STORAGE_KEY = "guia-semanal-musa-registros-v1";

const state = {
  day: "todos",
  records: loadRecords()
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function day(id, label, title, focus, runType, runPlan, exercises, meals) {
  return { id, label, title, focus, runType, runPlan, exercises, meals };
}

function meals(cafe, lanche, almoco, pre, jantar, extra) {
  return { cafe, lanche, almoco, pre, jantar, extra };
}

function ex(name, sets, reps, load, tip, equipment, rest = "30s") {
  return { name, sets, reps, load, tip, equipment, rest, demoUrl: demoUrlFor(name) };
}

function run(title, dayLabel, steps, note) {
  return { title, dayLabel, steps, note };
}

function init() {
  bindTabs();
  renderFilters();
  renderAll();
  bindRecords();
}

function bindTabs() {
  $$(".tab").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".tab").forEach((b) => b.classList.remove("is-active"));
      button.classList.add("is-active");
      $$(".section").forEach((section) => section.classList.remove("is-active"));
      $(`#${button.dataset.section}`).classList.add("is-active");
    });
  });
}

function renderFilters() {
  const buttons = [{ id: "todos", label: "Todos" }, ...DATA.days.map(({ id, label }) => ({ id, label }))];
  ["weekFilter", "strengthFilter", "mealFilter"].forEach((target) => {
    $(`#${target}`).innerHTML = buttons.map((day) => `<button class="chip ${day.id === state.day ? "is-active" : ""}" data-day="${day.id}">${day.label}</button>`).join("");
    $(`#${target}`).addEventListener("click", (event) => {
      const button = event.target.closest("button");
      if (!button) return;
      state.day = button.dataset.day;
      renderAll();
    });
  });
}

function selectedDays() {
  return state.day === "todos" ? DATA.days : DATA.days.filter((day) => day.id === state.day);
}

function renderAll() {
  renderWeek();
  renderRuns();
  renderStrength();
  renderMeals();
  renderSupplements();
  renderBio();
  renderWorkoutLog();
  renderFoodLog();
  refreshChips();
}

function refreshChips() {
  $$("[data-day]").forEach((button) => button.classList.toggle("is-active", button.dataset.day === state.day));
}

function renderWeek() {
  $("#weekGrid").innerHTML = selectedDays().map((day) => `
    <article class="week-card">
      <div class="week-card-head">
        <span class="date">${day.label}</span>
        <span class="tag">${day.runType}</span>
      </div>
      <h3>${day.title}</h3>
      <p><strong>Objetivo:</strong> ${day.focus}</p>
      <div class="day-block">
        <strong>1. Corrida/cardio</strong>
        <ul>${day.runPlan.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div class="day-block">
        <strong>2. Musculacao/funcional complementar</strong>
        <ul>${day.exercises.map((exercise) => `<li>${exercise.name}: ${exercise.sets}x ${exercise.reps}, ${exercise.load} <span>${exercise.equipment}</span></li>`).join("")}</ul>
      </div>
    </article>
  `).join("");
}

function renderRuns() {
  $("#runGrid").innerHTML = DATA.runs.map((run) => `
    <article class="run-card">
      <span class="date">${run.dayLabel}</span>
      <h3>${run.title}</h3>
      <ol>${run.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
      <p>${run.note}</p>
    </article>
  `).join("");
}

function renderStrength() {
  $("#strengthList").innerHTML = selectedDays().map((day) => `
    <article class="training-day">
      <header>
        <div>
          <span class="date">${day.label}</span>
          <h3>${day.title}</h3>
          <p>${day.focus}</p>
        </div>
        <span class="tag">${day.runType}</span>
      </header>
      <div class="training-context">
        <strong>Antes da musculacao:</strong>
        <span>${day.runPlan.join(" + ")}</span>
      </div>
      ${day.exercises.map((exercise) => `
        <div class="exercise">
          <div>
            <h4>${exercise.name}</h4>
            <p>${exercise.tip}</p>
            <div class="exercise-meta">
              <span class="mini">${exercise.equipment}</span>
              <span class="mini">${exercise.sets} series</span>
              <span class="mini">${exercise.reps}</span>
              <span class="mini">Descanso ${exercise.rest}</span>
              <a class="demo-link" href="${exercise.demoUrl}" target="_blank" rel="noopener noreferrer">Ver demonstracao</a>
            </div>
          </div>
          <div class="weight-box"><strong>Carga/intensidade:</strong><br>${exercise.load}</div>
        </div>
      `).join("")}
    </article>
  `).join("");
}

function renderMeals() {
  $("#mealGrid").innerHTML = selectedDays().map((day) => `
    <article class="meal-card">
      <span class="date">${day.label}</span>
      <h3>${day.title}</h3>
      ${mealBlock("Cafe", day.meals.cafe)}
      ${mealBlock("Lanche", day.meals.lanche)}
      ${mealBlock("Almoco", day.meals.almoco)}
      ${mealBlock("Pre treino", day.meals.pre)}
      ${mealBlock("Jantar", day.meals.jantar)}
      ${mealBlock("Extra", day.meals.extra)}
    </article>
  `).join("");
}

function mealBlock(title, text) {
  return `<div class="meal-block"><strong>${title}</strong><span>${text}</span></div>`;
}

function renderSupplements() {
  $("#suppGrid").innerHTML = DATA.supplements.map(([title, use, caution]) => `
    <article class="supp-card">
      <h3>${title}</h3>
      <p>${use}</p>
      <p><strong>Atencao:</strong> ${caution}</p>
    </article>
  `).join("");
}

function renderBio() {
  $$("[data-bio]").forEach((input) => input.value = state.records.bio[input.dataset.bio] || "");
}

function renderWorkoutLog() {
  $("#workoutLog").innerHTML = DATA.days.map((day) => `
    <div class="log-day">
      <h4>${day.label} - ${day.title}</h4>
      <div class="log-row">
        <label>Fez?<select data-workout="done" data-day-id="${day.id}"><option></option><option ${workout(day.id).done === "Sim" ? "selected" : ""}>Sim</option><option ${workout(day.id).done === "Parcial" ? "selected" : ""}>Parcial</option><option ${workout(day.id).done === "Nao" ? "selected" : ""}>Nao</option></select></label>
        <label>Duracao<input data-workout="duration" data-day-id="${day.id}" value="${escapeAttr(workout(day.id).duration)}" placeholder="min"></label>
        <label>Intensidade<input data-workout="effort" data-day-id="${day.id}" value="${escapeAttr(workout(day.id).effort)}" placeholder="1-10"></label>
        <label>Peso/ritmo<input data-workout="load" data-day-id="${day.id}" value="${escapeAttr(workout(day.id).load)}" placeholder="carga, pace, km"></label>
        <label>Notas<textarea data-workout="notes" data-day-id="${day.id}" rows="2" placeholder="O que conseguiu fazer, dor, ajustes...">${escapeHtml(workout(day.id).notes)}</textarea></label>
      </div>
    </div>
  `).join("");
}

function renderFoodLog() {
  $("#foodLog").innerHTML = DATA.days.map((day) => {
    const meal = mealRecord(day.id);
    return `
      <div class="food-note">
        <h4>${day.label}</h4>
        <div class="food-list">${meal.entries.map((entry) => foodEntry(day.id, entry)).join("") || `<p class="muted">Nenhum registro ainda.</p>`}</div>
        <button class="secondary" data-add-food="${day.id}">Adicionar registro</button>
        <label>Resumo do dia<textarea data-food-day="notes" data-day-id="${day.id}" rows="2" placeholder="Fome, agua, beliscos, energia...">${escapeHtml(meal.notes)}</textarea></label>
      </div>
    `;
  }).join("");
}

function foodEntry(dayId, entry) {
  return `
    <div class="food-entry">
      <div class="food-entry-grid">
        <label>Horario<input data-food="time" data-day-id="${dayId}" data-entry-id="${entry.id}" type="time" value="${escapeAttr(entry.time)}"></label>
        <label>Tipo<select data-food="type" data-day-id="${dayId}" data-entry-id="${entry.id}">${["Cafe", "Lanche", "Almoco", "Pre treino", "Jantar", "Belisco", "Agua", "Outro"].map((type) => `<option ${entry.type === type ? "selected" : ""}>${type}</option>`).join("")}</select></label>
        <label>O que foi<textarea data-food="text" data-day-id="${dayId}" data-entry-id="${entry.id}" rows="2">${escapeHtml(entry.text)}</textarea></label>
        <label>Foto<input data-food-photo data-day-id="${dayId}" data-entry-id="${entry.id}" type="file" accept="image/*" capture="environment"></label>
      </div>
      <div class="food-photo-row">
        ${entry.photo ? `<img class="food-photo" src="${entry.photo}" alt="Foto da refeicao">` : `<div class="photo-placeholder">Sem foto</div>`}
        <div>
          <div class="food-entry-actions"><button class="secondary danger" data-delete-food="${dayId}:${entry.id}">Remover</button></div>
          <label>Observacao<textarea data-food="photoNotes" data-day-id="${dayId}" data-entry-id="${entry.id}" rows="2">${escapeHtml(entry.photoNotes)}</textarea></label>
        </div>
      </div>
    </div>
  `;
}

function bindRecords() {
  document.addEventListener("input", saveFromEvent);
  document.addEventListener("change", saveFromEvent);
  document.addEventListener("click", async (event) => {
    const addDay = event.target.dataset.addFood;
    if (addDay) {
      mealRecord(addDay).entries.push(newFoodEntry());
      saveRecords();
      renderFoodLog();
      return;
    }
    const del = event.target.dataset.deleteFood;
    if (del) {
      const [dayId, entryId] = del.split(":");
      const meal = mealRecord(dayId);
      meal.entries = meal.entries.filter((entry) => entry.id !== entryId);
      saveRecords();
      renderFoodLog();
    }
  });
  $("#exportJson").addEventListener("click", exportRecords);
  $("#importJson").addEventListener("change", importRecords);
  $("#resetRecords").addEventListener("click", () => {
    if (!confirm("Limpar registros da Musa?")) return;
    state.records = blankRecords();
    saveRecords();
    renderAll();
  });
}

async function saveFromEvent(event) {
  const bio = event.target.dataset.bio;
  if (bio) {
    state.records.bio[bio] = event.target.value;
    saveRecords();
    return;
  }
  const workoutField = event.target.dataset.workout;
  if (workoutField) {
    workout(event.target.dataset.dayId)[workoutField] = event.target.value;
    saveRecords();
    return;
  }
  const foodDay = event.target.dataset.foodDay;
  if (foodDay) {
    mealRecord(event.target.dataset.dayId)[foodDay] = event.target.value;
    saveRecords();
    return;
  }
  const food = event.target.dataset.food;
  if (food) {
    foodRecord(event.target.dataset.dayId, event.target.dataset.entryId)[food] = event.target.value;
    saveRecords();
    return;
  }
  if (event.target.matches("[data-food-photo]")) {
    const file = event.target.files[0];
    if (!file) return;
    const entry = foodRecord(event.target.dataset.dayId, event.target.dataset.entryId);
    entry.photo = await imageFileToDataUrl(file);
    entry.photoName = file.name;
    entry.photoType = file.type;
    saveRecords();
    renderFoodLog();
  }
}

function workout(dayId) {
  if (!state.records.workouts[dayId]) state.records.workouts[dayId] = { done: "", duration: "", effort: "", load: "", notes: "" };
  return state.records.workouts[dayId];
}

function mealRecord(dayId) {
  if (!state.records.food[dayId]) state.records.food[dayId] = { notes: "", entries: [] };
  return state.records.food[dayId];
}

function foodRecord(dayId, entryId) {
  const meal = mealRecord(dayId);
  let entry = meal.entries.find((item) => item.id === entryId);
  if (!entry) {
    entry = newFoodEntry({ id: entryId });
    meal.entries.push(entry);
  }
  return entry;
}

function newFoodEntry(overrides = {}) {
  return {
    id: overrides.id || `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    time: overrides.time || currentTime(),
    type: overrides.type || "Lanche",
    text: overrides.text || "",
    photo: overrides.photo || "",
    photoName: overrides.photoName || "",
    photoType: overrides.photoType || "",
    photoNotes: overrides.photoNotes || "",
    ...overrides
  };
}

function currentTime() {
  const now = new Date();
  return `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
}

function blankRecords() {
  return {
    version: 1,
    week: DATA.week,
    profile: DATA.profile,
    updatedAt: new Date().toISOString(),
    bio: { date: "", weight: "", waist: "", hip: "", fat: "", energy: "", notes: "" },
    workouts: {},
    food: {}
  };
}

function loadRecords() {
  try {
    return normalizeRecords(JSON.parse(localStorage.getItem(STORAGE_KEY) || "null"));
  } catch {
    return blankRecords();
  }
}

function normalizeRecords(records) {
  const base = blankRecords();
  if (!records || typeof records !== "object") return base;
  return {
    ...base,
    ...records,
    bio: { ...base.bio, ...(records.bio || {}) },
    workouts: records.workouts || {},
    food: records.food || {}
  };
}

function saveRecords() {
  state.records.updatedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.records));
}

async function exportRecords() {
  saveRecords();
  const payload = {
    exportedAt: new Date().toISOString(),
    plan: DATA,
    records: state.records
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `registro-musa-${DATA.week.replace(/\s+/g, "-").toLowerCase()}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

async function importRecords(event) {
  const file = event.target.files[0];
  if (!file) return;
  try {
    const parsed = JSON.parse(await file.text());
    state.records = normalizeRecords(parsed.records || parsed);
    saveRecords();
    renderAll();
  } catch {
    alert("Nao consegui importar esse JSON.");
  } finally {
    event.target.value = "";
  }
}

function imageFileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function demoUrlFor(name) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(`${name} execucao correta`)}`;
}

function escapeHtml(value) {
  return String(value || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/'/g, "&#39;");
}

init();
