<template>
  <div class="stories">
    <User 
      v-for="user in users" 
      :story="user.story" 
      :userid="user.id"
      :key="user.id"
    />
  </div>
</template>

<script>
import User from "./User.vue";
import { users } from '../composable/users.js'

export default {
  setup(){
    return { users }
  },
  components: {
    User,
  },
};
</script>

<style scoped>
.stories {
  width: 100vw;
  height: 100vh;

  box-shadow: 0 5px 2.5px hsla(200, 95%, 3%, 0.037),
    0 12px 6.5px hsla(200, 95%, 3%, 0.053),
    0 22.5px 13px hsla(200, 95%, 3%, 0.065),
    0 40.2px 24px hsla(200, 95%, 3%, 0.077),
    0 75.2px 44px hsla(200, 95%, 3%, 0.093),
    0 180px 80px hsla(200, 95%, 3%, 0.13);
}

@media (hover: hover) {
  .stories {
    border-radius: 3ch 3ch 0 0;
  }

  .stories::-webkit-scrollbar
  {
    height: 8px;
  }

  .stories::-webkit-scrollbar-thumb
  {
    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
  }
}


@media (hover: hover) and (min-width: 480px) {
  .stories {
    max-width: 480px;
    max-height: 848px;
  }
}

@media (hover: hover) and (max-height: 880px) and (min-width: 720px) {
  .stories {
    max-width: 320px;
    max-height: 568px;
  }
}

.stories {
  display: grid;
  grid: 1fr / auto-flow 100%;
  gap: 1ch;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  overscroll-behavior: contain;
  touch-action: pan-x;
}
</style>