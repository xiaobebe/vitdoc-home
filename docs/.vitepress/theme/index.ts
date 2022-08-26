import Theme from 'vitepress/theme'
import './styles/vars.css'
import SvgImage from './components/SvgImage.vue'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('SvgImage', SvgImage)
  }
}
