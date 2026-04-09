# VulnGuard Design System

> **A Dark-First Cybersecurity Interface**  
> Modern threat intelligence, reimagined.

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Spacing System](#4-spacing-system)
5. [Components](#5-components)
6. [Page Layouts](#6-page-layouts)
7. [Animations & Interactions](#7-animations--interactions)
8. [Implementation Roadmap](#8-implementation-roadmap)

---

## 1. Design Philosophy

### ✨ Core Principles

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   CLARITY        ACTION        TRUST         DEPTH          │
│   ─────────      ───────       ─────         ─────          │
│   Information    Every         Security      Layers of      │
│   density        element       through       visual         │
│   with purpose   serves a      consistency   richness       │
│                  goal                                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Visual Identity

**Dark Mode Excellence**
- Deep navy backgrounds create focus and reduce eye strain
- High contrast text ensures readability
- Subtle borders define structure without visual noise

**The Orange Accent Philosophy**
- Amber (`#f59e0b`) = Action, Attention, Alerts
- Used sparingly to draw the eye to what matters
- Warm color creates urgency without aggression

**Data-Forward Design**
- Every pixel serves information
- Numbers and stats are heroes
- Charts tell stories at a glance

### Design References

| Shot | Designer | Key Contribution |
|------|----------|------------------|
| **19195227** | Unknown | Clean card layouts, icon navigation, stat density |
| **19239764** | Unknown | Orange accent system, threat actor cards, timelines |
| **19239890** | Unknown | Chart styling, data visualization, modals |

---

## 2. Color System

### 🎨 Primary Palette

```
┌─────────────────────────────────────────────────────────────┐
│  Background Hierarchy                                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ████ #0a0e1a  Page Background                            │
│  ████ #0d1220  Sidebar Background                         │
│  ████ #111827  Card Background                            │
│  ████ #1f2937  Hover/Elevated                             │
│  ████ #1a2234  Modal/Dropdown                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  Text Hierarchy                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ████ #f9fafb  Primary Text - Headings, data              │
│  ████ #9ca3af  Secondary Text - Labels, descriptions      │
│  ████ #6b7280  Muted Text - Timestamps, meta              │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  Accent Colors                                              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ████ #f59e0b  Primary Accent - Actions, active states     │
│  ████ #d97706  Primary Hover - Deeper amber                │
│  ████ #fbbf24  Primary Light - Glows, highlights           │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  Semantic Colors                                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ████ #10b981  Success - Low risk, active, OK              │
│  ████ #3b82f6  Info - Neutral, links, secondary            │
│  ████ #f59e0b  Warning - Medium risk, caution              │
│  ████ #ef4444  Danger - Critical, high risk, error         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### CSS Variables

```css
:root {
  /* ═══════════════════════════════════════════════════════════════ */
  /* BACKGROUND SCALE (Darkest to Lightest)                          */
  /* ═══════════════════════════════════════════════════════════════ */
  --bg-page: #0a0e1a;
  --bg-sidebar: #0d1220;
  --bg-card: #111827;
  --bg-card-hover: #1f2937;
  --bg-elevated: #1a2234;
  --bg-input: #0d1117;
  --bg-overlay: rgba(0, 0, 0, 0.8);

  /* ═══════════════════════════════════════════════════════════════ */
  /* TEXT SCALE (Highest to Lowest Contrast)                        */
  /* ═══════════════════════════════════════════════════════════════ */
  --text-primary: #f9fafb;
  --text-secondary: #9ca3af;
  --text-muted: #6b7280;
  --text-inverse: #0a0e1a;

  /* ═══════════════════════════════════════════════════════════════ */
  /* ACCENT PALETTE (Amber/Orange Family)                           */
  /* ═══════════════════════════════════════════════════════════════ */
  --accent-primary: #f59e0b;
  --accent-primary-hover: #d97706;
  --accent-primary-light: #fbbf24;
  --accent-primary-dark: #92400e;
  --accent-primary-5: rgba(245, 158, 11, 0.05);
  --accent-primary-10: rgba(245, 158, 11, 0.1);
  --accent-primary-20: rgba(245, 158, 11, 0.2);
  --accent-primary-30: rgba(245, 158, 11, 0.3);

  /* ═══════════════════════════════════════════════════════════════ */
  /* SEMANTIC COLORS                                                */
  /* ═══════════════════════════════════════════════════════════════ */
  --color-success: #10b981;
  --color-success-hover: #059669;
  --color-success-10: rgba(16, 185, 129, 0.1);
  --color-success-20: rgba(16, 185, 129, 0.2);

  --color-danger: #ef4444;
  --color-danger-hover: #dc2626;
  --color-danger-10: rgba(239, 68, 68, 0.1);
  --color-danger-20: rgba(239, 68, 68, 0.2);

  --color-warning: #f59e0b;
  --color-warning-hover: #d97706;
  --color-warning-10: rgba(245, 158, 11, 0.1);
  --color-warning-20: rgba(245, 158, 11, 0.2);

  --color-info: #3b82f6;
  --color-info-hover: #2563eb;
  --color-info-10: rgba(59, 130, 246, 0.1);
  --color-info-20: rgba(59, 130, 246, 0.2);

  /* ═══════════════════════════════════════════════════════════════ */
  /* BORDER COLORS                                                  */
  /* ═══════════════════════════════════════════════════════════════ */
  --border-subtle: rgba(255, 255, 255, 0.05);
  --border-default: rgba(255, 255, 255, 0.08);
  --border-hover: rgba(255, 255, 255, 0.15);
  --border-focus: #f59e0b;
  --border-active: rgba(245, 158, 11, 0.5);

  /* ═══════════════════════════════════════════════════════════════ */
  /* SHADOWS                                                        */
  /* ═══════════════════════════════════════════════════════════════ */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.2);
  --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
  --shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
  
  /* Glow Effects */
  --glow-primary: 0 0 20px rgba(245, 158, 11, 0.3);
  --glow-primary-lg: 0 0 40px rgba(245, 158, 11, 0.4);
  --glow-success: 0 0 20px rgba(16, 185, 129, 0.3);
  --glow-danger: 0 0 20px rgba(239, 68, 68, 0.3);
  --glow-info: 0 0 20px rgba(59, 130, 246, 0.3);

  /* ═══════════════════════════════════════════════════════════════ */
  /* GRADIENTS                                                      */
  /* ═══════════════════════════════════════════════════════════════ */
  --gradient-card: linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, transparent 100%);
  --gradient-overlay: linear-gradient(180deg, transparent 0%, rgba(10, 14, 26, 0.8) 100%);
  
  --gradient-primary: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  --gradient-success: linear-gradient(135deg, #10b981 0%, #059669 100%);
  --gradient-danger: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  --gradient-info: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);

  /* Chart Gradients (Fade to transparent) */
  --gradient-chart-primary: linear-gradient(180deg, rgba(245, 158, 11, 0.3) 0%, rgba(245, 158, 11, 0) 100%);
  --gradient-chart-success: linear-gradient(180deg, rgba(16, 185, 129, 0.3) 0%, rgba(16, 185, 129, 0) 100%);
  --gradient-chart-danger: linear-gradient(180deg, rgba(239, 68, 68, 0.3) 0%, rgba(239, 68, 68, 0) 100%);
}
```

---

## 3. Typography

### Font Families

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   Inter                                                      │
│   ─────                                                      │
│   Primary font for all UI text                              │
│   Weights: 400, 500, 600, 700                               │
│                                                             │
│   JetBrains Mono                                             │
│   ──────────────                                             │
│   Monospace for data, numbers, code                         │
│   Weights: 400, 500                                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Type Scale

```
┌─────────────────────────────────────────────────────────────┐
│  DISPLAY XL        36px / 700 / 1.1 / -0.02em               │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━            │
│  Dashboard title, major headings                            │
│                                                             │
│  Display Large     30px / 700 / 1.2 / -0.01em             │
│  ──────────────────────────────────────────────             │
│  Section headers, page titles                                 │
│                                                             │
│  Display Medium      24px / 600 / 1.3 / 0                   │
│  ──────────────────────────────────────────               │
│  Card titles, stat numbers                                    │
│                                                             │
│  Heading             20px / 600 / 1.4 / 0                   │
│  ──────────────────────────────────────────               │
│  Subsection headers                                           │
│                                                             │
│  Subheading          16px / 600 / 1.5 / 0                   │
│  ──────────────────────────────────────────               │
│  Card headers, form labels                                    │
│                                                             │
│  Body Large          16px / 400 / 1.6 / 0                   │
│  ──────────────────────────────────────────               │
│  Primary body text                                          │
│                                                             │
│  Body                14px / 400 / 1.5 / 0                   │
│  ──────────────────────────────────────────               │
│  Default text, descriptions                                   │
│                                                             │
│  Body Small          13px / 400 / 1.5 / 0                   │
│  ──────────────────────────────────────────               │
│  Secondary text, helper text                                │
│                                                             │
│  Caption             12px / 500 / 1.4 / 0.01em              │
│  ─────────────────────────────────────────────────          │
│  Labels, badges, table headers                              │
│                                                             │
│  Caption Small       11px / 500 / 1.4 / 0.02em              │
│  ───────────────────────────────────────────────            │
│  Timestamps, meta, fine print                               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Typography Patterns

**Labels**
```
LABEL EXAMPLE
━━━━━━━━━━━━━
Text-transform: uppercase
Letter-spacing: 0.05em (5%)
Font-size: 12px
Font-weight: 500
Color: var(--text-muted)
```

**Data Numbers**
```
2,847
━━━━━
Font-family: 'JetBrains Mono', monospace
Font-weight: 600
Tabular nums: enables
Used for: Stats, counts, IDs
```

**Code Blocks**
```
alert tcp any any -> any 80
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Font-family: 'JetBrains Mono', monospace
Background: var(--bg-input)
Border-radius: 8px
Padding: 16px
Overflow: auto
```

---

## 4. Spacing System

### 4px Base Grid

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   4px    ████  xs    Tight gaps, icon spacing                │
│                                                             │
│   8px    ████████  sm    Inline elements, badge padding    │
│                                                             │
│   12px   ████████████  md    Component internal spacing    │
│                                                             │
│   16px   ████████████████  lg    Card padding, gaps        │
│                                                             │
│   20px   ████████████████████  xl    Section gaps          │
│                                                             │
│   24px   ████████████████████████  2xl    Container         │
│                                                             │
│   32px   ████████████████████████████████  3xl    Sections  │
│                                                             │
│   40px   ████████████████████████████████████  4xl         │
│                                                             │
│   48px   ████████████████████████████████████████  5xl      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Layout Dimensions

| Element | Dimension | Notes |
|---------|-----------|-------|
| **Sidebar (collapsed)** | 72px width | Icon only |
| **Sidebar (expanded)** | 240px width | Icon + text |
| **Header height** | 64px | Fixed top |
| **Card border-radius** | 12px | Rounded corners |
| **Button border-radius** | 8px | Subtle rounding |
| **Input border-radius** | 8px | Matches buttons |
| **Badge border-radius** | 6px | Slightly rounded |
| **Pill border-radius** | 9999px | Full round |
| **Container max-width** | 1440px | Content constraint |
| **Container padding** | 24px (16px mobile) | Page breathing room |

### Spacing Patterns

**Card Internal**
```
┌─────────────────────────┐
│                         │  ← 20px padding
│   Title                 │
│                         │  ← 16px gap
│   Content               │
│                         │
│   ┌─────────────────┐   │
│   │ Nested element  │   │  ← 16px internal
│   └─────────────────┘   │
│                         │  ← 20px padding
└─────────────────────────┘
```

**Page Layout**
```
┌─────────────────────────────────────────┐
│ Header                      64px fixed │
├─────────────────────────────────────────┤
│                                         │
│   Container                             │
│   ┌─────────────────────────────────┐   │
│   │                                 │   │
│   │   24px padding                  │   │
│   │                                 │   │
│   │   Content                       │   │
│   │   ┌─────┐ ┌─────┐ ┌─────┐      │   │
│   │   │     │ │     │ │     │      │   │
│   │   │     │ │     │ │     │      │   │  20px gap
│   │   │     │ │     │ │     │      │   │
│   │   └─────┘ └─────┘ └─────┘      │   │
│   │                                 │   │
│   └─────────────────────────────────┘   │
│                                         │
└─────────────────────────────────────────┘
```

---

## 5. Components

### 5.1 Sidebar Navigation

**Visual Structure**
```
┌───────────────────────────┐
│ ⚡ VulnGuard     ≡        │  ← Logo (64px height)
├───────────────────────────┤
│                           │
│  ●  Dashboard             │  ← Active item
│     ───────────           │     Orange left border
│                           │     Tinted background
│  ○  CVE Database          │
│                           │
│  ○  Asset Inventory       │
│                           │
│  ○  Security Rules        │
│                           │
│  ○  Analytics             │  ← Optional
│                           │
├───────────────────────────┤
│                           │
│  ○  Settings              │
│                           │
│  ○  Help                  │
│                           │
└───────────────────────────┘
```

**Specifications**
```css
.sidebar {
  width: 240px;
  background: var(--bg-sidebar);
  border-right: 1px solid var(--border-default);
}

.nav-item {
  height: 44px;
  padding: 0 16px;
  margin: 4px 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text-secondary);
  transition: all 200ms ease-out;
}

.nav-item:hover {
  background: var(--bg-card-hover);
  color: var(--text-primary);
}

.nav-item.active {
  background: var(--accent-primary-10);
  color: var(--accent-primary);
  border-left: 3px solid var(--accent-primary);
  margin-left: 9px; /* Compensate for border */
}

.nav-item .icon {
  width: 20px;
  height: 20px;
}

.nav-item .label {
  font-size: 14px;
  font-weight: 500;
}
```

**States**
- **Default**: `text-secondary`, transparent bg
- **Hover**: `text-primary`, `bg-card-hover`
- **Active**: `accent-primary` text, `accent-primary-10` bg, orange left border

---

### 5.2 Stat Cards

**Visual Structure**
```
┌───────────────────────────────┐
│ Total CVEs         ┌────────┐ │
│                    │  📊    │ │  ← Icon top-right
│                               │
│  12,847                       │  ← Large number
│  ████████████                 │
│                               │
│  ▲ 12.5%                    │  ← Trend indicator
│  vs last week                 │
└───────────────────────────────┘
```

**Specifications**
```css
.stat-card {
  background: var(--bg-card);
  border: 1px solid var(--border-default);
  border-radius: 12px;
  padding: 20px;
  position: relative;
  transition: all 200ms ease-out;
}

.stat-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.stat-card.highlight {
  border-color: var(--accent-primary-30);
  box-shadow: var(--glow-primary);
}

.stat-card .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.stat-card .title {
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
}

.stat-card .icon {
  width: 40px;
  height: 40px;
  background: var(--accent-primary-10);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-primary);
}

.stat-card .value {
  font-family: 'JetBrains Mono', monospace;
  font-size: 30px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.stat-card .trend {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
}

.stat-card .trend.up {
  color: var(--color-success);
}

.stat-card .trend.down {
  color: var(--color-danger);
}
```

**Variants**
- **Default**: Border only, subtle shadow
- **Highlight**: Orange border glow, for critical metrics
- **Mini**: Compact version for dense layouts

---

### 5.3 Data Tables

**Visual Structure**
```
┌─────────────────────────────────────────────────────────────────┐
│ CVE ID    Description        Severity   CVSS   Date       Status │
│ ─────     ───────────        ────────   ────   ────       ────── │
│                                                                │
│ CVE-202... Log4j RCE...      CRITICAL   9.8    Jan 12    ● New │
│ ───────────────────────────────────────────────────────────────│
│ CVE-202... Buffer Over...    HIGH        8.1    Jan 11    ● New │
│ ───────────────────────────────────────────────────────────────│
│ CVE-202... SQL Inject...     MEDIUM      6.5    Jan 10    Seen  │
│ ───────────────────────────────────────────────────────────────│
│ CVE-202... XSS Vuln...       LOW        4.3    Jan 09    Seen  │
│                                                                │
└─────────────────────────────────────────────────────────────────┘
```

**Specifications**
```css
.data-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}

.data-table th {
  height: 40px;
  padding: 0 16px;
  text-align: left;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  border-bottom: 1px solid var(--border-default);
  background: transparent;
}

.data-table th.sortable:hover {
  color: var(--text-primary);
  cursor: pointer;
}

.data-table th .sort-icon {
  margin-left: 4px;
  opacity: 0.5;
}

.data-table td {
  height: 56px;
  padding: 0 16px;
  border-bottom: 1px solid var(--border-divider);
  font-size: 14px;
  color: var(--text-primary);
}

.data-table tr:hover td {
  background: var(--bg-card-hover);
}

.data-table tr:last-child td {
  border-bottom: none;
}

/* Severity Badge in Cell */
.severity-badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.severity-badge.critical {
  background: var(--color-danger-10);
  color: var(--color-danger);
  border: 1px solid var(--color-danger);
}

.severity-badge.high {
  background: var(--color-danger-10);
  color: var(--color-danger);
}

.severity-badge.medium {
  background: var(--color-warning-10);
  color: var(--color-warning);
}

.severity-badge.low {
  background: var(--color-success-10);
  color: var(--color-success);
}
```

**Row Interactions**
- **Hover**: Background shift to `bg-card-hover`
- **Selection**: Left accent border, subtle highlight
- **Actions**: Overflow menu on right

---

### 5.4 Status Badges

**Visual Examples**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │  CRITICAL   │  │    HIGH     │  │   MEDIUM    │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
│   bg-danger-10     bg-danger-10     bg-warning-10          │
│   border-danger    no border        no border                │
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐     │
│  │    LOW      │  │   ACTIVE    │  │   IN PROGRESS   │     │
│  └─────────────┘  └─────────────┘  └─────────────────┘     │
│   bg-success-10    bg-success-10     bg-info-10             │
│                                                             │
│  ● New    ● Seen    ✓ Resolved    ⚠ Warning                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Specifications**
```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  white-space: nowrap;
}

.badge-pill {
  border-radius: 9999px;
  padding: 4px 12px;
}

/* Severity Variants */
.badge-critical {
  background: var(--color-danger-10);
  color: var(--color-danger);
  border: 1px solid var(--color-danger);
}

.badge-high {
  background: var(--color-danger-10);
  color: var(--color-danger);
}

.badge-medium {
  background: var(--color-warning-10);
  color: var(--color-warning);
}

.badge-low, .badge-success {
  background: var(--color-success-10);
  color: var(--color-success);
}

.badge-info {
  background: var(--color-info-10);
  color: var(--color-info);
}

/* With Dot */
.badge .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
}

.badge .dot.pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

---

### 5.5 Charts

**Area Chart**
```
┌─────────────────────────────────────────────────────────────┐
│ 150 │                                                       │
│     │    ╭─╮                                                │
│ 100 │   ╱   ╲    ╭──╮                                       │
│     │  ╱     ╲──╱    ╲                                     │
│  50 │ ╱                    ╭──╮                           │
│     │╱                    ╭─╯   ╲                          │
│   0 ├──────────────────────────────────────────            │
│     Jan   Feb   Mar   Apr   May   Jun                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Specifications**
```css
.chart-container {
  background: var(--bg-card);
  border: 1px solid var(--border-default);
  border-radius: 12px;
  padding: 20px;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.chart-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
}

/* Area Chart Styling */
.recharts-area-area {
  fill: url(#gradient-primary);
}

.recharts-area-curve {
  stroke: var(--accent-primary);
  stroke-width: 2;
}

.recharts-cartesian-grid-horizontal line {
  stroke: var(--border-default);
  stroke-dasharray: 4 4;
}

.recharts-cartesian-axis-tick-value {
  fill: var(--text-muted);
  font-size: 12px;
}

.recharts-tooltip-wrapper {
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: 8px;
  padding: 12px;
  box-shadow: var(--shadow-lg);
}
```

**Donut Chart**
```
┌───────────────────────────────┐
│                               │
│      ╭───────────╮            │
│     ╱   ┌───┐    ╲           │
│    │   ╱ 45% ╲    │          │
│     ╲   └───┘    ╱           │
│      ╰───────────╯            │
│                               │
│   ● Critical    ████████      │
│   ● High        ██████        │
│   ● Medium      ████          │
│   ● Low         ██            │
│                               │
└───────────────────────────────┘
```

**Sparkline (Mini Chart for Stat Cards)**
```css
.sparkline {
  height: 40px;
  width: 100%;
}

.sparkline-path {
  stroke: var(--accent-primary);
  stroke-width: 2;
  fill: var(--gradient-chart-primary);
}
```

---

### 5.6 Activity Timeline

**Visual Structure**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ● ═══════════════════════════════════════════════════      │
│  │ CVE-2024-1234 added to database                          │
│  │ Critical severity detected in Log4j                       │
│  └ 2 hours ago • by System                                  │
│                                                             │
│  ○ ═══════════════════════════════════════════════════      │
│  │ 47 new rules generated from CISA KEV                     │
│  │ Snort and Sigma formats updated                           │
│  └ 4 hours ago • by Generator                               │
│                                                             │
│  ○ ═══════════════════════════════════════════════════      │
│  │ Daily sync completed                                     │
│  │ 234 new CVEs fetched from NVD                            │
│  └ Yesterday • by Scheduler                                 │
│                                                             │
│  ○                                                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Specifications**
```css
.timeline {
  position: relative;
  padding-left: 24px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: repeating-linear-gradient(
    to bottom,
    var(--border-default) 0,
    var(--border-default) 4px,
    transparent 4px,
    transparent 8px
  );
}

.timeline-item {
  position: relative;
  padding-bottom: 24px;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -17px;
  top: 2px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--bg-card);
  border: 2px solid var(--border-default);
  transition: all 200ms ease-out;
}

.timeline-item.active::before {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
  box-shadow: 0 0 10px var(--accent-primary-30);
}

.timeline-item.success::before {
  border-color: var(--color-success);
}

.timeline-item.danger::before {
  border-color: var(--color-danger);
}

.timeline-item.info::before {
  border-color: var(--color-info);
}

.timeline-content {
  background: var(--bg-card);
  border: 1px solid var(--border-default);
  border-radius: 8px;
  padding: 16px;
}

.timeline-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.timeline-description {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 8px;
}

.timeline-meta {
  font-size: 12px;
  color: var(--text-muted);
}
```

---

### 5.7 Buttons

**Visual Examples**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   PRIMARY              SECONDARY            GHOST           │
│   ┌──────────────┐     ┌──────────────┐    ┌──────────┐    │
│   │   Action    │     │   Cancel     │    │  More   │    │
│   └──────────────┘     └──────────────┘    └──────────┘    │
│   Gradient bg          Transparent         Transparent      │
│   White text           White border        Text only       │
│                                                             │
│                                                             │
│   DANGER               WITH ICON            LOADING         │
│   ┌──────────────┐     ┌──────────────┐    ┌──────────┐    │
│   │   Delete    │     │  Download  ↓ │    │ ◌ Loading│    │
│   └──────────────┘     └──────────────┘    └──────────┘    │
│   Red bg               Icon right          Spinner left     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Specifications**
```css
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 40px;
  padding: 0 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 150ms ease-out;
  border: none;
  outline: none;
}

.button:focus-visible {
  box-shadow: 0 0 0 2px var(--bg-page), 0 0 0 4px var(--accent-primary-30);
}

/* Primary */
.button-primary {
  background: var(--gradient-primary);
  color: var(--text-inverse);
  box-shadow: var(--shadow), 0 0 20px rgba(245, 158, 11, 0.2);
}

.button-primary:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md), 0 0 30px rgba(245, 158, 11, 0.3);
}

.button-primary:active {
  transform: translateY(0);
}

/* Secondary */
.button-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-default);
}

.button-secondary:hover {
  border-color: var(--border-hover);
  background: var(--bg-card-hover);
}

/* Ghost */
.button-ghost {
  background: transparent;
  color: var(--text-secondary);
}

.button-ghost:hover {
  color: var(--text-primary);
  background: var(--bg-card-hover);
}

/* Danger */
.button-danger {
  background: var(--color-danger-10);
  color: var(--color-danger);
  border: 1px solid var(--color-danger);
}

.button-danger:hover {
  background: var(--color-danger);
  color: white;
}

/* Sizes */
.button-sm { height: 32px; padding: 0 12px; font-size: 13px; }
.button-md { height: 40px; padding: 0 16px; font-size: 14px; }
.button-lg { height: 48px; padding: 0 24px; font-size: 16px; }

/* Loading State */
.button-loading {
  opacity: 0.7;
  cursor: not-allowed;
}

.button-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

---

### 5.8 Cards

**Visual Structure**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ ● LIVE                                                  ││
│  │                                                         ││
│  │ Threat Actor Profile                                    ││
│  │                                                         ││
│  │  ┌────┐  Lazarus Group                                  ││
│  │  │ 👤 │  North Korea ●●●●●                              ││
│  │  └────┘                                                 ││
│  │                                                         ││
│  │  Active since 2009 • 47 TTPs                            ││
│  │                                                         ││
│  │  ┌─────┐ ┌─────┐ ┌─────┐                                ││
│  │  │TTP1 │ │TTP2 │ │+12  │                                ││
│  │  └─────┘ └─────┘ └─────┘                                ││
│  │                                                         ││
│  │  [View Profile →]                                       ││
│  │                                                         ││
│  └─────────────────────────────────────────────────────────┘│
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Specifications**
```css
.card {
  background: var(--bg-card);
  border: 1px solid var(--border-default);
  border-radius: 12px;
  overflow: hidden;
  transition: all 200ms ease-out;
}

.card:hover {
  border-color: var(--border-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.card.highlight {
  border-color: var(--accent-primary-30);
  box-shadow: var(--glow-primary);
}

.card-header {
  padding: 20px 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.card-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
}

.card-subtitle {
  font-size: 13px;
  color: var(--text-secondary);
  margin-top: 4px;
}

.card-body {
  padding: 20px;
}

.card-footer {
  padding: 16px 20px;
  border-top: 1px solid var(--border-default);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Card Gradient Overlay */
.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255, 255, 255, 0.1), 
    transparent
  );
}
```

---

### 5.9 Form Elements

**Text Input**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   Label                                                     │
│   ┌───────────────────────────────────────────────────────┐│
│   │  Search for CVEs...                            🔍     ││
│   └───────────────────────────────────────────────────────┘│
│                                                             │
│   Focus State:                                              │
│   ┌───────────────────────────────────────────────────────┐│
│   │  Search for CVEs...                            🔍     ││
│   └───────────────────────────────────────────────────────┘│
│   ▓▓▓▓▓▓▓ Orange border glow                               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Specifications**
```css
.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 8px;
}

.form-label-required::after {
  content: ' *';
  color: var(--color-danger);
}

.input {
  width: 100%;
  height: 40px;
  padding: 0 12px;
  background: var(--bg-input);
  border: 1px solid var(--border-default);
  border-radius: 8px;
  font-size: 14px;
  color: var(--text-primary);
  transition: all 150ms ease-out;
}

.input::placeholder {
  color: var(--text-muted);
}

.input:hover {
  border-color: var(--border-hover);
}

.input:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px var(--accent-primary-20);
}

.input-error {
  border-color: var(--color-danger);
}

.input-error:focus {
  box-shadow: 0 0 0 3px var(--color-danger-20);
}

.form-error {
  font-size: 12px;
  color: var(--color-danger);
  margin-top: 6px;
}

/* Input with Icon */
.input-with-icon {
  position: relative;
}

.input-with-icon .icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  pointer-events: none;
}

