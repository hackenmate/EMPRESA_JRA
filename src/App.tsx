import { motion } from 'motion/react'
import QRCode from 'react-qr-code'
import SelloVerificacion from '@/components/SelloVerificacion'
import logoIcono from '@/assets/brand/logo-icono.png'
import logoHorizontal from '@/assets/brand/logo-horizontal.jpg'
import logoBlanco from '@/assets/brand/logo-blanco.png'
import emblema from '@/assets/brand/emblema.png'
import selloAceite from '@/assets/brand/sello-aceite.png'
import camion from '@/assets/brand/camion-jra.jpg'
import plantaCilindro from '@/assets/brand/planta-cilindro.jpg'
import aceiteCocina from '@/assets/brand/aceite-cocina.jpg'
import equipoCamion from '@/assets/brand/equipo-camion.jpg'
import flyerTraslado from '@/assets/brand/aceite-flyer-traslado.jpg'
import flyerRecicla from '@/assets/brand/aceite-flyer-recicla.jpg'

const WHATSAPP =
  'https://wa.me/51980060691?text=Hola%20JRA,%20quiero%20una%20cotizaci%C3%B3n%20de%20gesti%C3%B3n%20de%20residuos'

const SITE_ORIGIN =
  typeof window !== 'undefined' ? window.location.origin : 'https://www.jra.com.pe'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

const galeria = [
  { src: plantaCilindro, alt: 'Operario JRA transportando cilindro en planta industrial', label: 'Operación en planta industrial' },
  { src: aceiteCocina, alt: 'Recolección de aceite vegetal usado en cocina', label: 'Recolección de aceite usado' },
  { src: equipoCamion, alt: 'Equipo JRA con bidones frente a la unidad', label: 'Equipo JRA en campo' },
  { src: camion, alt: 'Unidad de transporte JRA en Arequipa', label: 'Flota autorizada MTC' },
  { src: selloAceite, alt: 'Sello reciclaje aceite vegetal usado', label: 'Reciclaje certificado', contain: true },
  { src: emblema, alt: 'Emblema JRA seguridad calidad salud', label: 'Seguridad · Calidad · Salud', contain: true },
]

const services = [
  {
    icon: '🗑️',
    title: 'Residuos sólidos no peligrosos',
    desc: 'Recolectamos, transportamos y gestionamos la disposición final.',
    items: [
      'Acondicionamiento de áreas para zona de residuos',
      'Transporte y disposición final de residuos comunes',
      'Destrucción de archivos y productos vencidos (merma)',
      'Transporte y gestión de residuos orgánicos',
    ],
  },
  {
    icon: '☣️',
    title: 'Residuos sólidos peligrosos (RESPEL)',
    desc: 'Manejo integral desde la generación hasta la disposición final.',
    items: [
      'Acondicionamiento de áreas para RESPEL',
      'Transporte y disposición final de RESPEL',
      'Residuos biocontaminados (hospitalarios)',
      'Asesoría en gestión de RESPEL',
    ],
  },
  {
    icon: '🛢️',
    title: 'Residuos líquidos',
    desc: 'Estrategias de minimización del impacto ambiental.',
    items: [
      'Prospección de trampas de grasa y tanques sépticos',
      'Succión, transporte y disposición de aguas negras',
      'Succión de aguas oleosas y grasas',
      'Transporte y disposición de líquidos peligrosos',
    ],
  },
  {
    icon: '📋',
    title: 'Asesoría, consultoría y capacitación',
    desc: 'Acompañamos tu cumplimiento normativo de principio a fin.',
    items: [
      'Planes de manejo de residuos',
      'Sistemas de gestión: generación, segregación y disposición',
      'Proyectos en PTAR, trampas de grasa y VMA',
    ],
  },
  {
    icon: '🦺',
    title: 'Servicios especiales',
    desc: 'Soluciones integrales de una empresa multidisciplinaria.',
    items: [
      'Trabajos en espacios confinados',
      'Capacitación e implementación SST y medio ambiente',
      'Alquiler de equipo SCBA y medidor O₂ / LEL',
    ],
  },
  {
    icon: '🔄',
    title: 'Aprovechamiento y reciclaje',
    desc: 'Recuperamos lo valorizable antes del relleno sanitario.',
    items: [
      'Reciclaje de plásticos y baterías',
      'Recolección de aceite vegetal usado',
      'Programa "Sello Ecoamigable" para tus clientes',
    ],
  },
]

