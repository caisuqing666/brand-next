/**
 * Supabase 使用示例
 * 这些是示例代码，展示如何在项目中使用 Supabase
 */

import { supabase, createServerClient } from './supabaseClient';

// ========== 客户端使用示例 ==========

/**
 * 示例 1: 从表中查询数据（客户端）
 */
export async function fetchDataExample() {
  const { data, error } = await supabase
    .from('your_table_name')
    .select('*')
    .limit(10);

  if (error) {
    console.error('查询错误:', error);
    return null;
  }

  return data;
}

/**
 * 示例 2: 插入数据（客户端）
 */
export async function insertDataExample(newData: any) {
  const { data, error } = await supabase
    .from('your_table_name')
    .insert([newData])
    .select();

  if (error) {
    console.error('插入错误:', error);
    return null;
  }

  return data;
}

/**
 * 示例 3: 更新数据（客户端）
 */
export async function updateDataExample(id: string, updates: any) {
  const { data, error } = await supabase
    .from('your_table_name')
    .update(updates)
    .eq('id', id)
    .select();

  if (error) {
    console.error('更新错误:', error);
    return null;
  }

  return data;
}

/**
 * 示例 4: 删除数据（客户端）
 */
export async function deleteDataExample(id: string) {
  const { data, error } = await supabase
    .from('your_table_name')
    .delete()
    .eq('id', id)
    .select();

  if (error) {
    console.error('删除错误:', error);
    return null;
  }

  return data;
}

/**
 * 示例 5: 实时订阅（客户端）
 */
export function subscribeToTableExample(
  tableName: string,
  callback: (payload: any) => void
) {
  const channel = supabase
    .channel(`${tableName}_changes`)
    .on(
      'postgres_changes',
      {
        event: '*', // 监听所有事件：INSERT, UPDATE, DELETE
        schema: 'public',
        table: tableName,
      },
      callback
    )
    .subscribe();

  // 返回取消订阅的函数
  return () => {
    supabase.removeChannel(channel);
  };
}

// ========== 服务端使用示例 ==========

/**
 * 示例 6: 服务端查询（可以绕过 RLS）
 */
export async function serverSideQueryExample() {
  const serverClient = createServerClient();

  const { data, error } = await serverClient
    .from('your_table_name')
    .select('*');

  if (error) {
    console.error('服务端查询错误:', error);
    return null;
  }

  return data;
}

/**
 * 示例 7: 用户认证（客户端）
 */
export async function signUpExample(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error('注册错误:', error);
    return null;
  }

  return data;
}

export async function signInExample(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error('登录错误:', error);
    return null;
  }

  return data;
}

export async function signOutExample() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error('登出错误:', error);
    return false;
  }

  return true;
}

/**
 * 示例 8: 获取当前用户（客户端）
 */
export async function getCurrentUserExample() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.error('获取用户错误:', error);
    return null;
  }

  return user;
}



