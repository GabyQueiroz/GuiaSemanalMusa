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
    day("seg", "Segunda", "Corrida leve + superior/core", "Queimar gordura, melhorar resistencia e fortalecer sem volume", "Corrida 1", ["1 km caminhando (aquecimento)", "3 km leve", "1 km caminhando para desacelerar"], [
      ex("Puxada alta na polia", "3", "15", "Placa leve/moderada", "Costas e postura para corrida. Cotovelos descem, sem jogar o corpo para tras.", "Polia alta"),
      ex("Chest press", "3", "15", "Placa leve/moderada", "Peito e triceps sem buscar falha. Movimento controlado.", "Chest press"),
      ex("Remada unilateral no banco", "3", "12 cada lado", "Halter leve", "Costas e postura. Apoie no banco e puxe o cotovelo para o quadril.", "Banco + halter"),
      ex("Prancha + dead bug", "3", "30s + 10 cada lado", "Peso corporal", "Core firme, sem aumentar carga abdominal.", "Solo/banco"),
      ex("Mobilidade final", "1", "8 min", "Leve", "Quadril, panturrilha e posterior para recuperar da corrida.", "Solo")
    ], meals("Ovos + fruta + cafe", "Iogurte natural ou fruta", "Frango/peixe + arroz pequeno + salada grande", "Banana antes da corrida", "Omelete ou peixe + legumes", "Cha sem acucar ou iogurte")),
    day("ter", "Terca", "Cardio diario + pernas leves", "Gasto calorico com resistencia muscular, sem hipertrofia", "Aerobico leve", ["Esteira ou bike 35-45 min em ritmo leve/moderado"], [
      ex("Bike spinning ou esteira", "1", "35-45 min", "Leve/moderado", "Cardio continuo: consegue falar frases curtas.", "Bike/Esteira"),
      ex("Cadeira extensora", "3", "18", "Placa leve", "Coxa definida sem carga alta. Suba controlando e desca devagar.", "Cadeira extensora"),
      ex("Cadeira flexora sentada", "3", "18", "Placa leve", "Posterior de coxa. Quadril preso no banco, sem impulso.", "Cadeira flexora"),
      ex("Abdutora/adutora", "2", "20 cada", "Placa leve", "Quadril e estabilidade. Movimento curto e controlado.", "Abdutora/adutora"),
      ex("Ponte de gluteo no banco", "3", "15", "Peso corporal", "Ativar gluteo sem carga alta.", "Banco")
    ], meals("Iogurte + aveia + fruta", "Castanhas pequenas", "Carne magra + batata doce + salada", "Fruta", "Sopa proteica ou salada com frango", "Agua + cha")),
    day("qua", "Quarta", "Intervalado + superior leve", "Acelerar condicionamento e manter massa magra", "Corrida 2", ["1 km caminhando para aquecer", "5x (1 min forte + 2 min leve)", "1 km caminhando"], [
      ex("Aquecimento articular", "1", "8 min", "Leve", "Tornozelo, quadril e ombro antes do intervalado.", "Solo"),
      ex("Puxada alta na polia", "2", "15", "Placa leve", "Reforco de costas sem cansar demais.", "Polia alta"),
      ex("Triceps na polia", "2", "15", "Placa leve", "Braco definido, cotovelos parados.", "Polia"),
      ex("Elevacao lateral", "2", "15", "Halter leve", "Ombro com postura, sem roubar.", "Halteres"),
      ex("Prancha lateral", "2", "25-30s cada lado", "Peso corporal", "Core e estabilidade para corrida.", "Solo")
    ], meals("Pao integral + ovo + fruta", "Iogurte", "Frango + feijao pequeno + salada", "Banana ou cafe antes do treino", "Peixe/frango + legumes + arroz pequeno", "Ceia leve se houver fome")),
    day("qui", "Quinta", "Pernas metabolico + cardio", "Definir pernas e preservar energia para o longo", "Aerobico leve", ["Esteira inclinada leve ou bike 30-40 min"], [
      ex("Esteira inclinada leve", "1", "30-40 min", "Caminhada rapida", "Sem exaurir as pernas.", "Esteira"),
      ex("Cadeira extensora", "3", "15-18", "Placa leve/moderada", "Resistencia muscular, sem falha.", "Cadeira extensora"),
      ex("Cadeira flexora sentada", "3", "15-18", "Placa leve/moderada", "Posterior forte para corrida.", "Cadeira flexora"),
      ex("Afundo parado sem carga ou halter leve", "2", "12 cada perna", "Peso corporal/halter leve", "Controle e equilibrio, sem buscar volume.", "Halteres"),
      ex("Alongamento", "1", "8 min", "Leve", "Posterior, panturrilha e gluteo.", "Solo")
    ], meals("Vitamina proteica simples", "Fruta", "Ovos/frango + salada + carbo pequeno", "Iogurte ou fruta", "Carne magra + legumes", "Cha")),
    day("sex", "Sexta", "Longo + mobilidade", "Construir base para 5 km sem pressa", "Corrida 3", ["1 km caminhando aquecimento", "3,5 km leve", "1 km caminhando respirando e curtindo"], [
      ex("Ativacao pre-corrida", "1", "6 min", "Leve", "Mobilidade + caminhada antes do longo.", "Solo/Esteira"),
      ex("Corrida longa do plano", "1", "5,5 km total", "Leve", "Fazer exatamente o treino de corrida do dia.", "Esteira ou rua"),
      ex("Core rapido", "2", "30s", "Peso corporal", "Prancha + dead bug, somente controle.", "Solo"),
      ex("Soltura pos-corrida", "1", "10 min", "Leve", "Panturrilha, quadril e posterior.", "Solo")
    ], meals("Aveia + iogurte + banana", "Fruta", "Frango/peixe + arroz + salada", "Banana antes do longo", "Jantar com proteina + legumes + carbo pequeno", "Hidratacao")),
    day("sab", "Sabado", "Funcional na academia", "Gasto calorico e definicao geral", "Aerobico moderado", ["Bike ou esteira 35-45 min continuo"], [
      ex("Bike spinning ou esteira", "1", "35-45 min", "Moderado", "Cardio continuo sem sprint.", "Bike/Esteira"),
      ex("Circuito maquinas", "3", "15 cada", "Leve/moderado", "Chest press + puxada alta + extensora + flexora em sequencia.", "Maquinas"),
      ex("Abdutora/adutora", "2", "20 cada", "Leve", "Estabilidade de quadril.", "Abdutora/adutora"),
      ex("Mobilidade", "1", "10 min", "Leve", "Recuperar para a semana.", "Solo")
    ], meals("Ovos + fruta", "Iogurte", "Prato livre controlado: proteina + salada + carbo", "Fruta", "Jantar leve com proteina", "Agua")),
    day("dom", "Domingo", "Recuperacao ativa", "Manter movimento, reduzir estresse e preparar marmitas", "Leve", ["Caminhada ou bike leve 30 min"], [
      ex("Caminhada leve ou bike", "1", "30 min", "Confortavel", "Recuperar sem ficar parada.", "Esteira/Bike"),
      ex("Alongamento e respiracao", "1", "12 min", "Leve", "Sono e recuperacao contam.", "Solo")
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

function ex(name, sets, reps, load, tip, equipment) {
  return { name, sets, reps, load, tip, equipment, demoUrl: demoUrlFor(name) };
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
        <strong>Corrida/cardio</strong>
        <ul>${day.runPlan.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div class="day-block">
        <strong>Aparelhos da academia</strong>
        <ul>${day.exercises.map((exercise) => `<li>${exercise.name} <span>${exercise.equipment}</span></li>`).join("")}</ul>
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
        </div>
        <span class="tag">${day.runType}</span>
      </header>
      ${day.exercises.map((exercise) => `
        <div class="exercise">
          <div>
            <h4>${exercise.name}</h4>
            <p>${exercise.tip}</p>
            <div class="exercise-meta">
              <span class="mini">${exercise.equipment}</span>
              <span class="mini">${exercise.sets} series</span>
              <span class="mini">${exercise.reps}</span>
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
