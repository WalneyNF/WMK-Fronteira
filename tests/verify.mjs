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
console.log('OK: JavaScript sintaticamente válido, 5 unidades, 5 armas, HUD e funções principais.');
console.log('Atenção: não testa renderização WebGL, física, colisões nem jogabilidade no navegador.');
