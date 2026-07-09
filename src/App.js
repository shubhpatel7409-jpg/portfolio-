import React from 'react';

export default function Portfolio() {
  return (
    <div style={{ backgroundColor: '#0f172a', color: '#fff', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Navigation */}
      <nav style={{ padding: '20px', textAlign: 'center', borderBottom: '1px solid #334155' }}>
        <h1 style={{ margin: 0, fontSize: '28px', color: '#06b6d4' }}>Mark</h1>
      </nav>

      {/* Hero Section */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '64px', marginBottom: '20px', fontWeight: 'bold' }}>
            I build engaging web experiences
          </h1>
          <p style={{ fontSize: '20px', color: '#cbd5e1', marginBottom: '40px' }}>
            Responsive websites, smooth interactions, and clean code.
          </p>
          <a href="#contact" style={{ 
            backgroundColor: '#06b6d4', 
            color: '#000', 
            padding: '15px 40px', 
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            display: 'inline-block'
          }}>
            Get In Touch
          </a>
        </div>
      </section>

      {/* Work Section */}
      <section style={{ padding: '60px 40px', backgroundColor: '#1e293b' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', marginBottom: '40px', textAlign: 'center' }}>Featured Work</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
            {/* Project 1 */}
            <div style={{ 
              padding: '30px', 
              backgroundColor: '#0f172a', 
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>WeChase Bank</h3>
              <p style={{ color: '#cbd5e1', marginBottom: '20px' }}>
                A modern fintech banking interface with loan & mortgage options. Built with smooth animations and responsive design.
              </p>
              <div style={{ marginBottom: '20px' }}>
                <span style={{ 
                  display: 'inline-block',
                  backgroundColor: '#1e40af',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  marginRight: '10px',
                  marginBottom: '10px',
                  fontSize: '14px'
                }}>HTML</span>
                <span style={{ 
                  display: 'inline-block',
                  backgroundColor: '#1e40af',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  marginRight: '10px',
                  marginBottom: '10px',
                  fontSize: '14px'
                }}>CSS</span>
                <span style={{ 
                  display: 'inline-block',
                  backgroundColor: '#1e40af',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  marginBottom: '10px',
                  fontSize: '14px'
                }}>JavaScript</span>
              </div>
              <a href="https://github.com/shubhpatel7409-jpg/WeChase-Bank-Website" target="_blank" rel="noopener noreferrer" style={{ color: '#06b6d4', textDecoration: 'none', fontWeight: 'bold' }}>
                View on GitHub →
              </a>
            </div>

            {/* Project 2 */}
            <div style={{ 
              padding: '30px', 
              backgroundColor: '#0f172a', 
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Interactive Birthday Experience</h3>
              <p style={{ color: '#cbd5e1', marginBottom: '20px' }}>
                A personalized scrollable experience with interactive game mechanics and hidden messages. Showcases smooth animations.
              </p>
              <div style={{ marginBottom: '20px' }}>
                <span style={{ 
                  display: 'inline-block',
                  backgroundColor: '#7c2d12',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  marginRight: '10px',
                  marginBottom: '10px',
                  fontSize: '14px'
                }}>HTML</span>
                <span style={{ 
                  display: 'inline-block',
                  backgroundColor: '#7c2d12',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  marginRight: '10px',
                  marginBottom: '10px',
                  fontSize: '14px'
                }}>CSS</span>
                <span style={{ 
                  display: 'inline-block',
                  backgroundColor: '#7c2d12',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  marginBottom: '10px',
                  fontSize: '14px'
                }}>JavaScript</span>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '14px' }}>Custom Project</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: '60px 40px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', marginBottom: '30px' }}>About Me</h2>
          <p style={{ fontSize: '18px', color: '#cbd5e1', marginBottom: '20px', lineHeight: '1.6' }}>
            I'm a web developer from Ahmedabad who builds responsive, engaging websites that users actually enjoy. I focus on clean design, smooth interactions, and code that works.
          </p>
          <p style={{ fontSize: '18px', color: '#cbd5e1', lineHeight: '1.6' }}>
            Whether it's a complex banking interface or an interactive experience—I deliver pixel-perfect results. I'm passionate about creating digital products that look great and perform even better.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '60px 40px', backgroundColor: '#1e293b', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', marginBottom: '20px' }}>Let's Work Together</h2>
          <p style={{ fontSize: '18px', color: '#cbd5e1', marginBottom: '40px' }}>
            Looking for a web developer? I'm available for freelance projects.
          </p>
          <a href="mailto:shubhpatel7409@gmail.com" style={{ 
            backgroundColor: '#06b6d4', 
            color: '#000', 
            padding: '15px 40px', 
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            display: 'inline-block',
            marginRight: '20px'
          }}>
            Email Me
          </a>
          <a href="https://github.com/shubhpatel7409-jpg" target="_blank" rel="noopener noreferrer" style={{ 
            border: '2px solid #06b6d4', 
            color: '#06b6d4', 
            padding: '13px 38px', 
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            display: 'inline-block'
          }}>
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '20px', textAlign: 'center', borderTop: '1px solid #334155', color: '#64748b' }}>
        <p>© 2024 Mark. All rights reserved.</p>
      </footer>
    </div>
  );
}