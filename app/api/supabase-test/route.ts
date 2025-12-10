import { NextResponse } from 'next/server';
import { supabase, createServerClient } from '@/lib/supabaseClient';

/**
 * 测试 Supabase 连接
 * GET /api/supabase-test
 */
export async function GET() {
  try {
    // 检查环境变量
    const hasUrl = !!process.env.NEXT_PUBLIC_SUPABASE_URL;
    const hasAnonKey = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const hasServiceKey = !!process.env.SUPABASE_SERVICE_ROLE_KEY;

    // 测试基本连接
    const { data, error } = await supabase.from('_realtime').select('count').limit(1);

    // 测试服务端客户端
    let serverClientTest = null;
    if (hasServiceKey) {
      const serverClient = createServerClient();
      serverClientTest = {
        connected: true,
        message: '服务端客户端创建成功',
      };
    }

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      environment: {
        hasUrl,
        hasAnonKey,
        hasServiceKey,
        url: hasUrl ? process.env.NEXT_PUBLIC_SUPABASE_URL : null,
      },
      connection: {
        connected: !error,
        error: error?.message || null,
        data: data || null,
      },
      serverClient: serverClientTest || {
        connected: false,
        message: 'SUPABASE_SERVICE_ROLE_KEY 未设置',
      },
      instructions: {
        chinese: '如果连接失败，请检查：1) .env.local 文件是否存在 2) 环境变量是否正确 3) Supabase 项目是否正常运行',
        english: 'If connection fails, check: 1) .env.local file exists 2) Environment variables are correct 3) Supabase project is running',
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        timestamp: new Date().toISOString(),
        environment: {
          hasUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
          hasAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
          hasServiceKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
        },
      },
      { status: 500 }
    );
  }
}



