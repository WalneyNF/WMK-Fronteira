// WMK Fronteira · verificação estática sem dependências externas
// Executar na raiz do projeto: node tests/verify.mjs
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
const data=JSON.parse(readFileSync(new URL('../data/units.json',import.meta.url),'utf8'));
const match=html.match(/<script type="module">([\s\S]*?)<\/script>/);
assert.ok(match,'Script principal não encontrado');
const code=match[1].replace(/^\s*import\s+.*?;\s*$/gm,'');
new vm.Script(code,{filename:'index.html'});
assert.equal(data.schema_version,2);
assert.equal(data.units.length,5);
const types=['mecha','soldier','hover','fighter','turret'];
assert.deepEqual(data.units.map(unit=>unit.type),types);
const ids=new Set();
for(const unit of data.units){
  assert.ok(!ids.has(unit.id),'ID duplicado: '+unit.id);
  ids.add(unit.id);
  for(const key of ['health','shield','speed','damageMultiplier','cameraDistance','aiRange'])
    assert.ok(Number.isFinite(unit[key])&&unit[key]>=0,'Parâmetro inválido: '+unit.id+'.'+key);
  const weapon=unit.weapon;
  assert.ok(weapon&&weapon.label,'Sem arma: '+unit.id);
  for(const key of ['damage','cooldown','heat','shotSpeed','pellets','spread','range'])
    assert.ok(Number.isFinite(weapon[key])&&weapon[key]>=0,'Arma inválida: '+unit.id+'.'+key);
  assert.ok(weapon.cooldown>=.05&&weapon.shotSpeed>0&&Number.isInteger(weapon.pellets)&&weapon.pellets>=1&&weapon.pellets<=5);
}
for(const id of ['squadHud','unitSelector','unitCards','healthFill','shieldFill','heatFill'])
  assert.ok(html.includes('id="'+id+'"'),'Elemento ausente: '+id);
for(const name of ['loadUnits','fireUnitWeapon','fireWeapon','squadAI','cycleSquadOrder','selectNextUnit','toggleSquadPanel'])
  assert.ok(html.includes('function '+name+'(')||html.includes('async function '+name+'('),'Função ausente: '+name);
const mapEditor=readFileSync(new URL('../map-editor.html',import.meta.url),'utf8');
const mapJson=JSON.parse(readFileSync(new URL('../data/maps/khepri9.json',import.meta.url),'utf8'));
const mapScript=mapEditor.match(/<script type="module">([\\s\\S]*?)<\\/script>/);
assert.ok(mapScript,'Editor de mapas: script não encontrado');
new vm.Script(mapScript[1].replace(/^\\s*import\\s+.*?;\\s*$/gm,''),{filename:'map-editor.html'});
assert.equal(mapJson.schema_version,1);
assert.ok(Array.isArray(mapJson.objects)&&mapJson.objects.length>0);
const mapIds=new Set();
for(const obj of mapJson.objects){
  assert.ok(!mapIds.has(obj.id),'Objeto com ID duplicado: '+obj.id);
  mapIds.add(obj.id);
  assert.ok(['building','rock','tower','platform','glb'].includes(obj.kind));
  for(const key of ['position','rotation','scale'])
    assert.ok(Array.isArray(obj[key])&&obj[key].length===3&&obj[key].every(Number.isFinite));
}
assert.ok(html.includes('href="map-editor.html"'));
assert.ok(html.includes('function addMapElements()'));
console.log('OK: JavaScript válido, 5 unidades, 5 armas, editor de mapas e JSON de cenário.');
console.log('Atenção: não testa renderização WebGL, física, colisões nem jogabilidade no navegador.');