.input-with-icon .input {
  padding-left: 40px;
}
```

**Select Dropdown**
```css
.select {
  appearance: none;
  background-image: url("data:image/svg+xml,..."); /* Chevron */
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 40px;
}

.select-dropdown {
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: 8px;
  box-shadow: var(--shadow-lg);
  max-height: 300px;
  overflow-y: auto;
}

.select-option {
  padding: 10px 12px;
  font-size: 14px;
  color: var(--text-primary);
  cursor: pointer;
  transition: background 150ms ease-out;
}

.select-option:hover,
.select-option.highlighted {
  background: var(--bg-card-hover);
}

.select-option.selected {
  background: var(--accent-primary-10);
  color: var(--accent-primary);
}
```

**Toggle Switch**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   Off                        On                             │
│   ┌────────┐                 ┌────────┐                     │
│   │    ○   │                 │  ●     │                     │
│   └────────┘                 └────────┘                     │
│   bg-card-hover              bg-accent-primary              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

```css
.toggle {
  width: 44px;
  height: 24px;
  background: var(--bg-card-hover);
  border-radius: 9999px;
  position: relative;
  cursor: pointer;
  transition: background 200ms ease-out;
}

.toggle.active {
  background: var(--accent-primary);
}

.toggle-knob {
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  transition: transform 200ms ease-out;
  box-shadow: var(--shadow-sm);
}

