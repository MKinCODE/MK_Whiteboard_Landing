import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const downloadUrl = "https://github.com/MKinCODE/MK_Whiteboard/releases/download/v1.0.0/MK-Whiteboard-Setup-1.0.0.exe";
  const repoUrl = "https://github.com/MKinCODE/MK_Whiteboard";

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.94)' : 'var(--color-bg)',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        transition: 'all 0.2s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
        }}
      >
        {/* Brand */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <img
            src="/mk-logo.svg"
            alt="MK Whiteboard Logo"
            style={{ width: '32px', height: '32px' }}
          />
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: '17px',
              letterSpacing: '-0.02em',
              color: 'var(--color-text-main)',
            }}
          >
            MK Whiteboard
          </span>
        </a>

        {/* Minimal Nav Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          <a
            href="#features"
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--color-text-muted)',
              transition: 'color 0.15s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = 'var(--color-text-main)')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
          >
            Features
          </a>
          <a
            href="#specs"
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--color-text-muted)',
              transition: 'color 0.15s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = 'var(--color-text-main)')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
          >
            Specifications
          </a>
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--color-text-muted)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'color 0.15s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = 'var(--color-text-main)')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
          >
            <span>GitHub</span>
            <ExternalLink size={12} />
          </a>
        </nav>

        {/* Right CTA Button */}
        <div>
          <a
            href={downloadUrl}
            className="pill-button pill-button-primary"
            style={{
              padding: '9px 18px',
              fontSize: '14px',
            }}
          >
            <span>Download ↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
