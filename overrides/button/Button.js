Ext.define("override.buton.Button", {
    override: "Ext.button.Button",
    showMenu: function (clickEvent) {
        var me = this,
            menu = me.menu,
            isPointerEvent = !clickEvent || clickEvent.pointerType;
        if (menu && me.rendered) {
            if (me.tooltip && Ext.quickTipsActive && me.getTipAttr() !== 'title') {
                Ext.tip.QuickTipManager.getQuickTip().cancelShow(me.el);
            }
            if (menu.isVisible()) {
                // Click/tap toggles the menu visibility.
                if (isPointerEvent) {
                    menu.hide();
                } else {
                    menu.focus();
                }
            } else if (!clickEvent || me.showEmptyMenu || menu.items.getCount() > 0) {
                // Pointer-invoked menus do not auto focus, key invoked ones do.
                // Note that this behavior is inconsistent with WAI-ARIA specification
                // requirements, per which only Down Arrow key should activate the menu;
                // pressing Space or Enter key should open the menu but not focus it.
                // However no other accessible framework implements it that way;
                // both Dojo and YUI will activate the menu on either Space, Enter, or
                // Down Arrow keys. Furthermore, testing with JAWS screen reader
                // proved that this non-standard behavior is in fact expected since
                // JAWS will announce a menu button as follows: <name> button menu,
                // Press Space to activate the menu then navigate with arrow keys.
                // So without further ado we choose to keep the existing historical
                // Ext JS behavior which, by coincidence, happens to be congruent
                // with the industry standard. :)
                menu.autoFocus = !isPointerEvent;
                menu.showBy(me.el, me.menuAlign);
            }
            if (me.menuAlign == "tr") {
                var offset_Y = Ext.getBody().getHeight() - (menu.getHeight() + menu.getY());
                if (offset_Y < 0) {
                    menu.setY(menu.getY() + offset_Y);
                }
                if(menu.getHeight()>=Ext.getBody().getHeight()){
                    menu.setHeight(Ext.getBody().getHeight());
                }
            }
        }
        return me;
    },
})