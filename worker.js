// ============================================================================
//  ducktv 
//  que use para este proyecto?: claude, gemini, chatgpt
//  la mayorai del proyecto hizo la ia y me da igual
//  
// ============================================================================

// ---------- 1) CSS ----------
const CSS = String.raw`
:root{--bg:#f6f7f9;--card:#fff;--tx:#1b1f24;--mu:#667085;--bd:#d9dde3;--ac:#4f46e5;--ac2:#fff;--ok:#0f7b45;--er:#b42318;--code:#f0f2f5}
@media (prefers-color-scheme:dark){:root{--bg:#14161a;--card:#1d2026;--tx:#e8eaed;--mu:#9aa3b0;--bd:#343a44;--ac:#818cf8;--ac2:#14161a;--ok:#4ade80;--er:#f87171;--code:#262a31}}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--tx);font:15px/1.5 system-ui,Segoe UI,sans-serif}
header{padding:18px 24px;border-bottom:1px solid var(--bd);display:flex;gap:16px;align-items:center;flex-wrap:wrap}
header h1{margin:0;font-size:20px}header span{color:var(--mu)}
nav{display:flex;gap:6px;margin-left:auto}
nav button{background:none;border:1px solid var(--bd);color:var(--tx);padding:7px 14px;border-radius:8px;cursor:pointer;font:inherit}
nav button.on{background:var(--ac);color:var(--ac2);border-color:var(--ac)}
main{max-width:1000px;margin:0 auto;padding:20px}
section{display:none}section.on{display:block}
.card{background:var(--card);border:1px solid var(--bd);border-radius:12px;padding:16px;margin-bottom:16px}
.card h2{margin:0 0 12px;font-size:16px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px}
label{display:block;font-size:13px;color:var(--mu);margin-bottom:3px}
input,textarea{width:100%;padding:8px 10px;border:1px solid var(--bd);border-radius:8px;background:var(--bg);color:var(--tx);font:inherit}
textarea{font:13px/1.4 Consolas,monospace;min-height:220px;resize:vertical}
button.b{background:var(--ac);color:var(--ac2);border:0;padding:8px 14px;border-radius:8px;cursor:pointer;font:inherit}
button.s{background:none;color:var(--tx);border:1px solid var(--bd);padding:8px 14px;border-radius:8px;cursor:pointer;font:inherit}
.row{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px;align-items:center}
.msg{font-size:13px;margin-top:8px}.ok{color:var(--ok)}.er{color:var(--er)}
#drop{border:2px dashed var(--bd);border-radius:12px;padding:30px;text-align:center;color:var(--mu);cursor:pointer}
#drop.over{border-color:var(--ac);color:var(--ac)}
.meta{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px}
.meta div{background:var(--code);border-radius:8px;padding:8px 10px}
.meta b{display:block;font-size:12px;color:var(--mu);font-weight:500}
.tw{overflow-x:auto;max-height:380px;overflow-y:auto}
table{width:100%;border-collapse:collapse;font-size:13px}
th,td{text-align:left;padding:6px 8px;border-bottom:1px solid var(--bd);white-space:nowrap;max-width:320px;overflow:hidden;text-overflow:ellipsis}
th{position:sticky;top:0;background:var(--card)}
pre{background:var(--code);padding:12px;border-radius:8px;overflow:auto;max-height:380px;font:13px/1.4 Consolas,monospace;margin:0}
video{width:100%;max-height:60vh;background:#000;border-radius:8px;display:block}
#now{font-weight:600;margin:8px 0 0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
tr.cur td{background:var(--code);font-weight:600}
.pb{background:none;border:1px solid var(--bd);color:var(--ac);border-radius:6px;cursor:pointer;padding:1px 8px}
.tabs{display:flex;gap:6px;margin-bottom:8px}
.tabs button{background:none;border:0;border-bottom:2px solid transparent;color:var(--mu);padding:6px 10px;cursor:pointer;font:inherit}
.tabs button.on{color:var(--tx);border-color:var(--ac)}
/* ===== ducktv: tema oscuro tipo guía de canales ===== */
:root{--bg:#070d14;--card:#0e1722;--tx:#e8eef5;--mu:#8a9bb0;--bd:#1e2d3d;--ac:#19b4e8;--ac2:#04121c;--code:#0a121b}
body{font-family:"Coolvetica","Fredoka",system-ui,sans-serif}
.top{display:flex;align-items:center;gap:16px;flex-wrap:wrap;padding:10px 22px;background:#0a131d;border-bottom:1px solid var(--bd);position:sticky;top:0;z-index:20}
.logo{font-size:30px;font-weight:600;letter-spacing:-1px;color:var(--ac);margin-right:10px}
.nv{background:none;border:0;border-bottom:2px solid transparent;color:var(--mu);padding:6px 2px;cursor:pointer;font:inherit;font-size:13px;letter-spacing:.8px;text-transform:uppercase}
.nv.on{color:#fff;border-color:var(--ac)}.sp{flex:1}
#q{width:190px;border-radius:20px}
.nrd{background:none;border:1px solid var(--ac);color:var(--ac);border-radius:20px;padding:7px 14px;cursor:pointer;font:inherit;font-size:13px}
.cta{background:var(--ac);color:var(--ac2);border:0;border-radius:20px;padding:8px 18px;cursor:pointer;font:inherit;font-weight:600}
main{max-width:1280px}
.gh{display:flex;align-items:flex-end;justify-content:space-between;gap:12px;flex-wrap:wrap;margin:6px 0 14px}
.gh h1{margin:0;font-size:38px;font-weight:600}
.gh select{padding:7px 10px;border-radius:6px;border:1px solid var(--bd);background:#0f1b28;color:var(--tx);font:inherit}
.crow{display:flex;gap:14px;align-items:center;padding:10px 0;border-top:1px solid #0f1b28}
.clogo{flex:0 0 130px;text-align:center;font-size:11px;color:var(--mu);text-transform:uppercase;letter-spacing:.5px}
.clogo .lg{height:84px;display:flex;align-items:center;justify-content:center;margin-bottom:6px}
.clogo img{max-width:112px;max-height:80px;object-fit:contain;filter:drop-shadow(0 2px 6px #000a)}
.lt{font-size:34px;font-weight:600;color:#fff}
.cards{display:flex;gap:10px;overflow-x:auto;flex:1;padding-bottom:6px;scrollbar-width:thin}
.gc{position:relative;flex:0 0 200px;height:112px;border-radius:6px;overflow:hidden;background:linear-gradient(135deg,#16314a,#0c1b2a);cursor:pointer;display:flex;flex-direction:column;justify-content:flex-end;padding:8px 10px;border:1px solid transparent}
.gc:hover{border-color:var(--ac)}.gc.live{flex-basis:240px;background:linear-gradient(135deg,#1f5a85,#0d2539)}
.gc.info{flex-basis:170px;background:#0f1b28;cursor:default}.gc.info:hover{border-color:transparent}
.gc b,.gc small{position:relative;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-shadow:0 1px 4px #000}
.gc small{color:#b7c6d6;font-size:11px}
.ghost{position:absolute;right:10px;top:4px;font-size:54px;font-weight:600;opacity:.12}
.badge{position:absolute;top:8px;left:8px;font-size:10px;background:#e5484d;border-radius:3px;padding:1px 6px;letter-spacing:.6px}
.gc .bar{position:absolute;left:0;right:0;bottom:0;height:4px;background:#2a3a4b}
.bar.ok{background:#2ecc71!important}.bar.dead{background:#e5484d!important}.bar.wait{background:#e8b339!important}
.modal{position:fixed;inset:0;background:#000d;z-index:50;display:none;overflow:auto;padding:20px}
.modal.on{display:block}#pl{z-index:60}.mbox{max-width:1000px;margin:0 auto}.x{float:right;margin-bottom:10px}

/* ===== fondos, reproductor propio, configuración, legacy ===== */
.cbg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:blur(2px) brightness(.6);transform:scale(1.08)}
.badge,.ghost{z-index:1}
.pw{position:relative;background:#000;border-radius:8px;overflow:hidden}
.pw video{width:100%;max-height:80vh;display:block;background:#000}
.pw:fullscreen video{max-height:none;height:100vh;object-fit:contain}
.pw .msg{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center;max-width:80%;background:#000b;padding:8px 14px;border-radius:8px;margin:0;color:#fff}
.pw .msg:empty{display:none}
.pbar{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:space-between;opacity:0;transition:opacity .2s;pointer-events:none;background:linear-gradient(#000b,transparent 22%,transparent 72%,#000c)}
.pw.show .pbar{opacity:1}.pbar button,.pbar input{pointer-events:auto}
.ptop,.pctl{display:flex;align-items:center;gap:6px;padding:10px 14px;color:#fff}
.pbt{background:none;border:0;color:#fff;font-size:20px;cursor:pointer;padding:6px 10px;border-radius:6px}.pbt:hover{background:#fff3}
#qm{display:none;position:absolute;right:0;bottom:46px;background:#0e1722;border:1px solid var(--bd);border-radius:8px;min-width:150px;pointer-events:auto}
#qm.on{display:block}.qi{padding:8px 14px;cursor:pointer;color:#fff;font-size:14px}.qi:hover{background:#1e2d3d}.qi.on::after{content:" ✓"}
.pnerd{position:absolute;left:10px;top:50px;margin:0;background:#000b;color:#7CFC9A;font:12px/1.4 Consolas,monospace;padding:8px;border-radius:6px;max-height:none}
#cfgm{z-index:70}.cfg{display:flex;gap:16px;align-items:stretch}
.cmenu{flex:0 0 210px;display:flex;flex-direction:column;gap:6px}.cbody{flex:1;margin:0}
.cm{background:var(--card);border:1px solid var(--bd);color:var(--tx);padding:10px 12px;border-radius:8px;cursor:pointer;font:inherit;text-align:left}
.cm.on{border-color:var(--ac);color:var(--ac)}.cp{display:none}.cp.on{display:block}.cp p,.cp li{font-size:14px;line-height:1.6}
.sup{margin-top:auto;padding-top:14px;border-top:1px solid var(--bd);font-size:13px;color:var(--mu)}.sup a{color:var(--ac)}
.cp kbd{background:var(--code);border:1px solid var(--bd);border-radius:4px;padding:1px 6px;font:12px Consolas,monospace}
body.legacy{font-family:"Times New Roman",Times,serif;--bg:#fff;--card:#ece9d8;--tx:#000;--mu:#444;--bd:#808080;--ac:#0000cc;--ac2:#fff;--code:#f2f2f2;background:#fff}
body.legacy *{border-radius:0!important;text-shadow:none!important;filter:none!important}
body.legacy .top{background:#c0c0c0;border-bottom:2px outset #fff}
body.legacy .logo{font-family:Arial,Helvetica,sans-serif;color:#00c}
body.legacy button,body.legacy select,body.legacy input{font-family:Arial,Helvetica,sans-serif;background:#d4d0c8;color:#000;border:2px outset #fff}
body.legacy .gc,body.legacy .gc.live,body.legacy .gc.info{background:#ddd;color:#000;border:1px solid #666}
body.legacy .gc small{color:#333}body.legacy .cbg,body.legacy .ghost,body.legacy .pbar{display:none}
body.legacy .modal{background:#c0c0c0}body.legacy .clogo{color:#000}body.legacy .lt{color:#000}

`;

