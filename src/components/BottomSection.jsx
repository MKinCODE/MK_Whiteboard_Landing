import React from 'react';
import { Download, ExternalLink } from 'lucide-react';

export default function BottomSection() {
  const downloadUrl = "https://github.com/MKinCODE/MK_Whiteboard/releases/download/v1.0.0/MK-Whiteboard-Setup-1.0.0.exe";
  const repoUrl = "https://github.com/MKinCODE/MK_Whiteboard";

  return (
    <section id="download" style={{ paddingTop: '72px', borderTop: '1px solid var(--color-border)', backgroundColor: '#ffffff' }}>
      <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
        {/* Main Download Callout - Matching Reference Image 2 */}
        <h2
          className="font-serif"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 400,
            lineHeight: 1.1,
            color: 'var(--color-text-main)',
            letterSpacing: '-0.02em',
            marginBottom: '16px',
          }}
        >
          Get MK Whiteboard
        </h2>

        <p
          style={{
            fontSize: '16px',
            color: 'var(--color-text-muted)',
            lineHeight: 1.6,
            maxWidth: '540px',
            margin: '0 auto 32px',
          }}
        >
          Download the standalone Windows executable. 100% offline, zero cloud lock-in, and instant setup.
        </p>

        {/* Download Button */}
        <div style={{ display: 'inline-flex', marginBottom: '40px' }}>
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
            <span>Download MK-Whiteboard-Setup-1.0.0.exe</span>
            <span style={{ fontSize: '15px' }}>↗</span>
          </a>
        </div>

        {/* Developer Attribution Card */}
        <div
          style={{
            backgroundColor: 'var(--color-bg-subtle)',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            textAlign: 'left',
            marginBottom: '64px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img
              src="/mk-logo.svg"
              alt="MK Logo"
              style={{ width: '28px', height: '28px' }}
            />
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-text-main)' }}>
                Developed by MKinCODE
              </div>
              <div style={{ fontSize: '12.5px', color: 'var(--color-text-muted)' }}>
                An independent, local-first Windows application built with Electron and Canvas inking.
              </div>
            </div>
          </div>

          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="pill-button pill-button-secondary"
            style={{
              padding: '8px 16px',
              fontSize: '13px',
              fontWeight: 600,
            }}
          >
            <span>View GitHub Repository</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      {/* Bottom Nav Bar - Directly Matching Reference Image 2 */}
      <div
        style={{
          borderTop: '1px solid var(--color-border)',
          padding: '24px 0',
          backgroundColor: '#ffffff',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          {/* Left Nav Links - Matching Reference Image 2: "Benefits Specifications How-to" */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            <a
              href="#features"
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--color-text-main)',
              }}
            >
              Benefits
            </a>
            <a
              href="#specs"
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--color-text-main)',
              }}
            >
              Specifications
            </a>
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--color-text-main)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <span>GitHub</span>
              <ExternalLink size={12} />
            </a>
          </div>

          {/* Right Download CTA Button - Matching Reference Image 2 Pill */}
          <div>
            <a
              href={downloadUrl}
              className="pill-button pill-button-primary"
              style={{
                padding: '9px 20px',
                fontSize: '14px',
                fontWeight: 600,
              }}
            >
              <span>Download ↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
