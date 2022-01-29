import { RFValue } from "react-native-responsive-fontsize"

export const groupsData = [
  {
    points: [
      {
        pointsAvailable: 10,
        pointsAchieved: 20,
      }
    ],
    colors: ['#2DB3F0', '#EFEFEF'],
    height: RFValue(160),
    minimalValue: 20
  },
  {
    points: [
      {
        pointsAvailable: 20,
        pointsAchieved: 10,
      }
    ],
    colors: ['#63E27F', '#EFEFEF'],
    height: RFValue(160),
    minimalValue: 20
  },
  {
    points: [
      {
        pointsAvailable: 20,
        pointsAchieved: 20,
      }
    ],
    colors: ['#FBCF7B', '#EFEFEF'],
    height: RFValue(203.5),
    minimalValue: 20
  },
]


export const notificationsMock = [
  {
    id: "1",
    message: "Nova atividade do Grupo 1 disponível",
    highlight: "Furiosos Cheerleaders 2022"
  },
  {
    id: "2",
    message: "Nova atividade do Grupo 1 disponível",
    highlight: "Furiosos Cheerleaders 2022"
  },
  {
    id: "3",
    message: "Nova atividade do Grupo 1 disponível",
    highlight: "Furiosos Cheerleaders 2022"
  },
  {
    id: "4",
    message: "Nova atividade do Grupo 1 disponível",
    highlight: "Furiosos Cheerleaders 2022"
  }
]


export const categories = [
  {
    id: '0',
    placeholder: true,
    label: '',
    value: '',
  },
  {
    id: '1',
    label: 'Atividade de extensão',
    value: '1',
    group: 3,
    points: 10
  },
  {
    id: '2',
    label: 'Atividade esportiva',
    value: '2',
    group: 1,
    points: 10
  }
]

export const mockCampuses = [
  {
    id: '0',
    placeholder: true,
    label: '',
    value: ''
  },
  {
    id: '1',
    label: 'Cornélio Procópio',
    value: '1'
  }
]