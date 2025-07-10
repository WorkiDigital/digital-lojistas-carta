
import { MessageCircle, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  const whatsappMessage = "Olá! Vi sua carta sobre vendas digitais para lojistas de móveis. Gostaria de conversar sobre como transformar minha loja em referência digital.";
  const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-brand-black text-brand-white font-inter">
      {/* Fixed CTA Button */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-scale-in">
        <Button
          onClick={handleWhatsAppClick}
          className="bg-brand-yellow text-brand-black hover:bg-yellow-500 font-bold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
        >
          <MessageCircle className="w-5 h-5" />
          QUERO CONVERSAR AGORA
        </Button>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Uma Carta Para Você,
              <span className="block text-brand-yellow">Empresário(a)</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              Sobre o que está realmente impedindo sua loja de vender no digital
            </p>
          </div>
          
          <div className="pt-8">
            <div className="inline-flex items-center gap-2 bg-gray-900 px-6 py-3 rounded-full border border-gray-700">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Diagnóstico gratuito disponível</span>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Message */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-900 border-gray-800 animate-fade-in">
            <CardContent className="p-8 md:p-12 space-y-6">
              <div className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-4">
                <p>
                  <strong className="text-brand-white">Oi empresário(a)</strong>
                </p>
                <p>
                  Nos últimos 4 anos, ajudei como você a transformar seus negócios no digital. E sabe o que descobri?
                </p>
                <div className="bg-brand-yellow/10 border border-brand-yellow/30 p-6 rounded-lg">
                  <p className="text-brand-yellow font-bold text-xl text-center">
                    "90% dos lojistas que não vendem no digital cometem exatamente os mesmos 3 erros... e quando corrigem, as vendas disparam em menos de 30 dias."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-900 border-gray-800 animate-fade-in">
            <CardContent className="p-8 md:p-12 space-y-6">
              <div className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-4">
                <p>
                  <strong className="text-brand-white">Empresário(a), você tem um negócio sólido.</strong> Seus móveis são bons, seu atendimento é bom, seus clientes recomendam... <strong className="text-red-400">MAS você está cometendo erros bobos que estão custando milhares de reais por mês.</strong>
                </p>
                <p>
                  Enquanto você lê isso, seu concorrente (que talvez tenha produto pior que o seu) está vendendo muitos todos os dias, direto pelo Instagram e WhatsApp.
                </p>
                <p className="text-brand-yellow font-semibold">
                  Ele não é mais inteligente que você. Ele só conhece o método certo.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gray-900 border-gray-800 animate-fade-in">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-white">
                    Olha só alguns resultados dos últimos 30 dias:
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className="bg-brand-black p-6 rounded-lg border border-brand-yellow">
                    <div className="flex items-center gap-4 mb-4">
                      <TrendingUp className="w-8 h-8 text-brand-yellow" />
                      <div>
                        <h3 className="text-xl font-bold text-brand-white">✅ Paulo</h3>
                        <p className="text-gray-400">Loja de Móveis</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-300">Saiu de: <span className="line-through">R$ 100k/mês</span></p>
                      <p className="text-brand-yellow font-bold text-lg">Para: R$ 175k/mês</p>
                    </div>
                  </div>

                  <div className="bg-brand-black p-6 rounded-lg border border-brand-yellow">
                    <div className="flex items-center gap-4 mb-4">
                      <Users className="w-8 h-8 text-brand-yellow" />
                      <div>
                        <h3 className="text-xl font-bold text-brand-white">✅ Telma</h3>
                        <p className="text-gray-400">Loja de Móveis</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-300">Saiu de: <span className="line-through">R$ 80k/mês</span></p>
                      <p className="text-brand-yellow font-bold text-lg">Para: R$ 150k/mês</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Truth Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-red-900/20 border-red-500/30 animate-fade-in">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-white">
                Aqui está a verdade que ninguém te conta:
              </h2>
              
              <div className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-4">
                <p>
                  <strong className="text-red-300">Cada dia que você adia resolver isso, seu concorrente está na frente.</strong> Cada cliente que poderia ter comprado de você está comprando dele. Cada real que você poderia ter faturado está indo para o bolso de outro lojista.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Choice Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-900 border-gray-800 animate-fade-in">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-white">
                  Empresário(a), você tem duas opções:
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className="bg-red-900/20 border border-red-500/30 p-8 rounded-lg">
                    <h3 className="text-xl font-bold text-red-300 mb-4">Opção 1:</h3>
                    <p className="text-gray-300">
                      Continuar tentando sozinho, perdendo tempo e dinheiro, vendo seus concorrentes crescerem enquanto você fica para trás.
                    </p>
                  </div>

                  <div className="bg-green-900/20 border border-green-500/30 p-8 rounded-lg">
                    <h3 className="text-xl font-bold text-green-300 mb-4">Opção 2:</h3>
                    <p className="text-gray-300">
                      Usar o método que já funcionou para centenas de lojistas e começar a vender todos os dias de forma previsível.
                    </p>
                  </div>
                </div>

                <div className="bg-brand-yellow/10 border border-brand-yellow/30 p-6 rounded-lg mt-8">
                  <div className="space-y-4 text-gray-300">
                    <p className="font-semibold text-brand-white">Se você escolher a opção 2, preciso te avisar uma coisa...</p>
                    <p>
                      <strong className="text-brand-yellow">Eu só trabalho com lojistas que estão dispostos a sair da zona de conforto.</strong> Não aceito quem quer resultado sem se comprometer. Não aceito quem acha que vai resolver com "jeitinho brasileiro".
                    </p>
                    <p>
                      Mas se você é sério, se realmente quer transformar sua loja na referência digital da sua cidade, então vamos conversar.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-b from-gray-900 to-brand-black border-brand-yellow animate-fade-in">
            <CardContent className="p-8 md:p-12 text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-brand-white">
                Está Pronto Para Sair do
                <span className="block text-brand-yellow">Amadorismo?</span>
              </h2>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Clique no botão abaixo e vamos conversar sobre como implementar isso na sua loja <strong className="text-brand-yellow">NOS PRÓXIMOS 30 DIAS.</strong>
              </p>

              <div className="space-y-6">
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-brand-yellow text-brand-black hover:bg-yellow-500 font-bold py-6 px-12 rounded-full text-xl shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-4 mx-auto"
                >
                  <MessageCircle className="w-6 h-6" />
                  QUERO CONVERSAR AGORA
                  <ArrowRight className="w-6 h-6" />
                </Button>

                <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>100% Gratuito</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Diagnóstico Completo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Sem Compromisso</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Signature Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-900 border-gray-800 animate-fade-in">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <p className="text-xl text-gray-300">Forte abraço,</p>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-brand-yellow">[Herickson aia]</h3>
                <p className="text-gray-400">Especialista em Vendas Digitais para Lojistas</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* P.S. Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-brand-black border-brand-yellow animate-fade-in">
            <CardContent className="p-8 md:p-12 space-y-6">
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong className="text-brand-yellow">P.S.:</strong> Empresário(a), se você está lendo até aqui, é porque realmente quer resolver esse problema. Não deixe para amanhã o que pode resolver hoje. Seus concorrentes não vão te esperar.
                </p>
                <p>
                  <strong className="text-brand-yellow">P.S.2:</strong> Quando você clicar no botão, vou te dar um diagnóstico GRATUITO do seu Instagram e te mostrar exatamente onde estão os problemas. Mesmo que você não trabalhe comigo, já vai sair com um plano claro do que precisa fazer.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Carta Para Lojistas Digitais. Transformando móveis em vendas digitais.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
