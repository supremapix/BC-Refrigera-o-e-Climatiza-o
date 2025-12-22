import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { Home, Search, Phone } from 'lucide-react';
import { COMPANY } from '../constants';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Página Não Encontrada - 404"
        description="A página que você está procurando não foi encontrada. Volte para a página inicial ou entre em contato conosco."
        canonical="https://bcrefrigeracaosc.com.br/404"
      />

      <div className="min-h-screen bg-slate-950 text-white flex flex-col">
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[150px]" />
          <div className="absolute bottom-[0%] right-[-10%] w-[50%] h-[50%] bg-cyan-400/5 blur-[150px]" />
        </div>

        <Header />

        <main className="flex-1 flex items-center justify-center px-6 py-24">
          <div className="text-center max-w-2xl">
            <div className="mb-8">
              <Search className="w-24 h-24 text-cyan-400 mx-auto opacity-50" />
            </div>

            <h1 className="text-8xl font-black mb-4 gradient-text">404</h1>
            <h2 className="text-3xl font-bold mb-6">Página Não Encontrada</h2>

            <p className="text-xl text-slate-400 mb-12">
              Ops! A página que você está procurando não existe ou foi removida.
              Mas não se preocupe, podemos te ajudar a encontrar o que precisa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full font-bold hover:scale-105 transition-transform"
              >
                <Home size={20} />
                Voltar para Home
              </Link>
              <a
                href={COMPANY.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 rounded-full font-bold hover:scale-105 transition-transform"
              >
                <Phone size={20} />
                Falar no WhatsApp
              </a>
            </div>

            <div className="mt-16 p-8 rounded-3xl bg-slate-900/50 border border-slate-800">
              <h3 className="text-xl font-bold mb-4">Precisa de Ajuda?</h3>
              <p className="text-slate-400 mb-4">
                Entre em contato conosco e teremos prazer em ajudá-lo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <a href={`tel:${COMPANY.phone.replace(/\D/g, '')}`} className="text-cyan-400 hover:underline">
                  {COMPANY.phone}
                </a>
                <span className="hidden sm:inline text-slate-600">|</span>
                <a href={`mailto:${COMPANY.email}`} className="text-cyan-400 hover:underline">
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};
