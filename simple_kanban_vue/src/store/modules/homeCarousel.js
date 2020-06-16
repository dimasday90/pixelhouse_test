import image1 from '../../assets/images/kanban01.jpg'
import image2 from '../../assets/images/kanban02.jpg'

export default {
  namespaced: true,
  state: () => ({
    carouselObjects: [
      {
        title: 'Welcome to PXH Kanban Test',
        description: 'Your personal kanban training web to polish your workflow skills',
        image: image2
      },
      {
        title: 'Create, Update, dan Delete Your Own Tasks',
        description: 'Experience yourself to create tasks and its flow like professionals',
        image: image1
      }
    ]
  })
}
