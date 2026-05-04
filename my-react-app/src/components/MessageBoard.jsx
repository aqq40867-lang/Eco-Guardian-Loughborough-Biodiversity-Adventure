import React, { useState } from 'react';

const MessageBoard = () => {
  // ---------------------------------------------------------
  // 1. 状态管理
  // ---------------------------------------------------------
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 模拟登录状态
  const [view, setView] = useState('PROMPT'); // 'PROMPT' | 'LOGIN' | 'BOARD'
  
  const [messages, setMessages] = useState([
    { user: "小绿", text: "今天在索尔河边捡了3个瓶子！🌳" },
    { user: "拉夫堡学长", text: "大家记得支持校园里的蜜蜂项目哦。🐝" }
  ]);
  
  const [formData, setFormData] = useState({ email: '', password: '' });

  // ---------------------------------------------------------
  // 2. 交互函数
  // ---------------------------------------------------------
  const handleLogin = (e) => {
    e.preventDefault();
    // 这里模拟登录逻辑：只要填了字就让进
    if(formData.email && formData.password) {
      setIsLoggedIn(true);
      setView('BOARD');
      alert("登录成功！欢迎回来，生态守护者。");
    }
  };

  const handlePost = (e) => {
    e.preventDefault();
    const text = e.target.msg.value;
    if(text) {
      setMessages([...messages, { user: "我", text }]);
      e.target.reset();
    }
  };

  // ---------------------------------------------------------
  // 3. 渲染视图切换
  // ---------------------------------------------------------

  // A. 注册诱导与提示视图
  if (view === 'PROMPT') {
    return (
      <section className="card-style" style={{ textAlign: 'center', padding: '60px', backgroundColor: '#f0fdf4' }}>
        <h2 style={{ color: '#0D4D4D', marginBottom: '20px' }}>💬 生态守护者社区</h2>
        <p style={{ fontSize: '1.2rem', color: '#0D4D4D', maxWidth: '600px', margin: '0 auto 30px' }}>
          注册成为会员，发表你的环保心得，并获取拉夫堡生态大冒险的最新资讯！
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <button className="btn-kid" style={{ backgroundColor: '#0D4D4D', color: '#DEFF9A' }}>
            立即注册
          </button>
          <button 
            className="btn-kid" 
            style={{ backgroundColor: '#DEFF9A', color: '#0D4D4D' }}
            onClick={() => setView('LOGIN')}
          >
            已有账号登录
          </button>
        </div>
      </section>
    );
  }

  // B. 登录表单视图
  if (view === 'LOGIN') {
    return (
      <section className="card-style" style={{ maxWidth: '500px', margin: '40px auto', padding: '40px' }}>
        <h3 style={{ textAlign: 'center', color: '#0D4D4D', marginBottom: '30px' }}>守护者登录</h3>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input 
            type="email" 
            placeholder="邮箱地址" 
            className="input-style"
            required
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <input 
            type="password" 
            placeholder="密码" 
            className="input-style"
            required
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          <button type="submit" className="btn-kid" style={{ width: '100%', backgroundColor: '#0D4D4D', color: '#DEFF9A' }}>
            登录我的账户
          </button>
          <button type="button" style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer' }} onClick={() => setView('PROMPT')}>
            返回
          </button>
        </form>
      </section>
    );
  }

  // C. 正式留言板视图 (登录后可见)
  return (
    <section className="card-style" style={{ padding: '40px' }}>
      <h3 style={{ color: '#0D4D4D', marginBottom: '30px' }}>生态动态</h3>
      <div style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '30px', background: 'white', padding: '20px', borderRadius: '15px' }}>
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: '15px', paddingBottom: '10px', borderBottom: '1px solid #eee' }}>
            <strong>{m.user}: </strong> {m.text}
          </div>
        ))}
      </div>
      <form onSubmit={handlePost} style={{ display: 'flex', gap: '10px' }}>
        <input name="msg" type="text" placeholder="分享你的绿色行动..." className="input-style" style={{ flexGrow: 1 }} />
        <button type="submit" className="btn-kid" style={{ backgroundColor: '#0D4D4D', color: '#DEFF9A' }}>发送</button>
      </form>
    </section>
  );
};

export default MessageBoard;