// ---------- 2) HTML (cuerpo de la página) ----------
const BODY = String.raw`
<div class="top"><span class="logo">ducktv</span><button class="nv on" id="t-view">Guía</button><span class="sp"></span>
  <input id="q" placeholder="Buscar canal…"><button class="nrd" id="tNerd">📊 Estadísticas para nerds</button><button class="nrd" id="tOpen">Abrir .vx</button><button class="nrd" id="tCfg">⚙ Configuración</button><button class="cta" id="t-create">＋ Crear</button></div>
<main>

<section id="s-create"><button class="s" id="back" style="margin-bottom:14px">← Volver a la guía</button>
  <div class="card"><h2>1. Cabecera</h2>
    <div class="grid">
      <div><label>Título</label><input id="m-Title" placeholder="Mi lista"></div>
      <div><label>Autor</label><input id="m-Author"></div>
    </div>
    <div style="margin-top:10px"><label>Descripción</label><input id="m-Description"></div>
  </div>

  <div class="card"><h2>2. Añadir entrada M3U</h2>
    <div class="grid">
      <div><label>Nombre *</label><input id="e-name"></div>
      <div><label>URL *</label><input id="e-url" placeholder="http://..."></div>
      <div><label>Grupo</label><input id="e-group"></div>
      <div><label>Logo (URL)</label><input id="e-logo"></div>
      <div><label>tvg-id</label><input id="e-id"></div>
      <div><label>Duración (s)</label><input id="e-dur" value="-1"></div>
    </div>
    <div class="row"><button class="b" id="add">Añadir al contenido</button>
    <button class="s" id="imp">Importar .m3u…</button><input type="file" id="m3uFile" accept=".m3u,.m3u8,.txt" hidden></div>
  </div>

  <div class="card"><h2>3. Contenido M3U</h2>
    <textarea id="m3u" spellcheck="false" placeholder="#EXTM3U&#10;#EXTINF:-1,Nombre&#10;http://..."></textarea>
    <div class="msg" id="c-msg"></div>
    <div class="row"><button class="b" id="dl">Descargar .vx</button>
    <button class="s" id="prev">Previsualizar</button>
    <button class="s" id="clr">Vaciar</button></div>
  </div>
</section>

<section id="s-view" class="on">
  <div class="gh"><div><h1>Guía de canales</h1><span class="msg" id="gcount"></span></div>
    <label style="margin:0">Filtrar por: <select id="gsel" data-sig=""><option value="all">Todos los grupos</option></select></label></div>
  <div class="msg" id="v-msg"></div><input type="file" id="vxFile" accept=".vx,.txt" hidden>
  <div id="empty" class="card"><div id="drop">Todavía no hay lista. Arrastra aquí un archivo <b>.vx</b> o haz clic para elegirlo<br><small>(o usa «＋ Crear» para armar uno)</small></div></div>
  <div id="guide"></div>
</section>
</main>
<div class="modal" id="pl"><div class="mbox" style="max-width:960px"><div class="pw" id="pw">
<video id="vid" playsinline></video><div class="msg" id="p-msg"></div><pre class="pnerd" id="pnerd" hidden></pre>
<div class="pbar"><div class="ptop"><b id="now">—</b><span class="badge" style="position:static">EN VIVO</span><span class="sp"></span><button class="pbt" id="pClose" title="Cerrar (Esc)">✕</button></div>
<div class="pctl"><button class="pbt" id="pPrev" title="Anterior (P)">⏮</button><button class="pbt" id="pPlay" title="Pausa (Espacio)">⏸</button><button class="pbt" id="pNext" title="Siguiente (N)">⏭</button>
<button class="pbt" id="pMute" title="Silencio (M)">🔊</button><input type="range" id="pVol" min="0" max="1" step="0.05" value="1" style="width:90px"><span class="sp"></span>
<div style="position:relative"><button class="pbt" id="pQ" title="Calidad (Q)">⚙ Auto</button><div id="qm"></div></div>
<button class="pbt" id="pPip" title="Picture in picture">❐</button><button class="pbt" id="pFs" title="Pantalla completa (F)">⛶</button></div></div></div></div></div>
<div class="modal" id="nerd"><div class="mbox"><button class="s x" id="nClose">✕ Cerrar</button><h1 style="margin:0 0 14px">Estadísticas para nerds</h1>
<div id="nstats"></div><div id="result" hidden>
    <div class="card"><h2>Cabecera</h2><div class="meta" id="meta"></div></div>
    
    <div class="card"><h2>Limpiador</h2>
      <div class="row" style="margin-top:0"><button class="b" id="tRun">▶ Probar reproduciendo</button><button class="s" id="tStop">⏹ Parar</button>
        <label style="margin:0">En paralelo <input id="conc" type="number" value="2" min="1" max="4" style="width:64px"></label>
        <label style="margin:0">Espera por canal (s) <input id="tmo" type="number" value="10" min="3" max="60" style="width:64px"></label></div>
      <div class="msg">Abre cada canal de verdad en el reproductor; los que no arrancan quedan marcados con ❌ (pasa el mouse sobre el ❌ para ver el motivo).</div>
      <div class="msg" id="ls"></div>
      <div class="row"><button class="s" id="tRm">🗑 Quitar muertas</button><button class="s" id="tDup">Quitar duplicadas</button>
        <select id="stFilter" style="padding:8px;border-radius:8px;border:1px solid var(--bd);background:var(--bg);color:var(--tx)">
          <option value="all">Mostrar: todas</option><option value="ok">Solo vivas</option><option value="dead">Solo muertas</option></select></div>
    </div>
    <div class="card"><h2>Entradas (<span id="cnt">0</span>)</h2>
      <input id="filter" placeholder="Filtrar por nombre, grupo o URL…" style="margin-bottom:10px">
      <div class="tw"><table><thead><tr><th></th><th>#</th><th>Nombre</th><th>Grupo</th><th>tvg-id</th><th>URL</th><th>Estado</th></tr></thead><tbody id="rows"></tbody></table></div>
    </div>
    <div class="card"><h2>Código</h2>
      <div class="tabs"><button id="k-m3u" class="on">M3U extraído</button><button id="k-vx">Archivo .vx completo</button></div>
      <pre id="code"></pre>
      <div class="row"><button class="b" id="dlm3u">Descargar .m3u</button>
      <button class="b" id="dlvx">Descargar .vx</button>
      <button class="s" id="copy">Copiar M3U</button>
      <button class="s" id="edit">Editar en “Crear”</button></div>
    </div>
  </div>
</div></div>
<div class="modal" id="cfgm"><div class="mbox" style="max-width:880px"><button class="s x" id="cClose">✕ Cerrar</button><h1 style="margin:0 0 14px">⚙ Configuración</h1>
<div class="cfg"><div class="cmenu" id="cmenu">
<button class="cm on" data-p="video">🎞 Video</button><button class="cm" data-p="ctl">🎛 Controles</button><button class="cm" data-p="keys">⌨ Atajos</button><button class="cm" data-p="net">🌐 Proxy y CORS</button><button class="cm" data-p="nerd">🤓 Nerds</button><button class="cm" data-p="leg">🕰 Legacy</button>
<div class="sup"><b>Soporte</b><br>Contacto: <a href="mailto:elvivoar@proton.me">elvivoar@proton.me</a></div></div>
<div class="card cbody">
<div class="cp on" id="cp-video"><h2>Video</h2><label>Calidad por defecto (streams HLS)</label><select id="cq" style="padding:8px;border-radius:8px;background:var(--bg);color:var(--tx);border:1px solid var(--bd)"><option value="auto">Auto (se adapta a tu conexión)</option><option value="max">Siempre la máxima</option><option value="min">Siempre la mínima (ahorra datos)</option></select>
<p>Dentro del reproductor, el botón <b>⚙</b> (o la tecla <kbd>Q</kbd>) cambia la calidad al vuelo. Solo funciona con <b>HLS (.m3u8) multi-calidad</b>: el MPEG-TS (.ts) y los mp4 tienen una única calidad y no se pueden bajar.</p></div>
<div class="cp" id="cp-ctl"><h2>Controles</h2><label><input type="checkbox" id="chide" style="width:auto"> Ocultar controles automáticamente</label><label><input type="checkbox" id="cstats" style="width:auto"> Mostrar estadísticas en el reproductor (tecla <kbd>I</kbd>)</label>
<p>Clic en el video = pausa/play · doble clic = pantalla completa · ⏮ ⏭ cambian de canal · ❐ picture-in-picture · el modo <b>Legacy</b> usa los controles nativos del navegador.</p></div>
<div class="cp" id="cp-keys"><h2>Atajos de teclado</h2><p><kbd>Espacio</kbd>/<kbd>K</kbd> pausa · <kbd>M</kbd> silencio · <kbd>F</kbd> pantalla completa · <kbd>↑</kbd><kbd>↓</kbd> volumen · <kbd>←</kbd><kbd>→</kbd> ±10 s (si el video lo permite)<br><kbd>N</kbd>/<kbd>PgDn</kbd> canal siguiente · <kbd>P</kbd>/<kbd>PgUp</kbd> canal anterior · <kbd>Q</kbd> cambiar calidad · <kbd>I</kbd> estadísticas · <kbd>Esc</kbd> cerrar</p></div>
<div class="cp" id="cp-net"><h2>Proxy y CORS</h2><label><input type="checkbox" id="useProxy" style="width:auto" disabled> Usar proxy</label> <span class="msg" id="px-note">Proxy no detectado</span> <button class="s" id="pTest">Probar proxy</button>
<p><b>CORS</b>: el navegador no deja que una web lea streams de otros dominios sin permiso del servidor. <b>Mixed content</b>: una página https no puede cargar links http.<br><b>Proxy</b>: el Worker (<code>/proxy?url=…</code>) descarga el stream por ti con User-Agent de VLC y te lo entrega desde este mismo dominio; en listas HLS reescribe los segmentos para que también pasen por él.<br><b>Límites</b>: cuota de Cloudflare (≈100 mil peticiones/día), IPs de Cloudflare bloqueadas por algunos proveedores, dominios sin DNS (error 530/1016) y puertos no permitidos.</p></div>
<div class="cp" id="cp-nerd"><h2>Nerds</h2><div class="row"><button class="s" id="cNerd">📊 Estadísticas para nerds</button><button class="s" id="cWipe">🗑 Borrar lista guardada</button></div>
<p>Se guarda en el navegador: <code>ducktv:vx</code> (tu lista) y <code>ducktv:cfg</code> (esta configuración). Motores de reproducción: nativo, hls.js y mpegts.js.</p></div>
<div class="cp" id="cp-leg"><h2>Legacy</h2><button class="b" id="cLegacy">Legacy</button><p>Modo clásico: tipografías de internet de siempre (Times New Roman, Arial), colores planos sin desenfoques ni bordes redondeados, y el <b>reproductor clásico</b> del navegador con sus controles nativos.</p></div>
</div></div></div></div>
`;

