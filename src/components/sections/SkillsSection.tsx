import AnimatedList from '../reactbits/AnimatedList';
import GridScan from '../reactbits/GridScan';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Network Security', level: 95, icon: '🔒' },
  { name: 'Reverse Engineering', level: 88, icon: '🔍' },
  { name: 'Malware Analysis', level: 85, icon: '🦠' },
  { name: 'Exploit Development', level: 90, icon: '💥' },
  { name: 'Web Application Security', level: 92, icon: '🌐' },
  { name: 'Cryptography', level: 80, icon: '🔐' },
  { name: 'Social Engineering', level: 75, icon: '🎭' },
  { name: 'Cloud Security (AWS/Azure)', level: 82, icon: '☁️' },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="group">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-mono text-gray-300 group-hover:text-hacker-green transition-colors">
        {'> '}
        {name}
      </span>
      <span className="text-xs font-mono text-hacker-green">{level}%</span>
    </div>
    <div className="h-1.5 bg-hacker-surface border border-hacker-border rounded overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-hacker-green to-hacker-cyan rounded"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 px-4 overflow-hidden">
      <GridScan color="#00d4ff" opacity={0.06} />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-hacker-green font-mono text-xs tracking-widest">{'[ 0x02 ]'}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            <span className="text-hacker-green">{'>'} </span>
            SKILL_MATRIX
          </h2>
          <div className="h-px bg-gradient-to-r from-hacker-green via-hacker-cyan to-transparent w-64" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <AnimatedList delay={0.08}>
              {skills.slice(0, 4).map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </AnimatedList>
          </div>
          <div className="space-y-4">
            <AnimatedList delay={0.08}>
              {skills.slice(4).map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </AnimatedList>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 p-4 border border-hacker-border bg-hacker-surface/50 font-mono text-xs text-gray-500"
        >
          <div className="text-hacker-green mb-2">{'// CERTIFICATIONS'}</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {['OSCP', 'CEH', 'CISSP', 'GPEN'].map((cert) => (
              <span key={cert} className="px-3 py-1 border border-hacker-border/50 text-hacker-cyan">
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
