<template>
  <div class="navigation-wrapper">
    <bottom-navigation-button
      v-for="(elem, i) in buttonsDataArr"
      :key="i"
      :image-source="elem.path"
      :name="elem.name"
      :active="elem.active"
      class="navbar-icon"
    />
  </div>
</template>
<script lang="ts">
import BottomNavigationButton from '@/app/modules/navigation/components/BottomNavigationButton.vue'
import { defineComponent } from 'vue'
import clock from '@/app/modules/navigation/assets/Clock.svg'
import comment from '@/app/modules/navigation/assets/Comment.svg'
import navigation from '@/app/modules/navigation/assets/Navigation.svg'
import user from '@/app/modules/navigation/assets/User.svg'

const buttonsDataArr = [
  {
    path: navigation,
    name: 'карта',
  },
  {
    path: comment,
    name: 'чаты',
  },
  {
    path: clock,
    name: 'мои встречи',
    active: true,
  },
  {
    path: user,
    name: 'профиль',
  },
]

export default defineComponent({
  name: 'BottomNavigation',
  components: { BottomNavigationButton },
  setup() {
    return {
      buttonsDataArr,
    }
  },
})
</script>
<style scoped>
.navigation-wrapper {
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 18px 10%;
  width: 80%;
  position: absolute;
  bottom: 0;
  border-radius: 40px 40px 30px 30px;
  background: var(--white, #fff);
  box-shadow: 0px 0px 13px 0px rgba(22, 22, 23, 0.26);
}
</style>
