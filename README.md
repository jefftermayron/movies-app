# 🎬 Movies App (Em Desenvolvimento)

Uma aplicação web para os amantes do cinema explorarem um catálogo atualizado de obras cinematográficas. Este projeto está em fase de construção e atualmente foca na exibição de dados consumidos em tempo real da API do TMDB. 

No futuro, a aplicação evoluirá para um sistema de avaliação, permitindo o gerenciamento pessoal de filmes.

## ✨ Funcionalidades Atuais

* **Catálogo de Filmes:** Integração com a API do TMDB para listar filmes em cartaz e destaques.
* **Exibição de Dados:** Apresentação de pôsteres, títulos e descrição das obras.
* **Interface Responsiva:** Layout customizado com Sass, garantindo boa visualização em diferentes tamanhos de tela (mobile e desktop).

## 🚧 Próximas Funcionalidades (Roadmap)

* [ ] Scroll infinito, para visualização de mais obras.
* [ ] Implementar barra de pesquisa para buscar filmes específicos pelo título.
* [ ] Desenvolver o CRUD completo (Adicionar filmes à lista pessoal, editar e remover).
* [ ] Criar sistema de avaliação (notas e resenhas personalizadas).
* [ ] Visualização detalhada de cada filme em uma página dedicada.

## 🚀 Tecnologias Utilizadas

* **[React](https://reactjs.org/) & [Next.js](https://nextjs.org/):** Framework para a construção da interface, componentes e rotas.
* **[TypeScript](https://www.typescriptlang.org/):** Tipagem estática para um código mais seguro, limpo e previsível.
* **[Sass](https://sass-lang.com/):** Pré-processador CSS para estilização modular e avançada.
* **[Axios](https://axios-http.com/):** Cliente HTTP focado em gerenciar as requisições assíncronas à API.
* **[TMDB API](https://developer.themoviedb.org/docs):** Fonte de dados externa oficial para o catálogo de filmes.

## 📂 Estrutura de Pastas

A arquitetura do projeto foi pensada para facilitar a manutenção:

```text
movies-app/
├── public/            # Imagens, ícones e assets estáticos
├── src/
│   ├── app/           # Rotas principais da aplicação (Next.js App Router)
│   ├── components/    # Componentes React reutilizáveis (Ex: MovieCard, Navbar)
│   ├── services/      # Configuração do Axios e funções de chamada à API
│   ├── styles/        # Arquivos globais e módulos de estilização em Sass (.scss)
│   └── types/         # Definições de tipagem e interfaces do TypeScript
├── .env.local         # Variáveis de ambiente locais (não enviadas ao repositório)
└── package.json       # Gerenciamento de dependências e scripts de execução
```

## ⚙️ Como executar o projeto localmente

Siga os passos abaixo para rodar a aplicação na sua máquina.

### Pré-requisitos
* [Node.js](https://nodejs.org/) instalado em seu computador.
* Uma chave de API gratuita do [The Movie Database (TMDB)](https://www.themoviedb.org/settings/api).

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/jefftermayron/movies-app.git](https://github.com/jefftermayron/movies-app.git)
   ```

2. **Acesse a pasta do projeto no terminal:**
   ```bash
   cd movies-app
   ```

3. **Instale as dependências necessárias:**
   ```bash
   npm install
   ```

4. **Configure as Variáveis de Ambiente:**
   * Crie um arquivo chamado `.env.local` na raiz do projeto.
   * Adicione a sua chave do TMDB conforme o modelo abaixo:
     ```env
     NEXT_PUBLIC_TMDB_API_KEY=sua_chave_aqui
     ```

5. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

6. **Acesse no navegador:**
   Abra [http://localhost:3000](http://localhost:3000) para ver o projeto em funcionamento.

---
Desenvolvido com dedicação por [Jeffter Mayron](https://github.com/jefftermayron).