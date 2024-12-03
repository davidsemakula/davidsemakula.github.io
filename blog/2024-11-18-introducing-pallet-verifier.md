---
slug: introducing-pallet-verifier
title: Introducing Pallet Verifier
description: A tool for detecting common security vulnerabilities and insecure patterns in FRAME pallets using
  static program analysis techniques like data-flow analysis, abstract interpretation and symbolic execution.
authors: [david-pallet-verifier]
tags: [pallet-verifier, static analysis, abstract interpretation, FRAME, MIRAI, Substrate, Rust, MIR]
unlisted: true
---

I am proud to announce the successful completion of the [Web3 Foundation][W3F] grant for developing
[`pallet-verifier`][pallet-verifier] - a tool for detecting [common security vulnerabilities][vulnerabilities] and
[insecure patterns] in [FRAME pallets][FRAME] using [static program analysis][static-analysis] techniques like
[data-flow analysis][data-flow], [abstract interpretation][abs-int] and [symbolic execution][symbex].

[W3F]: https://web3.foundation
[pallet-verifier]: https://github.com/davidsemakula/pallet-verifier
[FRAME]: https://docs.substrate.io/learn/runtime-development/#frame
[Substrate]: https://docs.substrate.io/
[vulnerabilities]: https://secure-contracts.com/not-so-smart-contracts/substrate/
[insecure patterns]: https://docs.substrate.io/build/troubleshoot-your-code/#unsafe-or-insecure-patterns
[static-analysis]: https://en.wikipedia.org/wiki/Static_program_analysis
[data-flow]: https://en.wikipedia.org/wiki/Data-flow_analysis
[abs-int]: https://en.wikipedia.org/wiki/Abstract_interpretation
[symbex]: https://en.wikipedia.org/wiki/Symbolic_execution

## Overview

At the highest level, `pallet-verifier` is a custom [Rust compiler (rustc) driver][rustc-driver] which uses
[MIRAI] as a backend for [abstract interpretation][MIRAI-abs-int] (and in the future, also as a
[tag and taint analysis][MIRAI-tag] engine).

Additionally, for a seamless and familiar developer experience, `pallet-verifier` is distributed as a
[custom cargo sub-command][cargo-sub-cmd] (i.e. `cargo verify-pallet`).

[rustc-driver]: https://rustc-dev-guide.rust-lang.org/rustc-driver/intro.html
[MIRAI]: https://github.com/endorlabs/MIRAI
[MIRAI-abs-int]: https://github.com/endorlabs/MIRAI/blob/main/documentation/Overview.md#abstract-interpretation
[MIRAI-tag]: https://github.com/endorlabs/MIRAI/blob/main/documentation/TagAnalysis.md
[cargo-sub-cmd]: https://doc.rust-lang.org/cargo/reference/external-tools.html#custom-subcommands

<!-- truncate -->

## Background

[FRAME pallets][FRAME] are modules used to build/compose [Substrate]-based blockchains.
They implement the business logic for specific use cases and features
(e.g. [handling account balances][balances-pallet]), enabling developers to easily create
application-specific [Substrate]-based blockchain [runtime] environments from a modular set of components.

[runtime]: https://docs.substrate.io/reference/glossary/#runtime
[balances-pallet]: https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/balances

## Current Capabilities

