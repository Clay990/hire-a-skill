import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    margin: 16,
    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  
    elevation: 5,
  },

  cardTop: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 12,
  },
  
  
  pfpContainer: {
    width: '20%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  pfp: {
    width: 60,
    height: 60,
    borderRadius: 30, 
    backgroundColor: '#e0e0e0', 
  },

  
  descriptionContainer: {
    width: '80%',
    paddingLeft: 12,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },

  
  skillsContainer: {
    flexDirection: 'row', 
    flexWrap: 'wrap',  
    marginTop: 8,
  },
  skillTag: {
    backgroundColor: '#eef2ff', 
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginRight: 6,
    marginBottom: 6,
  },
  skillText: {
    color: '#4338ca', 
    fontSize: 12,
    fontWeight: '500',
  },
});