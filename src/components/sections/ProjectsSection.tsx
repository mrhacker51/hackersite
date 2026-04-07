import { motion } from 'framer-motion';
import GridScan from '../reactbits/GridScan';

const projects = [
  {
    title: 'OPERATION PHANTOM',
    description: 'Full-spectrum penetration test on Fortune 500 financial infrastructure. Identified 23 critical vulnerabilities across network perimeter and internal systems.',
    tags: ['penetration-testing', 'network', 'critical'],
    status: 'completed',
    severity: 'critical',
  },
  {
    title: 'PROJECT SHADOW_NET',
    description: 'Developed custom C2 framework for authorized red team engagement. Implemented encrypted comms, beacon rotation, and automated privilege escalation.',
    tags: ['red-team', 'c2-framework', 'tooling'],
    status: 'completed',
    severity: 'high',
  },
  {
    title: 'VULNERABILITY RESEARCH',
    description: 'Discovered and responsibly disclosed 0-day vulnerability in widely-used enterprise software. CVE assigned. Patch deployed within 30 days.',
    tags: ['0-day', 'cve', 'disclosure'],
    status: 'disclosed',
    severity: 'critical',
  },
  {
    title: 'MALWARE ANALYSIS LAB',
    description: 'Built automated malware analysis pipeline processing 500+ samples daily. ML-based classification achieving 97% accuracy on known families.',
    tags: ['malware', 'automation', 'ml'],
    status: 'active',
    severity: 'high',
  },
  {
    title: 'CTF INFRASTRUCTURE',
    description: 'Designed and deployed capture-the-flag platform for security training. 50+ challenges spanning web, crypto, pwn, reverse, and forensics.',
    tags: ['ctf', 'training', 'education'],
    status: 'active',
    severity: 'medium',
  },
  {
    title: 'SECURITY AUDIT TOOLKIT',
    description: 'Open-source toolkit for automated security assessment. 2.3k GitHub stars. Integrates with CI/CD pipelines for continuous security monitoring.',
    tags: ['open-source', 'automation', 'devsecops'],
    status: 'active',
    severity: 'medium',
  },
];

const severityColor = (sev: string) => {
  switch (sev) {
    case 'critical': return 'text-hacker-red';
    case 'high': return 'text-orange-500';
    case 'medium': return 'text-yellow-500';
    default: return 'text-gray-500';
  }
};

const statusColor = (status: string) => {
  switch (status) {
    case 'completed': return 'bg-hacker-green/20 text-hacker-green';
    case 'active': return 'bg-hacker-cyan/20 text-hacker-cyan';
    case 'disclosed': return 'bg-hacker-purple/20 text-hacker-purple';
    default: return 'bg-gray-500/20 text-gray-500';
  }
};

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ y: -4, borderColor: 'rgba(0, 255, 65, 0.4)' }}
    className="group relative p-6 border border-hacker-border bg-hacker-surface/80 hover:bg-hacker-surface transition-all duration-300"
  >
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-hacker-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

    <div className="flex items-start justify-between mb-4">
      <h3 className="text-lg font-bold text-gray-100 group-hover:text-hacker-green transition-colors font-mono">
        {'> '}
        {project.title}
      </h3>
      <span className={`text-xs font-mono px-2 py-0.5 rounded ${severityColor(project.severity)}`}>
        [{project.severity.toUpperCase()}]
      </span>
    </div>

    <p className="text-sm text-gray-400 mb-4 leading-relaxed">{project.description}</p>

    <div className="flex flex-wrap gap-2 mb-4">
      {project.tags.map((tag) => (
        <span key={tag} className="text-xs font-mono px-2 py-0.5 bg-hacker-dark border border-hacker-border/50 text-hacker-cyan">
          #{tag}
        </span>
      ))}
    </div>

    <div className="flex items-center justify-between">
      <span className={`text-xs font-mono px-2 py-0.5 rounded ${statusColor(project.status)}`}>
        STATUS: {project.status.toUpperCase()}
      </span>
      <span className="text-xs font-mono text-gray-600 group-hover:text-hacker-green transition-colors">
        [ details ]
      </span>
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 px-4">
      <GridScan color="#00ff41" opacity={0.04} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-hacker-green font-mono text-xs tracking-widest">{'[ 0x03 ]'}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            <span className="text-hacker-green">{'>'} </span>
            OPERATIONS_LOG
          </h2>
          <div className="h-px bg-gradient-to-r from-hacker-green via-hacker-cyan to-transparent w-64" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
