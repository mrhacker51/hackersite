import { motion } from 'framer-motion';
import ScrambledText from '../reactbits/ScrambledText';
import Particles from '../reactbits/Particles';

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      <Particles particleCount={30} particleColor="#00d4ff" speed={0.3} minSize={1} maxSize={2} />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-hacker-green font-mono text-xs tracking-widest">{'[ 0x05 ]'}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            <span className="text-hacker-green">{'>'} </span>
            ESTABLISH_CONTACT
          </h2>
          <div className="h-px bg-gradient-to-r from-transparent via-hacker-green to-transparent w-64 mx-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 font-mono text-sm mb-12"
        >
          {'// Secure communication channels available. All transmissions encrypted.'}
        </motion.p>

        <div className="space-y-6">
          <motion.a
            href="mailto:root@hacker.dev"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="block p-4 border border-hacker-border bg-hacker-surface/50 hover:border-hacker-green/50 transition-all duration-300 group"
          >
            <div className="text-xs font-mono text-gray-500 mb-1">{'[ EMAIL ]'}</div>
            <ScrambledText
              text="root@hacker.dev"
              className="text-lg text-hacker-green font-mono"
            />
          </motion.a>

          <motion.a
            href="#"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="block p-4 border border-hacker-border bg-hacker-surface/50 hover:border-hacker-cyan/50 transition-all duration-300 group"
          >
            <div className="text-xs font-mono text-gray-500 mb-1">{'[ GITHUB ]'}</div>
            <ScrambledText
              text="github.com/hacker"
              className="text-lg text-hacker-cyan font-mono"
            />
          </motion.a>

          <motion.a
            href="#"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="block p-4 border border-hacker-border bg-hacker-surface/50 hover:border-hacker-purple/50 transition-all duration-300 group"
          >
            <div className="text-xs font-mono text-gray-500 mb-1">{'[ PGP KEY ]'}</div>
            <ScrambledText
              text="0xDEAD BEEF CAFE 1337"
              className="text-lg text-hacker-purple font-mono"
            />
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 p-4 border border-hacker-border/30 bg-hacker-dark/50 font-mono text-xs text-gray-600"
        >
          <div className="text-hacker-green/50 mb-2">{'// FINGERPRINT'}</div>
          <div className="break-all">
            SHA256: 4a:7b:2c:9d:1e:8f:3a:6b:5c:0d:7e:2f:9a:4b:8c:1d:6e:3f:0a:5b:7c:2d:9e:4f:1a:8b:6c:3d:0e:7f:2a:5b
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
