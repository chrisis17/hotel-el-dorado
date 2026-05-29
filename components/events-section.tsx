export function EventsSection() {
  const events = [
    {
      date: 'Todo Mayo',
      title: 'Fiesta de las cruces',
      description: 'Día central 3 de Mayo se lleva a cabo la ceremonio central en honor a la Cruz del Salvador',
      location: 'Plaza Central - Pasco',
    },
    {
      date: '24 - 29 Julio',
      title: 'Fiesta Patronal Santa Ana de Tusi',
      description: 'Una de las mayores fiestas realizadas en Pasco.En toda esa semana se siente el show, alegria y algarabía en el pueblo de Tusi',
      location: 'Pueblo de Santa Ana de Tusi',
    },
    {
      date: '27 Noviembre',
      title: 'Aniversario de Pasco',
      description: 'Aniversario central de la ciudad de Pasco, se realizan diversos eventos gastronómicos y culturales en la ciudad',
      location: 'San Juan Pampa - Pasco',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Eventos en la Ciudad
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre los eventos más emocionantes que suceden mientras te hospedas con nosotros
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {event.date}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{event.title}</h3>
              <p className="text-muted-foreground mb-4">{event.description}</p>
              <div className="flex items-center gap-2 text-sm text-primary">
                <span>📍</span>
                <span>{event.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            ¿Necesitas recomendaciones?
          </h3>
          <p className="text-muted-foreground mb-6">
            Nuestro concierge está encantado de ayudarte a planificar tu visita y reservar entradas para eventos
          </p>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg transition-colors font-medium inline-block">
            Contactar Concierge
          </button>
        </div> */}
      </div>
    </section>
  );
}
