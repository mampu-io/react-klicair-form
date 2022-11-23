import '!style-loader!css-loader!../public/adminlte/plugins/fontawesome/css/all.min.css';
import '../src/styles/globals.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
}
