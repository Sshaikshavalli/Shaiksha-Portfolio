import { useState } from 'react'
import { endpoints, API_BASE } from '../data/content'
import { useCopy } from '../hooks/hooks'
import { Copy } from './Icons'

/* Very small JSON highlighter: keys, strings, numbers, literals. */
function Json({ value }) {
  const text = JSON.stringify(value, null, 2)
  const parts = text.split(/("(?:[^"\\]|\\.)*"\s*:?|\b-?\d+(?:\.\d+)?\b|\bnull\b|\btrue\b|\bfalse\b)/g)
  return (
    <pre className="code"><code>
      {parts.map((p, i) => {
        if (!p) return null
        if (/^".*"\s*:$/.test(p)) return <span key={i} className="j-key">{p}</span>
        if (/^"/.test(p)) return <span key={i} className="j-str">{p}</span>
        if (/^-?\d/.test(p)) return <span key={i} className="j-num">{p}</span>
        if (/^(null|true|false)$/.test(p)) return <span key={i} className="j-lit">{p}</span>
        return p
      })}
    </code></pre>
  )
}

function curlFor(ep) {
  const url = 'http://localhost:8080' + (ep.example || ep.path)
  let cmd = `curl -X ${ep.method} "${url}"`
  if (ep.body) cmd += ` \\\n  -H "Content-Type: application/json" \\\n  -d '${JSON.stringify(ep.body)}'`
  return cmd
}

export default function ApiExplorer() {
  const [i, setI] = useState(0)
  const [msg, copy] = useCopy()
  const ep = endpoints[i]
  const curl = curlFor(ep)

  return (
    <div className="explorer">
      <div className="explorer-bar">
        <span className="explorer-title">API explorer</span>
        <span className="explorer-base">Base URL <code>{API_BASE}</code></span>
      </div>
      <div className="explorer-grid">
        <ul className="ep-list" role="listbox" aria-label="Endpoints">
          {endpoints.map((e, idx) => (
            <li key={e.method + e.path} role="presentation">
              <button
                role="option"
                aria-selected={idx === i}
                className={`ep ${idx === i ? 'on' : ''}`}
                onClick={() => setI(idx)}
              >
                <span className={`method m-${e.method.toLowerCase()}`}>{e.method}</span>
                <span className="ep-path">{e.path.replace('/api/employment', '') || e.path}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="ep-detail" aria-live="polite">
          <div className="ep-head">
            <span className={`method m-${ep.method.toLowerCase()}`}>{ep.method}</span>
            <code className="ep-full">{ep.path}</code>
          </div>
          <h4>{ep.title}</h4>
          <p className="ep-notes">{ep.notes}</p>

          {ep.body && (<><p className="code-label">Request body</p><Json value={ep.body} /></>)}

          <p className="code-label">
            Sample response <span className={`status-code s-${String(ep.status)[0]}`}>{ep.status}</span>
          </p>
          {ep.response === null
            ? <pre className="code"><code className="j-lit">No content</code></pre>
            : <Json value={ep.response} />}

          {ep.errors.length > 0 && (
            <>
              <p className="code-label">Error responses</p>
              <ul className="errors">{ep.errors.map((er) => <li key={er}>{er}</li>)}</ul>
            </>
          )}

          <div className="curl">
            <button className="btn btn-small btn-outline" onClick={() => copy(curl, 'curl copied')}>
              <Copy width={16} height={16} /> Copy as curl
            </button>
            <span className="copy-msg" role="status">{msg}</span>
          </div>
        </div>
      </div>
      <p className="explorer-foot">Sample responses shown for illustration. Run the project locally to call the live API.</p>
    </div>
  )
}
