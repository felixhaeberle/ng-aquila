export class NxDefaultIcons {
  'chevron-down'?: string;
  'chevron-up'?: string;
  'chevron-right'?: string;
  'exclamation-triangle'?: string;
  'check-circle'?: string;
  'check'?: string;
  'chevron-right-small'?: string;
  'chevron-left'?: string;
  'close'?: string;
  'trash-o'?: string;
  'password-show-o'?: string;
  'password-hide-o'?: string;
  'info-circle'?: string;
  'exclamation-circle'?: string;
  'exclamation-circle-warning'?: string;
  'arrow-first'?: string;
  'arrow-left'?: string;
  'arrow-right'?: string;
  'arrow-last'?: string;
  'star'?: string;
  'star-o'?: string;
  'chevron-left-small'?: string;
  'chevron-up-small'?: string;
  'chevron-down-small'?: string;
  'play'?: string;
  'plus'?: string;
  'minus'?: string;
  'ellipsis-h'?: string;
  'ellipsis-v'?: string;
  'calendar'?: string;
}

export const DEFAULT_ICONS: { [k: string]: string } = {
  'chevron-down': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32" xml:space="preserve"><path d="M16 22 6 12l1.4-1.4 8.6 8.6 8.6-8.6L26 12z"/><path style="fill:none" d="M0 0h32v32H0z" fill="currentColor"/></svg>',
  'chevron-right': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32" xml:space="preserve"><path d="M22 16 12 26l-1.4-1.4 8.6-8.6-8.6-8.6L12 6z"/><path style="fill:none" d="M0 0h32v32H0z" fill="currentColor"/></svg>',
  'chevron-left': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32" xml:space="preserve"><path d="M10 16 20 6l1.4 1.4-8.6 8.6 8.6 8.6L20 26z"/><path style="fill:none" d="M0 0h32v32H0z" fill="currentColor"/></svg>',
  'chevron-up': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32" xml:space="preserve"><path d="m16 10 10 10-1.4 1.4-8.6-8.6-8.6 8.6L6 20z"/><path style="fill:none" d="M0 0h32v32H0z" fill="currentColor"/></svg>',
    // fix small variants
  'chevron-down-small': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32" xml:space="preserve"><path d="M16 22 6 12l1.4-1.4 8.6 8.6 8.6-8.6L26 12z"/><path style="fill:none" d="M0 0h32v32H0z" fill="currentColor"/></svg>',
  'chevron-right-small': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32" xml:space="preserve"><path d="M22 16 12 26l-1.4-1.4 8.6-8.6-8.6-8.6L12 6z"/><path style="fill:none" d="M0 0h32v32H0z" fill="currentColor"/></svg>',
  'chevron-left-small': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32" xml:space="preserve"><path d="M10 16 20 6l1.4 1.4-8.6 8.6 8.6 8.6L20 26z"/><path style="fill:none" d="M0 0h32v32H0z" fill="currentColor"/></svg>',
  'chevron-up-small': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32" xml:space="preserve"><path d="m16 10 10 10-1.4 1.4-8.6-8.6-8.6 8.6L6 20z"/><path style="fill:none" d="M0 0h32v32H0z" fill="currentColor"/></svg>',
  'exclamation-triangle': '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none}</style></defs><path id="inner-path" class="cls-1" d="M16 26a1.5 1.5.0 1 1 1.5-1.5A1.5 1.5.0 0 1 16 26zm-1.125-5h2.25V12h-2.25z"/><path d="M16.002 6.1714h-.004L4.6487 27.9966 4.6506 28H27.3494l.0019-.0034zM14.875 12h2.25v9h-2.25zM16 26a1.5 1.5.0 1 1 1.5-1.5A1.5 1.5.0 0 1 16 26z"/><path d="M29 30H3a1 1 0 0 1-.8872-1.4614l13-25a1 1 0 0 1 1.7744.0l13 25A1 1 0 0 1 29 30zM4.6507 28H27.3493l.002-.0033L16.002 6.1714h-.004L4.6487 27.9967z"/><path id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" d="M0 0h32v32H0z"/></svg>',
  'exclamation-circle': '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32"><style>.st0{fill:none}.st1{opacity:0;fill-opacity:0}</style><path id="Transparent_Rectangle" class="st0" d="M0 0h32v32H0z"/><path id="Compound_Path" d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14C30 8.3 23.7 2 16 2zM14.9 8h2.2v11h-2.2V8zM16 25c-.8.0-1.5-.7-1.5-1.5S15.2 22 16 22c.8.0 1.5.7 1.5 1.5S16.8 25 16 25z"/><path id="inner-path" class="st1" d="M17.5 23.5c0 .8-.7 1.5-1.5 1.5-.8.0-1.5-.7-1.5-1.5S15.2 22 16 22C16.8 22 17.5 22.7 17.5 23.5zM17.1 8h-2.2v11h2.2V8z"/></svg>',
  'exclamation-circle-warning': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 5.925 18.076 1 12 1C5.925 1 1 5.925 1 12C1 12.38 1.02 12.755 1.057 13.125C1.433 16.822 3.64 19.979 6.757 21.673C7.069 21.842 7.389 21.996 7.719 22.136C8.705 22.553 9.766 22.831 10.875 22.943C11.246 22.98 11.621 23 12 23C12.38 23 12.755 22.98 13.125 22.943C14.235 22.831 15.295 22.553 16.282 22.136C16.612 21.996 16.932 21.842 17.244 21.673C20.361 19.979 22.568 16.822 22.944 13.125C22.981 12.755 23 12.38 23 12Z" fill="#EBBD17"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C5.9 1 1 5.9 1 12C1 18.1 5.9 23 12 23C18.1 23 23 18.1 23 12C23 5.9 18.1 1 12 1ZM11.1 6H12.9V14H11.1V6ZM12 19.2C11.3 19.2 10.8 18.6 10.8 18C10.8 17.4 11.4 16.8 12 16.8C12.6 16.8 13.2 17.4 13.2 18C13.2 18.6 12.7 19.2 12 19.2Z" fill="#EBBD17"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.2 18C13.2 18.7 12.6 19.2 12 19.2C11.4 19.2 10.8 18.6 10.8 18C10.8 17.4 11.4 16.8 12 16.8C12.6 16.8 13.2 17.3 13.2 18ZM12.9 6H11.1V14H12.9V6Z" fill="#262626"/></svg>',
  'check-circle': '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none}</style></defs><path d="M16 2A14 14 0 1 0 30 16 14 14 0 0 0 16 2zM14 21.5908l-5-5L10.5906 15 14 18.4092 21.41 11l1.5957 1.5859z"/><path id="inner-path" class="cls-1" d="M14 21.591l-5-5L10.591 15 14 18.409 21.41 11 23.005 12.585 14 21.591z"/><path id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" d="M0 0h32v32H0z"/></svg>',
  'trash-o': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none}</style></defs><title>trash-can</title><path d="M12 12h2v12H12z"/><path d="M18 12h2v12H18z"/><path d="M4 6V8H6V28a2 2 0 0 0 2 2H24a2 2 0 0 0 2-2V8h2V6zM8 28V8H24V28z"/><path d="M12 2h8v2H12z"/><path id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" d="M0 0h32v32H0z"/></svg>',
  'password-show-o': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none}</style></defs><title>view</title><path d="M30.94 15.66A16.69 16.69.0 0 0 16 5 16.69 16.69.0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69.0 0 0 16 27 16.69 16.69.0 0 0 30.94 16.34 1 1 0 0 0 30.94 15.66zM16 25c-5.3.0-10.9-3.93-12.93-9C5.1 10.93 10.7 7 16 7s10.9 3.93 12.93 9C26.9 21.07 21.3 25 16 25z" transform="translate(0 0)"/><path d="M16 10a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z" transform="translate(0 0)"/><path id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" d="M0 0h32v32H0z"/></svg>',
  'password-hide-o': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none}</style></defs><title>view--off</title><path d="M5.24 22.51l1.43-1.42A14.06 14.06.0 0 1 3.07 16C5.1 10.93 10.7 7 16 7a12.38 12.38.0 0 1 4 .72l1.55-1.56A14.72 14.72.0 0 0 16 5 16.69 16.69.0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16 16 0 0 0 5.24 22.51z"/><path d="M12 15.73a4 4 0 0 1 3.7-3.7l1.81-1.82a6 6 0 0 0-7.33 7.33z"/><path d="M30.94 15.66A16.4 16.4.0 0 0 25.2 8.22L30 3.41 28.59 2 2 28.59 3.41 30l5.1-5.1A15.29 15.29.0 0 0 16 27 16.69 16.69.0 0 0 30.94 16.34 1 1 0 0 0 30.94 15.66zM20 16a4 4 0 0 1-6 3.44L19.44 14A4 4 0 0 1 20 16zm-4 9a13.05 13.05.0 0 1-6-1.58l2.54-2.54a6 6 0 0 0 8.35-8.35l2.87-2.87A14.54 14.54.0 0 1 28.93 16C26.9 21.07 21.3 25 16 25z"/><path id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" d="M0 0h32v32H0z"/></svg>',
  'info-circle': '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none}</style></defs><path id="inner-path" class="cls-1" d="M16 8a1.5 1.5.0 1 1-1.5 1.5A1.5 1.5.0 0 1 16 8zm4 13.875H17.125v-8H13v2.25h1.875v5.75H12v2.25h8z" transform="translate(0 0)"/><path d="M16 2A14 14 0 1 0 30 16 14 14 0 0 0 16 2zm0 6a1.5 1.5.0 1 1-1.5 1.5A1.5 1.5.0 0 1 16 8zm4 16.125H12v-2.25h2.875v-5.75H13v-2.25h4.125v8H20z" transform="translate(0 0)"/><path id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" d="M0 0h32v32H0z"/></svg>',
    // discuss new arrows 
  'arrow-first': '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32"><style>.st0{fill:none}</style><path d="M14 16 24 6 25.4 7.4 16.8 16 25.4 24.6 24 26z"/><path d="M8 4h2v24H8z"/><path id="_Transparent_Rectangle_" class="st0" d="M0 0h32v32H0z"/></svg>',
  'arrow-left': '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none}</style></defs><path d="M14 26 15.41 24.59 7.83 17H28V15H7.83l7.58-7.59L14 6 4 16 14 26z"/><path id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" d="M0 0h32v32H0z"/></svg>',
  'arrow-right': '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none}</style></defs><path d="M18 6 16.57 7.393 24.15 15H4v2H24.15L16.57 24.573 18 26 28 16 18 6z"/><path id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" d="M0 0h32v32H0z"/></svg>',
  'arrow-last': '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32"><style>.st0{fill:none}</style><path d="M18 16 8 26 6.6 24.6 15.2 16 6.6 7.4 8 6z"/><path d="M22 4h2v24H22z"/><path id="_x3C_Transparent_Rectangle_x3E_" class="st0" d="M0 0h32v32H0z"/></svg>',
  'star-o': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none}</style></defs><title>star</title><path d="M16 6.52l2.76 5.58.46 1 1 .15 6.16.89L22 18.44l-.75.73.18 1 1.05 6.13-5.51-2.89L16 23l-.93.49L9.56 26.34l1-6.13.18-1L10 18.44 5.58 14.09l6.16-.89 1-.15.46-1L16 6.52M16 2l-4.55 9.22L1.28 12.69l7.36 7.18L6.9 30 16 25.22 25.1 30 23.36 19.87l7.36-7.17L20.55 11.22z"/><path id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" d="M0 0h32v32H0z"/></svg>',
  'star': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none}</style></defs><title>star--filled</title><path d="M16 2l-4.55 9.22L1.28 12.69l7.36 7.18L6.9 30 16 25.22 25.1 30 23.36 19.87l7.36-7.17L20.55 11.22z"/><path id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" d="M0 0h32v32H0z"/></svg>',
    // find fitting otions for play
  'play': '<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M15 12.3301L9 16.6603L9 8L15 12.3301Z" fill="currentColor" /> </svg>',
  'plus': '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32"><style>.st0{fill:none}</style><path d="M17 15V8H15v7H8v2h7v7h2V17h7V15z"/><path class="st0" d="M0 0h32v32H0z"/></svg>',
  'minus': '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32"><style>.st0{fill:none}</style><path d="M8 15h16v2H8z"/><path id="_x3C_Transparent_Rectangle_x3E_" class="st0" d="M0 0h32v32H0z"/></svg>',
  'check': '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none}</style></defs><path d="M13 24 4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"/><path id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" d="M0 0h32v32H0z"/></svg>',
  'ellipsis-h': '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32"><style>.st0{fill:none}</style><title>overflow-menu--horizontal</title><circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/><path id="_Transparent_Rectangle_" class="st0" d="M0 0h32v32H0z"/></svg>',
  'ellipsis-v': '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32"><style>.st0{fill:none}</style><title>overflow-menu--vertical</title><circle cx="16" cy="8" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="16" cy="24" r="2"/><path id="_Transparent_Rectangle_" class="st0" d="M0 0h32v32H0z"/></svg>',
  'calendar': '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32"><style>.st0{fill:none}</style><title>calendar</title><path d="M26 4h-4V2h-2v2h-8V2h-2v2H6C4.9 4 4 4.9 4 6v20c0 1.1.9 2 2 2h20c1.1.0 2-.9 2-2V6C28 4.9 27.1 4 26 4zm0 22H6V12h20V26zm0-16H6V6h4v2h2V6h8v2h2V6h4v4z"/><path id="_Transparent_Rectangle_" class="st0" d="M0 0h32v32H0z"/></svg>',
  'close': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><style>.close-1{fill:#000}.close-2{fill:none}</style></defs><title>close</title><path class="close-1" d="M24 9.4 22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"/><path class="close-2" d="M0 0h32v32H0z"/></svg>'
};


