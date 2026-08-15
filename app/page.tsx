import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* 顶部固定 Header */}
      <header className="header">
        <Link href="#" className="logo">
          {/* <img
            src="https://placehold.co/200x60/4481b4/ffffff/png?text=YOUR+LOGO"
            alt=""
            width={257}
            height={55}
          /> */}
          To see the world
        </Link>
        <nav>
          <ul className="nav">
            <li><Link href="#om-oss">关于我们</Link></li>
            <li><Link href="#teknologi">技术</Link></li>
            <li><Link href="#prosjekter">项目</Link></li>
            <li><Link href="#kontakt">联系我们</Link></li>
          </ul>
        </nav>
        <button className="nav-toggle" aria-label="菜单">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </header>

      {/* Hero 视频背景区域（替代静态办公室图片） */}
      <section className="hero">
        <div className="hero-bg">
            <video
              autoPlay
              loop
              muted
              playsInline
              
            >
              
              <source
                src="https://www.pexels.com/zh-cn/download/video/27645263/"
                type="video/mp4"
              />
    </video>
          <div className="hero-overlay" aria-hidden="true"></div>
        </div>

        {/* 覆盖在视频之上的文字与按钮内容 */}
        <div className="hero-content">
          <p className="hero-label">自 2026 年 · 中国深圳</p>
          <h1 className="hero-title">个人灵感</h1>
          <p className="hero-subtitle">
            探索世界，发现更好的自己
          </p>
          <Link href="#prosjekter" className="btn btn-light">
            查看我们的项目
          </Link>
        </div>
      </section>

      {/* 关于我们 & 统计 */}
      <section className="section" id="om-oss">
        <div className="section-inner">
          <p className="section-label">关于 网站</p>
          <h2 className="section-title">行走与记录的旅行者</h2>
          <p className="section-text">
            
            凭着对世界的好奇，我踏过多个国家与城市，用文字与镜头捕捉珍贵的生活瞬间。在这里，记录足迹、品味美食，留存每一段独一无二的时光记忆。
          </p>
          <div className="stats">
            <div>
              <div className="stat-number">国家</div>
              <div className="stat-label">行走</div>
            </div>
            <div>
              <div className="stat-number">美食</div>
              <div className="stat-label">味蕾</div>
            </div>
            <div>
              <div className="stat-number">记录</div>
              <div className="stat-label">回忆</div>
            </div>
          </div>
        </div>
      </section>

      {/* 特性/技术介绍 */}
      <section className="section features" id="teknologi">
        <div className="section-inner">
          <div>
            <p className="section-label">探索</p>
            <h2 className="section-title">好奇每个不同的世界和人文</h2>
          </div>
          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-card-image">
                <img src="https://images.pexels.com/photos/29245668/pexels-photo-29245668.jpeg?auto=format&fit=crop&w=800&q=80" alt="挪威峡湾中的船只" />
              </div>
              <h3>行动</h3>
              <p>为自己的目标制定计划</p>
            </article>
            <article className="feature-card">
              <div className="feature-card-image">
                <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80" alt="现代化船舶引擎与舱室" />
              </div>
              <h3>尝试</h3>
              <p>不断尝试新的事物</p>
            </article>
            <article className="feature-card">
              <div className="feature-card-image">
                <img src="https://images.pexels.com/photos/32118622/pexels-photo-32118622.jpeg?auto=format&fit=crop&w=800&q=80" alt="开阔海域上的渡轮" />
              </div>
              <h3>记录</h3>
              <p>所看，所闻，所思，所想都一一记录</p>
            </article>
          </div>
        </div>
      </section>

      {/* 精选项目 */}
      <section className="section" id="prosjekter">
        <div className="section-inner split">
          <div className="split-image">
            <img src="https://images.pexels.com/photos/7138898/pexels-photo-7138898.jpeg?auto=format&fit=crop&w=1200&q=80" alt="挪威峡湾渡轮" />
          </div>
          <div className="split-content">
            <p className="section-label">所走过的路</p>
            <h2>To see the world</h2>
            <p>
              每一段旅程都是一次全新的对话。记录下那些不期而遇的风景、微风与阳光，把漫漫长路上的故事，写成属于自己的生活诗篇。
            </p>
            <Link href="#" className="btn btn-outline">了解更多</Link>
          </div>
        </div>
      </section>

      {/* 联系 CTA */}
      <section className="cta" id="kontakt">
        <h2>准备好探索新世界了吗</h2>
        <p>一起探索，发现更好的世界，更好的自己</p>
        <a href="mailto:post@braa.no" className="btn btn-light">联系我们</a>
      </section>

      {/* 页脚 */}
      <footer className="footer">
        <div className="footer-inner">
          <ul className="footer-links">
            <li><Link href="#">隐私政策</Link></li>
            <li><Link href="#">招聘</Link></li>
            <li><Link href="#">新闻</Link></li>
          </ul>
          <p className="footer-copy">Welcome see the world · 中国深圳</p>
        </div>
      </footer>
    </div>
  );
}
