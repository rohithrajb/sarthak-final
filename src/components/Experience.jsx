import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import WorkIcon from '@mui/icons-material/Work';
import Link from '@mui/material/Link';

const experiences = [
   {
    title: 'Data Engineer Intern',
    company: 'United Health Group (US)',
    period: '08/2024 – Present',
    achievements: [
      'Automated ETL pipelines using Azure Logic Apps and Azure Functions, reducing latency by 35%.',
      'Implemented secure analytics workflows via Azure Key Vault and IAM policies.',
      'Streamlined operations through enhanced system integration and data flow orchestration.',
      'Created monitoring scripts for ETL health checks, reducing incident resolution time by 30%.',
      'Designed real-time PySpark + AWS Glue pipelines for 5TB+ daily telemetry data with automated quality checks using PyDeequ.',
      'Developed forecasting models in Power BI to optimize AWS resource planning, improving accuracy by 20%.',
      'Built Python-based simulation tools, accelerating experimentation cycles by 25% and reducing testing costs.',
    ]
  },

  {
    title: 'Data Analyst',
    company: 'ACL Digital (India)',
  
    period: '04/2021 – 05/2023',
    achievements: [
      'Delivered interactive Power BI dashboards for logistics KPIs, cutting reporting delays by 40%.',
      'Migrated ETL pipelines to AWS Redshift via Airflow and dbt, achieving 90% schema compatibility.',
     'Executed 10+ pricing A/B tests, reducing churn by 8%.',
     'Designed automated Excel + SQL reporting templates, saving ~15 hours/week of manual effort for the analytics team.',
     'Conducted customer segmentation using clustering algorithms, enabling targeted marketing campaigns that improved engagement by 12%.',
     'Strengthened data governance with role-based access controls and encryption in AWS & Azure.',
      'Collaborated with DevOps to implement CI/CD pipelines for data workflows, enabling faster deployment cycles and reducing manual intervention.',
      'Enhanced telemetry anomaly detection by integrating ML-based classifiers into real-time streams, improving detection rates by 22%.',
    ],
  },  
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      component={motion.section}
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      sx={{ py: 8 }}
      id="experience"
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component={motion.h2}
          sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 700,
            mb: 6,
            textAlign: 'center',
          }}
        >
          Professional Experience
        </Typography>

        {experiences.map((exp, index) => (
          <Box
            key={index}
            component={motion.div}
            variants={itemVariants}
            sx={{
              p: 3,
              mb: 4,
              background: '#ffffff',
              borderRadius: '20px',
              border: '1px solid #E6E1F9',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              transition: 'all 0.3s ease-in-out',
              position: 'relative',
              overflow: 'hidden',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                border: '1px solid #C7BEF6',
              },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1.5rem', md: '2rem' },
                mb: 1,
                color: '#1a365d',
              }}
            >
              {exp.title}
            </Typography>

            <Link
              // href={exp.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textDecoration: 'none',
                // '&:hover': {
                //   textDecoration: 'underline',
                // },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  mb: 2,
                  color: '#4C6FFF',
                }}
              >
                {exp.company}
              </Typography>
            </Link>

            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                background: 'rgba(76, 111, 255, 0.05)',
                px: 3,
                py: 1,
                borderRadius: 2,
                mb: 3
              }}
            >
              <WorkIcon sx={{ mr: 1, color: '#4C6FFF' }} />
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 500,
                  color: 'text.secondary'
                }}
              >
                {exp.period}
              </Typography>
            </Box>

            <Box component="ul" sx={{ m: 0, pl: 3 }}>
              {exp.achievements.map((achievement, i) => (
                <Typography
                  component="li"
                  key={i}
                  variant="body1"
                  sx={{
                    mb: 2,
                    lineHeight: 1.6,
                    '&::marker': {
                      color: '#4C6FFF'
                    }
                  }}
                >
                  {achievement}
                </Typography>
              ))}
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
}
