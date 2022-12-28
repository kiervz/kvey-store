import{r as T,a as b,F as V,j as o,m as _,i as R}from"./index.3102e1d9.js";import{a as $}from"./AxiosClient.68724109.js";import{B as q}from"./Blocks.ff6a85d0.js";import{c as F,t as H}from"./DisplayHelper.ddeb9bf2.js";import{n as P}from"./MessageHelper.7e933050.js";import{$ as E,c as X,b as W,i as G,d as M,S as A,a as O}from"./swiper.min.bcc2e93c.js";import{u as U}from"./useDispatch.e71c72ce.js";function B({swiper:e,extendParams:S,on:c,emit:x}){S({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null};function N(a){let l;return a&&(l=E(a),e.params.uniqueNavElements&&typeof a=="string"&&l.length>1&&e.$el.find(a).length===1&&(l=e.$el.find(a))),l}function k(a,l){const t=e.params.navigation;a&&a.length>0&&(a[l?"addClass":"removeClass"](t.disabledClass),a[0]&&a[0].tagName==="BUTTON"&&(a[0].disabled=l),e.params.watchOverflow&&e.enabled&&a[e.isLocked?"addClass":"removeClass"](t.lockClass))}function p(){if(e.params.loop)return;const{$nextEl:a,$prevEl:l}=e.navigation;k(l,e.isBeginning&&!e.params.rewind),k(a,e.isEnd&&!e.params.rewind)}function g(a){a.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),x("navigationPrev"))}function n(a){a.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),x("navigationNext"))}function s(){const a=e.params.navigation;if(e.params.navigation=X(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(a.nextEl||a.prevEl))return;const l=N(a.nextEl),t=N(a.prevEl);l&&l.length>0&&l.on("click",n),t&&t.length>0&&t.on("click",g),Object.assign(e.navigation,{$nextEl:l,nextEl:l&&l[0],$prevEl:t,prevEl:t&&t[0]}),e.enabled||(l&&l.addClass(a.lockClass),t&&t.addClass(a.lockClass))}function m(){const{$nextEl:a,$prevEl:l}=e.navigation;a&&a.length&&(a.off("click",n),a.removeClass(e.params.navigation.disabledClass)),l&&l.length&&(l.off("click",g),l.removeClass(e.params.navigation.disabledClass))}c("init",()=>{e.params.navigation.enabled===!1?f():(s(),p())}),c("toEdge fromEdge lock unlock",()=>{p()}),c("destroy",()=>{m()}),c("enable disable",()=>{const{$nextEl:a,$prevEl:l}=e.navigation;a&&a[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),l&&l[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)}),c("click",(a,l)=>{const{$nextEl:t,$prevEl:i}=e.navigation,d=l.target;if(e.params.navigation.hideOnClick&&!E(d).is(i)&&!E(d).is(t)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===d||e.pagination.el.contains(d)))return;let u;t?u=t.hasClass(e.params.navigation.hiddenClass):i&&(u=i.hasClass(e.params.navigation.hiddenClass)),x(u===!0?"navigationShow":"navigationHide"),t&&t.toggleClass(e.params.navigation.hiddenClass),i&&i.toggleClass(e.params.navigation.hiddenClass)}});const r=()=>{e.$el.removeClass(e.params.navigation.navigationDisabledClass),s(),p()},f=()=>{e.$el.addClass(e.params.navigation.navigationDisabledClass),m()};Object.assign(e.navigation,{enable:r,disable:f,update:p,init:s,destroy:m})}function Y({swiper:e,extendParams:S,on:c,emit:x}){S({lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}}),e.lazy={};let N=!1,k=!1;function p(s,m=!0){const r=e.params.lazy;if(typeof s>"u"||e.slides.length===0)return;const a=e.virtual&&e.params.virtual.enabled?e.$wrapperEl.children(`.${e.params.slideClass}[data-swiper-slide-index="${s}"]`):e.slides.eq(s),l=a.find(`.${r.elementClass}:not(.${r.loadedClass}):not(.${r.loadingClass})`);a.hasClass(r.elementClass)&&!a.hasClass(r.loadedClass)&&!a.hasClass(r.loadingClass)&&l.push(a[0]),l.length!==0&&l.each(t=>{const i=E(t);i.addClass(r.loadingClass);const d=i.attr("data-background"),u=i.attr("data-src"),h=i.attr("data-srcset"),C=i.attr("data-sizes"),z=i.parent("picture");e.loadImage(i[0],u||d,h,C,!1,()=>{if(!(typeof e>"u"||e===null||!e||e&&!e.params||e.destroyed)){if(d?(i.css("background-image",`url("${d}")`),i.removeAttr("data-background")):(h&&(i.attr("srcset",h),i.removeAttr("data-srcset")),C&&(i.attr("sizes",C),i.removeAttr("data-sizes")),z.length&&z.children("source").each(v=>{const y=E(v);y.attr("data-srcset")&&(y.attr("srcset",y.attr("data-srcset")),y.removeAttr("data-srcset"))}),u&&(i.attr("src",u),i.removeAttr("data-src"))),i.addClass(r.loadedClass).removeClass(r.loadingClass),a.find(`.${r.preloaderClass}`).remove(),e.params.loop&&m){const v=a.attr("data-swiper-slide-index");if(a.hasClass(e.params.slideDuplicateClass)){const y=e.$wrapperEl.children(`[data-swiper-slide-index="${v}"]:not(.${e.params.slideDuplicateClass})`);p(y.index(),!1)}else{const y=e.$wrapperEl.children(`.${e.params.slideDuplicateClass}[data-swiper-slide-index="${v}"]`);p(y.index(),!1)}}x("lazyImageReady",a[0],i[0]),e.params.autoHeight&&e.updateAutoHeight()}}),x("lazyImageLoad",a[0],i[0])})}function g(){const{$wrapperEl:s,params:m,slides:r,activeIndex:f}=e,a=e.virtual&&m.virtual.enabled,l=m.lazy;let t=m.slidesPerView;t==="auto"&&(t=0);function i(u){if(a){if(s.children(`.${m.slideClass}[data-swiper-slide-index="${u}"]`).length)return!0}else if(r[u])return!0;return!1}function d(u){return a?E(u).attr("data-swiper-slide-index"):E(u).index()}if(k||(k=!0),e.params.watchSlidesProgress)s.children(`.${m.slideVisibleClass}`).each(u=>{const h=a?E(u).attr("data-swiper-slide-index"):E(u).index();p(h)});else if(t>1)for(let u=f;u<f+t;u+=1)i(u)&&p(u);else p(f);if(l.loadPrevNext)if(t>1||l.loadPrevNextAmount&&l.loadPrevNextAmount>1){const u=l.loadPrevNextAmount,h=Math.ceil(t),C=Math.min(f+h+Math.max(u,h),r.length),z=Math.max(f-Math.max(h,u),0);for(let v=f+h;v<C;v+=1)i(v)&&p(v);for(let v=z;v<f;v+=1)i(v)&&p(v)}else{const u=s.children(`.${m.slideNextClass}`);u.length>0&&p(d(u));const h=s.children(`.${m.slidePrevClass}`);h.length>0&&p(d(h))}}function n(){const s=W();if(!e||e.destroyed)return;const m=e.params.lazy.scrollingElement?E(e.params.lazy.scrollingElement):E(s),r=m[0]===s,f=r?s.innerWidth:m[0].offsetWidth,a=r?s.innerHeight:m[0].offsetHeight,l=e.$el.offset(),{rtlTranslate:t}=e;let i=!1;t&&(l.left-=e.$el[0].scrollLeft);const d=[[l.left,l.top],[l.left+e.width,l.top],[l.left,l.top+e.height],[l.left+e.width,l.top+e.height]];for(let h=0;h<d.length;h+=1){const C=d[h];if(C[0]>=0&&C[0]<=f&&C[1]>=0&&C[1]<=a){if(C[0]===0&&C[1]===0)continue;i=!0}}const u=e.touchEvents.start==="touchstart"&&e.support.passiveListener&&e.params.passiveListeners?{passive:!0,capture:!1}:!1;i?(g(),m.off("scroll",n,u)):N||(N=!0,m.on("scroll",n,u))}c("beforeInit",()=>{e.params.lazy.enabled&&e.params.preloadImages&&(e.params.preloadImages=!1)}),c("init",()=>{e.params.lazy.enabled&&(e.params.lazy.checkInView?n():g())}),c("scroll",()=>{e.params.freeMode&&e.params.freeMode.enabled&&!e.params.freeMode.sticky&&g()}),c("scrollbarDragMove resize _freeModeNoMomentumRelease",()=>{e.params.lazy.enabled&&(e.params.lazy.checkInView?n():g())}),c("transitionStart",()=>{e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!k)&&(e.params.lazy.checkInView?n():g())}),c("transitionEnd",()=>{e.params.lazy.enabled&&!e.params.lazy.loadOnTransitionStart&&(e.params.lazy.checkInView?n():g())}),c("slideChange",()=>{const{lazy:s,cssMode:m,watchSlidesProgress:r,touchReleaseOnEdges:f,resistanceRatio:a}=e.params;s.enabled&&(m||r&&(f||a===0))&&g()}),c("destroy",()=>{!e.$el||e.$el.find(`.${e.params.lazy.loadingClass}`).removeClass(e.params.lazy.loadingClass)}),Object.assign(e.lazy,{load:g,loadInSlide:p})}function L({swiper:e,extendParams:S,on:c}){S({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let x=!1,N=!1;e.thumbs={swiper:null};function k(){const n=e.thumbs.swiper;if(!n||n.destroyed)return;const s=n.clickedIndex,m=n.clickedSlide;if(m&&E(m).hasClass(e.params.thumbs.slideThumbActiveClass)||typeof s>"u"||s===null)return;let r;if(n.params.loop?r=parseInt(E(n.clickedSlide).attr("data-swiper-slide-index"),10):r=s,e.params.loop){let f=e.activeIndex;e.slides.eq(f).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,f=e.activeIndex);const a=e.slides.eq(f).prevAll(`[data-swiper-slide-index="${r}"]`).eq(0).index(),l=e.slides.eq(f).nextAll(`[data-swiper-slide-index="${r}"]`).eq(0).index();typeof a>"u"?r=l:typeof l>"u"?r=a:l-f<f-a?r=l:r=a}e.slideTo(r)}function p(){const{thumbs:n}=e.params;if(x)return!1;x=!0;const s=e.constructor;if(n.swiper instanceof s)e.thumbs.swiper=n.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(G(n.swiper)){const m=Object.assign({},n.swiper);Object.assign(m,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new s(m),N=!0}return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",k),!0}function g(n){const s=e.thumbs.swiper;if(!s||s.destroyed)return;const m=s.params.slidesPerView==="auto"?s.slidesPerViewDynamic():s.params.slidesPerView;let r=1;const f=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(r=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(r=1),r=Math.floor(r),s.slides.removeClass(f),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let t=0;t<r;t+=1)s.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex+t}"]`).addClass(f);else for(let t=0;t<r;t+=1)s.slides.eq(e.realIndex+t).addClass(f);const a=e.params.thumbs.autoScrollOffset,l=a&&!s.params.loop;if(e.realIndex!==s.realIndex||l){let t=s.activeIndex,i,d;if(s.params.loop){s.slides.eq(t).hasClass(s.params.slideDuplicateClass)&&(s.loopFix(),s._clientLeft=s.$wrapperEl[0].clientLeft,t=s.activeIndex);const u=s.slides.eq(t).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),h=s.slides.eq(t).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();typeof u>"u"?i=h:typeof h>"u"?i=u:h-t===t-u?i=s.params.slidesPerGroup>1?h:t:h-t<t-u?i=h:i=u,d=e.activeIndex>e.previousIndex?"next":"prev"}else i=e.realIndex,d=i>e.previousIndex?"next":"prev";l&&(i+=d==="next"?a:-1*a),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(i)<0&&(s.params.centeredSlides?i>t?i=i-Math.floor(m/2)+1:i=i+Math.floor(m/2)-1:i>t&&s.params.slidesPerGroup,s.slideTo(i,n?0:void 0))}}c("beforeInit",()=>{const{thumbs:n}=e.params;!n||!n.swiper||(p(),g(!0))}),c("slideChange update resize observerUpdate",()=>{g()}),c("setTransition",(n,s)=>{const m=e.thumbs.swiper;!m||m.destroyed||m.setTransition(s)}),c("beforeDestroy",()=>{const n=e.thumbs.swiper;!n||n.destroyed||N&&n.destroy()}),Object.assign(e.thumbs,{init:p,update:g})}function D({swiper:e,extendParams:S,emit:c,once:x}){S({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function N(){const g=e.getTranslate();e.setTranslate(g),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function k(){const{touchEventsData:g,touches:n}=e;g.velocities.length===0&&g.velocities.push({position:n[e.isHorizontal()?"startX":"startY"],time:g.touchStartTime}),g.velocities.push({position:n[e.isHorizontal()?"currentX":"currentY"],time:M()})}function p({currentPos:g}){const{params:n,$wrapperEl:s,rtlTranslate:m,snapGrid:r,touchEventsData:f}=e,l=M()-f.touchStartTime;if(g<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(g>-e.maxTranslate()){e.slides.length<r.length?e.slideTo(r.length-1):e.slideTo(e.slides.length-1);return}if(n.freeMode.momentum){if(f.velocities.length>1){const v=f.velocities.pop(),y=f.velocities.pop(),j=v.position-y.position,I=v.time-y.time;e.velocity=j/I,e.velocity/=2,Math.abs(e.velocity)<n.freeMode.minimumVelocity&&(e.velocity=0),(I>150||M()-v.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=n.freeMode.momentumVelocityRatio,f.velocities.length=0;let t=1e3*n.freeMode.momentumRatio;const i=e.velocity*t;let d=e.translate+i;m&&(d=-d);let u=!1,h;const C=Math.abs(e.velocity)*20*n.freeMode.momentumBounceRatio;let z;if(d<e.maxTranslate())n.freeMode.momentumBounce?(d+e.maxTranslate()<-C&&(d=e.maxTranslate()-C),h=e.maxTranslate(),u=!0,f.allowMomentumBounce=!0):d=e.maxTranslate(),n.loop&&n.centeredSlides&&(z=!0);else if(d>e.minTranslate())n.freeMode.momentumBounce?(d-e.minTranslate()>C&&(d=e.minTranslate()+C),h=e.minTranslate(),u=!0,f.allowMomentumBounce=!0):d=e.minTranslate(),n.loop&&n.centeredSlides&&(z=!0);else if(n.freeMode.sticky){let v;for(let y=0;y<r.length;y+=1)if(r[y]>-d){v=y;break}Math.abs(r[v]-d)<Math.abs(r[v-1]-d)||e.swipeDirection==="next"?d=r[v]:d=r[v-1],d=-d}if(z&&x("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(m?t=Math.abs((-d-e.translate)/e.velocity):t=Math.abs((d-e.translate)/e.velocity),n.freeMode.sticky){const v=Math.abs((m?-d:d)-e.translate),y=e.slidesSizesGrid[e.activeIndex];v<y?t=n.speed:v<2*y?t=n.speed*1.5:t=n.speed*2.5}}else if(n.freeMode.sticky){e.slideToClosest();return}n.freeMode.momentumBounce&&u?(e.updateProgress(h),e.setTransition(t),e.setTranslate(d),e.transitionStart(!0,e.swipeDirection),e.animating=!0,s.transitionEnd(()=>{!e||e.destroyed||!f.allowMomentumBounce||(c("momentumBounce"),e.setTransition(n.speed),setTimeout(()=>{e.setTranslate(h),s.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(c("_freeModeNoMomentumRelease"),e.updateProgress(d),e.setTransition(t),e.setTranslate(d),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,s.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(d),e.updateActiveIndex(),e.updateSlidesClasses()}else if(n.freeMode.sticky){e.slideToClosest();return}else n.freeMode&&c("_freeModeNoMomentumRelease");(!n.freeMode.momentum||l>=n.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:N,onTouchMove:k,onTouchEnd:p}})}const K=({productImages:e})=>{var c;const S=T.exports.useRef(null);return b(V,{children:[o(A,{spaceBetween:10,navigation:!0,lazy:!0,thumbs:{swiper:(c=S.current)==null?void 0:c.swiper},modules:[Y,D,B,L],className:"mySwiper2 object-cover w-full aspect-square rounded-xl",children:e.map(x=>b(O,{children:[o("img",{alt:`Image ${x.id}`,"data-src":x.url,className:"object-cover aspect-square rounded-xl swiper-lazy"},x.id),o("div",{className:"swiper-lazy-preloader swiper-lazy-preloader-white"})]},x.id))}),o(A,{ref:S,spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0,modules:[D,B,L],className:"mySwiper object-cover h-28 sm:h-44 w-full aspect-square rounded-xl",children:e.map(x=>o(O,{children:o("img",{alt:`Image ${x.id}`,src:x.url,className:"object-cover w-full aspect-square rounded-xl"},x.id)},x.id))})]})},se=()=>{const e=_(),S=U(),[c,x]=T.exports.useState(),[N,k]=T.exports.useState(!1),[p,g]=T.exports.useState(!1),[n,s]=T.exports.useState(1),m=async()=>{var a,l;try{const{data:t}=await $.get(`/api/v1/shop/${e.slug}`);x(t.response)}catch(t){const i=(l=(a=t.response)==null?void 0:a.data)==null?void 0:l.message;console.log(i)}},r=async()=>{var a,l;try{g(!0);const{data:t}=await $.post("/api/v1/cart",{product_id:c==null?void 0:c.id,qty:n});S(R.setCart(t.response.data)),P("success",t.message)}catch(t){const i=(l=(a=t.response)==null?void 0:a.data)==null?void 0:l.message;console.log(i),t.response.status===401&&P("error","Please login first to add to cart.")}finally{g(!1)}},f=a=>{Number(a.target.value)<=0?s(1):s(Number(a.target.value))};return T.exports.useEffect(()=>{m()},[]),o(V,{children:c&&o("div",{className:"py-5 container mx-auto",children:o("div",{className:"grid mb-5",children:o("section",{children:o("div",{className:"relative max-w-screen-xl px-4 py-8 mx-auto",children:b("div",{className:"grid items-start grid-cols-1 gap-8 md:grid-cols-2",children:[o("div",{className:"grid grid-cols-1 gap-4",children:o(K,{productImages:c.productImages})}),b("div",{className:"sticky top-0",children:[b("div",{className:"flex justify-between mt-8",children:[b("div",{className:" max-w-md",children:[o("h1",{className:"text-2xl font-bold",children:c==null?void 0:c.name}),o("p",{className:"mt-0.5 text-sm",children:"Highest Rated Product"}),b("div",{className:"mt-2 -ml-0.5 flex",children:[o("svg",{className:"w-5 h-5 text-yellow-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:o("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),o("svg",{className:"w-5 h-5 text-yellow-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:o("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),o("svg",{className:"w-5 h-5 text-yellow-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:o("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),o("svg",{className:"w-5 h-5 text-yellow-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:o("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),o("svg",{className:"w-5 h-5 text-gray-200",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:o("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})})]})]}),o("p",{className:"text-lg font-bold",children:F(+c.actual_price)})]}),b("div",{className:"mt-4",children:[o("div",{className:"overflow-ellipsis",children:o("p",{children:H(c.description,N?1e4:400)})}),o("span",{className:"mt-4 text-sm font-medium underline cursor-pointer",onClick:()=>k(!N),children:N?"Read Less":"Read More"})]}),b("div",{className:"mt-8",children:[b("div",{className:"mb-1 flex",children:[o("p",{className:"text-sm font-medium",children:"Category: "}),o("p",{className:"text-sm ml-2",children:c.category.name})]}),b("div",{className:"mb-1 flex",children:[o("p",{className:"text-sm font-medium",children:"Brand: "}),o("p",{className:"text-sm ml-2",children:c.brand.name})]}),b("div",{className:"mb-1 flex",children:[o("p",{className:"text-sm font-medium",children:"SKU: "}),o("p",{className:"text-sm ml-2",children:c.sku})]}),b("div",{className:"mb-1 flex",children:[o("p",{className:"text-sm font-medium",children:"Stock: "}),o("p",{className:"text-sm ml-2",children:c.stock})]})]}),b("form",{className:"mt-8",children:[b("fieldset",{className:"mt-4",children:[o("legend",{className:"mb-1 text-sm font-medium",children:"Size"}),o("div",{className:"flow-root",children:b("div",{className:"-m-0.5 flex flex-wrap",children:[b("label",{htmlFor:"size_xs",className:"cursor-pointer p-0.5",children:[o("input",{type:"radio",name:"size",id:"size_xs",className:"sr-only peer",value:"XS"}),o("span",{className:"inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white",children:"XS"})]}),b("label",{htmlFor:"size_s",className:"cursor-pointer p-0.5",children:[o("input",{type:"radio",name:"size",id:"size_s",className:"sr-only peer",value:"S"}),o("span",{className:"inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white",children:"S"})]}),b("label",{htmlFor:"size_m",className:"cursor-pointer p-0.5",children:[o("input",{type:"radio",name:"size",id:"size_m",className:"sr-only peer",value:"M"}),o("span",{className:"inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white",children:"M"})]}),b("label",{htmlFor:"size_l",className:"cursor-pointer p-0.5",children:[o("input",{type:"radio",name:"size",id:"size_l",className:"sr-only peer",value:"L"}),o("span",{className:"inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white",children:"L"})]}),b("label",{htmlFor:"size_xl",className:"cursor-pointer p-0.5",children:[o("input",{type:"radio",name:"size",id:"size_xl",className:"sr-only peer",value:"XL"}),o("span",{className:"inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white",children:"XL"})]})]})})]}),b("div",{className:"flex w-full h-12 mt-8 gap-2",children:[o("input",{type:"number",min:1,max:99,defaultValue:n,onBlur:f,className:"w-auto text-center p-2 text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500"}),o(q,{className:"px-3 py-2 text-center bg-[#212529] text-white hover:bg-[#424649] w-full rounded-md text-md md:text-md md:font-semibold disabled:bg-[#999FA4] disabled:text-[#F5F5F5]",btnText:"Add to cart",loading:p,onClick:r})]})]})]})]})})})})})})};export{se as Product,se as default};
