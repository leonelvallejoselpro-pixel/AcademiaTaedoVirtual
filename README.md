# Academia Taedo Virtual

Base inicial de una aplicación web para administrar una academia de Taekwondo.

## Tecnologías
- Next.js (App Router)
- Supabase Auth (inicio de sesión con Google)
- Supabase PostgreSQL + Row Level Security (RLS)
- Diseño oscuro con acentos verdes

## Antes de publicarla
Este proyecto es una base de desarrollo, no una aplicación ya desplegada. Para ponerla en línea hay que crear un proyecto Supabase y uno de hosting (por ejemplo Vercel), cargar las variables de entorno y ejecutar `supabase/schema.sql`.

**No compartas contraseñas, códigos de verificación ni claves secretas por el chat.** Si las condiciones de edad de los proveedores lo requieren, un adulto responsable debe crear o autorizar las cuentas externas.

## Configuración
1. Instalar Node.js LTS.
2. En esta carpeta ejecutar `npm install`.
3. Copiar `.env.example` a `.env.local` y completar los datos del proyecto Supabase.
4. En Supabase, ejecutar el contenido de `supabase/schema.sql` en SQL Editor.
5. En Supabase Auth, habilitar Google y configurar el proveedor OAuth siguiendo la guía oficial de Supabase.
6. Configurar la URL de callback de Supabase en el proveedor de Google.
7. Ejecutar `npm run dev`.

## Administrador inicial
El correo principal está configurado como `leonelvallejos025@gmail.com` en `src/lib/config.ts`.
El primer usuario con ese correo debe registrarse mediante Google. Luego, desde el panel de Supabase, asignar su perfil como `admin` una sola vez:

```sql
update public.profiles
set role = 'admin', is_active = true
where email = 'leonelvallejos025@gmail.com';
```

No se habilita un formulario público para elevar privilegios. El administrador podrá dar de alta personal autorizado desde la gestión de usuarios una vez implementada esa pantalla.

## Seguridad y alcance de esta versión
- La base SQL aplica RLS para que cada alumno solo lea sus propios datos.
- Los perfiles de personal y administradores tienen permisos diferenciados en la base.
- Las operaciones sensibles deben ejecutarse con sesión autenticada.
- Esta entrega incluye la estructura inicial de autenticación, panel y esquema de datos. No incluye todavía todos los formularios CRUD, pagos en línea, notificaciones ni una auditoría de seguridad externa.
