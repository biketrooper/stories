import { ref } from 'vue'

const users = ref([
  {
    id: '1',
    story: [
      'https://picsum.photos/seed/1/480/840',
      'https://picsum.photos/seed/2/480/840',
    ]
  },
  {
    id: '2',
    story: [
      'https://picsum.photos/seed/3/480/840',
    ]
  },
  {
    id: '3',
    story: [
      'https://picsum.photos/seed/4/480/840',
    ]
  },
  {
    id: '4',
    story: [
      'https://picsum.photos/seed/5/480/840',
      'https://picsum.photos/seed/6/480/840',
      'https://picsum.photos/seed/7/480/840',
    ]
  },
])

const scrollTo = ref(undefined)

const changeUser = (direction, currentId) => {
  const currentIndex = users.value.findIndex(user => user.id === currentId)
  const toUser = users.value[currentIndex + direction]?.id
  scrollTo.value = toUser
}

export { users, scrollTo, changeUser }