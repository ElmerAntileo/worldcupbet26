'use client';

import { useState } from 'react';

const PROGRAMS = ['1xbet', 'betsson', 'betano', 'alfaleads', 'clickdealer', 'pmaff'];

export default function AdminLinksPage() {
  const [links, setLinks] = useState<Record<string, string>>({});
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const ADMIN_PASSWORD = 'worldcup2026'; // Change this!

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      // Load links from localStorage
      const savedLinks: Record<string, string> = {};
      PROGRAMS.forEach(prog => {
        const saved = localStorage.getItem(`affiliate_link_${prog}`);
        if (saved) savedLinks[prog] = saved;
      });
      setLinks(savedLinks);
    } else {
      alert('Wrong password!');
    }
  };

  const handleLinkChange = (program: string, url: string) => {
    setLinks(prev => ({
      ...prev,
      [program]: url,
    }));
  };

  const handleSave = (program: string) => {
    const url = links[program];
    if (!url) {
      alert(`Please enter a URL for ${program}`);
      return;
    }
    localStorage.setItem(`affiliate_link_${program}`, url);
    alert(`✅ ${program} link saved!`);
  };

  const handleSaveAll = () => {
    PROGRAMS.forEach(prog => {
      if (links[prog]) {
        localStorage.setItem(`affiliate_link_${prog}`, links[prog]);
      }
    });
    alert('✅ All links saved!');
  };

  if (!isAuthenticated) {
    return (
      <div style={{
        maxWidth: '400px',
        margin: '100px auto',
        padding: '30px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        fontFamily: 'Arial, sans-serif',
      }}>
        <h1>Admin Panel</h1>
        <p>Enter password to manage affiliate links:</p>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            boxSizing: 'border-box',
          }}
        />
        <button
          onClick={handleLogin}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: '900px',
      margin: '30px auto',
      padding: '30px',
      fontFamily: 'Arial, sans-serif',
    }}>
      <h1>🔗 Affiliate Links Manager</h1>
      <p style={{ color: '#666' }}>Easily update your affiliate links without editing code</p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        marginBottom: '20px',
      }}>
        {PROGRAMS.map(program => (
          <div key={program} style={{
            border: '1px solid #ddd',
            padding: '15px',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
          }}>
            <label style={{
              display: 'block',
              fontWeight: 'bold',
              marginBottom: '8px',
              textTransform: 'uppercase',
              color: '#333',
            }}>
              {program}
            </label>
            <textarea
              value={links[program] || ''}
              onChange={(e) => handleLinkChange(program, e.target.value)}
              placeholder={`Enter ${program} affiliate link...`}
              style={{
                width: '100%',
                height: '60px',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                fontFamily: 'monospace',
                fontSize: '12px',
                boxSizing: 'border-box',
                marginBottom: '8px',
              }}
            />
            <button
              onClick={() => handleSave(program)}
              style={{
                width: '100%',
                padding: '8px',
                backgroundColor: '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              Save {program}
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={handleSaveAll}
        style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          marginBottom: '20px',
        }}
      >
        💾 Save All Links
      </button>

      <div style={{
        backgroundColor: '#eff6ff',
        border: '1px solid #93c5fd',
        padding: '15px',
        borderRadius: '4px',
        fontSize: '14px',
      }}>
        <strong>📝 Instructions:</strong>
        <ul>
          <li>Paste your affiliate link in the field</li>
          <li>Click &quot;Save&quot; to save individual links</li>
          <li>Or click &quot;Save All Links&quot; to save everything at once</li>
          <li>Links are stored locally on your device</li>
          <li>When you get approved for new programs, paste the link here!</li>
        </ul>
      </div>

      <div style={{
        backgroundColor: '#fff3cd',
        border: '1px solid #ffc107',
        padding: '15px',
        borderRadius: '4px',
        marginTop: '15px',
        fontSize: '14px',
      }}>
        <strong>⚠️ Security Note:</strong>
        <p>Change the default password in /src/app/admin/links/page.tsx line 11</p>
      </div>
    </div>
  );
}
