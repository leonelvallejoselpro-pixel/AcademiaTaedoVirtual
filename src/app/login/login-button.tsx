"use client";

import { createClient } from "@/lib/supabase/client";

export function LoginButton() {
  const signIn = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/auth/callback` }
    });
    if (error) alert("No se pudo iniciar sesión: " + error.message);
  };
  return <button className="btn" onClick={signIn} style={{marginTop:18,width:"100%"}}>Continuar con Google</button>;
}
