// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

// 获取环境变量
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// 验证必要的环境变量
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    '缺少 Supabase 环境变量！请检查 .env.local 文件中的 NEXT_PUBLIC_SUPABASE_URL 和 NEXT_PUBLIC_SUPABASE_ANON_KEY'
  );
}

/**
 * 客户端 Supabase 实例
 * 用于客户端组件和浏览器环境
 * 受 Row Level Security (RLS) 策略限制
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

/**
 * 创建服务端 Supabase 客户端
 * 用于服务端组件、API 路由和 Server Actions
 * 可以使用 service role key 绕过 RLS（仅在必要时使用）
 */
export function createServerClient() {
  // 类型守卫：确保必要的环境变量存在
  if (!supabaseUrl) {
    throw new Error('缺少 NEXT_PUBLIC_SUPABASE_URL 环境变量！');
  }

  if (!supabaseServiceRoleKey) {
    console.warn(
      '警告: SUPABASE_SERVICE_ROLE_KEY 未设置，使用 anon key。某些服务端操作可能受限。'
    );
    // 类型守卫：确保 supabaseAnonKey 存在
    if (!supabaseAnonKey) {
      throw new Error(
        '缺少 NEXT_PUBLIC_SUPABASE_ANON_KEY 环境变量！'
      );
    }
    return createClient(supabaseUrl, supabaseAnonKey);
  }

  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

/**
 * 服务端 Supabase 客户端实例（高权限）
 * 仅在服务端使用，可以绕过 RLS
 * ⚠️ 注意：仅在确实需要绕过 RLS 时使用
 */
export const supabaseAdmin =
  supabaseUrl && supabaseServiceRoleKey
    ? createClient(supabaseUrl, supabaseServiceRoleKey, {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      })
    : null;