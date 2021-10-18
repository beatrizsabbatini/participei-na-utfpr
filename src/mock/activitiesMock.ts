import { RFValue } from "react-native-responsive-fontsize"

export const activities = [
  {
    id: '1',
    title: 'Natal Solidário 2018',
    group: 3,
    points: 30,
    category: 'Trabalho Voluntário',
    userName: 'Beatriz Schwartz',
    userRa: '7263214',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
  },
  {
    id: '2',
    title: 'Furiosos Cheerleaders',
    group: 2,
    points: 30,
    category: 'Atividades Esportivas',
    userName: 'Beatriz Schwartz',
    userRa: '7263214'
  },
  {
    id: '3',
    title: 'SECOMP',
    group: 3,
    points: 30,
    category: 'Atividades de extensão',
    userName: 'Beatriz Schwartz',
    userRa: '7263214'
  },
  {
    id: '4',
    title: 'Natal Solidário 2019',
    group: 1,
    points: 30,
    category: 'Trabalho Voluntário',
    userName: 'Beatriz Schwartz',
    userRa: '7263214'
  },
  {
    id: '5',
    title: 'SECOMP',
    group: 3,
    points: 30,
    category: 'Atividades de extensão',
    userName: 'Beatriz Schwartz',
    userRa: '7263214'
  },
  {
    id: '6',
    title: 'Natal Solidário 2019',
    group: 2,
    points: 30,
    category: 'Trabalho Voluntário',
    userName: 'Beatriz Schwartz',
    userRa: '7263214'
  },
  {
    id: '7',
    title: 'Natal Solidário 2019',
    group: 3,
    points: 30,
    category: 'Trabalho Voluntário',
    userName: 'Beatriz Schwartz',
    userRa: '7263214'
  },
  {
    id: '8',
    title: 'SECOMP',
    group: 3,
    points: 30,
    category: 'Atividades de extensão',
    userName: 'Beatriz Schwartz',
    userRa: '7263214'
  },
  {
    id: '9',
    title: 'Natal Solidário 2019',
    group: 3,
    points: 30,
    category: 'Trabalho Voluntário',
    userName: 'Beatriz Schwartz',
    userRa: '7263214'
  },
  {
    id: '10',
    title: 'Natal Solidário 2019',
    group: 3,
    points: 30,
    category: 'Trabalho Voluntário',
    userName: 'Beatriz Schwartz',
    userRa: '7263214'
  },
  {
    id: '11',
    title: 'SECOMP',
    group: 3,
    points: 30,
    category: 'Atividades de extensão',
    userName: 'Beatriz Schwartz',
    userRa: '7263214'
  },
  {
    id: '12',
    title: 'Natal Solidário 2019',
    group: 3,
    points: 30,
    category: 'Trabalho Voluntário',
    userName: 'Beatriz Schwartz',
    userRa: '7263214'
  }
]

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

export const totalPointsData = [
  {
    group1: 20,
    group2: 10,
    group3: 20,
    availablePoints: 50
  }
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

export const publishedActivitiesMock = [
  {
    id: '1',
    title: 'Natal Solidário 2018',
    group: 3,
    points: 30,
    category: 'Trabalho Voluntário',
    userName: 'Beatriz Schwartz',
    userRa: '7263214',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
  },
]

export const savedActivitiesMock = [
  {
    id: '2',
    title: 'Furiosos Cheerleaders 2018/01',
    group: 2,
    points: 30,
    category: 'Atividades Esportivas',
    userName: 'Beatriz Schwartz',
    userRa: '7263214',
    certificate: true
  },
  {
    id: '3',
    title: 'Furiosos Cheerleaders 2018/02',
    group: 2,
    points: 30,
    category: 'Atividades Esportivas',
    userName: 'Beatriz Schwartz',
    userRa: '7263214',
    certificate: false
  },
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