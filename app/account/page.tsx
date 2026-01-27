import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import type { Database } from '@/types/supabase'

type Subscription = Database['public']['Tables']['subscriptions']['Row']
type Order = Database['public']['Tables']['orders']['Row']

export default async function AccountPage() {
  const { userId } = await auth()
  
  if (!userId) {
    redirect('/sign-in')
  }

  // Get user's subscriptions and orders from Supabase
  const { data: dbUser } = await supabase
    .from('users')
    .select('id')
    .eq('clerk_id', userId)
    .single()

  let subscriptions: Subscription[] = []
  let orders: Order[] = []

  // Type assertion needed because Supabase type inference for select('id') returns 'never'
  type UserIdResult = { id: string } | null
  const userResult = dbUser as UserIdResult
  const dbUserId = userResult?.id
  
  if (dbUserId) {
    
    const { data: subs } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('user_id', dbUserId)
      .eq('status', 'active')
      .order('created_at', { ascending: false })

    const { data: userOrders } = await supabase
      .from('orders')
      .select('*')
      .eq('user_id', dbUserId)
      .order('created_at', { ascending: false })
      .limit(10)

    if (subs) subscriptions = subs
    if (userOrders) orders = userOrders
  }

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading tracking-luxury mb-12">
            Account
          </h1>

          <div className="space-y-8">
            <div className="border border-text-secondary/10 p-8">
              <h2 className="text-2xl font-heading tracking-luxury mb-4">My Subscriptions</h2>
              {subscriptions.length === 0 ? (
                <p className="text-text-secondary">No active subscriptions</p>
              ) : (
                <div className="space-y-4">
                  {subscriptions.map((sub) => (
                    <div key={sub.id} className="border border-text-secondary/10 p-4">
                      <p className="text-text-primary">Subscription #{sub.id.slice(0, 8)}</p>
                      <p className="text-text-secondary text-sm">
                        Frequency: Every {sub.frequency_days} days
                      </p>
                      <p className="text-text-secondary text-sm">
                        Next billing: {new Date(sub.next_billing_date).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="border border-text-secondary/10 p-8">
              <h2 className="text-2xl font-heading tracking-luxury mb-4">Order History</h2>
              {orders.length === 0 ? (
                <p className="text-text-secondary">No orders yet</p>
              ) : (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border border-text-secondary/10 p-4">
                      <p className="text-text-primary">Order #{order.id.slice(0, 8)}</p>
                      <p className="text-text-secondary text-sm">
                        Total: ${order.total_amount}
                      </p>
                      <p className="text-text-secondary text-sm">
                        Status: {order.status}
                      </p>
                      <p className="text-text-secondary text-sm">
                        Date: {new Date(order.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
