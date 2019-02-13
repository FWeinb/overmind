import { OnInitialize } from 'overmind'

const onInitialize: OnInitialize = ({ effects, state }, app) => {
  state.showViewHelp = !effects.storage.get('theme')
  state.isPreRelease = effects.isPreRelease()

  effects.router.route('/', app.actions.openHome)
  effects.router.route('/guides', app.actions.openGuides)
  effects.router.route('/guides/:type/:title', app.actions.openGuide)
  effects.router.route('/videos', app.actions.openVideos)
  effects.router.route('/videos/:title', app.actions.openVideo)
  effects.router.route('/api/:title', app.actions.openApi)
  effects.router.redirect('/api', '/api/action')

  effects.router.start()
}

export default onInitialize
