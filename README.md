# WMK Fronteira — Em Ruptura

Jogo experimental de combate sci-fi em terceira pessoa, construído com **HTML, CSS, JavaScript e Three.js**, ambientado em **Khepri-9**.

**Autor e manutenção da versão WMK:** Walney Moreira Klein — walneyk@hotmail.com

> Estado atual: protótipo V0.6 com editor de mapas 3D, editor de unidades e esquadrão experimental multiclasse, armamento individual e ordens de IA; ainda sem suíte de testes automatizados. Recursos planejados estão no roadmap, e não devem ser confundidos com recursos implementados.

## História
Os relés de dobra ameaçam as colônias. Escolha uma facção: **Pacto Aurora** (defesa, ataques rápidos) ou **Coro Nébula** (invasão, disparos mais fortes). Destrua três relés, enfrente ondas de interceptores e derrote o **Arconte de Cerco**.

## Recursos presentes no código inicial
- Duas facções com estatísticas distintas;
- Esquadrão V0.3 com **5 unidades diferentes**: comandante mecha, soldado, tanque hover, caça e torre defensiva;
- Configuração individual em [data/units.json](data/units.json): HP, escudo, velocidade, multiplicador de dano, câmera e alcance de IA;
- **Tab** alterna a unidade controlada; **F1** abre o seletor clicável; **1–5** seleciona diretamente;
- Aliados não controlados disparam automaticamente por IA simples e mantêm HP/posição/escudo próprios;
- Caça com movimento horizontal simplificado e subida/descida por **C/X**; não é um modelo aerodinâmico realista;
- Mecha transformável em veículo; movimento em terceira pessoa e mira com mouse;
- Arma de pulso com aquecimento, escudo regenerativo, impulso e cúpula defensiva;
- Três relés objetivos, inimigos, ondas, chefe, pontuação e tela de resultados;
- Cenário com elementos procedurais;
- Importação opcional de modelo **GLB/GLTF** pelo menu, substituindo o visual do mecha; importação não significa sistema completo de animação/transformação de modelos externos.

## Controles
| Tecla | Ação |
| --- | --- |
| W/A/S/D ou setas | Movimento |
| Mouse | Mira |
| Clique esquerdo | Atirar |
| Q | Alternar mecha / veículo |
| Tab | Trocar entre unidades aliadas vivas |
| 1 a 5 | Seleção direta de unidade |
| F1 | Abrir/fechar painel de seleção |
| F2 | Alternar ordens dos aliados: seguir, defender ou atacar |
| C / X | Subir / descer quando assumir o caça |
| Shift | Impulso |
| E | Cúpula defensiva |
| Esc | Pausar |

## Como executar
1. Baixe o repositório ou use `git clone https://github.com/WalneyNF/WMK-Fronteira.git`.
2. Abra a pasta em VS Code e use **Live Server**, ou execute `py -m http.server 8000`.
3. Acesse `http://localhost:8000/`, escolha a facção e clique em **Iniciar campanha**.

A primeira abertura requer conexão à internet para carregar o **Three.js 0.160.0** via CDN. Navegador com WebGL e suporte a JavaScript ES Modules é necessário. O jogo é direcionado a desktop com teclado e mouse.

## Arquivos
- `index.html` — jogo em desenvolvimento, concentrado em um arquivo.
- `editor.html` — editor visual independente com painéis móveis, atributos, armas e prévia 2D conceitual.
- `map-editor.html` — editor 3D de mapas com gizmos, objetos, GLB e exportação JSON.
- `data/maps/khepri9.json` — mapa de exemplo carregado no início de cada partida.
- `pesquisa.html` — estudo de referências e concorrentes.
- `roadmap.html` — plano de versões e prioridades.

## Próximos passos
1. Testar o fluxo inteiro no navegador, especialmente o novo sistema de troca entre mechas, e corrigir defeitos documentados.
2. Modularizar código (entrada, combate, entidades, IA, interface e carregamento).
3. Externalizar configurações em JSON validado.
4. Evoluir os cinco tipos de unidade para animações, armas e controles próprios; depois criar hangar, editor de missões/mapas e progressão.

Consulte [pesquisa de referências](pesquisa.html) e [roadmap](roadmap.html).

## Licença MIT e créditos

**Copyright © 2026 Walney Moreira Klein** — [walneyk@hotmail.com](mailto:walneyk@hotmail.com).

O projeto é disponibilizado sob a **licença MIT**. Consulte o texto integral em [LICENSE](LICENSE). A licença permite uso, modificação, redistribuição e uso comercial, desde que o aviso de copyright e a licença acompanhem as cópias ou partes substanciais.

**Atenção à proveniência:** a licença MIT aplica-se apenas a partes do projeto sobre as quais o titular possui direitos ou autorização para sublicenciar. A biblioteca Three.js, modelos GLB importados e outros componentes de terceiros conservam suas respectivas licenças. Caso a versão inicial tenha código de terceiros, é necessário conferir as condições originais e preservar os avisos correspondentes.

## Ideias para expansão

A prioridade é manter a jogabilidade estável e criar um sistema genérico de unidades, permitindo que o jogador troque, em tempo real, entre mechas, caças, veículos hover, soldados e torretas sem reiniciar a missão. Consulte [ideias.html](ideias.html) e [roadmap.html](roadmap.html).

## Notas da V0.3 experimental

