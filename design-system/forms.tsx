import React from 'react';

function FieldShell({ id, label, hint, error, children }: { id: string; label: string; hint?: string; error?: string; children: React.ReactNode }) {
  return (
    <div className={`sp-field${error ? ' sp-field--error' : ''}`}>
      <label className="sp-field__label" htmlFor={id}>{label}</label>
      {hint && <span className="sp-field__hint" id={`${id}-hint`}>{hint}</span>}
      {children}
      {error && (
        <span className="sp-field__error" id={`${id}-error`} role="alert">
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M7 1 L13 12 H1 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><line x1="7" y1="5.5" x2="7" y2="8.5" stroke="currentColor" strokeWidth="1.5" /><circle cx="7" cy="10.5" r="0.9" fill="currentColor" /></svg>
          {error}
        </span>
      )}
    </div>
  );
}

/**
 * Labelled text input for the enquiry and referral forms. Label is always visible above the
 * field (never placeholder-only), hints wire up via aria-describedby, errors are plain
 * English with an icon. Mark required fields in the label text, not with a bare asterisk.
 */
export function TextField({ id, label, hint, error, type = 'text', value, placeholder }: TextFieldProps) {
  return (
    <FieldShell id={id} label={label} hint={hint} error={error}>
      <input
        className="sp-field__input"
        id={id}
        type={type}
        defaultValue={value}
        placeholder={placeholder}
        aria-describedby={hint ? `${id}-hint` : undefined}
        aria-invalid={error ? true : undefined}
      />
    </FieldShell>
  );
}
export interface TextFieldProps {
  id: string;
  /** Always visible; include "(required)" in the text when the field is required */
  label: string;
  /** Short helper line under the label */
  hint?: string;
  /** Plain-English error, e.g. "We need an email address so we can reply" */
  error?: string;
  type?: 'text' | 'email' | 'tel';
  value?: string;
  placeholder?: string;
}

/**
 * Labelled multi-line input, same anatomy as TextField. Keep referral questions light: the
 * form starts a conversation, it never collects detailed incident history.
 */
export function TextAreaField({ id, label, hint, error, rows = 4, value }: TextAreaFieldProps) {
  return (
    <FieldShell id={id} label={label} hint={hint} error={error}>
      <textarea
        className="sp-field__input"
        id={id}
        rows={rows}
        defaultValue={value}
        aria-describedby={hint ? `${id}-hint` : undefined}
        aria-invalid={error ? true : undefined}
      />
    </FieldShell>
  );
}
export interface TextAreaFieldProps {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  rows?: number;
  value?: string;
}

/**
 * Groups related form fields under a serif legend. The referral form uses three:
 * "About you", "About the young person", "What is happening now".
 */
export function FormGroup({ legend, children }: FormGroupProps) {
  return (
    <fieldset className="sp-fieldset">
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
}
export interface FormGroupProps {
  legend: string;
  children?: React.ReactNode;
}
