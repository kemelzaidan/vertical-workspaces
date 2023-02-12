/**
 * Vertical Workspaces
 * layout.js
 *
 * panel barrier should follow panel position
 * or disable it to not collide with Custom Hot Corners barriers
 *
 * @author     GdH <G-dH@github.com>
 * @copyright  2022 - 2023
 * @license    GPL-3.0
 *
 */

'use strict';

const { Meta } = imports.gi;

const Main = imports.ui.main;
const Layout = imports.ui.layout;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const _Util = Me.imports.util;

let _overrides;
let opt;

function update(reset = false) {
    if (_overrides)
        _overrides.removeAll();


    if (reset) {
        _overrides = null;
        opt = null;
        return;
    }

    opt = Me.imports.settings.opt;

    _overrides = new _Util.Overrides();

    _overrides.addOverride('LayoutManager', Layout.LayoutManager.prototype, LayoutManager);

    Main.layoutManager._updatePanelBarrier();
}

var LayoutManager = {
    _updatePanelBarrier() {
        if (this._rightPanelBarrier) {
            this._rightPanelBarrier.destroy();
            this._rightPanelBarrier = null;
        }

        // disable the barrier


        /* if (!this.primaryMonitor)
            return;

        if (this.panelBox.height) {
            let primary = this.primaryMonitor;

            this._rightPanelBarrier = new Meta.Barrier({
                display: global.display,
                x1: primary.x + primary.width, y1: opt.PANEL_POSITION_TOP ? primary.y : primary.y + primary.height - this.panelBox.height,
                x2: primary.x + primary.width, y2: opt.PANEL_POSITION_TOP ? primary.y + this.panelBox.height : primary.y + primary.height,
                directions: Meta.BarrierDirection.NEGATIVE_X,
            });
        } */
    },
};