- Execute por servidor HTTP local: abrir o HTML diretamente como `file://` pode impedir o carregamento de `data/units.json`.
- O jogo usa configurações internas de segurança caso o JSON não carregue; confira o console.
- Os modelos das classes ainda são geométricos/procedurais; a importação GLB continua legada e não configura automaticamente todas as classes.
- O caça tem altitude controlável, mas ainda não possui física de voo, estol, decolagem/pouso ou combate aéreo dedicado.
- A torre é uma unidade estática com disparo por mira da câmera; ainda não há turret tracking e rotação automática de torre independente.
- A versão requer validação manual no navegador: a presença das funções no repositório não comprova a ausência de problemas em execução.

## V0.4 — armas e ordens de esquadrão

Cada classe possui armamento independente via `data/units.json`. Os aliados usam as mesmas características de tiro, porém com dano reduzido pela IA. As ordens **seguir**, **defender** e **atacar** alteram o deslocamento básico dos bots móveis; a torre não se desloca. A inteligência artificial ainda usa decisões simples por distância e não possui navegação com desvio de obstáculos.

**Teste recomendado:** com a campanha iniciada, pressione `F2` várias vezes, alterne entre as cinco classes e observe cadência e calor no HUD. Verifique também a persistência de HP e escudo ao alternar unidades. É uma versão experimental; nenhuma suíte de testes de navegador foi executada nesta atualização.

## Verificação estática

Com Node.js instalado, na pasta do projeto execute:

```powershell
node tests/verify.mjs
```

O script confere sintaxe JavaScript, estrutura das cinco unidades, armas e elementos essenciais do HUD. **Não substitui testes em navegador WebGL**. Recomenda-se também verificar a campanha jogável em servidor HTTP (`py -m http.server 8000`).

## V0.5 — Editor de unidades e armamentos

Abra [editor.html](editor.html) no mesmo servidor HTTP do jogo. O editor permite editar os cinco tipos existentes, duplicar unidades, ajustar estatísticas, armas, alcance de IA e câmera, exportar/importar `units.json`, salvar os dados no navegador e arrastar/redimensionar painéis.

**Fluxo para usar as mudanças no jogo:**

1. Abra `http://localhost:8000/editor.html` e edite as unidades.
2. Clique em **Exportar units.json**.
3. Copie o arquivo exportado para `data/units.json`, substituindo o existente (faça backup primeiro).
4. Recarregue a página `index.html` e inicie uma campanha nova.

O jogo suporta **5 a 24 unidades no catálogo**, exige que a primeira seja mecha e que todos os IDs sejam únicos. No editor é possível duplicar além do limite, mas o jogo rejeitará catálogos fora dessas regras; não são mudanças em tempo real na partida. O desenho do editor é uma **prévia 2D conceitual**, não renderização real do modelo GLB. Os painéis têm posição salva no navegador ao serem arrastados; dimensões alteradas por redimensionamento podem precisar ser salvas novamente ao mover o painel.

**ZIP da versão corrente:** [Baixar branch main do GitHub](https://github.com/WalneyNF/WMK-Fronteira/archive/refs/heads/main.zip). O arquivo é produzido pelo próprio GitHub a partir dos arquivos publicados na branch principal.

## V0.6 — Editor de mapas 3D

Abra `http://localhost:8000/map-editor.html`. A ferramenta usa Three.js, OrbitControls e TransformControls, oferece painéis arrastáveis/redimensionáveis, seleção por clique, modos de movimentação, rotação, escala, duplicação e exclusão de objetos. Inclui edifício, rocha, torre, plataforma e importação **GLB apenas para prévia de sessão**.

### Teclas

| Tecla | Operação |
| --- | --- |
| G | Mover objeto selecionado |
| R | Rotacionar |
| S | Escalonar |
| Ctrl+D | Duplicar objeto |
| Delete | Excluir objeto |
| Mouse | Seleção, órbita e gizmos |

### Usar o mapa no jogo

1. Abra o editor e modifique os objetos.
2. Clique em **Exportar mapa** e salve como `khepri9.json`.
3. Substitua `data/maps/khepri9.json` pelo arquivo exportado.
4. Recarregue `index.html` e inicie uma nova campanha.

O botão **Salvar layout** também persiste o mapa e o posicionamento dos painéis em `localStorage` do navegador, exclusivamente para o editor. A partida carrega o arquivo JSON do projeto, **não** o armazenamento local.

Modelos GLB de arquivos locais não são embutidos no JSON: copie seus modelos para `assets/models/` e mantenha um caminho como `assets/models/modelo.glb` no objeto. O jogo tentará carregar esses arquivos durante a montagem do cenário. Sem o arquivo, o modelo não aparece e o navegador pode exibir erro 404.

**Limitações atuais:** objetos adicionados são cenário visual e ainda não têm colisão física, persistência de estado em partidas nem sistema de missões. O cenário procedural existente continua sendo montado junto do mapa JSON; portanto alguns objetos podem se sobrepor. Painéis móveis podem sair da área visível caso arrastados além dos limites. Editor de GLB e carregamento de arquivos externos precisam de melhorias de segurança, validação e experiência de uso antes de uma versão estável.

### ZIP mais recente

O GitHub disponibiliza um pacote da branch principal em https://github.com/WalneyNF/WMK-Fronteira/archive/refs/heads/main.zip . O pacote é gerado pelo GitHub e inclui os arquivos atualmente publicados. Recomenda-se um servidor HTTP local para que importações ES Modules e leitura de JSON funcionem.
