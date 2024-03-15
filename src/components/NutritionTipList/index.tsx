import {
  Text,
  FlatList,
  View,
  ImageBackground,
  type ImageSourcePropType,
  Dimensions
} from 'react-native'
import React from 'react'
import {
  ChallengeCard,
  ChallengeDesc,
  ChallengeDescIcon,
  ChallengeDescTitle,
  ChallengeMoreButton,
  ChallengeTitle
} from './styles'

import sugarweek from '../../../assets/images/sugarweek.png'
import cleanprotein from '../../../assets/images/cleanprotein.png'
import fullhidration from '../../../assets/images/fullhidration.png'

import durationIcon from '../../../assets/icons/time-w.png'
import difficultyIcon from '../../../assets/icons/calories-w.png'

const { width } = Dimensions.get('window')

interface Challenge {
  title: string
  duration: number
  difficulty: string
  background: ImageSourcePropType
}

const Challenges: Challenge[] = [
  {
    title: 'Sugar Week',
    duration: 7,
    difficulty: 'Easy',
    background: sugarweek
  },
  {
    title: 'Clean Protein Day',
    duration: 30,
    difficulty: 'Medium',
    background: cleanprotein
  },
  {
    title: 'Full Hidration',
    duration: 7,
    difficulty: 'Hard',
    background: fullhidration
  }
]

const NutritionTipList = () => {
  const renderList = ({ item }: { item: Challenge }) => {
    return (
      <ChallengeCard width={width * 0.8}>
        <ImageBackground
          source={item.background}
          resizeMode="cover"
          style={{ flex: 1, overflow: 'hidden', borderRadius: 20 }}
        >
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              height: '100%',
              paddingLeft: 20
            }}
          >
            <ChallengeTitle>{item.title}</ChallengeTitle>
            <ChallengeDesc>
              <ChallengeDescIcon source={durationIcon}/>
              <ChallengeDescTitle>{item.duration} days</ChallengeDescTitle>
            </ChallengeDesc>
            <ChallengeDesc>
              <ChallengeDescIcon source={difficultyIcon}/>
              <ChallengeDescTitle>{item.difficulty}</ChallengeDescTitle>
              </ChallengeDesc>
            <ChallengeMoreButton>
              <Text style={{ color: '#000', fontWeight: '500', fontSize: 16 }}>
                More {'>'}
              </Text>
            </ChallengeMoreButton>
          </View>
        </ImageBackground>
      </ChallengeCard>
    )
  }

  return (
    <View style={{ marginTop: 40 }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingBottom: 10
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#000' }}>
          Challenges
        </Text>
        <Text style={{ fontWeight: '500', fontSize: 18, color: '#777777' }}>
          See more
        </Text>
      </View>
      <FlatList
        data={Challenges}
        showsHorizontalScrollIndicator={false}
        snapToOffsets={Challenges.map(
          (_, i) => i * (width * 0.8 - 40) + (i - 1) * 40
        )}
        snapToAlignment="start"
        scrollEventThrottle={16}
        decelerationRate="fast"
        renderItem={renderList}
        horizontal
      />
    </View>
  )
}

export default NutritionTipList
