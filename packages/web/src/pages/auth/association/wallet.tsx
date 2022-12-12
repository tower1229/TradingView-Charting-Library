import { UButton } from '@wedex/components'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import CardContent from '@/components/OAuth/CardContent'
import { useCheckUserProfile, landingRoute } from '@/hooks'
import { ServiceReturn } from '@/services'
import { useUserStore, useWalletStore } from '@/stores'

export default defineComponent({
  name: 'WalletAssociation',
  setup() {
    const walletStore = useWalletStore()
    const userStore = useUserStore()
    const router = useRouter()
    const walletAssociating = async () => {
      walletStore
        .openBindModal()
        .then(async (data: ServiceReturn<'Authorization@login-by-wallet-address'>) => {
          if (data?.token) {
            userStore.refreshToken(data.token)
            await userStore.init(true)
          }
          useCheckUserProfile({
            handleloged: () => router.replace(landingRoute),
            flag: 'WalletAssociation'
          })
        })
    }

    const cancelAssociation = () => {
      router.push('/auth/register/simple')
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
              <UButton class="w-160px" onClick={cancelAssociation}>
                Cancel
              </UButton>
              <UButton type="primary" class="ml-10px w-160px" onClick={walletAssociating}>
                Connect Wallet
              </UButton>
            </div>
          )
        }}
      />
    )
  }
})
