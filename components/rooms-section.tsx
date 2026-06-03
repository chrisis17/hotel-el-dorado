export function RoomsSection() {
  const rooms = [
    {
      name: 'Habitación Simple',
      description: 'Cómoda y funcional, ideal para una persona o viajeros que buscan practicidad y buen precio',
      price: 'S/60 noche',
      features: ['WiFi Gratis', 'TV Inteligente', 'Baño Privado', 'Servicio de Room Service'],
      image: '/simple.png',
    },
    {
      name: 'Habitación Matrimonial',
      description: 'Espaciosa y elegante, con cama matrimonial y todas las comodidades para una estadía perfecta',
      price: 'S/80 noche',
      features: ['WiFi Gratis', 'TV Inteligente', 'Baño Privado', 'Servicio de Room Service'],
      image: '/matrimonial.jpeg',
    },
    {
      name: 'Habitación Queen',
      description: 'Acogedora habitación con cama Queen, ideal para parejas o viajeros que buscan confort',
      price: 'S/90 noche',
      features: ['WiFi Gratis', 'TV Inteligente', 'Baño Privado', 'Servicio de Room Service'],
      image: '/queen.jpeg',
    },
    {
      name: 'Habitación Doble',
      description: 'Amplia habitación con dos camas, perfecta para familias o grupos de amigos',
      price: 'S/100 noche',
      features: ['WiFi Gratis', 'TV Inteligente', 'Baño Privado', 'Servicio de Room Service'],
      image: '/doble.jpeg',
    },
  ];

  return (
    <section id="habitaciones" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Nuestras Habitaciones
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada habitación está diseñada para brindarte confort máximo y una experiencia memorable
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-foreground mb-2">{room.name}</h3>
                <p className="text-muted-foreground mb-4 flex-1">{room.description}</p>

                <div className="mb-4">
                  <div className="text-primary text-2xl font-bold mb-3">{room.price}</div>
                  <ul className="space-y-2">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="#contacto" className="block text-center w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 rounded-lg transition-colors font-medium">
                  Reservar Ahora
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
