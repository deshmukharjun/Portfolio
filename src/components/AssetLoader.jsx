import { useState, useEffect } from 'react';

const AssetLoader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // List of all assets to preload
  const assets = [
    // 3D Models
    '/models/unsolved.glb',
    '/models/solved.glb',
    '/models/macbook-pro.glb',
    '/models/iphone-11.glb',
    '/models/animations/developer.glb',
    
    // Animation Files
    '/models/animations/idle.fbx',
    '/models/animations/salute.fbx',
    '/models/animations/clapping.fbx',
    '/models/animations/victory.fbx',
    
    // Project Videos
    '/textures/project/project1.webm',
    '/textures/project/project2.webm',
    '/textures/project/project3.webm',
    '/textures/project/project4.webm',
    '/textures/project/project5.webm',
    '/textures/project/manache_demo.webm',
    '/textures/project/ttt_demo.webm',
    '/textures/project/swipeflix_demo.webm',
    '/textures/project/guesstheflag_demo.webm',
    '/textures/project/bookmyturf_demo.webm',
    
    // Project Logos & Images
    '/assets/project-logo1.png',
    '/assets/project-logo3.png',
    '/assets/tictactwo.png',
    '/assets/guesstheflag.jpg',
    '/assets/grid11.png',
    '/assets/grid3.png',
    '/assets/grid4.png',
    
    // Technology Icons
    '/assets/react.svg',
    '/assets/threejs.svg',
    '/assets/drei.svg',
    '/assets/tailwind.svg',
    '/assets/android.svg',
    '/assets/java.svg',
    '/assets/kotlin.svg',
    '/assets/firebase.svg',
    '/assets/tmdb.svg',
    '/assets/html.svg',
    '/assets/css.svg',
    '/assets/gsap.svg',
    '/assets/git.svg',
    
    // Company & Project Brand Icons
    '/assets/valorant.svg',
    '/assets/fricklogo.svg',
    '/assets/hojlogo.svg',
    '/assets/manache.svg',
    '/assets/swipeflix.svg',
    '/assets/bmt.svg',
    '/assets/googlemaps.svg',
    
    // Social Media Icons
    '/assets/instagram.svg',
    '/assets/gmail.svg',
    '/assets/github.svg',
    '/assets/linkedin.svg',
    '/assets/whatsapp.svg',
    
    // UI Elements
    '/assets/arrow-up.png',
    '/assets/left-arrow.png',
    '/assets/right-arrow.png',
    '/assets/menu.svg',
    '/assets/close.svg',
    '/assets/copy.svg',
    '/assets/tick.svg',
    '/assets/work.svg',
    '/assets/school.svg',
  ];

  useEffect(() => {
    let loadedCount = 0;
    const totalAssets = assets.length;

    const loadAsset = (url) => {
      return new Promise((resolve) => {
        if (url.endsWith('.glb') || url.endsWith('.fbx')) {
          // For 3D models, simulate faster loading
          setTimeout(() => {
            loadedCount++;
            setProgress(Math.floor((loadedCount / totalAssets) * 100));
            resolve();
          }, Math.random() * 30 + 10); // Much faster
        } else if (url.endsWith('.webm') || url.endsWith('.mp4')) {
          // For videos, create a video element to preload
          const video = document.createElement('video');
          video.onloadeddata = () => {
            loadedCount++;
            setProgress(Math.floor((loadedCount / totalAssets) * 100));
            resolve();
          };
          video.onerror = () => {
            loadedCount++;
            setProgress(Math.floor((loadedCount / totalAssets) * 100));
            resolve();
          };
          video.src = url;
          video.load();
        } else {
          // For images and other assets
          const img = new Image();
          img.onload = () => {
            loadedCount++;
            setProgress(Math.floor((loadedCount / totalAssets) * 100));
            resolve();
          };
          img.onerror = () => {
            loadedCount++;
            setProgress(Math.floor((loadedCount / totalAssets) * 100));
            resolve();
          };
          img.src = url;
        }
      });
    };

    const loadAllAssets = async () => {
      try {
        // Load assets in larger batches for faster loading
        const batchSize = 10; // Increased from 5
        for (let i = 0; i < assets.length; i += batchSize) {
          const batch = assets.slice(i, i + batchSize);
          await Promise.all(batch.map(loadAsset));
          
          // Reduced delay between batches
          await new Promise(resolve => setTimeout(resolve, 20)); // Reduced from 100ms
        }
        
        // Shorter delay before completing
        setTimeout(() => {
          setIsLoading(false);
          onLoadingComplete();
        }, 200); // Reduced from 500ms
      } catch (error) {
        console.error('Error loading assets:', error);
        setTimeout(() => {
          setIsLoading(false);
          onLoadingComplete();
        }, 200);
      }
    };

    loadAllAssets();
  }, [onLoadingComplete]);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-white text-6xl font-mono font-bold tracking-wider">
        {progress.toString().padStart(3, '0')}
      </div>
    </div>
  );
};

export default AssetLoader; 