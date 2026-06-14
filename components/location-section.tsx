export function LocationSection() {
  const highlights = [
    { icon: '🏛️', title: 'Terminal Terrestre', description: 'A 1 cuadra del terminal' },
    { icon: '🍽️', title: 'Restaurantes', description: 'Zona gastronómica variada' },
    { icon: '🛍️', title: 'Shopping', description: 'Cerca a las tiendas más reconocidas de Pasco' },
    { icon: '🚕', title: 'Transporte', description: 'Fácil acceso a transporte público' },
  ];

  return (
    <section id="ubicacion" className="py-16 md:py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Ubicación Estratégica
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Situado en el corazón de la ciudad, con acceso a los principales puntos de interés
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Google Maps */}
          <div className="bg-card border border-border rounded-lg h-96 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1960.305018070686!2d-76.2578987086065!3d-10.687346699061262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91086d000049f405%3A0x5b89c39347985eb5!2sHOTEL%20EL%20DORADO!5e0!3m2!1ses!2spe!4v1780064752203!5m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Ubícanos Aquí</h3>
            <div className="mb-8">
              <p className="text-muted-foreground mb-4">
                <span className="text-primary font-semibold block mb-2">Hotel El Dorado Cerro de Pasco</span>
                Jr. diamantes s/n, Cerro De Pasco 19001
              </p>
              <a href="https://maps.app.goo.gl/HEfFCnXzMdfYvgMS8" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg transition-colors font-medium mb-6">
                Ver en Google Maps
              </a>
              <p className="text-muted-foreground mb-2">
                <span className="text-primary font-semibold">Email:</span> hoteleldoradogroup@outlook.com
              </p>
            </div>

            <h4 className="text-lg font-bold text-foreground mb-4">Puntos de Interés</h4>
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex gap-3">
                  <span className="text-2xl">{highlight.icon}</span>
                  <div>
                    <p className="font-semibold text-foreground">{highlight.title}</p>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
