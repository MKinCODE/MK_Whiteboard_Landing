import React, { useState } from 'react';
import {
  PenTool,
  Sparkles,
  Highlighter,
  Eraser,
  Compass,
  StickyNote,
  Shapes,
  Download,
  FolderOpen,
  Save,
  Maximize2,
  Minus,
  X
} from 'lucide-react';

export default function InteractiveAppPreview() {
  const [activeTab, setActiveTab] = useState('ruler');

  return (
    <section style={{ padding: '16px 0 48px' }}>
      <div className="container" style={{ maxWidth: '1040px' }}>
        {/* Subtle Tab Switcher */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '16px',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => setActiveTab('ruler')}
            style={{
              padding: '6px 16px',
              fontSize: '13px',
              fontWeight: 500,
              borderRadius: '9999px',
              border: '1px solid',
              borderColor: activeTab === 'ruler' ? 'var(--color-brand-blue)' : 'var(--color-border)',
              backgroundColor: activeTab === 'ruler' ? 'var(--color-brand-blue-subtle)' : '#ffffff',
              color: activeTab === 'ruler' ? 'var(--color-brand-blue)' : 'var(--color-text-muted)',
              transition: 'all 0.15s ease',
            }}
          >
            Virtual 45° Ruler
          </button>

          <button
            onClick={() => setActiveTab('pen')}
            style={{
              padding: '6px 16px',
              fontSize: '13px',
              fontWeight: 500,
              borderRadius: '9999px',
              border: '1px solid',
              borderColor: activeTab === 'pen' ? 'var(--color-brand-blue)' : 'var(--color-border)',
              backgroundColor: activeTab === 'pen' ? 'var(--color-brand-blue-subtle)' : '#ffffff',
              color: activeTab === 'pen' ? 'var(--color-brand-blue)' : 'var(--color-text-muted)',
              transition: 'all 0.15s ease',
            }}
          >
            Fluid Inking & Galaxy Pen
          </button>

          <button
            onClick={() => setActiveTab('notes')}
            style={{
              padding: '6px 16px',
              fontSize: '13px',
              fontWeight: 500,
              borderRadius: '9999px',
              border: '1px solid',
              borderColor: activeTab === 'notes' ? 'var(--color-brand-blue)' : 'var(--color-border)',
              backgroundColor: activeTab === 'notes' ? 'var(--color-brand-blue-subtle)' : '#ffffff',
              color: activeTab === 'notes' ? 'var(--color-brand-blue)' : 'var(--color-text-muted)',
              transition: 'all 0.15s ease',
            }}
          >
            Pastel Notes & Brainstorming
          </button>
        </div>

        {/* Windows 11 App Window Frame */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '14px',
            border: '1px solid var(--color-border-strong)',
            boxShadow: '0 16px 40px -12px rgba(15, 23, 42, 0.1)',
            overflow: 'hidden',
          }}
        >
          {/* Windows Title Bar */}
          <div
            style={{
              height: '36px',
              backgroundColor: '#f8fafc',
              borderBottom: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 14px',
              userSelect: 'none',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img src="/mk-logo.svg" alt="App Logo" style={{ width: '16px', height: '16px' }} />
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--color-text-muted)',
                }}
              >
                Board-1.mkwhiteboard — MK Whiteboard
              </span>
              <span
                style={{
                  fontSize: '10px',
                  backgroundColor: '#e2e8f0',
                  color: '#475569',
                  padding: '1px 6px',
                  borderRadius: '4px',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                }}
              >
                100% LOCAL DISK
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#64748b' }}>
              <Minus size={12} />
              <Maximize2 size={11} />
              <X size={12} />
            </div>
          </div>

          {/* Whiteboard In-App Toolbar */}
          <div
            style={{
              height: '46px',
              backgroundColor: '#ffffff',
              borderBottom: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 14px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#334155' }}>
              <FolderOpen size={14} color="var(--color-brand-blue)" />
              <span>%USERPROFILE%\Documents\MK Whiteboard</span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                backgroundColor: '#f8fafc',
                padding: '3px 6px',
                borderRadius: '6px',
                border: '1px solid var(--color-border)',
              }}
            >
              <button
                onClick={() => setActiveTab('pen')}
                style={{
                  padding: '4px 8px',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  backgroundColor: activeTab === 'pen' ? '#0f172a' : 'transparent',
                  color: activeTab === 'pen' ? '#ffffff' : '#334155',
                  fontSize: '11px',
                  fontWeight: 500,
                }}
              >
                <PenTool size={13} />
                <span>Pen (P)</span>
              </button>

              <button
                onClick={() => setActiveTab('ruler')}
                style={{
                  padding: '4px 8px',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  backgroundColor: activeTab === 'ruler' ? '#0f172a' : 'transparent',
                  color: activeTab === 'ruler' ? '#ffffff' : '#334155',
                  fontSize: '11px',
                  fontWeight: 500,
                }}
              >
                <Compass size={13} />
                <span>Ruler (R)</span>
              </button>

              <button
                onClick={() => setActiveTab('notes')}
                style={{
                  padding: '4px 8px',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  backgroundColor: activeTab === 'notes' ? '#0f172a' : 'transparent',
                  color: activeTab === 'notes' ? '#ffffff' : '#334155',
                  fontSize: '11px',
                  fontWeight: 500,
                }}
              >
                <StickyNote size={13} />
                <span>Note (N)</span>
              </button>
            </div>

            <div style={{ fontSize: '11px', fontWeight: 600, color: '#334155' }}>
              Export: SVG / PNG
            </div>
          </div>

          {/* Canvas Simulation Viewport */}
          <div
            style={{
              position: 'relative',
              height: '380px',
              backgroundColor: '#fbfcfd',
              backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              overflow: 'hidden',
            }}
          >
            {activeTab === 'ruler' && (
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <svg
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                  }}
                >
                  <line
                    x1="180"
                    y1="270"
                    x2="600"
                    y2="90"
                    stroke="#0284c7"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="180"
                    y1="270"
                    x2="600"
                    y2="270"
                    stroke="#cbd5e1"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <text x="340" y="290" fill="#64748b" fontSize="12" fontFamily="var(--font-mono)">
                    dx: 420px | dy: 180px
                  </text>
                </svg>

                {/* Simulated Virtual Ruler */}
                <div
                  style={{
                    position: 'absolute',
                    top: '160px',
                    left: '160px',
                    width: '480px',
                    height: '68px',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1.5px solid #0f172a',
                    borderRadius: '6px',
                    transform: 'rotate(-23.5deg)',
                    transformOrigin: 'top left',
                    boxShadow: '0 8px 24px rgba(15, 23, 42, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '4px 12px',
                    userSelect: 'none',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    {[...Array(24)].map((_, i) => (
                      <div
                        key={i}
                        style={{
                          width: '1px',
                          height: i % 5 === 0 ? '12px' : '6px',
                          backgroundColor: i % 5 === 0 ? '#0f172a' : '#94a3b8',
                          position: 'relative',
                        }}
                      >
                        {i % 5 === 0 && (
                          <span
                            style={{
                              position: 'absolute',
                              top: '14px',
                              left: '-4px',
                              fontSize: '8px',
                              fontWeight: 600,
                              color: '#475569',
                              fontFamily: 'var(--font-mono)',
                            }}
                          >
                            {i}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      alignSelf: 'center',
                      backgroundColor: '#0f172a',
                      color: '#ffffff',
                      padding: '1px 8px',
                      borderRadius: '9999px',
                      fontSize: '10px',
                      fontWeight: 600,
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    ANGLE: 45.0° (SNAPPED)
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    {[...Array(24)].map((_, i) => (
                      <div
                        key={i}
                        style={{
                          width: '1px',
                          height: i % 5 === 0 ? '8px' : '4px',
                          backgroundColor: '#94a3b8',
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    padding: '8px 14px',
                    fontSize: '12px',
                    color: '#475569',
                  }}
                >
                  <strong>Virtual Ruler (Shortcut: R):</strong> Drag, rotate via scroll wheel, draw straight lines aligned with ruler edge.
                </div>
              </div>
            )}

            {activeTab === 'pen' && (
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                  <path
                    d="M 100 130 C 180 40, 240 200, 320 110 S 440 60, 520 140"
                    fill="none"
                    stroke="#0f172a"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <text x="100" y="160" fill="#0f172a" fontSize="13" fontWeight="600">
                    Catmull-Rom Inking • Pressure Sensitive Curves
                  </text>

                  <path
                    d="M 90 220 L 480 220"
                    fill="none"
                    stroke="#fde047"
                    strokeWidth="20"
                    strokeLinecap="square"
                    opacity="0.6"
                  />
                  <text x="100" y="225" fill="#0f172a" fontSize="14" fontWeight="700">
                    Windows Native 2D Canvas — Sub-1ms Latency
                  </text>

                  <path
                    d="M 120 300 Q 260 350, 400 300 T 640 300"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <text x="120" y="330" fill="#0284c7" fontSize="12" fontWeight="600">
                    Galaxy Pen • Multi-color Cosmic Vector Inking
                  </text>
                </svg>
              </div>
            )}

            {activeTab === 'notes' && (
              <div style={{ position: 'relative', width: '100%', height: '100%', padding: '30px' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: '50px',
                    left: '80px',
                    width: '210px',
                    height: '180px',
                    backgroundColor: 'var(--sticky-yellow)',
                    border: '1px solid var(--sticky-yellow-border)',
                    borderRadius: '4px',
                    padding: '14px',
                    transform: 'rotate(-2deg)',
                  }}
                >
                  <div style={{ fontSize: '10px', fontWeight: 700, color: '#854d0e', textTransform: 'uppercase' }}>
                    100% Local-First
                  </div>
                  <div style={{ fontSize: '12px', color: '#1c1917', marginTop: '6px', fontWeight: 500 }}>
                    All boards stay on your PC as standard .mkwhiteboard files.
                  </div>
                </div>

                <div
                  style={{
                    position: 'absolute',
                    top: '70px',
                    left: '340px',
                    width: '210px',
                    height: '180px',
                    backgroundColor: 'var(--sticky-blue)',
                    border: '1px solid var(--sticky-blue-border)',
                    borderRadius: '4px',
                    padding: '14px',
                    transform: 'rotate(1deg)',
                  }}
                >
                  <div style={{ fontSize: '10px', fontWeight: 700, color: '#1e40af', textTransform: 'uppercase' }}>
                    Zero Telemetry
                  </div>
                  <div style={{ fontSize: '12px', color: '#0f172a', marginTop: '6px', fontWeight: 500 }}>
                    No tracking, no user accounts, and zero cloud lock-in.
                  </div>
                </div>

                <div
                  style={{
                    position: 'absolute',
                    top: '60px',
                    left: '600px',
                    width: '210px',
                    height: '180px',
                    backgroundColor: 'var(--sticky-green)',
                    border: '1px solid var(--sticky-green-border)',
                    borderRadius: '4px',
                    padding: '14px',
                    transform: 'rotate(-1deg)',
                  }}
                >
                  <div style={{ fontSize: '10px', fontWeight: 700, color: '#166534', textTransform: 'uppercase' }}>
                    Fluent Pastels
                  </div>
                  <div style={{ fontSize: '12px', color: '#052e16', marginTop: '6px', fontWeight: 500 }}>
                    Quick sticky notes, 3x3 matrices, and geometric shapes.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
