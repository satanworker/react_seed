module.exports = function (shipit) {
  require('shipit-deploy')(shipit)
  require('shipit-yarn')(shipit)
  require('shipit-shared')(shipit)
  // require('shipit-pm2')(shipit)

  shipit.initConfig({
    default: {
      workspace: 'tmp/shipit',
      deployTo: '/home/deploy/pragmatico',
      repositoryUrl: 'https://github.com/satanworker/ico_calendar/',
      ignores: ['.git', 'node_modules', 'tmp', '.DS_Store', 'bower_components', 'build', 'out'],
      rsync: ['--del'],
      keepReleases: 5,
      key: '~/.ssh/id_rsa',
      shallowClone: true,

      shared: {
        overwrite: true,
        files: [
          '.env',
          {
            path: '.env',
            overwrite: false,
            chmod: '755'
          }
        ]
      }
    },

    staging: {
      servers: 'deploy@78.155.217.67',
      branch: 'develop'
    },

    production: {
      servers: 'deploy@62.75.139.128',
      branch: 'develop'
    }
    // staging: {
    //   servers: 'deploy@204.236.208.150',
    //   branch: 'master'
    // }

  })

  shipit.task('build', function () {
    shipit.remote('cd ' + shipit.config.deployTo + '/current && ' + 'env NODE_ENV=\'production\' yarn run build', function () {
      shipit.emit('built')
    })
  })

  shipit.on('published', function () {
    shipit.start('build')
  })

}
