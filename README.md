# WMK Fronteira — Em Ruptura

Jogo experimental de combate sci-fi em terceira pessoa, construído com **HTML, CSS, JavaScript e Three.js**, ambientado em **Khepri-9**.

**Autor e manutenção da versão WMK:** Walney Moreira Klein — walneyk@hotmail.com

> Estado atual: protótipo jogável fornecido pelo mantenedor; ainda sem suíte de testes automatizados. Recursos planejados estão no roadmap, e não devem ser confundidos com recursos implementados.

## História
Os relés de dobra ameaçam as colônias. Escolha uma facção: **Pacto Aurora** (defesa, ataques rápidos) ou **Coro Nébula** (invasão, disparos mais fortes). Destrua três relés, enfrente ondas de interceptores e derrote o **Arconte de Cerco**.

## Recursos presentes no código inicial
- Duas facções com estatísticas distintas;
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
1. Testar o fluxo inteiro no navegador e corrigir defeitos documentados.
2. Modularizar código (entrada, combate, entidades, IA, interface e carregamento).
3. Externalizar configurações em JSON validado.
4. Criar hangar, editor de missões/mapas, modelos independentes e progressão.

Consulte [pesquisa de referências](pesquisa.html) e [roadmap](roadmap.html).

## Direitos e licenças
O repositório ainda não contém licença identificada. **Não atribuir MIT automaticamente a código de terceiros** sem confirmar a origem e as permissões de distribuição. Quando confirmadas, publicar `LICENSE` indicando corretamente autores e direitos aplicáveis.