Currently, `pallet-verifier` focuses on detecting [panics] and [arithmetic overflow/underflow]
(including [overflow checks for narrowing and/or lossy integer cast/`as` conversions that aren't checked by the default Rust compiler][overflow-rfc-updates] -
see also [this][overflow-rfc-remove-as] and [this][as-conversions-lossy]) in [dispatchable functions/extrinsics][call]
and public associated functions of [inherent implementations][inherent-impls] of [FRAME pallets][FRAME].
However, other classes of security vulnerabilities (e.g. [insufficient or missing origin checks][origin-checks],
[bad randomness][randomness], [insufficient unsigned transaction validation][validate-unsigned] e.t.c)
will also be targeted in the future.

[panics]: https://secure-contracts.com/not-so-smart-contracts/substrate/dont_panic/
[arithmetic overflow/underflow]: https://secure-contracts.com/not-so-smart-contracts/substrate/arithmetic_overflow/
[overflow-rfc-updates]: https://rust-lang.github.io/rfcs/0560-integer-overflow.html#updates-since-being-accepted
[overflow-rfc-remove-as]: https://github.com/rust-lang/rfcs/pull/1019#issuecomment-88277675
[as-conversions-lossy]: https://doc.rust-lang.org/reference/expressions/operator-expr.html#semantics
[call]: https://docs.rs/frame-support/latest/frame_support/pallet_macros/attr.call.html
[inherent-impls]: https://doc.rust-lang.org/reference/items/implementations.html#inherent-implementations
[origin-checks]: https://secure-contracts.com/not-so-smart-contracts/substrate/origins/
[randomness]: https://secure-contracts.com/not-so-smart-contracts/substrate/randomness/
[validate-unsigned]: https://secure-contracts.com/not-so-smart-contracts/substrate/validate_unsigned/

## Architecture

[FRAME] is a [Rust]-based [DSL (Domain Specific Language)][DSL], therefore, the source code representation that
`pallet-verifier` analyzes is Rust's [MIR (Mid-level Intermediate Representation)][MIR]. This is because MIR is
["a radically simplified form of Rust that is [ideal] for certain flow-sensitive [analysis]"][MIR]
(see also [this][MIR-simple] and [this][MIRAI-MIR]).

[Rust]: https://www.rust-lang.org/
[DSL]: https://doc.rust-lang.org/rust-by-example/macros/dsl.html
[MIR]: https://rustc-dev-guide.rust-lang.org/mir/
[MIR-simple]: https://blog.rust-lang.org/2016/04/19/MIR.html#reducing-rust-to-a-simple-core
[MIRAI-MIR]: https://github.com/endorlabs/MIRAI/blob/main/documentation/WhyMir.md

`pallet-verifier` consists of two binaries:

- A [custom cargo subcommand][cargo-sub-cmd-src] which is the main user-facing component and is invoked via
  `cargo verify-pallet`. It's relatively straightforward, it mostly compiles dependencies using
  appropriate options and compiler flags, before invoking the [custom rustc driver][rustc-driver-src]
  on the target crate (i.e. the [FRAME] pallet).
- A [custom rustc driver][rustc-driver-src] which implements the core functionality of `pallet-verifier`.
  It's typically invoked by the cargo subcommand.

[cargo-sub-cmd-src]: https://github.com/davidsemakula/pallet-verifier/blob/master/src/main.rs
[rustc-driver-src]: https://github.com/davidsemakula/pallet-verifier/blob/master/src/driver.rs

The [custom rustc driver][rustc-driver-src] operates in two conceptual phases:

- An [entry point][MIRAI-entrypoint] generation and invariant [annotation][annotations] phase.
- A verification/[abstract interpretation][abs-int] phase.

[MIRAI-entrypoint]: https://github.com/endorlabs/MIRAI/blob/main/documentation/Overview.md#entry-points
[annotations]: https://crates.io/crates/mirai-annotations

### Entry point generation and invariant annotations

["MIRAI is an abstract interpreter for the Rust compiler's mid-level intermediate representation (MIR)"][MIRAI],
and finding potential panics (abrupt terminations) is one of [MIRAI's primary use cases][MIRAI-use].
It does this by performing a [path-sensitive] analysis, meaning that given an [entry point][MIRAI-entrypoint],
MIRAI ["will analyze all possible code paths that start from that entry point and determine if any of them can reach
a program point where an abrupt runtime termination will happen"][MIRAI-overview].

[MIRAI-use]: https://github.com/endorlabs/MIRAI/blob/main/README.md#who-should-use-mirai
[path-sensitive]: https://en.wikipedia.org/wiki/Data-flow_analysis#Sensitivities
[MIRAI-entrypoint]: https://github.com/endorlabs/MIRAI/blob/main/documentation/Overview.md#entry-points
[MIRAI-overview]: https://github.com/endorlabs/MIRAI/blob/main/documentation/Overview.md

However, ["[since] it is necessary for MIRAI to resolve and analyze all functions that can be reached from an entry point,
it is not possible for a generic or higher order function to serve as an entry point"][MIRAI-entrypoint]
(see also [this][monomorphization] and [this][lowering-MIR]).

This presents a challenge because [FRAME] is inherently a [generic] framework,
as it makes extensive use of [Rust generic types and traits][rust-generics].

`pallet-verifier` solves this by [automatically generating "tractable" entry points][enrty-point-callback-src]
as direct calls to [dispatchable functions/extrinsics][call] (and public associated functions of
[inherent implementations][inherent-impls]) using concrete types from unit tests as substitutions for generic types,
while keeping the call arguments ["abstract"][MIRAI-abstract-value] (in contrast to calls from unit tests which use
["concrete"][MIRAI-abstract-value] call arguments).

[generic]: https://en.wikipedia.org/wiki/Generic_programming
[rust-generics]: https://doc.rust-lang.org/book/ch10-00-generics.html
[monomorphization]: https://rustc-dev-guide.rust-lang.org/backend/monomorph.html
[lowering-MIR]: https://rustc-dev-guide.rust-lang.org/backend/lowering-mir.html
[enrty-point-callback-src]: https://github.com/davidsemakula/pallet-verifier/blob/master/src/callbacks/entry_points.rs
[MIRAI-abstract-value]: https://github.com/endorlabs/MIRAI/blob/main/documentation/Overview.md#abstract-values

MIRAI can also detect potential [arithmetic overflow/underflow due to arithmetic operations][overflow-op-exp],
if either the `rustc` ["overflow-checks"] (i.e. `-C overflow-checks=true|on|yes|y`) or
["debug-assertions"] (i.e. `-C debug-assertions=true|on|yes|y`) flag is enabled.
This is because `rustc` automatically adds instructions for [dynamic overflow checking][overflow-rfc]
when the aforementioned flags are enabled.

[overflow-op-exp]: https://doc.rust-lang.org/reference/expressions/operator-expr.html#overflow
["overflow-checks"]: https://doc.rust-lang.org/rustc/codegen-options/index.html#overflow-checks
["debug-assertions"]: https://doc.rust-lang.org/rustc/codegen-options/index.html#debug-assertions
[overflow-rfc]: https://rust-lang.github.io/rfcs/0560-integer-overflow.html

However, there's one exception, because [dynamic overflow checks are _not_ added][overflow-rfc-updates]
([see also][overflow-rfc-remove-as]) for [`as` conversions (i.e. type cast operations)][as-conversions] e.g.

```rust
fn convert_with_overflow(val: u16) -> u8 {
    val as u8
}
```

So `pallet-verifier` [automatically adds annotations][int-cast-overflow-src] to [verify][MIRAI-verify] that
[narrowing and/or lossy integer cast/`as` conversions][as-conversions-lossy] don't overflow
(i.e. integer `as` conversions where the range of the source type is not a subset of that of the destination type
e.g. an `as` conversion from `u16` to `u8` or `u8` to `i8`).

[overflow-rfc-updates]: https://rust-lang.github.io/rfcs/0560-integer-overflow.html#updates-since-being-accepted
[overflow-rfc-remove-as]: https://github.com/rust-lang/rfcs/pull/1019#issuecomment-88277675
[as-conversions]: https://doc.rust-lang.org/reference/expressions/operator-expr.html#type-cast-expressions
[int-cast-overflow-src]: https://github.com/davidsemakula/pallet-verifier/blob/master/src/providers/int_cast_overflow.rs
[MIRAI-verify]: https://docs.rs/mirai-annotations/1.12.0/mirai_annotations/macro.verify.html
[as-conversions-lossy]: https://doc.rust-lang.org/reference/expressions/operator-expr.html#semantics

Additionally, `pallet-verifier` also adds [annotations for declaring invariants][annotations] that can't be inferred
from source code alone, to improve the accuracy of the verifier and reduce false positives
(e.g. [iterator invariant annotations][iterator-annotations-src]).

[iterator-annotations-src]: https://github.com/davidsemakula/pallet-verifier/blob/master/src/providers/iterator_annotations.rs

Lastly, inorder to automatically add annotations to the target [FRAME] pallet's [MIR]
(e.g. [overflow checks for narrowing and/or lossy integer cast/`as` conversions][int-cast-overflow-src] and
[iterator invariant annotations][iterator-annotations-src]), `pallet-verifier` also typically needs to add
the [mirai-annotations crate][annotations] as a dependency of the target crate that it's invoked on.
So it [detects when the `mirai-annotations` crate dependency is missing][annotations-detect-src],
[automatically compiles it][annotations-compile-src] ([see also][annotations-compile-trigger-src])
and ["non-invasively" adds it as a dependency][annotations-add-src] (i.e. without modifying the "actual" source code
and/or `Cargo.toml` manifest of the target [FRAME] pallet).

[annotations-detect-src]: https://github.com/davidsemakula/pallet-verifier/blob/844a49f85f434442202f724c2b5a8aecd0cf9d84/src/cli_utils.rs#L128-L138
[annotations-compile-src]: https://github.com/davidsemakula/pallet-verifier/blob/844a49f85f434442202f724c2b5a8aecd0cf9d84/src/driver.rs#L196-L254
[annotations-compile-trigger-src]: https://github.com/davidsemakula/pallet-verifier/blob/844a49f85f434442202f724c2b5a8aecd0cf9d84/src/main.rs#L180-L223
[annotations-add-src]: https://github.com/davidsemakula/pallet-verifier/blob/844a49f85f434442202f724c2b5a8aecd0cf9d84/src/main.rs#L259-L273

### Verification / Abstract Interpretation

After entry point generation, the ["tractable" entry points are passed to MIRAI for verification/ abstract interpretation][verifier-callback-src],
after which `pallet-verifier` [determines which diagnostics to either "suppress" or "emit"][diagnostics-filter-src]
based on our domain-specific knowledge.

[verifier-callback-src]: https://github.com/davidsemakula/pallet-verifier/blob/master/src/callbacks/verifier.rs
[diagnostics-filter-src]: https://github.com/davidsemakula/pallet-verifier/blob/844a49f85f434442202f724c2b5a8aecd0cf9d84/src/callbacks/verifier.rs#L321-L549

`pallet-verifier` leverages a custom [FileLoader][rust-file-loader]
to ["virtually" add "analysis-only" external crate declarations and module definitions][virtual-file-loader-src]
(e.g. `extern crate` declarations for the [mirai-annotations crate][annotations], and module definitions for
generated "tractable" entry points and [additional summaries/foreign contracts][contracts-src])
to the target [FRAME] pallet without modifying its "actual" source code.
The ["virtual" FileLoader][virtual-file-loader-src] strategically adds our "analysis-only" external crate declarations
and module definitions in a way that leverages `rustc`'s excellent support for [incremental compilation/analysis][rustc-inc-comp-detail]
(see also [this][rustc-inc-comp] and [this][rustc-query]), meaning unrelated code is never recompiled during the verification/abstract intepretation phase.

[rust-file-loader]: https://doc.rust-lang.org/nightly/nightly-rustc/rustc_span/source_map/trait.FileLoader.html
[virtual-file-loader-src]: https://github.com/davidsemakula/pallet-verifier/blob/master/src/file_loader.rs
[contracts-src]: https://github.com/davidsemakula/pallet-verifier/blob/master/artifacts/contracts.rs
[rustc-inc-comp-detail]: https://rustc-dev-guide.rust-lang.org/queries/incremental-compilation-in-detail.html
[rustc-inc-comp]: https://rustc-dev-guide.rust-lang.org/queries/incremental-compilation.html
[rustc-query]: https://rustc-dev-guide.rust-lang.org/query.html

## Installation, Usage and Diving Deeper

Check out `pallet-verifier`'s [GitHub repository][pallet-verifier] for [installation][README-install] and
[usage][README-use] instructions, some [additional architectural details][ARCHITECTURE],
and inline source documentation e.t.c.

[README-install]: https://github.com/davidsemakula/pallet-verifier/blob/master/README.md#installation
[README-use]: https://github.com/davidsemakula/pallet-verifier/blob/master/README.md#usage
[ARCHITECTURE]: https://github.com/davidsemakula/pallet-verifier/blob/master/ARCHITECTURE.md

## Conclusion

[`pallet-verifier`][pallet-verifier] is only at the very beginning of its development, so issues, bug reports, PRs and feature requests
are welcome at the [GitHub repository][pallet-verifier] 🙂.

Special thanks to the [Web3 Foundation][W3F] for funding `pallet-verifier`'s development via a generous grant.
