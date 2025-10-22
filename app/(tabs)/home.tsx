import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Image, Text } from 'react-native';
import PersonCard from '../components/PersonCard';
import { styles as cardStyles } from '../components/styles';

const developer = {
  name: 'Alex Johnson',
  description: 'Senior React Native developer passionate about building smooth and performant mobile apps.',
  imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
  skills: ['React Native', 'JavaScript', 'TypeScript', 'Firebase', 'GraphQL'],
};

const designer = {
    name: 'Sarah Chen',
    description: 'UI/UX Designer focused on creating intuitive and beautiful user experiences.',
    imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    skills: ['Figma', 'UI Design', 'UX Research', 'Prototyping'],
  };

export default function home() {
  return (
    <SafeAreaView style={appStyles.safeArea}> 
      <View style={appStyles.headerContainer}>
        <Text style={appStyles.heading}>Hire a Skill</Text>
        <View style={appStyles.pfpContainer}>
        <Image
          style={appStyles.pfp}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />
        </View>
      </View>

      <TextInput
        style={appStyles.searchBar}
        placeholder="Search for skills or services..."
      />

      <View style={appStyles.line} />

      <View style={appStyles.cardListContainer}>
       
        <PersonCard
          name={developer.name}
          description={developer.description}
          imageUrl={developer.imageUrl}
          skills={developer.skills}
        />

        <PersonCard
          name={designer.name}
          description={designer.description}
          imageUrl={designer.imageUrl}
          skills={designer.skills}
        />
      </View>
    </SafeAreaView>
  );
}


const appStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f4f5',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    marginBottom: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  pfpContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  pfp: {
    width: '100%',
    height: '100%',
  },
  searchBar: {
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginHorizontal: 16,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  line: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 16,
    marginBottom: 15,
  },
  cardListContainer: {
    flex: 1,
    paddingTop: 10,
  },
});
