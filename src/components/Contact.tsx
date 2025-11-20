import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Clock } from 'lucide-react';
import { useState, FormEvent } from 'react';

interface ContactProps {
  theme: 'light' | 'dark';
}

export function Contact({ theme }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sheikharsalan8146@icloud.com',
      link: 'mailto:sheikharsalan8146@icloud.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9541995177',
      link: 'tel:+91-9541995177'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Srinagar, J&K',
      link: null
    }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', link: 'https://github.com/Arsalan0786' },
    { icon: Linkedin, label: 'LinkedIn', link: 'https://linkedin.com/in/sheikharsalan8146' },
    { icon: Twitter, label: 'Twitter', link: 'https://twitter.com/sheikharsalann' },
    { icon: Instagram, label: 'Instagram', link: 'https://instagram.com/sheikharsalan8146' }
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // 1) Replace this URL with your actual Formspree endpoint
      // After you create a form on Formspree, you'll get something like:
      // https://formspree.io/f/abcdxyz
      const FORMSPREE_ENDPOINT = 'https://formspree.io/f/meonrgjq';

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message. Please try again.');
      }

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage(
        'Something went wrong while sending your message. Please try again or email me directly.'
      );
    }
  };

  return (
    <section id="contact" className={`min-h-screen py-20 px-6 flex items-center ${
      theme === 'dark' ? 'bg-zinc-950' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Get in Touch</h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Let's collaborate on your next project or discuss fitness coaching opportunities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 ${
              theme === 'dark'
                ? 'bg-zinc-900 border border-zinc-800'
                : 'bg-zinc-50 border border-zinc-200'
            } space-y-6`}
          >
            <h3 className="text-2xl mb-6">Contact Information</h3>
            
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${
                  theme === 'dark' ? 'bg-zinc-800' : 'bg-white'
                }`}>
                  <item.icon className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} size={24} />
                </div>
                <div>
                  <p className={`text-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {item.label}
                  </p>
                  {item.link ? (
                    <a
                      href={item.link}
                      className={`hover:${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} transition-colors`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p>{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Availability Status */}
            <div className={`p-4 rounded-lg ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-blue-950/50 to-purple-950/50 border border-zinc-800'
                : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-zinc-200'
            } mt-8`}>
              <div className="flex items-center gap-3 mb-2">
                <Clock className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} size={20} />
                <p>Availability Status</p>
              </div>
              <p className={`text-sm ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}`}>
                <span className={theme === 'dark' ? 'text-green-400' : 'text-green-600'}>
                  ● Open for new collaborations
                </span>
                <br />
                Typically respond within 24 hours
              </p>
            </div>

            {/* Note about contact options */}
            <div
              className={`p-4 rounded-lg text-sm ${
                theme === 'dark'
                  ? 'bg-zinc-800/50 border border-zinc-700/50'
                  : 'bg-zinc-100 border border-zinc-300/50'
              }`}
            >
              <p className={`${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'} italic`}>
                You can either use the message form on the right or contact me directly via the email
                link above.
              </p>
            </div>
          </motion.div>

          {/* Social Links & Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Social Links */}
            <div className={`rounded-2xl p-8 ${
              theme === 'dark'
                ? 'bg-zinc-900 border border-zinc-800'
                : 'bg-zinc-50 border border-zinc-200'
            }`}>
              <h3 className="text-2xl mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center gap-3 p-4 rounded-xl transition-all ${
                      theme === 'dark'
                        ? 'bg-zinc-800 hover:bg-zinc-700 border border-zinc-700'
                        : 'bg-white hover:bg-zinc-100 border border-zinc-200'
                    }`}
                  >
                    <social.icon size={28} className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
                    <span className="text-sm">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className={`rounded-2xl p-8 ${
              theme === 'dark'
                ? 'bg-zinc-900 border border-zinc-800'
                : 'bg-zinc-50 border border-zinc-200'
            }`}>
              <h3 className="text-2xl mb-6">Send a Message</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg transition-colors ${
                      theme === 'dark'
                        ? 'bg-zinc-800 border border-zinc-700 focus:border-blue-500'
                        : 'bg-white border border-zinc-300 focus:border-blue-600'
                    } outline-none`}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg transition-colors ${
                      theme === 'dark'
                        ? 'bg-zinc-800 border border-zinc-700 focus:border-blue-500'
                        : 'bg-white border border-zinc-300 focus:border-blue-600'
                    } outline-none`}
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg transition-colors ${
                      theme === 'dark'
                        ? 'bg-zinc-800 border border-zinc-700 focus:border-blue-500'
                        : 'bg-white border border-zinc-300 focus:border-blue-600'
                    } outline-none resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full px-6 py-3 rounded-lg transition-all ${
                    theme === 'dark'
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'success' && (
                  <p className="text-sm text-green-500">
                    Your message has been sent! I&apos;ll get back to you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-sm text-red-500">
                    {errorMessage || 'There was an error sending your message.'}
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className={`text-center mt-16 pt-8 border-t ${
            theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'
          }`}
        >
          <p className={theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}>
            © Sheikh Arsalan. 2025.
          </p>
        </motion.div>
      </div>
    </section>
  );
}