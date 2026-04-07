'use client';
import { Shield, Monitor, Globe } from 'lucide-react';

export default function Page() {
  return (
    <div className="dashboard-container">
      <header>
        <h1 style={{ marginBottom: '10px' }}>
          Header<span className="text-cyan">Logic</span>.
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>Microservice for header parsing and origin identification.</p>
      </header>

      <section>
        <h2>Example Usage</h2>
        <ul>
          <li>
            <a href="/api/whoami" className="example">
              <code>GET /api/whoami</code> → Parse Request Headers
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>Example Output</h2>
        <code>
          {`{ "ipaddress": "127.0.0.1", "language": "en-US", "software": "Mozilla..." }`}
        </code>
      </section>

      <div style={{ marginTop: '30px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
         <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
           <Shield size={16} /> Privacy-First Parsing
         </div>
         <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
           <Monitor size={16} /> Device Analytics
         </div>
         <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
           <Globe size={16} /> Geo-Detect Ready
         </div>
      </div>
    </div>
  );
}
