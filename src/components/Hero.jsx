import React from 'react';
import { Download, ShieldCheck, HardDrive, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const downloadUrl = "https://github.com/MKinCODE/MK_Whiteboard/releases/download/v1.0.0/MK-Whiteboard-Setup-1.0.0.exe";

  return (
    <section style={{ paddingTop: '56px', paddingBottom: '36px', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        {/* Eyebrow Pill */}
        <div style={{ display: 'inline-flex', marginBottom: '24px' }}>
          <div className="pill-badge">
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-brand-blue)',
                display: 'inline-block',
              }}
            />
            <span>v1.0.0 for Windows 10 & 11</span>
          </div>
        </div>

        {/* Big Editorial Serif Headline */}
        <h1
          className="font-serif"
          style={{
            fontSize: 'clamp(2.75rem, 6.2vw, 5.25rem)',
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            color: 'var(--color-text-main)',
            marginBottom: '20px',
          }}
        >
          Draw everything.
          <br />
          <span style={{ fontStyle: 'italic', color: 'var(--color-brand-blue)' }}>
            Saved strictly
          </span>{' '}
          to your PC.
        </h1>

        {/* Clean Subtitle */}
        <p
          style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            color: 'var(--color-text-muted)',
            lineHeight: 1.6,
            maxWidth: '640px',
            margin: '0 auto 32px',
          }}
        >
          A 100% local-first, private Windows desktop whiteboard.
          Fluid pressure-sensitive inking, 45° virtual ruler, sticky notes, and direct filesystem persistence.
        </p>

        {/* Main Download Button */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <a
            href={downloadUrl}
            className="pill-button pill-button-primary"
            style={{
              padding: '16px 36px',
              fontSize: '16px',
              fontWeight: 600,
              boxShadow: '0 4px 14px rgba(15, 23, 42, 0.12)',
            }}
          >
            <Download size={18} strokeWidth={2.2} />
            <span>Download for Windows (.exe)</span>
            <span style={{ fontSize: '15px' }}>↗</span>
          </a>

          {/* Quick Trust Meta Strip */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap',
              fontSize: '12.5px',
              color: 'var(--color-text-subtle)',
              fontFamily: 'var(--font-mono)',
              marginTop: '4px',
            }}
          >
            <span>v1.0.0 STANDALONE SETUP</span>
            <span>•</span>
            <span>WINDOWS 10 / 11 64-BIT</span>
            <span>•</span>
            <span>100% OFFLINE</span>
            <span>•</span>
            <span>ZERO TELEMETRY</span>
          </div>
        </div>
      </div>
    </section>
  );
}
