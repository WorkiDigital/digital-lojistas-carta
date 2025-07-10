
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
              Sobre o que está realmente impedindo sua loja de móveis de vender no digital
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

      {/* Authority Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gray-900 border-gray-800 animate-fade-in">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-white">
                    4 Anos Transformando Lojistas
                  </h2>
                  <p className="text-xl text-brand-yellow font-semibold">
                    90% dos lojistas que não vendem no digital cometem os mesmos 3 erros...
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className="bg-brand-black p-6 rounded-lg border border-brand-yellow">
                    <div className="flex items-center gap-4 mb-4">
                      <TrendingUp className="w-8 h-8 text-brand-yellow" />
                      <div>
                        <h3 className="text-xl font-bold text-brand-white">Paulo - Móveis Rústicos</h3>
                        <p className="text-gray-400">Santos, SP</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-300">Antes: <span className="line-through">R$ 100k/mês</span></p>
                      <p className="text-brand-yellow font-bold text-lg">Depois: R$ 175k/mês</p>
                      <p className="text-sm text-gray-400 italic">"Agora o Instagram trabalha pra mim 24h"</p>
                    </div>
                  </div>

                  <div className="bg-brand-black p-6 rounded-lg border border-brand-yellow">
                    <div className="flex items-center gap-4 mb-4">
                      <Users className="w-8 h-8 text-brand-yellow" />
                      <div>
                        <h3 className="text-xl font-bold text-brand-white">Telma - Design de Interiores</h3>
                        <p className="text-gray-400">Ribeirão Preto, SP</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-300">Antes: <span className="line-through">R$ 80k/mês</span></p>
                      <p className="text-brand-yellow font-bold text-lg">Depois: R$ 150k/mês</p>
                      <p className="text-sm text-gray-400 italic">"Triplicou minha lista de espera"</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Problem Diagnosis */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-900 border-gray-800 animate-fade-in">
            <CardContent className="p-8 md:p-12 text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-white">
                A Verdade Que Ninguém Te Conta
              </h2>
              
              <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-brand-white">Você tem um bom produto, bom atendimento</strong>, mas está perdendo dinheiro com erros bobos.
                </p>
                
                <p>
                  Enquanto isso, seu <span className="text-brand-yellow font-semibold">concorrente vende pelo Instagram e WhatsApp</span> mesmo tendo um produto inferior ao seu.
                </p>
                
                <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-lg">
                  <p className="text-red-300 font-semibold text-xl">
                    ⚠️ Cada dia que você adia, seu concorrente avança.
                  </p>
                </div>
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
                  Você Tem Duas Escolhas
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  {/* Option 1 */}
                  <div className="bg-red-900/20 border border-red-500/30 p-8 rounded-lg">
                    <h3 className="text-xl font-bold text-red-300 mb-4">❌ Continuar Tentando Sozinho</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li>• Postando sem estratégia</li>
                      <li>• Perdendo clientes para concorrentes</li>
                      <li>• Gastando tempo sem resultados</li>
                      <li>• Vendo suas vendas estagnar</li>
                    </ul>
                  </div>

                  {/* Option 2 */}
                  <div className="bg-green-900/20 border border-green-500/30 p-8 rounded-lg">
                    <h3 className="text-xl font-bold text-green-300 mb-4">✅ Seguir um Método Comprovado</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li>• Resultados em menos de 30 dias</li>
                      <li>• Sistema que funciona 24h</li>
                      <li>• Clientes chegando pelo Instagram</li>
                      <li>• Mais vendas, menos esforço</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-brand-yellow/10 border border-brand-yellow/30 p-6 rounded-lg mt-8">
                  <p className="text-brand-yellow font-semibold text-lg">
                    ⚡ Só trabalho com lojistas comprometidos, que não querem "jeitinho brasileiro"
                  </p>
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
                Uma conversa de 30 minutos pode ser o divisor de águas da sua loja. 
                Vamos descobrir exatamente o que está travando suas vendas.
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
                    <span>Sem Compromisso</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Diagnóstico Completo</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 mt-8">
                <p className="text-gray-300 italic">
                  <strong className="text-brand-yellow">P.S.:</strong> Mesmo que você não feche comigo, 
                  vai sair com um plano claro do que precisa fazer para transformar sua loja.
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
