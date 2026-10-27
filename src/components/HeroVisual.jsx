
import "./HeroVisual.css";

function KitMascot() {
  return (
    <svg
      className="kit-mascot"
      viewBox="0 0 360 390"
      role="img"
      aria-labelledby="kit-title kit-description"
    >
      <title id="kit-title">Kit, the AIIDL fox mascot</title>
      <desc id="kit-description">
        A friendly orange fox wearing a dark futuristic hoodie.
      </desc>
      <defs>
        <linearGradient id="kit-fur" x1="70" y1="60" x2="280" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFB16B" />
          <stop offset=".5" stopColor="#FF773E" />
          <stop offset="1" stopColor="#D94735" />
        </linearGradient>
        <linearGradient id="kit-ear" x1="100" y1="50" x2="145" y2="150" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFB16B" />
          <stop offset="1" stopColor="#FF654D" />
        </linearGradient>
        <linearGradient id="kit-hoodie" x1="95" y1="220" x2="270" y2="380" gradientUnits="userSpaceOnUse">
          <stop stopColor="#292D48" />
          <stop offset="1" stopColor="#10121F" />
        </linearGradient>
        <linearGradient id="kit-face" x1="120" y1="125" x2="240" y2="245" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF1D8" />
          <stop offset="1" stopColor="#F7D9BD" />
        </linearGradient>
        <filter id="kit-shadow" x="20" y="15" width="320" height="380" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>

      <ellipse cx="180" cy="357" rx="104" ry="17" fill="#02040D" opacity=".55" filter="url(#kit-shadow)" />

      <path d="M111 137 84 35 158 91Z" fill="url(#kit-ear)" stroke="#B94237" strokeWidth="3" strokeLinejoin="round" />
      <path d="M249 137 276 35 202 91Z" fill="url(#kit-ear)" stroke="#B94237" strokeWidth="3" strokeLinejoin="round" />
      <path d="M111 105 100 57 139 96Z" fill="#8F3450" />
      <path d="M249 105 260 57 221 96Z" fill="#8F3450" />

      <path d="M78 163C78 116 118 83 180 83S282 116 282 163L273 220C267 260 228 283 180 283S93 260 87 220Z" fill="url(#kit-fur)" stroke="#9C3B36" strokeWidth="3" />

      <path d="M104 180C120 157 148 154 170 171L180 194 190 171C212 154 240 157 256 180L243 213C227 239 202 250 180 250S133 239 117 213Z" fill="url(#kit-face)" />

      <path d="M111 155C130 138 148 142 164 155" fill="none" stroke="#7B302F" strokeWidth="5" strokeLinecap="round" />
      <path d="M196 155C212 142 230 138 249 155" fill="none" stroke="#7B302F" strokeWidth="5" strokeLinecap="round" />

      <ellipse cx="141" cy="175" rx="9" ry="13" fill="#17192B" />
      <ellipse cx="219" cy="175" rx="9" ry="13" fill="#17192B" />
      <circle cx="144" cy="170" r="3" fill="#FFFFFF" />
      <circle cx="222" cy="170" r="3" fill="#FFFFFF" />

      <path d="M168 197Q180 189 192 197L180 207Z" fill="#352136" />
      <path d="M180 207V215" stroke="#7C3B42" strokeWidth="3" strokeLinecap="round" />
      <path d="M180 215Q169 228 158 217M180 215Q191 228 202 217" fill="none" stroke="#7C3B42" strokeWidth="3" strokeLinecap="round" />

      <path d="M96 247C112 229 137 226 159 237L180 253 201 237C223 226 248 229 264 247L292 328C264 351 225 365 180 365S96 351 68 328Z" fill="url(#kit-hoodie)" stroke="#383C5A" strokeWidth="3" />

      <path d="M115 250C127 228 149 221 180 221S233 228 245 250L225 282 180 309 135 282Z" fill="#1B1D30" stroke="#4A4F70" strokeWidth="3" />
      <path d="M135 260Q180 292 225 260" fill="none" stroke="#646A91" strokeWidth="3" />
      <path d="M157 283 151 316M203 283 209 316" stroke="#A4A9D0" strokeWidth="3" strokeLinecap="round" />
      <circle cx="151" cy="319" r="4" fill="#54D8FF" />
      <circle cx="209" cy="319" r="4" fill="#FF38C7" />

      <rect x="151" y="327" width="58" height="23" rx="8" fill="#15172A" stroke="#6E75A0" strokeWidth="2" />
      <path d="M164 339H196" stroke="#54D8FF" strokeWidth="3" strokeLinecap="round" />
      <path d="M180 333V345" stroke="#FF38C7" strokeWidth="3" strokeLinecap="round" />

      <path d="M72 300 54 318 69 333 92 324" fill="#FF8A4B" stroke="#9C3B36" strokeWidth="3" strokeLinejoin="round" />
      <path d="M288 300 306 318 291 333 268 324" fill="#FF8A4B" stroke="#9C3B36" strokeWidth="3" strokeLinejoin="round" />

      <path d="M91 351Q180 373 269 351" fill="none" stroke="#54D8FF" strokeWidth="2" opacity=".7" />
    </svg>
  );
}

