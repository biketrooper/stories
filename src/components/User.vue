<template>
  <section class="user" ref="userElement">
    <transition name="fade">
      <img 
        :key="current" 
        :src="currentSrc" 
        alt="story" 
        @click="event => navigate(event.offsetX < event.target.clientWidth / 2 ? 'prev' : 'next')"
      />
    </transition>
  </section>
</template>

<script>
import { computed, ref, watchEffect } from "vue";
import { changeUser, scrollTo } from '../composable/users.js'

export default {
  props: {
    story: Array,
    userid: String,
  },
  setup(props, {emit}) {
    const userElement = ref(null)
    const current = ref(0);
    const currentSrc = computed(() => props.story[current.value]);

    watchEffect(() => {
      if(scrollTo.value === props.userid){
        userElement.value?.scrollIntoView({
          behavior: 'smooth'
        })
      }
    })

    const navigate = (direction) => {
      if(direction === 'prev'){
        if(current.value === 0){
          changeUser(-1, props.userid)
        }else{
          current.value--
        }
      }else if(direction === 'next'){
        if(current.value === props.story.length - 1){
          changeUser(+1, props.userid)
        }else{
          current.value++
        }
      }
    }

    
    document.addEventListener('keydown', ({key}) => {
      const scrollView = document.querySelector('.stories')
      const componentIsInView = scrollView.scrollLeft === userElement.value?.offsetLeft - scrollView.offsetLeft
      if (componentIsInView && (key === 'ArrowDown' || key === 'ArrowUp')){
        navigate(key === 'ArrowDown' ? 'next' : 'prev')
      }
    })

    return { current, currentSrc, navigate, userElement };
  },
};
</script>

<style scoped>
.user {
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: grid;
  grid: [story] 1fr / [story] 1fr;
  overflow: hidden;
}

img {
  grid-area: story;
  object-fit: cover;
  background-size: cover;
  background-image: linear-gradient(to top, rgb(249, 249, 249), rgb(226, 226, 226));
  user-select: none;
  touch-action: manipulation;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s cubic-bezier(0.4, 0.0, 1, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>