import { UButton } from '@wedex/components'
import { GithubFilled, GoogleFilled } from '@wedex/icons'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import CardContent from '@/components/OAuth/CardContent'
import useOAuth from '@/components/OAuth/Hooks/useOAuth'
import { useUserStore } from '@/stores'

export default defineComponent({
  name: 'AccountAssociation',
  setup() {
    const { push, go } = useRouter()
    const userStore = useUserStore()
    const { googleLogin, githubLogin } = useOAuth()
    const googleLoginButton = () => {
      googleLogin()
    }
    const githubLoginButton = () => {
      githubLogin()
    }
    const cancelAssociation = () => {
      if (userStore.profile?.is_seted) {
        go(-1)
        return
      }
      push('/auth/register/simple')
    }

    return () => (
      <CardContent
        title="Associating existing accounts"
        config={{ width: 524 }}
        v-slots={{
          content: () => (
            <p>
              If you already have data from another account at WEconomy, you can associate it with
              that account.
            </p>
          ),
          footer: () => (
            <div class="flex mt-10 justify-end">
              <UButton onClick={cancelAssociation} class="w-124px">
                Cancel
              </UButton>
              <UButton onClick={googleLoginButton} class="ml-14px w-124px">
                <GoogleFilled class="h-5 mr-3.5 text-primary w-5" />
                Link
              </UButton>
              <UButton onClick={githubLoginButton} class="ml-14px w-124px">
                <GithubFilled class="h-5 mr-3.5 text-primary w-5" />
                Link
              </UButton>
            </div>
          )
        }}
      />
    )
  }
})