const registros = [
  'Registro Autoritativo MINAM — EO-RS-0115-18-40104',
  'Autorización Especial de Transporte de RESPEL por Carretera — MTC N° 871-2017-MTC/15',
  'Plan de Contingencia Nacional Aprobado — MTC N° 411-2018-MTC/19',
  'Registro Nacional de Proveedores del Estado — OSCE',
  'Póliza de Responsabilidad Civil vigente',
]

const ventajas = [
  { t: 'Servicio garantizado', d: 'Diseñamos sistemas a la medida de cada cliente.' },
  { t: 'Conservación del ambiente', d: 'Filosofía de cuidado y respeto en cada operación.' },
  { t: 'Capacitación constante', d: 'Equipo actualizado en normativa y seguridad.' },
]

function Nav() {
  return (
    <header className='fixed top-0 z-50 w-full border-b border-white/10 bg-trust-700/80 backdrop-blur-md'>
      <nav className='mx-auto flex max-w-6xl items-center justify-between px-6 py-3'>
        <a href='#inicio' className='flex items-center gap-2.5'>
          <img src={logoIcono} alt='JRA' className='h-10 w-10 object-contain' />
          <span className='text-lg font-extrabold tracking-tight text-white'>
            JRA<span className='font-light text-eco-300'> Servicios Ambientales</span>
          </span>
        </a>
        <div className='hidden items-center gap-6 text-sm font-medium text-white/80 md:flex'>
          <a href='#servicios' className='transition hover:text-white'>Servicios</a>
          <a href='#aceite' className='transition hover:text-white'>Aceite usado</a>
          <a href='#nosotros' className='transition hover:text-white'>Nosotros</a>
          <a href='#sello' className='transition hover:text-white'>Sello Ecoamigable</a>
          <a href='#contacto' className='transition hover:text-white'>Contacto</a>
        </div>
        <a
          href={WHATSAPP}
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-full bg-eco-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-eco-600'
        >
          Cotizar
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section
      id='inicio'
      className='relative overflow-hidden bg-gradient-to-br from-trust-900 via-trust-700 to-trust-600 pb-24 pt-32'
    >
      {/* halos decorativos */}
      <motion.div
        aria-hidden
        className='absolute -right-40 -top-32 h-[36rem] w-[36rem] rounded-full bg-eco-500/20 blur-3xl'
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className='absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-trust-500/30 blur-3xl'
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className='relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2'
        initial='hidden'
        animate='show'
        transition={{ staggerChildren: 0.1 }}
      >
        <div>
          <motion.span
            variants={fadeUp}
            className='inline-flex items-center gap-2 rounded-full border border-eco-300/40 bg-white/10 px-4 py-1.5 text-sm font-semibold text-eco-300'
          >
            <span className='h-2 w-2 animate-pulse rounded-full bg-eco-300' />
            Operadora de Residuos Sólidos autorizada por el MINAM
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className='mt-6 text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl'
          >
            Gestión integral de{' '}
            <span className='text-eco-300'>residuos</span> para empresas que
            cumplen.
          </motion.h1>

          <motion.p variants={fadeUp} className='mt-6 max-w-lg text-lg text-white/70'>
            Recolección, transporte y disposición final de residuos peligrosos y
            no peligrosos. Aprovechamos lo reciclable y respaldamos tu
            cumplimiento legal. 100&nbsp;% B2B · Arequipa y nivel nacional.
          </motion.p>

          <motion.div variants={fadeUp} className='mt-8 flex flex-wrap gap-4'>
            <a
              href={WHATSAPP}
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-full bg-eco-500 px-7 py-3 font-semibold text-white shadow-lg shadow-eco-500/40 transition hover:-translate-y-0.5 hover:bg-eco-600'
            >
              Solicitar cotización
            </a>
            <a
              href='#servicios'
              className='rounded-full border border-white/25 px-7 py-3 font-semibold text-white transition hover:border-white/60'
            >
              Ver servicios
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className='mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/60'
          >
            <span>✔ EO-RS-0115-18-40104</span>
            <span>✔ RUC 20455496668</span>
            <span>✔ Desde 2018</span>
          </motion.div>
        </div>

        {/* imagen principal */}
        <motion.div variants={fadeUp} className='relative'>
          <div className='overflow-hidden rounded-3xl border border-white/15 shadow-2xl shadow-black/40'>
            <img
              src={plantaCilindro}
              alt='Operario JRA transportando cilindro de residuos en planta industrial'
              className='h-full w-full object-cover'
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className='absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl'
          >
            <img src={emblema} alt='' className='h-12 w-12 object-contain' />
            <div>
              <div className='text-sm font-black text-trust-700'>Flota propia autorizada</div>
              <div className='text-xs text-trust-700/60'>MTC · Transporte de RESPEL</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function GaleriaMarquee() {
  const items = [...galeria, ...galeria] // duplicado para loop continuo
  return (
    <section className='overflow-hidden bg-white py-14'>
      <div className='mx-auto max-w-6xl px-6 text-center'>
        <h2 className='text-sm font-bold uppercase tracking-[0.2em] text-eco-600'>
          Nuestra operación
        </h2>
      </div>
      <div className='relative mt-8'>
        <div className='pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent' />
        <div className='pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent' />
        <div className='marquee-track flex w-max gap-6'>
          {items.map((g, i) => (
            <figure
              key={`${g.alt}-${i}`}
              className='group relative h-56 w-80 shrink-0 overflow-hidden rounded-2xl border border-eco-100 bg-eco-50/40 shadow-sm'
            >
              <img
                src={g.src}
                alt={g.alt}
                className={`h-full w-full transition duration-500 group-hover:scale-105 ${
                  g.contain ? 'object-contain p-6' : 'object-cover'
                }`}
              />
              <figcaption className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-trust-900/85 to-transparent px-4 pb-3 pt-8 text-sm font-semibold text-white'>
                {g.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Nosotros() {
  return (
    <section id='nosotros' className='scroll-mt-24 bg-eco-50/40 py-20'>
      <div className='mx-auto max-w-6xl px-6'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='text-3xl font-black tracking-tight text-trust-700 md:text-4xl'>
            Comprometidos con mejorar la calidad de vida a través de la{' '}
            <span className='text-eco-500'>gestión integral de residuos</span>.
          </h2>
          <p className='mt-5 text-lg leading-relaxed text-trust-700/70'>
            Gestionamos los residuos generados por las actividades productivas de
            tu empresa, con estricto respeto a la normativa nacional y al medio
            ambiente. Trabajamos de forma confiable y consciente, con una
            filosofía de cuidado del entorno.
          </p>
        </div>

        <div className='mt-12 grid gap-6 sm:grid-cols-3'>
          {ventajas.map((v, i) => (
            <motion.div
              key={v.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08 }}
              className='rounded-2xl border border-eco-100 bg-white p-6 text-center shadow-sm'
            >
              <div className='mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-eco-500 text-lg font-black text-white'>
                {i + 1}
              </div>
              <h3 className='mt-4 font-bold text-trust-700'>{v.t}</h3>
              <p className='mt-1 text-sm text-trust-700/60'>{v.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Servicios() {
  return (
    <section id='servicios' className='scroll-mt-24 bg-white py-20'>
      <div className='mx-auto max-w-6xl px-6'>
        <div className='text-center'>
          <h2 className='text-3xl font-black tracking-tight text-trust-700 md:text-4xl'>
            Nuestros servicios
          </h2>
          <p className='mt-3 text-trust-700/60'>
            Soluciones integrales para el manejo de todos tus residuos.
          </p>
        </div>
        <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: (i % 3) * 0.06 }}
              className='group flex flex-col rounded-2xl border border-eco-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-eco-300 hover:shadow-xl hover:shadow-eco-500/10'
            >
              <div className='text-3xl'>{s.icon}</div>
              <h3 className='mt-4 text-lg font-bold text-trust-700'>{s.title}</h3>
              <p className='mt-2 text-sm text-trust-700/60'>{s.desc}</p>
              <ul className='mt-4 space-y-1.5 border-t border-eco-100 pt-4 text-sm text-trust-700/70'>
                {s.items.map((it) => (
                  <li key={it} className='flex gap-2'>
                    <span className='text-eco-500'>✓</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Aceite() {
  const beneficios = [
    { icon: '📅', t: 'Recolección programada', d: 'Frecuencia adaptada a tu operación.' },
    { icon: '🚛', t: 'Transporte seguro y ordenado', d: 'Unidades y envases rotulados JRA.' },
    { icon: '💧', t: 'Evita contaminación', d: 'Protege el agua y el suelo: no va al desagüe.' },
  ]
  return (
    <section id='aceite' className='scroll-mt-24 overflow-hidden bg-gradient-to-br from-trust-50 via-white to-eco-50 py-20'>
      <div className='mx-auto max-w-6xl px-6'>
        <div className='grid items-center gap-10 lg:grid-cols-2'>
          <div>
            <span className='inline-flex items-center gap-2 rounded-full bg-trust-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-trust-600'>
              💧 Línea especializada
            </span>
            <h2 className='mt-4 text-3xl font-black tracking-tight text-trust-700 md:text-4xl'>
              Recicla tu <span className='text-eco-500'>aceite vegetal usado</span>
            </h2>
            <p className='mt-4 max-w-xl text-lg text-trust-700/70'>
              No lo deseches al desagüe: dale una disposición responsable. Nos
              encargamos del recojo, almacenamiento y transporte para su correcto
              reciclaje — desde la recolección hasta la disposición final. Ideal
              para restaurantes, pollerías, hoteles y negocios.
            </p>
            <div className='mt-8 space-y-4'>
              {beneficios.map((b, i) => (
                <motion.div
                  key={b.t}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.08 }}
                  className='flex items-start gap-4 rounded-2xl border border-eco-100 bg-white p-4 shadow-sm'
                >
                  <span className='text-2xl'>{b.icon}</span>
                  <div>
                    <div className='font-bold text-trust-700'>{b.t}</div>
                    <div className='text-sm text-trust-700/60'>{b.d}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            <a
              href={WHATSAPP}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-8 inline-block rounded-full bg-trust-500 px-7 py-3 font-semibold text-white shadow-lg shadow-trust-500/30 transition hover:-translate-y-0.5 hover:bg-trust-600'
            >
              Programar recojo de aceite
            </a>
          </div>

          {/* collage fotos aceite */}
          <div className='relative mx-auto grid max-w-md grid-cols-2 gap-4'>
            <motion.img
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={aceiteCocina}
              alt='Recolección de aceite vegetal usado en cocina'
              className='col-span-2 h-64 w-full rounded-3xl object-cover object-top shadow-xl'
            />
            <motion.img
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              src={flyerRecicla}
              alt='Campaña recicla tu aceite usado JRA'
              className='h-52 w-full rounded-2xl object-cover object-top shadow-lg'
            />
            <motion.img
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              src={flyerTraslado}
              alt='Traslado seguro de aceite vegetal usado JRA'
              className='h-52 w-full rounded-2xl object-cover object-top shadow-lg'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Registros() {
  return (
    <section className='bg-trust-700 py-20 text-white'>
      <div className='mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center'>
        <div>
          <h2 className='text-2xl font-black md:text-3xl'>
            Trabaja con un operador con papeles en regla
          </h2>
          <p className='mt-3 text-white/70'>
            Tu empresa es responsable de sus residuos ante la ley. Con JRA ese
            respaldo está garantizado y documentado.
          </p>
          <div className='mt-6 flex flex-wrap gap-x-10 gap-y-3 text-sm'>
            <div>
              <div className='text-white/50'>RUC</div>
              <div className='font-bold'>20455496668</div>
            </div>
            <div>
              <div className='text-white/50'>Sede</div>
              <div className='font-bold'>Hunter, Arequipa</div>
            </div>
            <div>
              <div className='text-white/50'>Cobertura</div>
              <div className='font-bold'>Nivel nacional</div>
            </div>
          </div>
          <img src={logoBlanco} alt='JRA' className='mt-8 h-16 object-contain' />
        </div>
        <ul className='space-y-3'>
          {registros.map((r, i) => (
            <motion.li
              key={r}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.07 }}
              className='flex items-start gap-3 rounded-xl bg-white/5 px-4 py-3 text-sm'
            >
              <span className='mt-0.5 text-eco-300'>🛡️</span>
              <span>{r}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Sello() {
  return (
    <section id='sello' className='scroll-mt-24 bg-gradient-to-br from-eco-50 to-white py-20'>
      <div className='mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[1fr_auto]'>
        <div className='text-center md:text-left'>
          <span className='inline-flex items-center gap-2 rounded-full bg-eco-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-eco-700'>
            🌿 Programa exclusivo
          </span>
          <h2 className='mt-4 text-2xl font-black text-trust-700 md:text-3xl'>
            Sello Ecoamigable con QR verificable
          </h2>
          <p className='mt-3 max-w-xl text-trust-700/70'>
            Tus clientes pegan un sticker con QR en su local. Al escanearlo,
            cualquiera confirma que ese negocio gestiona sus residuos con JRA,
            operadora autorizada por el MINAM. Marketing que respalda su
            reputación… y la tuya.
          </p>
          <a
            href={WHATSAPP}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-6 inline-block rounded-full bg-eco-500 px-7 py-3 font-semibold text-white shadow-lg shadow-eco-500/30 transition hover:-translate-y-0.5 hover:bg-eco-600'
          >
            Quiero el Sello para mi negocio
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
          viewport={{ once: true }}
          whileHover={{ rotate: 0, scale: 1.03 }}
          className='mx-auto w-64 rounded-3xl border-4 border-eco-500 bg-white p-5 text-center shadow-xl'
        >
          <img
            src={selloAceite}
            alt='Sello Ecoamigable JRA'
            className='mx-auto h-20 w-20 object-contain'
          />
          <p className='mt-2 text-sm font-black uppercase leading-tight text-eco-700'>
            Local Ecoamigable
          </p>
          <div className='mx-auto mt-3 w-fit rounded-xl bg-white p-2 ring-1 ring-eco-100'>
            <QRCode
              value={`${SITE_ORIGIN}?verificado=demo`}
              size={128}
              fgColor='#0b3a5c'
              bgColor='#ffffff'
            />
          </div>
          <p className='mt-3 text-[11px] font-semibold text-trust-700/60'>
            Escanéame · Verificado por JRA
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function Contacto() {
  return (
    <section id='contacto' className='scroll-mt-24 bg-white py-20 text-center'>
      <div className='mx-auto max-w-6xl px-6'>
        <h2 className='text-3xl font-black tracking-tight text-trust-700 md:text-4xl'>
          Contáctanos
        </h2>
        <p className='mt-3 text-trust-700/60'>
          Cotiza la gestión de residuos de tu empresa hoy mismo.
        </p>
        <div className='mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3'>
          <a
            href='tel:+51959470743'
            className='rounded-2xl border border-eco-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-eco-300'
          >
            <div className='text-2xl'>📞</div>
            <div className='mt-2 font-bold text-trust-700'>959 470 743</div>
            <div className='text-sm text-trust-700/60'>980 060 691</div>
          </a>
          <a
            href='mailto:comercial@jra.com.pe'
            className='rounded-2xl border border-eco-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-eco-300'
          >
            <div className='text-2xl'>✉️</div>
            <div className='mt-2 font-bold text-trust-700'>comercial@jra.com.pe</div>
            <div className='text-sm text-trust-700/60'>info@jra.com.pe</div>
          </a>
          <div className='rounded-2xl border border-eco-100 bg-white p-5 shadow-sm'>
            <div className='text-2xl'>📍</div>
            <div className='mt-2 font-bold text-trust-700'>Av. Las Américas 307</div>
            <div className='text-sm text-trust-700/60'>Jacobo Hunter, Arequipa</div>
          </div>
        </div>
        <a
          href={WHATSAPP}
          target='_blank'
          rel='noopener noreferrer'
          className='mt-10 inline-flex items-center gap-2 rounded-full bg-eco-500 px-8 py-3.5 font-semibold text-white shadow-lg shadow-eco-500/30 transition hover:-translate-y-0.5 hover:bg-eco-600'
        >
          💬 Escríbenos por WhatsApp
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className='border-t border-eco-100 bg-eco-50/40 py-10'>
      <div className='mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center'>
        <img
          src={logoHorizontal}
          alt='JRA Servicios Ambientales EIRL'
          className='h-20 object-contain'
        />
        <p className='text-sm text-trust-700/50'>
          © {new Date().getFullYear()} J.R.A. Servicios Ambientales E.I.R.L. ·
          Arequipa, Perú · www.jra.com.pe
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  // Enrutado simple: /?verificado=nombre-empresa muestra la página del Sello
  const verificado =
    typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search).get('verificado')
      : null

  if (verificado !== null) {
    return <SelloVerificacion nombre={verificado} />
  }

  return (
    <main className='min-h-screen bg-white'>
      <Nav />
      <Hero />
      <GaleriaMarquee />
      <Nosotros />
      <Servicios />
      <Aceite />
      <Registros />
      <Sello />
      <Contacto />
      <Footer />
    </main>
  )
}
