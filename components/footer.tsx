type IconProps = { size?: number };

function FacebookIcon({ size = 24 }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
    </svg>
  );
}

function InstagramIcon({ size = 24 }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TwitterIcon({ size = 24 }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function TikTokIcon({ size = 24 }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82a4.28 4.28 0 0 1-1.01-2.82h-3.3v12.34a2.55 2.55 0 0 1-2.55 2.45 2.55 2.55 0 0 1-.74-4.98v-3.4a5.92 5.92 0 0 0-5.4 5.9A5.92 5.92 0 0 0 9.74 21a5.92 5.92 0 0 0 5.9-5.92V8.94a7.5 7.5 0 0 0 4.36 1.4V7.04a4.28 4.28 0 0 1-3.4-1.22z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img
              src="/logo-eldorado.png"
              alt="Hotel El Dorado"
              className="h-16 w-auto rounded-md mb-4"
            />
            <p className="text-background/80 text-sm">
              Tu destino preferido para hospedaje de lujo en el corazón de la ciudad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#inicio" className="hover:text-background transition">Inicio</a></li>
              <li><a href="#habitaciones" className="hover:text-background transition">Habitaciones</a></li>
              <li><a href="#ubicacion" className="hover:text-background transition">Ubicación</a></li>
              <li><a href="#contacto" className="hover:text-background transition">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          {/* <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition">Restaurante</a></li>
              <li><a href="#" className="hover:text-background transition">Spa</a></li>
              <li><a href="#" className="hover:text-background transition">Piscina</a></li>
              <li><a href="#" className="hover:text-background transition">Gym</a></li>
            </ul>
          </div> */}

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" title="Facebook" aria-label="Facebook" className="hover:text-secondary transition">
                <FacebookIcon size={24} />
              </a>
              <a href="#" title="Instagram" aria-label="Instagram" className="hover:text-secondary transition">
                <InstagramIcon size={24} />
              </a>
              <a href="#" title="Twitter" aria-label="Twitter" className="hover:text-secondary transition">
                <TwitterIcon size={24} />
              </a>
              <a href="#" title="TikTok" aria-label="TikTok" className="hover:text-secondary transition">
                <TikTokIcon size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-sm text-background/80">
            &copy; 2026 Hotel El Dorado. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
