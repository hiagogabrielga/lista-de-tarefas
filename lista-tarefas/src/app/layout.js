import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Lista de exercícios",
  description: "Uma lista de exercícios para praticar React e Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
