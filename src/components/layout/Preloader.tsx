import { MARK_PATH } from "@/content/brandMark";
import { site } from "@/content/site";

// Чистый CSS, работает до загрузки JS: знак прорисовывается по контуру и заливается,
// кольцо-орбита оборачивается вокруг, затем проявляется вордмарк. Тонкая линия — без процентов.
export function Preloader() {
  return (
    <div className="preloader" aria-hidden="true">
      <div className="preloader-inner">
        <svg className="preloader-mark" viewBox="-60 0 1314 1020">
          <g transform="rotate(-14 597 560)">
            <ellipse className="pl-orbit" cx="597" cy="560" rx="640" ry="200" pathLength={1} />
          </g>
          <path className="pl-fill" fillRule="evenodd" d={MARK_PATH} />
          <path className="pl-draw" d={MARK_PATH} pathLength={1} />
        </svg>
        <span className="preloader-name">{site.brand}</span>
        <span className="preloader-desc">{site.descriptor}</span>
        <span className="preloader-line">
          <i />
        </span>
      </div>
    </div>
  );
}
