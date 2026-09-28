"use client";
import { FormEvent, useState } from 'react';
export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    const body = new URLSearchParams();
    values.forEach((value, key) => body.append(key, String(value)));
    setStatus('sending');
    try {
      const response = await fetch('/__forms.html', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() });
      if (!response.ok) throw new Error('Submission failed');
      setStatus('sent');
      form.reset();
    } catch { setStatus('error'); }
  }
  return <form name="contact" method="POST" action="/__forms.html" onSubmit={submit} className="space-y-5 bg-gray-50 border rounded-lg p-6">
    <input type="hidden" name="form-name" value="contact" />
    <p hidden><label>Leave this empty<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
    <div><label htmlFor="name" className="block font-medium mb-1">Your name</label><input id="name" name="name" autoComplete="name" required maxLength={150} className="w-full border rounded p-3" /></div>
    <div><label htmlFor="email" className="block font-medium mb-1">Email address</label><input id="email" name="email" type="email" autoComplete="email" required maxLength={254} className="w-full border rounded p-3" /></div>
    <div><label htmlFor="message" className="block font-medium mb-1">Message</label><textarea id="message" name="message" required rows={6} maxLength={5000} className="w-full border rounded p-3" /></div>
    <p className="text-sm text-gray-600">Your message is handled by Netlify Forms. See our <a className="text-blue-700 underline" href="/privacy/">privacy policy</a>.</p>
    <button disabled={status === 'sending'} className="bg-blue-700 text-white rounded px-6 py-3 disabled:opacity-50" type="submit">{status === 'sending' ? 'Sending…' : 'Send message'}</button>
    <div role="status" aria-live="polite">{status === 'sent' && <p className="text-green-800">Your message was received. Thank you.</p>}{status === 'error' && <p className="text-red-800">Your message could not be sent. Your text is still here; please try again later.</p>}</div>
  </form>;
}