// ---------- 3) JS que corre en el navegador ----------
// (Dentro de String.raw no se pueden usar comillas invertidas ni ${...}; por eso se usa concatenación.)
const CLIENT = String.raw`
"use strict";
/* ===== Especificación del formato (modifica aquí si cambia tu cabecera) ===== */
const MAGIC = "VXFILE", VERSION = "1.0", SEP = "====";
const FIELDS = ["Title", "Author", "Created", "Description"];

const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

/* ===== Parser M3U ===== */
function parseM3U(text) {
  const entries = []; let info = null, group = "", pend = [];
  for (let raw of text.split(/\r?\n/)) {
    const line = raw.trim(); if (!line) continue;
    if (line.startsWith("#") && !line.startsWith("#EXTM3U")) pend.push(line);
    if (line.startsWith("#EXTINF:")) {
      const m = line.match(/^#EXTINF:(-?[\d.]+)((?:\s+[\w-]+="[^"]*")*)\s*,(.*)$/);
      info = { name: "", attrs: {} };
      if (m) {
        info.name = m[3].trim();
        for (const a of m[2].matchAll(/([\w-]+)="([^"]*)"/g)) info.attrs[a[1]] = a[2];
      } else info.name = line.slice(line.indexOf(",") + 1).trim();
    } else if (line.startsWith("#EXTGRP:")) group = line.slice(8).trim();
    else if (line.startsWith("#")) continue;
    else {
      const a = info ? info.attrs : {};
      entries.push({ name: info ? info.name : line, url: line,
        group: a["group-title"] || group, id: a["tvg-id"] || "", logo: a["tvg-logo"] || "", block: pend.concat(line).join("\n") });
      info = null; group = ""; pend = [];
    }
  }
  return entries;
}

/* ===== Construir / leer .vx ===== */
function buildVx(meta, m3u) {
  let body = m3u.trim();
  if (!body.startsWith("#EXTM3U")) body = "#EXTM3U\n" + body;
  const n = parseM3U(body).length;
  const lines = [((MAGIC) + " " + (VERSION))];
  for (const k of FIELDS) lines.push(((k) + ": " + ((meta[k] || "").replace(/\s*\r?\n\s*/g, " "))));
  lines.push(("Entries: " + (n)), SEP, body, "");
  return lines.join("\n");
}
function parseVx(text) {
  const lines = text.replace(/^\uFEFF/, "").split(/\r?\n/);
  const h = (lines[0] || "").match(new RegExp("^" + MAGIC + "\\s+(\\S+)"));
  if (!h) throw new Error(("No es un archivo .vx válido: la primera línea debe empezar por \"" + (MAGIC) + "\"."));
  const meta = { Version: h[1] }; let i = 1;
  for (; i < lines.length && lines[i].trim() !== SEP; i++) {
    const k = lines[i].indexOf(":"); if (k > 0) meta[lines[i].slice(0, k).trim()] = lines[i].slice(k + 1).trim();
  }
  if (i >= lines.length) throw new Error(("Falta el separador \"" + (SEP) + "\" entre la cabecera y el M3U."));
  const m3u = lines.slice(i + 1).join("\n").trim();
  return { meta, m3u, entries: parseM3U(m3u), raw: text };
}

/* ===== Utilidades ===== */
function download(name, text, type) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([text], { type: type + ";charset=utf-8" }));
  a.download = name; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
const slug = s => (s || "lista").toLowerCase().replace(/[^\w-]+/g, "_").replace(/^_+|_+$/g, "") || "lista";
const readFile = f => new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(r.result); r.onerror = rej; r.readAsText(f); });
const getMeta = () => { const m = { Created: new Date().toISOString() }; FIELDS.forEach(k => { const e = $("m-" + k); if (e) m[k] = e.value; }); return m; };
const say = (id, t, cls) => { $(id).textContent = t; $(id).className = "msg " + (cls || ""); };

/* ===== Pestañas ===== */
function show(v) {
  ["create", "view"].forEach(x => { $("s-" + x).classList.toggle("on", x === v); $("t-" + x).classList.toggle("on", x === v); });
}
$("t-create").onclick = () => show("create");
$("t-view").onclick = () => show("view");

/* ===== Crear ===== */
function refreshCount() {
  const t = $("m3u").value.trim();
  if (!t) return say("c-msg", "Contenido vacío.");
  const n = parseM3U(t).length;
  say("c-msg", ((n) + " entrada(s) detectada(s).") + (t.startsWith("#EXTM3U") ? "" : " Se añadirá #EXTM3U al guardar."), n ? "ok" : "er");
}
$("m3u").oninput = refreshCount;
$("add").onclick = () => {
  const name = $("e-name").value.trim(), url = $("e-url").value.trim();
  if (!name || !url) return say("c-msg", "Nombre y URL son obligatorios.", "er");
  const at = [["tvg-id", $("e-id").value], ["tvg-logo", $("e-logo").value], ["group-title", $("e-group").value]]
    .filter(a => a[1].trim()).map(a => (" " + (a[0]) + "=\"" + (a[1].trim().replace(/"/g, "'")) + "\"")).join("");
  const dur = parseFloat($("e-dur").value); 
  const entry = ("#EXTINF:" + (isNaN(dur) ? -1 : dur) + (at) + "," + (name.replace(/[\r\n]+/g, " ")) + "\n" + (url));
  const ta = $("m3u"); let cur = ta.value.trim();
  if (!cur) cur = "#EXTM3U";
  ta.value = cur + "\n" + entry + "\n";
  ["name", "url", "group", "logo", "id"].forEach(k => $("e-" + k).value = "");
  refreshCount();
};
$("imp").onclick = () => $("m3uFile").click();
$("m3uFile").onchange = async e => {
  const f = e.target.files[0]; if (!f) return;
  $("m3u").value = await readFile(f); refreshCount(); e.target.value = "";
};
$("clr").onclick = () => { if (confirm("¿Vaciar el contenido?")) { $("m3u").value = ""; refreshCount(); } };
$("dl").onclick = () => {
  if (!parseM3U($("m3u").value).length) return say("c-msg", "No hay entradas válidas para guardar.", "er");
  const meta = getMeta();
  download(slug(meta.Title) + ".vx", buildVx(meta, $("m3u").value), "text/plain");
};
$("prev").onclick = () => {
  if (!parseM3U($("m3u").value).length) return say("c-msg", "No hay entradas válidas.", "er");
  fileInfo = { name: "(creado en la web, sin guardar)", size: 0, when: new Date().toLocaleString() }; render(parseVx(buildVx(getMeta(), $("m3u").value))); show("view");
};

/* ===== Reproductor ===== */
let idx = -1, playAll = false, tok = 0;
const vid = $("vid"), libs = {};
const LIBS = { hls: ["https://cdn.jsdelivr.net/npm/hls.js@1.5.17/dist/hls.min.js", "Hls"],
               ts:  ["https://cdn.jsdelivr.net/npm/mpegts.js@1.7.3/dist/mpegts.js", "mpegts"] };
function lib(k) {
  const [src, g] = LIBS[k];
  if (window[g]) return Promise.resolve(window[g]);
  return libs[k] || (libs[k] = new Promise((ok, ko) => {
    const s = document.createElement("script"); s.src = src;
    s.onload = () => ok(window[g]);
    s.onerror = () => { delete libs[k]; ko(new Error("no se pudo cargar la librería (¿sin conexión?)")); };
    document.head.appendChild(s);
  }));
}
const mkCtx = v => ({ v: v, eng: null });          // un <video> + su motor (hls/mpegts)
const main = mkCtx(vid);
function destroy(c) {
  if (c.eng) { try { c.eng.destroy(); } catch (_) {} c.eng = null; }
  c.v.pause(); c.v.removeAttribute("src"); c.v.load();
}
const sleep = ms => new Promise(r => setTimeout(r, ms));
const withTimeout = (p, ms) => new Promise((ok, ko) => {
  const t = setTimeout(() => ko(new Error("tiempo de espera agotado")), ms);
  p.then(v => { clearTimeout(t); ok(v); }, e => { clearTimeout(t); ko(e); });
});
function applyQ(h) { const n = h.levels ? h.levels.length : 0; if (n > 1 && cfg.q !== "auto") h.currentLevel = cfg.q === "max" ? n - 1 : 0; }
const engines = {
  native: (url, c) => new Promise((ok, ko) => {
    const v = c.v;
    const off = () => { v.removeEventListener("loadeddata", good); v.removeEventListener("error", bad); };
    const good = () => { off(); ok(); }, bad = () => { off(); ko(new Error("formato no soportado")); };
    v.addEventListener("loadeddata", good); v.addEventListener("error", bad); v.src = url;
  }),
  hls: async (url, c) => {
    const Hls = await lib("hls"); if (!Hls.isSupported()) throw new Error("HLS no soportado");
    await new Promise((ok, ko) => {
      const h = c.eng = new Hls();
      h.on(Hls.Events.MANIFEST_PARSED, () => { applyQ(h); ok(); });
      h.on(Hls.Events.ERROR, (_, d) => d.fatal && ko(new Error(d.details)));
      h.loadSource(url); h.attachMedia(c.v);
    });
  },
  ts: async (url, c) => {
    const M = await lib("ts"); if (!M.isSupported()) throw new Error("MPEG-TS no soportado");
    await new Promise((ok, ko) => {
      const p = c.eng = M.createPlayer({ type: "mpegts", isLive: true, url: url });
      p.on(M.Events.MEDIA_INFO, () => ok());
      p.on(M.Events.ERROR, (t, d) => ko(new Error(d || t)));
      p.attachMediaElement(c.v); p.load();
    });
  }
};
const HINTS = { 401: "Usuario/clave rechazados.",
  403: "El proveedor bloquea la petición (posible bloqueo de IPs de Cloudflare, credenciales o límite de conexiones).",
  404: "La ruta no existe: prueba añadir .ts o .m3u8 al final de la URL.",
  502: "El Worker no pudo conectar con el servidor (puerto, IP directa o dominio caído).",
  530: "El dominio de la URL no existe en el DNS.", 458: "Servidor con acceso restringido.", 509: "Límite de conexiones del servicio." };
// Espera a que la imagen/audio AVANCE de verdad (no basta con que cargue)
async function waitPlaying(c, ms, cancelled) {
  const a = c.v.currentTime, t0 = Date.now();
  while (Date.now() - t0 < ms) {
    if (cancelled()) return false;
    if (!c.v.paused && c.v.readyState >= 2 && c.v.currentTime - a > 0.3) return true;
    await sleep(250);
  }
  return false;
}
// Abre una URL en el contexto c. Devuelve { ok } | { cancelled } | { ok:false, short, msg }
async function tryOpen(u, c, o) {
  const dead = (short, msg) => ({ ok: false, short: short, msg: msg || short });
  if (!/^https?:\/\//i.test(u)) {
    const pr = u.split(":")[0];
    return dead(pr + ":// no soportado", "El navegador no soporta enlaces " + pr + ":// . Usa VLC para este tipo de URL.");
  }
  const path = u.split(/[?#]/)[0].toLowerCase(), v = c.v;
  let order;
  if (/\.m3u8$/.test(path)) order = v.canPlayType("application/vnd.apple.mpegurl") ? ["native", "hls"] : ["hls", "native"];
  else if (/\.(ts|m2ts)$/.test(path)) order = ["ts"];
  else if (/\.(mp4|m4v|webm|ogv|mov|mp3|aac|m4a|ogg|oga|opus|wav|flac)$/.test(path)) order = ["native"];
  else order = ["native", "hls", "ts"];            // URL sin extensión: probar todo
  const px = $("useProxy").checked;
  const src = px ? new URL("/proxy?url=" + encodeURIComponent(u), location.href).href : u;
  if (px) {                                        // comprobación previa: código HTTP real
    const ac = new AbortController();
    try {
      const r = await withTimeout(fetch(src, { signal: ac.signal }), o.ms);
      const txt = r.ok ? "" : (await r.text()).slice(0, 300);
      ac.abort();
      if (o.cancelled()) return { cancelled: true };
      if (!r.ok) return dead(r.status === 530 ? "dominio no existe (DNS)" : r.status === 502 ? "no conecta" : "HTTP " + r.status,
        "El servidor respondió " + r.status + ". " + (HINTS[r.status] || "") + " " + txt);
    } catch (err) {
      ac.abort();
      if (o.cancelled()) return { cancelled: true };
      return dead(/espera/.test(err.message) ? "timeout" : "proxy sin respuesta", "El proxy no respondió: " + err.message);
    }
  }
  const errs = [];
  for (const k of order) {
    if (o.cancelled()) return { cancelled: true };
    if (o.status) o.status("Cargando (" + k + ")…");
    try {
      await withTimeout(engines[k](src, c), o.ms);
      if (o.cancelled()) return { cancelled: true };
      v.muted = !!o.muted;
      try { await v.play(); }
      catch (err) {
        if (err.name === "AbortError") return { cancelled: true };
        if (err.name === "NotAllowedError") return { ok: true, note: "Pulsa play en el reproductor." };
        throw err;
      }
      if (await waitPlaying(c, Math.min(o.ms, 8000), o.cancelled)) return { ok: true };
      if (o.cancelled()) return { cancelled: true };
      throw new Error("carga pero la imagen/audio no avanza");
    } catch (err) {
      errs.push(k + ": " + err.message);
      if (o.cancelled()) return { cancelled: true };
      destroy(c);
    }
  }
  return dead("no reproduce", "No se pudo reproducir → " + errs.join(" | ") +
    ". Causas típicas: CORS, códec no soportado (H.265/AC3), enlace caído o servidor que exige otro User-Agent.");
}
function stop() {
  tok++; destroy(main); idx = -1; playAll = false;
  $("now").textContent = "Elige una entrada con ▶"; say("p-msg", "");
  if (cur) rows();
}
async function play(i) {
  const e = cur && cur.entries[i]; if (!e) return;
  const my = ++tok; destroy(main); idx = i; rows();
  $("now").textContent = (i + 1) + "/" + cur.entries.length + " · " + e.name;
  say("p-msg", "Cargando…");
  const r = await tryOpen(e.url.trim(), main, { ms: 12000, muted: false, cancelled: () => my !== tok, status: t => say("p-msg", t) });
  if (r.cancelled || my !== tok) return;
  if (r.ok) say("p-msg", r.note || ""); else say("p-msg", r.msg, "er");
}
vid.onended = () => { if (playAll && cur && idx + 1 < cur.entries.length) play(idx + 1); };
$("rows").onclick = e => { const b = e.target.closest(".pb"); if (b) { playAll = false; playAt(+b.dataset.i); } };
$("pPrev").onclick = () => idx > 0 && play(idx - 1);
$("pNext").onclick = () => cur && idx + 1 < cur.entries.length && play(idx + 1);

if (location.protocol.startsWith("http"))
  fetch("/ping").then(r => r.text()).then(t => {
    if (t === "vx-proxy") { $("useProxy").disabled = false; $("useProxy").checked = true; $("px-note").textContent = "Proxy local activo."; }
  }).catch(() => {});

/* ===== Visualizar ===== */
let cur = null, tab = "m3u";
function render(d) {
  stop(); stopFlag = true; cur = d; $("result").hidden = false; say("v-msg", "");
  $("meta").innerHTML = Object.entries(d.meta).map(([k, v]) => ("<div><b>" + (esc(k)) + "</b>" + (esc(v) || "—") + "</div>")).join("");
  $("cnt").textContent = d.entries.length; $("filter").value = ""; rows(); code(); save(d.raw); gMax = 40; drawGuide();
}
function rows() {
  const q = $("filter").value.toLowerCase(), sf = $("stFilter").value;
  $("rows").innerHTML = cur.entries.map((e, i) => ({ e, i }))
    .filter(({ e }) => !q || (e.name + e.group + e.url + e.id).toLowerCase().includes(q))
    .filter(({ e }) => sf === "all" || e.st === sf).slice(0, 2000)
    .map(({ e, i }) => ("<tr class=\"" + (i === idx ? "cur" : "") + "\"><td><button class=\"pb\" data-i=\"" + (i) + "\" title=\"Reproducir\">▶</button></td><td>" + (i + 1) + "</td><td>" + (esc(e.name)) + "</td><td>" + (esc(e.group)) + "</td><td>" + (esc(e.id)) + "</td><td title=\"" + (esc(e.url)) + "\">" + (esc(e.url)) + "</td><td>" + (stTxt(e)) + "</td></tr>")).join("");
}
function code() {
  $("code").textContent = tab === "m3u" ? cur.m3u : cur.raw;
  $("k-m3u").classList.toggle("on", tab === "m3u"); $("k-vx").classList.toggle("on", tab === "vx");
}
$("filter").oninput = () => cur && rows();
$("stFilter").onchange = () => cur && rows();
$("k-m3u").onclick = () => { tab = "m3u"; cur && code(); };
$("k-vx").onclick = () => { tab = "vx"; cur && code(); };
async function open(f) {
  if (!f) return;
  try { const txt = await readFile(f); fileInfo = { name: f.name, size: f.size, when: new Date().toLocaleString() }; render(parseVx(txt)); say("v-msg", ("Cargado: " + (f.name)), "ok"); }
  catch (err) { $("result").hidden = true; cur = null; say("v-msg", err.message, "er"); }
}
const drop = $("drop");
drop.onclick = () => $("vxFile").click();
$("vxFile").onchange = e => { open(e.target.files[0]); e.target.value = ""; };
["dragenter", "dragover"].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.add("over"); }));
["dragleave", "drop"].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.remove("over"); }));
drop.addEventListener("drop", e => open(e.dataTransfer.files[0]));
$("dlm3u").onclick = () => cur && download(slug(cur.meta.Title) + ".m3u", cur.m3u + "\n", "audio/x-mpegurl");
$("copy").onclick = async () => {
  if (!cur) return;
  try { await navigator.clipboard.writeText(cur.m3u); say("v-msg", "M3U copiado al portapapeles.", "ok"); }
  catch { say("v-msg", "No se pudo copiar; selecciónalo manualmente.", "er"); }
};
$("edit").onclick = () => {
  if (!cur) return;
  FIELDS.forEach(k => { const e = $("m-" + k); if (e) e.value = cur.meta[k] || ""; });
  $("m3u").value = cur.m3u; refreshCount(); show("create");
};
/* ===== Limpiador ===== */
let testing = false, stopFlag = false, tmr = 0;
const stTxt = e => e.st === "ok" ? "✅ viva" : e.st === "dead" ? "<span title=\"" + esc(e.msg || "") + "\">❌ " + esc(e.why || "") + "</span>" : e.st === "wait" ? "…" : "";
function stats() {
  if (!cur) return;
  const c = { ok: 0, dead: 0, wait: 0 };
  cur.entries.forEach(e => { if (c[e.st] !== undefined) c[e.st]++; });
  say("ls", ("✅ " + (c.ok) + " vivas · ❌ " + (c.dead) + " muertas · ⏳ " + (c.wait) + " en cola · " + (cur.entries.length - c.ok - c.dead - c.wait) + " sin probar"));
}
const refresh = () => { if (tmr) return; tmr = setTimeout(() => { tmr = 0; if (cur) { rows(); stats(); paintStatus(); } }, 300); };
$("tRun").onclick = async () => {
  if (!cur || testing) return;
  if (location.protocol === "https:" && !$("useProxy").checked) return say("ls", "Desde https hace falta el proxy activo para probar canales.", "er");
  if (!$("useProxy").checked && !confirm("Sin proxy activo muchos canales fallarán por CORS aunque funcionen. ¿Probar igual?")) return;
  const mine = cur, q = cur.entries.filter(e => e.st !== "ok");
  if (!q.length) return say("ls", "Todos los canales ya están probados y vivos.", "ok");
  q.forEach(e => { e.st = "wait"; }); testing = true; stopFlag = false; let i = 0;
  stop();                                              // detiene el reproductor principal
  const n = Math.max(1, Math.min(4, +$("conc").value || 2)), ms = (+$("tmo").value || 10) * 1000;
  const ctxs = Array.from({ length: n }, () => {
    const v = document.createElement("video"); v.muted = true; v.playsInline = true;
    v.style.cssText = "position:fixed;left:0;top:0;width:4px;height:4px;opacity:0;pointer-events:none";
    document.body.appendChild(v); return mkCtx(v);
  });
  const w = async c => {
    while (!stopFlag && i < q.length) {
      const e = q[i++];
      const r = await tryOpen(e.url.trim(), c, { ms: ms, muted: true, cancelled: () => stopFlag });
      destroy(c);
      if (r.cancelled) { e.st = undefined; continue; }
      e.st = r.ok ? "ok" : "dead"; e.why = r.short || ""; e.msg = r.msg || ""; refresh();
    }
  };
  await Promise.all(ctxs.map(w));
  ctxs.forEach(c => { destroy(c); c.v.remove(); });
  q.forEach(e => { if (e.st === "wait") e.st = undefined; });
  testing = false;
  if (cur === mine) {
    rows(); stats();
    if (!stopFlag && mine.entries.some(e => e.st === "dead")) removeDead();   // ofrece limpiar al terminar
  }
};
$("tStop").onclick = () => { stopFlag = true; };
function rebuild() {
  const d = parseVx(buildVx({ ...cur.meta, Created: new Date().toISOString() },
    "#EXTM3U\n" + cur.entries.map(e => e.block).join("\n")));
  cur.meta = d.meta; cur.m3u = d.m3u; cur.raw = d.raw;
  $("meta").innerHTML = Object.entries(cur.meta).map(([k, v]) => ("<div><b>" + (esc(k)) + "</b>" + (esc(v) || "—") + "</div>")).join("");
  $("cnt").textContent = cur.entries.length; rows(); code(); stats(); save(cur.raw); drawGuide();
}
function removeDead() {
  const n = cur.entries.filter(e => e.st === "dead").length;
  if (!n) return say("ls", "No hay canales muertos marcados. Primero pulsa «Probar reproduciendo».", "er");
  if (!confirm("Terminó la prueba. ¿Quitar " + n + " canal(es) muerto(s) de la lista?")) return;
  stop(); cur.entries = cur.entries.filter(e => e.st !== "dead"); rebuild();
  say("v-msg", n + " canal(es) eliminados. Descarga el .vx limpio más abajo.", "ok");
}
$("tRm").onclick = () => { if (cur && !testing) removeDead(); };
$("tDup").onclick = () => {
  if (!cur || testing) return;
  const seen = new Set(), before = cur.entries.length;
  stop(); cur.entries = cur.entries.filter(e => !seen.has(e.url) && seen.add(e.url)); rebuild();
  say("v-msg", before === cur.entries.length ? "No había duplicadas." : ((before - cur.entries.length) + " duplicada(s) eliminadas."), "ok");
};
$("dlvx").onclick = () => cur && download(slug(cur.meta.Title) + ".vx", cur.raw, "text/plain");

/* ===== ducktv: guía de canales + estadísticas para nerds ===== */
let fileInfo = null, gMax = 40;
const save = t => { try { localStorage.setItem("ducktv:vx", t); } catch (_) {} };
const host = u => { try { return new URL(u).host; } catch (_) { return "?"; } };
const chKey = e => e.id || e.name.toLowerCase().replace(/\b(hd|fhd|sd|uhd|4k|hevc|h265)\b/g, "").replace(/[^a-z0-9]+/g, "") || e.url;
function logoErr(im) {            // 1º intenta vía proxy (si hay), si no, muestra el texto
  if (!im.dataset.px && $("useProxy").checked) { im.dataset.px = 1; im.src = "/proxy?url=" + encodeURIComponent(im.dataset.u); return; }
  const s = document.createElement("span"); s.className = "lt"; s.textContent = im.dataset.t; im.replaceWith(s);
}
function paintStatus() {
  document.querySelectorAll(".bar[data-i]").forEach(b => { const e = cur && cur.entries[+b.dataset.i]; b.className = "bar " + ((e && e.st) || ""); });
}
function drawGuide() {
  $("empty").hidden = !!cur;
  if (!cur) { $("guide").innerHTML = ""; $("gcount").textContent = ""; return; }
  const E = cur.entries, groups = [...new Set(E.map(e => e.group || "Sin grupo"))].sort(), sel = $("gsel");
  if (sel.dataset.sig !== groups.join("|")) {
    const v = sel.value; sel.dataset.sig = groups.join("|");
    sel.innerHTML = '<option value="all">Todos los grupos</option>' + groups.map(g => "<option>" + esc(g) + "</option>").join("");
    sel.value = groups.includes(v) ? v : "all";
  }
  const map = new Map();
  E.forEach((e, i) => {
    const k = chKey(e); let c = map.get(k);
    if (!c) map.set(k, c = { name: e.name, logo: e.logo, group: e.group || "Sin grupo", ids: [] });
    if (!c.logo) c.logo = e.logo; c.ids.push(i);
  });
  const q = $("q").value.toLowerCase().trim(), gs = sel.value;
  const L = [...map.values()].filter(c => (gs === "all" || c.group === gs) && (!q || (c.name + " " + c.group).toLowerCase().includes(q)));
  $("gcount").textContent = L.length + " canales · " + E.length + " fuentes";
  $("guide").innerHTML = L.slice(0, gMax).map(c => {
    const i0 = c.ids[0], ini = esc(c.name.replace(/[^A-Za-z0-9]/g, "").slice(0, 4).toUpperCase());
    const lg = c.logo ? '<img loading="lazy" referrerpolicy="no-referrer" src="' + esc(c.logo) + '" data-u="' + esc(c.logo) + '" data-t="' + ini + '" onerror="logoErr(this)">' : '<span class="lt">' + ini + "</span>";
    let t = '<div class="gc live" data-i="' + i0 + '">' + bg(i0) + '<span class="badge">EN VIVO</span><span class="ghost">' + ini + "</span><b>" + esc(c.name) + "</b><small>" + esc(c.group) + '</small><i class="bar" data-i="' + i0 + '"></i></div>';
    c.ids.slice(1).forEach((i, k) => { t += '<div class="gc" data-i="' + i + '">' + bg(i) + '<span class="ghost">' + (k + 2) + "</span><b>Fuente " + (k + 2) + "</b><small>" + esc(host(E[i].url)) + '</small><i class="bar" data-i="' + i + '"></i></div>'; });
    [["Grupo", c.group], ["Servidor", host(E[i0].url)], ["tvg-id", E[i0].id || "—"]].forEach(x => { t += '<div class="gc info"><small>' + x[0] + "</small><b>" + esc(x[1]) + "</b></div>"; });
    return '<div class="crow"><div class="clogo"><div class="lg">' + lg + "</div>" + esc(c.name) + '</div><div class="cards">' + t + "</div></div>";
  }).join("") + (L.length > gMax ? '<div style="text-align:center;padding:14px"><button class="s" id="more">Mostrar más (' + (L.length - gMax) + " restantes)</button></div>" : "");
  paintStatus();
}
function playAt(i) { $("pl").classList.add("on"); play(i); }
function closePl() { stop(); $("pl").classList.remove("on"); }
function nerd() {
  const box = $("nstats");
  if (!cur) { box.innerHTML = '<div class="card">Todavía no hay lista cargada.</div>'; return; }
  const E = cur.entries, H = {}, P = {}, LH = {}, seen = new Set(); let wl = 0, wi = 0, dup = 0;
  E.forEach(e => {
    try { const p = new URL(e.url).protocol; P[p] = (P[p] || 0) + 1; } catch (_) {}
    const h = host(e.url); H[h] = (H[h] || 0) + 1;
    if (e.logo) { wl++; const l = host(e.logo); LH[l] = (LH[l] || 0) + 1; }
    if (e.id) wi++; if (seen.has(e.url)) dup++; seen.add(e.url);
  });
  const top = (o, n) => Object.entries(o).sort((a, b) => b[1] - a[1]).slice(0, n).map(x => esc(x[0]) + " <b>(" + x[1] + ")</b>").join("<br>") || "—";
  const c = { ok: 0, dead: 0 }; E.forEach(e => { if (c[e.st] !== undefined) c[e.st]++; });
  const kv = [["Archivo", esc(fileInfo ? fileInfo.name : "—")], ["Tamaño", fileInfo ? (fileInfo.size / 1024).toFixed(1) + " KB" : "—"],
    ["Cargado", esc(fileInfo ? fileInfo.when : "—")], ["Versión .vx", esc(cur.meta.Version || "?")], ["Links (entradas)", E.length],
    ["Canales en la guía", new Set(E.map(chKey)).size], ["Grupos", new Set(E.map(e => e.group || "Sin grupo")).size],
    ["Con logo", wl + " / " + E.length], ["Con tvg-id", wi + " / " + E.length], ["URLs duplicadas", dup], ["Protocolos", top(P, 4)],
    ["Proxy", $("useProxy").checked ? "activo · " + esc(location.origin) + "/proxy" : "no activo"], ["Vivas / muertas", c.ok + " / " + c.dead]];
  box.innerHTML = '<div class="card"><h2>Resumen</h2><div class="meta">' + kv.map(x => "<div><b>" + x[0] + "</b>" + x[1] + "</div>").join("") + "</div></div>" +
    '<div class="card"><h2>¿De dónde sale cada dato?</h2><div class="msg" style="line-height:1.7;font-size:14px;color:var(--tx)">' +
    "• <b>Nombre</b>: texto después de la última coma de la línea <code>#EXTINF</code>.<br>" +
    "• <b>Logo</b>: atributo <code>tvg-logo</code> del <code>#EXTINF</code>. Se descarga directo desde esa URL; si el navegador la bloquea se reintenta vía proxy, y si falla se muestra el texto.<br>" +
    "• <b>Grupo</b>: atributo <code>group-title</code> (o <code>#EXTGRP</code>). <b>tvg-id</b>: atributo <code>tvg-id</code>.<br>" +
    "• <b>Link del stream</b>: la línea que sigue al <code>#EXTINF</code>.<br>" +
    "• <b>Filas de la guía</b>: una por tvg-id (o por nombre sin HD/FHD/4K); cada link extra del mismo canal aparece como «Fuente N».<br>" +
    "• <b>No hay EPG</b>: las tarjetas no son programas; son el en vivo, las fuentes y datos del canal.<br>" +
    "• <b>Barra de color</b> de cada tarjeta: resultado del Limpiador (verde viva, roja muerta, amarilla en cola).<br>" +
    "• <b>Reproducción</b>: nativo del navegador, hls.js o mpegts.js (cargados desde cdn.jsdelivr.net), pasando por /proxy si está activo.<br>" +
    "• <b>Lista guardada</b>: localStorage de este navegador (clave <code>ducktv:vx</code>); por eso la guía aparece al abrir." +
    '</div></div><div class="card"><h2>Servidores</h2><div class="grid"><div><label>Top streams</label>' + top(H, 10) +
    "</div><div><label>Servidores de logos</label>" + top(LH, 6) + "</div></div></div>" +
    '<div class="card"><h2>Bloque original del canal en reproducción</h2>' + (idx >= 0 && E[idx] ? "<pre>" + esc(E[idx].block) + "</pre>" : '<span class="msg">Reproduce un canal para ver su #EXTINF y su link.</span>') + "</div>";
}
$("tNerd").onclick = () => { nerd(); $("nerd").classList.add("on"); };
$("nClose").onclick = () => $("nerd").classList.remove("on");
$("pClose").onclick = closePl;
$("tOpen").onclick = () => $("vxFile").click();
$("back").onclick = () => show("view");
$("q").oninput = () => { gMax = 40; drawGuide(); };
$("gsel").onchange = () => { gMax = 40; drawGuide(); };
$("guide").onclick = e => {
  if (e.target.closest("#more")) { gMax += 40; return drawGuide(); }
  const g = e.target.closest(".gc[data-i]"); if (g) { playAll = false; playAt(+g.dataset.i); }
};
document.addEventListener("keydown", e => { if (e.key === "Escape") { if ($("pl").classList.contains("on")) closePl(); else $("nerd").classList.remove("on"); } });
/* ===== ducktv: fondos, reproductor moderno, configuración, legacy ===== */
const BGI = ["https://cdn.mitvstatic.com/programs/fallback_other_l_l.jpg", "https://cdn.mitvstatic.com/programs/ar_a-confirmar_l_l.jpg"];
const bg = i => '<img class="cbg" loading="lazy" referrerpolicy="no-referrer" src="' + BGI[i % 4 === 0 ? 1 : 0] + '" onerror="this.remove()">';
const cfg = Object.assign({ legacy: false, q: "auto", hide: true, stats: false }, (() => { try { return JSON.parse(localStorage.getItem("ducktv:cfg")) || {}; } catch (_) { return {}; } })());
const saveCfg = () => { try { localStorage.setItem("ducktv:cfg", JSON.stringify(cfg)); } catch (_) {} };
const pw = $("pw"); let hideT = 0;
const note = t => { say("p-msg", t); setTimeout(() => say("p-msg", ""), 2000); };
function applyCfg() {
  document.body.classList.toggle("legacy", !!cfg.legacy); vid.controls = !!cfg.legacy; $("pnerd").hidden = !cfg.stats;
  $("cLegacy").textContent = "Legacy: " + (cfg.legacy ? "ACTIVADO (pulsa para volver al modo moderno)" : "desactivado (pulsa para activar)");
}
const qName = l => l.height ? l.height + "p" : Math.round(l.bitrate / 1000) + "k";
function qBuild() {
  const h = main.eng, m = $("qm");
  if (!h || !h.levels) { m.innerHTML = '<div class="qi">Calidad única (solo HLS multi-calidad permite cambiar)</div>'; return; }
  m.innerHTML = '<div class="qi' + (h.autoLevelEnabled ? " on" : "") + '" data-l="-1">Auto</div>' +
    h.levels.map((l, i) => i).reverse().map(i => '<div class="qi' + (!h.autoLevelEnabled && h.currentLevel === i ? " on" : "") + '" data-l="' + i + '">' + qName(h.levels[i]) + "</div>").join("");
}
function setQ(l) { const h = main.eng; if (!h || !h.levels) return; h.currentLevel = l; $("pQ").textContent = "⚙ " + (l < 0 ? "Auto" : qName(h.levels[l])); }
function cycleQ() {
  const h = main.eng; if (!h || !h.levels || h.levels.length < 2) return note("Este stream tiene calidad única.");
  setQ(h.autoLevelEnabled ? h.levels.length - 1 : h.currentLevel > 0 ? h.currentLevel - 1 : -1);
}
$("pQ").onclick = e => { e.stopPropagation(); qBuild(); $("qm").classList.toggle("on"); };
$("qm").onclick = e => { const d = e.target.closest("[data-l]"); if (d) setQ(+d.dataset.l); $("qm").classList.remove("on"); };
const pToggle = () => { if (vid.paused) vid.play().catch(() => {}); else vid.pause(); };
function showCtl() { pw.classList.add("show"); clearTimeout(hideT); if (cfg.hide) hideT = setTimeout(() => { if (!$("qm").classList.contains("on")) pw.classList.remove("show"); }, 3000); }
function fsToggle() { if (document.fullscreenElement) document.exitFullscreen(); else if (pw.requestFullscreen) pw.requestFullscreen(); }
function syncVol() { $("pMute").textContent = vid.muted || !vid.volume ? "🔇" : "🔊"; $("pVol").value = vid.muted ? 0 : vid.volume; }
pw.onmousemove = showCtl;
pw.onclick = e => { if (e.target === vid && !cfg.legacy) pToggle(); showCtl(); };
pw.ondblclick = e => { if (e.target === vid && !cfg.legacy) fsToggle(); };
vid.addEventListener("play", () => { $("pPlay").textContent = "⏸"; });
vid.addEventListener("pause", () => { $("pPlay").textContent = "▶"; });
vid.addEventListener("loadeddata", () => { const h = main.eng; $("pQ").textContent = "⚙ " + (h && h.levels && !h.autoLevelEnabled ? qName(h.levels[h.currentLevel]) : "Auto"); });
$("pPlay").onclick = pToggle; $("pFs").onclick = fsToggle;
$("pMute").onclick = () => { vid.muted = !vid.muted; syncVol(); };
$("pVol").oninput = e => { vid.volume = +e.target.value; vid.muted = false; syncVol(); };
$("pPip").onclick = () => { if (document.pictureInPictureElement) document.exitPictureInPicture(); else if (vid.requestPictureInPicture) vid.requestPictureInPicture().catch(() => {}); };
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && $("cfgm").classList.contains("on")) { $("cfgm").classList.remove("on"); return; }
  if (!$("pl").classList.contains("on") || (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) && e.target.type !== "range")) return;
  const k = e.key.toLowerCase(); let used = true;
  if (k === " " || k === "k") pToggle(); else if (k === "m") { vid.muted = !vid.muted; syncVol(); } else if (k === "f") fsToggle();
  else if (k === "arrowup") { vid.volume = Math.min(1, vid.volume + 0.1); syncVol(); } else if (k === "arrowdown") { vid.volume = Math.max(0, vid.volume - 0.1); syncVol(); }
  else if (k === "arrowright" || k === "arrowleft") { if (isFinite(vid.duration) && vid.seekable.length) vid.currentTime += k === "arrowright" ? 10 : -10; else used = false; }
  else if (k === "n" || k === "pagedown") $("pNext").click(); else if (k === "p" || k === "pageup") $("pPrev").click();
  else if (k === "q") cycleQ(); else if (k === "i") { cfg.stats = !cfg.stats; saveCfg(); applyCfg(); $("cstats").checked = cfg.stats; } else used = false;
  if (used) { e.preventDefault(); showCtl(); }
});
setInterval(() => {                       // estadísticas dentro del reproductor
  if (!cfg.stats || !$("pl").classList.contains("on")) return;
  const h = main.eng, q = vid.getVideoPlaybackQuality ? vid.getVideoPlaybackQuality() : {}, hl = h && h.levels;
  const buf = vid.buffered.length ? (vid.buffered.end(vid.buffered.length - 1) - vid.currentTime).toFixed(1) : "0";
  $("pnerd").textContent = ["Motor: " + (h ? (hl ? "hls.js" : "mpegts.js") : "nativo"), "Resolución: " + vid.videoWidth + "x" + vid.videoHeight,
    hl ? "Nivel: " + h.currentLevel + "/" + (hl.length - 1) + " · BW est.: " + Math.round((h.bandwidthEstimate || 0) / 1000) + " kbps" : "",
    "Buffer: " + buf + " s", "Frames perdidos: " + (q.droppedVideoFrames || 0) + "/" + (q.totalVideoFrames || 0), "Proxy: " + ($("useProxy").checked ? "sí" : "no")].filter(Boolean).join("\n");
}, 1000);
$("tCfg").onclick = () => $("cfgm").classList.add("on");
$("cClose").onclick = () => $("cfgm").classList.remove("on");
$("cmenu").onclick = e => { const b = e.target.closest(".cm"); if (!b) return; document.querySelectorAll(".cm,.cp").forEach(x => x.classList.remove("on")); b.classList.add("on"); $("cp-" + b.dataset.p).classList.add("on"); };
$("cq").value = cfg.q; $("cq").onchange = () => { cfg.q = $("cq").value; saveCfg(); };
$("chide").checked = cfg.hide; $("chide").onchange = () => { cfg.hide = $("chide").checked; saveCfg(); };
$("cstats").checked = cfg.stats; $("cstats").onchange = () => { cfg.stats = $("cstats").checked; saveCfg(); applyCfg(); };
$("cLegacy").onclick = () => { cfg.legacy = !cfg.legacy; saveCfg(); applyCfg(); };
$("cNerd").onclick = () => $("tNerd").click();
$("cWipe").onclick = () => { if (confirm("¿Borrar la lista guardada en este navegador?")) { try { localStorage.removeItem("ducktv:vx"); } catch (_) {} location.reload(); } };
$("pTest").onclick = async () => { try { const t = await (await fetch("/ping")).text(); say("px-note", t === "vx-proxy" ? "Proxy responde ✔" : "Respuesta inesperada", t === "vx-proxy" ? "ok" : "er"); } catch (_) { say("px-note", "No hay proxy en esta dirección", "er"); } };
applyCfg();

try { const t = localStorage.getItem("ducktv:vx"); if (t) { fileInfo = { name: "(guardado en este navegador)", size: t.length, when: "—" }; render(parseVx(t)); } else drawGuide(); }
catch (_) { drawGuide(); }
`;

