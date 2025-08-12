import { Box, Typography, Grid, Card, Chip, Container, IconButton, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { School, LocationOn, CurrencyExchange, Assessment } from '@mui/icons-material';
import { styles } from './styles/ProjectStyles';
import { useTheme } from '@mui/material/styles';

const projects = [
  {
    title: 'Tokyo Olympics Data Analysis',
    description: 'Migrated raw data to Azure Data Lake, used Databricks for cleaning and transformation, transferred data back to the lake, and created Tableau dashboards through Azure Synapse for enhanced analytics.',
    technologies: ['Azure Datalake Gen 2', 'Azure DataFactory', 'Azure DataBricks', 'Azure Synapse', 'Tableau Public',],
    //githubUrl: 'https://github.com/hetvijoshi/AcademiVerse',
    emoji: '🤖',
  },
  {
    title: 'Customer Churn Prediction',
    description: 'Built Delta Lake pipelines with Databricks DLT and dbt, deployed Flask APIs on AWS, integrated Airflow for automation, and applied churn modeling to optimize logistics and reduce latency by 40%.',
    technologies: ['Databricks DLT','Flask','AWS Lambda','AWS EC2','Airflow','Docker','Churn Modeling'],
    //githubUrl: 'https://github.com/hetvijoshi/SpotCrime',
    emoji: '🗺️',
  },
  {
    title: 'Parkinsons Disease Detection using Handwriting',
    description: 'Engineered a handwriting classification pipeline using VGG16, optimized Hive-based feature extraction, and delivered a diagnostic dashboard, improving evaluation timelines by 30%.',
    technologies: ['VGG16', 'Hive', 'Deep Learning', 'Diagnostic Dashboard'],
    //githubUrl: 'https://github.com/gadarajainik/GeoCompensate',
    emoji: '⏰',
  },
  {
    title: 'Knowledge Distilation',
    description: 'Knowledge distillation is a technique where a smaller model learns from a larger models soft predictions to improve efficiency and performance.',
    technologies: ['Transfer Learning', 'Deep Learning', 'Google Colab', 'Cloud Functions', 'GitHub Actions'],
    //githubUrl: 'https://github.com/gadarajainik/DutchNSettle',
    emoji: '💸',
  },
];

export default function Projects() {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
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
      sx={styles.section}
      id="projects"
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component={motion.h2}
          variants={itemVariants}
          sx={styles.title}
        >
           Projects
        </Typography>

        <Typography
          variant="body1"
          component={motion.p}
          variants={itemVariants}
          sx={styles.subtitle}
        >
          A collection of projects that showcase my expertise in full-stack development
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                component={motion.div}
                variants={itemVariants}
                sx={styles.card}
              >
                <Box sx={{
                  ...styles.cardHeader,
                  ...styles.getGradient(theme, project.title)
                }}>
                  <Box sx={styles.iconContainer}>
                    {project.title === 'Tokyo Olympics Data Analysis' && (
                      <>
                        <School sx={styles.academiverseIcon} />
                        <Box sx={styles.academiverseDecoration} />
                      </>
                    )}
                    {project.title === 'Customer Churn Prediction' && (
                      <>
                        <Box sx={styles.spotcrimePattern} />
                        <Assessment sx={styles.spotcrimeAssessmentIcon} />
                        <LocationOn sx={styles.spotcrimeLocationIcon} />
                        <Box sx={styles.spotcrimeFrame} />
                        <Box sx={styles.spotcrimeGradient} />
                      </>
                    )}
                    {project.title === 'Parkinsons Disease Detection using Handwriting' && (
                      <>
                        <LocationOn sx={styles.geoCompensateIcon} />
                        <Box sx={styles.geoCompensateGradient} />
                      </>
                    )}
                    {project.title === 'Knowledge Distilation' && (
                      <>
                        <CurrencyExchange sx={styles.dutchSettleIcon} />
                        <Box sx={styles.dutchSettleOuterCircle} />
                        <Box sx={styles.dutchSettleInnerCircle} />
                      </>
                    )}
                  </Box>
                </Box>

                <Box sx={styles.cardContent}>
                  <Typography variant="h5" sx={styles.projectTitle}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={styles.description}>
                    {project.description}
                  </Typography>
                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    gap={1}
                    sx={styles.techStack}
                  >
                    {project.technologies.map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        size="small"
                        sx={styles.chip}
                      />
                    ))}
                  </Stack>
                </Box>

                {/* <Stack
                  direction="row"
                  spacing={1}
                  sx={styles.cardActions}
                >
                  <IconButton
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    sx={styles.iconButton}
                  >
                    <GitHubIcon />
                  </IconButton>
                  {project.liveUrl && (
                    <IconButton
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                      sx={styles.iconButton}
                    >
                      <LaunchIcon />
                    </IconButton>
                  )}
                </Stack> */}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
