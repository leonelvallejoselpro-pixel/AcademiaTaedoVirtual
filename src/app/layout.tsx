import type { Metadata } from "next";
import "./globals.css";
import { ACADEMY_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: ACADEMY_NAME,
  description: "Plataforma de gestión para alumnos y equipo de la academia."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
