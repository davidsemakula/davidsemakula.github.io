---
slug: introducing-ink-analyzer
title: Introducing ink! Analyzer
description: A collection of modular and reusable libraries and tools for semantic analysis of ink! smart contracts.
authors: [david-ink-analyzer]
tags: [ink! analyzer, ink!, semantic analysis, Language Server Protocol, LSP, VS Code, smart contracts]
---

I am proud to announce the successful completion of the [Web3 Foundation][W3F] grant for developing [ink! analyzer] -
a collection of modular and reusable libraries and tools for semantic analysis of [ink!] smart contracts.

[W3F]: https://web3.foundation/
[ink! analyzer]: https://github.com/ink-analyzer
[ink!]: https://use.ink/

ink! analyzer aims to improve [ink!] language support in [integrated development environments (IDEs)][IDE],
[source code editors][code-editor] and other development tools by providing modular and reusable building blocks
for implementing language features (e.g. diagnostic errors, quick fixes, code completion suggestions,
code/intent actions and hover content e.t.c)
for the [ink! programming language][ink!] which is used for writing smart contracts for blockchains built with [Substrate].

[IDE]: https://en.wikipedia.org/wiki/Integrated_development_environment
[code-editor]: https://en.wikipedia.org/wiki/Source-code_editor
[Substrate]: https://substrate.io/

- Semantic Analyzer ([source code](https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/analyzer),
  [crates.io](https://crates.io/crates/ink-analyzer), [docs.rs](https://docs.rs/ink-analyzer/latest/ink_analyzer/)).
- Language Server ([source code](https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/lsp-server),
  [binary/executable releases](https://github.com/ink-analyzer/ink-analyzer/releases),
  [crates.io](https://crates.io/crates/ink-lsp-server), [docs.rs](https://docs.rs/ink-lsp-server/latest/ink_lsp_server/)).
- Visual Studio Code Extension ([source code](https://github.com/ink-analyzer/ink-vscode),
  [VS Code Marketplace listing](https://marketplace.visualstudio.com/items?itemName=ink-analyzer.ink-analyzer),
  [VSIX releases](https://github.com/ink-analyzer/ink-vscode/releases)).

<!-- truncate -->

Check out the [full introductory blog post](https://analyze.ink/blog/introducing-ink-analyzer) for more details.