.toggle.active .toggle-knob {
  transform: translateX(20px);
}
```

---

### 5.10 Modal / Dialog

**Visual Structure**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░                                                      ░  │
│  ░     ┌──────────────────────────────────────────┐    ░  │
│  ░     │ Confirm Action                      [×]    │    ░  │
│  ░     ├──────────────────────────────────────────┤    ░  │
│  ░     │                                              │    ░  │
│  ░     │  Are you sure you want to delete this      │    ░  │
│  ░     │  asset? This action cannot be undone.        │    ░  │
│  ░     │                                              │    ░  │
│  ░     ├──────────────────────────────────────────┤    ░  │
│  ░     │                             [Cancel] [Delete]│    ░  │
│  ░     └──────────────────────────────────────────┘    ░  │
│  ░                                                      ░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                             │
│  Background: 80% black opacity with blur                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Specifications**
```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: var(--bg-overlay);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 1000;
  animation: fadeIn 200ms ease-out;
}

.modal {
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  box-shadow: var(--shadow-xl);
  animation: modalIn 300ms ease-out;
}

.modal-header {
  padding: 20px 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
}

.modal-close {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 150ms ease-out;
}

.modal-close:hover {
  background: var(--bg-card-hover);
  color: var(--text-primary);
}

.modal-body {
  padding: 20px;
}

