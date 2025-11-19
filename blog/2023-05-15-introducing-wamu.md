---
slug: introducing-wamu
title: Introducing Wamu
description: A protocol for computation of threshold signatures by multiple cryptographic identities
authors: [david-wamu]
tags: [Wamu, threshold signatures, threshold cryptography, multi-party computation, MPC]
---

I'm proud to announce [Wamu] - a protocol for computation of threshold signatures by multiple cryptographic identities.

[Wamu]: https://wamu.tech

Multisig wallets (e.g. [Safe]) are already [widely adopted][dune-eth] and have proven the importance of
noncustodial shared wallets with threshold access structures controlled by multiple cryptographic identities,
for mainstream users and decentralized teams and organizations.

[Safe]: https://safe.global/wallet
[dune-eth]: https://dune.com/safe/ethereum

However, threshold signatures have some unique benefits over multisig wallets including:
cost-effectiveness, universal interoperability, and enhanced privacy and security.

Despite the aforementioned benefits, there are currently no mainstream threshold signature wallet alternatives
to multisig wallets for decentralized teams and organizations that require noncustodial shared wallets
with threshold access structures that can run on mainstream consumer devices.

The [Wamu] project (meaning "together") aims to unlock the benefits of threshold signatures for decentralized teams
and organizations, and mainstream users that require noncustodial shared wallets with threshold access structures by:

- Defining an open protocol that encourages research into and development of mainstream multi-user
  threshold signature wallet solutions.
- Providing modular, performant, free and open-source building blocks that allow software developers to
  either build new mainstream multi-user threshold signature wallets, or integrate state-of-the-art
  threshold signature schemes into existing mainstream wallets.

<!-- truncate -->

Check out the [Whitepaper] and [Technical Specification][tech-spec] for the full technical details.

[Whitepaper]: https://wamu.tech/whitepaper
[tech-spec]: https://wamu.tech/specification
