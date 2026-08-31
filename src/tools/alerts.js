import { z } from 'zod';
import { jsonResult } from './_format.js';
import * as core from '../core/alerts.js';
import { getClient } from '../connection.js';

export function registerAlertTools(server) {
  server.tool('alert_create', 'Create a price-crossing alert on a TradingView chart. Optionally switches the chart to the given symbol first.', {
    symbol: z.string().optional().describe('Optional: switch chart to this symbol first (e.g., NASDAQ:RKLB, SZSE:300308)'),
    price: z.coerce.number().describe('Price level to trigger the alert'),
    condition: z.enum(['crossing']).default('crossing').describe('Trigger condition (only "crossing" supported)'),
    message: z.string().optional().describe('Alert message text shown when triggered'),
  }, async ({ symbol, price, condition, message }) => {
    try {
      return jsonResult(await core.create({ symbol, price, condition, message }));
    } catch (err) {
      try {
        const c = await getClient();
        await c.Input.dispatchKeyEvent({ type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
        await c.Input.dispatchKeyEvent({ type: 'keyUp', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
      } catch (_) {}
      return jsonResult({ success: false, error: err.message }, true);
    }
  });

  server.tool('alert_list', 'List active alerts', {}, async () => {
    try { return jsonResult(await core.list()); }
    catch (err) { return jsonResult({ success: false, error: err.message }, true); }
  });

  server.tool('alert_delete', 'Delete all alerts or open context menu for deletion', {
    delete_all: z.coerce.boolean().optional().describe('Delete all alerts'),
  }, async ({ delete_all }) => {
    try { return jsonResult(await core.deleteAlerts({ delete_all })); }
    catch (err) { return jsonResult({ success: false, error: err.message }, true); }
  });
}
