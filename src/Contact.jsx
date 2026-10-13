import React from 'react';
import { Section, Button, TextField, TextAreaField, FormGroup } from 'summitprovision';
import { Shell, PageHeader, EMAIL } from './chrome.jsx';

export default function Contact() {
  return (
    <Shell current="/contact/" banner={false}>
      <PageHeader
        eyebrow="Contact"
        title="Start a conversation"
        lead="Whether you are a parent, a carer, a school or a local authority, the first step is the same. Ask a question, share what is happening, or talk something through: no referral form is needed."
      />
      <Section variant="cloud">
        <div className="ct-grid">
          <div>
            <h2>Speak to Robert Williams</h2>
            <p>Every conversation starts with Robert Williams. Email directly, or use the form and he will reply by email.</p>
            <p><a className="hp-strong-link" href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
            <p className="sp-small hp-note-measure">Share only what you are comfortable with. Details can stay light for a first conversation.</p>
            <div className="hp-contact-note">
              <p><strong>This is not an emergency route.</strong> If a child is at immediate risk, call 999. For urgent safeguarding concerns, contact your local authority children's services.</p>
            </div>
          </div>
          <form id="referral" className="ct-form" data-rv>
            <FormGroup legend="About you">
              <TextField id="your-name" label="Your name" />
              <TextField id="your-email" label="Your email" type="email" />
              <TextField id="your-role" label="Your role or relationship" hint="Parent, carer, SENCO, social worker, or something else" />
            </FormGroup>
            <FormGroup legend="About the young person">
              <TextField id="yp-name" label="First name or initials" hint="No full name is needed at this stage" />
              <TextField id="yp-age" label="Age or year group" />
            </FormGroup>
            <FormGroup legend="The conversation">
              <TextAreaField id="message" label="What would you like to talk about?" hint="A sentence or two is enough to start" />
            </FormGroup>
            <Button variant="primary" type="submit">Start a conversation</Button>
            <p role="status" id="ct-status" className="ct-status" hidden>Thank you. Your email app should now open with your message ready to send to Robert Williams. If it does not, email {EMAIL} directly.</p>
            <p className="sp-small ct-privacy">The form opens your own email app with the message ready to send. Nothing is stored on this website.</p>
          </form>
        </div>
      </Section>
    </Shell>
  );
}
