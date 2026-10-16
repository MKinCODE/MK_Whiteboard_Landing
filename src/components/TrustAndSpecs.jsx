import React from 'react';
import { ShieldCheck, HardDrive, WifiOff, FileCheck, Compass, PenTool, Check } from 'lucide-react';

export default function TrustAndSpecs() {
  const specs = [
    { label: "Operating System", value: "Windows 10 & Windows 11 (64-bit)" },
    { label: "Installer Package", value: "MK-Whiteboard-Setup-1.0.0.exe (NSIS Standalone Setup)" },
    { label: "Storage Architecture", value: "Local filesystem (.mkwhiteboard open format in Documents)" },
    { label: "Network & Telemetry", value: "0.0% — Strictly offline. Zero external network connections" },
    { label: "Inking Math", value: "Catmull-Rom spline curves + perfect-freehand velocity smoothing" },
    { label: "Virtual Ruler", value: "Rotatable acrylic straightedge with 45° magnetic detents" },
  ];

  return (
    <section id="features" style={{ padding: '60px 0', borderTop: '1px solid var(--color-border)' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="pill-badge" style={{ marginBottom: '14px' }}>
            Built for Privacy & Performance
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 3rem)',
              fontWeight: 400,
              color: 'var(--color-text-main)',
              letterSpacing: '-0.02em',
              marginBottom: '12px',
            }}
          >
            Why trust MK Whiteboard.
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--color-text-muted)', maxWidth: '580px', margin: '0 auto' }}>
            No subscriptions. No cloud databases. Just a fast, reliable Windows whiteboard that respects your data.
          </p>
        </div>

        {/* 4 Trust Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '18px',
            marginBottom: '48px',
          }}
        >
          <div className="clean-border-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <WifiOff size={20} color="var(--color-brand-blue)" />
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-text-main)' }}>
                100% Offline & Private
              </h3>
            </div>
            <p style={{ fontSize: '13.5px', color: 'var(--color-text-muted)', lineHeight: 1.55 }}>
              Zero cloud sync, no accounts, and zero telemetry. Not a single byte ever leaves your physical computer.
            </p>
          </div>

          <div className="clean-border-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <HardDrive size={20} color="var(--color-brand-blue)" />
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-text-main)' }}>
                Native File Ownership
              </h3>
            </div>
            <p style={{ fontSize: '13.5px', color: 'var(--color-text-muted)', lineHeight: 1.55 }}>
              Boards persist directly to disk as <code style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', backgroundColor: '#f1f5f9', padding: '2px 4px', borderRadius: '4px' }}>.mkwhiteboard</code> files in your Documents folder. Backup or Git-version them freely.
            </p>
          </div>

          <div className="clean-border-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <Compass size={20} color="var(--color-brand-blue)" />
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-text-main)' }}>
                45° Virtual Ruler & Inking
              </h3>
            </div>
            <p style={{ fontSize: '13.5px', color: 'var(--color-text-muted)', lineHeight: 1.55 }}>
              Draw straight snapped lines along the acrylic ruler, sketch with smooth Catmull-Rom splines, or use the cosmic Galaxy pen.
            </p>
          </div>

          <div className="clean-border-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <FileCheck size={20} color="var(--color-brand-blue)" />
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-text-main)' }}>
                Clean NSIS Installer
              </h3>
            </div>
            <p style={{ fontSize: '13.5px', color: 'var(--color-text-muted)', lineHeight: 1.55 }}>
              Standard Windows installer with desktop and Start Menu shortcuts, clean uninstaller, and zero bundled third-party bloat.
            </p>
          </div>
        </div>

        {/* Minimal Specifications Table (Template Style) */}
        <div id="specs" className="clean-border-card" style={{ overflow: 'hidden' }}>
          <div
            style={{
              padding: '16px 24px',
              backgroundColor: 'var(--color-bg-subtle)',
              borderBottom: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-text-main)', letterSpacing: '0.02em' }}>
              SPECIFICATIONS
            </span>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--color-brand-blue)', fontWeight: 600 }}>
              VERIFIED RELEASE v1.0.0
            </span>
          </div>

          <div>
            {specs.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(180px, 1fr) minmax(260px, 2fr)',
                  gap: '16px',
                  padding: '14px 24px',
                  borderBottom: idx === specs.length - 1 ? 'none' : '1px solid var(--color-border-subtle)',
                  backgroundColor: idx % 2 === 0 ? '#ffffff' : 'var(--color-bg-subtle)',
                  fontSize: '13.5px',
                }}
              >
                <div style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>
                  {item.label}
                </div>
                <div style={{ color: 'var(--color-text-muted)', fontFamily: item.value.includes('.exe') || item.value.includes('.mkwhiteboard') ? 'var(--font-mono)' : 'inherit', fontSize: '13px' }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
