/**
 * jQuery
 */
import $ from 'jquery';
window.$ = $;
window.jQuery = $;

/**
 * Bootstrap
 */
import './vendor/bootstrap';

/**
 * Bootstrap Ccolorpicker
 */
import 'bootstrap-colorpicker';
import 'bootstrap-colorpicker/dist/css/bootstrap-colorpicker.css';

/**
 * Font Awesome
 */
import 'font-awesome/scss/font-awesome.scss';

/**
 * External modules
 * TODO: get by npm
 */
import './vendor/animate';
import './vendor/bootstrap-confirmation';
import './vendor/bootstrap-datetimepicker';
import './vendor/bootstrap-notify';
import './vendor/select2';
import './vendor/ekko-lightbox';
import './vendor/theme';

/**
 * Components
 */
import './components';

/**
 * Handlers
 */
import './handlers';

/**
 * Styles
 */
import './styles/index.scss';

$('#toggle-menu').on('click', function () {
    if($(this).hasClass('main')) {
        console.log('has main');
        $(this).removeClass('main');
        $(this).find('span').text('Меню ящиков');
        $('.left_col').css('background', '#1f587a');
    } else {
        console.log('no main');
        $(this).addClass('main');
        $(this).find('span').text('Меню товаров');
        $('.left_col').css('background', '#43667B');
    }
    $(document.querySelectorAll('.main-menu')).toggle();
    $(document.querySelectorAll('.box-menu')).toggle();
});

/**
 * Modules loader
 */
const path = location.pathname.split('/');
if (path.length > 1) {
    /**
     * To creating different files for each module
     * (Don't forget npm i --save-dev bundle-loader)
     * const context = require.context('bundle-loader!modules', true, /index\.js$/);
     */
    const modules = require.context('modules', true, /\.\/[\w-_]+\/module\.js$/);
    modules.keys().map(module => {
        const moduleItems = module.split('/');

        if (moduleItems[1] === path[1]) {
            console.log('MODULE:', path[1]);
            modules(module);
        }
    });

    const subModules = require.context('modules', true, /modules(.*)module\.js$/);
    subModules.keys().map(module => {
        const moduleItems = module.split('/');

        if (moduleItems[1] === path[1] && moduleItems[3] === path[2]) {
            console.log('SUB MODULE:', path[2]);
            subModules(module);
        }
    });
}
