import { defineComponent } from 'vue'
import { RouterView, useRoute } from 'vue-router'

const DefaultLayout = defineComponent({
  name: 'DefaultLayout',
  setup() {
    const route = useRoute()

    return () => (
      <div class="flex h-full min-h-screen text-[14px] relative">
          {/* Body */}
          <RouterView key={route.fullPath} class="flex-1 u-page-container relative" />
      </div>
    )
  }
})

export default DefaultLayout
