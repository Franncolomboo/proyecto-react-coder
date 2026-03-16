import React from 'react';
import { Target, Palette, Code, Rocket, Clock } from 'lucide-react'; // Iconos similares
import styles from './Steps.module.css';

const steps = [
  { id: '01', title: 'Estrategia & Research', time: '1-2 semanas', icon: <Target />, status: 'completed' },
  { id: '02', title: 'Diseño & Prototipado', time: '2-3 semanas', icon: <Palette />, status: 'active' },
  { id: '03', title: 'Desarrollo & Testing', time: '3-4 semanas', icon: <Code />, status: 'pending' },
  { id: '04', title: 'Lanzamiento & Ajustes', time: '1 semana', icon: <Rocket />, status: 'pending' },
];

const WorkProcess = () => {
  return (
    <div className={styles.container}>
      {steps.map((step, index) => (
        <div key={step.id} className={styles.stepWrapper}>
          <div className={styles.stepHeader}>
            {/* Círculo del icono */}
            <div className={`${styles.iconCircle} ${styles[step.status]}`}>
              {step.icon}
              {step.status === 'active' && <span className={styles.pulseDot} />}
            </div>
            
            {/* Línea conectora (no se muestra en el último) */}
            {index !== steps.length - 1 && (
              <div className={styles.connectorLine}>
                <div className={`${styles.progressFill} ${step.status === 'completed' ? styles.full : ''}`} />
              </div>
            )}
          </div>

          {/* Información inferior */}
          <div className={styles.info}>
            <span className={styles.time}><Clock size={12} /> {step.time}</span>
            <h4 className={styles.title}>{step.title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkProcess;