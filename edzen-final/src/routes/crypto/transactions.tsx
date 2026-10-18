import { createFileRoute } from "@tanstack/react-router";
import { CryptoPage } from "@/components/crypto/CryptoPages";
export const Route = createFileRoute("/crypto/transactions")({
  head: () => ({ meta: [{ title: "Crypto transactions | Edzen" }] }),
  component: () => <CryptoPage kind="transactions" />,
});
