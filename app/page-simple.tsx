export default function HomePage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#ffffff',
      color: '#000000',
      fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: '48px', 
          fontWeight: 'bold', 
          marginBottom: '16px',
          color: '#000000'
        }}>
          ABC Advocates LLP
        </h1>
        <p style={{ 
          fontSize: '24px', 
          color: '#D4AF37',
          marginBottom: '32px'
        }}>
          Commissioners for Oath & Notaries Public
        </p>
        <p style={{ 
          fontSize: '18px', 
          color: '#666666',
          maxWidth: '600px'
        }}>
          Professional legal services in Nairobi, Kenya. We provide comprehensive 
          legal solutions with integrity and excellence.
        </p>
      </div>
    </div>
  )
}