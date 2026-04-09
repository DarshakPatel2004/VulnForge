/*
   VulnForge - Precision Threat Intelligence Platform
   Made by Darshak Patel
   [dp-watermark-2026]
*/

import React, { useState } from 'react';
import { api } from '../api.js';

const TABS = [
  { id: 'snort', label: 'Snort / Suricata', endpoint: '/rules/snort', description: 'Network-facing block and detection rules.' },
  { id: 'sigma', label: 'Sigma YAML', endpoint: '/rules/sigma', description: 'Portable SIEM detections for analytics pipelines.' },
  { id: 'json', label: 'JSON Alerts', endpoint: '/rules/json', description: 'Machine-readable alert feed for integrations.' },
];

export default function RuleList({ onToast }) {
  const [activeTab, setActiveTab] = useState('snort');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);

  async function loadRules(tabId = activeTab) {
    setLoading(true);
    const tab = TABS.find((item) => item.id === tabId);
    try {
      const result = await api.get(tab.endpoint);
      setContent(typeof result === 'object' ? JSON.stringify(result, null, 2) : result || '# No rules generated yet.');
    } catch (e) {
      onToast(`Failed to load rules: ${e.message}`, 'error');
      setContent('# Error loading rules.');
    }
    setLoading(false);
  }

  function handleTabChange(tabId) {
    setActiveTab(tabId);
    setContent('');
  }

  function downloadRules() {
    const tab = TABS.find((item) => item.id === activeTab);
    window.open(`${tab.endpoint}/download`, '_blank');
  }

  async function regenerateAll() {
    setGenerating(true);
    try {
      await api.get('/fetch/all');
      onToast('Rule regeneration started in the background.', 'success');
    } catch (e) {
      onToast(`Failed to start regeneration: ${e.message}`, 'error');
    }
    setGenerating(false);
  }

  const active = TABS.find((item) => item.id === activeTab);

  return (
    <div className="page-stack fade-in">
      <section className="horizontal-between">
        <div>
          <div className="eyebrow">Detection outputs</div>
          <h1 className="hero-title">Security rules</h1>
          <p className="hero-copy">Inspect generated detections, refresh them on demand, and export the format your tooling needs.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <button id="btn-regenerate-rules" className="btn btn-primary" onClick={regenerateAll} disabled={generating}>
            {generating ? 'Starting job...' : 'Regenerate all'}
          </button>
          <button id="btn-download-rules" className="btn btn-secondary" onClick={downloadRules} disabled={!content}>
            Download file
          </button>
        </div>
      </section>

      <div className="rule-card-grid">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`rule-format-card ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => handleTabChange(tab.id)}
          >
            <span className="rule-format-label">{tab.label}</span>
            <span className="rule-format-copy">{tab.description}</span>
          </button>
        ))}
      </div>

      <div className="card">
        <div className="card-header horizontal-between">
          <div>
            <h2>{active.label} Preview</h2>
            <p className="section-note">{active.description}</p>
          </div>
          <button className="btn btn-secondary" onClick={() => loadRules(activeTab)}>
            {content ? 'Refresh Output' : 'Load Output'}
          </button>
        </div>
        
        <div className="card-body">
          {loading ? <div className="spinner" /> : null}
          {!loading && !content ? (
            <div className="empty-state">
              <div className="empty-icon" style={{ fontSize: '24px', marginBottom: '16px' }}>📄</div>
              <div style={{ fontWeight: 500, color: 'var(--text-primary)' }}>Rule preview</div>
              <div style={{ marginTop: '4px' }}>Load the active format to inspect the generated content.</div>
            </div>
          ) : null}
          {!loading && content ? (
            <div className="rule-output fade-in">
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
                <span className="mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  {content.split('\n').length} lines
                </span>
              </div>
              <pre>{content}</pre>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
