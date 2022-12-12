import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

const LandingPage = defineComponent({
  name: 'LandingPage',
  setup() {
    return {}
  },
  render() {
    return (
      <>
        <div>LandingPage</div>
        <RouterLink to="/builder">to builder</RouterLink>
      </>
    )
  }
})

export default LandingPage
