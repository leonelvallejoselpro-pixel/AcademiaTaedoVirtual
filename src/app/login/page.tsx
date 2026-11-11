import { LoginButton } from "./login-button";

export default function LoginPage() {
  return <main className="shell"><header className="topbar"><a className="brand" href="/"><img src="/logo-tae-do.jpeg" alt="Logo TaekwonDo Tae-Do Argentina" /><div>TAE-DO <span>VIRTUAL</span></div></a></header>
    <section className="wrap" style={{maxWidth:560}}>
      <div className="panel">
        <p className="eyebrow">Acceso personal</p><h1 style={{fontSize:40}}>Ingresar</h1>
        <p className="muted">Usá la cuenta de Google que fue registrada y autorizada para la academia.</p>
        <LoginButton />
      </div>
    </section>
  </main>;
}
