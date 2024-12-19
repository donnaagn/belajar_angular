
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/fakultas"
  },
  {
    "renderMode": 2,
    "route": "/prodi"
  },
  {
    "renderMode": 2,
    "route": "/mahasiswa"
  },
  {
    "renderMode": 2,
    "route": "/auth"
  },
  {
    "renderMode": 2,
    "redirectTo": "/auth",
    "route": "/**"
  }
],
  assets: new Map([
['index.csr.html', {size: 4973, hash: '060e6eeb1deb2b01a39b139dd66344e54fb7a52b1d47e196969ca0d5e49d2f36', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1072, hash: 'a223e564359962694e09455242cd9d900833811d6ece8bbab99dc25b0d94bf72', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['prodi/index.html', {size: 11300, hash: '5dfb28ec647741cd11ec15789273ef033a54fe7bce4e179b0274a5c330a02eca', text: () => import('./assets-chunks/prodi_index_html.mjs').then(m => m.default)}], 
['mahasiswa/index.html', {size: 11300, hash: '5dfb28ec647741cd11ec15789273ef033a54fe7bce4e179b0274a5c330a02eca', text: () => import('./assets-chunks/mahasiswa_index_html.mjs').then(m => m.default)}], 
['fakultas/index.html', {size: 11300, hash: '5dfb28ec647741cd11ec15789273ef033a54fe7bce4e179b0274a5c330a02eca', text: () => import('./assets-chunks/fakultas_index_html.mjs').then(m => m.default)}], 
['index.html', {size: 11373, hash: 'ff6105338161ceb608e8ded595f767d65be5b92a9282d7d6a902230e45dfd548', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['auth/index.html', {size: 17371, hash: 'd1064372cc1d2081320a8c79e97c9255307a4cf5c765e682575ebea278bd87eb', text: () => import('./assets-chunks/auth_index_html.mjs').then(m => m.default)}], 
['styles-DZ6UBGXD.css', {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
