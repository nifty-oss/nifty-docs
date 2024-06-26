---
sidebar_label: 'Remove'
sidebar_position: 9
---

# `remove`

Removes an extension from an asset.

## Accounts

Below is the list of accounts expected by the `remove` instruction.

| Name             | Writable | Signer | Optional | Description |
|------------------|----------|--------|----------|-------------|
| asset            | ✅       |        |          | Uninitialized asset account |
| authority        |          | ✅     |          | Authority of the asset |
| group            | ✅       |        | ✅        | Group asset account of the asset  |
| recipient        | ✅       |        |          | Account paying for the storage fees |

The `recipient` is the address that receives the refunded rent from the extension allocation.

## Arguments

The `remove` instruction expects the information of the extension to remove.

| Field             | Offset | Size | Description |
|-------------------|--------|------|-------------|
| `extension type`  | 0      | 1    | Type of the extension. |

The type of the extension is defined by one of the values of the `ExtensionType` enum.

:::info

It is not possible to remove a `Manager` or `Proxy` entensions. A `Grouping` extension can only be removed if the group is empty &mdash; its `size` is `0`.

:::

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```js
    import { remove, ExtensionType } from '@nifty-oss/asset';

    // Accounts:
    //   - asset: PublicKey
    //   - authority: KeypairSigner
    //   - recipient: PublicKey
    await remove(umi, {
      asset,
      authority,
      recipient,
      extensionType: ExtensionType.Attributes,
    }).sendAndConfirm(umi);
    ```
  </TabItem>
</Tabs>
