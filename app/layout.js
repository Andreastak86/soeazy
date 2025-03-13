import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Portfolio",
    description: "Min personlige portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang='no' suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
