/**
 * Files injected into index.html by gulp-inject
 * used by tasks inject & watch
 */

module.exports = [
  'client/app/app.js',
  'client/app/home/*.js',
  'client/components/**/*.js', 
  '!client/**/*.spec.js',
  '!client/**/*.e2e.js'
];
