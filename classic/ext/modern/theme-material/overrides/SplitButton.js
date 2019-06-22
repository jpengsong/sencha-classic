Ext.define('Ext.theme.material.SplitButton', {
    override: 'Ext.SplitButton',

    config: {
        splitRipple: {
            delegate: '.x-splitInner-el'
        },

        arrowRipple: {
            delegate: '.x-splitArrow-el'
        }
    }
});

