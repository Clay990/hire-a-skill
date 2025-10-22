import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';


interface PersonCardProps {
    name: string;
    description: string;
    imageUrl: string;
    skills: string[];
}
const PersonCard = ({ name, description, imageUrl, skills }: PersonCardProps) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardTop}>
                <View style={styles.pfpContainer}>
                    <Image
                        source={{ uri: imageUrl }}
                        style={styles.pfp}
                    />
                </View>

                <View style={styles.descriptionContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.description} numberOfLines={3}>
                        {description}
                    </Text>
                </View>
            </View>

            <View style={styles.skillsContainer}>
                {skills.map((skill, index) => (
                    <View key={index} style={styles.skillTag}>
                        <Text style={styles.skillText}>{skill}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

PersonCard.defaultProps = {
    name: 'Person Name',
    description: 'A short description of the person goes here. It can be a few lines long.',
    imageUrl: 'https://via.placeholder.com/60', 
    skills: ['Skill 1', 'Skill 2'],
};

export default PersonCard;