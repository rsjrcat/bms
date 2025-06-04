import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 15,
  },
  heading: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

export const PdfBrochure = ({ course }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.title}>{course.courseName}</Text>
      
      <View style={styles.section}>
        <Text style={styles.heading}>Course Description</Text>
        <Text style={styles.text}>{course.description}</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.heading}>Syllabus</Text>
        {course.syllabus.map((module, i) => (
          <View key={i} style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>{module.module}</Text>
            {module.topics.map((topic, j) => (
              <Text key={j}>• {topic}</Text>
            ))}
          </View>
        ))}
      </View>
    </Page>
  </Document>
);