.modal-footer {
  padding: 16px 20px;
  border-top: 1px solid var(--border-default);
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes modalIn {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(-10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
```

---

### 5.11 Tooltips

**Specifications**
```css
.tooltip {
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 13px;
  color: var(--text-primary);
  box-shadow: var(--shadow-md);
  max-width: 250px;
  z-index: 100;
}

.tooltip-arrow {
  width: 8px;
  height: 8px;
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  position: absolute;
}

.tooltip[data-placement="top"] .tooltip-arrow {
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  border-top: none;
  border-left: none;
}
```

---

## 6. Page Layouts

### 6.1 Dashboard Layout

```
┌───────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│ ┌─────────┬─────────────────────────────────────────────────────────────┐ │
│ │         │  Header                                                   │ │
│ │         │  ┌─────────────────────────────────────────────────────┐  │ │
│ │ Sidebar │  │ Dashboard                      [🔄 Sync] [⚙️ Settings]│  │ │
│ │         │  └─────────────────────────────────────────────────────┘  │ │
│ │ 72px    │                                                            │ │
│ │ or      │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐    │ │
│ │ 240px   │  │  Stat 1  │ │  Stat 2  │ │  Stat 3  │ │  Stat 4  │    │ │
│ │         │  │          │ │          │ │          │ │          │    │ │
│ │         │  └──────────┘ └──────────┘ └──────────┘ └──────────┘    │ │
│ │         │                                                            │ │
│ │         │  ┌─────────────────────────┬───────────────────────┐    │ │
│ │         │  │                         │                       │    │ │
│ │         │  │   CVEs Over Time        │  Severity Distribution│    │ │
│ │         │  │   (Area Chart)          │  (Donut Chart)        │    │ │
│ │         │  │                         │                       │    │ │
│ │         │  └─────────────────────────┴───────────────────────┘    │ │
│ │         │                                                            │ │
│ │         │  ┌───────────────────────────────────────────────────────┐ │ │
│ │         │  │ Recent Activity                                      │ │ │
│ │         │  │ ● CVE added...                                       │ │ │
│ │         │  │ ○ Rules generated...                                 │ │ │
│ │         │  │ ○ Sync completed...                                  │ │ │
│ │         │  └───────────────────────────────────────────────────────┘ │ │
│ │         │                                                            │ │
│ └─────────┴────────────────────────────────────────────────────────────┘ │
│                                                                           │
└───────────────────────────────────────────────────────────────────────────┘
```

**Grid System**
- Sidebar: Fixed left
- Main: Fluid, max-width 1440px, centered
- Stats: 4-column grid, 20px gap
- Charts: 2-column, 60/40 split
- Activity: Full width

### 6.2 CVE Database Layout

```
┌───────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│ ┌─────────┬─────────────────────────────────────────────────────────────┐ │
│ │         │  CVE Database                    [+ Filters] [Export]   │ │
│ │ Sidebar │  ┌─────────────────────────────────────────────────────┐  │ │
│ │         │  │ 🔍 Search...   [Severity ▼] [Date ▼] [KEV ☑]       │  │ │
│ │         │  └─────────────────────────────────────────────────────┘  │ │
│ │         │                                                            │ │
│ │         │  ┌───────────────────────────────────────────────────────┐ │ │
│ │         │  │                                                       │ │ │
│ │         │  │  ┌─────────────────────────────────────────────────┐│ │ │
│ │         │  │  │ CVE ID │ Description │ Severity │ CVSS │ Date │   ││ │ │
│ │         │  │  ├─────────────────────────────────────────────────┤│ │ │
│ │         │  │  │ ...    │ ...         │ Critical │ 9.8  │ ...  │   ││ │ │
│ │         │  │  │ ...    │ ...         │ High     │ 8.1  │ ...  │   ││ │ │
│ │         │  │  │ ...    │ ...         │ Medium   │ 6.5  │ ...  │   ││ │ │
│ │         │  │  └─────────────────────────────────────────────────┘│ │ │
│ │         │  │                                                       │ │ │
│ │         │  └───────────────────────────────────────────────────────┘ │ │
│ │         │                                                            │ │
│ │         │  ┌─────────────────────────────────────────────────────┐  │ │
│ │         │  │ Showing 1-25 of 1,247           [<] [1] [2] [>]    │  │ │
│ │         │  └─────────────────────────────────────────────────────┘  │ │
│ │         │                                                            │ │
│ └─────────┴────────────────────────────────────────────────────────────┘ │
│                                                                           │
└───────────────────────────────────────────────────────────────────────────┘
```

### 6.3 Asset Detail Layout

```
┌───────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│ ┌─────────┬─────────────────────────────────────────────────────────────┐ │
│ │         │  Asset Inventory                                           │ │
│ │ Sidebar │  [+ Add Asset]                                             │ │
│ │         │                                                            │ │
│ │         │  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐        │ │
│ │         │  │  Asset 1    │ │  Asset 2    │ │  Asset 3    │        │ │
│ │         │  │             │ │             │ │             │        │ │
│ │         │  │ CPE: xxx    │ │ CPE: xxx    │ │ CPE: xxx    │        │ │
│ │         │  │                             │                             │ │
│ │         │  │ ● 2 Critical │ │ ● 0 Critical │ │ ● 1 Critical │        │ │
│ │         │  │ ● 5 High     │ │ ● 1 High     │ │ ● 3 High     │        │ │
│ │         │  │             │ │             │ │             │        │ │
│ │         │  │ Last: 2h    │ │ Last: 5h    │ │ Last: 1d    │        │ │
│ │         │  └─────────────┘ └─────────────┘ └─────────────┘        │ │
│ │         │                                                            │ │
│ └─────────┴────────────────────────────────────────────────────────────┘ │
│                                                                           │
└───────────────────────────────────────────────────────────────────────────┘
```

---

## 7. Animations & Interactions

### Animation Philosophy
- **Purposeful**: Every animation guides attention or provides feedback
- **Fast**: 150-300ms duration keeps interface snappy
- **Smooth**: Ease-out curves feel responsive
- **Subtle**: Enhances without distracting

### Duration Scale

| Speed | Duration | Usage |
|-------|----------|-------|
| Instant | 0ms | Color changes, border updates |
| Fast | 150ms | Button hovers, toggles |
| Normal | 200ms | Cards, dropdowns, tooltips |
| Smooth | 300ms | Page transitions, modals, sidebar |

### Easing Functions

```css
--ease-out: cubic-bezier(0.33, 1, 0.68, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Hover Effects

**Card Hover**
```css
.card {
  transition: transform 200ms var(--ease-out),
              box-shadow 200ms var(--ease-out),
              border-color 200ms var(--ease-out);
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: var(--border-hover);
}
```

**Button Hover**
```css
.button-primary {
  transition: transform 150ms var(--ease-out),
              box-shadow 150ms var(--ease-out);
}

.button-primary:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md), 0 0 30px rgba(245, 158, 11, 0.3);
}

.button-primary:active {
  transform: translateY(0);
}
```

**Table Row Hover**
```css
.table-row {
  transition: background 150ms ease-out;
}

.table-row:hover {
  background: var(--bg-card-hover);
}
```

### Loading States

**Skeleton Loading**
```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--bg-card) 0%,
    var(--bg-card-hover) 50%,
    var(--bg-card) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

**Spinner**
```css
.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid var(--border-default);
  border-top-color: var(--accent-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### Page Transitions

```css
.page-transition-enter {
  opacity: 0;
  transform: translateY(10px);
}

.page-transition-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 300ms ease-out, transform 300ms var(--ease-out);
}

.page-transition-exit {
  opacity: 1;
}

.page-transition-exit-active {
  opacity: 0;
  transition: opacity 200ms ease-out;
}
```

### Micro-interactions

**Focus States**
```css
.input:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px var(--accent-primary-20);
}

.button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--bg-page), 0 0 0 4px var(--accent-primary-30);
}
```

**Active States**
```css
.nav-item.active::before {
  animation: pulse-glow 2s infinite;
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 10px var(--accent-primary-30); }
  50% { box-shadow: 0 0 20px var(--accent-primary-50); }
}
```

**Success Checkmark**
```css
.checkmark {
  stroke-dasharray: 20;
  stroke-dashoffset: 20;
  animation: draw 0.3s ease-out forwards;
}

@keyframes draw {
  to { stroke-dashoffset: 0; }
}
```

---

## 8. Implementation Roadmap

### Phase 1: Foundation ⭐ Priority 0
*Week 1 - Core Design System*

```
┌─────────────────────────────────────────────────────────────┐
│  Tasks                                                      │
│  ════════════════════════════════════════════════════════   │
│                                                             │
│  ☐ CSS Variables Setup                                     │
│    └─ Create design.css with all color tokens               │
│                                                             │
│  ☐ Typography System                                        │
│    └─ Import Inter & JetBrains Mono fonts                   │
│    └─ Set up type scale classes                             │
│                                                             │
│  ☐ Base Styles                                              │
│    └─ Reset and normalize                                   │
│    └─ Body styles (bg, text color)                          │
│    └─ Global transitions                                    │
│                                                             │
│  ☐ Layout Shell                                             │
│    └─ App.jsx layout structure                              │
│    └─ Sidebar component                                     │
│    └─ Header component                                      │
│                                                             │
│  Deliverable: Working shell with navigation                 │
└─────────────────────────────────────────────────────────────┘
```

### Phase 2: Components ⭐ Priority 1
*Week 2 - Essential UI Components*

```
┌─────────────────────────────────────────────────────────────┐
│  Tasks                                                      │
│  ════════════════════════════════════════════════════════   │
│                                                             │
│  ☐ Button Component                                         │
│    └─ Primary, Secondary, Ghost, Danger variants            │
│    └─ Sizes: sm, md, lg                                     │
│    └─ Loading state                                         │
│                                                             │
│  ☐ Card Component                                           │
│    └─ Base card with hover effects                          │
│    └─ Header, body, footer sections                         │
│    └─ Highlight variant                                     │
│                                                             │
│  ☐ Stat Card Component                                      │
│    └─ Number display with trend                             │
│    └─ Icon integration                                        │
│    └─ Mini chart (sparkline)                                │
│                                                             │
│  ☐ Badge Component                                          │
│    └─ Severity variants                                     │
│    └─ Status variants                                       │
│    └─ Dot indicators                                        │
│                                                             │
│  ☐ Input Component                                          │
│    └─ Text input with icon support                          │
│    └─ Select dropdown                                       │
│    └─ Toggle switch                                         │
│                                                             │
│  Deliverable: Component library ready                       │
└─────────────────────────────────────────────────────────────┘
```

### Phase 3: Dashboard ⭐ Priority 2
*Week 3 - Main Dashboard Page*

```
┌─────────────────────────────────────────────────────────────┐
│  Tasks                                                      │
│  ════════════════════════════════════════════════════════   │
│                                                             │
│  ☐ Chart Setup                                              │
│    └─ Install Recharts                                      │
│    └─ Configure theme colors                                │
│    └─ Custom tooltip component                              │
│                                                             │
│  ☐ Area Chart Component                                     │
│    └─ CVE count over time                                   │
│    └─ Gradient fill                                         │
│    └─ Interactive hover                                     │
│                                                             │
│  ☐ Donut Chart Component                                    │
│    └─ Severity distribution                                 │
│    └─ Center label                                          │
│    └─ Legend                                                │
│                                                             │
│  ☐ Activity Feed Component                                  │
│    └─ Timeline layout                                       │
│    └─ Event types (colors)                                  │
│    └─ Auto-refresh                                          │
│                                                             │
│  ☐ Dashboard Page Assembly                                    │
│    └─ Stats grid (4 cards)                                  │
│    └─ Charts section                                        │
│    └─ Activity section                                      │
│                                                             │
│  Deliverable: Fully functional dashboard                    │
└─────────────────────────────────────────────────────────────┘
```

### Phase 4: Data Pages ⭐ Priority 3
*Week 4 - CVE & Asset Pages*

```
┌─────────────────────────────────────────────────────────────┐
│  Tasks                                                      │
│  ════════════════════════════════════════════════════════   │
│                                                             │
│  ☐ Table Component                                          │
│    └─ Sortable columns                                      │
│    └─ Row hover effects                                     │
│    └─ Action menu                                           │
│                                                             │
│  ☐ Filter Bar Component                                     │
│    └─ Search input                                          │
│    └─ Dropdown filters                                      │
│    └─ Toggle switches (KEV)                                 │
│                                                             │
│  ☐ Pagination Component                                     │
│    └─ Page numbers                                          │
│    └─ Previous/Next buttons                                 │
│    └─ Items per page selector                               │
│                                                             │
│  ☐ CVE List Page                                            │
│    └─ Filter bar integration                                │
│    └─ Table with severity badges                            │
│    └─ Pagination                                            │
│                                                             │
│  ☐ Asset Card Component                                     │
│    └─ CPE display                                           │
│    └─ Vulnerability summary                                 │
│    └─ Action buttons                                        │
│                                                             │
│  ☐ Asset Match Modal                                        │
│    └─ Asset details                                         │
│    └─ Matching CVEs list                                      │
│    └─ Severity grouping                                     │
│                                                             │
│  Deliverable: Complete CVE and Asset pages                    │
└─────────────────────────────────────────────────────────────┘
```

### Phase 5: Rules & Polish ⭐ Priority 4
*Week 5 - Rules Page & Final Touches*

```
┌─────────────────────────────────────────────────────────────┐
│  Tasks                                                      │
│  ════════════════════════════════════════════════════════   │
│                                                             │
│  ☐ Tab Component                                            │
│    └─ Horizontal tabs                                       │
│    └─ Active indicator                                      │
│    └─ Smooth transitions                                    │
│                                                             │
│  ☐ Code Block Component                                     │
│    └─ Syntax highlighting (basic)                           │
│    └─ Line numbers                                          │
│    └─ Copy to clipboard                                     │
│                                                             │
│  ☐ Rules Page                                               │
│    └─ Tab navigation (Snort/Sigma/JSON)                     │
│    └─ Code display                                          │
│    └─ Download/Copy actions                                   │
│                                                             │
│  ☐ Modal Component                                          │
│    └─ Overlay with blur                                     │
│    └─ Enter/exit animations                                 │
│    └─ Focus trap                                            │
│                                                             │
│  ☐ Loading States                                           │
│    └─ Skeleton screens                                      │
│    └─ Spinner component                                     │
│    └─ Empty states                                          │
│                                                             │
│  ☐ Error States                                             │
│    └─ Error boundaries                                        │
│    └─ Toast notifications                                   │
│    └─ Retry actions                                           │
│                                                             │
│  Deliverable: Production-ready application                    │
└─────────────────────────────────────────────────────────────┘
```

### Phase 6: Responsive & Accessibility
*Week 6 - Mobile & A11y*

```
┌─────────────────────────────────────────────────────────────┐
│  Tasks                                                      │
│  ════════════════════════════════════════════════════════   │
│                                                             │
│  ☐ Responsive Layouts                                       │
│    └─ Mobile breakpoints                                    │
│    └─ Sidebar collapse                                      │
│    └─ Table card conversion                                 │
│                                                             │
│  ☐ Accessibility                                            │
│    └─ Keyboard navigation                                   │
│    └─ Focus management                                      │
│    └─ ARIA labels                                           │
│    └─ Color contrast verification                           │
│                                                             │
│  Deliverable: Accessible, responsive app                      │
└─────────────────────────────────────────────────────────────┘
```

---

## File Structure

```
frontend/src/
├── styles/
│   ├── index.css              # Global styles, CSS variables
│   ├── animations.css         # Keyframes and transitions
│   └── components.css         # Component-specific styles
│
├── components/
│   ├── ui/                    # Reusable UI primitives
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.css
│   │   ├── Card/
│   │   │   ├── Card.jsx
│   │   │   └── Card.css
│   │   ├── Badge/
│   │   ├── Input/
│   │   ├── Select/
│   │   ├── Toggle/
│   │   ├── Modal/
│   │   ├── Tooltip/
│   │   └── Table/
│   │
│   ├── layout/                # Layout components
│   │   ├── Sidebar/
│   │   ├── Header/
│   │   └── Layout/
│   │
│   ├── charts/                # Chart components
│   │   ├── AreaChart/
│   │   ├── DonutChart/
│   │   └── Sparkline/
│   │
│   └── data/                  # Data display components
│       ├── StatCard/
│       ├── Timeline/
│       └── CodeBlock/
│
├── pages/                     # Page components
│   ├── Dashboard/
│   ├── CveList/
│   ├── AssetInventory/
│   └── Rules/
│
└── utils/                     # Utilities
    ├── animations.js
    └── formatters.js
```

---

## Quick Reference

### Color Usage Cheat Sheet

| Context | Background | Text | Border |
|---------|-----------|------|--------|
| Page | `bg-page` | `text-primary` | - |
| Card | `bg-card` | `text-primary` | `border-default` |
| Card Hover | `bg-card-hover` | `text-primary` | `border-hover` |
| Input | `bg-input` | `text-primary` | `border-default` → `accent-primary` |
| Button Primary | `gradient-primary` | `text-inverse` | - |
| Button Secondary | transparent | `text-primary` | `border-default` |
| Critical Badge | `color-danger-10` | `color-danger` | `color-danger` |
| High Badge | `color-danger-10` | `color-danger` | - |
| Medium Badge | `color-warning-10` | `color-warning` | - |
| Low Badge | `color-success-10` | `color-success` | - |

### Spacing Cheat Sheet

| Context | Token | Pixels |
|---------|-------|--------|
| Icon gaps | `space-1` | 4px |
| Badge padding | `space-2` | 8px |
| Component internal | `space-3` | 12px |
| Card padding | `space-4` | 16px |
| Section gaps | `space-5` | 20px |
| Container padding | `space-6` | 24px |
| Page sections | `space-8` | 32px |

### Animation Cheat Sheet

| Context | Duration | Easing |
|---------|----------|--------|
| Button hover | 150ms | ease-out |
| Card hover | 200ms | ease-out |
| Dropdown | 150ms | ease-out |
| Modal | 200ms | ease-out |
| Page transition | 300ms | ease-out |

---

*Design System Version 1.0*  
*Last Updated: April 2026*
