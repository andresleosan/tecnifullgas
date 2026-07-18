import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import Button from './common/Button';
import ScrollReveal from './ScrollReveal';
import { INSTAGRAM_URL } from '../utils/constants';

export default function NuestrasRedes() {
  return (
    <section
      id="nuestras-redes"
      className="social-surface px-6 sm:px-8 lg:px-12 py-16 sm:py-20 text-white"
    >
      <ScrollReveal>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Nuestras Redes</h2>
            <p className="text-xl sm:text-2xl opacity-80 max-w-3xl mx-auto">
              Síguenos y mantente informado sobre nuestros servicios, promociones y novedades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Instagram Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                  <FaInstagram className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold">Instagram</h3>
              </div>
              <p className="text-lg opacity-90 mb-8 leading-relaxed">
                Conoce nuestros trabajos, promociones y contenido diario.
              </p>
              <Button
                variant="secondary"
                text="Seguir en Instagram"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-white text-white hover:bg-white hover:text-tf-dark"
              />
            </div>

            {/* Facebook Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
                  <FaFacebookF className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold">Facebook</h3>
              </div>
              <p className="text-lg opacity-90 mb-8 leading-relaxed">
                Mantente al día con nuestras publicaciones y noticias.
              </p>
              <Button
                variant="secondary"
                text="Visitar Facebook"
                href="https://www.facebook.com/profile.php?id=61590600920439"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-white text-white hover:bg-white hover:text-tf-dark"
              />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