export default function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Kit, surrounded by a glowing digital orbit">
      <div className="hero-visual-glow" aria-hidden="true" />

      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-three" aria-hidden="true" />

      <svg className="hero-orbit-svg" viewBox="0 0 560 560" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="orbit-blue" x1="50" y1="280" x2="510" y2="280" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3E7BFF" stopOpacity="0" />
            <stop offset=".3" stopColor="#54D8FF" />
            <stop offset=".72" stopColor="#3E7BFF" />
            <stop offset="1" stopColor="#8B5CF6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="orbit-pink" x1="70" y1="200" x2="490" y2="380" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF38C7" stopOpacity="0" />
            <stop offset=".45" stopColor="#FF79DC" />
            <stop offset="1" stopColor="#8B5CF6" stopOpacity="0" />
          </linearGradient>
          <filter id="orbit-glow">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <ellipse
          className="orbit-line orbit-line-blue"
          cx="280"
          cy="280"
          rx="226"
          ry="102"
          stroke="url(#orbit-blue)"
          strokeWidth="3"
          transform="rotate(-31 280 280)"
          filter="url(#orbit-glow)"
        />
        <ellipse
          className="orbit-line orbit-line-pink"
          cx="280"
          cy="280"
          rx="228"
          ry="86"
          stroke="url(#orbit-pink)"
          strokeWidth="2"
          transform="rotate(35 280 280)"
        />
        <path
          className="orbit-wave"
          d="M35 312C113 210 144 405 230 310S356 153 420 254 485 349 525 230"
          stroke="url(#orbit-blue)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#orbit-glow)"
        />
        <path
          className="orbit-wave orbit-wave-secondary"
          d="M40 220C118 315 162 150 242 243S363 393 434 286 486 197 520 309"
          stroke="url(#orbit-pink)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <circle className="orbit-particle particle-one" cx="91" cy="184" r="5" fill="#54D8FF" />
        <circle className="orbit-particle particle-two" cx="464" cy="173" r="4" fill="#FF79DC" />
        <circle className="orbit-particle particle-three" cx="440" cy="389" r="5" fill="#8B5CF6" />
        <circle className="orbit-particle particle-four" cx="110" cy="385" r="3" fill="#54D8FF" />
      </svg>

      <div className="hero-float-card hero-float-card-top" aria-hidden="true">
        <span className="float-card-icon">✳</span>
        <span><b>IDEA</b><small>Taking shape</small></span>
        <i />
      </div>

      <div className="hero-float-card hero-float-card-bottom" aria-hidden="true">
        <span className="float-status-dot" />
        <span><b>BUILD MODE</b><small>Curiosity → creation</small></span>
      </div>

      <div className="hero-mascot-stage">
        <div className="mascot-backlight" aria-hidden="true" />
        <KitMascot />
      </div>

      <span className="hero-visual-label hero-label-left" aria-hidden="true">MAKE IT REAL <span>↗</span></span>
      <span className="hero-visual-label hero-label-right" aria-hidden="true">BUILT FOR PEOPLE</span>
    </div>
  );
}
