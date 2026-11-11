import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { PRIMARY_ADMIN_EMAIL } from "@/lib/config";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase.from("profiles")
    .select("full_name,email,role,is_active").eq("id", user.id).maybeSingle();

  if (!profile?.is_active) {
    return <main className="shell"><section className="wrap"><div className="panel">
      <p className="eyebrow">Cuenta pendiente</p><h1 style={{fontSize:38}}>Acceso no autorizado todavía</h1>
      <p className="muted">Tu cuenta inició sesión correctamente, pero un administrador debe habilitarla para acceder a la información de la academia.</p>
      <form action="/auth/signout" method="post"><button className="btn secondary">Cerrar sesión</button></form>
    </div></section></main>;
  }

  const isPrimaryAdmin = user.email?.toLowerCase() === PRIMARY_ADMIN_EMAIL;
  return <main className="shell"><header className="topbar"><a className="brand" href="/"><img src="/logo-tae-do.jpeg" alt="Logo TaekwonDo Tae-Do Argentina" /><div>TAE-DO <span>VIRTUAL</span></div></a><form action="/auth/signout" method="post"><button className="btn secondary">Cerrar sesión</button></form></header>
    <section className="wrap">
      <p className="eyebrow">Panel personal</p><h1 style={{fontSize:42}}>Hola, {profile.full_name || user.email}</h1>
      <p className="muted">Rol: {isPrimaryAdmin ? "Administrador principal" : profile.role}</p>
      {isPrimaryAdmin || profile.role === "admin" || profile.role === "staff" ?
        <div className="grid">
          <article className="panel"><p className="eyebrow">Gestión</p><h2>Alumnos</h2><p className="muted">La estructura de alumnos está preparada en la base de datos.</p></article>
          <article className="panel"><p className="eyebrow">Clases</p><h2>Asistencia y agenda</h2><p className="muted">Registros de clases y asistencia.</p></article>
          <article className="panel"><p className="eyebrow">Administración</p><h2>Permisos</h2><p className="muted">Los roles se controlan desde la base de datos.</p></article>
        </div> :
        <div className="grid"><article className="panel"><p className="eyebrow">Mi cuenta</p><h2>Mi información</h2><p className="muted">Tu perfil está vinculado a tu cuenta personal. Los datos de otros alumnos no son visibles.</p></article></div>
      }
    </section>
  </main>;
}
