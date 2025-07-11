
import { MessageCircle, TrendingUp, Users, CheckCircle, ArrowRight, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  const calcomUrl = "https://calcom.workidigital.tech/workidigitaloficial-gmail.com/30min";

  const handleScheduleClick = () => {
    window.open(calcomUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-brand-black text-brand-white font-inter">
      {/* Fixed CTA Button */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 animate-scale-in">
        <Button
          onClick={handleScheduleClick}
          className="bg-brand-yellow text-brand-black hover:bg-yellow-500 font-bold py-3 px-6 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
        >
          <Calendar className="w-4 h-4" />
          AGENDAR DIAGNÓSTICO
        </Button>
      </div>

      {/* Hero Section */}
      <section className="flex items-center justify-center px-4 py-6">
        <div className="max-w-4xl mx-auto text-center space-y-3 animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-black leading-tight">
            Uma Carta Para Você,
            <span className="block text-brand-yellow">Empresário(a)</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto">
            Sobre o que está realmente impedindo sua loja de vender no digital
          </p>
          
          <div className="pt-2">
            <div className="inline-flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-full border border-gray-700">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Diagnóstico gratuito disponível</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Card */}
      <section className="py-2 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-900 border-gray-800 animate-fade-in">
            <CardContent className="p-6 md:p-8 space-y-5">
              
              {/* Opening */}
              <div className="text-base md:text-lg text-gray-300 leading-relaxed space-y-3">
                <p><strong className="text-brand-white">Oi empresário(a)</strong></p>
                <p>Nos últimos 4 anos, ajudei como você a transformar seus negócios no digital. E sabe o que descobri?</p>
                <p className="text-brand-yellow font-bold text-lg text-center border border-brand-yellow/30 p-4 rounded-lg">
                  "90% dos lojistas que não vendem no digital cometem exatamente os mesmos 3 erros... e quando corrigem, as vendas disparam em menos de 30 dias."
                </p>
              </div>

              {/* Problem Statement */}
              <div className="text-base md:text-lg text-gray-300 leading-relaxed space-y-3">
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

              {/* Results */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-brand-white text-center">
                  Olha só alguns resultados dos últimos 30 dias:
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg border border-brand-yellow">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="w-5 h-5 text-brand-yellow" />
                      <h4 className="text-lg font-bold text-brand-white">✅ Paulo</h4>
                    </div>
                    <p className="text-gray-300 text-sm">Saiu de: <span className="line-through">R$ 100k/mês</span></p>
                    <p className="text-brand-yellow font-bold">Para: R$ 175k/mês</p>
                  </div>

                  <div className="p-4 rounded-lg border border-brand-yellow">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="w-5 h-5 text-brand-yellow" />
                      <h4 className="text-lg font-bold text-brand-white">✅ Telma</h4>
                    </div>
                    <p className="text-gray-300 text-sm">Saiu de: <span className="line-through">R$ 80k/mês</span></p>
                    <p className="text-brand-yellow font-bold">Para: R$ 150k/mês</p>
                  </div>
                </div>
              </div>

              {/* Truth Section */}
              <div className="border border-red-500/30 p-4 rounded-lg">
                <h3 className="text-xl md:text-2xl font-bold text-brand-white mb-3 text-center">
                  Aqui está a verdade que ninguém te conta:
                </h3>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed text-center">
                  <strong className="text-red-400">Cada dia que você adia resolver isso, seu concorrente está na frente.</strong> Cada cliente que poderia ter comprado de você está comprando dele. Cada real que você poderia ter faturado está indo para o bolso de outro lojista.
                </p>
              </div>

              {/* Choice Section */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-brand-white text-center">
                  Empresário(a), você tem duas opções:
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-red-500/30 p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-red-400 mb-2">Opção 1:</h4>
                    <p className="text-gray-300 text-sm">
                      Continuar tentando sozinho, perdendo tempo e dinheiro, vendo seus concorrentes crescerem enquanto você fica para trás.
                    </p>
                  </div>

                  <div className="border border-green-500/30 p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-green-400 mb-2">Opção 2:</h4>
                    <p className="text-gray-300 text-sm">
                      Usar o método que já funcionou para centenas de lojistas e começar a vender todos os dias de forma previsível.
                    </p>
                  </div>
                </div>

                <div className="border border-brand-yellow/30 p-4 rounded-lg">
                  <div className="space-y-3 text-gray-300 text-sm">
                    <p className="font-semibold text-brand-white">Se você escolher a opção 2, preciso te avisar uma coisa...</p>
                    <p>
                      <strong className="text-brand-yellow">Eu só trabalho com lojistas que estão dispostos a sair da zona de conforto.</strong> Não aceito quem quer resultado sem se comprometer. Não aceito quem acha que vai resolver com "jeitinho brasileiro".
                    </p>
                    <p>
                      Mas se você é sério, se realmente quer transformar sua loja na referência digital da sua cidade, então vamos agendar uma sessão de diagnóstico gratuita.
                    </p>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-b from-gray-900 to-brand-black border-brand-yellow animate-fade-in">
            <CardContent className="p-6 md:p-8 text-center space-y-5">
              <h2 className="text-3xl md:text-4xl font-black text-brand-white">
                Está Pronto Para Sair do
                <span className="block text-brand-yellow">Amadorismo?</span>
              </h2>
              
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Clique no botão abaixo e agende sua sessão de diagnóstico gratuita para descobrir como implementar isso na sua loja <strong className="text-brand-yellow">NOS PRÓXIMOS 30 DIAS.</strong>
              </p>

              <div className="space-y-4">
                <Button
                  onClick={handleScheduleClick}
                  className="bg-brand-yellow text-brand-black hover:bg-yellow-500 font-bold py-4 px-8 rounded-full text-lg shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto"
                >
                  <Calendar className="w-5 h-5" />
                  AGENDAR DIAGNÓSTICO GRATUITO
                  <ArrowRight className="w-5 h-5" />
                </Button>

                <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span>100% Gratuito</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span>30 Minutos</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span>Diagnóstico Completo</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Signature and P.S. Section */}
      <section className="py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-900 border-gray-800 animate-fade-in">
            <CardContent className="p-6 md:p-8 space-y-4">
              <div className="text-center space-y-3">
                <p className="text-lg text-gray-300">Forte abraço,</p>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-brand-yellow">[Herickson aia]</h3>
                  <p className="text-gray-400 text-sm">Especialista em Vendas Digitais para Lojistas</p>
                </div>
              </div>
              
              <div className="border-t border-gray-700 pt-4">
                <div className="space-y-3 text-gray-300 text-sm">
                  <p>
                    <strong className="text-brand-yellow">P.S.:</strong> Empresário(a), se você está lendo até aqui, é porque realmente quer resolver esse problema. Não deixe para amanhã o que pode resolver hoje. <strong className="text-red-400">Seus concorrentes não vão te esperar.</strong>
                  </p>
                  <p>
                    <strong className="text-brand-yellow">P.S.2:</strong> Quando você agendar sua sessão, vou te dar um <strong className="text-green-400">diagnóstico GRATUITO</strong> do seu Instagram e te mostrar exatamente onde estão os problemas. Mesmo que você não trabalhe comigo, já vai sair com um plano claro do que precisa fazer.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-3 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-xs">
            © 2024 Carta Para Lojistas Digitais. Transformando móveis em vendas digitais.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
