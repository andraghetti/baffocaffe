import { Card } from "@/components/ui/card";

const StorySection = () => {
  return (
    <section id="story" className="py-20 px-6 gradient-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-6">
            La Nostra Storia
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="p-8 shadow-soft border-0 bg-card/80 backdrop-blur-sm">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-coffee-dark mb-4">
                Il Sogno di Filippo
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tutto è iniziato con una passione semplice ma profonda: la ricerca del caffè perfetto. 
                Filippo ha sempre creduto che ogni tazza racconti una storia, dalla piantagione alla tazzina.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dopo anni di esperienza nel settore della ristorazione e innumerevoli viaggi alla scoperta 
                delle migliori miscele, ha deciso di portare ad Alfonsine un angolo di autentica cultura del caffè.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Baffo Caffè nasce dal desiderio di offrire ad Alfonsine le migliori capsule e cialde per caffè, 
                selezionate con cura per garantire la qualità che meriti nella tua casa.
              </p>
            </div>
          </Card>
          
          <div className="space-y-8">
            <Card className="p-6 shadow-soft border-0 bg-card/60">
              <h4 className="text-xl font-semibold text-coffee-dark mb-3">
                La Nostra Filosofia
              </h4>
              <p className="text-muted-foreground">
                Crediamo nella qualità senza compromessi. Ogni chicco viene selezionato 
                con cura per offrire un&apos;esperienza sensoriale unica.
              </p>
            </Card>
            
            <Card className="p-6 shadow-soft border-0 bg-card/60">
              <h4 className="text-xl font-semibold text-coffee-dark mb-3">
                La Varietà
              </h4>
              <p className="text-muted-foreground">
                Una vasta selezione di capsule compatibili con tutte le principali macchine da caffè, 
                per soddisfare ogni gusto e preferenza.
              </p>
            </Card>
            
            <Card className="p-6 shadow-soft border-0 bg-card/60">
              <h4 className="text-xl font-semibold text-coffee-dark mb-3">
                Il Servizio
              </h4>
              <p className="text-muted-foreground">
                Consulenza personalizzata per aiutarti a trovare le capsule perfette per la tua macchina, 
                con consigli esperti per ogni tipo di preparazione.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
