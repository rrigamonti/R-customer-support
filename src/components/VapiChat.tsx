import React, { useEffect } from 'react';

declare global {
  interface Window {
    vapiSDK: any;
  }
}

export function VapiChat() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
    script.defer = true;
    script.async = true;
    
    script.onload = () => {
      window.vapiSDK?.run({
        apiKey: "1373bdaf-8925-4c1f-a049-8c14a08ad5db",
        assistant: "91afb8cd-3d9a-418e-9fb4-209d6a38eb58",
        config: {
          position: 'left',
          offset: {
            left: '20px',
            bottom: '50%'
          },
          styles: {
            button: {
              position: 'fixed',
              transform: 'translateY(50%)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#2563eb', // blue-600
              color: 'white',
              padding: '12px 20px',
              borderRadius: '9999px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: '#1d4ed8', // blue-700
                transform: 'translateY(50%) scale(1.05)'
              }
            },
            buttonIcon: {
              width: '24px',
              height: '24px'
            },
            buttonText: {
              display: 'block',
              whiteSpace: 'nowrap',
              fontSize: '14px',
              fontWeight: '600'
            }
          },
          buttonContent: '<div style="display: flex; align-items: center; gap: 8px;"><span>Click for Help</span></div>'
        }
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}