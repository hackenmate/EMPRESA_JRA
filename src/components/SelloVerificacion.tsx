import { motion } from 'motion/react'
import logoIcono from '@/assets/brand/logo-icono.png'

const WHATSAPP =
  'https://wa.me/51980060691?text=Hola%20JRA,%20quiero%20el%20Sello%20Ecoamigable%20para%20mi%20negocio'

function prettify(slug: string) {
  if (!slug) return 'Establecimiento afiliado'
  return slug
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

export default function SelloVerificacion({ nombre }: { nombre: string }) {
  const empresa = prettify(nombre)

  return (
    <main className='flex min-h-screen items-center justify-center bg-gradient-to-br from-trust-700 via-trust-600 to-eco-600 px-4 py-10'>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className='w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl'
      >
        {/* cabecera */}
        <div className='flex flex-col items-center bg-eco-500 px-8 pb-8 pt-10 text-center'>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.25, type: 'spring', stiffness: 200 }}
            className='flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg'
          >
            <span className='text-4xl'>✅</span>
          </motion.div>
          <h1 className='mt-5 text-2xl font-black text-white'>
            Local Ecoamigable Verificado
          </h1>
          <p className='mt-1 text-sm text-white/80'>
            Compromiso ambiental comprobable
          </p>
        </div>

        {/* cuerpo */}
        <div className='px-8 py-8 text-center'>
          <p className='text-sm text-trust-700/60'>Este establecimiento</p>
          <p className='mt-1 text-xl font-black text-trust-700'>{empresa}</p>
          <p className='mt-4 leading-relaxed text-trust-700/75'>
            gestiona sus residuos de forma responsable con{' '}
            <strong className='text-eco-600'>JRA Servicios Ambientales</strong>,
            Empresa Operadora de Residuos Sólidos autorizada por el MINAM.
          </p>

          <div className='mt-6 grid grid-cols-3 gap-3'>
            {[
              { n: '100%', l: 'Trazabilidad' },
              { n: 'MINAM', l: 'Autorizado' },
              { n: '♻️', l: 'Reciclaje' },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className='rounded-2xl bg-eco-50 py-4'
              >
                <div className='text-lg font-black text-trust-600'>{s.n}</div>
                <div className='mt-0.5 text-xs text-trust-700/60'>{s.l}</div>
              </motion.div>
            ))}
          </div>

          <div className='mt-6 rounded-2xl border border-eco-100 bg-white p-4 text-left text-xs text-trust-700/60'>
            <div className='flex items-center gap-2'>
              <img src={logoIcono} alt='JRA' className='h-8 w-8 object-contain' />
              <div>
                <div className='font-bold text-trust-700'>
                  J.R.A. Servicios Ambientales E.I.R.L.
                </div>
                <div>Registro MINAM EO-RS-0115-18-40104 · Arequipa, Perú</div>
              </div>
            </div>
          </div>

          <a
            href={WHATSAPP}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-6 inline-block w-full rounded-full bg-eco-500 px-6 py-3 font-semibold text-white transition hover:bg-eco-600'
          >
            Quiero el Sello para mi negocio
          </a>
          <a
            href='/'
            className='mt-3 inline-block text-sm text-trust-600 hover:underline'
          >
            Conoce a JRA Servicios Ambientales →
          </a>
        </div>
      </motion.div>
    </main>
  )
}
