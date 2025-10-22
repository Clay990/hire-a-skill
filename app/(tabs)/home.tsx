import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import PersonCard from '../components/PersonCard';

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
      <View style={appStyles.container}>
       
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
  container: {
    flex: 1,
    paddingTop: 20,
  },
});