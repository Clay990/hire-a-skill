import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';


interface UserData {
  id: string;
  name: string;
  location: string;
  pfpUrl: string;
  description: string;
  skills: string[];
}

const sampleUser: UserData = {
  id: 'u1',
  name: 'Alex Johnson',
  location: 'San Francisco, CA',
  pfpUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
  description:
    'React Native developer with 5 years of experience. Passionate about building clean, performant, and accessible mobile applications. In my free time, I enjoy hiking and contributing to open-source projects.',
  skills: [
    'React Native',
    'TypeScript',
    'JavaScript',
    'GraphQL',
    'Firebase',
    'Node.js',
    'UI/UX Design',
  ],
};

const ProfileScreen = () => {
  const user = sampleUser; 

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
    
        <View style={styles.pfpContainer}>
          <Image source={{ uri: user.pfpUrl }} style={styles.pfp} />
        </View>

        
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.location}>{user.location}</Text>


        <View style={styles.card}>
          <Text style={styles.cardTitle}>About Me</Text>
          <Text style={styles.description}>{user.description}</Text>
        </View>

    
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Skills</Text>
          <View style={styles.skillsContainer}>
            {user.skills.map((skill, index) => (
              <View key={index} style={styles.skillTag}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f4f8',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center', 
  },
  

  pfpContainer: {
    marginBottom: 16,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    
    elevation: 8,
  },
  pfp: {
    width: 140,
    height: 140,
    borderRadius: 70, 
    borderWidth: 3,
    borderColor: '#ffffff',
  },


  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  location: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },

  
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
  },


  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillTag: {
    backgroundColor: '#eef2ff', 
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  skillText: {
    color: '#4338ca', 
    fontSize: 13,
    fontWeight: '500',
  },

  
  button: {
    backgroundColor: '#007AFF', 
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProfileScreen;