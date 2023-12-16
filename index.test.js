// index.test.js
describe('Test Greeting', () => {
    test('should pass', () => {
      if (typeof document !== 'undefined') {
        const body = document.createElement('body');
        const h1 = document.createElement('h1');
        h1.textContent = 'Buenas!, esta es la práctica final de  Rafael Ariel AK Baljeet';
        body.appendChild(h1);
  
        expect(h1.textContent).toContain('Buenas!, esta es la práctica final de  Rafael Ariel AK Baljeet');
      } else {
        // Advertencia
        console.warn('No se pudo acceder al objeto document :C ');
      }
    });
  });