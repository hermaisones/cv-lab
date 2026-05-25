# CV Lab Starter

Стартер для лабораторной работы: персональный CV → CI/CD → GitHub Pages.

> Я - Матвей, студент СПбПУ, обучаюсь на направлении 02.03.03, увлекаюсь разработкой ПО, хорошо знаю Git, Docker. 

## Стек

- [Vite](https://vitejs.dev/) — dev server + бандлер
- Vanilla JS + HTML + CSS (можешь добавить TS / фреймворк — на свой страх и риск, CI/lint придётся подкрутить)
- ESLint 9 (flat config) — линтер
- GitHub Actions — CI + CD

## Локальный запуск

```bash
npm install
npm run dev      # dev server на http://localhost:5173
npm run lint     # проверить код
npm run build    # собрать в dist/
npm run preview  # посмотреть прод-сборку локально
```

## Структура

```
.
├── .github/workflows/
│   ├── ci.yml        # PR → lint + build
│   └── deploy.yml    # main → GitHub Pages
├── src/
│   └── main.js       # JS-точка входа
├── index.html        # CV здесь
├── style.css
├── eslint.config.js
├── vite.config.js
└── package.json
```

## Что делать

1. Форкни template или используй "Use this template".
2. Сделай репо публичным.
3. **Settings → Pages → Source: GitHub Actions** (важно, без этого деплой не пройдёт).
4. Заведи ветку `feature/my-cv`, перепиши `index.html` / `style.css` под свой CV.
5. Открой PR в `main`. Дождись зелёного CI.
6. Merge. Смотри Actions — должен запуститься deploy.
7. Открой `https://<username>.github.io/<repo>/` — твой CV в проде.

Подробнее — `STUDENT_GUIDE.md`.

## Vibe coding log

- **LLM-ассистент:** Claude
- **2–3 ключевых промпта:**
  1. привет! прочитай ридми этого файла и сделай мне нестандартные элементы, пожалуйста
  2. сделай так, чтобы в моем index.html при нажатии на проекты с какой либо анимацией открывались их описания
- **Что правил(а) руками после генерации:** добавлял skill bars к project buttons, изменения в main.js, style.css, index.html

## Live URL

> [https://<username>.github.io/<repo>/](https://hermaisones.github.io/cv-lab/)
