function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

export function ContactSection() {
  const phone = '51942282221';
  const waMessage = encodeURIComponent(
    '¡Hola! Vengo desde la página web del Hotel El Dorado y me gustaría más información.'
  );
  const waLink = `https://wa.me/${phone}?text=${waMessage}`;

  return (
    <section id="contacto" className="py-16 md:py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Contacta con Nosotros
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La forma más rápida de reservar o resolver tus dudas es por WhatsApp. ¡Te respondemos al instante!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Información de Contacto</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-[#25D366]"><WhatsAppIcon size={22} /></span> WhatsApp
                </h4>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors font-medium">
                  +51 942 282 221
                </a>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-2xl">📍</span> Dirección
                </h4>
                <p className="text-muted-foreground font-semibold text-base mb-1">
                  Hotel El Dorado Cerro de Pasco
                </p>
                <p className="text-muted-foreground">
                  Jr. diamantes s/n, Cerro De Pasco 19001
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-2xl">⏰</span> Horario de Atención
                </h4>
                <p className="text-muted-foreground">
                  24/7 - Atención al cliente
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-2xl">✉️</span> Email
                </h4>
                <p className="text-muted-foreground">
                  hoteleldoradogroup@outlook.com
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp Call To Action */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-sm">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
              <WhatsAppIcon size={44} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Escríbenos por WhatsApp
            </h3>
            <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
              Reserva tu habitación o haz tus consultas directamente con nuestro equipo. Te atendemos todos los días, a cualquier hora.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-md"
            >
              <WhatsAppIcon size={24} />
              Enviar mensaje
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              +51 942 282 221
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
