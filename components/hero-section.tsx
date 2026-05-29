export function HeroSection() {
  return (
    <section id="inicio" className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-muted to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Introduction */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 text-balance">
            Bienvenido al Hotel El Dorado
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Experimenta la calidez y confort en nuestro distinguido hotel, donde cada detalle ha sido cuidadosamente diseñado para su satisfacción.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="text-primary text-4xl mb-4">✨</div>
            <h3 className="text-xl font-bold text-foreground mb-2">Alto Confort</h3>
            <p className="text-muted-foreground">
              Todas nuestras habitaciones son alfombradas y cuentan con un diseño moderno para garantizar su descanso.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="text-primary text-4xl mb-4">👨‍💼</div>
            <h3 className="text-xl font-bold text-foreground mb-2">Servicio Impecable</h3>
            <p className="text-muted-foreground">
              Nuestro equipo está disponible 24/7 para atender sus necesidades con profesionalismo y calidez.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="text-primary text-4xl mb-4">🌟</div>
            <h3 className="text-xl font-bold text-foreground mb-2">Ubicación Céntrica</h3>
            <p className="text-muted-foreground">
              Ubicado a 1 cuadra del terminal de Pasco, con acceso fácil a restaurantes, tiendas y plaza central.
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Descubre Nuestro Hotel
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Hotel El Dorado fue inspirado en hoteles americanos y hoteles turísticos reconocidos en el Perú, queremos ser la mejor opción de acogida para nuestros turistas y vecinos Pasqueños.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Nuestro objetivo es impulsar y fomentar el turismo de nuestra hermosa ciudad de Cerro de Pasco brindando excelencia en servicio hotelero, nos enorgullece ofrecer a nuestros huéspedes un refugio de paz, confort y calidez.
            </p>
            <div className="flex gap-4">
              <div>
                <div className="text-primary font-bold text-2xl">15+</div>
                <p className="text-sm text-muted-foreground">Habitaciones</p>
              </div>
              <div>
                <div className="text-primary font-bold text-2xl">5⭐</div>
                <p className="text-sm text-muted-foreground">Calificación</p>
              </div>
              <div>
                <div className="text-primary font-bold text-2xl">200+</div>
                <p className="text-sm text-muted-foreground">Clientes Satisfechos</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/lobby.jpeg"
              alt="Lobby del Hotel El Dorado"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
