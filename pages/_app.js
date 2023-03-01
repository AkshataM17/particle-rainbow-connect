import "../styles/globals.css";
import {
    ModalProvider,
    evmWallets,
    Optimism,
    Polygon,
    Ethereum,
    EthereumGoerli,
} from "@particle-network/connect-react-ui";
import { WalletEntryPosition } from "@particle-network/auth";
import "@particle-network/connect-react-ui/dist/index.css";

function MyApp({ Component, pageProps }) {
    if (typeof window !== "undefined") {
        //TODO: particle internal test, remove it before publish
        window.__PARTICLE_DEVELOPMENT__ = true;
    }

    return (
        <ModalProvider
            walletSort={["Particle Auth", "Wallet"]}
            particleAuthSort={[
                "email",
                "phone",
                "google",
                "apple",
                "facebook",
                "microsoft",
                "linkedin",
                "github",
                "discord",
            ]}
            options={{
                projectId: "fa0fe0e8-f1bb-47ff-88bb-4fa31711e7b3",
                clientKey: "cKtHdeHis0ghNom64w7mdNkGYX5rmRr0jLlIKatY",
                appId: "859fada8-48ad-441b-b8e6-cde15ae1b48f",
                chains: [
                  Optimism,
                  Polygon,
                  Ethereum,
                  EthereumGoerli,
                ],
                particleWalletEntry: {
                    displayWalletEntry: true,
                    defaultWalletEntryPosition: WalletEntryPosition.BR,
                    supportChains: [Ethereum, EthereumGoerli],
                },
                wallets: [...evmWallets({ qrcode: false })],
            }}
            language="en"
            theme={"light"}
        >
            <Component {...pageProps} />
        </ModalProvider>
    );
}

export default MyApp;
