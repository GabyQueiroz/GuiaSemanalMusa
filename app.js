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
    day("seg", "Segunda", "Corrida 1 + superior curto", "Comecar a semana com corrida e fortalecer postura sem cansar pernas", "Corrida + complemento", ["1 km caminhando (aquecimento)", "3 km leve", "1 km caminhando para desacelerar", "Musculacao curta: 20-25 min, so superior/core"], [
      ex("Puxada alta na polia", "2", "15-18", "Placa 1-2", "Costas e postura para correr melhor. Sem falha.", "Polia alta", "40s"),
      ex("Chest press", "2", "15-18", "Placa 1-2", "Peito e triceps com controle, deixando 3 repeticoes sobrando.", "Chest press", "40s"),
      ex("Triceps na polia", "2", "15-18", "Placa 1", "Cotovelos parados e movimento limpo.", "Polia", "30s"),
      ex("Dead bug", "2", "10 cada lado", "Peso corporal", "Core para estabilidade, sem fadiga.", "Solo", "30s")
    ], meals("Ovos + fruta + cafe", "Iogurte natural ou fruta", "Frango/peixe + arroz pequeno + salada grande", "Banana antes da corrida", "Omelete ou peixe + legumes", "Cha sem acucar ou iogurte")),
    day("ter", "Terca", "Pernas leves + bike", "Fortalecer pernas para corrida sem treino pesado nem volume", "Forca leve + cardio", ["Bike spinning 20-25 min leve/moderado", "Musculacao de pernas com carga leve e repeticoes altas"], [
      ex("Cadeira extensora", "3", "18-20", "Placa 1-2", "Quadriceps com controle. Nao travar o joelho.", "Cadeira extensora", "40s"),
      ex("Cadeira flexora sentada", "3", "18-20", "Placa 1-2", "Posterior de coxa, sem impulso.", "Cadeira flexora", "40s"),
      ex("Abdutora", "2", "20", "Placa 1-2", "Estabilidade de quadril para correr melhor.", "Abdutora/adutora", "30s"),
      ex("Adutora", "2", "20", "Placa 1-2", "Controle e estabilidade, sem bater peso.", "Abdutora/adutora", "30s"),
      ex("Panturrilha em pe", "2", "20", "Peso corporal", "Subida e descida lentas, preparando panturrilha para corrida.", "Halteres/apoio", "30s")
    ], meals("Iogurte + aveia + fruta", "Castanhas pequenas", "Carne magra + batata doce + salada", "Fruta", "Sopa proteica ou salada com frango", "Agua + cha")),
    day("qua", "Quarta", "Corrida intervalada + mobilidade", "Priorizar o treino forte de corrida e nao acumular fadiga", "Corrida principal", ["1 km caminhando para aquecer", "5x (1 min forte + 2 min leve)", "1 km caminhando", "Depois: apenas mobilidade/core leve"], [
      ex("Mobilidade de quadril e tornozelo", "1", "8 min", "Leve", "Soltar pernas depois do intervalado.", "Solo", "-"),
      ex("Prancha lateral", "2", "25s cada lado", "Peso corporal", "Estabilidade sem cansar.", "Solo", "30s"),
      ex("Alongamento de panturrilha/posterior", "1", "8 min", "Leve", "Recuperar para quinta.", "Solo", "-")
    ], meals("Pao integral + ovo + fruta", "Iogurte", "Frango + feijao pequeno + salada", "Banana ou cafe antes do treino", "Peixe/frango + legumes + arroz pequeno", "Ceia leve se houver fome")),
    day("qui", "Quinta", "Circuito corpo todo moderado", "Gasto calorico e definicao sem atrapalhar o longo de sexta", "Circuito moderado", ["Bike ou esteira 15-20 min leve", "Circuito nas maquinas: 2-3 voltas, sem chegar na falha"], [
      ex("Chest press", "3", "15", "Placa 1-2", "Empurrar com controle, sem falha.", "Chest press", "35s"),
      ex("Puxada alta na polia", "3", "15", "Placa 1-2", "Costas e postura.", "Polia alta", "35s"),
      ex("Cadeira extensora", "2", "18", "Placa 1", "Leve para nao pesar no longo de sexta.", "Cadeira extensora", "35s"),
      ex("Cadeira flexora sentada", "2", "18", "Placa 1", "Posterior com controle, sem fadigar.", "Cadeira flexora", "35s"),
      ex("Dead bug", "2", "10 cada lado", "Peso corporal", "Core e lombar protegida.", "Solo", "30s")
    ], meals("Vitamina proteica simples", "Fruta", "Ovos/frango + salada + carbo pequeno", "Iogurte ou fruta", "Carne magra + legumes", "Cha")),
    day("sex", "Sexta", "Corrida longa + recuperacao", "Construir base para correr 5 km ate outubro sem sobrecarregar musculatura", "Corrida principal", ["1 km caminhando aquecimento", "3,5 km leve", "1 km caminhando respirando e curtindo", "Depois: somente recuperacao"], [
      ex("Mobilidade pre-corrida", "1", "6-8 min", "Leve", "Tornozelo, quadril, posterior e panturrilha antes do longo.", "Solo/Esteira", "-"),
      ex("Alongamento pos-corrida", "1", "10 min", "Leve", "Panturrilha, quadril e posterior para recuperar.", "Solo", "-")
    ], meals("Aveia + iogurte + banana", "Fruta", "Frango/peixe + arroz + salada", "Banana antes do longo", "Jantar com proteina + legumes + carbo pequeno", "Hidratacao")),
    day("sab", "Sabado", "Funcional leve opcional", "Movimentar sem destruir a recuperacao da semana", "Opcional leve", ["Caminhada ou bike 25-30 min leve", "Se estiver cansada: fazer so mobilidade"], [
      ex("Bike spinning ou esteira", "1", "25-30 min", "Leve", "Cardio regenerativo, sem sprint.", "Bike/Esteira", "-"),
      ex("Abdutora", "2", "18-20", "Placa 1", "Ativar quadril sem fadigar.", "Abdutora/adutora", "30s"),
      ex("Puxada alta na polia", "2", "15", "Placa 1", "Postura e costas leve.", "Polia alta", "30s"),
      ex("Alongamento geral", "1", "10 min", "Leve", "Fechar a semana recuperando.", "Solo", "-")
    ], meals("Ovos + fruta", "Iogurte", "Prato livre controlado: proteina + salada + carbo", "Fruta", "Jantar leve com proteina", "Agua")),
    day("dom", "Domingo", "Descanso", "Recuperar para emagrecer melhor, correr melhor e evitar lesao", "Descanso", ["Descanso real", "Opcional: caminhada leve de lazer, sem meta", "Preparar comida e sono da semana"], [
      ex("Descanso", "0", "0", "Sem treino", "Dormir bem, hidratar e recuperar. Hoje nao tem musculacao.", "Casa/descanso", "-")
    ], meals("Cafe completo leve", "Fruta", "Almoco equilibrado", "Opcional", "Sopa/salada proteica", "Preparar marmitas"))
  ],
  runs: [
    run("Treino 1", "Segunda", ["1 km caminhando (aquecimento)", "3 km leve", "1 km caminhando para desacelerar"], "Ritmo leve: consegue conversar."),
    run("Treino 2 - Intervalado", "Quarta", ["1 km caminhando para aquecer", "5x (1 min forte + 2 min leve)", "1 km caminhando"], "Forte sem perder tecnica."),
    run("Treino 3 - Longo", "Sexta", ["1 km caminhando aquecimento", "3,5 km leve", "1 km caminhando respirando e curtindo seu momento de vitoria"], "Longo sem pressa, foco em constancia.")
  ],
  supplements: [
    ["Banana", "Boa antes da corrida: carboidrato facil, potassio e energia rapida. Use 1 banana 30-60 min antes.", "Se pesar no estomago, coma metade ou deixe para treinos mais longos."],
    ["Mamao, laranja, kiwi e frutas vermelhas", "Ajudam fibras, vitaminas e recuperacao. Otimas no cafe ou lanche.", "Evite transformar em suco grande; a fruta inteira sacia mais."],
    ["Cafe ou cafeina", "Pode melhorar energia e percepcao de esforco. Cafe simples 30-45 min antes pode bastar.", "Evitar a noite e evitar se der ansiedade, taquicardia, gastrite ou pressao alta."],
    ["Agua + pitada de sal ou agua de coco", "Ajuda folego e disposicao quando o treino tem suor. Boa em dias de corrida/intervalado.", "Nao precisa exagerar: use principalmente em calor ou treino longo."],
    ["Carboidrato estrategico", "Para correr melhor: banana, pao, aveia, batata ou arroz em porcao pequena perto do treino.", "Cortar carbo demais piora folego, humor e desempenho."],
    ["Proteina", "Whey, iogurte, ovos, frango ou peixe ajudam a preservar massa magra enquanto emagrece.", "Nao e queimador de gordura; funciona dentro do plano alimentar."],
    ["Creatina", "Ajuda forca e recuperacao; pode ser util mesmo sem foco em volume.", "Pode subir peso na balanca por agua muscular. Se isso incomodar, avaliar com profissional."],
    ["Cha verde ou mate sem acucar", "Pode ajudar rotina, foco e vontade de doce; efeito leve.", "Cuidado com cafeina total do dia e sono."],
    ["Sono e respiracao", "Dormir bem aumenta energia, recuperacao e controle de fome. Respiracao nasal leve nos treinos faceis ajuda folego.", "Sono ruim sabota queima de gordura mais que falta de suplemento."],
    ["Evitar termogenicos agressivos", "Prometem acelerar metabolismo, mas podem dar taquicardia, ansiedade e piorar sono.", "Melhor custo-beneficio: deficit leve, proteina, cardio, passos e consistencia."]
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
  ["weekFilter", "strengthFilter", "mealFilter", "recordFilter"].forEach((target) => {
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
              <a class="demo-link" href="${exercise.demoUrl}" target="_blank" rel="noopener noreferrer">Ver video no YouTube</a>
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
  $("#workoutLog").innerHTML = selectedDays().map((day) => `
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
  $("#foodLog").innerHTML = selectedDays().map((day) => {
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
  const demos = [
    ["Puxada alta na polia", "puxada alta na polia execucao correta"],
    ["Chest press", "chest press maquina execucao correta"],
    ["Triceps na polia", "triceps na polia execucao correta"],
    ["Remada unilateral no banco", "remada unilateral com halter no banco execucao correta"],
    ["Cadeira extensora", "cadeira extensora execucao correta"],
    ["Cadeira flexora sentada", "cadeira flexora sentada execucao correta"],
    ["Abdutora", "cadeira abdutora execucao correta"],
    ["Adutora", "cadeira adutora execucao correta"],
    ["Panturrilha em pe", "panturrilha em pe execucao correta"],
    ["Dead bug", "dead bug exercicio execucao correta"],
    ["Prancha lateral", "prancha lateral execucao correta"],
    ["Prancha", "prancha abdominal execucao correta"],
    ["Mobilidade de quadril", "mobilidade quadril tornozelo corrida"],
    ["Mobilidade pre-corrida", "mobilidade antes da corrida aquecimento"],
    ["Alongamento pos-corrida", "alongamento depois da corrida panturrilha posterior"],
    ["Alongamento de panturrilha", "alongamento panturrilha posterior depois corrida"],
    ["Alongamento geral", "alongamento corpo todo pos treino"],
    ["Bike spinning", "como usar bike spinning iniciante"],
    ["Caminhada leve ou bike", "caminhada na esteira iniciante postura"],
    ["Descanso", "recuperacao muscular descanso treino corrida"]
  ];
  const found = demos.find(([needle]) => name.toLowerCase().includes(needle.toLowerCase()));
  const query = found ? found[1] : `${name} execucao correta`;
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

function escapeHtml(value) {
  return String(value || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/'/g, "&#39;");
}

init();
