System.register('xengine/mdeditor/main', ['flarum/extend', 'flarum/app', 'flarum/components/ComposerBody', 'flarum/components/Composer'], function (_export) {
    'use strict';

    var extend, app, ComposerBody, Composer;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumApp) {
            app = _flarumApp['default'];
        }, function (_flarumComponentsComposerBody) {
            ComposerBody = _flarumComponentsComposerBody['default'];
        }, function (_flarumComponentsComposer) {
            Composer = _flarumComponentsComposer['default'];
        }],
        execute: function () {

            app.initializers.add('xengine-mdeditor', function () {
                extend(ComposerBody.prototype, 'init', function init() {
                    var simplemde = new SimpleMDE({ element: this.editor.element });
                });
            });

            //zunk
        }
    };
});