// ---------- 4) Ensamblado de la página ----------
const PAGE = "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n<meta charset=\"utf-8\">\n" +
  "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>ducktv</title><link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600&display=swap'>\n" +
  "<style>" + CSS + "</style>\n</head>\n<body>\n" + BODY + "\n<script>" + CLIENT + "</script>\n</body>\n</html>\n";

// ---------- 5) Proxy de streams + rutas ----------
const UA = "VLC/3.0.20 LibVLC/3.0.20";
const CORS = { "Access-Control-Allow-Origin": "*", "Cache-Control": "no-store" };
const px = u => "/proxy?url=" + encodeURIComponent(u);

function rewrite(text, base) {
  return text.split(/\r?\n/).map(line => {
    const s = line.trim();
    if (!s) return line;
    if (s.startsWith("#"))
      return line.replace(/URI="([^"]+)"/g, (_, u) => 'URI="' + px(new URL(u, base).href) + '"');
    try { return px(new URL(s, base).href); } catch { return line; }
  }).join("\n") + "\n";
}

async function proxy(req, url) {
  const target = url.searchParams.get("url") || "";
  if (!/^https?:\/\//i.test(target)) return new Response("URL no valida", { status: 400, headers: CORS });
  const h = new Headers({ "User-Agent": UA });
  const range = req.headers.get("Range"); if (range) h.set("Range", range);
  let r;
  try { r = await fetch(target, { headers: h, redirect: "follow" }); }
  catch (e) { return new Response("Worker no pudo conectar con " + target + "\n" + e.message, { status: 502, headers: CORS }); }
  if (!r.body) return new Response(null, { status: r.status, headers: CORS });

  const reader = r.body.getReader();
  const first = await reader.read();
  const head = first.value ? new TextDecoder().decode(first.value.slice(0, 7)) : "";
  const out = new Headers(CORS);
  for (const k of ["content-type", "content-range", "accept-ranges"]) if (r.headers.get(k)) out.set(k, r.headers.get(k));
  if (/^image\//i.test(r.headers.get("content-type") || "")) out.set("Cache-Control", "public, max-age=86400");   // logos: caché 1 día

  if (head === "#EXTM3U") {                       // lista HLS: reescribir segmentos
    const parts = [first.value]; let n = first.value.length;
    while (n < 5e6) { const c = await reader.read(); if (c.done) break; parts.push(c.value); n += c.value.length; }
    const all = new Uint8Array(n); let o = 0; for (const p of parts) { all.set(p, o); o += p.length; }
    out.set("content-type", "application/vnd.apple.mpegurl");
    return new Response(rewrite(new TextDecoder().decode(all), r.url || target), { status: r.status, headers: out });
  }
  if (r.headers.get("content-length")) out.set("content-length", r.headers.get("content-length"));
  const stream = new ReadableStream({
    start(c) { if (first.value) c.enqueue(first.value); if (first.done) c.close(); },
    async pull(c) { const x = await reader.read(); x.done ? c.close() : c.enqueue(x.value); },
    cancel(reason) { return reader.cancel(reason); }
  });
  return new Response(stream, { status: r.status, headers: out });
}

export default {
  async fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/ping") return new Response("vx-proxy", { headers: CORS });
    if (url.pathname === "/proxy") return proxy(req, url);
    return new Response(PAGE, { headers: { "content-type": "text/html; charset=utf-8" } });
  }
};
