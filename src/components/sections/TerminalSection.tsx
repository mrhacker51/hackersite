import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TextType from '../reactbits/TextType';

const terminalLines = [
  { prompt: true, text: 'nmap -sS -sV -O 192.168.1.0/24' },
  { prompt: false, text: 'Starting Nmap 7.94 ( https://nmap.org )' },
  { prompt: false, text: 'Scanning 256 hosts [1000 ports/host]...' },
  { prompt: false, text: '' },
  { prompt: false, text: 'PORT     STATE  SERVICE     VERSION' },
  { prompt: false, text: '22/tcp   open   ssh         OpenSSH 8.9p1' },
  { prompt: false, text: '80/tcp   open   http        Apache 2.4.54' },
  { prompt: false, text: '443/tcp  open   https       nginx 1.22.1' },
  { prompt: false, text: '3306/tcp open   mysql       MySQL 8.0.32' },
  { prompt: false, text: '8080/tcp open   http-proxy  Squid 5.7' },
  { prompt: false, text: '' },
  { prompt: false, text: 'OS detection: Linux 5.15 - 6.2' },
  { prompt: false, text: 'Nmap done: 256 IP addresses (47 hosts up) scanned in 127.43 seconds' },
  { prompt: false, text: '' },
  { prompt: true, text: 'searchsploit apache 2.4.54' },
  { prompt: false, text: 'Apache 2.4.54 - Path Traversal | exploits/linux/remote/51345.py' },
  { prompt: false, text: 'Apache 2.4.54 - SSRF via mod_proxy | exploits/linux/webapps/51427.txt' },
  { prompt: false, text: '' },
  { prompt: true, text: 'python3 51345.py -t 192.168.1.105 -p /etc/shadow' },
  { prompt: false, text: '[*] Exploiting target 192.168.1.105:80 ...' },
  { prompt: false, text: '[+] SUCCESS! Access granted.' },
  { prompt: false, text: '' },
  { prompt: true, text: 'cat /etc/shadow | head -5' },
  { prompt: false, text: 'root:$6$rounds=656000$...:19234:0:99999:7:::' },
  { prompt: false, text: '' },
  { prompt: true, text: 'echo "System compromised. Generating report..."' },
  { prompt: false, text: 'System compromised. Generating report...' },
];

const TerminalSection = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentLine < terminalLines.length) {
      const timeout = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
      }, terminalLines[currentLine].text === '' ? 100 : 200);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentLine]);

  return (
    <section id="terminal" className="relative py-24 px-4">
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-hacker-green font-mono text-xs tracking-widest">{'[ 0x04 ]'}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            <span className="text-hacker-green">{'>'} </span>
            LIVE_TERMINAL
          </h2>
          <div className="h-px bg-gradient-to-r from-hacker-green via-hacker-cyan to-transparent w-64" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="border border-hacker-border bg-hacker-darker rounded-lg overflow-hidden shadow-2xl shadow-hacker-green/5"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-2 bg-hacker-surface border-b border-hacker-border">
            <div className="w-3 h-3 rounded-full bg-hacker-red" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-hacker-green" />
            <span className="ml-4 text-xs font-mono text-gray-500">root@kali:~/operations</span>
          </div>

          {/* Terminal body */}
          <div className="p-4 font-mono text-sm h-96 overflow-y-auto scrollbar-thin">
            {terminalLines.slice(0, currentLine).map((line, i) => (
              <div key={i} className="leading-relaxed">
                {line.prompt ? (
                  <span>
                    <span className="text-hacker-green">root@kali</span>
                    <span className="text-gray-500">:</span>
                    <span className="text-hacker-cyan">~/operations</span>
                    <span className="text-gray-500">$ </span>
                    <span className="text-gray-200">{line.text}</span>
                  </span>
                ) : (
                  <span className={line.text.includes('[+]') ? 'text-hacker-green' : line.text.includes('[*]') ? 'text-hacker-cyan' : 'text-gray-400'}>
                    {line.text}
                  </span>
                )}
              </div>
            ))}

            {isComplete && (
              <div className="mt-2">
                <span className="text-hacker-green">root@kali</span>
                <span className="text-gray-500">:</span>
                <span className="text-hacker-cyan">~/operations</span>
                <span className="text-gray-500">$ </span>
                <TextType text="whoami" speed={120} />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalSection;
