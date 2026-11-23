# WMK Fronteira — Em Ruptura

Jogo experimental de combate sci-fi em terceira pessoa, construído com **HTML, CSS, JavaScript e Three.js**, ambientado em **Khepri-9**.

**Autor e manutenção da versão WMK:** Walney Moreira Klein — walneyk@hotmail.com

> Estado atual: protótipo V0.3 com esquadrão experimental multiclasse; ainda sem suíte de testes automatizados. Recursos planejados estão no roadmap, e não devem ser confundidos com recursos implementados.

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
- `index.html` — protótipo original de jogo, concentrado em um arquivo.
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
