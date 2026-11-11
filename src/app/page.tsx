import Link from "next/link";
import { ACADEMY_NAME } from "@/lib/config";

export default function Home() {
  return <main className="shell">
    <header className="topbar">
      <div className="brand"><img src="/logo-tae-do.jpeg" alt="Logo Tae-Do Argentina"/><div>Academia <em>Taedo</em> Virtual</div></div>
      <nav className="nav"><a href="#inicio">Inicio</a><a href="#informacion">Información</a><a href="mailto:leonelvallejos025@gmail.com">Contacto</a><a href="#ayuda">¿Necesitás ayuda?</a></nav>
    </header>
    <section className="hero" id="inicio">
      <div className="action-scene"><div className="motto">Más que un deporte...<span>una familia</span></div></div>
      <div className="login-side">
        <img className="main-logo" src="/logo-tae-do.jpeg" alt="Logo oficial Tae-Do Argentina"/>
        <h1>ACADEMIA<br/><span>TAEDO</span> VIRTUAL</h1>
        <p className="subtitle">DISCIPLINA&nbsp; • &nbsp;RESPETO&nbsp; • &nbsp;SUPERACIÓN</p>
        <div className="login-card">
          <h2>Bienvenido a tu academia</h2>
          <p>Ingresá con tu cuenta personal para consultar tu información o acceder al panel de gestión si estás autorizado.</p>
          <Link className="btn" href="/login">Ingresar con mi cuenta</Link>
        </div>
      </div>
    </section>
    <section className="features" id="informacion">
      <div className="feature">Tus graduaciones<small>Seguimiento de tu cinturón</small></div>
      <div className="feature">Tus clases<small>Historial y próximas fechas</small></div>
      <div className="feature">Tu progreso<small>Evolución en Taekwondo</small></div>
      <div className="feature">Tus cuotas<small>Control de pagos</small></div>
      <div className="feature">Tus logros<small>Un camino de esfuerzo</small></div>
    </section>
    <footer className="footer" id="ayuda">{ACADEMY_NAME} · Formando mejores personas a través del Taekwondo</footer>
  </main>;
}
