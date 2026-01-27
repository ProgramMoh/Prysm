// Type definitions for Supabase database
// This file can be auto-generated using Supabase CLI: supabase gen types typescript --project-id <project-id>

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          clerk_id: string
          email: string
          name: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          clerk_id: string
          email: string
          name?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          clerk_id?: string
          email?: string
          name?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      products: {
        Row: {
          id: string
          sku: string
          name: string
          slug: string
          price: number
          tax_code: string | null
          inventory_count: number
          type: 'energy' | 'sleep' | 'bundle'
          description: string | null
          image_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          sku: string
          name: string
          slug: string
          price: number
          tax_code?: string | null
          inventory_count?: number
          type: 'energy' | 'sleep' | 'bundle'
          description?: string | null
          image_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          sku?: string
          name?: string
          slug?: string
          price?: number
          tax_code?: string | null
          inventory_count?: number
          type?: 'energy' | 'sleep' | 'bundle'
          description?: string | null
          image_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          user_id: string
          stripe_payment_id: string | null
          total_amount: number
          discount_amount: number
          tax_amount: number
          shipping_amount: number
          order_type: 'one-time' | 'subscription'
          status: 'pending' | 'completed' | 'failed' | 'cancelled'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          stripe_payment_id?: string | null
          total_amount: number
          discount_amount?: number
          tax_amount?: number
          shipping_amount?: number
          order_type: 'one-time' | 'subscription'
          status?: 'pending' | 'completed' | 'failed' | 'cancelled'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          stripe_payment_id?: string | null
          total_amount?: number
          discount_amount?: number
          tax_amount?: number
          shipping_amount?: number
          order_type?: 'one-time' | 'subscription'
          status?: 'pending' | 'completed' | 'failed' | 'cancelled'
          created_at?: string
          updated_at?: string
        }
      }
      order_items: {
        Row: {
          id: string
          order_id: string
          product_id: string
          quantity: number
          price: number
          created_at: string
        }
        Insert: {
          id?: string
          order_id: string
          product_id: string
          quantity: number
          price: number
          created_at?: string
        }
        Update: {
          id?: string
          order_id?: string
          product_id?: string
          quantity?: number
          price?: number
          created_at?: string
        }
      }
      subscriptions: {
        Row: {
          id: string
          user_id: string
          stripe_sub_id: string
          frequency_days: number
          next_billing_date: string
          is_first_order: boolean
          status: 'active' | 'paused' | 'cancelled'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          stripe_sub_id: string
          frequency_days: number
          next_billing_date: string
          is_first_order?: boolean
          status?: 'active' | 'paused' | 'cancelled'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          stripe_sub_id?: string
          frequency_days?: number
          next_billing_date?: string
          is_first_order?: boolean
          status?: 'active' | 'paused' | 'cancelled'
          created_at?: string
          updated_at?: string
        }
      }
      inventory_reservations: {
        Row: {
          id: string
          product_id: string
          quantity: number
          subscription_id: string | null
          order_id: string | null
          expires_at: string
          created_at: string
        }
        Insert: {
          id?: string
          product_id: string
          quantity: number
          subscription_id?: string | null
          order_id?: string | null
          expires_at: string
          created_at?: string
        }
        Update: {
          id?: string
          product_id?: string
          quantity?: number
          subscription_id?: string | null
          order_id?: string | null
          expires_at?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
