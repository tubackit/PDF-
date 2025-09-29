const fs = require('fs');
const path = require('path');

// Create a simple PNG icon programmatically
function createPNGIcon(size, filename) {
  // This is a simplified approach - in a real scenario you'd use a proper image library
  // For now, we'll create a simple colored square as a placeholder
  
  const canvas = `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${size}" height="${size}" rx="${size/8}" fill="#007bff"/>
      <rect x="${size/4}" y="${size/4}" width="${size/2}" height="${size/2}" rx="4" fill="white" stroke="#007bff" stroke-width="2"/>
      <text x="${size/2}" y="${size/2 + size/16}" font-family="Arial" font-size="${size/8}" text-anchor="middle" fill="#007bff">PDF</text>
    </svg>
  `;
  
  fs.writeFileSync(path.join(__dirname, 'assets', filename), canvas);
  console.log(`Created ${filename} (${size}x${size})`);
}

// Create different icon sizes
createPNGIcon(16, 'icon-16.png');
createPNGIcon(32, 'icon-32.png');
createPNGIcon(48, 'icon-48.png');
createPNGIcon(64, 'icon-64.png');
createPNGIcon(128, 'icon-128.png');
createPNGIcon(256, 'icon-256.png');
createPNGIcon(512, 'icon-512.png');

// Copy the 256px version as the main icon
fs.copyFileSync(
  path.join(__dirname, 'assets', 'icon-256.png'),
  path.join(__dirname, 'assets', 'icon.png')
);

console.log('Icons created successfully!');
