# 🔐 filipovGeneratePassword — Gerador de Senhas

> React Native CLI · TypeScript · PoC and Training · Firebase App Distribution

[![Top Language](https://img.shields.io/github/languages/top/marcelofilipov/filipovGeneratePassword)](https://github.com/marcelofilipov/filipovGeneratePassword)
[![Repo Size](https://img.shields.io/github/repo-size/marcelofilipov/filipovGeneratePassword)](https://github.com/marcelofilipov/filipovGeneratePassword)
[![Commit Activity](https://img.shields.io/github/commit-activity/m/marcelofilipov/filipovGeneratePassword)](https://github.com/marcelofilipov/filipovGeneratePassword/commits/main)

---

## 📋 Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e Execução](#instalação-e-execução)
- [Firebase App Distribution](#firebase-app-distribution)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Testes](#testes)
- [Qualidade de Código](#qualidade-de-código)
- [Contribuindo](#contribuindo)

---

## Sobre o Projeto

O **filipovGeneratePassword** é uma aplicação mobile desenvolvida em **React Native CLI** com **TypeScript**, utilizada como Prova de Conceito (PoC) e projeto de treinamento. O app permite gerar senhas de forma configurável, com distribuição de builds de teste via **Firebase App Distribution**.

> ⚠️ Este projeto utiliza o **React Native CLI** (bare workflow) — **não** utiliza Expo. É necessário o ambiente nativo de desenvolvimento configurado (Android SDK e/ou Xcode).

---

## Tecnologias

**Core**
- **React Native CLI** — framework mobile multiplataforma (bare workflow)
- **TypeScript** — tipagem estática sobre JavaScript
- **Firebase App Distribution** — distribuição de builds de teste para QA e stakeholders

**Build nativo**
- **Java** — módulo Android
- **Objective-C / Objective-C++** — módulo iOS
- **Metro Bundler** — bundler JavaScript do React Native
- **CocoaPods** — gerenciador de dependências nativas iOS (via `Gemfile`)

**Tooling**
- **ESLint** — análise estática de código (`.eslintrc.js`)
- **Prettier** — formatação de código (`.prettierrc.js`)
- **Yarn** — gerenciador de dependências
- **Babel** — transpilação (`babel.config.js`)
- **Watchman** — monitoramento de arquivos (`.watchmanconfig`)
- **Jest** — testes automatizados

---

## Pré-requisitos

> Este projeto exige o ambiente React Native CLI completo. Siga o guia oficial antes de prosseguir: [https://reactnative.dev/docs/environment-setup](https://reactnative.dev/docs/environment-setup)

**Versão do Node.js**

A versão exata do Node.js está fixada no arquivo `.node-version` na raiz do projeto. Recomenda-se o uso de um gerenciador de versões como [nvm](https://github.com/nvm-sh/nvm) ou [fnm](https://github.com/Schniz/fnm) para garantir compatibilidade:

```bash
# Com nvm
nvm install
nvm use
```

**Dependências gerais**
- **Yarn** 1.x
- **Watchman** (macOS/Linux)

**Android**
- Android Studio
- Android SDK (API 33+ recomendado)
- Emulador Android ou dispositivo físico com depuração USB habilitada

**iOS** (apenas macOS)
- Xcode 14+
- CocoaPods (`sudo gem install cocoapods`)
- Simulador iOS ou dispositivo físico

---

## Instalação e Execução

**1. Clone o repositório**

```bash
git clone https://github.com/marcelofilipov/filipovGeneratePassword.git
cd filipovGeneratePassword
```

**2. Instale a versão correta do Node.js**

```bash
nvm use  # lê automaticamente o arquivo .node-version
```

**3. Instale as dependências JavaScript**

```bash
yarn install
```

**4. Instale as dependências nativas iOS** (apenas macOS)

```bash
bundle install       # instala o Bundler Ruby (CocoaPods)
bundle exec pod install --project-directory=ios
```

**5. Inicie o Metro Bundler**

```bash
yarn start
```

**6. Execute no Android**

```bash
yarn android
```

**7. Execute no iOS** (apenas macOS)

```bash
yarn ios
```

---

## Firebase App Distribution

Este projeto utiliza o **Firebase App Distribution** para distribuição de builds de teste. Para configurar:

**1.** Acesse o [Firebase Console](https://console.firebase.google.com) e crie ou vincule um projeto Firebase.

**2.** Registre os apps Android e iOS no Firebase:
- Android: forneça o `applicationId` definido em `android/app/build.gradle`
- iOS: forneça o `Bundle ID` definido em `ios/<NomeDoProjeto>/Info.plist`

**3.** Baixe e adicione os arquivos de configuração:
- `google-services.json` → `android/app/`
- `GoogleService-Info.plist` → `ios/<NomeDoProjeto>/`

> ⚠️ Nunca versione esses arquivos de configuração. Verifique se estão listados no `.gitignore`.

**4.** Para gerar e enviar uma build de teste via Firebase CLI:

```bash
# Instale o Firebase CLI, se ainda não tiver
npm install -g firebase-tools

firebase login
firebase appdistribution:distribute <caminho-do-apk-ou-ipa> \
  --app <FIREBASE_APP_ID> \
  --groups "testers"
```

---

## Estrutura do Projeto

```
filipovGeneratePassword/
├── __tests__/             # Testes automatizados (Jest)
├── android/               # Projeto nativo Android (Java)
├── assets/                # Imagens e recursos estáticos
├── ios/                   # Projeto nativo iOS (Objective-C/C++)
├── src/                   # Código-fonte TypeScript principal
│   └── ...                # Componentes, hooks, telas, utilitários
├── App.tsx                # Componente raiz da aplicação
├── index.js               # Entry point — registra o componente raiz
├── app.json               # Configuração do app (nome, bundle id)
├── tsconfig.json          # Configuração TypeScript
├── css.d.ts               # Declaração de tipos para arquivos CSS/estilo
├── babel.config.js        # Configuração do Babel
├── metro.config.js        # Configuração do Metro Bundler
├── .eslintrc.js           # Regras ESLint
├── .prettierrc.js         # Regras Prettier
├── .node-version          # Versão do Node.js fixada
├── .watchmanconfig        # Configuração Watchman
├── Gemfile                # Dependências Ruby (CocoaPods)
├── package.json           # Dependências e scripts
└── yarn.lock              # Lockfile Yarn
```

---

## Testes

O projeto utiliza **Jest** com o diretório `__tests__/` na raiz.

```bash
# Executar todos os testes
yarn test

# Executar com watch mode
yarn test --watch

# Gerar relatório de cobertura
yarn test --coverage
```

---

## Qualidade de Código

O projeto possui **ESLint** e **Prettier** configurados para garantir consistência e qualidade.

```bash
# Verificar problemas de lint
yarn lint

# Corrigir problemas automaticamente
yarn lint --fix
```

> Recomenda-se integrar ao editor (VSCode com extensões `ESLint` e `Prettier - Code formatter`) para feedback em tempo real.

---

## Contribuindo

Contribuições são bem-vindas. Para mudanças significativas, abra uma *issue* primeiro para discutir o que deseja alterar.

1. Faça um **fork** do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`)
3. Faça commit das alterações (`git commit -m 'feat: adiciona minha feature'`)
4. Faça push para a branch (`git push origin feature/minha-feature`)
5. Abra um **Pull Request**

> Certifique-se de que os testes existentes continuam passando e adicione novos testes quando aplicável.

---

<p align="center">Desenvolvido por <a href="https://github.com/marcelofilipov">marcelofilipov</a></p>
